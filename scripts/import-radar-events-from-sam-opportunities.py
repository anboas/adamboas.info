#!/usr/bin/env python3
"""Import SAM.gov opportunity notices (pre-solicitation / sources sought / special notice)
into a normalized candidate file for Events tracker enrichment.

Usage:
  SAM_API_KEY=xxxx python3 scripts/import-radar-events-from-sam-opportunities.py \
    --posted-from 01/01/2026 --posted-to 12/31/2026

Outputs:
  - src/data/radar/events-candidates-sam-opportunities.json
  - src/data/radar/events-candidates-sam-opportunities.md
"""

from __future__ import annotations

import argparse
import json
import re
from dataclasses import dataclass, asdict
from datetime import date, datetime, timedelta
from pathlib import Path
from typing import Any
from urllib.parse import urlencode
from urllib.request import Request, urlopen

API_URL = "https://api.sam.gov/opportunities/v2/search"
ROOT = Path("/home/anboas/clawd/adamboas-site")
OUT_JSON = ROOT / "src/data/radar/events-candidates-sam-opportunities.json"
OUT_MD = ROOT / "src/data/radar/events-candidates-sam-opportunities.md"

PTYPES = {
    "p": "Pre-solicitation",
    "r": "Sources Sought",
    "s": "Special Notice",
}


@dataclass
class Candidate:
    id: str
    title: str
    description: str
    opportunity_url: str
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


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    today = date.today()
    default_from = date(today.year, 1, 1).strftime("%m/%d/%Y")
    default_to = (today + timedelta(days=365)).strftime("%m/%d/%Y")

    parser.add_argument("--api-key", default=None)
    parser.add_argument("--posted-from", default=default_from)
    parser.add_argument("--posted-to", default=default_to)
    parser.add_argument("--limit", type=int, default=100)
    parser.add_argument("--max-pages", type=int, default=15)
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

    mapped = PTYPES.get(ptype)
    if mapped:
        kinds.add(mapped)

    blob = f"{title} {description}".lower()
    if re.search(r"industry\s*day|industry\s*outreach|vendor\s*day", blob):
        kinds.add("Industry Day")
    if re.search(r"vendor\s*outreach|open\s*house|small\s*business\s*outreach|business\s*opportunit", blob):
        kinds.add("Vendor Outreach")
    if re.search(r"pre[-\s]?solicitation|presolicitation|draft\s*rfp|rfi\b", blob):
        kinds.add("Pre-solicitation")
    if re.search(r"sources?\s*sought", blob):
        kinds.add("Sources Sought")
    if re.search(r"special\s*notice", blob):
        kinds.add("Special Notice")

    # deterministic display order
    order = ["Industry Day", "Pre-solicitation", "Sources Sought", "Vendor Outreach", "Special Notice"]
    return [k for k in order if k in kinds]


def fetch_page(api_key: str, ptype: str, posted_from: str, posted_to: str, limit: int, page: int) -> dict[str, Any]:
    params = {
        "api_key": api_key,
        "ptype": ptype,
        "postedFrom": posted_from,
        "postedTo": posted_to,
        "limit": limit,
        # API has supported both page and offset variants over time; include page.
        "page": page,
    }
    req = Request(f"{API_URL}?{urlencode(params)}", headers={"Accept": "application/json"})
    with urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8", errors="ignore"))


def extract_rows(payload: dict[str, Any]) -> list[dict[str, Any]]:
    # Observed SAM payloads vary by wrapper key.
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
    agency_path = _safe_get(row, "fullParentPathName", "organizationType")

    city = _safe_get(row, "placeOfPerformanceCity", "city")
    state = _safe_get(row, "placeOfPerformanceState", "state")
    place = None
    if city and state:
        place = f"{city}, {state}"
    elif city:
        place = str(city)

    opportunity_url = f"https://sam.gov/opp/{notice_id}/view"

    return Candidate(
        id=f"sam-{notice_id.lower()}",
        title=title,
        description=description,
        opportunity_url=opportunity_url,
        source="SAM.gov Get Opportunities Public API",
        notice_id=notice_id,
        notice_type_code=ptype,
        notice_type=PTYPES.get(ptype, ptype),
        engagement_kinds=derive_engagement_kinds(ptype, title, description),
        solicitation_number=str(solicitation) if solicitation else None,
        agency_path=str(agency_path) if agency_path else None,
        posted_date=posted,
        response_deadline=response_deadline,
        place_of_performance=place,
    )


def to_markdown(candidates: list[Candidate], posted_from: str, posted_to: str) -> str:
    lines: list[str] = []
    lines.append("# SAM.gov Opportunity Signal Candidates")
    lines.append("")
    lines.append(f"Generated: {datetime.utcnow().isoformat()}Z")
    lines.append(f"Posted range: {posted_from} -> {posted_to}")
    lines.append("")

    by_type: dict[str, int] = {}
    for c in candidates:
        by_type[c.notice_type] = by_type.get(c.notice_type, 0) + 1

    lines.append("## Counts")
    for key in sorted(by_type):
        lines.append(f"- {key}: {by_type[key]}")
    lines.append("")

    lines.append("## Top candidates")
    lines.append("| Notice | Engagement | Posted | Due | Agency | Title |")
    lines.append("|---|---|---|---|---|---|")

    def row_key(c: Candidate):
        # soonest due date first, then latest posted date
        due = c.response_deadline or "9999-12-31"
        posted = c.posted_date or "0000-01-01"
        return (due, posted)

    for c in sorted(candidates, key=row_key)[:250]:
        engagement = ", ".join(c.engagement_kinds) if c.engagement_kinds else c.notice_type
        agency = (c.agency_path or "").split(".")[0][:40]
        title = c.title.replace("|", "\\|")
        lines.append(
            f"| {c.notice_type} | {engagement} | {c.posted_date or ''} | {c.response_deadline or ''} | {agency} | [{title}]({c.opportunity_url}) |"
        )

    lines.append("")
    lines.append("## Notes")
    lines.append("- This file is a candidate feed for Events tracker enrichment.")
    lines.append("- Expect duplicates and superseded notices; dedupe should key on `notice_id`.")
    lines.append("- Engagement kinds are heuristic + notice-type based.")
    return "\n".join(lines) + "\n"


def main() -> int:
    args = parse_args()
    api_key = args.api_key or __import__("os").environ.get("SAM_API_KEY")
    if not api_key:
        raise SystemExit("Missing SAM API key. Set SAM_API_KEY or pass --api-key.")

    all_candidates: dict[str, Candidate] = {}

    for ptype in PTYPES:
        for page in range(1, args.max_pages + 1):
            payload = fetch_page(api_key, ptype, args.posted_from, args.posted_to, args.limit, page)
            rows = extract_rows(payload)
            if not rows:
                break

            for row in rows:
                candidate = row_to_candidate(row, ptype)
                if not candidate:
                    continue
                all_candidates[candidate.notice_id] = candidate

            if len(rows) < args.limit:
                break

    candidates = list(all_candidates.values())
    candidates.sort(key=lambda c: (c.response_deadline or "9999-12-31", c.posted_date or "0000-01-01", c.title.lower()))

    OUT_JSON.write_text(json.dumps([asdict(c) for c in candidates], indent=2) + "\n", encoding="utf-8")
    OUT_MD.write_text(to_markdown(candidates, args.posted_from, args.posted_to), encoding="utf-8")

    print(f"Wrote {len(candidates)} SAM opportunity candidates")
    print(f"- {OUT_JSON}")
    print(f"- {OUT_MD}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
