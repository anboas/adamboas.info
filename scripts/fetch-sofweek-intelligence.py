#!/usr/bin/env python3
"""Fetch exhaustive SOF Week intelligence bundle (SAM solicitations + public participant orgs).

Usage:
  SAM_API_KEY=xxxx python3 scripts/fetch-sofweek-intelligence.py
"""

from __future__ import annotations

import json
import os
import re
import xml.etree.ElementTree as ET
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import requests

API_URL = "https://api.sam.gov/opportunities/v2/search"
SITEMAP_URL = "https://sofweek.org/page-sitemap1.xml"
ROOT = Path("/home/anboas/clawd/adamboas-site")
OUT_JSON = ROOT / "src/data/radar/intel/sofweek-intel.json"

POSTED_FROM = "01/01/2026"
POSTED_TO = "02/26/2026"
PTYPE = "p,r,s,o,k"

STAKEHOLDERS = [
    "USSOCOM",
    "Global SOF Foundation",
    "MARSOC",
    "Naval Special Warfare",
    "AFSOC",
    "SOCCENT",
]

QUERIES = [
    {"organizationName": "Special Operations Command"},
    {"title": "USSOCOM"},
    {"title": "special operations command"},
    {"title": "SOF AT&L"},
    {"state": "FL", "organizationName": "Special Operations Command"},
]


def norm_text(value: str | None) -> str:
    if not value:
        return ""
    return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9\s]", " ", value.lower())).strip()


def stakeholder_tokens(stakeholder: str) -> list[str]:
    s = norm_text(stakeholder)
    out = {tok for tok in s.split(" ") if len(tok) >= 3}
    if "ussocom" in s or "special operations command" in s:
        out.update(["ussocom", "socom", "special operations command"]) 
    if "marsoc" in s:
        out.update(["marsoc", "marine forces special operations command"])
    if "naval" in s:
        out.update(["naval", "special warfare"])
    if "afsoc" in s or "air force" in s:
        out.update(["afsoc", "air force special operations"])
    return sorted(out)


def overlap_stakeholders(title: str, agency_path: str | None, solicitation_number: str | None) -> list[str]:
    blob = norm_text(" ".join([title or "", agency_path or "", solicitation_number or ""]))
    matched: list[str] = []
    for s in STAKEHOLDERS:
        if any(tok in blob for tok in stakeholder_tokens(s)):
            matched.append(s)
    return matched


def score_notice(row: dict[str, Any]) -> tuple[int, list[str], list[str]]:
    title = row.get("title") or ""
    agency = row.get("fullParentPathName") or ""
    blob = norm_text(f"{title} {agency}")
    score = 0
    reasons: list[str] = []

    tokens = ["ussocom", "socom", "special operations", "marsoc", "special warfare", "afsoc", "sof"]
    for tok in tokens:
        if tok in blob:
            score += 3
            reasons.append(f"token:{tok}")

    typ = row.get("type") or ""
    if typ in {"Sources Sought", "Presolicitation", "Special Notice", "Solicitation", "Combined Synopsis/Solicitation"}:
        score += 2
        reasons.append(f"type:{typ}")

    if row.get("responseDeadLine"):
        score += 1
        reasons.append("has_deadline")
    if row.get("naicsCode") or row.get("classificationCode"):
        score += 1
        reasons.append("has_codes")

    overlaps = overlap_stakeholders(title, row.get("fullParentPathName"), row.get("solicitationNumber"))
    if overlaps:
        score += min(6, 2 * len(overlaps))
        reasons.append("stakeholder_overlap")

    return score, reasons, overlaps


def fetch_sam(api_key: str) -> tuple[list[dict[str, Any]], list[dict[str, Any]]]:
    session = requests.Session()
    all_rows: dict[str, dict[str, Any]] = {}
    stats: list[dict[str, Any]] = []

    for query in QUERIES:
        offset = 0
        limit = 100
        total = None
        fetched = 0
        while True:
            params = {
                "api_key": api_key,
                "postedFrom": POSTED_FROM,
                "postedTo": POSTED_TO,
                "ptype": PTYPE,
                "limit": limit,
                "offset": offset,
            }
            params.update(query)
            r = session.get(API_URL, params=params, timeout=(10, 30))
            r.raise_for_status()
            payload = r.json()
            rows = payload.get("opportunitiesData") or []
            if total is None:
                total = payload.get("totalRecords")
            for row in rows:
                key = row.get("noticeId") or row.get("solicitationNumber") or row.get("title")
                if not key:
                    continue
                prior = all_rows.get(key)
                if prior is None:
                    all_rows[key] = row
                else:
                    d1 = prior.get("postedDate") or ""
                    d2 = row.get("postedDate") or ""
                    if d2 > d1:
                        all_rows[key] = row
            fetched += len(rows)
            offset += len(rows)
            if not rows or len(rows) < limit:
                break
            if total is not None and offset >= int(total):
                break
        stats.append({"query": query, "totalRecords": total, "fetched": fetched})

    notices: list[dict[str, Any]] = []
    for row in all_rows.values():
        score, reasons, overlaps = score_notice(row)
        notices.append(
            {
                "noticeId": row.get("noticeId") or "",
                "title": row.get("title") or "",
                "noticeType": row.get("type") or "",
                "postedDate": row.get("postedDate") or None,
                "responseDueDate": row.get("responseDeadLine") or None,
                "solicitationNumber": row.get("solicitationNumber") or None,
                "agencyPath": row.get("fullParentPathName") or None,
                "naicsCode": row.get("naicsCode") or None,
                "classificationCode": row.get("classificationCode") or None,
                "uiLink": row.get("uiLink") or (f"https://sam.gov/workspace/contract/opp/{row.get('noticeId')}/view" if row.get("noticeId") else None),
                "score": score,
                "scoreReasons": reasons,
                "overlapStakeholders": overlaps,
            }
        )

    notices.sort(key=lambda n: (n.get("score") or 0, n.get("postedDate") or ""), reverse=True)
    return notices, stats


