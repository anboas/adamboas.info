const app = document.querySelector('[data-cgcyber-research]');

const chartState = {
	scale: 1,
	x: 0,
	y: 0,
	focusX: 0.42,
	focusY: 0.2,
	dragging: false,
	startX: 0,
	startY: 0,
	originX: 0,
	originY: 0,
};

const tableConfigs = [
	{
		key: 'org',
		countLabel: 'org rows',
		csvDataset: 'orgCsvUrl',
		searchSelector: '[data-org-search]',
		filterSelector: '[data-org-filter]',
		sortSelector: '[data-org-sort-key]',
		bodySelector: '[data-org-body]',
		countSelector: '[data-org-count]',
		columns: [
			['ID', 'cell-id'],
			['Node', 'cell-name'],
			['Role', 'cell-role'],
			['Status', 'cell-status'],
			['IOM Relevance', 'cell-relation'],
			['Code', 'cell-code'],
			['Domain', 'cell-domain'],
			['Type', 'cell-type'],
			['Evidence', 'cell-evidence'],
			['Confidence', 'cell-confidence'],
			['Source Refs', 'cell-source-ref'],
			['Source URL', 'cell-source'],
		],
		statusColumn: 'Status',
		badgeColumn: 'Status',
	},
	{
		key: 'contracts',
		countLabel: 'contract rows',
		csvDataset: 'contractsCsvUrl',
		searchSelector: '[data-contracts-search]',
		filterSelector: '[data-contracts-filter]',
		sortSelector: '[data-contracts-sort-key]',
		bodySelector: '[data-contracts-body]',
		countSelector: '[data-contracts-count]',
		columns: [
			['ID', 'cell-id'],
			['Program', 'cell-name'],
			['Prime', 'cell-entity'],
			['Status', 'cell-status'],
			['IOM Seam / Relevance', 'cell-relation'],
			['Award / Forecast ID', 'cell-code'],
			['Value / Term', 'cell-role'],
			['Scope', 'cell-evidence'],
			['Confidence', 'cell-confidence'],
			['Source Refs', 'cell-source-ref'],
			['Source URL', 'cell-source'],
		],
		statusColumn: 'Status',
		badgeColumn: 'Status',
	},
	{
		key: 'competitors',
		countLabel: 'rows',
		csvDataset: 'competitorsCsvUrl',
		searchSelector: '[data-competitors-search]',
		filterSelector: '[data-competitors-filter]',
		sortSelector: '[data-competitors-sort-key]',
		bodySelector: '[data-competitors-body]',
		countSelector: '[data-competitors-count]',
		columns: [
			['ID', 'cell-id'],
			['Entity', 'cell-name'],
			['Tier', 'cell-status'],
			['Recommended Posture', 'cell-relation'],
			['Power Base', 'cell-role'],
			['Gap / Vulnerability', 'cell-evidence'],
			['Vehicle', 'cell-type'],
			['Confidence', 'cell-confidence'],
			['Source Refs', 'cell-source-ref'],
			['Source URL', 'cell-source'],
		],
		statusColumn: 'Tier',
		badgeColumn: 'Tier',
	},
	{
		key: 'actions',
		countLabel: 'actions',
		csvDataset: 'actionsCsvUrl',
		searchSelector: '[data-actions-search]',
		filterSelector: '[data-actions-filter]',
		sortSelector: '[data-actions-sort-key]',
		bodySelector: '[data-actions-body]',
		countSelector: '[data-actions-count]',
		columns: [
			['ID', 'cell-id'],
			['When', 'cell-code'],
			['Owner', 'cell-name'],
			['Priority', 'cell-status'],
			['Action', 'cell-evidence'],
			['Output', 'cell-role'],
		],
		statusColumn: 'Priority',
		badgeColumn: 'Priority',
	},
	{
		key: 'sources',
		countLabel: 'sources',
		csvDataset: 'sourcesCsvUrl',
		searchSelector: '[data-sources-search]',
		filterSelector: '[data-sources-filter]',
		sortSelector: '[data-sources-sort-key]',
		bodySelector: '[data-sources-body]',
		countSelector: '[data-sources-count]',
		columns: [
			['ID', 'cell-id'],
			['Title', 'cell-name'],
			['Use', 'cell-evidence'],
			['URL', 'cell-source'],
		],
		statusColumn: 'ID',
	},
];

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

function escapeHtml(value) {
	return String(value ?? '')
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
}

