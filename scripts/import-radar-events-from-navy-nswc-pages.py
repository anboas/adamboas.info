#!/usr/bin/env python3
"""Crawl NAVSEA/NSWC official pages for industry-day and solicitation-relevant signals.

Produces candidate artifacts for manual review + merge into Events tracker.
"""

from __future__ import annotations

import json
import re
from collections import deque
from dataclasses import dataclass, asdict
from datetime import datetime
from pathlib import Path
from typing import Iterable
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

ROOT = Path("/home/anboas/clawd/adamboas-site")
OUT_JSON = ROOT / "src/data/radar/events-candidates-navy-nswc-pages.json"
OUT_MD = ROOT / "src/data/radar/events-candidates-navy-nswc-pages.md"

HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; NavyNSWCCrawler/1.0)"}

SEED_URLS = [
    # Official NAVSEA/NSWC pages (best authority, sometimes blocked by edge policy)
    "https://www.navsea.navy.mil/Home/Warfare-Centers/NSWC-Philadelphia/Partnerships/Industry-Day/",
    "https://www.navsea.navy.mil/Home/Warfare-Centers/NSWC-Philadelphia/Partnerships/Small-Business-Office/Industry-Day/",
    "https://www.navsea.navy.mil/Home/Warfare-Centers/NSWC-Indian-Head/Partnerships/Small-Business/Industry-Day-Registration/",
    "https://www.navsea.navy.mil/Home/Warfare-Centers/NUWC-Newport/Partnerships/Contracting-and-Small-Business/Industry-Day/",
    "https://www.navsea.navy.mil/Home/Warfare-Centers/NSWC-Panama-City/",
    "https://www.navsea.navy.mil/Home/Warfare-Centers/NSWC-Corona/",
    "https://www.navsea.navy.mil/Home/Warfare-Centers/NSWC-Crane/",
    "https://www.navsea.navy.mil/Home/Warfare-Centers/NSWC-Dahlgren/",
    "https://www.navsea.navy.mil/Home/Warfare-Centers/NSWC-Carderock/",
    "https://www.navsea.navy.mil/Home/Warfare-Centers/NSWC-Port-Hueneme/",
    "https://www.navsea.navy.mil/Home/Warfare-Centers/NUWC-Newport/",
    # Accessible secondary sources that frequently mirror official event notices
    "https://www.afcea.org/events/2026-navy-information-warfare-industry-day",
    "https://maccdcpa.org/february-5-2026-nswc-philadelphia-division-hybrid-industry-day-10-a-m-215-p-m-online-and-in-person-options/",
    "https://www.highergov.com/contract-opportunity/2026-nswc-philadelphia-division-industry-day-s-9031d/",
    "http://sbga.us/News",
]

ALLOWED_HOSTS = {
    "navsea.navy.mil",
    "www.navsea.navy.mil",
    "afcea.org",
    "www.afcea.org",
    "maccdcpa.org",
    "www.maccdcpa.org",
    "highergov.com",
    "www.highergov.com",
    "sbga.us",
    "www.sbga.us",
    "tickettailor.com",
    "www.tickettailor.com",
    "sam.gov",
    "www.sam.gov",
}

PATH_KEYWORDS = [
    "industry-day",
    "industry",
    "small-business",
    "partnership",
    "contracting",
    "opportunities",
    "event",
    "business",
    "outreach",
    "special-notice",
    "sources-sought",
]

SIGNAL_PATTERNS = {
    "Industry Day": re.compile(r"industry\s*day|vendor\s*day", re.I),
    "Pre-solicitation": re.compile(r"pre[-\s]?solicitation|presolicitation|draft\s*rfp|request\s+for\s+information|\brfi\b", re.I),
    "Sources Sought": re.compile(r"sources?\s*sought", re.I),
    "Vendor Outreach": re.compile(r"vendor\s*outreach|small\s*business\s*outreach|industry\s*outreach|one[-\s]?on[-\s]?one", re.I),
    "Special Notice": re.compile(r"special\s*notice", re.I),
}

MONTHS = {
    "jan": 1,
    "january": 1,
    "feb": 2,
    "february": 2,
    "mar": 3,
    "march": 3,
    "apr": 4,
    "april": 4,
    "may": 5,
    "jun": 6,
    "june": 6,
    "jul": 7,
    "july": 7,
    "aug": 8,
    "august": 8,
    "sep": 9,
    "sept": 9,
    "september": 9,
    "oct": 10,
    "october": 10,
    "nov": 11,
    "november": 11,
    "dec": 12,
    "december": 12,
}


@dataclass
class Candidate:
    id: str
    title: str
    url: str
    center: str
    engagement_kinds: list[str]
    start_date: str | None
    end_date: str | None
    date_text: str | None
    summary: str
    confidence: str


def clean(s: str) -> str:
    return re.sub(r"\s+", " ", (s or "")).strip()


