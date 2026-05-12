# Policy Intelligence Platform Design (v1.0)

## A) Executive Summary
### Problem
Today the platform tracks Events and Opportunities (SAM.gov + SBIR/STTR), but policy change is still a blind spot. Critical execution signals often originate in policy documents long before they appear in market behavior, solicitations, or conference agendas. Without policy intelligence, users react late.

### Why now
- Policy velocity is increasing across AI, cyber, software, cloud, acquisition, and mission assurance.
- New guidance frequently supersedes prior documents with little practical traceability.
- Users need early warning and explainable linkage from policy to action.

### User value
Policy Intelligence gives users:
1. **Early signal**: detect impactful policy movement fast.
2. **Traceability**: map authority from statute/EO to implementation guidance.
3. **Actionability**: understand operational, acquisition, and investment implications.
4. **Confidence**: provenance, trust tiering, and explicit uncertainty labels.

### Strategic advantage
This creates a differentiated intelligence stack:
- Events = where attention is gathering.
- Opportunities = where money is moving.
- Policy = why the system is moving.

Together, this forms a policy-to-market-to-engagement loop that competitors rarely unify.

---

## B) Domain Model and Authority Hierarchy
### B1. Authority hierarchy
Use `authority_level` for precedence and inheritance:
1. **Constitution / Statute / U.S. Code / Public Law / NDAA authority**
2. **Executive directives** (EO, NSM/NSPM and equivalents)
3. **Enterprise DoW directives** (DoDD, DoDI, DoDM, DTM, enterprise memos)
4. **Joint directives/publications**
5. **Service-level issuances** (DON/SECNAV/OPNAV, Army, Air Force, etc.)
6. **Component/command/program guidance** (SYSCOM, PEO, command letters)

### B2. Document taxonomy
- Statute / Public Law / U.S. Code reference
- Executive Order
- Presidential directive/memorandum class
- DoDD (Directive)
- DoDI (Instruction)
- DoDM (Manual)
- DTM / Interim guidance
- Department-level memo / policy letter
- Service instruction / memo / admin notice
- Component instruction / command policy letter
- Annex / Implementation guide / technical appendix
- Cancellation / rescission / supersession notice

### B3. Relationship ontology (typed edges)
Required edge set:
- `derives_authority_from`
- `implements`
- `interprets`
- `amends`
- `supersedes`
- `rescinds`
- `references`
- `applies_to`
- `enforced_by`
- `drives_requirement`
- `drives_opportunity`
- `drives_event`
- `touches_capability`
- `conflicts_with` (inference + confidence)

**Decision:** keep relationship types explicit and narrow. Avoid free-text edge semantics.

**Tradeoff:** strict edge taxonomy reduces ambiguity but requires more up-front modeling effort.

---

## C) Source and Ingestion Architecture
### C1. Source catalog strategy
Classify every source into trust tiers:
- **Tier 1 (Authoritative):** official issuing portals and registries.
- **Tier 2 (Official mirror/archive):** agency mirrors and official publication repositories.
- **Tier 3 (Secondary):** high-confidence secondary trackers, always labeled.

Per source registry entry:
- `source_id`, `name`, `owner_org`, `source_type`
- `fetch_method` (API/HTML/PDF/RSS/sitemap/manual)
- `auth_mode` (public/session)
- `rate_limit_profile`
- `freshness_target`
- `trust_tier`
- `terms_notes`

### C2. Ingestion pipeline architecture
1. **Discovery adapters**
   - Source-specific discovery (sitemap, list page, API index)
2. **Fetch engine**
   - Deterministic fetch with retries, jitter, backoff
   - Session-aware fallback when required
3. **Document processing**
   - MIME detection, extraction (PDF/HTML/DOCX)
   - OCR fallback for scanned artifacts
4. **Normalization**
   - Canonical title, issuer, numbering, date normalization
5. **Entity resolution**
   - Cross-source dedupe and canonical entity merge
6. **Relationship linking**
   - Citation parsing, supersession chain detection
7. **Versioning + diffing**
   - Raw hash, normalized hash, semantic diff snapshots
8. **Persistence + export**
   - Canonical records, relation graph, lineage/freshness/health exports

### C3. Change and supersession tracking
- Detect and classify changes as:
  - `new_document`
  - `metadata_update`
  - `textual_revision`
  - `superseded`
  - `rescinded`
- Maintain explicit lineage chain:
  - predecessor(s), successor(s), status transitions, effective windows

### C4. Quality + confidence model
Every relation or extracted claim carries:
- `evidence_type` (explicit citation / structural hint / inferred)
- `confidence_score` (0-1)
- `confidence_label` (High/Medium/Low)
- `evidence_refs[]`

