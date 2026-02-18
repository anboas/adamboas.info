import { test, expect } from '@playwright/test';

const BASE = process.env.SITE_BASE ?? 'https://www.adamboas.com';

const paths = [
  '/',
  '/writing/',
  '/writing/agentic-force-creation/',
  '/events/',
  '/changes/',
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

test.describe('writing TOC rail regression', () => {
  const widths = [1536, 1900, 2200];

  for (const width of widths) {
    test(`actions bar does not clip under TOC at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 980 });
      await page.goto(`${BASE}/writing/agentic-force-creation/`, { waitUntil: 'networkidle' });

      const metrics = await page.evaluate(() => {
        const actionBar = document.querySelector('.writing-actions-bar');
        const toc = document.querySelector('[data-writing-toc]');
        if (!actionBar || !toc) return null;

        const a = actionBar.getBoundingClientRect();
        const t = toc.getBoundingClientRect();
        const overlapX = Math.max(0, Math.min(a.right, t.right) - Math.max(a.left, t.left));

        return {
          overlapX,
          actionRight: a.right,
          tocLeft: t.left,
        };
      });

      expect(metrics, 'writing action bar or TOC missing').not.toBeNull();
      expect(
        metrics!.overlapX,
        `action bar clips into TOC rail (actionRight=${metrics!.actionRight}, tocLeft=${metrics!.tocLeft})`
      ).toBe(0);
    });
  }
});
