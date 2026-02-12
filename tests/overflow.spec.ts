import { test, expect } from '@playwright/test';

const BASE = process.env.SITE_BASE ?? 'https://www.adamboas.com';

const paths = [
  '/',
  '/writing/',
  '/writing/agentic-force-creation/',
  '/experience/',
  '/education/',
];

test.describe('mobile overflow regression', () => {
  for (const p of paths) {
    test(`no horizontal overflow: ${p}`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(`${BASE}${p}`, { waitUntil: 'networkidle' });

      const result = await page.evaluate(() => {
        const el = document.documentElement;
        return {
          client: el.clientWidth,
          scroll: el.scrollWidth,
        };
      });

      expect(result.scroll, `scrollWidth(${result.scroll}) > clientWidth(${result.client})`).toBe(
        result.client
      );
    });
  }
});
