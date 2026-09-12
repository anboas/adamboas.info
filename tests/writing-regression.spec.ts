import { test, expect } from '@playwright/test';

const BASE = process.env.SITE_BASE ?? 'https://www.adamboas.com';

test.describe('writing controls regression', () => {
	test('capacity paper publishes its canonical HTML, PDF, and mobile layout', async ({ page }) => {
		await page.setViewportSize({ width: 390, height: 844 });

		await page.goto(`${BASE}/writing/`, { waitUntil: 'networkidle' });
		await expect(page.locator('a[href="/writing/capacity-to-absorb-change/"]').first()).toBeVisible();

		const response = await page.goto(`${BASE}/writing/capacity-to-absorb-change/`, { waitUntil: 'networkidle' });
		expect(response?.ok()).toBeTruthy();
		await expect(page.locator('h1')).toHaveText('The Next Software Bottleneck Is the Capacity to Absorb Change');
		await expect(page.locator('#connect-authority-evidence-and-acceptance')).toBeVisible();
		await expect(page.locator('#prove-capacity-not-activity')).toBeVisible();
		await expect(page.locator('a[href="/papers/capacity-to-absorb-change.pdf"]')).toBeVisible();
		const pageviews = page.locator('.pageviews-chip');
		await expect(pageviews).toHaveAttribute('data-pageviews-state', /pending|counted/);
		await expect(pageviews).not.toHaveText(/^0 views/);
		await expect(page.locator('meta[name="description"]')).toHaveAttribute(
			'content',
			/capacity to verify, accept, field, and sustain/,
		);

		const pdf = await page.request.get(`${BASE}/papers/capacity-to-absorb-change.pdf`);
		expect(pdf.ok()).toBeTruthy();
		expect(pdf.headers()['content-type']).toContain('application/pdf');

		const overflow = await page.evaluate(
			() => document.documentElement.scrollWidth - document.documentElement.clientWidth,
		);
		expect(overflow).toBeLessThanOrEqual(1);
	});

	test('exposes only the current writing controls', async ({ page }) => {
		await page.goto(`${BASE}/writing/`, { waitUntil: 'networkidle' });

		await expect(page.getByRole('heading', { name: 'Featured', exact: true })).toHaveCount(0);
		await expect(page.getByText('Start here.', { exact: true })).toHaveCount(0);

		await expect(page.locator('[data-writing-set-all]')).toHaveAttribute('data-tooltip', /\S+/);
		await expect(page.locator('[data-writing-set-all]')).toHaveCSS('cursor', 'pointer');
		for (const type of ['paper', 'note', 'memo']) {
			await expect(page.locator(`[data-writing-type-toggle="${type}"]`)).toHaveAttribute('data-tooltip', /\S+/);
		}
		await expect(page.locator('[data-writing-search]')).toBeVisible();
		await expect(page.locator('[data-writing-sort]')).toBeVisible();
		await expect(page.locator('[data-writing-clear]')).toBeVisible();
		await expect(page.locator('[data-writing-clear]')).toBeDisabled();
		await expect(page.locator('a[href="/writing/tags/"]')).toHaveCount(1);

		await expect(
			page.locator(
				'[data-writing-quick], [data-writing-density-toggle], [data-writing-view-toggle], [data-writing-timeline], [data-writing-tag-chip]',
			),
		).toHaveCount(0);
	});

	test('mobile readers can reach the full writing index', async ({ page }) => {
		await page.setViewportSize({ width: 390, height: 844 });
		await page.goto(`${BASE}/writing/`, { waitUntil: 'networkidle' });

		const previousPageButton = page.locator('[data-writing-page-prev]');
		const nextPageButton = page.locator('[data-writing-page-next]');
		await nextPageButton.scrollIntoViewIfNeeded();
		await expect(previousPageButton).toBeVisible();
		await expect(nextPageButton).toBeVisible();
		await expect(page.locator('[data-writing-page-first]')).toBeHidden();
		await expect(page.locator('[data-writing-page-last]')).toBeHidden();

		for (const control of [previousPageButton, nextPageButton]) {
			const box = await control.boundingBox();
			expect(box?.height).toBeGreaterThanOrEqual(44);
		}

		const scrollMetrics = await page.evaluate(() => ({
			scrollY: window.scrollY,
			documentHeight: document.documentElement.scrollHeight,
			bodyHeight: document.body.scrollHeight,
		}));
		expect(scrollMetrics.scrollY).toBeGreaterThan(500);
		expect(scrollMetrics.documentHeight).toBeGreaterThanOrEqual(scrollMetrics.bodyHeight);
	});

	test('mobile filters use touch targets, full-width search, and live result counts', async ({ page }) => {
		await page.setViewportSize({ width: 390, height: 844 });
		await page.goto(`${BASE}/writing/`, { waitUntil: 'networkidle' });

		await expect(page.locator('#global-shortcuts-fab')).toBeHidden();
		await expect(page.locator('#global-shortcut-leader')).toBeHidden();

		const controls = [
			page.locator('[data-writing-set-all]'),
			...['paper', 'note', 'memo'].map((type) => page.locator(`[data-writing-type-toggle="${type}"]`)),
			page.locator('[data-writing-search]'),
			page.locator('[data-writing-sort]'),
			page.locator('[data-writing-clear]'),
			page.locator('a[href="/writing/tags/"]'),
		];
		for (const control of controls) {
			const box = await control.boundingBox();
			expect(box?.height).toBeGreaterThanOrEqual(44);
		}

		const search = page.locator('[data-writing-search]');
		const searchBox = await search.boundingBox();
		expect(searchBox?.width).toBeGreaterThanOrEqual(320);

		const cards = page.locator('[data-writing-card]');
		await expect(page.locator('[data-writing-result-count]')).toHaveText(`${await cards.count()} published items`);

		await search.fill('control plane');
		const visibleCount = await page.locator('[data-writing-card]:visible').count();
		await expect(page.locator('[data-writing-result-count]')).toHaveText(
			`${visibleCount} ${visibleCount === 1 ? 'match' : 'matches'}`,
		);

		await page.setViewportSize({ width: 1024, height: 768 });
		await expect(page.locator('#global-shortcuts-fab')).toBeVisible();
	});

	test('mobile card titles and descriptions use the full content width below metadata', async ({ page }) => {
		await page.setViewportSize({ width: 390, height: 844 });

		for (const surface of [
			{
				path: '/writing/',
				card: '[data-writing-card]:visible',
				title: '[data-writing-card-title]',
				description: '[data-writing-card-description]',
			},
			{
				path: '/',
				card: '[data-writing-compact-card]',
				title: '[data-writing-card-title]',
				description: '[data-writing-card-description]',
			},
		]) {
			await page.goto(`${BASE}${surface.path}`, { waitUntil: 'networkidle' });
			const card = page.locator(surface.card).first();
			const title = card.locator(surface.title);
			const description = card.locator(surface.description);
			await expect(title).toBeVisible();
			await expect(description).toBeVisible();

			const geometry = await card.evaluate((element, selectors) => {
				const titleElement = element.querySelector(selectors.title);
				const descriptionElement = element.querySelector(selectors.description);
				if (!(titleElement instanceof HTMLElement) || !(descriptionElement instanceof HTMLElement)) return null;

				const cardRect = element.getBoundingClientRect();
				const titleRect = titleElement.getBoundingClientRect();
				const descriptionRect = descriptionElement.getBoundingClientRect();
				const cardStyle = getComputedStyle(element);
				const titleStyle = getComputedStyle(titleElement);
				const descriptionStyle = getComputedStyle(descriptionElement);
				return {
					availableWidth:
						cardRect.width -
						Number.parseFloat(cardStyle.borderLeftWidth) -
						Number.parseFloat(cardStyle.borderRightWidth) -
						Number.parseFloat(cardStyle.paddingLeft) -
						Number.parseFloat(cardStyle.paddingRight),
					titleWidth: titleRect.width,
					titleLineClamp: titleStyle.getPropertyValue('-webkit-line-clamp'),
					descriptionWidth: descriptionRect.width,
					descriptionLineClamp: descriptionStyle.getPropertyValue('-webkit-line-clamp'),
				};
			}, surface);

			expect(geometry).not.toBeNull();
			expect(geometry!.titleWidth).toBeGreaterThanOrEqual(geometry!.availableWidth - 1);
			expect(geometry!.titleLineClamp).toBe('2');
			expect(geometry!.descriptionWidth).toBeGreaterThanOrEqual(geometry!.availableWidth - 1);
			expect(geometry!.descriptionLineClamp).toBe('3');
		}
	});

	test('type filters sync to the URL and never allow an empty selection', async ({ page }) => {
		await page.goto(`${BASE}/writing/`, { waitUntil: 'networkidle' });

		const all = page.locator('[data-writing-set-all]');
		const paper = page.locator('[data-writing-type-toggle="paper"]');
		const note = page.locator('[data-writing-type-toggle="note"]');
		const memo = page.locator('[data-writing-type-toggle="memo"]');

		await note.click();
		await memo.click();
		await expect(paper).toHaveAttribute('aria-pressed', 'true');
		await expect(note).toHaveAttribute('aria-pressed', 'false');
		await expect(memo).toHaveAttribute('aria-pressed', 'false');
		await expect(all).toHaveAttribute('aria-pressed', 'false');
		await expect(page.locator('[data-writing-clear]')).toBeEnabled();
		await expect.poll(() => new URL(page.url()).searchParams.get('types')).toBe('paper');

		const visibleTypes = await page
			.locator('[data-writing-card]:visible')
			.evaluateAll((cards) => cards.map((card) => card.getAttribute('data-type')));
		expect(visibleTypes.length).toBeGreaterThan(0);
		expect(new Set(visibleTypes)).toEqual(new Set(['paper']));

		await paper.click();
		await expect(paper).toHaveAttribute('aria-pressed', 'true');

		await all.click();
		await expect(all).toHaveAttribute('aria-pressed', 'true');
		await expect(page.locator('[data-writing-clear]')).toBeDisabled();
		await expect.poll(() => new URL(page.url()).searchParams.has('types')).toBe(false);
	});

	test('search, sort, pagination, and clear remain deterministic', async ({ page }) => {
		await page.goto(`${BASE}/writing/`, { waitUntil: 'networkidle' });

		const search = page.locator('[data-writing-search]');
		const clear = page.locator('[data-writing-clear]');
		await expect(clear).toBeDisabled();
		await search.fill('next software bottleneck');
		await expect(clear).toBeEnabled();
		await expect(page.locator('[data-writing-card]:visible')).toHaveCount(1);
		await expect(page.locator('[data-writing-card]:visible')).toHaveAttribute(
			'data-title',
			'The Next Software Bottleneck Is the Capacity to Absorb Change',
		);
		await expect(page.locator('[data-writing-chips]')).toContainText('Query: next software bottleneck');
		await expect.poll(() => new URL(page.url()).searchParams.get('q')).toBe('next software bottleneck');

		await clear.click();
		await expect(search).toHaveValue('');
		await expect(clear).toBeDisabled();
		await expect.poll(() => new URL(page.url()).searchParams.has('q')).toBe(false);

		await search.fill('expanding the department');
		await expect(page.locator('[data-writing-card]:visible')).toHaveCount(1);
		await expect(page.locator('[data-writing-card]:visible')).toHaveAttribute(
			'data-title',
			'The Next Software Bottleneck Is the Capacity to Absorb Change',
		);
		await expect(page.locator('[data-writing-result-count]')).toHaveText('1 match');
		await clear.click();

		await page.locator('[data-writing-sort]').selectOption('oldest');
		await expect(clear).toBeEnabled();
		await expect.poll(() => new URL(page.url()).searchParams.get('sort')).toBe('oldest');
		const visibleDates = await page
			.locator('[data-writing-card]:visible')
			.evaluateAll((cards) => cards.map((card) => Number(card.getAttribute('data-date-ms'))));
		expect(visibleDates.every((date, index) => index === 0 || visibleDates[index - 1] <= date)).toBe(true);

		await expect(page.locator('[data-writing-pagination]')).toBeVisible();
		await page.locator('[data-writing-page-last]').click();
		await expect.poll(() => Number(new URL(page.url()).searchParams.get('page'))).toBeGreaterThan(1);
		await expect(page.locator('[data-writing-page-last]')).toBeDisabled();

		await clear.click();
		await expect(page.locator('[data-writing-sort]')).toHaveValue('newest');
		await expect(clear).toBeDisabled();
		await expect.poll(() => new URL(page.url()).search).toBe('');
	});

	test('retired preferences and URL parameters cannot create a hidden mode', async ({ page }) => {
		await page.addInitScript(() => {
			window.localStorage.setItem(
				'writing:index:view-prefs:v1',
				JSON.stringify({
					types: ['paper'],
					density: 'compact',
					view: 'timeline',
					quick: { hasAudio: true, recent30: true },
				}),
			);
		});

		await page.goto(`${BASE}/writing/?view=timeline&audio=1&recent=1&density=compact&papers=1`, {
			waitUntil: 'networkidle',
		});

		await expect(page.locator('[data-writing-list]')).toBeVisible();
		await expect(page.locator('[data-writing-card]:visible').first()).toBeVisible();
		await expect(page.locator('[data-writing-set-all]')).toHaveAttribute('aria-pressed', 'true');
		await expect.poll(() => new URL(page.url()).search).toBe('');
	});
});
