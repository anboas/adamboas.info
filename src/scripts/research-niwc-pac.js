const app = document.querySelector('[data-niwc-research]');

const tableColumnMeta = [
	{ key: 'ID', className: 'cell-id' },
	{ key: 'Name / Public Node', className: 'cell-name' },
	{ key: 'Exact Public Role', className: 'cell-role' },
	{ key: 'Status Class', className: 'cell-status' },
	{ key: 'AA Relationship', className: 'cell-relation' },
	{ key: 'Org Code', className: 'cell-code' },
	{ key: 'Organization / Unit', className: 'cell-unit' },
	{ key: 'Structure Domain', className: 'cell-domain' },
	{ key: 'Hierarchy Path', className: 'cell-hierarchy' },
	{ key: 'Confidence', className: 'cell-confidence' },
	{ key: 'Source Date', className: 'cell-date' },
];

const tableColumns = tableColumnMeta.map((column) => column.key);

const internalDomains = new Set([
	'NIWC PAC core hierarchy',
	'NIWC PAC deep-code map',
	'NIWC PAC innovation interface',
	'NIWC PAC portfolio map',
	'NIWC PAC application UX interface',
	'NIWC PAC acquisition',
	'NIWC PAC industry interface',
	'NIWC PAC public interface',
	'AA chain & adjacent ecosystem',
	'Code 532 lineage',
	'NIWC PAC dated forecast contacts',
	'NIWC PAC public affairs interface',
]);

function parseCsv(text) {
	const rows = [];
	let row = [];
	let cell = '';
	let quote = false;

	for (let index = 0; index < text.length; index += 1) {
		const char = text[index];
		const next = text[index + 1];
		if (char === '"' && quote && next === '"') {
			cell += '"';
			index += 1;
		} else if (char === '"') {
			quote = !quote;
		} else if (char === ',' && !quote) {
			row.push(cell);
			cell = '';
		} else if ((char === '\n' || char === '\r') && !quote) {
			if (char === '\r' && next === '\n') index += 1;
			row.push(cell);
			if (row.some((value) => value.trim())) rows.push(row);
			row = [];
			cell = '';
		} else {
			cell += char;
		}
	}

	if (cell || row.length) {
		row.push(cell);
		if (row.some((value) => value.trim())) rows.push(row);
	}

	const header = rows.shift() ?? [];
	return rows.map((values) => Object.fromEntries(header.map((key, index) => [key, values[index] ?? ''])));
}

function statusKey(value) {
	const status = String(value ?? '').toLowerCase();
	if (status.includes('current')) return 'current';
	if (status.includes('official')) return 'official';
	if (status.includes('gap')) return 'gap';
	if (status.includes('unverified')) return 'unverified';
	if (status.includes('historical')) return 'historical';
	if (status.includes('forecast')) return 'forecast';
	if (status.includes('dated') || status.includes('revalidate')) return 'dated';
	return 'other';
}

function escapeHtml(value) {
	return String(value ?? '')
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
}

function sortValue(row, key) {
	const value = row[key] ?? '';
	if (key === 'ID') return Number(value) || 0;
	return String(value).toLowerCase();
}

