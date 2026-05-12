const ALL_TYPES = ['paper', 'note', 'memo'];
const PAGE_SIZE = 10;
const SHOW_TAGS_STORAGE_KEY = 'writing:index:show-tags';
const VIEW_PREFS_STORAGE_KEY = 'writing:index:view-prefs:v1';
const DEFAULT_SORT = 'newest';
const DEFAULT_DENSITY = 'comfortable';
const DEFAULT_VIEW = 'cards';
const TIMELINE_YEAR_PREFIX = 'timeline-year-';
const TIMELINE_THEME_PREFIX = 'timeline-theme-';

function norm(s) {
	return (s ?? '').toString().trim().toLowerCase();
}

function slugToken(value) {
	const compact = (value ?? '')
		.toString()
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
	return compact || 'na';
}

function yearAnchorId(year) {
	return `${TIMELINE_YEAR_PREFIX}${slugToken(year)}`;
}

function themeAnchorId(year, theme) {
	return `${TIMELINE_THEME_PREFIX}${slugToken(year)}-${slugToken(theme)}`;
}

function getHashId(rawHash) {
	const clean = (rawHash ?? '').toString().replace(/^#/, '').trim();
	if (!clean) return null;
	if (clean.startsWith(TIMELINE_YEAR_PREFIX) || clean.startsWith(TIMELINE_THEME_PREFIX)) return clean;
	return null;
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

function parseViewFromUrl(url) {
	const view = norm(url.searchParams.get('view'));
	if (view === 'timeline' || view === 'cards') return view;
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
	const timeline = root.querySelector('[data-writing-timeline]');
	const viewBtns = [...root.querySelectorAll('[data-writing-view-toggle]')];
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
	const jumpWrap = root.querySelector('[data-writing-jump-wrap]');
	const jumpYearSelect = root.querySelector('[data-writing-jump-year]');
	const jumpThemeSelect = root.querySelector('[data-writing-jump-theme]');
	const jumpGoBtn = root.querySelector('[data-writing-jump-go]');

	let currentPage = 1;
	let currentTotalPages = 1;
	let currentView = DEFAULT_VIEW;
	let pendingTimelineHash = null;
	let timelineJumpIndex = [];
	const quickState = { hasAudio: false, recent30: false };
	const dateFormatter = new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'short', day: 'numeric' });

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

	function setViewMode(mode) {
		currentView = mode === 'timeline' ? 'timeline' : 'cards';
		for (const btn of viewBtns) {
			const btnMode = norm(btn.getAttribute('data-writing-view-toggle'));
			btn.setAttribute('aria-pressed', btnMode === currentView ? 'true' : 'false');
		}
		list?.classList.toggle('hidden', currentView !== 'cards');
		timeline?.classList.toggle('hidden', currentView !== 'timeline');
		renderTimelineJumpControls();
	}

	function getViewMode() {
		return currentView;
	}

	function buildShareUrl(hashId) {
		const url = new URL(window.location.href);
		url.hash = hashId ? `#${hashId}` : '';
		return url.toString();
	}

	function updateJumpThemeOptions(selectedYearHash, preferredHash = null) {
		if (!jumpThemeSelect) return;
		jumpThemeSelect.innerHTML = '';
		const placeholder = document.createElement('option');
		placeholder.value = '';
		placeholder.textContent = 'Theme';
		jumpThemeSelect.appendChild(placeholder);

		const yearEntry = timelineJumpIndex.find((entry) => entry.yearHashId === selectedYearHash);
		if (!yearEntry || !yearEntry.themes.length) {
			jumpThemeSelect.disabled = true;
			jumpThemeSelect.value = '';
			return;
		}

		for (const themeEntry of yearEntry.themes) {
			const option = document.createElement('option');
			option.value = themeEntry.hashId;
			option.textContent = `${themeEntry.theme} (${themeEntry.count})`;
			jumpThemeSelect.appendChild(option);
		}
		jumpThemeSelect.disabled = false;
		if (preferredHash && yearEntry.themes.some((theme) => theme.hashId === preferredHash)) {
			jumpThemeSelect.value = preferredHash;
		}
	}

	function syncJumpControlsFromHash(hashId) {
		if (!jumpYearSelect || !hashId) return;
		const yearEntry = timelineJumpIndex.find(
			(entry) => entry.yearHashId === hashId || entry.themes.some((theme) => theme.hashId === hashId),
		);
		if (!yearEntry) return;
		jumpYearSelect.value = yearEntry.yearHashId;
		updateJumpThemeOptions(yearEntry.yearHashId, hashId.startsWith(TIMELINE_THEME_PREFIX) ? hashId : null);
	}

	function scrollToTimelineHash(hashId, { smooth = true } = {}) {
		if (!hashId || getViewMode() !== 'timeline') return false;
		const anchorTarget = document.getElementById(hashId);
		if (!anchorTarget) return false;
		anchorTarget.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
		anchorTarget.classList.add('timeline-anchor-hit');
		window.setTimeout(() => anchorTarget.classList.remove('timeline-anchor-hit'), 1400);
		if (window.location.hash !== `#${hashId}`) {
			window.location.hash = hashId;
		}
		syncJumpControlsFromHash(hashId);
		return true;
	}

	async function copySectionUrl(hashId) {
		const shareUrl = buildShareUrl(hashId);
		try {
			if (navigator?.clipboard?.writeText) {
				await navigator.clipboard.writeText(shareUrl);
			}
		} catch {
			// clipboard may be blocked by browser settings
		}
		scrollToTimelineHash(hashId);
	}

	function focusTimelineAnchorFromHash() {
		const hashId = getHashId(window.location.hash) || pendingTimelineHash;
		if (!hashId || getViewMode() !== 'timeline') return;
		if (!scrollToTimelineHash(hashId)) return;
		pendingTimelineHash = null;
	}

	function renderTimelineJumpControls(preferredHash = null) {
		if (!jumpWrap || !jumpYearSelect) return;
		const canShow = getViewMode() === 'timeline' && timelineJumpIndex.length > 0;
		jumpWrap.classList.toggle('hidden', !canShow);
		jumpWrap.classList.toggle('inline-flex', canShow);
		if (!canShow) {
			if (jumpYearSelect) jumpYearSelect.innerHTML = '<option value="">Year</option>';
			if (jumpThemeSelect) {
				jumpThemeSelect.innerHTML = '<option value="">Theme</option>';
				jumpThemeSelect.disabled = true;
			}
			return;
		}

		const priorYear = jumpYearSelect.value;
		jumpYearSelect.innerHTML = '';
		for (const entry of timelineJumpIndex) {
			const option = document.createElement('option');
			option.value = entry.yearHashId;
			option.textContent = `${entry.yearLabel} (${entry.count})`;
			jumpYearSelect.appendChild(option);
		}

		const targetHash = preferredHash || getHashId(window.location.hash) || pendingTimelineHash;
		if (targetHash) {
			syncJumpControlsFromHash(targetHash);
			return;
		}

		const fallbackYear = timelineJumpIndex.some((entry) => entry.yearHashId === priorYear)
			? priorYear
			: timelineJumpIndex[0]?.yearHashId;
		if (!fallbackYear) return;
		jumpYearSelect.value = fallbackYear;
		updateJumpThemeOptions(fallbackYear);
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
			view: getViewMode(),
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
		pendingTimelineHash = getHashId(url.hash);
		const requestedView = parseViewFromUrl(url) ?? prefs.view ?? DEFAULT_VIEW;
		setViewMode(pendingTimelineHash ? 'timeline' : requestedView);
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
		const viewMode = getViewMode();

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

		if (viewMode !== DEFAULT_VIEW) url.searchParams.set('view', viewMode);
		else url.searchParams.delete('view');

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
		setViewMode(DEFAULT_VIEW);
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
			b.className =
				'rounded-full border border-slate-800 bg-slate-950 px-2 py-1 text-xs text-slate-200 hover:bg-slate-900';
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

		if (getViewMode() !== DEFAULT_VIEW) {
			mk(`View: ${getViewMode()}`, () => {
				setViewMode(DEFAULT_VIEW);
				applyFilter({ preservePage: true });
			});
		}

		chips.classList.toggle('hidden', chips.childElementCount === 0);
	}

	function renderPagination(totalMatches, pageStartIdx, pageEndIdx, totalPages) {
		if (!pagination || !pagePrev || !pageNext || !pageLabel || !pageStatus) return;
		currentTotalPages = totalPages;
		const show = getViewMode() === 'cards' && totalMatches > PAGE_SIZE;
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

	function renderTimeline(matches) {
		if (!timeline) return;
		timeline.innerHTML = '';
		timelineJumpIndex = [];
		if (matches.length === 0) {
			renderTimelineJumpControls();
			return;
		}

		const years = new Map();
		for (const el of matches) {
			const dateMs = Number(el.getAttribute('data-date-ms') || 0);
			const year = Number.isFinite(dateMs) && dateMs > 0 ? String(new Date(dateMs).getFullYear()) : 'Undated';
			const rawTheme = (el.getAttribute('data-theme') || el.getAttribute('data-type') || 'uncategorized').trim();
			const theme = rawTheme || 'uncategorized';
			if (!years.has(year)) years.set(year, new Map());
			const themes = years.get(year);
			if (!themes.has(theme)) themes.set(theme, []);
			themes.get(theme).push(el);
		}

		const yearKeys = [...years.keys()].sort((a, b) => {
			const aNum = Number(a);
			const bNum = Number(b);
			if (Number.isFinite(aNum) && Number.isFinite(bNum)) return bNum - aNum;
			if (Number.isFinite(aNum)) return -1;
			if (Number.isFinite(bNum)) return 1;
			return a.localeCompare(b);
		});
		for (const year of yearKeys) {
			const yearBlock = document.createElement('section');
			yearBlock.className = 'card p-4';
			yearBlock.setAttribute('data-writing-timeline-year', '1');
			const yearHashId = yearAnchorId(year);
			yearBlock.id = yearHashId;

			const headingRow = document.createElement('div');
			headingRow.className = 'mb-3 flex items-center justify-between gap-3';
			const yearTitle = document.createElement('h2');
			yearTitle.className = 'text-lg font-semibold text-slate-100';
			yearTitle.textContent = year;

			const themes = years.get(year);
			const totalInYear = [...themes.values()].reduce((sum, entries) => sum + entries.length, 0);
			const yearMeta = document.createElement('div');
			yearMeta.className = 'flex items-center gap-2';
			const count = document.createElement('span');
			count.className = 'text-xs text-slate-400';
			count.textContent = `${totalInYear} ${totalInYear === 1 ? 'entry' : 'entries'}`;
			const yearLink = document.createElement('button');
			yearLink.type = 'button';
			yearLink.className =
				'rounded-none border border-slate-800 bg-slate-950 px-2 py-1 text-[11px] text-slate-300 hover:bg-slate-900';
			yearLink.setAttribute('data-writing-timeline-copy-link', yearHashId);
			yearLink.textContent = 'Copy year link';
			yearMeta.append(count, yearLink);
			headingRow.append(yearTitle, yearMeta);
			yearBlock.appendChild(headingRow);

			const themesWrap = document.createElement('div');
			themesWrap.className = 'flex flex-wrap gap-2';
			const themeKeys = [...themes.keys()].sort((a, b) => a.localeCompare(b));
			const themeEntries = [];
			for (const theme of themeKeys) {
				const entries = themes.get(theme) || [];
				const group = document.createElement('div');
				group.className = 'w-full rounded-none border border-slate-800/80 bg-slate-950/50 p-3';
				const themeHashId = themeAnchorId(year, theme);
				group.id = themeHashId;

				const themeHeader = document.createElement('div');
				themeHeader.className = 'mb-2 flex items-center justify-between gap-2';
				const themeLabel = document.createElement('span');
				themeLabel.className =
					'rounded-full border border-slate-700 px-2 py-0.5 text-[11px] uppercase tracking-wide text-slate-200';
				themeLabel.textContent = theme;
				const themeMeta = document.createElement('div');
				themeMeta.className = 'flex items-center gap-2';
				const themeCount = document.createElement('span');
				themeCount.className = 'text-[11px] text-slate-400';
				themeCount.textContent = `${entries.length} ${entries.length === 1 ? 'post' : 'posts'}`;
				const themeLink = document.createElement('button');
				themeLink.type = 'button';
				themeLink.className =
					'rounded-none border border-slate-800 bg-slate-950 px-2 py-1 text-[11px] text-slate-300 hover:bg-slate-900';
				themeLink.setAttribute('data-writing-timeline-copy-link', themeHashId);
				themeLink.textContent = 'Copy theme link';
				themeMeta.append(themeCount, themeLink);
				themeHeader.append(themeLabel, themeMeta);

				const entryList = document.createElement('ul');
				entryList.className = 'space-y-2';
				for (const entryCard of entries) {
					const item = document.createElement('li');
					item.setAttribute('data-writing-timeline-entry', '1');
					const link = document.createElement('a');
					link.href = entryCard.getAttribute('href') || '#';
					link.className = 'text-sm font-medium text-slate-100 hover:text-blue-300';
					link.textContent = entryCard.getAttribute('data-title') || 'Untitled';

					const meta = document.createElement('p');
					meta.className = 'text-xs text-slate-400';
					const type = entryCard.getAttribute('data-type') || 'entry';
					const dateMsEntry = Number(entryCard.getAttribute('data-date-ms') || 0);
					const dateLabel =
						Number.isFinite(dateMsEntry) && dateMsEntry > 0 ? dateFormatter.format(new Date(dateMsEntry)) : 'Date TBD';
					const audio = entryCard.getAttribute('data-has-audio') === '1' ? ' · Audio' : '';
					meta.textContent = `${type.toUpperCase()} · ${dateLabel}${audio}`;

					item.append(link, meta);
					entryList.appendChild(item);
				}

				group.append(themeHeader, entryList);
				themesWrap.appendChild(group);
				themeEntries.push({
					theme,
					hashId: themeHashId,
					count: entries.length,
				});
			}

			yearBlock.appendChild(themesWrap);
			timeline.appendChild(yearBlock);
			timelineJumpIndex.push({
				yearLabel: year,
				yearHashId,
				count: totalInYear,
				themes: themeEntries,
			});
		}

		renderTimelineJumpControls();
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
		const timelineMode = getViewMode() === 'timeline';

		for (const el of cards) el.classList.add('hidden');
		if (!timelineMode) {
			for (const el of pageCards) {
				el.classList.remove('hidden');
				if (list) list.appendChild(el);
			}
		}
		renderTimeline(timelineMode ? sortedMatches : []);
		focusTimelineAnchorFromHash();

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
		const timelineLinkBtn = e.target?.closest?.('[data-writing-timeline-copy-link]');
		if (timelineLinkBtn) {
			e.preventDefault();
			const hashId = timelineLinkBtn.getAttribute('data-writing-timeline-copy-link');
			if (hashId) void copySectionUrl(hashId);
			return;
		}

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

	for (const viewBtn of viewBtns) {
		viewBtn.addEventListener('click', () => {
			setViewMode(viewBtn.getAttribute('data-writing-view-toggle'));
			currentPage = 1;
			applyFilter({ preservePage: true });
		});
	}

	jumpYearSelect?.addEventListener('change', () => {
		const yearHash = jumpYearSelect.value;
		updateJumpThemeOptions(yearHash);
	});

	jumpGoBtn?.addEventListener('click', () => {
		if (getViewMode() !== 'timeline') {
			setViewMode('timeline');
			currentPage = 1;
			applyFilter({ preservePage: true });
		}
		const targetHash = jumpThemeSelect?.value || jumpYearSelect?.value;
		if (!targetHash) return;
		scrollToTimelineHash(targetHash);
	});

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

	window.addEventListener('hashchange', () => {
		const hashId = getHashId(window.location.hash);
		if (!hashId) return;
		pendingTimelineHash = hashId;
		if (getViewMode() !== 'timeline') {
			setViewMode('timeline');
			currentPage = 1;
			applyFilter({ preservePage: true });
			return;
		}
		focusTimelineAnchorFromHash();
	});

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

		if (key === 'v') {
			event.preventDefault();
			setViewMode(getViewMode() === 'timeline' ? 'cards' : 'timeline');
			currentPage = 1;
			applyFilter({ preservePage: true });
			return;
		}

		if (key === 't' && tagsToggleBtn) {
			event.preventDefault();
			const showTags = tagsToggleBtn.getAttribute('aria-pressed') !== 'true';
			setTagVisibility(showTags, { persist: true });
			return;
		}

		if (key === 'y' && jumpYearSelect) {
			event.preventDefault();
			if (getViewMode() !== 'timeline') {
				setViewMode('timeline');
				currentPage = 1;
				applyFilter({ preservePage: true });
			}
			jumpYearSelect.focus();
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
