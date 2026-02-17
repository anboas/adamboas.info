function norm(value) {
	return (value ?? '').toString().trim().toLowerCase();
}

const root = document.querySelector('[data-change-notes]');
if (root) {
	const cards = [...root.querySelectorAll('[data-release-card]')];
	const tagButtons = [...root.querySelectorAll('[data-change-tag]')];
	const searchInput = root.querySelector('[data-change-search]');
	const clearBtn = root.querySelector('[data-change-clear]');
	const empty = root.querySelector('[data-change-empty]');
	const active = root.querySelector('[data-change-active]');
	const count = root.querySelector('[data-change-count]');

	const availableTags = new Set(tagButtons.map((b) => norm(b.getAttribute('data-change-tag'))));
	const state = {
		tags: new Set(),
		q: '',
	};

	function readStateFromUrl() {
		const url = new URL(window.location.href);
		const q = norm(url.searchParams.get('q'));
		const tags = (url.searchParams.get('tags') || '')
			.split(',')
			.map((tag) => norm(tag))
			.filter((tag) => availableTags.has(tag));

		state.q = q;
		state.tags = new Set(tags);
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
				if (searchInput) searchInput.value = '';
				writeStateToUrl();
				render();
			});
		}

		for (const tag of state.tags) {
			addChip(tag, () => {
				state.tags.delete(tag);
				writeStateToUrl();
				render();
			});
		}
	}

	function render() {
		for (const button of tagButtons) {
			const tag = norm(button.getAttribute('data-change-tag'));
			button.setAttribute('aria-pressed', state.tags.has(tag) ? 'true' : 'false');
		}

		let shown = 0;
		for (const card of cards) {
			const cardTags = norm(card.getAttribute('data-tags')).split(',').filter(Boolean);
			const cardSearch = norm(card.getAttribute('data-search'));
			const tagMatch = state.tags.size === 0 || cardTags.some((tag) => state.tags.has(tag));
			const searchMatch = !state.q || cardSearch.includes(state.q);
			const visible = tagMatch && searchMatch;
			card.classList.toggle('hidden', !visible);
			if (visible) shown += 1;
		}

		if (count) count.textContent = `${shown} of ${cards.length} releases shown`;
		if (empty) empty.classList.toggle('hidden', shown !== 0);
		renderActiveFilters();
	}

	for (const button of tagButtons) {
		button.addEventListener('click', () => {
			const tag = norm(button.getAttribute('data-change-tag'));
			if (!tag) return;
			if (state.tags.has(tag)) state.tags.delete(tag);
			else state.tags.add(tag);
			writeStateToUrl();
			render();
		});
	}

	searchInput?.addEventListener('input', () => {
		state.q = norm(searchInput.value);
		writeStateToUrl();
		render();
	});

	clearBtn?.addEventListener('click', () => {
		state.q = '';
		state.tags = new Set();
		if (searchInput) searchInput.value = '';
		writeStateToUrl();
		render();
	});

	readStateFromUrl();
	render();
}