function initCharts(root) {
	const image = root.querySelector('[data-chart-image]');
	const stage = root.querySelector('[data-chart-stage]');
	const zoomLabel = root.querySelector('[data-chart-zoom]');
	const description = root.querySelector('[data-chart-description]');
	const download = root.querySelector('[data-chart-download]');
	const tabs = [...root.querySelectorAll('[data-chart-tab]')];
	const buttons = [...root.querySelectorAll('[data-chart-action]')];
	const state = {
		scale: 1,
		x: 0,
		y: 0,
		focusX: Number(tabs.find((tab) => tab.classList.contains('chart-tab-active'))?.dataset.chartFocusX) || 0.5,
		focusY: Number(tabs.find((tab) => tab.classList.contains('chart-tab-active'))?.dataset.chartFocusY) || 0.16,
		dragging: false,
		startX: 0,
		startY: 0,
		originX: 0,
		originY: 0,
	};

	function render() {
		image.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
		zoomLabel.textContent = `${Math.round(state.scale * 100)}%`;
	}

	function fit() {
		const naturalWidth = image.naturalWidth || 1200;
		const naturalHeight = image.naturalHeight || 700;
		const fitWidth = (stage.clientWidth - 24) / naturalWidth;
		const fitHeight = (stage.clientHeight - 24) / naturalHeight;
		state.scale = Math.min(1, Math.max(0.06, Math.min(fitWidth, fitHeight)));
		state.x = Math.max(10, Math.round((stage.clientWidth - naturalWidth * state.scale) / 2));
		state.y = Math.max(10, Math.round((stage.clientHeight - naturalHeight * state.scale) / 2));
		render();
	}

	function focus() {
		const naturalWidth = image.naturalWidth || 1200;
		const naturalHeight = image.naturalHeight || 700;
		const overviewScale = (stage.clientWidth - 24) / naturalWidth;
		state.scale = Math.min(0.55, Math.max(0.18, overviewScale * 3.3));
		state.x = Math.round(stage.clientWidth * 0.5 - naturalWidth * state.focusX * state.scale);
		state.y = Math.round(stage.clientHeight * 0.22 - naturalHeight * state.focusY * state.scale);
		render();
	}

	function reset() {
		state.scale = 1;
		state.x = 10;
		state.y = 10;
		render();
	}

	image.addEventListener('load', focus);
	if (image.complete) window.requestAnimationFrame(focus);
	tabs.forEach((tab) => {
		tab.addEventListener('click', () => {
			tabs.forEach((item) => item.classList.remove('chart-tab-active'));
			tab.classList.add('chart-tab-active');
			state.focusX = Number(tab.dataset.chartFocusX) || 0.5;
			state.focusY = Number(tab.dataset.chartFocusY) || 0.16;
			image.src = tab.dataset.chartSrc;
			download.href = tab.dataset.chartSrc;
			description.textContent = tab.dataset.chartTabDescription ?? '';
		});
	});

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			const action = button.dataset.chartAction;
			if (action === 'zoom-in') state.scale = Math.min(2.8, state.scale + 0.12);
			if (action === 'zoom-out') state.scale = Math.max(0.08, state.scale - 0.12);
			if (action === 'fit') fit();
			if (action === 'reset') reset();
			render();
		});
	});

	stage.addEventListener('pointerdown', (event) => {
		state.dragging = true;
		state.startX = event.clientX;
		state.startY = event.clientY;
		state.originX = state.x;
		state.originY = state.y;
		stage.setPointerCapture(event.pointerId);
	});

	stage.addEventListener('pointermove', (event) => {
		if (!state.dragging) return;
		state.x = state.originX + event.clientX - state.startX;
		state.y = state.originY + event.clientY - state.startY;
		render();
	});

	stage.addEventListener('pointerup', () => {
		state.dragging = false;
	});
	stage.addEventListener('pointercancel', () => {
		state.dragging = false;
	});
	window.addEventListener('resize', fit);
	reset();
}

