import { test, expect } from '@playwright/test';

const BASE = process.env.SITE_BASE ?? 'https://www.adamboas.com';

test.describe('contact intake regression', () => {
	test('urgency guidance and follow-up channel copy adapt to selection', async ({ page }) => {
		await page.goto(`${BASE}/contact/`, { waitUntil: 'networkidle' });

		const urgencyNote = page.locator('[data-urgency-note]');
		await expect(urgencyNote).toContainText('Select urgency to set response expectations');

		await page.selectOption('select[name="urgency"]', 'critical');
		await expect(urgencyNote).toContainText('Critical requests are triaged first');

		await page.selectOption('select[name="follow_up_channel"]', 'phone');
		await expect(page.locator('[data-followup-detail-label]')).toHaveText('Best callback number');
		await expect(page.locator('[data-followup-detail-input]')).toHaveAttribute('placeholder', /\+1/);
		await expect(page.locator('[data-followup-availability-label]')).toHaveText('Best call window');

		await page.selectOption('select[name="follow_up_channel"]', 'video');
		await expect(page.locator('[data-followup-detail-label]')).toHaveText('Preferred meeting email');
		await expect(page.locator('[data-followup-availability-label]')).toHaveText('Preferred meeting windows');
	});

	test('urgency remains required for submit validation', async ({ page }) => {
		await page.goto(`${BASE}/contact/`, { waitUntil: 'networkidle' });

		await page.fill('input[name="name"]', 'Regression User');
		await page.fill('input[name="email"]', 'regression@example.com');
		await page.selectOption('select[name="intent"]', 'consulting');
		await page.fill(
			'textarea[name="message"]',
			'Need support triaging an urgent mission capability integration this month.',
		);
		await page.click('[data-contact-submit]');

		await expect(page.locator('[data-contact-errors]')).toContainText(
			'Please choose urgency so I can triage correctly.',
		);
	});
});
