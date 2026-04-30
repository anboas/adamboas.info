#!/usr/bin/env python3
"""Crawl feed-registry URLs and publish a simple health report.

Outputs:
- src/data/radar/feed-crawl-report-latest.json
- src/data/radar/feed-crawl-report-latest.md
"""

from __future__ import annotations

import json
import os
import re
import subprocess
from dataclasses import dataclass, asdict
from datetime import datetime, timezone
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
REGISTRY_PATH = ROOT / "src/data/radar/feed-registry.json"
OUT_JSON = ROOT / "src/data/radar/feed-crawl-report-latest.json"
OUT_MD = ROOT / "src/data/radar/feed-crawl-report-latest.md"

UA_CONTACT_URL = os.environ.get("RADAR_UA_CONTACT_URL", "https://www.adamboas.com/events/sources/").strip()
UA = f"Mozilla/5.0 (compatible; RadarFeedCrawler/1.0; +{UA_CONTACT_URL})"
MAX_READ = 350_000
FAST_BROWSER_FETCH = Path(
    os.environ.get(
        "FAST_BROWSER_FETCH",
        str(ROOT.parent / "scripts/fast_browser_fetch.sh"),
    )
)
BROWSER_FETCH_TIMEOUT = int(os.environ.get("RADAR_BROWSER_FETCH_TIMEOUT", "30"))

BLOCK_PATTERNS = [
    re.compile(r"incapsula", re.I),
    re.compile(r"access denied", re.I),
    re.compile(r"just a moment", re.I),
    re.compile(r"cf-browser-verification", re.I),
    re.compile(r"captcha", re.I),
]


@dataclass
class CrawlResult:
    id: str
    name: str
    category: str
    url: str
    crawlEnabled: bool
    status: int | None
    finalUrl: str | None
    contentType: str | None
    blocked: bool
    yearHits: int
    eventKeywordHits: int
    error: str | None
    fetchedAt: str


def fetch_via_browser(url: str) -> tuple[int, str, str, str]:
    if not FAST_BROWSER_FETCH.exists():
        raise RuntimeError("fast_browser_fetch_not_found")

    p = subprocess.run(
        [
            str(FAST_BROWSER_FETCH),
            "--engine",
            "auto",
            "--timeout",
            str(BROWSER_FETCH_TIMEOUT),
            "--quiet-meta",
            url,
        ],
        capture_output=True,
        text=True,
        check=True,
    )
    return 200, url, "text/html", p.stdout


def fetch(url: str) -> tuple[int, str, str, str]:
    req = Request(url, headers={"User-Agent": UA})
    try:
        with urlopen(req, timeout=30) as resp:
            status = int(resp.status)
            final_url = str(resp.geturl())
            content_type = str(resp.headers.get("content-type", ""))
            body_bytes = resp.read(MAX_READ)
            body = body_bytes.decode("utf-8", errors="ignore")
            return status, final_url, content_type, body
    except Exception:
        return fetch_via_browser(url)


def analyze_text(text: str) -> tuple[bool, int, int]:
    blocked = any(p.search(text) for p in BLOCK_PATTERNS)
    year_hits = len(re.findall(r"\b20(2[6-9]|3[0-2])\b", text))
    event_hits = len(
        re.findall(
            r"\b(event|conference|summit|symposium|expo|industry day|registration|agenda)\b",
            text,
            flags=re.I,
        )
    )
    return blocked, year_hits, event_hits


