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

function applyFilter() {
	const root = document.querySelector('[data-writing-index]');
	if (!root) return;

	const q = norm(document.querySelector('[data-writing-search]')?.value);
	const type = document.querySelector('[data-writing-type]')?.value || 'all';

	const cards = root.querySelectorAll('[data-writing-card]');
	for (const el of cards) {
		const t = norm(el.getAttribute('data-title'));
		const tags = norm(el.getAttribute('data-tags'));
		const elType = el.getAttribute('data-type') || '';

		let ok = true;
		if (type !== 'all' && elType !== type) ok = false;
		if (q && !(t.includes(q) || tags.includes(q))) ok = false;

		el.classList.toggle('hidden', !ok);
	}
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

syncFromUrl();
applyFilter();
