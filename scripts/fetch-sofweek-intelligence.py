#!/usr/bin/env python3
"""Fetch exhaustive SOF Week intelligence bundle.

Outputs:
- Full SAM solicitation pull (configured window + profile queries)
- Public participant-organization signals from SOF Week sitemap pages
- Optional OpenAI enrichment (priority/relevance/theme/insight per notice)

Usage:
  SAM_API_KEY=xxxx python3 scripts/fetch-sofweek-intelligence.py
  SAM_API_KEY=xxxx OPENAI_API_KEY=xxxx python3 scripts/fetch-sofweek-intelligence.py
"""

from __future__ import annotations

import argparse
import json
import os
import re
import time
import xml.etree.ElementTree as ET
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import requests

API_URL = "https://api.sam.gov/opportunities/v2/search"
SITEMAP_URL = "https://sofweek.org/page-sitemap1.xml"
OPENAI_CHAT_URL = "https://api.openai.com/v1/chat/completions"

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


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--posted-from", default=POSTED_FROM)
    parser.add_argument("--posted-to", default=POSTED_TO)
    parser.add_argument("--ptypes", default=PTYPE)
    parser.add_argument("--out", default=str(OUT_JSON))
    parser.add_argument("--openai-model", default="gpt-4o-mini")
    parser.add_argument("--openai-max-notices", type=int, default=120)
    parser.add_argument("--openai-timeout", type=int, default=90)
    parser.add_argument("--no-openai", action="store_true")
    return parser.parse_args()


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


def sam_get_with_retry(session: requests.Session, params: dict[str, Any], retries: int = 3) -> requests.Response:
    last_exc: Exception | None = None
    for attempt in range(retries):
        try:
            resp = session.get(API_URL, params=params, timeout=(10, 50))
            resp.raise_for_status()
            return resp
        except Exception as exc:  # noqa: BLE001
            last_exc = exc
            if attempt < retries - 1:
                time.sleep(1.6 * (attempt + 1))
    if last_exc:
        raise last_exc
    raise RuntimeError("SAM request failed with unknown error")


def fetch_sam(api_key: str, posted_from: str, posted_to: str, ptypes: str) -> tuple[list[dict[str, Any]], list[dict[str, Any]]]:
    session = requests.Session()
    all_rows: dict[str, dict[str, Any]] = {}
    stats: list[dict[str, Any]] = []

    for query in QUERIES:
        offset = 0
        limit = 100
        total = None
        fetched = 0
        query_error: str | None = None

        while True:
            params = {
                "api_key": api_key,
                "postedFrom": posted_from,
                "postedTo": posted_to,
                "ptype": ptypes,
                "limit": limit,
                "offset": offset,
            }
            params.update(query)
            try:
                r = sam_get_with_retry(session, params)
            except Exception as exc:  # noqa: BLE001
                query_error = str(exc)
                break

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

        stat: dict[str, Any] = {"query": query, "totalRecords": total, "fetched": fetched}
        if query_error:
            stat["error"] = query_error
        stats.append(stat)

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
    return " ".join(w.upper() if w in {"ai", "llm", "gsof", "kbr", "lmi", "snc", "wwt", "caci", "bae"} else w.title() for w in name.split())


def parse_sitemap_participants() -> dict[str, list[str]]:
    xml = None
    last_error: Exception | None = None
    for attempt in range(3):
        try:
            r = requests.get(SITEMAP_URL, timeout=(10, 30))
            r.raise_for_status()
            xml = r.text
            break
        except Exception as exc:  # noqa: BLE001
            last_error = exc
            if attempt < 2:
                time.sleep(1.4 * (attempt + 1))
    if xml is None:
        # fail soft so SAM intelligence still lands
        print(f"WARN: participant sitemap fetch failed: {last_error}")
        return {"sponsors": [], "mediaPartners": [], "communityCorridor": []}

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
        buckets[key] = sorted({v for v in values if v})

    return buckets


