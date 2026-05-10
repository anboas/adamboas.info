# SEO Operations Guide

## Baseline implemented

- Canonical tags on all pages via `BaseHead.astro`
- Robots directives (`index,follow` defaults; per-page `noindex` support)
- Open Graph + Twitter cards (with image alt metadata)
- `sitemap-index.xml` and `robots.txt`
- RSS feed (`/rss.xml`)
- JSON-LD `WebPage` schema on all pages

## Content best practices

- Keep title tags unique and intent-first (50–65 chars ideal).
- Write unique meta descriptions for high-value pages (120–160 chars).
- Avoid duplicate slugs across writing/papers/memos.
- Maintain internal links between profile, writing, events, opportunities.

## Technical checks

Run locally before release:

```bash
npm run build
```

Validate production pages:

- Home: `/`
- Writing index/detail pages
- Opportunities (`/opportunities/`)
- Events (`/events/`)
- `robots.txt`
- `sitemap-index.xml`

## Next high-impact tasks

1. Add organization/person JSON-LD to profile + contact surfaces.
2. Add breadcrumb JSON-LD on deep pages.
3. Add automated Lighthouse SEO score threshold in CI.
4. Build a keyword map per top page and align title/H1/intro copy.
5. Monitor Google Search Console for index coverage + query CTR deltas.
