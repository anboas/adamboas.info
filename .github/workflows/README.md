# GitHub Actions Operations Notes

This repo runs a mix of CI, ingest, and publishing workflows. This file captures current guardrails and why they exist.

## Current deployment flow

- `sync-whitepaper.yml` syncs published Whitepaper assets into this repo and pushes to `main` when changes exist.
- `deploy-dev-pages.yml` deploys Pages **from push to `main`**.
- `sync-whitepaper.yml` no longer manually dispatches deploy to avoid duplicate deploy runs.

## Churn controls

- Whitepaper sync schedule is every 6 hours (`17 */6 * * *`) instead of hourly.
- Plausible JSON fetch in `sync-whitepaper.yml` runs only on `workflow_dispatch` (manual) to avoid scheduled analytics churn.
- `deploy-dev-pages.yml` is path-scoped to site-affecting files (`src/**`, `public/**`, scripts/config/package lockfiles) and excludes Plausible generated JSON deltas.
- Quality workflows (`a11y`, `linkcheck`, `lighthouse`) are path-scoped on push/PR to run only when site/runtime/test/workflow inputs change.

## Permission model

- Workflows should use least privilege permissions.
- `sync-whitepaper.yml` requires only `contents: write`.
- Avoid adding `actions: write` unless a workflow must dispatch or mutate other workflow runs.

## Suggested maintenance cadence

Weekly:
- Check failed runs: `gh run list --repo anboas/adamboas.info --limit 30`
- Review longest-running jobs and trim expensive steps.
- Review artifact sizes and retention.

Monthly:
- Refresh action versions (`actions/*`) and verify deprecation warnings.
- Revisit schedules for ingest/deploy balance.

## Future upgrades (optional)

- Add `dependabot.yml` for GitHub Actions and npm package update PRs.
- Add a reusable workflow for common Node setup/build steps.
- Add artifact attestations on release workflows where binary artifacts are published.
