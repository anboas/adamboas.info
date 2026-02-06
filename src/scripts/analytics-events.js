function fire(name, props) {
	try {
		if (typeof window.plausible === 'function') {
			window.plausible(name, props ? { props } : undefined);
		}
	} catch {
		// ignore
	}
}

// Track outbound mailto clicks + explicit tracked elements.
document.addEventListener('click', (e) => {
	const a = e.target?.closest?.('a');
	if (!a) return;

	const track = a.getAttribute('data-track');
	if (track) {
		fire(track);
		return;
	}

	const href = a.getAttribute('href') || '';
	if (href.startsWith('mailto:')) {
		fire('Contact: Email Click');
	}
});

// Expose for other scripts (codeblock tools, etc.)
window.__track = fire;
