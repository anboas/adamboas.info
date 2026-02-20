# Event Source Feed Inventory (Active + Target Aggregators)

Updated: 2026-02-17

## 1) Active automated pull sources (currently wired)

| Source | Feed type | URL | Ingest path | Notes |
|---|---|---|---|---|
| SAM.gov Get Opportunities API | API (JSON) | https://open.gsa.gov/api/get-opportunities-public-api/ | `scripts/import-radar-events-from-sam-opportunities.py` | Supports profiles: all/navy/nswc/army/air/marine/joint |
| NAVSEA / NSWC source set | HTML pages | https://www.navsea.navy.mil/Home/Warfare-Centers/ | `scripts/import-radar-events-from-navy-nswc-pages.py` | Often partially blocked (403), but still primary Navy source |
| AUSA events | HTML calendar | https://www.ausa.org/meet | `scripts/import-radar-events-from-priority-sources.py` | Official |
| AFCEA events | HTML calendar | https://www.afcea.org/events | `scripts/import-radar-events-from-priority-sources.py` | Official |
| AFA events | HTML calendar | https://www.afa.org/events/ | `scripts/import-radar-events-from-priority-sources.py` | Official |
| Navy League events | HTML calendar | https://www.navyleague.org/meetings-and-events/ | `scripts/import-radar-events-from-priority-sources.py` | Official |
| CTO Innovation calendar | HTML calendar | https://www.ctoinnovation.mil/events/ | `scripts/import-radar-events-from-priority-sources.py` | Official gov |
| SAME events | HTML calendar | https://www.same.org/events/ | `scripts/import-radar-events-from-priority-sources.py` | Official |
| ASD Events Defense & Security | HTML listing | https://www.asdevents.com/defense-security | `scripts/import-radar-events-from-priority-sources.py` | Aggregator |
| Military Expos | HTML + embedded payload | https://www.militaryexpos.com/ | `scripts/import-radar-events-from-priority-sources.py` | Aggregator |
| **Marine Military Expos** | HTML site | https://marinemilitaryexpos.com/ | `scripts/import-radar-events-from-priority-sources.py` | Marine-specific event source (Modern Day Marine) |
| Potomac Officers Club events | HTML listing | https://www.potomacofficersclub.com/govcon-events/ | `scripts/import-radar-events-from-priority-sources.py` | Aggregator |

## 2) Active-but-partially-manual / anti-bot constrained sources

| Source | URL | Current access status | Monitoring approach |
|---|---|---|---|
| NDIA events | https://www.ndia.org/events | Bot challenge/Incapsula in automation context | Indexed URL discovery + manual verification + direct event URL ingestion |
| NDIA short links (example) | https://www.ndia.org/SpecialOps26 | Bot challenge in automation context | Use canonical event URL path and registration URL when discoverable |
| DoD OSBP events | https://business.defense.gov/Engage/Events-Calendar/ | Often blocked/403 | Spot-check via search and manual curation |
| USACE contractor events | https://www.usace.army.mil/Business-With-Us/Small-Business/Find-Upcoming-Conferences-Outreach-Events-Training/ | Often blocked/403 | Spot-check via search and manual curation |
| DLA events | https://www.dla.mil/Working-With-DLA/Events/ | Often blocked/403 | Spot-check via search and manual curation |

## 3) Aggregator feeds to pull from (recommended set)

Use these as secondary discovery feeds, then enforce trusted-link validation before publish.

1. Military Expos — https://www.militaryexpos.com/
2. Marine Military Expos — https://marinemilitaryexpos.com/
3. ASD Events (Defense & Security) — https://www.asdevents.com/defense-security
4. Potomac Officers Club GovCon Events — https://www.potomacofficersclub.com/govcon-events/
5. GovCIO Events — https://govciomedia.com/events/
6. GovEvents (discovery only; verify against organizer) — https://www.govevents.com/calendar.php?s=1

## 4) Pull cadence suggestion

- Daily: SAM API + priority sources + GovCIO events
- 2-3x/week: NAVSEA/NSWC pages (due intermittent access)
- Weekly: NDIA event URL harvest + manual verify pass
- Weekly: Source legitimacy audit refresh (`event-legitimacy-audit-YYYY-MM-DD.md`)

## 5) Publish guardrails (keep strict)

- Must be future-dated
- Must have a usable external event URL
- Must pass disallowed-domain filter
- Prefer official provenance; allow aggregators only when event URL points to organizer/registration
