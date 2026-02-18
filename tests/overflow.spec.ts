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

  test('TOC hover scrollbar does not shift text layout', async ({ page }) => {
    await page.setViewportSize({ width: 1900, height: 980 });
    await page.goto(`${BASE}/writing/agentic-force-creation/`, { waitUntil: 'networkidle' });

    const before = await page.evaluate(() => {
      const toc = document.querySelector('[data-writing-toc]');
      const firstLink = toc?.querySelector('a');
      if (!toc || !firstLink) return null;

      const r = firstLink.getBoundingClientRect();
      return { left: r.left, width: r.width };
    });

    expect(before, 'TOC or TOC links missing').not.toBeNull();

    await page.hover('[data-writing-toc]');
    await page.waitForTimeout(120);

    const after = await page.evaluate(() => {
      const toc = document.querySelector('[data-writing-toc]');
      const firstLink = toc?.querySelector('a');
      if (!toc || !firstLink) return null;

      const r = firstLink.getBoundingClientRect();
      return { left: r.left, width: r.width };
    });

    expect(after, 'TOC or TOC links missing after hover').not.toBeNull();
    expect(Math.abs(after!.left - before!.left)).toBeLessThanOrEqual(0.5);
    expect(Math.abs(after!.width - before!.width)).toBeLessThanOrEqual(0.5);
  });
});
