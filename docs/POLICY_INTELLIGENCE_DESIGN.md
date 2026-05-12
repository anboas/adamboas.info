# Policy Intelligence Platform Design (v0.1)

## 1) Purpose
Build a source-aware, continuously updated **Policy Intelligence** capability alongside Events and Opportunities (SAM.gov + SBIR/STTR) so users can:
- Track policy changes across federal, DoW, service, and component layers.
- Understand policy authority hierarchy and cross-document relationships.
- Link policy movement to real-world execution signals (events, solicitations, programs, technologies).
- Generate actionable insights, not just document archives.

## 2) Product Outcome
A new Policy surface that answers:
- What changed?
- Why does it matter?
- Who/what is affected?
- What downstream opportunities, risks, or actions does this create?

This should function as the policy equivalent of current Events + Opportunities intelligence, with shared shell conventions but policy-native information architecture.

## 3) Scope
### In scope
- Ingestion of policy/legal/directive artifacts from official and high-confidence sources.
- Full policy ontology/taxonomy + relationship graph.
- Metadata extraction and normalization pipeline.
- Change detection + supersession lifecycle tracking.
- Insight engine for policy impact, trend, and linkage analysis.
- UI/UX for browsing, filtering, graphing, and alerting.
- Machine-facing exports and schemas.

### Out of scope (initial phases)
- Legal advice or interpretive counsel replacement.
- Full-text legal semantic parsing perfection on day one.
- Fully automated conflict adjudication without confidence labels.

## 4) User Personas
1. **Acquisition strategist**: needs policy-to-opportunity impact.
2. **Technical program lead**: needs requirements traceability from top policy to implementation guidance.
3. **Policy analyst**: needs lifecycle, supersession, and thematic trend mapping.
4. **Operator/executor**: needs concise “what changed and what to do now”.

## 5) Authority Hierarchy Model
Define `authority_level` to preserve legal/policy precedence:
1. Constitution / U.S. Code / Public Law / NDAA authority
2. Executive directives (EO, NSPM/NSM and equivalent)
3. OSD / DoW enterprise directives (DoDD, DoDI, DoDM, DTM, enterprise memos)
4. Joint directives/publications
5. Service-level issuances (e.g., DON/SECNAV/OPNAV, Army, Air Force)
6. Component/command/program guidance (SYSCOM, PEO, command memos)

All policy objects carry both source type and authority level.

## 6) Policy Taxonomy (Document Types)
- Statute / Public Law / U.S. Code references
- Executive Order
- National security presidential directive/memo equivalents
- DoDD (Directive)
- DoDI (Instruction)
- DoDM (Manual)
- DTM / interim guidance
- Department-level memo / policy memo
- Service instruction / memo / admin notice
- Component instruction / command policy letter
- Implementation guide / annex / template
- Cancellation/rescission/supersession notice

## 7) Relationship Ontology
Core typed edges:
- `derives_authority_from`
- `implements`
- `interprets`
- `amends`
- `supersedes`
- `rescinds`
- `references`
- `duplicates`
- `conflicts_with` (confidence-scored)
- `applies_to` (organization, domain, mission set)
- `enforced_by`
- `drives_requirement`
- `drives_opportunity` (SAM/SBIR)
- `drives_event` (industry day, summit, workshop)
- `touches_capability` (AI, cyber, cloud, data, autonomy, etc.)

## 8) Source Catalog Strategy
### Source classes
1. **Official authoritative portals** (highest trust)
2. **Official mirrors/archives** (high trust)
3. **High-confidence secondary sources** (medium trust, clearly labeled)

### Ingestion source registry schema
Per source:
- `source_id`, `name`, `owner_org`, `source_type`
- `fetch_method` (API/HTML/PDF/RSS/sitemap/manual)
- `auth_mode` (public/session-required)
- `rate_limit_profile`
- `freshness_expectation`
- `trust_tier`
- `legal_notes` (robots/terms/public record status)

## 9) Ingestion Architecture
### Engine components
1. **Discovery adapter layer**
   - Source-specific crawlers/adapters
   - URL discovery from indices/sitemaps/lists
2. **Fetch layer**
   - Deterministic fetch with retries/backoff
   - Session-aware fallback where required
3. **Document processor**
   - File type detection
   - OCR/transcription if needed
   - Text extraction and section segmentation
4. **Normalizer**
   - Canonical IDs, date normalization, issuer normalization
   - Title harmonization
5. **Entity resolver**
   - De-dup records across mirrors/URLs/versions
6. **Relationship linker**
   - Parse citations and references
   - Detect supersession/chains
7. **Versioner + diff engine**
   - Hash/version snapshots
   - Semantic and structural diff
8. **Persistence + export**
   - Graph + relational stores
   - JSON/JSONL exports + schema validation

## 10) Data Model
### Core entity: `PolicyDocument`
Required fields:
- `id` (stable canonical)
- `title`
- `document_type`
- `issuer`
- `authority_level`
- `status` (active, superseded, rescinded, interim, draft, unknown)
- `publication_date`
- `effective_date`
- `official_url`
- `source_provenance[]`
- `version_hash`

