# Radar Source Priority List (Authority + Freshness)

Generated: 2026-02-13T13:15:16.600914+00:00

Scoring: `priority = 0.65*authority + 0.35*freshness`

| Tier | Priority | Authority | Freshness | Source | URL | Status |
|---|---:|---:|---:|---|---|---:|
| P1-Primary | 4.70 | 5.0 | 4.2 | SAM.gov Get Opportunities Public API (ptype p/r/s) | https://open.gsa.gov/api/get-opportunities-public-api/ | 200 |
| P1-Primary | 4.55 | 4.8 | 4.2 | NAVSEA/NSWC official industry pages (crawl set) | https://www.navsea.navy.mil/Home/Warfare-Centers/ | 200 | 
| P1-Primary | 4.35 | 4.0 | 5.0 | AFCEA Events | https://www.afcea.org/events | 200 |
| P1-Primary | 4.35 | 4.0 | 5.0 | AUSA Meetings & Events | https://www.ausa.org/meet | 200 |
| P1-Primary | 4.35 | 4.0 | 5.0 | Navy League Meetings & Events | https://www.navyleague.org/meetings-and-events/ | 200 |
| P1-Primary | 4.35 | 4.0 | 5.0 | AFA Events | https://www.afa.org/events/ | 200 |
| P1-Primary | 4.35 | 4.0 | 5.0 | SAME Events | https://www.same.org/events/ | 200 |
| P1-Primary | 4.30 | 5.0 | 3.0 | CTO Innovation Industry Outreach Calendar | https://www.ctoinnovation.mil/events/ | 200 |
| P2-Secondary | 3.65 | 4.0 | 3.0 | NDIA Events | https://www.ndia.org/events | 200 |
| P2-Secondary | 3.60 | 5.0 | 1.0 | DoD OSBP Events Calendar | https://business.defense.gov/Engage/Events-Calendar/ | 403 |
| P2-Secondary | 3.60 | 5.0 | 1.0 | USACE Events for Contractors | https://www.usace.army.mil/Business-With-Us/Small-Business/Find-Upcoming-Conferences-Outreach-Events-Training/ | 403 |
| P2-Secondary | 3.60 | 5.0 | 1.0 | DoD Event Calendars | https://dod.defense.gov/Today-in-DoD/Event-Calendars/ | 403 |
| P2-Secondary | 3.60 | 5.0 | 1.0 | DLA Events | https://www.dla.mil/Working-With-DLA/Events/ | 403 |
| P3-Tertiary | 3.35 | 3.0 | 4.0 | JBenton Government Guide Tracker | https://jbenton1.github.io/government-guide/conference-tracker/ | 200 |
| P3-Tertiary | 3.25 | 3.0 | 3.7 | GovEvents Calendar | https://www.govevents.com/calendar.php?s=1 | 200 |
| P3-Tertiary | 3.05 | 2.0 | 5.0 | ASD Events Defense & Security | https://www.asdevents.com/defense-security | 200 |
| P3-Tertiary | 3.05 | 2.0 | 5.0 | Potomac Officers Club Defense | https://www.potomacofficersclub.com/govcon-event-category/defense/ | 200 |
| P3-Tertiary | 2.88 | 2.0 | 4.5 | DefGovTech | https://defgovtech.com/ | 200 |
| P3-Tertiary | 2.77 | 2.0 | 4.2 | Military Expos | https://www.militaryexpos.com/ | 200 |
| P3-Tertiary | 2.80 | 2.2 | 4.0 | Marine Military Expos (Modern Day Marine) | https://marinemilitaryexpos.com/ | 200 |
| P3-Tertiary | 2.30 | 3.0 | 1.0 | GovEvents DoD Organizer Listings | https://web.govevents.com/listings.php?organizer=DEPARTMENT+OF+DEFENSE+(DoD)&upcoming=1&past=1 | 403 |
| P3-Tertiary | 1.65 | 2.0 | 1.0 | Defense Advancement Events | https://www.defenseadvancement.com/events/ | 403 |

## Notes

- **SAM.gov Get Opportunities Public API (ptype p/r/s/o/k)**: Structured federal notice feed for pre-solicitation, sources sought, special notices, and solicitation/combined notices. Best API source for acquisition engagement signals and solicitation relevance.
- **NAVSEA/NSWC official pages**: Highest-authority source for Navy warfare-center industry-day context (often evergreen). Combine with SAM for date-validity and active-response windows.
- **AFCEA Events**: Mentions 2026/2027 (20 hits). Strong event/calendar language. Contains multiple dated references.
- **AUSA Meetings & Events**: Mentions 2026/2027 (16 hits). Strong event/calendar language. Contains multiple dated references.
- **Navy League Meetings & Events**: Mentions 2026/2027 (4 hits). Strong event/calendar language. Contains multiple dated references.
- **AFA Events**: Mentions 2026/2027 (9 hits). Strong event/calendar language. Contains multiple dated references.
- **SAME Events**: Mentions 2026/2027 (8 hits). Strong event/calendar language. Contains multiple dated references.
- **CTO Innovation Industry Outreach Calendar**: Strong event/calendar language. Applied association-events baseline freshness (content under-extracted).
- **NDIA Events**: Bot-protected in automation context (Incapsula/challenge pages); use indexed URL discovery + manual verification fallback.
- **DoD OSBP Events Calendar**: Access denied from automation. Blocked/non-200 response; freshness unknown.
- **USACE Events for Contractors**: Access denied from automation. Blocked/non-200 response; freshness unknown.
- **DoD Event Calendars**: Access denied from automation. Blocked/non-200 response; freshness unknown.
- **DLA Events**: Access denied from automation. Blocked/non-200 response; freshness unknown.
- **JBenton Government Guide Tracker**: Mentions 2026/2027 (5 hits). Some event/calendar language.
- **GovEvents Calendar**: Mentions 2026/2027 (1 hits). Some event/calendar language.
- **ASD Events Defense & Security**: Mentions 2026/2027 (47 hits). Strong event/calendar language. Contains multiple dated references.
- **Potomac Officers Club Defense**: Mentions 2026/2027 (1 hits). Strong event/calendar language. Contains multiple dated references.
- **DefGovTech**: Mentions 2026/2027 (6 hits). Strong event/calendar language.
- **Military Expos**: Mentions 2026/2027 (89 hits). Strong event/calendar language.
- **Marine Military Expos (Modern Day Marine)**: Strong Marine Corps-specific expo signal (dates/registration on homepage and subpages); useful niche supplement to broader defense calendars.
- **GovEvents DoD Organizer Listings**: Blocked/non-200 response; freshness unknown.
- **Defense Advancement Events**: Blocked/non-200 response; freshness unknown.