def run() -> None:
    registry = json.loads(REGISTRY_PATH.read_text(encoding="utf-8"))
    feeds = registry.get("feeds", [])
    now = datetime.now(timezone.utc).isoformat()

    results: list[CrawlResult] = []

    for feed in feeds:
        if not feed.get("crawlEnabled", True):
            results.append(
                CrawlResult(
                    id=feed.get("id", "unknown"),
                    name=feed.get("name", "unknown"),
                    category=feed.get("category", "unknown"),
                    url=feed.get("url", ""),
                    crawlEnabled=False,
                    status=None,
                    finalUrl=None,
                    contentType=None,
                    blocked=False,
                    yearHits=0,
                    eventKeywordHits=0,
                    error=None,
                    fetchedAt=now,
                )
            )
            continue

        url = str(feed.get("url", "")).strip()
        if not url:
            results.append(
                CrawlResult(
                    id=feed.get("id", "unknown"),
                    name=feed.get("name", "unknown"),
                    category=feed.get("category", "unknown"),
                    url=url,
                    crawlEnabled=True,
                    status=None,
                    finalUrl=None,
                    contentType=None,
                    blocked=False,
                    yearHits=0,
                    eventKeywordHits=0,
                    error="missing URL",
                    fetchedAt=now,
                )
            )
            continue

        try:
            status, final_url, ctype, text = fetch(url)
            blocked, year_hits, event_hits = analyze_text(text)

            if blocked and FAST_BROWSER_FETCH.exists():
                try:
                    b_status, b_final, b_ctype, b_text = fetch_via_browser(url)
                    b_blocked, b_year_hits, b_event_hits = analyze_text(b_text)
                    if not b_blocked:
                        status, final_url, ctype, text = b_status, b_final, b_ctype, b_text
                        blocked, year_hits, event_hits = b_blocked, b_year_hits, b_event_hits
                except Exception:
                    pass

            results.append(
                CrawlResult(
                    id=feed.get("id", "unknown"),
                    name=feed.get("name", "unknown"),
                    category=feed.get("category", "unknown"),
                    url=url,
                    crawlEnabled=True,
                    status=status,
                    finalUrl=final_url,
                    contentType=ctype,
                    blocked=blocked,
                    yearHits=year_hits,
                    eventKeywordHits=event_hits,
                    error=None,
                    fetchedAt=now,
                )
            )
        except HTTPError as e:
            results.append(
                CrawlResult(
                    id=feed.get("id", "unknown"),
                    name=feed.get("name", "unknown"),
                    category=feed.get("category", "unknown"),
                    url=url,
                    crawlEnabled=True,
                    status=int(getattr(e, "code", 0) or 0),
                    finalUrl=None,
                    contentType=None,
                    blocked=False,
                    yearHits=0,
                    eventKeywordHits=0,
                    error=f"HTTP {e.code}",
                    fetchedAt=now,
                )
            )
        except URLError as e:
            results.append(
                CrawlResult(
                    id=feed.get("id", "unknown"),
                    name=feed.get("name", "unknown"),
                    category=feed.get("category", "unknown"),
                    url=url,
                    crawlEnabled=True,
                    status=None,
                    finalUrl=None,
                    contentType=None,
                    blocked=False,
                    yearHits=0,
                    eventKeywordHits=0,
                    error=f"URL error: {e.reason}",
                    fetchedAt=now,
                )
            )
        except Exception as e:
            results.append(
                CrawlResult(
                    id=feed.get("id", "unknown"),
                    name=feed.get("name", "unknown"),
                    category=feed.get("category", "unknown"),
                    url=url,
                    crawlEnabled=True,
                    status=None,
                    finalUrl=None,
                    contentType=None,
                    blocked=False,
                    yearHits=0,
                    eventKeywordHits=0,
                    error=str(e),
                    fetchedAt=now,
                )
            )

    ok = [r for r in results if (r.status or 0) >= 200 and (r.status or 0) < 400 and not r.blocked and not r.error]
    blocked = [r for r in results if r.blocked]
    failed = [r for r in results if r.error or (r.status is not None and r.status >= 400)]

    payload = {
        "generatedAt": now,
        "summary": {
            "total": len(results),
            "ok": len(ok),
            "blocked": len(blocked),
            "failed": len(failed),
        },
        "results": [asdict(r) for r in results],
    }
    OUT_JSON.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")

    lines = [
        "# Radar Feed Crawl Report (Latest)",
        "",
        f"Generated: {now}",
        "",
        f"- Total: {len(results)}",
        f"- OK: {len(ok)}",
        f"- Blocked: {len(blocked)}",
        f"- Failed: {len(failed)}",
        "",
        "| Feed | Category | Status | Blocked | Year hits | Event hits | URL | Notes |",
        "|---|---|---:|:---:|---:|---:|---|---|",
    ]

    for r in results:
        status = "" if r.status is None else str(r.status)
        blocked_mark = "yes" if r.blocked else "no"
        notes = r.error or ""
        lines.append(
            f"| {r.name} | {r.category} | {status} | {blocked_mark} | {r.yearHits} | {r.eventKeywordHits} | {r.url} | {notes} |"
        )

    OUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(json.dumps(payload["summary"], indent=2))


if __name__ == "__main__":
    run()