STOPWORDS = {
    "logo",
    "logos",
    "rgb",
    "cmyk",
    "full",
    "color",
    "primary",
    "black",
    "white",
    "transparent",
    "horizontal",
    "vertical",
    "small",
    "large",
    "final",
    "scaled",
    "copy",
    "of",
    "tm",
    "svg",
    "png",
    "jpg",
    "jpeg",
    "web",
    "main",
    "v",
    "v1",
    "v2",
    "mdpi",
}


def slug_to_org(filename: str) -> str | None:
    base = filename.rsplit("/", 1)[-1]
    base = re.sub(r"\.[a-zA-Z0-9]+$", "", base)
    parts = [p for p in re.split(r"[-_\s]+", base.lower()) if p and p not in STOPWORDS]
    parts = [p for p in parts if not p.isdigit() and len(p) > 1]
    if not parts:
        return None
    name = " ".join(parts)
    name = re.sub(r"\s+", " ", name).strip()
    if len(name) < 3:
        return None
    return " ".join(w.upper() if w in {"ai", "llm", "gsof", "kbr", "lmi", "snc", "wwt", "caci"} else w.title() for w in name.split())


def parse_sitemap_participants() -> dict[str, list[str]]:
    r = requests.get(SITEMAP_URL, timeout=(10, 30))
    r.raise_for_status()
    xml = r.text

    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9", "img": "http://www.google.com/schemas/sitemap-image/1.1"}
    root = ET.fromstring(xml)

    buckets = {
        "sponsors": [],
        "mediaPartners": [],
        "communityCorridor": [],
    }

    for url_node in root.findall("sm:url", ns):
        loc_node = url_node.find("sm:loc", ns)
        if loc_node is None or not loc_node.text:
            continue
        loc = loc_node.text.strip().lower()

        if "/sponsors/" in loc:
            bucket = "sponsors"
        elif "/2026-media-partners/" in loc:
            bucket = "mediaPartners"
        elif "/sof-community-corridor/" in loc:
            bucket = "communityCorridor"
        else:
            continue

        for img_node in url_node.findall("img:image", ns):
            img_loc = img_node.find("img:loc", ns)
            if img_loc is None or not img_loc.text:
                continue
            org = slug_to_org(img_loc.text)
            if org:
                buckets[bucket].append(org)

    for key, values in buckets.items():
        deduped = sorted({v for v in values if v})
        buckets[key] = deduped

    return buckets


def main() -> None:
    api_key = os.environ.get("SAM_API_KEY", "").strip()
    if not api_key:
        raise SystemExit("SAM_API_KEY env var is required")

    notices, query_stats = fetch_sam(api_key)
    participants = parse_sitemap_participants()

    type_counts = Counter([n.get("noticeType") or "Unknown" for n in notices])
    overlap_counts = Counter()
    for n in notices:
        for s in n.get("overlapStakeholders") or []:
            overlap_counts[s] += 1

    payload = {
        "eventId": "radar-sofweek-2026",
        "collectedAt": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
        "postedFrom": POSTED_FROM,
        "postedTo": POSTED_TO,
        "noticeTypes": PTYPE.split(","),
        "totalMatched": len(notices),
        "topNotices": notices,
        "typeCounts": dict(type_counts),
        "queryStats": query_stats,
        "participants": {
            "sources": [
                "https://sofweek.org/sponsors/",
                "https://sofweek.org/2026-media-partners/",
                "https://sofweek.org/sof-community-corridor/",
            ],
            "sponsors": participants.get("sponsors", []),
            "mediaPartners": participants.get("mediaPartners", []),
            "communityCorridor": participants.get("communityCorridor", []),
            "organizationCount": len(set(participants.get("sponsors", []) + participants.get("mediaPartners", []) + participants.get("communityCorridor", []))),
        },
        "overlapSummary": {
            "withStakeholderOverlap": sum(1 for n in notices if n.get("overlapStakeholders")),
            "withoutStakeholderOverlap": sum(1 for n in notices if not n.get("overlapStakeholders")),
            "stakeholderCounts": dict(overlap_counts),
        },
    }

    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    print(f"WROTE {OUT_JSON}")
    print(f"Notices: {len(notices)}")
    print(f"Participants organizations: {payload['participants']['organizationCount']}")


if __name__ == "__main__":
    main()