### C5. Ops and observability
Track per run:
- source success/failure rate
- parse success rate by file type
- unresolved citation count
- duplicate candidate count
- ingestion lag vs freshness target
- high-authority stale-source alerts

**Decision:** enforce freshness SLAs by source class, not globally.

**Tradeoff:** per-source SLAs are more complex but more accurate and operationally honest.

---

## D) Metadata Extraction Specification
### D1. Canonical required fields (`PolicyDocument`)
- `id` (stable canonical)
- `title`
- `document_type`
- `issuer`
- `authority_level`
- `status`
- `publication_date`
- `effective_date`
- `official_url`
- `source_provenance[]`
- `version_hash`

### D2. High-value optional fields
- `document_number`
- `review_due_date`
- `expiration_date`
- `audience_scope`
- `applicability_scope`
- `mission_threads[]`
- `capability_tags[]`
- `compliance_obligations[]`
- `key_deadlines[]`
- `waiver_authority`
- `contact_office`

### D3. Extraction logic requirements
- Parse authority sections and legal references.
- Extract enforceable obligation language (shall/must/required).
- Detect deadlines and trigger conditions.
- Detect amendment/supersession clauses.
- Resolve normalized references to internal policy IDs where possible.

### D4. Ambiguity handling
If extraction confidence < threshold:
- flag for review queue
- preserve raw evidence snippet
- do not auto-promote to high-confidence linkage

**Decision:** ambiguous supersession/conflict links must be review-gated.

---

## E) Insights Framework
### E1. Change intelligence
- Daily/weekly deltas by authority level, issuer, and capability domain.
- “What changed” summaries with confidence and impact rank.

### E2. Dependency intelligence
- Upstream authority graph (what drives this document).
- Downstream implementation map (what this document drives).

### E3. Impact intelligence
- Policy->opportunity relevance (SAM + SBIR)
- Policy->event relevance (conferences, workshops, industry days)
- Policy->capability impact (AI, cyber, software, cloud, data)

### E4. Risk/gap intelligence
- Orphan policy (no implementation guidance)
- Conflicting active instructions
- Stale dependent guidance
- High-impact rescissions without replacement

### E5. Trend/velocity intelligence
- Activity index by domain over time
- Issuer-level policy velocity
- thematic acceleration/deceleration signals

---

## F) Product UX and Feature Specification
### F1. Surface architecture
Add `/policy/` with policy-native IA under shared shell conventions.

Modes:
1. **Ledger/List:** sortable records with trust labels.
2. **Timeline:** publication/effective/rescission flows.
3. **Graph:** authority + dependency traversal.
4. **Impact:** linked opportunities/events/capabilities.

### F2. Filter/search model
- document type
- authority level
- issuer/service/component
- status
- published/effective/updated date windows
- capability tags
- mission threads
- confidence threshold

### F3. Detail page requirements
- concise executive summary
- obligations + deadlines panel
- supersession and lineage panel
- relationship graph neighborhood
- linked events/opportunities
- provenance and trust evidence panel

### F4. Confidence/provenance presentation
- never hide uncertainty
- display trust tier and confidence badges inline
- expandable evidence snippets per inferred relation

### F5. Alerts and watchlists
- watch by issuer, domain, doc type, authority level, relation type
- delivery options: in-app stream, digest cadence, critical alerts

### F6. Cross-link behaviors
- Events cards show “Policy Drivers” chips
- Opportunities records show “Policy Relevance” explanation with citations
- Policy pages deep-link into Events/Opportunities filtered contexts

---

## G) API and Contract Design
### G1. Proposed endpoints
- `/policy/export.json` (canonical normalized corpus)
- `/policy/freshness.json` (source freshness + lag)
- `/policy/lineage.json` (supersession/status lineage)
- `/policy/health.json` (pipeline and quality health)
- `/policy/graph.json` (entities + typed edges)

### G2. Contract rules
- deterministic ordering (stable sort keys)
- stable IDs (no transient IDs)
- explicit timestamps + snapshot IDs
- provenance and confidence per record and relation

### G3. Schema/versioning
- publish `/schemas/policy-*.schema.json`
- semver schema versioning
- backwards compatibility policy + migration notes

### G4. CI validation
- endpoint lints
- schema validation
- deterministic-order checks
- relation integrity checks (missing nodes, edge type validity)
- freshness guardrails for critical source classes

---

## H) Delivery Plan
### Phase 0 (Design freeze)
- finalize taxonomy, ontology, confidence rubric
- finalize endpoint contracts
- finalize source registry schema

### Phase 1 (Core ledger MVP)
- ingest top tier-1 sources
- publish list/detail pages
- export/freshness/health endpoints

