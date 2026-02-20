const PAGE_SIZE = 10;

function norm(value) {
	return (value ?? '').toString().trim().toLowerCase();
}

const root = document.querySelector('[data-change-notes]');
if (root) {
	const list = root.querySelector('[data-change-list]');
	const cards = [...root.querySelectorAll('[data-release-card]')];
	const tagButtons = [...root.querySelectorAll('[data-change-tag]')];
	const searchInput = root.querySelector('[data-change-search]');
	const clearBtn = root.querySelector('[data-change-clear]');
	const empty = root.querySelector('[data-change-empty]');
	const active = root.querySelector('[data-change-active]');
	const count = root.querySelector('[data-change-count]');
	const pagination = root.querySelector('[data-change-pagination]');
	const pageFirst = root.querySelector('[data-change-page-first]');
	const pagePrev = root.querySelector('[data-change-page-prev]');
	const pageNext = root.querySelector('[data-change-page-next]');
	const pageLast = root.querySelector('[data-change-page-last]');
	const pageLabel = root.querySelector('[data-change-page-label]');
	const pageStatus = root.querySelector('[data-change-pagination-status]');

	const availableTags = new Set(tagButtons.map((b) => norm(b.getAttribute('data-change-tag'))));
	const state = {
		tags: new Set(),
		q: '',
		page: 1,
	};

	const seenReleaseKey = 'adamboas.changes.lastSeenVersion.v1';
	let priorSeenVersion = null;

	function parseVersion(value) {
		const m = String(value || '').toLowerCase().match(/v?(\d+)\.(\d+)\.(\d+)/);
		if (!m) return null;
		return [Number(m[1]), Number(m[2]), Number(m[3])];
	}

	function compareVersions(a, b) {
		const av = parseVersion(a);
		const bv = parseVersion(b);
		if (!av || !bv) return 0;
		for (let i = 0; i < 3; i += 1) {
			if (av[i] > bv[i]) return 1;
			if (av[i] < bv[i]) return -1;
		}
		return 0;
	}

	function readSeenRelease() {
		try {
			const raw = localStorage.getItem(seenReleaseKey);
			if (raw) priorSeenVersion = raw;
		} catch {}
	}

	function persistSeenRelease() {
		const newest = cards[0]?.getAttribute('data-version');
		if (!newest) return;
		try {
			localStorage.setItem(seenReleaseKey, newest);
		} catch {}
	}

	function renderNewReleaseBadges() {
		for (const card of cards) {
			const badge = card.querySelector('[data-release-new]');
			if (!badge) continue;
			const version = card.getAttribute('data-version');
			const isNew = Boolean(priorSeenVersion && version && compareVersions(version, priorSeenVersion) > 0);
			badge.classList.toggle('hidden', !isNew);
		}
	}

	function readStateFromUrl() {
		const url = new URL(window.location.href);
		const q = norm(url.searchParams.get('q'));
		const tags = (url.searchParams.get('tags') || '')
			.split(',')
			.map((tag) => norm(tag))
			.filter((tag) => availableTags.has(tag));
		const page = Number(url.searchParams.get('page') || '1');

		state.q = q;
		state.tags = new Set(tags);
		state.page = Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;
		if (searchInput) searchInput.value = q;
	}

	function writeStateToUrl() {
		const url = new URL(window.location.href);
		if (state.q) url.searchParams.set('q', state.q);
		else url.searchParams.delete('q');

		if (state.tags.size) {
			url.searchParams.set('tags', [...state.tags].sort().join(','));
		} else {
			url.searchParams.delete('tags');
		}

		if (state.page > 1) url.searchParams.set('page', String(state.page));
		else url.searchParams.delete('page');

		window.history.replaceState({}, '', url);
	}

	function renderActiveFilters() {
		if (!active) return;
		active.innerHTML = '';

		const addChip = (label, onClick) => {
			const button = document.createElement('button');
			button.type = 'button';
			button.className = 'change-active-chip';
			button.textContent = `${label} ×`;
			button.addEventListener('click', onClick);
			active.appendChild(button);
		};

		if (state.q) {
			addChip(`query:${state.q}`, () => {
				state.q = '';
				state.page = 1;
				if (searchInput) searchInput.value = '';
				render();
			});
		}

		for (const tag of state.tags) {
			addChip(tag, () => {
				state.tags.delete(tag);
				state.page = 1;
				render();
			});
		}
	}

	function renderPagination(totalMatches, pageStartIdx, pageEndIdx, totalPages) {
		if (!pagination || !pagePrev || !pageNext || !pageLabel || !pageStatus) return;
		const show = totalMatches > PAGE_SIZE;
		pagination.classList.toggle('hidden', !show);
		if (!show) return;

		const atFirst = state.page <= 1;
		const atLast = state.page >= totalPages;
		if (pageFirst) pageFirst.disabled = atFirst;
		pagePrev.disabled = atFirst;
		pageNext.disabled = atLast;
		if (pageLast) pageLast.disabled = atLast;
		pageLabel.textContent = `Page ${state.page} of ${totalPages}`;
		pageStatus.textContent = `${pageStartIdx + 1}-${pageEndIdx} of ${totalMatches}`;
	}

	function render({ preservePage = true } = {}) {
		renderNewReleaseBadges();
		for (const button of tagButtons) {
			const tag = norm(button.getAttribute('data-change-tag'));
			button.setAttribute('aria-pressed', state.tags.has(tag) ? 'true' : 'false');
		}

		const matches = cards.filter((card) => {
			const cardTags = norm(card.getAttribute('data-tags')).split(',').filter(Boolean);
			const cardSearch = norm(card.getAttribute('data-search'));
			const tagMatch = state.tags.size === 0 || cardTags.some((tag) => state.tags.has(tag));
			const searchMatch = !state.q || cardSearch.includes(state.q);
			return tagMatch && searchMatch;
		});

		if (!preservePage) state.page = 1;
		const totalPages = Math.max(1, Math.ceil(matches.length / PAGE_SIZE));
		if (state.page > totalPages) state.page = totalPages;
		const pageStartIdx = (state.page - 1) * PAGE_SIZE;
		const pageCards = matches.slice(pageStartIdx, pageStartIdx + PAGE_SIZE);
		const pageEndIdx = pageStartIdx + pageCards.length;

		for (const card of cards) card.classList.add('hidden');
		for (const card of pageCards) {
			card.classList.remove('hidden');
			if (list) list.appendChild(card);
		}

		if (count) {
			count.textContent = `${matches.length} of ${cards.length} releases shown`;
		}
		if (empty) empty.classList.toggle('hidden', matches.length !== 0);
		renderPagination(matches.length, pageStartIdx, pageEndIdx, totalPages);
		renderActiveFilters();
		writeStateToUrl();
	}

	for (const button of tagButtons) {
		button.addEventListener('click', () => {
			const tag = norm(button.getAttribute('data-change-tag'));
			if (!tag) return;
			if (state.tags.has(tag)) state.tags.delete(tag);
			else state.tags.add(tag);
			state.page = 1;
			render({ preservePage: true });
		});
	}

	searchInput?.addEventListener('input', () => {
		state.q = norm(searchInput.value);
		state.page = 1;
		render({ preservePage: true });
	});

	clearBtn?.addEventListener('click', () => {
		state.q = '';
		state.tags = new Set();
		state.page = 1;
		if (searchInput) searchInput.value = '';
		render({ preservePage: true });
	});

	pageFirst?.addEventListener('click', () => {
		if (state.page <= 1) return;
		state.page = 1;
		render({ preservePage: true });
	});

	pagePrev?.addEventListener('click', () => {
		if (state.page <= 1) return;
		state.page -= 1;
		render({ preservePage: true });
	});

	pageNext?.addEventListener('click', () => {
		state.page += 1;
		render({ preservePage: true });
	});

	pageLast?.addEventListener('click', () => {
		state.page = Number.MAX_SAFE_INTEGER;
		render({ preservePage: true });
	});

	readSeenRelease();
	readStateFromUrl();
	render({ preservePage: true });
	persistSeenRelease();
}