function initRoster(root) {
	const body = root.querySelector('[data-roster-body]');
	const count = root.querySelector('[data-roster-count]');
	const search = root.querySelector('[data-roster-search]');
	const filterInputs = [...root.querySelectorAll('[data-roster-filter]')];
	const sortButtons = [...root.querySelectorAll('[data-sort-key]')];
	const metrics = Object.fromEntries(
		[...root.querySelectorAll('[data-metric]')].map((node) => [node.dataset.metric, node]),
	);
	let rows = [];
	let sortKey = 'ID';
	let sortDirection = 'asc';

	function populateFilters() {
		filterInputs.forEach((input) => {
			const key = input.dataset.rosterFilter;
			const values = [...new Set(rows.map((row) => row[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b));
			input.insertAdjacentHTML(
				'beforeend',
				values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join(''),
			);
		});
	}

	function updateMetrics() {
		const statusCounts = rows.reduce((acc, row) => {
			const key = statusKey(row['Status Class']);
			acc[key] = (acc[key] ?? 0) + 1;
			return acc;
		}, {});
		metrics.rows.textContent = String(rows.length);
		metrics.internal.textContent = String(rows.filter((row) => internalDomains.has(row['Structure Domain'])).length);
		metrics.current.textContent = String((statusCounts.current ?? 0) + (statusCounts.official ?? 0));
		metrics.gaps.textContent = String(statusCounts.gap ?? 0);
		metrics.dated.textContent = String(
			(statusCounts.dated ?? 0) +
				(statusCounts.forecast ?? 0) +
				(statusCounts.historical ?? 0) +
				(statusCounts.unverified ?? 0),
		);
	}

	function filteredRows() {
		const query = search.value.trim().toLowerCase();
		const activeFilters = filterInputs
			.map((input) => [input.dataset.rosterFilter, input.value])
			.filter(([, value]) => value);
		return rows.filter((row) => {
			if (query && !Object.values(row).join(' ').toLowerCase().includes(query)) return false;
			return activeFilters.every(([key, value]) => row[key] === value);
		});
	}

	function render() {
		const visible = filteredRows().sort((a, b) => {
			const av = sortValue(a, sortKey);
			const bv = sortValue(b, sortKey);
			const comparison = av > bv ? 1 : av < bv ? -1 : 0;
			return sortDirection === 'asc' ? comparison : -comparison;
		});
		count.textContent = `${visible.length} of ${rows.length} rows`;
		sortButtons.forEach((button) => {
			const active = button.dataset.sortKey === sortKey;
			button.dataset.sortState = active ? sortDirection : '';
			button
				.closest('th')
				?.setAttribute('aria-sort', active ? (sortDirection === 'asc' ? 'ascending' : 'descending') : 'none');
		});
		if (!visible.length) {
			body.innerHTML =
				'<tr><td colspan="11" class="px-3 py-6 text-center text-sm text-slate-400">No rows match.</td></tr>';
			return;
		}
		body.innerHTML = visible
			.map((row) => {
				const rowStatus = statusKey(row['Status Class']);
				const cells = tableColumnMeta.map(({ key, className }) => {
					const value = escapeHtml(row[key]);
					if (key === 'Status Class') {
						return `<td class="${className}"><span class="status-badge status-${rowStatus}">${value}</span></td>`;
					}
					if (key === 'Name / Public Node') return `<td class="${className}"><strong>${value}</strong></td>`;
					return `<td class="${className}">${value}</td>`;
				});
				return `<tr class="roster-row roster-row-${rowStatus}" tabindex="0">${cells.join('')}</tr>`;
			})
			.join('');
	}

	sortButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const nextKey = button.dataset.sortKey;
			if (sortKey === nextKey) {
				sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
			} else {
				sortKey = nextKey;
				sortDirection = 'asc';
			}
			render();
		});
	});
	search.addEventListener('input', render);
	filterInputs.forEach((input) => input.addEventListener('change', render));
	body.addEventListener('click', (event) => {
		const row = event.target.closest('.roster-row');
		if (!row) return;
		body.querySelectorAll('.roster-row-selected').forEach((item) => item.classList.remove('roster-row-selected'));
		row.classList.add('roster-row-selected');
	});

	fetch(root.dataset.csvUrl)
		.then((response) => {
			if (!response.ok) throw new Error(`CSV load failed: ${response.status}`);
			return response.text();
		})
		.then((text) => {
			rows = parseCsv(text);
			populateFilters();
			updateMetrics();
			render();
		})
		.catch((error) => {
			body.innerHTML = `<tr><td colspan="11" class="px-3 py-6 text-center text-sm text-red-200">${escapeHtml(error.message)}</td></tr>`;
			count.textContent = 'Roster unavailable';
		});
}

if (app) {
	initCharts(app);
	initRoster(app);
}
