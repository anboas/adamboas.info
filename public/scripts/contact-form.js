(function () {
	const form = document.querySelector('[data-contact-form]');
	if (!form) return;

	const statusEl = form.querySelector('[data-contact-status]');
	const errorsEl = form.querySelector('[data-contact-errors]');
	const submitBtn = form.querySelector('[data-contact-submit]');
	const intentSelect = form.querySelector('select[name="intent"]');
	const hp = form.querySelector('input[name="website"]');
	const loadedAt = Date.now();
	let started = false;

	const track = (name, props) => {
		try {
			if (typeof window.__track === 'function') window.__track(name, props);
		} catch {}
	};

	const setStatus = (message, tone = 'neutral') => {
		if (!statusEl) return;
		statusEl.textContent = message || '';
		statusEl.dataset.tone = tone;
	};

	const setErrors = (errors) => {
		if (!errorsEl) return;
		if (!errors || !errors.length) {
			errorsEl.innerHTML = '';
			errorsEl.hidden = true;
			return;
		}
		errorsEl.hidden = false;
		errorsEl.innerHTML = `<ul class="space-y-1">${errors.map((e) => `<li>• ${e}</li>`).join('')}</ul>`;
	};

	const setSubmitting = (busy) => {
		if (!submitBtn) return;
		submitBtn.disabled = busy;
		submitBtn.setAttribute('aria-busy', busy ? 'true' : 'false');
		submitBtn.textContent = busy ? 'Sending…' : 'Send request';
	};

	const prefillIntentFromQuery = () => {
		if (!intentSelect) return;
		const params = new URLSearchParams(window.location.search);
		const intent = (params.get('intent') || '').trim().toLowerCase();
		if (!intent) return;
		const match = [...intentSelect.options].find((opt) => opt.value.toLowerCase() === intent);
		if (match) intentSelect.value = match.value;
	};

	prefillIntentFromQuery();
	track('Contact Form: View');

	form.addEventListener('focusin', () => {
		if (started) return;
		started = true;
		track('Contact Form: Start');
	});

	form.addEventListener('submit', async (event) => {
		event.preventDefault();
		setErrors([]);
		setStatus('');

		const data = new FormData(form);
		const errors = [];

		const name = String(data.get('name') || '').trim();
		const email = String(data.get('email') || '').trim();
		const intent = String(data.get('intent') || '').trim();
		const message = String(data.get('message') || '').trim();
		const spamTrap = String(data.get('website') || '').trim();
		const elapsedMs = Date.now() - loadedAt;

		if (spamTrap) {
			track('Contact Form: Spam Trap');
			setStatus('Thanks. Your request was received.', 'success');
			form.reset();
			return;
		}

		if (elapsedMs < 1200) {
			errors.push('Please wait a second before submitting.');
		}
		if (name.length < 2) errors.push('Please enter your name.');
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Please enter a valid email address.');
		if (!intent) errors.push('Please choose the request type.');
		if (message.length < 20) errors.push('Please provide at least a short project brief (20+ characters).');

		if (errors.length) {
			setErrors(errors);
			setStatus('Please fix the highlighted issues and try again.', 'error');
			track('Contact Form: Validation Error', { count: errors.length });
			return;
		}

		setSubmitting(true);
		setStatus('Sending request…', 'neutral');
		track('Contact Form: Submit', { intent });

		data.set('_subject', `adamboas.com lead: ${intent}`);
		data.set('_captcha', 'false');
		data.set('_template', 'table');

		try {
			const response = await fetch('https://formsubmit.co/ajax/anboas@gmail.com', {
				method: 'POST',
				headers: { Accept: 'application/json' },
				body: data,
			});
			const payload = await response.json().catch(() => ({}));

			if (!response.ok || payload?.success === false) {
				throw new Error(payload?.message || 'Submit failed');
			}

			setStatus('Request sent. You should hear back shortly.', 'success');
			track('Contact Form: Success', { intent });
			form.reset();
			prefillIntentFromQuery();
		} catch (error) {
			setStatus('Could not send automatically. Use the email link below.', 'error');
			setErrors(['Automatic submit failed. Please use direct email below.']);
			track('Contact Form: Error', { intent, reason: 'network' });
		} finally {
			setSubmitting(false);
		}
	});
})();