function renderSourceLinks(value) {
	const urls = String(value ?? '')
		.split(';')
		.map((url) => url.trim())
		.filter(Boolean);
	if (!urls.length) return '';
	return urls
		.map((url, index) => {
			const safeUrl = escapeHtml(url);
			const label = urls.length === 1 ? 'Source' : `Source ${index + 1}`;
			if (!/^https?:\/\//i.test(url)) return escapeHtml(url);
			return `<a class="source-link" href="${safeUrl}" target="_blank" rel="noopener noreferrer">${label}</a>`;
		})
		.join(' ');
}

function sortValue(row, key) {
	const value = row[key] ?? '';
	if (key === 'ID') return Number(value) || 0;
	return String(value).toLowerCase();
}

function statusKey(value) {
	const status = String(value ?? '').toLowerCase();
	if (status.includes('direct') || status.includes('current named') || status.includes('active') || status === 'high') {
		return 'current';
	}
	if (status.includes('official') || status.includes('mission') || status.includes('authority')) return 'official';
	if (status.includes('gap') || status.includes('unresolved')) return 'gap';
	if (status.includes('watch') || status.includes('forecast') || status.includes('medium')) return 'forecast';
	if (status.includes('historical') || status.includes('archived')) return 'historical';
	if (status.includes('trap') || status.includes('cancelled') || status.includes('risk')) return 'unverified';
	if (status.includes('tier 1')) return 'current';
	if (status.includes('tier 2')) return 'forecast';
	if (status.includes('tier 3')) return 'gap';
	if (status.includes('self')) return 'official';
	return 'other';
}

function initCharts(root) {
	const image = root.querySelector('[data-chart-image]');
	const stage = root.querySelector('[data-chart-stage]');
	const zoomLabel = root.querySelector('[data-chart-zoom]');
	const description = root.querySelector('[data-chart-description]');
	const download = root.querySelector('[data-chart-download]');
	const tabs = [...root.querySelectorAll('[data-chart-tab]')];
	const buttons = [...root.querySelectorAll('[data-chart-action]')];
	const initialTab = tabs.find((tab) => tab.classList.contains('chart-tab-active')) ?? tabs[0];
	chartState.focusX = Number(initialTab?.dataset.chartFocusX) || chartState.focusX;
	chartState.focusY = Number(initialTab?.dataset.chartFocusY) || chartState.focusY;

	function render() {
		image.style.transform = `translate(${chartState.x}px, ${chartState.y}px) scale(${chartState.scale})`;
		zoomLabel.textContent = `${Math.round(chartState.scale * 100)}%`;
	}

	function fit() {
		const naturalWidth = image.naturalWidth || 1200;
		const naturalHeight = image.naturalHeight || 700;
		const fitWidth = (stage.clientWidth - 24) / naturalWidth;
		const fitHeight = (stage.clientHeight - 24) / naturalHeight;
		chartState.scale = Math.min(1, Math.max(0.08, Math.min(fitWidth, fitHeight)));
		chartState.x = Math.max(10, Math.round((stage.clientWidth - naturalWidth * chartState.scale) / 2));
		chartState.y = Math.max(10, Math.round((stage.clientHeight - naturalHeight * chartState.scale) / 2));
		render();
	}

	function focus() {
		const naturalWidth = image.naturalWidth || 1200;
		const overviewScale = (stage.clientWidth - 24) / naturalWidth;
		chartState.scale = Math.min(0.58, Math.max(0.18, overviewScale * 1.05));
		chartState.x = Math.round(stage.clientWidth * 0.5 - naturalWidth * chartState.focusX * chartState.scale);
		chartState.y = Math.round(
			stage.clientHeight * 0.24 - (image.naturalHeight || 700) * chartState.focusY * chartState.scale,
		);
		render();
	}

	function reset() {
		chartState.scale = 1;
		chartState.x = 10;
		chartState.y = 10;
		render();
	}

	image.addEventListener('load', focus);
	if (image.complete) window.requestAnimationFrame(focus);
	tabs.forEach((tab) => {
		tab.addEventListener('click', () => {
			tabs.forEach((item) => item.classList.remove('chart-tab-active'));
			tab.classList.add('chart-tab-active');
			chartState.focusX = Number(tab.dataset.chartFocusX) || 0.5;
			chartState.focusY = Number(tab.dataset.chartFocusY) || 0.18;
			image.src = tab.dataset.chartSrc;
			download.href = tab.dataset.chartSrc;
			description.textContent = tab.dataset.chartTabDescription ?? '';
		});
	});

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			const action = button.dataset.chartAction;
			if (action === 'zoom-in') chartState.scale = Math.min(3, chartState.scale + 0.12);
			if (action === 'zoom-out') chartState.scale = Math.max(0.08, chartState.scale - 0.12);
			if (action === 'fit') fit();
			if (action === 'reset') reset();
			render();
		});
	});

	stage.addEventListener('pointerdown', (event) => {
		chartState.dragging = true;
		chartState.startX = event.clientX;
		chartState.startY = event.clientY;
		chartState.originX = chartState.x;
		chartState.originY = chartState.y;
		stage.setPointerCapture(event.pointerId);
	});
	stage.addEventListener('pointermove', (event) => {
		if (!chartState.dragging) return;
		chartState.x = chartState.originX + event.clientX - chartState.startX;
		chartState.y = chartState.originY + event.clientY - chartState.startY;
		render();
	});
	stage.addEventListener('pointerup', () => {
		chartState.dragging = false;
	});
	stage.addEventListener('pointercancel', () => {
		chartState.dragging = false;
	});
	window.addEventListener('resize', fit);
	reset();
}

