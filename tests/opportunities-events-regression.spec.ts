import { test, expect } from '@playwright/test';

const BASE = process.env.SITE_BASE ?? 'https://www.adamboas.com';

test.describe('events opportunity-context regression', () => {
	test('context banner appears from query, then clear hides it and strips params', async ({ page }) => {
		await page.goto(`${BASE}/events/?from=opportunities&opp=TEST-OPP-123&opptitle=Regression%20Opportunity`, {
			waitUntil: 'networkidle',
		});

		const banner = page.locator('#radar-opportunity-context');
		await expect(banner).toBeVisible();
		await expect(page.locator('#radar-opportunity-context-text')).toContainText('Regression Opportunity');

		await expect.poll(() => page.url()).not.toContain('from=opportunities');
		await expect.poll(() => page.url()).not.toContain('opp=TEST-OPP-123');

		await page.click('#radar-opportunity-context-clear');
		await expect(banner).toBeHidden();
	});
});

test.describe('opportunities shortcut + fast-mode regression', () => {
	test('keyboard shortcuts update core filters deterministically', async ({ page }) => {
		await page.goto(`${BASE}/opportunities/`, { waitUntil: 'networkidle' });

		const body = page.locator('body');
		await body.click({ position: { x: 30, y: 30 } });

		const search = page.locator('#opp-filter-search');
		await page.keyboard.press('/');
		await expect(search).toBeFocused();

		const fast = page.locator('#opp-filter-fast');
		await expect(fast).not.toBeChecked();
		await body.click({ position: { x: 30, y: 30 } });
		await page.keyboard.press('f');
		await expect(fast).toBeChecked();

		const sort = page.locator('#opp-filter-sort');
		await sort.selectOption('due');
		await expect(sort).toHaveValue('due');
		await body.click({ position: { x: 30, y: 30 } });
		await page.keyboard.press('g');
		await expect(sort).toHaveValue('gem');

		const confidence = page.locator('#opp-filter-confidence');
		await expect(confidence).toHaveValue('all');
		await body.click({ position: { x: 30, y: 30 } });
		await page.keyboard.press('c');
		await expect(confidence).toHaveValue('high');

		const thirdParty = page.locator('#opp-filter-third-party');
		await expect(thirdParty).toHaveValue('all');
		await body.click({ position: { x: 30, y: 30 } });
		await page.keyboard.press('t');
		await expect(thirdParty).toHaveValue('ok');

		const fpds = page.locator('#opp-filter-fpds');
		await expect(fpds).toHaveValue('all');
		await body.click({ position: { x: 30, y: 30 } });
		await page.keyboard.press('p');
		await expect(fpds).toHaveValue('medium');
	});
});
