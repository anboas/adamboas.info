# CONTINUOUS IMPROVEMENT

## Backlog (ranked)
1. Opportunities UX: add a saved comparison tray for side-by-side event/opportunity evaluation.
2. Writing UX: add a timeline view toggle that clusters entries by year and theme.
3. Contact conversion: add intent-specific follow-up prompts after request type selection.
4. SEO: add Organization and Person JSON-LD to profile and contact surfaces.
5. Performance: reduce opportunities page hydration cost with deferred non-critical controls.

## Shipped (date, area, commit)
- 2026-05-11 — Speaking UX — Added multi-dimensional discovery controls (search, sponsorship, year, and sort) with live result counts and stronger filter clarity on `/speaking/`. Commit: `6de241c02`
- 2026-05-11 — Operations UX / Status telemetry — Added pipeline health banner on `/status` with fresh/lagging/stale signal summary and freshness pills for Feed Crawl + SAM Intel/Drift. Commit: `fb892fafc`

## Next focus
- Opportunities UX: ship a comparison tray that lets users pin 2-4 items and view key fields side-by-side.

## Anti-repeat rule
- Do not ship two consecutive runs on the same page-level surface.
- If the previous run touched machine-only agent/discovery endpoints, the next run must target a human-visible UX or content surface.
- Reject changes that are only copy edits, spacing tweaks, or single-threshold tuning unless they unlock a larger user-visible capability.
