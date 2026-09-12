const ALL_TYPES = ['paper', 'note', 'memo'];
const PAGE_SIZE = 10;
const DEFAULT_SORT = 'newest';

function norm(value) {
	return (value ?? '').toString().trim().toLowerCase();
}

function parseTypes(url) {
	const requested = (url.searchParams.get('types') ?? '')
		.split(',')
		.map(norm)
		.filter((type) => ALL_TYPES.includes(type));
	return requested.length ? [...new Set(requested)] : ALL_TYPES;
}

function parsePage(url) {
	const page = Number(url.searchParams.get('page') ?? '1');
	return Number.isFinite(page) && page >= 1 ? Math.floor(page) : 1;
}

function parseSort(url) {
	const sort = norm(url.searchParams.get('sort'));
	return sort === 'oldest' || sort === 'title' ? sort : DEFAULT_SORT;
}

const root = document.querySelector('[data-writing-index]');

if (root) {
	const list = root.querySelector('[data-writing-list]');
	const cards = [...root.querySelectorAll('[data-writing-card]')];
	const typeToggles = [...root.querySelectorAll('[data-writing-type-toggle]')];
	const allTypesButton = root.querySelector('[data-writing-set-all]');
	const searchInput = root.querySelector('[data-writing-search]');
	const sortSelect = root.querySelector('[data-writing-sort]');
	const clearButton = root.querySelector('[data-writing-clear]');
	const chips = root.querySelector('[data-writing-chips]');
	const empty = root.querySelector('[data-writing-empty]');
	const pagination = root.querySelector('[data-writing-pagination]');
	const pageFirst = root.querySelector('[data-writing-page-first]');
	const pagePrevious = root.querySelector('[data-writing-page-prev]');
	const pageNext = root.querySelector('[data-writing-page-next]');
	const pageLast = root.querySelector('[data-writing-page-last]');
	const pageLabel = root.querySelector('[data-writing-page-label]');
	const pageStatus = root.querySelector('[data-writing-pagination-status]');

	let currentPage = 1;
	let totalPages = 1;

	function selectedTypes() {
		return typeToggles
			.filter((button) => button.getAttribute('aria-pressed') !== 'false')
			.map((button) => norm(button.getAttribute('data-writing-type-toggle')));
	}

	function setSelectedTypes(types) {
		const selected = new Set(types);
		for (const button of typeToggles) {
			const type = norm(button.getAttribute('data-writing-type-toggle'));
			button.setAttribute('aria-pressed', selected.has(type) ? 'true' : 'false');
		}
		syncAllTypesButton();
	}

	function syncAllTypesButton() {
		if (!allTypesButton) return;
		const selected = selectedTypes();
		const allSelected = ALL_TYPES.every((type) => selected.includes(type));
		allTypesButton.setAttribute('aria-pressed', allSelected ? 'true' : 'false');
	}

	function getSort() {
		const sort = norm(sortSelect?.value);
		return sort === 'oldest' || sort === 'title' ? sort : DEFAULT_SORT;
	}

	function syncClearButton() {
		if (!clearButton) return;
		const query = searchInput?.value.trim() ?? '';
		const allTypesSelected = selectedTypes().length === ALL_TYPES.length;
		clearButton.disabled = !query && allTypesSelected && getSort() === DEFAULT_SORT && currentPage === 1;
	}

	function setSort(sort) {
		if (sortSelect) sortSelect.value = sort === 'oldest' || sort === 'title' ? sort : DEFAULT_SORT;
	}

	function updateUrl() {
		const url = new URL(window.location.href);
		const query = searchInput?.value.trim() ?? '';
		const types = selectedTypes();
		const sort = getSort();

		if (query) url.searchParams.set('q', query);
		else url.searchParams.delete('q');

		if (types.length === ALL_TYPES.length) url.searchParams.delete('types');
		else url.searchParams.set('types', types.join(','));

		if (sort === DEFAULT_SORT) url.searchParams.delete('sort');
		else url.searchParams.set('sort', sort);

		if (currentPage > 1) url.searchParams.set('page', String(currentPage));
		else url.searchParams.delete('page');

		for (const retiredParameter of ['type', 'papers', 'audio', 'recent', 'density', 'view']) {
			url.searchParams.delete(retiredParameter);
		}

		window.history.replaceState({}, '', url);
	}

	function sortCards(matches) {
		return [...matches].sort((a, b) => {
			const aDate = Number(a.getAttribute('data-date-ms') ?? 0);
			const bDate = Number(b.getAttribute('data-date-ms') ?? 0);
			const aTitle = norm(a.getAttribute('data-title'));
			const bTitle = norm(b.getAttribute('data-title'));

			if (getSort() === 'oldest') return aDate - bDate || aTitle.localeCompare(bTitle);
			if (getSort() === 'title') return aTitle.localeCompare(bTitle) || bDate - aDate;
			return bDate - aDate || aTitle.localeCompare(bTitle);
		});
	}

	function renderChips() {
		if (!chips) return;
		chips.innerHTML = '';

		const addChip = (label, onClick) => {
			const button = document.createElement('button');
			button.type = 'button';
			button.className =
				'rounded-full border border-slate-800 bg-slate-950 px-2 py-1 text-xs text-slate-200 hover:bg-slate-900';
			button.textContent = `${label} ×`;
			button.addEventListener('click', onClick);
			chips.appendChild(button);
		};

		const query = searchInput?.value.trim() ?? '';
		if (query) {
			addChip(`Query: ${query}`, () => {
				if (searchInput) searchInput.value = '';
				currentPage = 1;
				applyFilters();
			});
		}

		const sort = getSort();
		if (sort !== DEFAULT_SORT) {
			addChip(`Sort: ${sort}`, () => {
				setSort(DEFAULT_SORT);
				currentPage = 1;
				applyFilters();
			});
		}

		chips.classList.toggle('hidden', chips.childElementCount === 0);
	}

	function renderPagination(matchCount, startIndex, endIndex) {
		if (!pagination || !pagePrevious || !pageNext || !pageLabel || !pageStatus) return;
		const show = matchCount > PAGE_SIZE;
		pagination.classList.toggle('hidden', !show);
		if (!show) return;

		const atFirst = currentPage === 1;
		const atLast = currentPage === totalPages;
		if (pageFirst) pageFirst.disabled = atFirst;
		pagePrevious.disabled = atFirst;
		pageNext.disabled = atLast;
		if (pageLast) pageLast.disabled = atLast;
		pageLabel.textContent = `Page ${currentPage} of ${totalPages}`;
		pageStatus.textContent = `${startIndex + 1}-${endIndex} of ${matchCount}`;
	}

	function applyFilters({ preservePage = false } = {}) {
		if (!preservePage) currentPage = 1;

		const query = norm(searchInput?.value);
		const types = new Set(selectedTypes());
		const matches = cards.filter((card) => {
			const type = norm(card.getAttribute('data-type'));
			const title = norm(card.getAttribute('data-title'));
			const tags = norm(card.getAttribute('data-tags'));
			return types.has(type) && (!query || title.includes(query) || tags.includes(query));
		});
		const sorted = sortCards(matches);

		totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
		currentPage = Math.min(currentPage, totalPages);
		const startIndex = (currentPage - 1) * PAGE_SIZE;
		const pageCards = sorted.slice(startIndex, startIndex + PAGE_SIZE);

		for (const card of cards) card.classList.add('hidden');
		for (const card of pageCards) {
			card.classList.remove('hidden');
			list?.appendChild(card);
		}

		empty?.classList.toggle('hidden', sorted.length !== 0);
		syncAllTypesButton();
		renderChips();
		renderPagination(sorted.length, startIndex, startIndex + pageCards.length);
		syncClearButton();
		updateUrl();
	}

	function clearFilters() {
		if (searchInput) searchInput.value = '';
		setSelectedTypes(ALL_TYPES);
		setSort(DEFAULT_SORT);
		currentPage = 1;
		applyFilters({ preservePage: true });
	}

	const initialUrl = new URL(window.location.href);
	if (searchInput) searchInput.value = initialUrl.searchParams.get('q') ?? '';
	setSelectedTypes(parseTypes(initialUrl));
	setSort(parseSort(initialUrl));
	currentPage = parsePage(initialUrl);

	searchInput?.addEventListener('input', () => applyFilters());
	searchInput?.addEventListener('change', () => applyFilters());
	sortSelect?.addEventListener('change', () => applyFilters());
	clearButton?.addEventListener('click', clearFilters);

	allTypesButton?.addEventListener('click', () => {
		setSelectedTypes(ALL_TYPES);
		currentPage = 1;
		applyFilters({ preservePage: true });
	});

	for (const button of typeToggles) {
		button.addEventListener('click', () => {
			const isSelected = button.getAttribute('aria-pressed') !== 'false';
			if (isSelected && selectedTypes().length === 1) return;
			button.setAttribute('aria-pressed', isSelected ? 'false' : 'true');
			currentPage = 1;
			applyFilters({ preservePage: true });
		});
	}

	pageFirst?.addEventListener('click', () => {
		currentPage = 1;
		applyFilters({ preservePage: true });
	});
	pagePrevious?.addEventListener('click', () => {
		currentPage = Math.max(1, currentPage - 1);
		applyFilters({ preservePage: true });
	});
	pageNext?.addEventListener('click', () => {
		currentPage = Math.min(totalPages, currentPage + 1);
		applyFilters({ preservePage: true });
	});
	pageLast?.addEventListener('click', () => {
		currentPage = totalPages;
		applyFilters({ preservePage: true });
	});

	applyFilters({ preservePage: true });
}
