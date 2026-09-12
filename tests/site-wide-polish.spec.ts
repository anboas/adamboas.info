import { test, expect } from '@playwright/test';

const BASE = process.env.SITE_BASE ?? 'https://www.adamboas.com';

async function visibleControlHeights(page, selector: string) {
	return page.locator(selector).evaluateAll((elements) =>
		elements
			.map((element) => {
				const box = element.getBoundingClientRect();
				return {
					label: (element.getAttribute('aria-label') || element.textContent || '').replace(/\s+/g, ' ').trim(),
					height: box.height,
					width: box.width,
				};
			})
			.filter((control) => control.width > 0 && control.height > 0),
	);
}

test.describe('site-wide mobile polish', () => {
	test.beforeEach(async ({ page }) => {
		await page.setViewportSize({ width: 390, height: 844 });
	});

	test('opportunity filters fit the viewport and the data table scrolls inside its wrapper', async ({ page }) => {
		await page.goto(`${BASE}/opportunities/`, { waitUntil: 'networkidle' });

		const metrics = await page.evaluate(() => {
			const wrapper = document.querySelector('#opp-table-wrap');
			const search = document.querySelector('#opp-filter-search');
			const shell = document.querySelector('.opp-controls-shell');
			if (!wrapper || !search || !shell) return null;

			const wrapperBox = wrapper.getBoundingClientRect();
			const searchBox = search.getBoundingClientRect();
			const shellBox = shell.getBoundingClientRect();
			return {
				viewport: innerWidth,
				documentWidth: document.documentElement.scrollWidth,
				searchWidth: searchBox.width,
				shellWidth: shellBox.width,
				wrapperWidth: wrapperBox.width,
				wrapperScrollWidth: wrapper.scrollWidth,
			};
		});

		expect(metrics, 'opportunities controls or table wrapper missing').not.toBeNull();
		expect(metrics!.documentWidth).toBe(metrics!.viewport);
		expect(metrics!.searchWidth).toBeLessThanOrEqual(metrics!.shellWidth);
		expect(metrics!.wrapperWidth).toBeLessThanOrEqual(metrics!.viewport);
		expect(metrics!.wrapperScrollWidth).toBeGreaterThan(metrics!.wrapperWidth);

		await page.locator('#opp-table-wrap').evaluate((element) => element.scrollTo({ left: 200 }));
		await expect
			.poll(() => page.locator('#opp-table-wrap').evaluate((element) => element.scrollLeft))
			.toBeGreaterThan(0);
	});

	for (const contract of [
		{
			route: '/',
			selector: 'header details summary, .ui-link-btn, footer .footer-link',
		},
		{
			route: '/profile/',
			selector:
				'.sticky-browse a, .sticky-browse summary, [data-speaking-shell] .speaking-control-input, [data-speaking-shell] .speaking-tag-btn, [data-speaking-clear]',
		},
		{
			route: '/events/',
			selector: '.radar-topic-btn, .radar-input, .radar-btn, .radar-check, .radar-pin-btn, .radar-summary',
		},
		{
			route: '/changes/',
			selector:
				'.changes-filter-bar input, .changes-filter-bar summary, .changes-filter-bar [data-change-clear], .changes-filter-bar .change-group-pill, .changes-filter-bar .change-tag-pill',
		},
	]) {
		test(`${contract.route} mobile controls meet the 44px touch target`, async ({ page }) => {
			await page.goto(`${BASE}${contract.route}`, { waitUntil: 'networkidle' });
			const controls = await visibleControlHeights(page, contract.selector);
			expect(controls.length).toBeGreaterThan(0);
			for (const control of controls) {
				expect(
					control.height,
					`${contract.route} control “${control.label}” is ${control.height}px tall`,
				).toBeGreaterThanOrEqual(44);
			}
		});
	}

	test('contact uses one mobile navigation surface', async ({ page }) => {
		await page.goto(`${BASE}/contact/`, { waitUntil: 'networkidle' });
		await expect(page.locator('header nav[aria-label="Primary navigation"]')).toHaveCount(1);
		await expect(page.locator('nav[aria-label="Primary mobile navigation"]')).toHaveCount(0);
	});
});

test.describe('homepage and build metadata', () => {
	test('homepage features the current flagship writing', async ({ page }) => {
		await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
		await expect(page.locator('[data-writing-compact-card] [data-writing-card-title]')).toHaveText([
			'The Next Software Bottleneck Is the Capacity to Absorb Change',
			'The Agentic Information Enterprise: A DoW CIO Operating Concept for Governed Workforce Creation',
			'Digital Engineering Is Not a Department',
		]);
	});

	test('footer identifies the generated build instead of a stale release label', async ({ page }) => {
		await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
		const footer = page.locator('footer');
		await expect(footer).toContainText(/Build [0-9a-f]{9} · Generated/);
		await expect(footer).not.toContainText('Version v2.5.5');
		await expect(footer.locator('time[datetime]')).toHaveCount(1);
	});
});
