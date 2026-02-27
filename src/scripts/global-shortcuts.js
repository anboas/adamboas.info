(() => {
	if (window.__abGlobalShortcutsInit) return;
	window.__abGlobalShortcutsInit = true;

	const body = document.body;
	const base = body?.dataset?.siteBase || '/';
	const overlay = document.getElementById('global-shortcuts-overlay');
	const fab = document.getElementById('global-shortcuts-fab');
	const leaderPill = document.getElementById('global-shortcut-leader');
	const closeButtons = document.querySelectorAll('[data-shortcuts-close]');
	const jumpButtons = document.querySelectorAll('[data-shortcut-nav]');

	const NAV = {
		h: '/',
		w: '/writing/',
		e: '/events/',
		o: '/opportunities/',
		c: '/changes/',
	};

	let leaderMode = false;
	let leaderTimer = null;

	function withBase(path) {
		const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
		const cleanPath = path.startsWith('/') ? path : `/${path}`;
		return `${cleanBase}${cleanPath}`;
	}

	function isEditable(target) {
		if (!target || !(target instanceof HTMLElement)) return false;
		if (target.isContentEditable) return true;
		const tag = target.tagName;
		if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true;
		return Boolean(target.closest('[contenteditable="true"]'));
	}

	function openOverlay() {
		if (!overlay) return;
		overlay.hidden = false;
		body.classList.add('shortcuts-open');
	}

	function closeOverlay() {
		if (!overlay) return;
		overlay.hidden = true;
		body.classList.remove('shortcuts-open');
	}

	function setLeaderMode(on) {
		leaderMode = on;
		if (leaderPill) leaderPill.classList.toggle('is-visible', on);
		if (leaderTimer) {
			window.clearTimeout(leaderTimer);
			leaderTimer = null;
		}
		if (on) {
			leaderTimer = window.setTimeout(() => setLeaderMode(false), 1400);
		}
	}

	function focusSearch() {
		const candidates = [
			...document.querySelectorAll('[data-global-search]'),
			...document.querySelectorAll('input[type="search"]'),
			...document.querySelectorAll('input[name="q"]'),
		];

		for (const el of candidates) {
			if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) continue;
			if (el.disabled || el.type === 'hidden') continue;
			if (el.offsetParent === null) continue;
			const details = el.closest('details');
			if (details && !details.open) details.open = true;
			el.focus({ preventScroll: false });
			if ('select' in el) el.select();
			return true;
		}
		return false;
	}

	function navigate(path) {
		window.location.assign(withBase(path));
	}

	function prefetchLikelyRoutes() {
		const currentPath = window.location.pathname;
		const candidates = Object.values(NAV)
			.map((path) => withBase(path))
			.filter((href, idx, arr) => arr.indexOf(href) === idx)
			.filter((href) => {
				try {
					const url = new URL(href, window.location.origin);
					return !currentPath.startsWith(url.pathname);
				} catch {
					return true;
				}
			});

		for (const href of candidates) {
			const link = document.createElement('link');
			link.rel = 'prefetch';
			link.href = href;
			document.head.appendChild(link);
		}
	}

	for (const btn of closeButtons) btn.addEventListener('click', closeOverlay);
	for (const btn of jumpButtons) {
		btn.addEventListener('click', () => {
			const key = btn.getAttribute('data-shortcut-nav') || '';
			const route = NAV[key];
			if (route) navigate(route);
		});
	}
	fab?.addEventListener('click', openOverlay);

	if ('requestIdleCallback' in window) {
		window.requestIdleCallback(() => prefetchLikelyRoutes(), { timeout: 1600 });
	} else {
		window.setTimeout(() => prefetchLikelyRoutes(), 350);
	}

	document.addEventListener('keydown', (event) => {
		if (event.defaultPrevented) return;

		if (event.key === 'Escape') {
			setLeaderMode(false);
			closeOverlay();
			return;
		}

		if (overlay && !overlay.hidden) {
			if (event.key === '?') {
				event.preventDefault();
				closeOverlay();
			}
			return;
		}

		const target = event.target;
		const editable = isEditable(target);

		if (editable) return;
		if (event.metaKey || event.ctrlKey || event.altKey) return;

		if (event.key === '?') {
			event.preventDefault();
			openOverlay();
			return;
		}

		if (event.key === '/') {
			if (focusSearch()) event.preventDefault();
			return;
		}

		const key = event.key.toLowerCase();

		if (leaderMode) {
			setLeaderMode(false);
			if (NAV[key]) {
				event.preventDefault();
				navigate(NAV[key]);
			}
			return;
		}

		if (key === 'g') {
			event.preventDefault();
			setLeaderMode(true);
		}
	});
})();
