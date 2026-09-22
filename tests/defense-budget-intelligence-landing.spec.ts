import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs';
import path from 'node:path';

const BASE = process.env.SITE_BASE || 'http://127.0.0.1:4321';
const ROUTE = '/tools/defense-budget-intelligence/';
const PRODUCT_URL = 'https://defense-budget-intelligence.pages.dev/';

const discoveryFiles = [
	'src/components/Header.astro',
	'src/components/Footer.astro',
	'src/pages/index.astro',
	'src/pages/sitemap.astro',
	'src/pages/llms.txt.ts',
	'src/pages/llms-full.txt.ts',
	'src/pages/agents.json.ts',
	'src/pages/agent-priority.json.ts',
	'src/pages/.well-known/agent-manifest.json.ts',
	'src/pages/.well-known/llms.txt.ts',
];

test('quiet-launch page stays out of site discovery surfaces', async () => {
	for (const relativePath of discoveryFiles) {
		const source = fs.readFileSync(path.resolve(relativePath), 'utf8');
		expect(source, `${relativePath} must not link or advertise the quiet-launch route`).not.toContain(ROUTE);
	}
});

test.describe('Defense Budget Intelligence landing page', () => {
	for (const viewport of [
		{ name: 'desktop', width: 1440, height: 1000 },
		{ name: 'ultrawide', width: 3440, height: 1440 },
		{ name: 'mobile', width: 390, height: 844 },
	]) {
		test(`${viewport.name} product story and layout`, async ({ page, request }) => {
			await page.setViewportSize({ width: viewport.width, height: viewport.height });
			const response = await page.goto(`${BASE}${ROUTE}`, { waitUntil: 'networkidle' });

			expect(response).not.toBeNull();
			expect(response!.status()).toBe(200);
			await expect(page).toHaveTitle(/Defense Budget Intelligence/);
			await expect(page.locator('h1')).toHaveText('See the contract timeline before it becomes the deadline.');
			await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,nofollow');
			await expect(page.locator('meta[name="googlebot"]')).toHaveAttribute('content', 'noindex,nofollow');
			const accessibility = await new AxeBuilder({ page }).analyze();
			expect(
				accessibility.violations.filter((violation) => violation.impact === 'critical'),
				'Landing page must not contain critical accessibility violations',
			).toEqual([]);

			const primaryCta = page.getByRole('link', { name: /Open Defense Budget Intelligence/i });
			await expect(primaryCta).toHaveAttribute('href', PRODUCT_URL);
			await expect(primaryCta).toHaveAttribute('target', '_blank');

			const productImage = page.getByAltText(/Timeline showing contracts and acquisition activity/i);
			await expect(productImage).toBeVisible();
			expect(await productImage.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(
				true,
			);

			const geometry = await page.evaluate(() => ({
				documentWidth: document.documentElement.scrollWidth,
				viewportWidth: document.documentElement.clientWidth,
				landingWidth: document.querySelector('.dbi-landing')?.getBoundingClientRect().width || 0,
			}));
			expect(geometry.documentWidth).toBeLessThanOrEqual(geometry.viewportWidth + 1);
			expect(geometry.landingWidth).toBeGreaterThanOrEqual(geometry.viewportWidth - 1);

			const sitemap = await request.get(`${BASE}/sitemap-0.xml`);
			expect(sitemap.ok()).toBeTruthy();
			expect(await sitemap.text()).not.toContain(ROUTE);

			const finalCta = page.getByRole('link', { name: 'Open the workspace' });
			await finalCta.scrollIntoViewIfNeeded();
			await expect(finalCta).toBeVisible();
			if (viewport.name === 'mobile') {
				for (const link of await page.locator('.dbi-button').all()) {
					expect(await link.evaluate((node) => node.getBoundingClientRect().height)).toBeGreaterThanOrEqual(44);
				}
			}
		});
	}
});
