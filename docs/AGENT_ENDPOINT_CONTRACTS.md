# Agent Endpoint Contracts

This repo publishes machine-facing discovery endpoints. These contracts are enforced by `npm run check:agent-endpoints` (runtime) and `npm run lint:discovery-events` (event-log source).

## Discovery roots

- `/llms.txt`
- `/llms-full.txt`
- `/agents.json`
- `/.well-known/agent-manifest.json`
- `/.well-known/llms.txt`

## Schema contracts

- `/schemas/agents.schema.json`
- `/schemas/agent-priority.schema.json`
- `/schemas/changes.schema.json`
- `/schemas/opportunities-export.schema.json`

## Priority + trust

- `/agent-priority.json`
  - `ingestion_tiers` must be strictly ascending by `tier`
  - each tier must include non-empty absolute URL `endpoints`
- `/integrity.json`
  - must include `tracked_source_integrity`
  - must cover all core discovery sources (llms, manifests, priority, changes, surface maps, opportunities exports, well-known aliases, and discovery event source)

## Surface maps

- `/writing/agent.json`
  - `surface = "writing"`
  - includes `primary_manifest`
  - includes `related_endpoints` and `/changes.jsonl`
  - `crawl_hints.refresh_hint = "daily"`

- `/events/agent.json`
  - `surface = "events"`
  - includes `related_routes.sources` + `related_routes.changes_stream`
  - `crawl_hints.refresh_hint = "every-4h"`

- `/opportunities/agent.json`
  - `surface = "opportunities"`
  - includes `source_routes.unified|sam|sbir`
  - includes `query_hints.source_param` with `sam` and `sbir`

- `/opportunities/export.json`
  - normalized opportunities export contract
  - includes `exports.sam` and `exports.sbir` links
  - `sources.sam.mode = "embedded"` with `count` and normalized `rows`
  - `sources.sbir.mode` + remote artifact links (`topics_url`, `summary_url`, `report_url`)

- `/opportunities/export-sam.json`
  - deterministic SAM-only export
  - includes `count` and normalized `rows` with `source = "sam"`

- `/opportunities/export-sbir.json`
  - deterministic SBIR-only artifact pointer export
  - includes `mode = "remote-artifact"` and `artifacts.*` URLs with `source = "sbir"`

## Change stream contracts

- Source of truth: `src/data/discovery-events.json` (append-only, ascending timestamps)
- `/changes.jsonl`
  - NDJSON rows with unique `id`
  - ascending `ts`
  - `type` in `{release, seo, agentic, ci}`
  - absolute links when `links` present
- `/changes.json`
  - summarizes event log (`event_log.count`, latest ID/TS)
  - publishes key `discovery_endpoints`

## CI enforcement

- Workflow: `.github/workflows/agent-discovery.yml`
- Gates:
  - `npm run lint:discovery-events`
  - `npm run build`
  - `npm run check:agent-endpoints`
