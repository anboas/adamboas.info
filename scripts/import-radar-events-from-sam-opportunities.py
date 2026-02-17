#!/usr/bin/env python3
"""Import SAM.gov opportunity notices into normalized candidate feeds.

Default mode pulls broad opportunity-signal notice types.
Navy/NSWC mode narrows to solicitation-relevant Navy sources.

Examples:
  # Broad signal feed
  SAM_API_KEY=xxxx python3 scripts/import-radar-events-from-sam-opportunities.py

  # Navy-focused feed (recommended for industry-day + solicitation relevance)
  SAM_API_KEY=xxxx python3 scripts/import-radar-events-from-sam-opportunities.py \
    --profile navy \
    --output-prefix sam-opportunities-navy

  # NSWC-specific feed
  SAM_API_KEY=xxxx python3 scripts/import-radar-events-from-sam-opportunities.py \
    --profile nswc \
    --output-prefix sam-opportunities-nswc
"""

from __future__ import annotations

import argparse
import json
import os
import re
from dataclasses import dataclass, asdict
from datetime import date, datetime, timedelta
from pathlib import Path
from typing import Any
from urllib.parse import urlencode
from urllib.request import Request, urlopen

API_URL = "https://api.sam.gov/opportunities/v2/search"
ROOT = Path("/home/anboas/clawd/adamboas-site")

PTYPE_LABELS = {
    "p": "Pre-solicitation",
    "r": "Sources Sought",
    "s": "Special Notice",
    "o": "Solicitation",
    "k": "Combined Synopsis/Solicitation",
    "a": "Award Notice",
}

NAVY_ORG_FILTERS = [
    "Department of the Navy",
    "Naval Sea Systems Command",
    "Naval Surface Warfare Center",
    "Naval Undersea Warfare Center",
    "Naval Air Systems Command",
    "Naval Information Warfare Systems Command",
    "Naval Supply Systems Command",
    "Naval Facilities Engineering Systems Command",
    "Strategic Systems Programs",
    "Military Sealift Command",
]

NSWC_ORG_FILTERS = [
    "Naval Surface Warfare Center",
    "Naval Undersea Warfare Center",
    "NSWC",
    "NUWC",
    "NAVSEA",
]

ARMY_ORG_FILTERS = [
    "Department of the Army",
    "Army Contracting Command",
    "U.S. Army Corps of Engineers",
    "Army Futures Command",
    "Army Rapid Capabilities and Critical Technologies Office",
]

AIR_ORG_FILTERS = [
    "Department of the Air Force",
    "Air Force Life Cycle Management Center",
    "Air Force Materiel Command",
    "Air Force Research Laboratory",
    "Space Systems Command",
]

MARINE_ORG_FILTERS = [
    "United States Marine Corps",
    "Marine Corps Systems Command",
    "Marine Corps Installations Command",
]

JOINT_ORG_FILTERS = [
    "Department of Defense",
    "Defense Information Systems Agency",
    "Defense Logistics Agency",
    "Missile Defense Agency",
    "U.S. Special Operations Command",
]

ENGAGEMENT_ORDER = ["Industry Day", "Pre-solicitation", "Sources Sought", "Vendor Outreach", "Special Notice"]


@dataclass
class Candidate:
    id: str
    title: str
    description: str
    opportunity_url: str
    ui_link: str | None
    source: str
    notice_id: str
    notice_type_code: str
    notice_type: str
    engagement_kinds: list[str]
    solicitation_number: str | None
    agency_path: str | None
    posted_date: str | None
    response_deadline: str | None
    place_of_performance: str | None
    relevance_score: int
    relevance_reasons: list[str]
    navy_related: bool


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    today = date.today()
    default_from = date(today.year, 1, 1).strftime("%m/%d/%Y")
    default_to = (today + timedelta(days=365)).strftime("%m/%d/%Y")

    parser.add_argument("--api-key", default=None)
    parser.add_argument("--posted-from", default=default_from)
    parser.add_argument("--posted-to", default=default_to)
    parser.add_argument("--limit", type=int, default=200)
    parser.add_argument("--max-pages", type=int, default=10)
    parser.add_argument("--ptypes", default="p,r,s,o,k", help="Comma-separated procurement types")
    parser.add_argument(
        "--profile",
        choices=["all", "navy", "nswc", "army", "air", "marine", "joint"],
        default="all",
    )
    parser.add_argument("--organization", action="append", default=[], help="Additional organizationName filters")
    parser.add_argument("--state", default=None, help="Optional place-of-performance state filter")
    parser.add_argument("--include-nonrelevant", action="store_true", help="Keep low-relevance rows")
    parser.add_argument("--min-relevance", type=int, default=2)
    parser.add_argument("--max-results", type=int, default=2500)
    parser.add_argument("--output-prefix", default="sam-opportunities", help="Output suffix for candidate files")
    return parser.parse_args()


