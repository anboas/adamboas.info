(function () {
	const form = document.querySelector('[data-contact-form]');
	if (!form) return;

	const statusEl = form.querySelector('[data-contact-status]');
	const errorsEl = form.querySelector('[data-contact-errors]');
	const submitEndpoint = String(form.dataset.contactEndpoint || '').trim();
	const subjectPrefix = String(form.dataset.contactSubject || 'contact form').trim();
	const submitBtn = form.querySelector('[data-contact-submit]');
	const intentSelect = form.querySelector('select[name="intent"]');
	const hp = form.querySelector('input[name="website"]');
	const focusLabelEl = form.querySelector('[data-intent-focus-label]');
	const focusInputEl = form.querySelector('[data-intent-focus-input]');
	const windowLabelEl = form.querySelector('[data-intent-window-label]');
	const windowInputEl = form.querySelector('[data-intent-window-input]');
	const messageLabelEl = form.querySelector('[data-intent-message-label]');
	const messageInputEl = form.querySelector('[data-intent-message-input]');
	const briefPanelEl = form.querySelector('[data-intent-brief]');
	const briefTitleEl = form.querySelector('[data-intent-brief-title]');
	const briefPointsEl = form.querySelector('[data-intent-brief-points]');
	const followupPanelEl = form.querySelector('[data-intent-followups]');

	const loadedAt = Date.now();
	let started = false;
	let messageEdited = false;
	let currentIntent = '';

	const defaultFieldCopy = {
		focusLabel: 'Primary objective',
		focusPlaceholder: 'What outcome do you need most?',
		windowLabel: 'Decision window',
		windowPlaceholder: 'When do you need this moving?',
		messageLabel: 'Project brief',
		messagePlaceholder: 'Context, mission outcome, timeline, constraints, and what success looks like.',
		submitLabel: 'Send request',
	};

	const intentProfiles = {
		consulting: {
			briefTitle: 'For consulting engagements, include:',
			briefPoints: [
				'Mission or delivery blocker',
				'Who owns the decision',
				'What outcome must move in the next 30-60 days',
			],
			focusLabel: 'Blocked decision or mission outcome',
			focusPlaceholder: 'e.g., Program launch blocked by fragmented delivery ownership',
			windowLabel: 'Desired kickoff window',
			windowPlaceholder: 'e.g., Discovery sprint within 2 weeks',
			messageLabel: 'Engagement brief',
			messagePlaceholder:
				'Current state, key stakeholders, constraints, and what a successful first 30 days looks like.',
			template: 'Current state:\n\nPriority outcome:\n\nStakeholders:\n\nConstraints:\n\nSuccess signal in 30 days:\n',
			submitLabel: 'Send consulting request',
		},
		architecture: {
			briefTitle: 'For architecture reviews, include:',
			briefPoints: [
				'System scope and boundaries',
				'Primary risk or failure mode',
				'Decision that needs an external architecture read',
			],
			focusLabel: 'Architecture pressure point',
			focusPlaceholder: 'e.g., IL5 workload scaling bottleneck between data and platform layers',
			windowLabel: 'Review decision deadline',
			windowPlaceholder: 'e.g., Need architecture recommendation before design review on June 10',
			messageLabel: 'Architecture brief',
			messagePlaceholder:
				'Platform context, current design, known constraints, and where you want an outside architecture judgment.',
			template:
				'System context:\n\nPrimary bottleneck:\n\nConstraints (security/compliance/operational):\n\nDecision required:\n\nArtifacts available:\n',
			submitLabel: 'Send architecture request',
		},
		proposal: {
			briefTitle: 'For proposal or capture support, include:',
			briefPoints: [
				'Opportunity identifier and customer',
				'Current capture/proposal phase',
				'Specific section, artifact, or strategy support needed',
			],
			focusLabel: 'Opportunity / bid identifier',
			focusPlaceholder: 'e.g., SAM.gov notice ID or internal pursuit code',
			windowLabel: 'Submission or gate deadline',
			windowPlaceholder: 'e.g., Pink team in 10 days, final due June 1',
			messageLabel: 'Capture/proposal brief',
			messagePlaceholder: 'Opportunity context, win theme pressure points, timeline, and exact support needed.',
			template:
				'Opportunity + customer:\n\nCurrent phase:\n\nSupport needed (narrative, compliance, pricing strategy, etc.):\n\nDeadlines:\n\nWin risks:\n',
			submitLabel: 'Send proposal request',
		},
		speaking: {
			briefTitle: 'For speaking or briefings, include:',
			briefPoints: ['Audience profile and size', 'Venue/date/time constraints', 'Desired takeaways and desired tone'],
			focusLabel: 'Audience and forum',
			focusPlaceholder: 'e.g., Senior gov digital leaders, 45-minute executive forum',
			windowLabel: 'Event date or planning window',
			windowPlaceholder: 'e.g., Event on Sep 14, prep call by Aug 20',
			messageLabel: 'Speaking brief',
			messagePlaceholder:
				'Audience context, session format, non-negotiables, and what the audience should walk away with.',
			template: 'Audience:\n\nEvent format:\n\nCore topic:\n\nDesired takeaway:\n\nDate + logistics:\n',
			submitLabel: 'Send speaking request',
		},
		other: {
			briefTitle: 'Helpful context for custom requests:',
			briefPoints: ['What outcome you need', 'Timeline pressure', 'Best next step for coordination'],
			focusLabel: 'Primary objective',
			focusPlaceholder: 'What are you trying to accomplish?',
			windowLabel: 'Timeline pressure',
			windowPlaceholder: 'When does this matter most?',
			messageLabel: 'Request brief',
			messagePlaceholder: 'Share context, constraints, and what success looks like.',
			template: 'Objective:\n\nContext:\n\nTimeline:\n\nConstraints:\n\nWhat success looks like:\n',
			submitLabel: 'Send request',
		},
	};

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

	const getIntentProfile = (intent) => intentProfiles[(intent || '').toLowerCase()] || null;

	const getSubmitLabel = () => {
		const profile = getIntentProfile(currentIntent);
		return profile?.submitLabel || defaultFieldCopy.submitLabel;
	};

	const setSubmitting = (busy) => {
		if (!submitBtn) return;
		submitBtn.disabled = busy;
		submitBtn.setAttribute('aria-busy', busy ? 'true' : 'false');
		submitBtn.textContent = busy ? 'Sending…' : getSubmitLabel();
	};

	const applyIntentProfile = (intent, { prefillTemplate = false } = {}) => {
		currentIntent = String(intent || '')
			.trim()
			.toLowerCase();
		const profile = getIntentProfile(currentIntent);

		if (!profile) {
			if (briefPanelEl) briefPanelEl.hidden = true;
			if (followupPanelEl) followupPanelEl.hidden = true;
			if (focusLabelEl) focusLabelEl.textContent = defaultFieldCopy.focusLabel;
			if (focusInputEl) focusInputEl.placeholder = defaultFieldCopy.focusPlaceholder;
			if (windowLabelEl) windowLabelEl.textContent = defaultFieldCopy.windowLabel;
			if (windowInputEl) windowInputEl.placeholder = defaultFieldCopy.windowPlaceholder;
			if (messageLabelEl) messageLabelEl.textContent = defaultFieldCopy.messageLabel;
			if (messageInputEl) messageInputEl.placeholder = defaultFieldCopy.messagePlaceholder;
			if (!submitBtn?.disabled) submitBtn.textContent = defaultFieldCopy.submitLabel;
			return;
		}

		if (briefPanelEl) briefPanelEl.hidden = false;
		if (followupPanelEl) followupPanelEl.hidden = false;
		if (briefTitleEl) briefTitleEl.textContent = profile.briefTitle;
		if (briefPointsEl) {
			briefPointsEl.innerHTML = profile.briefPoints.map((item) => `<li>${item}</li>`).join('');
		}
		if (focusLabelEl) focusLabelEl.textContent = profile.focusLabel;
		if (focusInputEl) focusInputEl.placeholder = profile.focusPlaceholder;
		if (windowLabelEl) windowLabelEl.textContent = profile.windowLabel;
		if (windowInputEl) windowInputEl.placeholder = profile.windowPlaceholder;
		if (messageLabelEl) messageLabelEl.textContent = profile.messageLabel;
		if (messageInputEl) messageInputEl.placeholder = profile.messagePlaceholder;
		if (!submitBtn?.disabled) submitBtn.textContent = profile.submitLabel;

		if (prefillTemplate && messageInputEl && !messageEdited && !String(messageInputEl.value || '').trim()) {
			messageInputEl.value = profile.template;
		}
	};

	const prefillIntentFromQuery = () => {
		if (!intentSelect) return '';
		const params = new URLSearchParams(window.location.search);
		const intent = (params.get('intent') || '').trim().toLowerCase();
		if (!intent) return '';
		const match = [...intentSelect.options].find((opt) => opt.value.toLowerCase() === intent);
		if (!match) return '';
		intentSelect.value = match.value;
		return match.value;
	};

	const initialIntent = prefillIntentFromQuery();
	applyIntentProfile(initialIntent, { prefillTemplate: Boolean(initialIntent) });
	track('Contact Form: View');

	if (messageInputEl) {
		messageInputEl.addEventListener('input', () => {
			if (String(messageInputEl.value || '').trim()) messageEdited = true;
		});
	}

	if (intentSelect) {
		intentSelect.addEventListener('change', () => {
			const nextIntent = String(intentSelect.value || '').trim();
			applyIntentProfile(nextIntent, { prefillTemplate: true });
			if (nextIntent) track('Contact Form: Intent Selected', { intent: nextIntent });
		});
	}

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
			applyIntentProfile('');
			messageEdited = false;
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

		data.set('_subject', `${subjectPrefix} lead: ${intent}`);
		data.set('_captcha', 'false');
		data.set('_template', 'table');

		if (!submitEndpoint) {
			setStatus('Contact endpoint is not configured. Use direct email below.', 'error');
			setErrors(['Missing contact endpoint configuration.']);
			track('Contact Form: Error', { intent, reason: 'misconfigured-endpoint' });
			setSubmitting(false);
			return;
		}

		try {
			const response = await fetch(submitEndpoint, {
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
			const resetIntent = prefillIntentFromQuery();
			applyIntentProfile(resetIntent, { prefillTemplate: Boolean(resetIntent) });
			messageEdited = false;
		} catch (error) {
			setStatus('Could not send automatically. Use the email link below.', 'error');
			setErrors(['Automatic submit failed. Please use direct email below.']);
			track('Contact Form: Error', { intent, reason: 'network' });
		} finally {
			setSubmitting(false);
		}
	});
})();