### Phase 2 (Graph + lifecycle)
- relationship linking
- supersession/lineage views
- timeline view and change feed

### Phase 3 (Cross-surface integration)
- policy links into Events and Opportunities
- impact view and policy-driven ranking hints

### Phase 4 (Advanced intelligence)
- risk/gap analytics
- trend intelligence dashboards
- proactive digests and alerting automation

### MVP definition
MVP is complete when:
- canonical corpus exists for top authoritative sources
- status/lifecycle tracking works
- relations are queryable
- policy-to-events/opportunities links are visible with confidence labels

---

## I) Success Metrics
- **Coverage:** % of target policy source universe ingested
- **Freshness:** median lag by source tier
- **Link completeness:** % docs with upstream/downstream relations
- **Action utility:** clicks from policy insight to event/opportunity action
- **Trust quality:** % inferred links high-confidence with evidence
- **Operational health:** ingestion success and parse success rates

---

## J) Risks and Mitigations
1. **Legal/compliance risk**
   - Mitigation: source terms registry + fetch policy guardrails.
2. **Access/rate-limit risk**
   - Mitigation: adaptive schedules, cache strategy, session fallback lane.
3. **Entity resolution ambiguity**
   - Mitigation: canonical ID rules + human review queue.
4. **False inferred relationships**
   - Mitigation: confidence gating + visible evidence + manual adjudication.
5. **Scale/performance risk**
   - Mitigation: incremental snapshots, partitioned stores, deterministic exports.
6. **Staleness risk**
   - Mitigation: freshness SLAs and stale-critical alerts.
7. **User trust erosion from opaque scoring**
   - Mitigation: explainable logic and source-backed evidence panels.

---

## K) Open Questions + Recommended Decisions
1. **Canonical ID pattern?**
   - Recommendation: `{issuer}:{doc_type}:{doc_number_or_slug}:{first_pub_date}`
2. **Graph backend now or later?**
   - Recommendation: start JSON/TS + SQLite bridge, defer full graph DB.
3. **Inference threshold default?**
   - Recommendation: display Medium+, auto-action High only.
4. **Conflict detection automation scope?**
   - Recommendation: flag-only initially, no automatic conflict resolution.
5. **Source onboarding criteria?**
   - Recommendation: prioritize Tier 1 + high strategic relevance.
6. **How to handle missing effective dates?**
   - Recommendation: explicit unknown with confidence downgrade.
7. **Should secondary sources ever override official metadata?**
   - Recommendation: never override, only enrich.
8. **Digest cadence defaults?**
   - Recommendation: daily normal + immediate for high-impact rescissions.
9. **Policy impact scoring transparency level?**
   - Recommendation: fully explainable components, no black-box score.
10. **Version-diff granularity?**
    - Recommendation: section-level diff where possible.
11. **Review queue ownership?**
    - Recommendation: analyst-admin workflow with SLA tags.
12. **Cross-surface ranking influence?**
    - Recommendation: additive signal only, user-toggleable.
13. **Data retention policy?**
    - Recommendation: retain historical versions indefinitely when legal.
14. **Confidence calibration lifecycle?**
    - Recommendation: monthly precision/recall audit.
15. **MVP source breadth vs depth?**
    - Recommendation: depth on fewer authoritative sources first.

---

## Decision Log (Initial)
- **Decision:** policy gets a native IA, not SAM/SBIR mimicry.
- **Decision:** provenance and confidence are mandatory primitives.
- **Decision:** deterministic machine contracts are first-class deliverables.
- **Decision:** cross-surface links are required for value realization.

---

## First 30 Days Execution Plan
### Week 1
- Freeze taxonomy/ontology and confidence rubric.
- Create source registry and policy contract schemas.
- Create policy endpoint stubs and CI checks.

### Week 2
- Implement first ingestion adapters for top authoritative sources.
- Build normalization and canonical ID pipeline.
- Publish initial `policy/export.json` snapshot.

### Week 3
- Implement relation linking (references, supersedes, derives authority).
- Add lineage/freshness/health endpoints.
- Build policy ledger UI (list + detail MVP).

### Week 4
- Add timeline + basic graph view.
- Add policy links into Events and Opportunities.
- Launch first change digest and quality dashboards.

---

## Immediate Build Tickets (Start Now)
1. `docs/policy-source-registry.schema.json` + starter registry.
2. `src/lib/policy/taxonomy.ts` and `src/lib/policy/ontology.ts`.
3. `src/pages/policy/export.json.ts` + schema endpoint.
4. `src/pages/policy/freshness.json.ts` + health baseline.
5. `scripts/check-policy-endpoints.mjs` contract validator.

Status: Complete design baseline ready for implementation kickoff.
