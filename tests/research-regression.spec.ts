import { expect, test } from '@playwright/test';

const BASE = process.env.SITE_BASE ?? 'http://127.0.0.1:4321';

test.describe('private research surface', () => {
	test('research index is noindexed and links to private research folders', async ({ page }) => {
		const response = await page.goto(`${BASE}/research/`, { waitUntil: 'networkidle' });
		expect(response?.status()).toBeLessThan(400);
		await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,nofollow');
		await expect(page.getByRole('heading', { name: 'Research' })).toBeVisible();
		await expect(page.getByRole('link', { name: /NIWC PAC/ })).toHaveAttribute('href', /\/research\/niwc-pac\/$/);
		await expect(page.getByRole('link', { name: /CGCYBER IOM/ })).toHaveAttribute('href', /\/research\/cgcyber-iom\/$/);
		await expect(page.getByRole('link', { name: /Naval Aviation Enterprise/ })).toHaveAttribute(
			'href',
			/\/research\/naval-aviation-enterprise\/$/,
		);
	});

	test('research detail breadcrumbs link back to the hidden index', async ({ page }) => {
		for (const path of ['/research/niwc-pac/', '/research/cgcyber-iom/', '/research/naval-aviation-enterprise/']) {
			await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' });
			const breadcrumb = page.locator('nav[aria-label="Breadcrumb"]').getByRole('link', { name: 'Research' });
			await expect(breadcrumb).toHaveAttribute('href', /\/research\/$/);
			await breadcrumb.click();
			await expect(page).toHaveURL(/\/research\/$/);
		}
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
		await page.getByRole('button', { name: 'Forward Slope Lineage' }).click();
		await expect(page.locator('[data-chart-description]')).toContainText('Accelint');
		await expect(page.locator('[data-chart-download]')).toHaveAttribute('href', /forward-slope-lineage\.svg$/);
		await expect(page.locator('[data-connections-count]')).toContainText('30');
		await page.locator('[data-connections-search]').fill('N6600123F3509');
		await expect(page.locator('[data-connections-body]')).toContainText('Application Arsenal');
		await page.locator('[data-connections-search]').fill('');
		await page.locator('[data-connections-filter="AA / NIWC PAC Relevance"]').selectOption('Direct AA / NIWC PAC');
		await expect(page.locator('[data-connections-body]')).toContainText('PEOC4I Storefront / Application Arsenal');
		await expect(page.locator('[data-roster-count]')).toContainText('145');
		await expect(page.locator('[data-roster-table] thead th button').nth(1)).toHaveText('Name / Node');
		const firstTwoRows = page.locator('[data-roster-body] tr').filter({ has: page.locator('td') });
		await expect(firstTwoRows.first()).toHaveClass(/roster-row/);
		await expect(firstTwoRows.first().locator('td').nth(1)).toContainText('CAPT Kris De Soto');
		const rowBackgrounds = await firstTwoRows.evaluateAll((rows) =>
			rows.slice(0, 2).map((row) => getComputedStyle(row).backgroundColor),
		);
		expect(rowBackgrounds[0]).not.toBe(rowBackgrounds[1]);
		await firstTwoRows.first().click();
		await expect(firstTwoRows.first()).toHaveClass(/roster-row-selected/);
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

	test('CGCYBER IOM atlas exposes chart controls and filterable tables', async ({ page }) => {
		const response = await page.goto(`${BASE}/research/cgcyber-iom/`, { waitUntil: 'networkidle' });
		expect(response?.status()).toBeLessThan(400);
		await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,nofollow');
		await expect(page.getByRole('heading', { name: 'CGCYBER IOM Public-Source Research Atlas' })).toBeVisible();
		await expect(page.locator('[data-chart-image]')).toBeVisible();
		await page.getByRole('button', { name: 'Contract Ecosystem' }).click();
		await expect(page.locator('[data-chart-description]')).toContainText('IOM target opportunity');
		await expect(page.locator('[data-chart-download]')).toHaveAttribute('href', /cgcyber-contract-ecosystem\.svg$/);
		await expect(page.getByRole('button', { name: 'Competition / Capture' })).toHaveCount(0);
		await expect(page.getByRole('heading', { name: 'Ten-Day Capture Sprint' })).toHaveCount(0);
		await expect(page.getByRole('link', { name: 'Source PDF' })).toHaveCount(0);

		await expect(page.locator('[data-org-count]')).toContainText('46');
		await expect(page.locator('[data-contracts-count]')).toContainText('18');
		await expect(page.locator('[data-competitors-count]')).toContainText('11');
		await expect(page.locator('[data-sources-count]')).toContainText('47');

		await page.locator('[data-org-search]').fill('Shantia Allen');
		await expect(page.locator('[data-org-body]')).toContainText('Shantia.A.Allen@uscg.mil');
		await page.locator('[data-org-search]').fill('');
		await page.locator('[data-org-search]').fill('Francis G. Tatu');
		await expect(page.locator('[data-org-body]')).toContainText('Command Master Chief');
		await page.locator('[data-org-search]').fill('');
		await page.locator('[data-org-search]').fill('CG-914');
		await expect(page.locator('[data-org-body]')).toContainText('C5I Contracting and Procurement');
		await page.locator('[data-org-search]').fill('');
		await page.locator('[data-org-search]').fill('Ben Greene');
		await expect(page.locator('[data-org-body]')).toContainText('Cyber Protection Team');
		await page.locator('[data-org-search]').fill('');
		await page.locator('[data-org-filter="IOM Relevance"]').selectOption('Direct IOM / CuOps core');
		await expect(page.locator('[data-org-body]')).toContainText('CGCC-33 Current Operations');

		await page.locator('[data-contracts-search]').fill('NetCentrics');
		await expect(page.locator('[data-contracts-body]')).toContainText('NOSC support');
		await page.locator('[data-competitors-search]').fill('Sabre');
		await expect(page.locator('[data-competitors-body]')).toContainText('Pursue as prime conditionally');
		await page.locator('[data-sources-search]').fill('DHS APFS');
		await expect(page.locator('[data-sources-body]')).toContainText('CGCYBER Integrated Operations Management');
	});

	test('Naval Aviation Enterprise atlas exposes starter opportunity research', async ({ page }) => {
		const response = await page.goto(`${BASE}/research/naval-aviation-enterprise/`, { waitUntil: 'networkidle' });
		expect(response?.status()).toBeLessThan(400);
		await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,nofollow');
		await expect(
			page.getByRole('heading', { name: 'Naval Aviation Enterprise Public-Source Research Atlas' }),
		).toBeVisible();
		await expect(page.locator('[data-chart-image]')).toBeVisible();
		await page.getByRole('button', { name: 'Opportunity Map' }).click();
		await expect(page.locator('[data-chart-description]')).toContainText('NAWCAD FY26/FY27 forecast rows');
		await expect(page.locator('[data-chart-download]')).toHaveAttribute('href', /naval-aviation-opportunity-map\.svg$/);

		await expect(page.locator('[data-org-count]')).toContainText('28');
		await expect(page.locator('[data-contracts-count]')).toContainText('15');
		await expect(page.locator('[data-competitors-count]')).toContainText('15');
		await expect(page.locator('[data-sources-count]')).toContainText('9');

		await page.locator('[data-org-search]').fill('Lauren Farmer');
		await expect(page.locator('[data-org-body]')).toContainText('Cyber Warfare Services IDIQ');
		await page.locator('[data-org-search]').fill('');
		await page.locator('[data-contracts-search]').fill('TARCES');
		await expect(page.locator('[data-contracts-body]')).toContainText('SMARTRONIX');
		await page.locator('[data-contracts-search]').fill('');
		await page.locator('[data-contracts-search]').fill('T-6/T-34');
		await expect(page.locator('[data-contracts-body]')).toContainText('$500M - $1B');
		await page.locator('[data-competitors-search]').fill('BAE Systems');
		await expect(page.locator('[data-competitors-body]')).toContainText('C5ISR integration');
		await page.locator('[data-sources-search]').fill('NAWCAD FY26 Q3');
		await expect(page.locator('[data-sources-body]')).toContainText('Long Range Acquisition Forecast');
	});
});