Important optional fields:
- `document_number` (DoDI X, EO Y, memo number)
- `review_due_date`
- `expiration_date`
- `classification_marker` (if present in metadata)
- `audience_scope`
- `applicability_scope`
- `mission_threads[]`
- `capability_tags[]`
- `compliance_obligations[]`
- `key_deadlines[]`
- `supersession_chain`
- `related_entities[]`

## 11) Metadata Extraction Plan
Extract and normalize:
- Header metadata (issuer, doc number, publication/effective date)
- Authority citations (law, EO, superior instruction)
- Applicability language (who must comply)
- Mandates/obligations verbs (shall/must/required)
- Reporting/audit requirements
- Waiver authorities
- Change clauses (amended/rescinded/replaced)
- Attachments/annexes/appendices
- Contact offices and POCs (if public)
- Domain tags (AI, cyber, zero trust, supply chain, acquisition, software)

## 12) Insight Engine
### Insight families
1. **Change Intelligence**
   - New/updated/rescinded docs
   - Delta summaries by domain/org
2. **Dependency Intelligence**
   - Upstream authority map
   - Downstream implementation coverage
3. **Impact Intelligence**
   - Programs/mission threads affected
   - Opportunity impacts (SAM/SBIR)
   - Event relevance impacts
4. **Risk/Gap Intelligence**
   - Orphan implementation (no child guidance)
   - Stale directives with active dependencies
   - Conflicting instructions (confidence-scored)
5. **Velocity/Trend Intelligence**
   - Policy activity by capability area over time

## 13) Cross-Surface Integration
### Events
- Add policy drivers per event (`policy_event_links`).
- Show “policy relevance chips” and impacted directives.

### Opportunities (SAM/SBIR)
- Add policy relevance vectors to opportunities.
- Explain “why this opportunity matters now” with policy citations.

### Shared entity graph
- Reuse entity constants and relationship services where possible.
- Keep policy-specific semantics independent from SAM/SBIR schema assumptions.

## 14) User Experience Requirements
### Policy surface modes
1. **List mode**: sortable/filterable policy ledger
2. **Timeline mode**: change stream + effective dates
3. **Graph mode**: authority and dependency network
4. **Impact mode**: policy->events/opportunities/capabilities

### Filter dimensions
- Document type
- Authority level
- Issuer/organization
- Status
- Date range (published/effective/updated)
- Capability tags
- Affected org/mission thread
- Confidence/provenance

### Detail view panels
- Executive summary
- Key obligations/deadlines
- Relationship graph neighborhood
- Supersession and lineage chain
- Linked events/opportunities
- Source provenance and trust indicators

## 15) Machine-Facing Contracts
Planned endpoints (draft):
- `/policy/export.json`
- `/policy/freshness.json`
- `/policy/lineage.json`
- `/policy/health.json`
- `/policy/graph.json`
- `/schemas/policy-*.schema.json`

Contract properties:
- Deterministic ordering
- Stable IDs
- Explicit provenance and confidence
- Snapshot IDs and timestamps

## 16) Quality, Trust, and Governance
- Source trust tiers with hard labeling in UI.
- Provenance required for all extracted claims.
- Confidence scoring for inferred links.
- Manual override queue for ambiguous supersession/conflict links.
- Audit logs for ingestion and extraction steps.

## 17) Observability and Ops
- Ingestion run health: success/fail, latency, fetch volume, parse success rate
- Extraction quality metrics: missing metadata rates by source/doc type
- Relationship quality metrics: unresolved references, duplicate clusters
- Freshness SLAs per source class
- Alerting for stale high-authority sources

## 18) Security and Compliance
- Respect source terms and access boundaries.
- Keep private/session-derived data segregated and marked.
- No secret persistence in raw docs.
- PII minimization in extracted metadata.

## 19) Delivery Phases
### Phase 0: Foundation Planning (current)
- Freeze taxonomy + ontology + source registry schema.
- Finalize data contracts and confidence model.

### Phase 1: Core Ingestion + Ledger MVP
- Ingest top authoritative sources.
- Publish policy list with filters and detail pages.

### Phase 2: Relationship Graph + Lifecycle Intelligence
- Supersession chains and dependency maps.
- Change stream and impact summaries.

### Phase 3: Cross-Surface Intelligence
- Policy↔Events↔Opportunities linking and explanation layer.

### Phase 4: Advanced Insights + Automation
- Trend analytics, risk/gap scoring, targeted alerts/digests.

## 20) Success Metrics
- Coverage: % of target policy universe represented
- Freshness: median source lag
- Link completeness: % docs with upstream/downstream links
- Insight utility: user actions from policy insight to opportunity/event
- Trust: % records with high-confidence provenance

## 21) Open Decisions
1. Canonical ID format across heterogeneous issuances.
2. Graph backend choice (JSONL+TS vs SQLite/graph DB) at scale.
3. Tradeoff between strict determinism and near-real-time ingestion.
4. Confidence scoring rubric calibration and UI language.
5. Threshold for auto-linking vs human review.

## 22) Immediate Next Build Items
1. Create `policy-source-registry.json` scaffold.
2. Create `policy-taxonomy.ts` and `policy-ontology.ts` typed contracts.
3. Add `policy/export.json` and schema stub.
4. Seed 25-50 canonical documents across hierarchy levels.
5. Implement first ingestion adapter with deterministic run artifact output.

---
Status: Draft v0.1 (initial architecture and requirements baseline)
