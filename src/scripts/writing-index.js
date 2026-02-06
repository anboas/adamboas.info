function norm(s) {
	return (s ?? '').toString().trim().toLowerCase();
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

for (const sel of ['[data-writing-search]', '[data-writing-type]']) {
	const el = document.querySelector(sel);
	if (el) el.addEventListener('input', applyFilter);
	if (el) el.addEventListener('change', applyFilter);
}

applyFilter();
