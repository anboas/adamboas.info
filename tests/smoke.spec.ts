import { test, expect } from '@playwright/test';

const BASE = process.env.SITE_BASE ?? 'https://www.adamboas.com';

const smokeRoutes = [
  '/',
  '/writing/',
  '/writing/agentic-force-creation/',
  '/writing/acp-ra/',
  '/events/',
  '/events/sources/',
  '/changes/',
  '/experience/',
  '/education/',
];

test.describe('core route smoke checks', () => {
  for (const route of smokeRoutes) {
    test(`route is reachable and renders heading: ${route}`, async ({ page }) => {
      const response = await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle' });
      expect(response, `missing response for ${route}`).not.toBeNull();
      expect(response!.status(), `non-OK status for ${route}`).toBeGreaterThanOrEqual(200);
      expect(response!.status(), `non-OK status for ${route}`).toBeLessThan(400);

      const heading = page.locator('h1').first();
      await expect(heading, `missing visible h1 for ${route}`).toBeVisible();
      await expect(heading, `empty h1 text for ${route}`).not.toHaveText(/^\s*$/);
    });
  }
});