def load_openai_key() -> str | None:
    env = (os.environ.get("OPENAI_API_KEY") or "").strip()
    if env:
        return env
    key_file = Path("/home/anboas/.secrets/openai_api_key")
    if key_file.exists():
        txt = key_file.read_text(encoding="utf-8").strip()
        if txt:
            return txt
    return None


def enrich_with_openai(notices: list[dict[str, Any]], participants: dict[str, list[str]], model: str, timeout_seconds: int, max_notices: int, openai_key: str) -> dict[str, Any]:
    if not notices:
        return {"enabled": False, "reason": "no_notices"}

    subset = notices[: max(1, min(max_notices, len(notices)))]

    compact = []
    for n in subset:
        compact.append(
            {
                "noticeId": n.get("noticeId"),
                "title": n.get("title"),
                "noticeType": n.get("noticeType"),
                "agencyPath": n.get("agencyPath"),
                "solicitationNumber": n.get("solicitationNumber"),
                "naicsCode": n.get("naicsCode"),
                "classificationCode": n.get("classificationCode"),
                "responseDueDate": n.get("responseDueDate"),
                "heuristicScore": n.get("score"),
                "overlapStakeholders": n.get("overlapStakeholders") or [],
            }
        )

    participant_orgs = sorted(
        set(
            (participants.get("sponsors") or [])
            + (participants.get("mediaPartners") or [])
            + (participants.get("communityCorridor") or [])
        )
    )

    system = (
        "You are an analyst enriching SOF Week solicitation intelligence. "
        "Return strict JSON only. No markdown. "
        "For each notice, produce relevance for SOF Week attendance and engagement context."
    )
    user = {
        "event": {
            "name": "SOF Week",
            "stakeholders": STAKEHOLDERS,
            "participantOrganizationsSample": participant_orgs[:120],
        },
        "instructions": {
            "outputShape": {
                "notices": [
                    {
                        "noticeId": "string",
                        "aiRelevanceScore": "integer 0-100",
                        "aiPriority": "low|medium|high",
                        "aiCategory": "short label",
                        "aiInsight": "<= 180 chars",
                        "aiQuestions": ["up to 3 short due-diligence questions"],
                        "aiOverlapEntities": ["entity names likely overlapping event stakeholders/participants"],
                    }
                ]
            },
            "guidance": [
                "Favor mission-aligned and stakeholder-overlapping notices.",
                "Higher score for opportunities with clear alignment, active deadlines, and relevant acquisition lanes.",
                "Do not hallucinate IDs; echo only provided noticeId values.",
            ],
        },
        "notices": compact,
    }

    payload = {
        "model": model,
        "temperature": 0.1,
        "response_format": {"type": "json_object"},
        "messages": [
            {"role": "system", "content": system},
            {"role": "user", "content": json.dumps(user)},
        ],
    }

    last_error: Exception | None = None
    resp = None
    for attempt in range(3):
        try:
            resp = requests.post(
                OPENAI_CHAT_URL,
                headers={"Authorization": f"Bearer {openai_key}", "Content-Type": "application/json"},
                json=payload,
                timeout=(15, timeout_seconds),
            )
            if resp.status_code == 429 and attempt < 2:
                time.sleep(2.2 * (attempt + 1))
                continue
            resp.raise_for_status()
            break
        except Exception as exc:  # noqa: BLE001
            last_error = exc
            if attempt < 2:
                time.sleep(2.2 * (attempt + 1))
            else:
                raise

    if resp is None:
        if last_error:
            raise last_error
        raise RuntimeError("OpenAI enrichment failed before response")

    body = resp.json()
    content = body["choices"][0]["message"]["content"]
    parsed = json.loads(content)
    rows = parsed.get("notices") or []

    by_id: dict[str, dict[str, Any]] = {}
    for row in rows:
        nid = (row.get("noticeId") or "").strip()
        if not nid:
            continue
        by_id[nid] = row

    enriched = 0
    for n in notices:
        nid = n.get("noticeId") or ""
        if nid in by_id:
            ai = by_id[nid]
            n["aiRelevanceScore"] = int(max(0, min(100, int(ai.get("aiRelevanceScore", 0)))))
            n["aiPriority"] = str(ai.get("aiPriority") or "").lower() or None
            n["aiCategory"] = ai.get("aiCategory")
            n["aiInsight"] = ai.get("aiInsight")
            n["aiQuestions"] = ai.get("aiQuestions") if isinstance(ai.get("aiQuestions"), list) else []
            n["aiOverlapEntities"] = ai.get("aiOverlapEntities") if isinstance(ai.get("aiOverlapEntities"), list) else []
            n["weightedScore"] = round(float(n.get("score") or 0) + (float(n["aiRelevanceScore"]) / 12.5), 2)
            enriched += 1
        else:
            n["weightedScore"] = float(n.get("score") or 0)

    notices.sort(key=lambda n: (n.get("weightedScore") or 0, n.get("score") or 0, n.get("postedDate") or ""), reverse=True)

    pri = Counter([n.get("aiPriority") or "unrated" for n in notices])
    cats = Counter([n.get("aiCategory") or "unlabeled" for n in notices if n.get("aiCategory")])

    return {
        "enabled": True,
        "model": model,
        "enrichedNotices": enriched,
        "priorityCounts": dict(pri),
        "topCategories": dict(cats.most_common(12)),
    }