def _safe_get(obj: dict[str, Any], *keys: str) -> Any:
    for key in keys:
        if key in obj and obj[key] not in (None, ""):
            return obj[key]
    return None


def normalize_date(value: str | None) -> str | None:
    if not value:
        return None
    txt = str(value).strip()

    for fmt in ("%m/%d/%Y", "%Y-%m-%d", "%Y-%m-%dT%H:%M:%S", "%Y-%m-%dT%H:%M:%S.%f"):
        try:
            return datetime.strptime(txt, fmt).date().isoformat()
        except ValueError:
            continue

    m = re.search(r"(20\d{2})-(\d{2})-(\d{2})", txt)
    if m:
        return f"{m.group(1)}-{m.group(2)}-{m.group(3)}"
    return None


def derive_engagement_kinds(ptype: str, title: str, description: str) -> list[str]:
    kinds: set[str] = set()

    mapped = PTYPE_LABELS.get(ptype)
    if mapped in {"Pre-solicitation", "Sources Sought", "Special Notice"}:
        kinds.add(mapped)

    blob = f"{title} {description}".lower()
    if re.search(r"industry\s*day|vendor\s*day|technology\s*industry\s*day", blob):
        kinds.add("Industry Day")
    if re.search(r"vendor\s*outreach|open\s*house|small\s*business\s*outreach|industry\s*outreach|industry\s+engagement", blob):
        kinds.add("Vendor Outreach")
    if re.search(r"pre[-\s]?solicitation|presolicitation|draft\s*rfp|rfi\b|request\s+for\s+information", blob):
        kinds.add("Pre-solicitation")
    if re.search(r"sources?\s*sought", blob):
        kinds.add("Sources Sought")
    if re.search(r"special\s*notice", blob):
        kinds.add("Special Notice")

    return [k for k in ENGAGEMENT_ORDER if k in kinds]


def relevance(title: str, description: str, agency_path: str | None, ptype: str) -> tuple[int, list[str], bool]:
    score = 0
    reasons: list[str] = []

    blob = f"{title} {description}".lower()
    agency = (agency_path or "").lower()

    navy_tokens = [
        "department of the navy",
        "naval",
        "navsea",
        "navair",
        "navsup",
        "navfac",
        "niwc",
        "spawar",
        "nswc",
        "nuwc",
        "military sealift command",
    ]

    navy_related = any(tok in agency for tok in navy_tokens) or any(tok in blob for tok in ["navy", "naval", "navair", "navsea", "nswc", "nuwc"]) 
    if navy_related:
        score += 3
        reasons.append("Navy-linked organization or content")

    if ptype in {"p", "r", "s"}:
        score += 2
        reasons.append(f"Signal notice type: {PTYPE_LABELS.get(ptype, ptype)}")
    elif ptype in {"o", "k"}:
        score += 1
        reasons.append(f"Solicitation notice type: {PTYPE_LABELS.get(ptype, ptype)}")

    if re.search(r"industry\s*day|sources?\s*sought|pre[-\s]?solicitation|draft\s*rfp|rfi\b|request\s+for\s+information", blob):
        score += 2
        reasons.append("Industry/sourcing signal keywords")

    if re.search(r"technical\s+interchange|industry\s+engagement|one[-\s]?on[-\s]?one|vendor\s+outreach|small\s+business", blob):
        score += 1
        reasons.append("Vendor engagement keywords")

    if re.search(r"surface\s+warfare|undersea\s+warfare|naval\s+surface\s+warfare\s+center|nswc|nuwc", blob + " " + agency):
        score += 2
        reasons.append("NSWC/NUWC signal")

    return score, reasons, navy_related