def canonical_url(url: str) -> str:
    p = urlparse(url)
    path = p.path.rstrip("/") or "/"

    # Normalize common event sub-pages back to canonical event URLs.
    parts = [seg for seg in path.split("/") if seg]
    if p.netloc.lower().endswith("afcea.org") and len(parts) >= 3 and parts[0] == "events":
        path = "/" + "/".join(parts[:2])

    if path.endswith("/contact-us") or path.endswith("/register") or path.endswith("/tickets"):
        path = path.rsplit("/", 1)[0] or "/"

    return f"{p.scheme}://{p.netloc}{path}"


def slugify(s: str) -> str:
    return re.sub(r"(^-|-$)", "", re.sub(r"[^a-z0-9]+", "-", s.lower()))[:70]


def parse_dates(text: str) -> tuple[str | None, str | None, str | None]:
    t = clean(text)

    # 2026-03-10 style
    m_iso = re.search(r"(20\d{2})-(\d{2})-(\d{2})(?:\s*(?:to|-)\s*(20\d{2})-(\d{2})-(\d{2}))?", t)
    if m_iso:
        start = f"{m_iso.group(1)}-{m_iso.group(2)}-{m_iso.group(3)}"
        end = None
        if m_iso.group(4):
            end = f"{m_iso.group(4)}-{m_iso.group(5)}-{m_iso.group(6)}"
        return start, end, m_iso.group(0)

    # Month 12-13, 2026
    m_range = re.search(r"([A-Za-z]{3,9})\s+(\d{1,2})\s*[-–]\s*(\d{1,2}),\s*(20\d{2})", t)
    if m_range:
        mm = MONTHS.get(m_range.group(1).lower())
        if mm:
            d1 = int(m_range.group(2))
            d2 = int(m_range.group(3))
            yy = int(m_range.group(4))
            return f"{yy:04d}-{mm:02d}-{d1:02d}", f"{yy:04d}-{mm:02d}-{d2:02d}", m_range.group(0)

    # Month 12, 2026
    m_one = re.search(r"([A-Za-z]{3,9})\s+(\d{1,2}),\s*(20\d{2})", t)
    if m_one:
        mm = MONTHS.get(m_one.group(1).lower())
        if mm:
            dd = int(m_one.group(2))
            yy = int(m_one.group(3))
            return f"{yy:04d}-{mm:02d}-{dd:02d}", None, m_one.group(0)

    # MM/DD/YYYY range
    m_us = re.search(r"(\d{1,2}/\d{1,2}/20\d{2})(?:\s*(?:to|-)\s*(\d{1,2}/\d{1,2}/20\d{2}))?", t)
    if m_us:
        def iso(v: str) -> str:
            mm, dd, yy = [int(x) for x in v.split("/")]
            return f"{yy:04d}-{mm:02d}-{dd:02d}"

        start = iso(m_us.group(1))
        end = iso(m_us.group(2)) if m_us.group(2) else None
        return start, end, m_us.group(0)

    return None, None, None


def infer_center(url: str, text: str) -> str:
    path = urlparse(url).path.lower()
    for token in [
        "nswc-philadelphia",
        "nswc-indian-head",
        "nswc-panama-city",
        "nswc-corona",
        "nswc-crane",
        "nswc-dahlgren",
        "nswc-carderock",
        "nswc-port-hueneme",
        "nuwc-newport",
        "nuwc-keyport",
    ]:
        if token in path:
            return token.replace("-", " ").upper()

    blob = text.lower()
    for label, pattern in [
        ("NSWC PHILADELPHIA", r"nswc\s+philadelphia"),
        ("NSWC INDIAN HEAD", r"nswc\s+indian\s+head"),
        ("NSWC PANAMA CITY", r"nswc\s+panama\s+city"),
        ("NSWC CORONA", r"nswc\s+corona"),
        ("NSWC CRANE", r"nswc\s+crane"),
        ("NSWC DAHLGREN", r"nswc\s+dahlgren"),
        ("NSWC CARDEROCK", r"nswc\s+carderock"),
        ("NSWC PORT HUENEME", r"nswc\s+port\s+hueneme"),
        ("NUWC NEWPORT", r"nuwc\s+newport"),
    ]:
        if re.search(pattern, blob):
            return label
    return "NAVSEA / NAVY"


def engagement_kinds(text: str) -> list[str]:
    out: list[str] = []
    for kind, pattern in SIGNAL_PATTERNS.items():
        if pattern.search(text):
            out.append(kind)
    return out


