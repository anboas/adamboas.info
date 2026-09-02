import { expect, test } from '@playwright/test';

const BASE = process.env.SITE_BASE ?? 'http://127.0.0.1:4321';

test.describe('private research surface', () => {
	test('research index is noindexed and links to NIWC PAC only inside research', async ({ page }) => {
		const response = await page.goto(`${BASE}/research/`, { waitUntil: 'networkidle' });
		expect(response?.status()).toBeLessThan(400);
		await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,nofollow');
		await expect(page.getByRole('heading', { name: 'Research' })).toBeVisible();
		await expect(page.getByRole('link', { name: /NIWC PAC/ })).toHaveAttribute('href', /\/research\/niwc-pac\/$/);
	});

	test('NIWC PAC atlas exposes chart controls and filterable roster', async ({ page }) => {
		const response = await page.goto(`${BASE}/research/niwc-pac/`, { waitUntil: 'networkidle' });
		expect(response?.status()).toBeLessThan(400);
		await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,nofollow');
		await expect(page.getByRole('heading', { name: 'NIWC Pacific Public Org Atlas' })).toBeVisible();
		await expect(page.locator('[data-chart-image]')).toBeVisible();
		await expect(page.getByRole('button', { name: 'Code 53 / 532 / AA' })).toBeVisible();
		await page.getByRole('button', { name: 'Code 53 / 532 / AA' }).click();
		await expect(page.locator('[data-chart-description]')).toContainText('Application Arsenal drilldown');
		await expect(page.locator('[data-roster-count]')).toContainText('145');
		await page.locator('[data-roster-search]').fill('Application Arsenal');
		await expect(page.locator('[data-roster-body]')).toContainText('Application Arsenal');
		await page.locator('[data-roster-filter="Status Class"]').selectOption('Public gap');
		await expect(page.locator('[data-roster-body]')).toContainText('Public gap');
	});

	test('research pages stay out of robots and sitemap output', async ({ page, request }) => {
		const robots = await request.get(`${BASE}/robots.txt`);
		expect(await robots.text()).toContain('Disallow: /research/');

		const sitemap = await request.get(`${BASE}/sitemap-index.xml`);
		const body = await sitemap.text();
		expect(body).not.toContain('/research/');
	});
});
