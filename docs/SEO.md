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

## Forward-leaning agent discovery layer

Contract reference: `docs/AGENT_ENDPOINT_CONTRACTS.md`

Machine-facing endpoints now available:

- `/llms.txt` (compact map)
- `/llms-full.txt` (expanded map)
- `/agents.json` (agent manifest)
- `/changes.json` (machine changelog snapshot)
- `/changes.jsonl` (incremental event stream; backed by append-only source `src/data/discovery-events.json`)
- `/writing/manifest.json` (structured writing corpus index)
- `/writing/agent.json`, `/events/agent.json`, `/opportunities/agent.json` (surface-specific extraction + refresh hints)
- `/opportunities/export.json` (normalized opportunity export for source-aware downstream ingestion)
- `/opportunities/export-sam.json`, `/opportunities/export-sam-core.json`, and `/opportunities/export-sbir.json` (deterministic source-specific exports for agent pipelines)
- `/opportunities/freshness.json` (poll-first source freshness + lineage metadata)
- `/integrity.json` (source integrity/provenance hashes for machine endpoints)
- `/agent-priority.json` (crawl/ingestion tiers + refresh hints)
- `/for-agents/` (human-readable hub for agent endpoints)
- `/.well-known/agent-manifest.json` and `/.well-known/llms.txt` aliases for well-known discovery patterns
- `/schemas/*.schema.json` contract documents for agent-facing endpoint formats

These are linked from page head metadata and surfaced in `robots.txt` comments plus the human sitemap.

## Next high-impact tasks

1. Add organization/person JSON-LD to profile + contact surfaces.
2. Add breadcrumb JSON-LD on deep pages.
3. Add automated Lighthouse SEO score threshold in CI.
4. Build a keyword map per top page and align title/H1/intro copy.
5. Monitor Google Search Console for index coverage + query CTR deltas.
6. Add signed checksums/provenance payloads for critical manifests.
7. Add schema docs + validation gates for machine endpoints (`agent-priority`, per-surface maps, well-known aliases).
