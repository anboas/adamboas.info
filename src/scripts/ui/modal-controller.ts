type ModalControllerOptions = {
	root: HTMLElement;
	panel: HTMLElement;
	closeNodes?: NodeListOf<Element> | Element[];
	closeDelayMs?: number;
	openClass?: string;
	focusSelector?: string;
	swipeToClose?: boolean;
};

const DEFAULT_FOCUS_SELECTOR = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function createModalController(options: ModalControllerOptions) {
	const {
		root,
		panel,
		closeNodes = [],
		closeDelayMs = 120,
		openClass = 'is-open',
		focusSelector = DEFAULT_FOCUS_SELECTOR,
		swipeToClose = false,
	} = options;

	let previousFocus: HTMLElement | null = null;
	let scrollY = 0;
	let touchStartY: number | null = null;

	const lockScroll = () => {
		scrollY = window.scrollY || window.pageYOffset || 0;
		document.body.style.position = 'fixed';
		document.body.style.top = `-${scrollY}px`;
		document.body.style.left = '0';
		document.body.style.right = '0';
		document.body.style.width = '100%';
	};

	const unlockScroll = () => {
		document.body.style.position = '';
		document.body.style.top = '';
		document.body.style.left = '';
		document.body.style.right = '';
		document.body.style.width = '';
		window.scrollTo(0, scrollY);
	};

	const focusables = () => Array.from(root.querySelectorAll<HTMLElement>(focusSelector));

	const trapFocus = (event: KeyboardEvent) => {
		if (event.key !== 'Tab' || root.hidden) return;
		const nodes = focusables();
		if (!nodes.length) return;
		const first = nodes[0];
		const last = nodes[nodes.length - 1];
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	};

	const close = () => {
		if (root.hidden) return;
		root.classList.remove(openClass);
		window.setTimeout(() => {
			root.hidden = true;
			unlockScroll();
			if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
		}, closeDelayMs);
	};

	const open = (source?: HTMLElement | null, focusTarget?: HTMLElement | null) => {
		previousFocus = source ?? (document.activeElement as HTMLElement | null);
		lockScroll();
		root.hidden = false;
		window.requestAnimationFrame(() => root.classList.add(openClass));
		(focusTarget ?? root.querySelector<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))?.focus();
	};

	Array.from(closeNodes).forEach((node) => node.addEventListener('click', close));

	if (swipeToClose) {
		panel.addEventListener('touchstart', (event) => {
			touchStartY = event.touches?.[0]?.clientY ?? null;
		}, { passive: true });
		panel.addEventListener('touchend', (event) => {
			if (touchStartY === null) return;
			const endY = event.changedTouches?.[0]?.clientY ?? touchStartY;
			if (endY - touchStartY > 96) close();
			touchStartY = null;
		}, { passive: true });
	}

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && !root.hidden) close();
		trapFocus(event);
	});

	return { open, close };
}