def main() -> None:
    args = parse_args()

    sam_key = os.environ.get("SAM_API_KEY", "").strip()
    if not sam_key:
        raise SystemExit("SAM_API_KEY env var is required")

    notices, query_stats = fetch_sam(sam_key, args.posted_from, args.posted_to, args.ptypes)
    participants = parse_sitemap_participants()

    openai_meta: dict[str, Any] = {"enabled": False, "reason": "disabled_or_missing_key"}
    openai_key = None if args.no_openai else load_openai_key()
    if openai_key:
        try:
            openai_meta = enrich_with_openai(
                notices=notices,
                participants=participants,
                model=args.openai_model,
                timeout_seconds=args.openai_timeout,
                max_notices=args.openai_max_notices,
                openai_key=openai_key,
            )
        except Exception as exc:
            openai_meta = {"enabled": False, "reason": "error", "error": str(exc)}

    type_counts = Counter([n.get("noticeType") or "Unknown" for n in notices])
    overlap_counts = Counter()
    for n in notices:
        for s in n.get("overlapStakeholders") or []:
            overlap_counts[s] += 1

    payload = {
        "eventId": "radar-sofweek-2026",
        "collectedAt": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
        "postedFrom": args.posted_from,
        "postedTo": args.posted_to,
        "noticeTypes": args.ptypes.split(","),
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
            "organizationCount": len(
                set(
                    (participants.get("sponsors", []) or [])
                    + (participants.get("mediaPartners", []) or [])
                    + (participants.get("communityCorridor", []) or [])
                )
            ),
        },
        "overlapSummary": {
            "withStakeholderOverlap": sum(1 for n in notices if n.get("overlapStakeholders")),
            "withoutStakeholderOverlap": sum(1 for n in notices if not n.get("overlapStakeholders")),
            "stakeholderCounts": dict(overlap_counts),
        },
        "openaiEnrichment": openai_meta,
    }

    out = Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")

    print(f"WROTE {out}")
    print(f"Notices: {len(notices)}")
    print(f"Participants organizations: {payload['participants']['organizationCount']}")
    if openai_meta.get("enabled"):
        print(f"OpenAI enriched notices: {openai_meta.get('enrichedNotices')} (model={openai_meta.get('model')})")
    else:
        print(f"OpenAI enrichment skipped: {openai_meta.get('reason')}")


if __name__ == "__main__":
    main()
