import { test, expect } from '@playwright/test';

const BASE = process.env.SITE_BASE ?? 'https://www.adamboas.com';

test.describe('writing controls regression', () => {
	test('tooltips are populated and hidden-tag mode has no +N preview chip', async ({ page }) => {
		await page.goto(`${BASE}/writing/`, { waitUntil: 'networkidle' });

		const hasAudio = page.locator('[data-writing-quick="has-audio"]');
		const recent = page.locator('[data-writing-quick="recent-30"]');
		await expect(hasAudio).toHaveAttribute('data-tooltip', /\S+/);
		await expect(recent).toHaveAttribute('data-tooltip', /\S+/);

		await expect(page.locator('[data-writing-tag-preview-chip]')).toHaveCount(0);
	});

	test('quick filters + clear keep URL sync deterministic', async ({ page }) => {
		await page.goto(`${BASE}/writing/`, { waitUntil: 'networkidle' });

		await page.click('[data-writing-quick="has-audio"]');
		await page.click('[data-writing-quick="recent-30"]');

		await expect(page.locator('[data-writing-quick="has-audio"]')).toHaveAttribute('aria-pressed', 'true');
		await expect(page.locator('[data-writing-quick="recent-30"]')).toHaveAttribute('aria-pressed', 'true');
		await expect.poll(() => page.url()).toContain('audio=1');
		await expect.poll(() => page.url()).toContain('recent=1');

		await page.click('[data-writing-clear]');
		await expect(page.locator('[data-writing-quick="has-audio"]')).toHaveAttribute('aria-pressed', 'false');
		await expect(page.locator('[data-writing-quick="recent-30"]')).toHaveAttribute('aria-pressed', 'false');
		await expect.poll(() => page.url()).not.toContain('audio=1');
		await expect.poll(() => page.url()).not.toContain('recent=1');
	});

	test('view toggle switches between cards and timeline with URL sync', async ({ page }) => {
		await page.goto(`${BASE}/writing/`, { waitUntil: 'networkidle' });

		await page.click('[data-writing-view-toggle="timeline"]');
		await expect(page.locator('[data-writing-view-toggle="timeline"]')).toHaveAttribute('aria-pressed', 'true');
		await expect(page.locator('[data-writing-timeline]')).toBeVisible();
		await expect(page.locator('[data-writing-timeline-year]').first()).toBeVisible();
		await expect.poll(() => page.url()).toContain('view=timeline');

		await page.click('[data-writing-clear]');
		await expect(page.locator('[data-writing-view-toggle="cards"]')).toHaveAttribute('aria-pressed', 'true');
		await expect.poll(() => page.url()).not.toContain('view=timeline');
	});

	test('keyboard shortcuts toggle filters and never allow all type pills off', async ({ page }) => {
		await page.goto(`${BASE}/writing/`, { waitUntil: 'networkidle' });
		const body = page.locator('body');
		await body.click({ position: { x: 40, y: 40 } });

		await page.keyboard.press('a');
		await expect(page.locator('[data-writing-quick="has-audio"]')).toHaveAttribute('aria-pressed', 'true');

		await page.keyboard.press('r');
		await expect(page.locator('[data-writing-quick="recent-30"]')).toHaveAttribute('aria-pressed', 'true');

		await page.keyboard.press('d');
		await expect(page.locator('[data-writing-density-toggle="compact"]')).toHaveAttribute('aria-pressed', 'true');

		await page.keyboard.press('v');
		await expect(page.locator('[data-writing-view-toggle="timeline"]')).toHaveAttribute('aria-pressed', 'true');

		const paper = page.locator('[data-writing-type-toggle="paper"]');
		const note = page.locator('[data-writing-type-toggle="note"]');
		const memo = page.locator('[data-writing-type-toggle="memo"]');
		await note.click();
		await memo.click();
		await expect(paper).toHaveAttribute('aria-pressed', 'true');
		await paper.click();
		await expect(paper).toHaveAttribute('aria-pressed', 'true');

		await page.keyboard.press('x');
		await expect(page.locator('[data-writing-quick="has-audio"]')).toHaveAttribute('aria-pressed', 'false');
		await expect(page.locator('[data-writing-quick="recent-30"]')).toHaveAttribute('aria-pressed', 'false');
		await expect(page.locator('[data-writing-view-toggle="cards"]')).toHaveAttribute('aria-pressed', 'true');
	});
});
