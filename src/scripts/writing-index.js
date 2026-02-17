const ALL_TYPES = ['paper', 'note', 'memo'];

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

	// Backward compatibility with legacy single-value `type` param.
	const legacyType = norm(url.searchParams.get('type'));
	if (legacyType && legacyType !== 'all' && ALL_TYPES.includes(legacyType)) {
		return [legacyType];
	}

	return [...ALL_TYPES];
}

function syncFromUrl() {
	const url = new URL(window.location.href);
	const q = url.searchParams.get('q');
	const inp = document.querySelector('[data-writing-search]');
	if (inp && q) inp.value = q;
	setSelectedTypes(parseTypesFromUrl(url));
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

	// Remove legacy param if present.
	url.searchParams.delete('type');

	if (q) url.searchParams.set('q', q);
	else url.searchParams.delete('q');

	window.history.replaceState({}, '', url);
}

function clearFilters() {
	const inp = document.querySelector('[data-writing-search]');
	if (inp) inp.value = '';
	setSelectedTypes(ALL_TYPES);
	updateUrl();
	applyFilter();
}

function renderChips() {
	const root = document.querySelector('[data-writing-index]');
	if (!root) return;
	const chips = root.querySelector('[data-writing-chips]');
	if (!chips) return;

	const q = norm(document.querySelector('[data-writing-search]')?.value);
	const selected = getSelectedTypes();

	chips.innerHTML = '';
	const mk = (label, onClick) => {
		const b = document.createElement('button');
		b.type = 'button';
		b.className = 'rounded-full border border-slate-800 bg-slate-950 px-2 py-1 text-xs text-slate-200 hover:bg-slate-900';
		b.textContent = label + ' ×';
		b.addEventListener('click', onClick);
		chips.appendChild(b);
	};

	if (selected.length === 0) {
		mk('Types: none', () => {
			setSelectedTypes(ALL_TYPES);
			updateUrl();
			applyFilter();
		});
	} else if (selected.length < ALL_TYPES.length) {
		mk(`Types: ${selected.join(', ')}`, () => {
			setSelectedTypes(ALL_TYPES);
			updateUrl();
			applyFilter();
		});
	}

	if (q) {
		mk(`Query: ${q}`, () => {
			const inp = document.querySelector('[data-writing-search]');
			if (inp) inp.value = '';
			updateUrl();
			applyFilter();
		});
	}
}

function applyFilter() {
	const root = document.querySelector('[data-writing-index]');
	if (!root) return;

	const q = norm(document.querySelector('[data-writing-search]')?.value);
	const selected = new Set(getSelectedTypes());

	const empty = root.querySelector('[data-writing-empty]');
	let shown = 0;
	const cards = root.querySelectorAll('[data-writing-card]');
	for (const el of cards) {
		const t = norm(el.getAttribute('data-title'));
		const tags = norm(el.getAttribute('data-tags'));
		const elType = norm(el.getAttribute('data-type'));

		let ok = true;
		if (selected.size === 0) ok = false;
		else if (!selected.has(elType)) ok = false;
		if (q && !(t.includes(q) || tags.includes(q))) ok = false;

		el.classList.toggle('hidden', !ok);
		if (ok) shown += 1;
	}
	if (empty) empty.classList.toggle('hidden', shown !== 0);
	renderChips();
}

function applyTag(tag) {
	const inp = document.querySelector('[data-writing-search]');
	if (inp) inp.value = tag;
	updateUrl();
	applyFilter();
}

const searchInput = document.querySelector('[data-writing-search]');
if (searchInput) {
	searchInput.addEventListener('input', () => {
		updateUrl();
		applyFilter();
	});
	searchInput.addEventListener('change', () => {
		updateUrl();
		applyFilter();
	});
}

for (const btn of getTypeToggles()) {
	btn.addEventListener('click', () => {
		const currentlyOn = btn.getAttribute('aria-pressed') !== 'false';
		btn.setAttribute('aria-pressed', currentlyOn ? 'false' : 'true');
		updateUrl();
		applyFilter();
	});
}

// Clicking a tag pill applies it as the search query.
const root = document.querySelector('[data-writing-index]');
if (root) {
	root.addEventListener('click', (e) => {
		const btn = e.target?.closest?.('[data-writing-tag]');
		if (!btn) return;
		e.preventDefault();
		applyTag(btn.getAttribute('data-writing-tag') || '');
	});
}

const clearBtn = document.querySelector('[data-writing-clear]');
if (clearBtn) clearBtn.addEventListener('click', () => clearFilters());

syncFromUrl();
applyFilter();
