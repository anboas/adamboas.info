# CONTINUOUS IMPROVEMENT

## Backlog (ranked)

1. Contact conversion: add intent-specific follow-up prompts after request type selection.
2. SEO: add Organization and Person JSON-LD to profile and contact surfaces.
3. Performance: reduce opportunities page hydration cost with deferred non-critical controls.
4. Opportunities UX: add saved comparison presets (named trays) for recurring bid/no-bid workflows.
5. Writing UX: add timeline deep-links (year/theme anchors) for shareable scans.

## Shipped (date, area, commit)

- 2026-05-11 — Writing UX — Added a new Cards/Timeline view toggle on `/writing/` with year + theme clustering, URL/persistence state sync, keyboard shortcut (`v`), and local regression coverage for the timeline control flow. Commit: `946fb63b2`
- 2026-05-11 — Opportunities UX — Added an interactive comparison tray on `/opportunities/` with row-level Pin/Pinned actions, persistent 4-item local tray state, and a side-by-side decision matrix (due window, decision/confidence/corroboration, gov POCs, and signal depth). Commit: `c9c4e16c9`
- 2026-05-11 — Speaking UX — Added multi-dimensional discovery controls (search, sponsorship, year, and sort) with live result counts and stronger filter clarity on `/speaking/`. Commit: `6de241c02`
- 2026-05-11 — Operations UX / Status telemetry — Added pipeline health banner on `/status` with fresh/lagging/stale signal summary and freshness pills for Feed Crawl + SAM Intel/Drift. Commit: `fb892fafc`

## Next focus

- Contact conversion: add intent-specific follow-up prompts on `/contact/` that adapt fields/questions to hiring, speaking, advisory, and media requests.

## Anti-repeat rule

- Do not ship two consecutive runs on the same page-level surface.
- If the previous run touched machine-only agent/discovery endpoints, the next run must target a human-visible UX or content surface.
- Reject changes that are only copy edits, spacing tweaks, or single-threshold tuning unless they unlock a larger user-visible capability.
