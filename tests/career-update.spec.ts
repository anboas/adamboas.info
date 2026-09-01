import { test, expect } from '@playwright/test';

const BASE = process.env.SITE_BASE || 'http://127.0.0.1:4321';

test.describe('career state', () => {
	test('profile and experience show Sabre current role and ended KBR stint', async ({ page }) => {
		await page.goto(`${BASE}/profile/`, { waitUntil: 'domcontentloaded' });

		const structuredData = await page.evaluate(() =>
			Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map((script) => {
				try {
					return JSON.parse(script.textContent ?? '{}') as unknown;
				} catch {
					return null;
				}
			}),
		);
		const personSchema = structuredData.find(
			(item): item is { worksFor?: { name?: string } } =>
				typeof item === 'object' && item !== null && '@type' in item && item['@type'] === 'Person',
		);
		const experienceSchema = structuredData.find(
			(item): item is { name?: string; itemListElement?: Array<{ name?: string }> } =>
				typeof item === 'object' && item !== null && 'name' in item && item.name === 'Adam Boas Experience',
		);

		expect(personSchema?.worksFor?.name).toBe('Sabre Systems');
		expect(experienceSchema?.itemListElement?.[0]?.name).toBe('Sabre Systems — Solutions Architect');
		await expect(page.locator('p').filter({ hasText: 'Sabre Systems Solutions Architect' })).toBeVisible();
		await expect(page.getByRole('cell', { name: 'Sabre Systems' })).toBeVisible();
		await expect(page.getByRole('cell', { name: '2026 - present' })).toBeVisible();
		await expect(page.getByRole('cell', { name: '2025 - 2026' }).first()).toBeVisible();

		await page.goto(`${BASE}/experience/`, { waitUntil: 'domcontentloaded' });
		await expect(page.getByRole('cell', { name: 'Sabre Systems' })).toBeVisible();
		await expect(page.getByRole('cell', { name: '2026 - present' })).toBeVisible();
		await expect(page.getByRole('cell', { name: '2025 - present' })).toHaveCount(0);

		await page.goto(`${BASE}/experience/sabre-systems-solutions-architect-2026/`, {
			waitUntil: 'domcontentloaded',
		});
		await expect(page.getByRole('heading', { name: 'Sabre Systems' })).toBeVisible();
		await expect(page.locator('p').filter({ hasText: /^Solutions Architect$/ })).toBeVisible();
		await expect(page.getByText('Senior Technical Strategist / Solutions Architect')).toHaveCount(0);
	});
});
