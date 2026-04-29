import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const BASE = process.env.SITE_BASE || 'http://localhost:4321';

const pages = [
  '/',
  '/writing/',
  '/writing/agentic-force-creation/',
  '/speaking/',
  '/capabilities/',
  '/events/',
  '/opportunities/',
  '/changes/',
  '/experience/',
  '/education/',
];

test.describe('accessibility (axe)', () => {
  for (const path of pages) {
    test(`no critical a11y violations: ${path}`, async ({ page }) => {
      await page.goto(`${BASE}${path}`, { waitUntil: 'domcontentloaded' });

      const results = await new AxeBuilder({ page })
        // Keep it strict; we can tune later if needed.
        .analyze();

      const critical = results.violations.filter((v) => v.impact === 'critical');
      expect(
        critical,
        `Critical a11y violations found on ${path}:\n${JSON.stringify(critical, null, 2)}`
      ).toEqual([]);
    });
  }
});