def fetch_page(
    api_key: str,
    ptype: str,
    posted_from: str,
    posted_to: str,
    limit: int,
    offset: int,
    organization_name: str | None = None,
    state: str | None = None,
) -> dict[str, Any]:
    params = {
        "api_key": api_key,
        "ptype": ptype,
        "postedFrom": posted_from,
        "postedTo": posted_to,
        "limit": limit,
        "offset": offset,
    }
    if organization_name:
        params["organizationName"] = organization_name
    if state:
        params["state"] = state

    req = Request(f"{API_URL}?{urlencode(params)}", headers={"Accept": "application/json"})
    with urlopen(req, timeout=45) as resp:
        return json.loads(resp.read().decode("utf-8", errors="ignore"))


def extract_rows(payload: dict[str, Any]) -> list[dict[str, Any]]:
    for key in ("opportunitiesData", "data", "records", "opportunities"):
        if isinstance(payload.get(key), list):
            return payload[key]
    if isinstance(payload, list):
        return payload
    return []


def row_to_candidate(row: dict[str, Any], ptype: str) -> Candidate | None:
    notice_id = str(_safe_get(row, "noticeId", "noticeID", "id") or "").strip()
    title = str(_safe_get(row, "title", "noticeTitle") or "").strip()
    if not notice_id or not title:
        return None

    description = str(_safe_get(row, "description", "descriptionText", "synopsis", "archiveType") or "").strip()
    posted = normalize_date(_safe_get(row, "postedDate", "publishDate", "date"))
    response_deadline = normalize_date(_safe_get(row, "responseDeadLine", "responseDeadline", "archiveDate", "closeDate"))
    solicitation = _safe_get(row, "solicitationNumber", "solNum")
    agency_path = _safe_get(row, "fullParentPathName", "organizationType", "organizationName")

    city = _safe_get(row, "placeOfPerformanceCity", "city")
    state = _safe_get(row, "placeOfPerformanceState", "state")
    place = None
    if city and state:
        place = f"{city}, {state}"
    elif city:
        place = str(city)

    opportunity_url = f"https://sam.gov/opp/{notice_id}/view"
    ui_link = _safe_get(row, "uiLink")

    score, reasons, navy_related = relevance(title, description, str(agency_path or ""), ptype)

    return Candidate(
        id=f"sam-{notice_id.lower()}",
        title=title,
        description=description,
        opportunity_url=opportunity_url,
        ui_link=str(ui_link) if ui_link else None,
        source="SAM.gov Get Opportunities Public API",
        notice_id=notice_id,
        notice_type_code=ptype,
        notice_type=PTYPE_LABELS.get(ptype, ptype),
        engagement_kinds=derive_engagement_kinds(ptype, title, description),
        solicitation_number=str(solicitation) if solicitation else None,
        agency_path=str(agency_path) if agency_path else None,
        posted_date=posted,
        response_deadline=response_deadline,
        place_of_performance=place,
        relevance_score=score,
        relevance_reasons=reasons,
        navy_related=navy_related,
    )


def to_markdown(candidates: list[Candidate], posted_from: str, posted_to: str, profile: str, ptypes: list[str]) -> str:
    lines: list[str] = []
    lines.append("# SAM.gov Opportunity Signal Candidates")
    lines.append("")
    lines.append(f"Generated: {datetime.utcnow().isoformat()}Z")
    lines.append(f"Profile: {profile}")
    lines.append(f"Notice types: {', '.join(ptypes)}")
    lines.append(f"Posted range: {posted_from} -> {posted_to}")
    lines.append("")

    by_type: dict[str, int] = {}
    engagement_counts: dict[str, int] = {}
    navy_count = 0

    for c in candidates:
        by_type[c.notice_type] = by_type.get(c.notice_type, 0) + 1
        if c.navy_related:
            navy_count += 1
        for k in c.engagement_kinds:
            engagement_counts[k] = engagement_counts.get(k, 0) + 1

    lines.append("## Counts")
    lines.append(f"- Total candidates: {len(candidates)}")
    lines.append(f"- Navy-related: {navy_count}")
    for key in sorted(by_type):
        lines.append(f"- {key}: {by_type[key]}")
    lines.append("")

    if engagement_counts:
        lines.append("## Engagement signals")
        for key in ENGAGEMENT_ORDER:
            if key in engagement_counts:
                lines.append(f"- {key}: {engagement_counts[key]}")
        lines.append("")

    lines.append("## Top candidates")
    lines.append("| Score | Notice | Engagement | Posted | Due | Agency | Title |")
    lines.append("|---:|---|---|---|---|---|---|")

    def row_key(c: Candidate):
        due = c.response_deadline or "9999-12-31"
        posted = c.posted_date or "0000-01-01"
        return (due, posted)

    for c in sorted(candidates, key=row_key)[:300]:
        engagement = ", ".join(c.engagement_kinds) if c.engagement_kinds else "-"
        agency = (c.agency_path or "").split(".")[0][:46]
        title = c.title.replace("|", "\\|")
        lines.append(
            f"| {c.relevance_score} | {c.notice_type} | {engagement} | {c.posted_date or ''} | {c.response_deadline or ''} | {agency} | [{title}]({c.opportunity_url}) |"
        )

    lines.append("")
    lines.append("## Notes")
    lines.append("- Candidate feed for Events tracker enrichment.")
    lines.append("- Dedupe should key on `notice_id` (or latest by notice id/version).")
    lines.append("- Relevance score is deterministic and explainable (`relevance_reasons`).")
    lines.append("- Engagement kinds are heuristic + notice-type based.")
    return "\n".join(lines) + "\n"


