const ALL_TYPES = ['paper', 'note', 'memo'];
const PAGE_SIZE = 10;
const SHOW_TAGS_STORAGE_KEY = 'writing:index:show-tags';
const VIEW_PREFS_STORAGE_KEY = 'writing:index:view-prefs:v1';
const DEFAULT_SORT = 'newest';
const DEFAULT_DENSITY = 'comfortable';

function norm(s) {
	return (s ?? '').toString().trim().toLowerCase();
}

function readShowTagsPref() {
	try {
		return window.localStorage.getItem(SHOW_TAGS_STORAGE_KEY) === '1';
	} catch {
		return false;
	}
}

function writeShowTagsPref(value) {
	try {
		window.localStorage.setItem(SHOW_TAGS_STORAGE_KEY, value ? '1' : '0');
	} catch {
		// no-op
	}
}

function readViewPrefs() {
	try {
		const raw = window.localStorage.getItem(VIEW_PREFS_STORAGE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (!parsed || typeof parsed !== 'object') return null;
		return parsed;
	} catch {
		return null;
	}
}

function writeViewPrefs(prefs) {
	try {
		window.localStorage.setItem(VIEW_PREFS_STORAGE_KEY, JSON.stringify(prefs));
	} catch {
		// no-op
	}
}

function getTypeToggles() {
	return [...document.querySelectorAll('[data-writing-type-toggle]')];
}

function getAllTypesButton() {
	return document.querySelector('[data-writing-set-all]');
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
	syncAllTypeButtonState();
}

function syncAllTypeButtonState() {
	const allBtn = getAllTypesButton();
	if (!allBtn) return;
	const selected = getSelectedTypes();
	const allSelected = selected.length === ALL_TYPES.length && ALL_TYPES.every((type) => selected.includes(type));
	allBtn.setAttribute('aria-pressed', allSelected ? 'true' : 'false');
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

	return null;
}

function parsePageFromUrl(url) {
	const raw = Number(url.searchParams.get('page') || '1');
	if (!Number.isFinite(raw) || raw < 1) return 1;
	return Math.floor(raw);
}

function parseSortFromUrl(url) {
	const sort = norm(url.searchParams.get('sort'));
	if (sort === 'oldest' || sort === 'title') return sort;
	return sort === 'newest' ? 'newest' : null;
}

function parseDensityFromUrl(url) {
	const density = norm(url.searchParams.get('density'));
	if (density === 'compact' || density === 'comfortable') return density;
	return null;
}

function parseBoolFlag(url, key) {
	const raw = norm(url.searchParams.get(key));
	if (!raw) return null;
	return raw === '1' || raw === 'true' || raw === 'yes';
}

const root = document.querySelector('[data-writing-index]');
if (!root) {
	// no-op outside writing index page
} else {
	const list = root.querySelector('[data-writing-list]');
	const cards = [...root.querySelectorAll('[data-writing-card]')];
	const empty = root.querySelector('[data-writing-empty]');
	const pagination = root.querySelector('[data-writing-pagination]');
	const pageFirst = root.querySelector('[data-writing-page-first]');
	const pagePrev = root.querySelector('[data-writing-page-prev]');
	const pageNext = root.querySelector('[data-writing-page-next]');
	const pageLast = root.querySelector('[data-writing-page-last]');
	const pageLabel = root.querySelector('[data-writing-page-label]');
	const pageStatus = root.querySelector('[data-writing-pagination-status]');
	const searchInput = root.querySelector('[data-writing-search]');
	const sortSelect = root.querySelector('[data-writing-sort]');
	const clearBtn = root.querySelector('[data-writing-clear]');
	const tagsToggleBtn = root.querySelector('[data-writing-tags-toggle]');
	const quickBtns = [...root.querySelectorAll('[data-writing-quick]')];
	const densityBtns = [...root.querySelectorAll('[data-writing-density-toggle]')];

	let currentPage = 1;
	let currentTotalPages = 1;
	const quickState = { hasAudio: false, recent30: false };

	function setQuickBtn(name, value) {
		const btn = root.querySelector(`[data-writing-quick="${name}"]`);
		if (!btn) return;
		btn.setAttribute('aria-pressed', value ? 'true' : 'false');
	}

	function setDensityMode(mode) {
		const normalized = mode === 'compact' ? 'compact' : 'comfortable';
		root.classList.toggle('writing-density-compact', normalized === 'compact');
		for (const btn of densityBtns) {
			const btnMode = norm(btn.getAttribute('data-writing-density-toggle'));
			btn.setAttribute('aria-pressed', btnMode === normalized ? 'true' : 'false');
		}
	}

	function getDensityMode() {
		const compactBtn = root.querySelector('[data-writing-density-toggle="compact"]');
		return compactBtn?.getAttribute('aria-pressed') === 'true' ? 'compact' : 'comfortable';
	}

	function setTagVisibility(showTags, { persist = false } = {}) {
		root.classList.toggle('writing-tags-hidden', !showTags);
		if (tagsToggleBtn) {
			tagsToggleBtn.setAttribute('aria-pressed', showTags ? 'true' : 'false');
			tagsToggleBtn.textContent = showTags ? 'Hide tags' : 'Show tags';
		}
		if (persist) writeShowTagsPref(showTags);
	}

	function getSortMode() {
		const value = norm(sortSelect?.value || DEFAULT_SORT);
		if (value === 'oldest' || value === 'title') return value;
		return 'newest';
	}

	function setSortMode(mode) {
		const safe = mode === 'oldest' || mode === 'title' ? mode : 'newest';
		if (sortSelect) sortSelect.value = safe;
	}

	function persistViewState() {
		writeViewPrefs({
			types: getSelectedTypes(),
			sort: getSortMode(),
			density: getDensityMode(),
			quick: {
				hasAudio: quickState.hasAudio,
				recent30: quickState.recent30,
			},
		});
	}

	function syncFromUrlAndPrefs() {
		const url = new URL(window.location.href);
		const prefs = readViewPrefs() || {};

		if (searchInput) {
			const query = url.searchParams.get('q') ?? prefs.query ?? '';
			searchInput.value = query;
		}

		const urlTypes = parseTypesFromUrl(url);
		if (urlTypes?.length) {
			setSelectedTypes(urlTypes);
		} else if (parseBoolFlag(url, 'papers') || prefs?.quick?.papersOnly) {
			setSelectedTypes(['paper']);
		} else if (Array.isArray(prefs.types) && prefs.types.length) {
			setSelectedTypes(prefs.types.filter((x) => ALL_TYPES.includes(norm(x))));
		} else {
			setSelectedTypes(ALL_TYPES);
		}

		setSortMode(parseSortFromUrl(url) ?? prefs.sort ?? DEFAULT_SORT);
		setDensityMode(parseDensityFromUrl(url) ?? prefs.density ?? DEFAULT_DENSITY);
		quickState.hasAudio = parseBoolFlag(url, 'audio') ?? Boolean(prefs?.quick?.hasAudio);
		quickState.recent30 = parseBoolFlag(url, 'recent') ?? Boolean(prefs?.quick?.recent30);
		setQuickBtn('has-audio', quickState.hasAudio);
		setQuickBtn('recent-30', quickState.recent30);
		currentPage = parsePageFromUrl(url);
		setTagVisibility(readShowTagsPref());
	}

	function updateUrl() {
		const url = new URL(window.location.href);
		const q = norm(searchInput?.value);
		const selected = getSelectedTypes();
		const sortMode = getSortMode();
		const densityMode = getDensityMode();

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

		if (sortMode !== DEFAULT_SORT) url.searchParams.set('sort', sortMode);
		else url.searchParams.delete('sort');

		if (densityMode !== DEFAULT_DENSITY) url.searchParams.set('density', densityMode);
		else url.searchParams.delete('density');

		if (quickState.hasAudio) url.searchParams.set('audio', '1');
		else url.searchParams.delete('audio');

		if (quickState.recent30) url.searchParams.set('recent', '1');
		else url.searchParams.delete('recent');

		url.searchParams.delete('papers');

		window.history.replaceState({}, '', url);
	}

	function clearFilters() {
		if (searchInput) searchInput.value = '';
		setSelectedTypes(ALL_TYPES);
		quickState.hasAudio = false;
		quickState.recent30 = false;
		setQuickBtn('has-audio', false);
		setQuickBtn('recent-30', false);
		setSortMode(DEFAULT_SORT);
		setDensityMode(DEFAULT_DENSITY);
		currentPage = 1;
		applyFilter({ preservePage: true });
	}

	function renderChips() {
		const chips = root.querySelector('[data-writing-chips]');
		if (!chips) return;

		const q = norm(searchInput?.value);
		const sortMode = getSortMode();
		const densityMode = getDensityMode();
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
				if (searchInput) searchInput.value = '';
				currentPage = 1;
				applyFilter({ preservePage: true });
			});
		}


		if (quickState.hasAudio) {
			mk('Has audio', () => {
				quickState.hasAudio = false;
				setQuickBtn('has-audio', false);
				currentPage = 1;
				applyFilter({ preservePage: true });
			});
		}

		if (quickState.recent30) {
			mk('Recent 30d', () => {
				quickState.recent30 = false;
				setQuickBtn('recent-30', false);
				currentPage = 1;
				applyFilter({ preservePage: true });
			});
		}

		if (sortMode !== DEFAULT_SORT) {
			mk(`Sort: ${sortMode}`, () => {
				setSortMode(DEFAULT_SORT);
				currentPage = 1;
				applyFilter({ preservePage: true });
			});
		}

		if (densityMode !== DEFAULT_DENSITY) {
			mk(`Density: ${densityMode}`, () => {
				setDensityMode(DEFAULT_DENSITY);
				applyFilter({ preservePage: true });
			});
		}

		chips.classList.toggle('hidden', chips.childElementCount === 0);
	}

	function renderPagination(totalMatches, pageStartIdx, pageEndIdx, totalPages) {
		if (!pagination || !pagePrev || !pageNext || !pageLabel || !pageStatus) return;
		currentTotalPages = totalPages;
		const show = totalMatches > PAGE_SIZE;
		pagination.classList.toggle('hidden', !show);
		if (!show) return;

		const atFirst = currentPage <= 1;
		const atLast = currentPage >= totalPages;
		if (pageFirst) pageFirst.disabled = atFirst;
		pagePrev.disabled = atFirst;
		pageNext.disabled = atLast;
		if (pageLast) pageLast.disabled = atLast;
		pageLabel.textContent = `Page ${currentPage} of ${totalPages}`;
		pageStatus.textContent = `${pageStartIdx + 1}-${pageEndIdx} of ${totalMatches}`;
	}

	function sortCards(matches) {
		const sortMode = getSortMode();
		const sorted = [...matches];
		sorted.sort((a, b) => {
			const aDate = Number(a.getAttribute('data-date-ms') || 0);
			const bDate = Number(b.getAttribute('data-date-ms') || 0);
			const aTitle = norm(a.getAttribute('data-title'));
			const bTitle = norm(b.getAttribute('data-title'));
			if (sortMode === 'oldest') return aDate - bDate || aTitle.localeCompare(bTitle);
			if (sortMode === 'title') return aTitle.localeCompare(bTitle) || bDate - aDate;
			return bDate - aDate || aTitle.localeCompare(bTitle);
		});
		return sorted;
	}

	function applyFilter({ preservePage = false } = {}) {
		const q = norm(searchInput?.value);
		const selected = new Set(getSelectedTypes());
		if (!preservePage) currentPage = 1;

		const now = Date.now();
		const recentThreshold = now - 30 * 24 * 60 * 60 * 1000;

		const matches = cards.filter((el) => {
			const title = norm(el.getAttribute('data-title'));
			const tags = norm(el.getAttribute('data-tags'));
			const elType = norm(el.getAttribute('data-type'));
			const hasAudio = el.getAttribute('data-has-audio') === '1';
			const dateMs = Number(el.getAttribute('data-date-ms') || 0);

			if (selected.size === 0) return false;
			if (!selected.has(elType)) return false;
			if (q && !(title.includes(q) || tags.includes(q))) return false;
			if (quickState.hasAudio && !hasAudio) return false;
			if (quickState.recent30 && (!dateMs || dateMs < recentThreshold)) return false;
			return true;
		});

		const sortedMatches = sortCards(matches);
		const totalPages = Math.max(1, Math.ceil(sortedMatches.length / PAGE_SIZE));
		if (currentPage > totalPages) currentPage = totalPages;
		const pageStartIdx = (currentPage - 1) * PAGE_SIZE;
		const pageCards = sortedMatches.slice(pageStartIdx, pageStartIdx + PAGE_SIZE);
		const pageEndIdx = pageStartIdx + pageCards.length;

		for (const el of cards) el.classList.add('hidden');
		for (const el of pageCards) {
			el.classList.remove('hidden');
			if (list) list.appendChild(el);
		}

		if (empty) empty.classList.toggle('hidden', sortedMatches.length !== 0);
		syncAllTypeButtonState();
		renderChips();
		renderPagination(sortedMatches.length, pageStartIdx, pageEndIdx, totalPages);
		persistViewState();
		updateUrl();
	}

	function applyTag(tag) {
		if (searchInput) searchInput.value = tag;
		currentPage = 1;
		applyFilter({ preservePage: true });
	}

	searchInput?.addEventListener('input', () => applyFilter());
	searchInput?.addEventListener('change', () => applyFilter());

	getAllTypesButton()?.addEventListener('click', () => {
		setSelectedTypes(ALL_TYPES);
		currentPage = 1;
		applyFilter({ preservePage: true });
	});

	for (const btn of getTypeToggles()) {
		btn.addEventListener('click', () => {
			const currentlyOn = btn.getAttribute('aria-pressed') !== 'false';
			if (currentlyOn && getSelectedTypes().length === 1) return;
			btn.setAttribute('aria-pressed', currentlyOn ? 'false' : 'true');
			currentPage = 1;
			applyFilter({ preservePage: true });
		});
	}

	root.addEventListener('click', (e) => {
		const target = e.target?.closest?.('[data-writing-tag]');
		if (target) {
			e.preventDefault();
			applyTag(target.getAttribute('data-writing-tag') || '');
			return;
		}

		const showTagsBtn = e.target?.closest?.('[data-writing-show-tags]');
		if (showTagsBtn) {
			e.preventDefault();
			setTagVisibility(true, { persist: true });
		}
	});

	clearBtn?.addEventListener('click', () => clearFilters());

	tagsToggleBtn?.addEventListener('click', () => {
		const showTags = tagsToggleBtn.getAttribute('aria-pressed') !== 'true';
		setTagVisibility(showTags, { persist: true });
	});

	sortSelect?.addEventListener('change', () => {
		currentPage = 1;
		applyFilter({ preservePage: true });
	});

	for (const quickBtn of quickBtns) {
		quickBtn.addEventListener('click', () => {
			const key = norm(quickBtn.getAttribute('data-writing-quick'));
			if (key === 'has-audio') {
				quickState.hasAudio = !quickState.hasAudio;
				setQuickBtn('has-audio', quickState.hasAudio);
				currentPage = 1;
				applyFilter({ preservePage: true });
				return;
			}

			if (key === 'recent-30') {
				quickState.recent30 = !quickState.recent30;
				setQuickBtn('recent-30', quickState.recent30);
				currentPage = 1;
				applyFilter({ preservePage: true });
			}
		});
	}

	for (const densityBtn of densityBtns) {
		densityBtn.addEventListener('click', () => {
			setDensityMode(densityBtn.getAttribute('data-writing-density-toggle'));
			persistViewState();
			updateUrl();
			renderChips();
		});
	}

	pageFirst?.addEventListener('click', () => {
		if (currentPage <= 1) return;
		currentPage = 1;
		applyFilter({ preservePage: true });
	});

	pagePrev?.addEventListener('click', () => {
		if (currentPage <= 1) return;
		currentPage -= 1;
		applyFilter({ preservePage: true });
	});

	pageNext?.addEventListener('click', () => {
		if (currentPage >= currentTotalPages) return;
		currentPage += 1;
		applyFilter({ preservePage: true });
	});

	pageLast?.addEventListener('click', () => {
		if (currentPage >= currentTotalPages) return;
		currentPage = currentTotalPages;
		applyFilter({ preservePage: true });
	});

	const isTypingTarget = (target) => {
		if (!target) return false;
		const tag = String(target.tagName || '').toLowerCase();
		return tag === 'input' || tag === 'textarea' || tag === 'select' || Boolean(target.isContentEditable);
	};

	document.addEventListener('keydown', (event) => {
		if (event.defaultPrevented) return;
		const key = String(event.key || '').toLowerCase();
		const typing = isTypingTarget(event.target);

		if (event.key === '/' && !typing) {
			event.preventDefault();
			searchInput?.focus();
			searchInput?.select?.();
			return;
		}

		if (typing) return;

		if (key === 'a') {
			event.preventDefault();
			quickState.hasAudio = !quickState.hasAudio;
			setQuickBtn('has-audio', quickState.hasAudio);
			currentPage = 1;
			applyFilter({ preservePage: true });
			return;
		}

		if (key === 'r') {
			event.preventDefault();
			quickState.recent30 = !quickState.recent30;
			setQuickBtn('recent-30', quickState.recent30);
			currentPage = 1;
			applyFilter({ preservePage: true });
			return;
		}

		if (key === 'd') {
			event.preventDefault();
			setDensityMode(getDensityMode() === 'compact' ? 'comfortable' : 'compact');
			persistViewState();
			updateUrl();
			renderChips();
			return;
		}

		if (key === 't' && tagsToggleBtn) {
			event.preventDefault();
			const showTags = tagsToggleBtn.getAttribute('aria-pressed') !== 'true';
			setTagVisibility(showTags, { persist: true });
			return;
		}

		if (key === 'x') {
			event.preventDefault();
			clearFilters();
		}
	});

	syncFromUrlAndPrefs();
	applyFilter({ preservePage: true });
}
