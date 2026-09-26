import { test, expect } from '@playwright/test';

const BASE = process.env.SITE_BASE ?? 'http://127.0.0.1:4321';

test.describe('storefront integration', () => {
	test('home exposes the product carousel and canonical store links', async ({ page }) => {
		await page.setViewportSize({ width: 1280, height: 900 });
		await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });

		await expect(page.getByRole('heading', { name: 'Ideas with a field life' })).toBeVisible();
		await expect(page.locator('[data-store-product]')).toHaveCount(5);
		await expect(page.getByRole('link', { name: /Control Planes > Models Tee/ })).toHaveAttribute(
			'href',
			'https://shop.adamboas.com/products/control-planes-over-models-tee',
		);
		await page.locator('[data-store-carousel]').scrollIntoViewIfNeeded();
		await expect
			.poll(() =>
				page.locator('[data-store-product] img').evaluateAll((images) =>
					images.every((image) => {
						const productImage = image as HTMLImageElement;
						return productImage.complete && productImage.naturalWidth > 0;
					}),
				),
			)
			.toBe(true);
		await expect(page.getByRole('link', { name: 'Store', exact: true }).first()).toHaveAttribute(
			'href',
			'https://shop.adamboas.com',
		);

		const productLinks = await page.locator('[data-store-product]').evaluateAll((links) =>
			links.map((link) => ({
				host: new URL((link as HTMLAnchorElement).href).host,
				path: new URL((link as HTMLAnchorElement).href).pathname,
			})),
		);
		expect(productLinks.every((link) => link.host === 'shop.adamboas.com')).toBe(true);
		expect(productLinks.every((link) => link.path.startsWith('/products/'))).toBe(true);

		const viewport = page.locator('[data-store-viewport]');
		const before = await viewport.evaluate((element) => element.scrollLeft);
		await page.getByRole('button', { name: 'Show next products' }).click();
		await expect.poll(() => viewport.evaluate((element) => element.scrollLeft)).toBeGreaterThan(before);
	});

	test('mobile carousel remains contained and touchable', async ({ page }) => {
		await page.setViewportSize({ width: 390, height: 844 });
		await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });

		const metrics = await page.evaluate(() => {
			const viewport = document.querySelector<HTMLElement>('[data-store-viewport]');
			const controls = [...document.querySelectorAll<HTMLElement>('[data-store-previous], [data-store-next]')];
			return {
				documentWidth: document.documentElement.scrollWidth,
				viewportWidth: document.documentElement.clientWidth,
				carouselScrolls: Boolean(viewport && viewport.scrollWidth > viewport.clientWidth),
				controlHeights: controls.map((control) => control.getBoundingClientRect().height),
			};
		});

		expect(metrics.documentWidth).toBe(metrics.viewportWidth);
		expect(metrics.carouselScrolls).toBe(true);
		expect(metrics.controlHeights.every((height) => height >= 44)).toBe(true);
	});
});
