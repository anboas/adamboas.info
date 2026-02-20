const ALL_TYPES = ['paper', 'note', 'memo'];
const PAGE_SIZE = 10;

function norm(s) {
	return (s ?? '').toString().trim().toLowerCase();
}

function getTypeToggles() {
	return [...document.querySelectorAll('[data-writing-type-toggle]')];
}

function getSelectedTypes() {
	return getTypeToggles()
		.filter((btn) => btn.getAttribute('aria-pressed') !== 'false')
		.map((btn) => btn.getAttribute('data-writing-type-toggle'))
		.filter(Boolean);
}

function setSelectedTypes(types) {
	const wanted = new Set((types ?? []).map(norm));
	for (const btn of getTypeToggles()) {
		const type = norm(btn.getAttribute('data-writing-type-toggle'));
		btn.setAttribute('aria-pressed', wanted.has(type) ? 'true' : 'false');
	}
}

function parseTypesFromUrl(url) {
	const typesParam = url.searchParams.get('types');
	if (typesParam) {
		const parsed = typesParam
			.split(',')
			.map((x) => norm(x))
			.filter((x) => ALL_TYPES.includes(x));
		if (parsed.length) return [...new Set(parsed)];
	}

	const legacyType = norm(url.searchParams.get('type'));
	if (legacyType && legacyType !== 'all' && ALL_TYPES.includes(legacyType)) {
		return [legacyType];
	}

	return [...ALL_TYPES];
}

function parsePageFromUrl(url) {
	const raw = Number(url.searchParams.get('page') || '1');
	if (!Number.isFinite(raw) || raw < 1) return 1;
	return Math.floor(raw);
}

const root = document.querySelector('[data-writing-index]');
if (!root) {
	// no-op outside writing index page
} else {
	const list = root.querySelector('[data-writing-list]');
	const cards = [...root.querySelectorAll('[data-writing-card]')];
	const empty = root.querySelector('[data-writing-empty]');
	const pagination = root.querySelector('[data-writing-pagination]');
	const pagePrev = root.querySelector('[data-writing-page-prev]');
	const pageNext = root.querySelector('[data-writing-page-next]');
	const pageLabel = root.querySelector('[data-writing-page-label]');
	const pageStatus = root.querySelector('[data-writing-pagination-status]');

	let currentPage = 1;

	function syncFromUrl() {
		const url = new URL(window.location.href);
		const q = url.searchParams.get('q');
		const inp = document.querySelector('[data-writing-search]');
		if (inp) inp.value = q || '';
		setSelectedTypes(parseTypesFromUrl(url));
		currentPage = parsePageFromUrl(url);
	}

	function updateUrl() {
		const url = new URL(window.location.href);
		const q = norm(document.querySelector('[data-writing-search]')?.value);
		const selected = getSelectedTypes();

		if (selected.length === ALL_TYPES.length) {
			url.searchParams.delete('types');
		} else {
			url.searchParams.set('types', selected.join(','));
		}

		url.searchParams.delete('type');

		if (q) url.searchParams.set('q', q);
		else url.searchParams.delete('q');

		if (currentPage > 1) url.searchParams.set('page', String(currentPage));
		else url.searchParams.delete('page');

		window.history.replaceState({}, '', url);
	}

	function clearFilters() {
		const inp = document.querySelector('[data-writing-search]');
		if (inp) inp.value = '';
		setSelectedTypes(ALL_TYPES);
		currentPage = 1;
		applyFilter({ preservePage: true });
	}

	function renderChips() {
		const chips = root.querySelector('[data-writing-chips]');
		if (!chips) return;

		const q = norm(document.querySelector('[data-writing-search]')?.value);
		chips.innerHTML = '';
		const mk = (label, onClick) => {
			const b = document.createElement('button');
			b.type = 'button';
			b.className = 'rounded-full border border-slate-800 bg-slate-950 px-2 py-1 text-xs text-slate-200 hover:bg-slate-900';
			b.textContent = `${label} ×`;
			b.addEventListener('click', onClick);
			chips.appendChild(b);
		};

		if (q) {
			mk(`Query: ${q}`, () => {
				const inp = document.querySelector('[data-writing-search]');
				if (inp) inp.value = '';
				currentPage = 1;
				applyFilter({ preservePage: true });
			});
		}
	}

	function renderPagination(totalMatches, pageStartIdx, pageEndIdx, totalPages) {
		if (!pagination || !pagePrev || !pageNext || !pageLabel || !pageStatus) return;
		const show = totalMatches > PAGE_SIZE;
		pagination.classList.toggle('hidden', !show);
		if (!show) return;

		pagePrev.disabled = currentPage <= 1;
		pageNext.disabled = currentPage >= totalPages;
		pageLabel.textContent = `Page ${currentPage} of ${totalPages}`;
		pageStatus.textContent = `${pageStartIdx + 1}-${pageEndIdx} of ${totalMatches}`;
	}

	function applyFilter({ preservePage = false } = {}) {
		const q = norm(document.querySelector('[data-writing-search]')?.value);
		const selected = new Set(getSelectedTypes());
		if (!preservePage) currentPage = 1;

		const matches = cards.filter((el) => {
			const t = norm(el.getAttribute('data-title'));
			const tags = norm(el.getAttribute('data-tags'));
			const elType = norm(el.getAttribute('data-type'));

			if (selected.size === 0) return false;
			if (!selected.has(elType)) return false;
			if (q && !(t.includes(q) || tags.includes(q))) return false;
			return true;
		});

		const totalPages = Math.max(1, Math.ceil(matches.length / PAGE_SIZE));
		if (currentPage > totalPages) currentPage = totalPages;
		const pageStartIdx = (currentPage - 1) * PAGE_SIZE;
		const pageCards = matches.slice(pageStartIdx, pageStartIdx + PAGE_SIZE);
		const pageEndIdx = pageStartIdx + pageCards.length;

		for (const el of cards) el.classList.add('hidden');
		for (const el of pageCards) {
			el.classList.remove('hidden');
			if (list) list.appendChild(el);
		}

		if (empty) empty.classList.toggle('hidden', matches.length !== 0);
		renderChips();
		renderPagination(matches.length, pageStartIdx, pageEndIdx, totalPages);
		updateUrl();
	}

	function applyTag(tag) {
		const inp = document.querySelector('[data-writing-search]');
		if (inp) inp.value = tag;
		currentPage = 1;
		applyFilter({ preservePage: true });
	}

	const searchInput = document.querySelector('[data-writing-search]');
	if (searchInput) {
		searchInput.addEventListener('input', () => applyFilter());
		searchInput.addEventListener('change', () => applyFilter());
	}

	for (const btn of getTypeToggles()) {
		btn.addEventListener('click', () => {
			const currentlyOn = btn.getAttribute('aria-pressed') !== 'false';
			btn.setAttribute('aria-pressed', currentlyOn ? 'false' : 'true');
			applyFilter();
		});
	}

	root.addEventListener('click', (e) => {
		const btn = e.target?.closest?.('[data-writing-tag]');
		if (!btn) return;
		e.preventDefault();
		applyTag(btn.getAttribute('data-writing-tag') || '');
	});

	const clearBtn = document.querySelector('[data-writing-clear]');
	if (clearBtn) clearBtn.addEventListener('click', () => clearFilters());

	pagePrev?.addEventListener('click', () => {
		if (currentPage <= 1) return;
		currentPage -= 1;
		applyFilter({ preservePage: true });
	});

	pageNext?.addEventListener('click', () => {
		currentPage += 1;
		applyFilter({ preservePage: true });
	});

	syncFromUrl();
	applyFilter({ preservePage: true });
}
