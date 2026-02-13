for (const btn of document.querySelectorAll('[data-copy-link]')) {
	btn.addEventListener('click', async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			btn.textContent = 'Copied';
			setTimeout(() => (btn.textContent = 'Copy link'), 900);
			if (typeof window.__track === 'function') window.__track('Writing: Copy Link');
		} catch {
			btn.textContent = 'Failed';
			setTimeout(() => (btn.textContent = 'Copy link'), 900);
		}
	});
}
