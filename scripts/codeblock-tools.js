function ensureTools(pre) {
	if (pre.dataset.toolsApplied === '1') return;
	pre.dataset.toolsApplied = '1';

	const wrap = document.createElement('button');
	wrap.type = 'button';
	wrap.className = 'code-tool';
	wrap.textContent = 'Wrap';

	const copy = document.createElement('button');
	copy.type = 'button';
	copy.className = 'code-tool';
	copy.textContent = 'Copy';

	const bar = document.createElement('div');
	bar.className = 'code-tools';
	bar.append(wrap, copy);

	pre.style.position = 'relative';
	pre.prepend(bar);

	const syncWrapState = (isWrapped) => {
		wrap.setAttribute('aria-pressed', isWrapped ? 'true' : 'false');
		wrap.textContent = isWrapped ? 'Unwrap' : 'Wrap';
	};

	syncWrapState(pre.classList.contains('code-wrap'));

	wrap.addEventListener('click', () => {
		const isWrapped = pre.classList.toggle('code-wrap');
		syncWrapState(isWrapped);
		if (typeof window.__track === 'function') window.__track('Code: Toggle Wrap', { wrapped: isWrapped });
	});

	copy.addEventListener('click', async () => {
		try {
			const code = pre.querySelector('code');
			const txt = code?.innerText ?? '';
			await navigator.clipboard.writeText(txt);
			copy.textContent = 'Copied';
			setTimeout(() => (copy.textContent = 'Copy'), 900);
			if (typeof window.__track === 'function') window.__track('Code: Copy');
		} catch {
			copy.textContent = 'Failed';
			setTimeout(() => (copy.textContent = 'Copy'), 900);
		}
	});
}

for (const pre of document.querySelectorAll('.paper-content pre')) {
	ensureTools(pre);
}
