import { test, expect } from '@playwright/test';

const BASE = process.env.SITE_BASE ?? 'https://www.adamboas.com';

async function visibleControlHeights(page: import('@playwright/test').Page, selector: string) {
	return page.locator(selector).evaluateAll((elements) =>
		elements
			.filter((element) => {
				const style = getComputedStyle(element);
				const rect = element.getBoundingClientRect();
				return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
			})
			.map((element) => ({
				label: (element.textContent || element.getAttribute('name') || element.getAttribute('aria-label') || '').trim(),
				height: element.getBoundingClientRect().height,
			})),
	);
}

test.describe('remaining site maintenance contracts', () => {
	test.use({ viewport: { width: 390, height: 844 } });

	test('mobile contact, writing actions, and Changes pagination meet the 44px control contract', async ({ page }) => {
		await page.goto(`${BASE}/contact/`, { waitUntil: 'networkidle' });
		const contactControls = await visibleControlHeights(page, '.contact-input:not(.contact-hp), [data-contact-submit]');
		expect(contactControls.length).toBeGreaterThan(7);
		for (const control of contactControls) expect(control.height, control.label).toBeGreaterThanOrEqual(44);

		await page.goto(`${BASE}/writing/capacity-to-absorb-change/`, { waitUntil: 'networkidle' });
		const writingActions = await visibleControlHeights(
			page,
			'.writing-actions-bar [data-copy-link], .writing-actions-bar [data-copy-cite], .writing-actions-bar [data-track="Writing: Open PDF"], .writing-actions-bar [data-track="Contact: Paper CTA"]',
		);
		expect(writingActions).toHaveLength(4);
		for (const control of writingActions) expect(control.height, control.label).toBeGreaterThanOrEqual(44);

		await page.goto(`${BASE}/changes/`, { waitUntil: 'networkidle' });
		const pagination = page.locator('[data-change-pagination]');
		await expect(pagination).toBeVisible();
		const pageControls = await visibleControlHeights(page, '[data-change-pagination] button');
		expect(pageControls).toHaveLength(4);
		for (const control of pageControls) expect(control.height, control.label).toBeGreaterThanOrEqual(44);
	});

	test('capability pages expose a compact preview with routes to the full surfaces', async ({ page }) => {
		await page.goto(`${BASE}/capabilities/data-ai-governed-autonomy/`, { waitUntil: 'networkidle' });

		for (const kind of ['writing', 'events', 'opportunities']) {
			const section = page.locator(`[data-capability-results="${kind}"]`);
			await expect(section).toHaveAttribute('data-result-count', '5');
			await expect(section.locator('.cap-item')).toHaveCount(5);
			await expect(section.locator('.cap-more-link')).toBeVisible();
		}

		const metrics = page.locator('.ui-pill');
		for (const label of ['Writing', 'Upcoming events', 'Opportunities']) {
			const text = await metrics.filter({ hasText: new RegExp(`^${label}: \\d+$`) }).textContent();
			expect(Number(text?.split(': ')[1]), label).toBeGreaterThan(5);
		}
		expect(await page.evaluate(() => document.documentElement.scrollHeight)).toBeLessThan(5000);
	});

	test('status and Changes distinguish live build provenance from generated snapshots and curated history', async ({
		page,
	}) => {
		await page.goto(`${BASE}/status/`, { waitUntil: 'networkidle' });
		await expect(page.getByRole('heading', { name: 'Opportunity snapshot' })).toBeVisible();
		await expect(page.getByRole('heading', { name: 'SAM opportunities' })).toHaveCount(0);

		await page.goto(`${BASE}/changes/`, { waitUntil: 'networkidle' });
		await expect(page.locator('[data-live-build]')).toHaveText(/^Build [0-9a-f]{9}$/);
		await expect(page.locator('[data-live-build-time]')).toContainText(/^Generated /);
		await expect(page.getByText(/^History through v2\.5\.5/)).toBeVisible();
		await expect(page.getByText(/^Current: v2\.5\.5$/)).toHaveCount(0);
	});

	test('sitemap publishes only canonical destinations and legacy aliases declare canonical noindex redirects', async ({
		request,
	}) => {
		const sitemapResponse = await request.get(`${BASE}/sitemap-0.xml`);
		expect(sitemapResponse.ok()).toBeTruthy();
		const sitemap = await sitemapResponse.text();
		for (const excluded of [
			'/blog/',
			'/content-license/',
			'/credentials/',
			'/opportunities/sam/',
			'/opportunities/sbir/',
			'/opportunities/sbir-sttr/',
			'/papers/',
		]) {
			expect(sitemap, excluded).not.toContain(`https://www.adamboas.com${excluded}`);
		}

		const aliases = [
			['/blog/', '/writing/'],
			['/credentials/', '/education/'],
			['/content-license/', '/license/'],
			['/papers/acp-ra/', '/writing/acp-ra/'],
			['/opportunities/sam/', '/opportunities/'],
		] as const;

		for (const [alias, canonical] of aliases) {
			const response = await request.get(`${BASE}${alias}`);
			expect(response.ok(), alias).toBeTruthy();
			const html = await response.text();
			expect(html, alias).toContain('name="robots" content="noindex,follow"');
			expect(html, alias).toContain(`rel="canonical" href="https://www.adamboas.com${canonical}"`);
		}
	});
});