def should_keep_page(url: str, title: str, body: str) -> bool:
    blob = f"{url} {title} {body}".lower()
    host = (urlparse(url).netloc or "").lower()
    if host not in ALLOWED_HOSTS:
        return False

    if re.fullmatch(r"events?|news\s*&\s*events?|small business", title.strip(), flags=re.I):
        return False

    has_signal = any(p.search(blob) for p in SIGNAL_PATTERNS.values())
    has_navy_context = bool(re.search(r"navy|naval|navsea|nswc|nuwc|navair|niwc", blob))

    # For non-official mirrors, enforce stronger context.
    if "navsea.navy.mil" not in host and not (has_signal and has_navy_context):
        return False

    if has_signal:
        return True
    if has_navy_context and re.search(r"solicitation|sources\s*sought|rfi|special\s*notice|industry\s*outreach", blob):
        return True
    return False


def extract_links(url: str, soup: BeautifulSoup) -> Iterable[str]:
    for a in soup.find_all("a", href=True):
        href = a.get("href", "").strip()
        if not href or href.startswith("mailto:") or href.startswith("javascript:"):
            continue
        target = urljoin(url, href)
        parsed = urlparse(target)
        if parsed.scheme not in {"http", "https"}:
            continue
        host = (parsed.netloc or "").lower()
        if host and host not in ALLOWED_HOSTS:
            continue

        text = clean(a.get_text(" ", strip=True)).lower()
        path = parsed.path.lower()
        if any(k in path for k in PATH_KEYWORDS) or any(k in text for k in ["industry", "business", "contract", "event", "outreach", "sources sought", "rfi"]):
            yield canonical_url(target)


def crawl(max_pages: int = 60, max_depth: int = 1) -> list[Candidate]:
    seed_urls = [canonical_url(u) for u in SEED_URLS]
    seen: set[str] = set()
    queued: set[str] = set(seed_urls)
    q = deque((u, 0) for u in seed_urls)
    candidates: dict[str, Candidate] = {}

    while q and len(seen) < max_pages:
        url, depth = q.popleft()
        if url in seen:
            continue
        seen.add(url)

        try:
            resp = requests.get(url, headers=HEADERS, timeout=(5, 10), allow_redirects=True)
            if resp.status_code != 200:
                continue
            if "text/html" not in resp.headers.get("content-type", ""):
                continue
        except Exception:
            continue

        soup = BeautifulSoup(resp.text, "html.parser")
        title = clean((soup.find("h1") or soup.find("title") or soup.find("h2") or soup).get_text(" ", strip=True))
        body = clean(soup.get_text(" ", strip=True))

        if re.fullmatch(r"events?|news\s*&\s*events?|small business", title.strip(), flags=re.I):
            continue

        if should_keep_page(url, title, body):
            kinds = engagement_kinds(f"{title} {body}")
            start, end, dt = parse_dates(body)
            center = infer_center(url, f"{title} {body}")

            summary = clean(" ".join(body.split(" ")[:55]))
            conf = "High" if start else "Medium"

            key = slugify(f"{title}-{url}")
            candidates[key] = Candidate(
                id=f"navy-nswc-{key}",
                title=title[:180],
                url=url,
                center=center,
                engagement_kinds=kinds or ["Vendor Outreach"],
                start_date=start,
                end_date=end,
                date_text=dt,
                summary=summary,
                confidence=conf,
            )

        if depth >= max_depth:
            continue

        for next_url in extract_links(url, soup):
            if next_url in seen or next_url in queued:
                continue
            queued.add(next_url)
            q.append((next_url, depth + 1))

    return list(candidates.values())


def to_markdown(items: list[Candidate]) -> str:
    lines = [
        "# Navy / NSWC Opportunity Signal Candidates (Official Pages)",
        "",
        f"Generated: {datetime.utcnow().isoformat()}Z",
        f"Total candidates: {len(items)}",
        "",
        "| Center | Engagement | Date | Title |",
        "|---|---|---|---|",
    ]

    def row_key(c: Candidate):
        return (c.start_date or "9999-12-31", c.center, c.title.lower())

    for c in sorted(items, key=row_key):
        engagement = ", ".join(c.engagement_kinds)
        date_txt = c.start_date or "TBD"
        title = c.title.replace("|", "\\|")
        lines.append(f"| {c.center} | {engagement} | {date_txt} | [{title}]({c.url}) |")

    lines += [
        "",
        "## Notes",
        "- Official NAVSEA/NSWC pages are often evergreen and may list recurring or historical industry days.",
        "- Keep `start_date` optional and verify year/date before publishing as upcoming events.",
        "- Use this feed alongside SAM API ingestion for solicitation relevance.",
        "",
    ]
    return "\n".join(lines)


def main() -> int:
    items = crawl()
    OUT_JSON.write_text(json.dumps([asdict(i) for i in items], indent=2) + "\n", encoding="utf-8")
    OUT_MD.write_text(to_markdown(items), encoding="utf-8")

    print(f"Wrote {len(items)} Navy/NSWC page candidates")
    print(f"- {OUT_JSON}")
    print(f"- {OUT_MD}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
