function norm(s) {
	return (s ?? '').toString().trim().toLowerCase();
}

function syncFromUrl() {
	const url = new URL(window.location.href);
	const t = url.searchParams.get('type');
	const q = url.searchParams.get('q');
	const sel = document.querySelector('[data-writing-type]');
	const inp = document.querySelector('[data-writing-search]');
	if (sel && t) sel.value = t;
	if (inp && q) inp.value = q;
}

function clearFilters() {
	const sel = document.querySelector('[data-writing-type]');
	const inp = document.querySelector('[data-writing-search]');
	if (sel) sel.value = 'all';
	if (inp) inp.value = '';
	updateUrl();
	applyFilter();
}



function renderChips() {
	const root = document.querySelector('[data-writing-index]');
	if (!root) return;
	const chips = root.querySelector('[data-writing-chips]');
	if (!chips) return;

	const q = norm(document.querySelector('[data-writing-search]')?.value);
	const type = document.querySelector('[data-writing-type]')?.value || 'all';

	chips.innerHTML = '';
	const mk = (label, onClick) => {
		const b = document.createElement('button');
		b.type = 'button';
		b.className = 'rounded-full border border-slate-800 bg-slate-950 px-2 py-1 text-xs text-slate-200 hover:bg-slate-900';
		b.textContent = label + ' ×';
		b.addEventListener('click', onClick);
		chips.appendChild(b);
	};

	if (type !== 'all') mk(`Type: ${type}`, () => {
		const sel = document.querySelector('[data-writing-type]');
		if (sel) sel.value = 'all';
		updateUrl();
		applyFilter();
	});
	if (q) mk(`Query: ${q}`, () => {
		const inp = document.querySelector('[data-writing-search]');
		if (inp) inp.value = '';
		updateUrl();
		applyFilter();
	});
}

function applyFilter() {
	const root = document.querySelector('[data-writing-index]');
	if (!root) return;

	const q = norm(document.querySelector('[data-writing-search]')?.value);
	const type = document.querySelector('[data-writing-type]')?.value || 'all';

	const empty = root.querySelector('[data-writing-empty]');
	let shown = 0;
	const cards = root.querySelectorAll('[data-writing-card]');
	for (const el of cards) {
		const t = norm(el.getAttribute('data-title'));
		const tags = norm(el.getAttribute('data-tags'));
		const elType = el.getAttribute('data-type') || '';

		let ok = true;
		if (type !== 'all' && elType !== type) ok = false;
		if (q && !(t.includes(q) || tags.includes(q))) ok = false;

		el.classList.toggle('hidden', !ok);
		if (ok) shown += 1;
	}
	if (empty) empty.classList.toggle('hidden', shown !== 0);
	renderChips();
}

function updateUrl() {
	const url = new URL(window.location.href);
	const q = norm(document.querySelector('[data-writing-search]')?.value);
	const type = document.querySelector('[data-writing-type]')?.value || 'all';
	if (type && type !== 'all') url.searchParams.set('type', type);
	else url.searchParams.delete('type');
	if (q) url.searchParams.set('q', q);
	else url.searchParams.delete('q');
	window.history.replaceState({}, '', url);
}



function applyTag(tag) {
	const inp = document.querySelector('[data-writing-search]');
	if (inp) inp.value = tag;
	updateUrl();
	applyFilter();
}

for (const sel of ['[data-writing-search]', '[data-writing-type]']) {
	const el = document.querySelector(sel);
	if (el) el.addEventListener('input', () => {
		updateUrl();
		applyFilter();
	});
	if (el) el.addEventListener('change', () => {
		updateUrl();
		applyFilter();
	});
}



// Clicking a tag pill applies it as the search query.
const root = document.querySelector('[data-writing-index]');
if (root) root.addEventListener('click', (e) => {
	const btn = e.target?.closest?.('[data-writing-tag]');
	if (!btn) return;
	e.preventDefault();
	applyTag(btn.getAttribute('data-writing-tag') || '');
});

const clearBtn = document.querySelector('[data-writing-clear]');
if (clearBtn) clearBtn.addEventListener('click', () => clearFilters());

syncFromUrl();
applyFilter();
