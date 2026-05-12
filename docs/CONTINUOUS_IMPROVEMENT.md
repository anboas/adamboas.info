# CONTINUOUS IMPROVEMENT

## Backlog (ranked)

1. SEO: add Organization and Person JSON-LD to profile and contact surfaces.
2. Performance: reduce opportunities page hydration cost with deferred non-critical controls.
3. Opportunities UX: add saved comparison presets (named trays) for recurring bid/no-bid workflows.
4. Writing UX: add jump-to-year quick navigator for long timeline scans.
5. Contact conversion: add inline "best time to connect" quick chips to shorten scheduling back-and-forth.

## Shipped (date, area, commit)

- 2026-05-12 — Contact conversion UX — Added urgency-qualified intake on `/contact/` with response-expectation guidance, preferred follow-up channel routing (email/phone/Signal-WhatsApp/video), adaptive follow-up detail/availability prompts, urgency-aware lead subjects, and Playwright regression coverage for adaptive field behavior + required urgency validation. Commit: `this commit`
- 2026-05-11 — Writing UX — Added shareable timeline deep-links on `/writing/` with `Copy year link` + `Copy theme link` actions, deterministic year/theme anchor IDs, hash-driven auto-switch to Timeline view, smooth anchor focusing, and regression coverage for shared URL opens. Commit: `3ad7f1a7d`
- 2026-05-11 — Contact conversion UX — Added intent-adaptive intake prompts on `/contact/` that reveal request-specific guidance, tailored follow-up fields, dynamic brief labels/placeholders, and auto-seeded brief templates when request type is selected. Commit: `8bc7c7bc6`
- 2026-05-11 — Writing UX — Added a new Cards/Timeline view toggle on `/writing/` with year + theme clustering, URL/persistence state sync, keyboard shortcut (`v`), and local regression coverage for the timeline control flow. Commit: `946fb63b2`
- 2026-05-11 — Opportunities UX — Added an interactive comparison tray on `/opportunities/` with row-level Pin/Pinned actions, persistent 4-item local tray state, and a side-by-side decision matrix (due window, decision/confidence/corroboration, gov POCs, and signal depth). Commit: `c9c4e16c9`
- 2026-05-11 — Speaking UX — Added multi-dimensional discovery controls (search, sponsorship, year, and sort) with live result counts and stronger filter clarity on `/speaking/`. Commit: `6de241c02`
- 2026-05-11 — Operations UX / Status telemetry — Added pipeline health banner on `/status` with fresh/lagging/stale signal summary and freshness pills for Feed Crawl + SAM Intel/Drift. Commit: `fb892fafc`

## Next focus

- SEO: ship explicit Organization + Person graph harmonization on `/profile/` and `/contact/` (cross-linked `@id`s + `sameAs` consistency) to strengthen rich result entity understanding.

## Anti-repeat rule

- Do not ship two consecutive runs on the same page-level surface.
- If the previous run touched machine-only agent/discovery endpoints, the next run must target a human-visible UX or content surface.
- Reject changes that are only copy edits, spacing tweaks, or single-threshold tuning unless they unlock a larger user-visible capability.