def select_org_filters(args: argparse.Namespace) -> list[str | None]:
    extra = [o for o in args.organization if o]

    profile_map: dict[str, list[str]] = {
        "navy": NAVY_ORG_FILTERS,
        "nswc": NSWC_ORG_FILTERS,
        "army": ARMY_ORG_FILTERS,
        "air": AIR_ORG_FILTERS,
        "marine": MARINE_ORG_FILTERS,
        "joint": JOINT_ORG_FILTERS,
    }

    if args.profile in profile_map:
        return list(dict.fromkeys(profile_map[args.profile] + extra))

    if extra:
        return extra
    return [None]


def main() -> int:
    args = parse_args()
    api_key = args.api_key or os.environ.get("SAM_API_KEY")
    if not api_key:
        raise SystemExit("Missing SAM API key. Set SAM_API_KEY or pass --api-key.")

    ptypes = [p.strip() for p in args.ptypes.split(",") if p.strip()]
    org_filters = select_org_filters(args)

    all_candidates: dict[str, Candidate] = {}
    request_count = 0

    for ptype in ptypes:
        for org in org_filters:
            for offset in range(0, args.max_pages):
                payload = fetch_page(
                    api_key=api_key,
                    ptype=ptype,
                    posted_from=args.posted_from,
                    posted_to=args.posted_to,
                    limit=args.limit,
                    offset=offset,
                    organization_name=org,
                    state=args.state,
                )
                request_count += 1
                rows = extract_rows(payload)
                if not rows:
                    break

                for row in rows:
                    candidate = row_to_candidate(row, ptype)
                    if not candidate:
                        continue

                    if args.profile in {"navy", "nswc"} and not candidate.navy_related:
                        continue

                    if not args.include_nonrelevant and candidate.relevance_score < args.min_relevance:
                        continue

                    prior = all_candidates.get(candidate.notice_id)
                    if prior and prior.relevance_score > candidate.relevance_score:
                        continue
                    all_candidates[candidate.notice_id] = candidate

                if len(all_candidates) >= args.max_results:
                    break
                if len(rows) < args.limit:
                    break

            if len(all_candidates) >= args.max_results:
                break
        if len(all_candidates) >= args.max_results:
            break

    candidates = list(all_candidates.values())
    candidates.sort(
        key=lambda c: (
            -(c.relevance_score or 0),
            c.response_deadline or "9999-12-31",
            c.posted_date or "0000-01-01",
            c.title.lower(),
        )
    )

    out_json = ROOT / f"src/data/radar/events-candidates-{args.output_prefix}.json"
    out_md = ROOT / f"src/data/radar/events-candidates-{args.output_prefix}.md"

    out_json.write_text(json.dumps([asdict(c) for c in candidates], indent=2) + "\n", encoding="utf-8")
    out_md.write_text(to_markdown(candidates, args.posted_from, args.posted_to, args.profile, ptypes), encoding="utf-8")

    print(f"Wrote {len(candidates)} SAM opportunity candidates")
    print(f"Requests sent: {request_count}")
    print(f"- {out_json}")
    print(f"- {out_md}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
