# Continuous Improvement Sprint Log

## Backlog (ranked)

1. **Capabilities UX:** Add side-by-side capability comparison mode (filters + highlights) so visitors can evaluate services faster.
2. **Writing SEO:** Add `ItemList` structured data + richer metadata on `/writing/` index for stronger discovery and snippet quality.
3. **Opportunities UX:** Add saved views via URL presets for common analyst workflows (due soon, by branch, by status).
4. **Status telemetry:** Add freshness health states and stale/lagging alerts so pipeline issues are obvious at a glance.
5. **Contact conversion:** Add intent-specific contact CTAs with prefilled context from current page.

## Shipped (date, area, commit)

- 2026-05-11 — **Operations UX / Status telemetry** — `fb892fafc`
  - Added pipeline health banner on `/status` with fresh/lagging/stale signal summary.
  - Added freshness pills + relative age labels for Feed Crawl and SAM Intel/Drift signals.
  - Added visual severity states to make stale data immediately visible without parsing timestamps.

## Next focus

- **Writing SEO:** Implement richer structured data for `/writing/` index (ItemList + metadata polish).

## Anti-repeat rule

- Do **not** ship consecutive runs in the same micro-surface.
- Rotate among at least these buckets: (1) UX/UI, (2) SEO/discoverability, (3) capability depth/features, (4) conversion/engagement.
- If the previous run touched one bucket, prioritize a different bucket next run unless blocked by production issues.
- Reject “tiny-only” tweaks unless they unlock a larger user-visible outcome in the same commit.