function initTable(root, config) {
	const body = root.querySelector(config.bodySelector);
	const count = root.querySelector(config.countSelector);
	const search = root.querySelector(config.searchSelector);
	const filterInputs = [...root.querySelectorAll(config.filterSelector)];
	const sortButtons = [...root.querySelectorAll(config.sortSelector)];
	let rows = [];
	let sortKey = 'ID';
	let sortDirection = 'asc';

	function populateFilters() {
		filterInputs.forEach((input) => {
			const key = input.dataset[`${config.key}Filter`];
			const values = [...new Set(rows.map((row) => row[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b));
			input.insertAdjacentHTML(
				'beforeend',
				values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join(''),
			);
		});
	}

	function filteredRows() {
		const query = search?.value.trim().toLowerCase() ?? '';
		const activeFilters = filterInputs
			.map((input) => [input.dataset[`${config.key}Filter`], input.value])
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
		count.textContent = `${visible.length} of ${rows.length} ${config.countLabel}`;
		sortButtons.forEach((button) => {
			const active = button.dataset[`${config.key}SortKey`] === sortKey;
			button.dataset.sortState = active ? sortDirection : '';
			button
				.closest('th')
				?.setAttribute('aria-sort', active ? (sortDirection === 'asc' ? 'ascending' : 'descending') : 'none');
		});
		if (!visible.length) {
			body.innerHTML = `<tr><td colspan="${config.columns.length}" class="px-3 py-6 text-center text-sm text-slate-400">No rows match.</td></tr>`;
			return;
		}
		body.innerHTML = visible
			.map((row) => {
				const rowStatus = statusKey(row[config.statusColumn]);
				const cells = config.columns.map(([key, className]) => {
					if (key === 'Source URL' || key === 'URL')
						return `<td class="${className}">${renderSourceLinks(row[key])}</td>`;
					const value = escapeHtml(row[key]);
					if (key === config.badgeColumn) {
						return `<td class="${className}"><span class="status-badge status-${rowStatus}">${value}</span></td>`;
					}
					if (className === 'cell-name') return `<td class="${className}"><strong>${value}</strong></td>`;
					return `<td class="${className}">${value}</td>`;
				});
				return `<tr class="roster-row roster-row-${rowStatus}" tabindex="0">${cells.join('')}</tr>`;
			})
			.join('');
	}

	sortButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const nextKey = button.dataset[`${config.key}SortKey`];
			if (sortKey === nextKey) sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
			else {
				sortKey = nextKey;
				sortDirection = 'asc';
			}
			render();
		});
	});
	search?.addEventListener('input', render);
	filterInputs.forEach((input) => input.addEventListener('change', render));
	body.addEventListener('click', (event) => {
		const row = event.target.closest('.roster-row');
		if (!row) return;
		body.querySelectorAll('.roster-row-selected').forEach((item) => item.classList.remove('roster-row-selected'));
		row.classList.add('roster-row-selected');
	});

	fetch(root.dataset[config.csvDataset])
		.then((response) => {
			if (!response.ok) throw new Error(`CSV load failed: ${response.status}`);
			return response.text();
		})
		.then((text) => {
			rows = parseCsv(text);
			populateFilters();
			render();
		})
		.catch((error) => {
			body.innerHTML = `<tr><td colspan="${config.columns.length}" class="px-3 py-6 text-center text-sm text-red-200">${escapeHtml(error.message)}</td></tr>`;
			count.textContent = 'Table unavailable';
		});
}

if (app) {
	initCharts(app);
	tableConfigs.forEach((config) => initTable(app, config));
}
