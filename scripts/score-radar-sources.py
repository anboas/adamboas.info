#!/usr/bin/env python3
import json
import os
import re
import ssl
import subprocess
from dataclasses import dataclass, asdict
from datetime import datetime, timezone
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlparse
from urllib.request import Request, urlopen

ROOT = Path('/home/anboas/clawd/adamboas-site')
OUT_JSON = ROOT / 'src/data/radar/source-priority-2026-02-13.json'
OUT_MD = ROOT / 'src/data/radar/source-priority-2026-02-13.md'
FAST_BROWSER_FETCH = Path('/home/anboas/clawd/scripts/fast_browser_fetch.sh')
BROWSER_FETCH_TIMEOUT = int(os.environ.get('RADAR_BROWSER_FETCH_TIMEOUT', '20'))

SOURCES = [
    ('CTO Innovation Industry Outreach Calendar', 'https://www.ctoinnovation.mil/events/'),
    ('DoD OSBP Events Calendar', 'https://business.defense.gov/Engage/Events-Calendar/'),
    ('USACE Events for Contractors', 'https://www.usace.army.mil/Business-With-Us/Small-Business/Find-Upcoming-Conferences-Outreach-Events-Training/'),
    ('DoD Event Calendars', 'https://dod.defense.gov/Today-in-DoD/Event-Calendars/'),
    ('DLA Events', 'https://www.dla.mil/Working-With-DLA/Events/'),
    ('GovEvents Calendar', 'https://www.govevents.com/calendar.php?s=1'),
    ('GovEvents DoD Organizer Listings', 'https://web.govevents.com/listings.php?organizer=DEPARTMENT+OF+DEFENSE+(DoD)&upcoming=1&past=1'),
    ('NDIA Events', 'https://www.ndia.org/events'),
    ('AFCEA Events', 'https://www.afcea.org/events'),
    ('AUSA Meetings & Events', 'https://www.ausa.org/meet'),
    ('Navy League Meetings & Events', 'https://www.navyleague.org/meetings-and-events/'),
    ('AFA Events', 'https://www.afa.org/events/'),
    ('SAME Events', 'https://www.same.org/events/'),
    ('JBenton Government Guide Tracker', 'https://jbenton1.github.io/government-guide/conference-tracker/'),
    ('Defense Advancement Events', 'https://www.defenseadvancement.com/events/'),
    ('ASD Events Defense & Security', 'https://www.asdevents.com/defense-security'),
    ('Military Expos', 'https://www.militaryexpos.com/'),
    ('DefGovTech', 'https://defgovtech.com/'),
    ('Potomac Officers Club Defense', 'https://www.potomacofficersclub.com/govcon-event-category/defense/'),
]

MONTHS = ('january','february','march','april','may','june','july','august','september','october','november','december',
          'jan','feb','mar','apr','jun','jul','aug','sep','sept','oct','nov','dec')


@dataclass
class SourceScore:
    name: str
    url: str
    host: str
    status: int | str
    authorityScore: float
    freshnessScore: float
    priorityScore: float
    tier: str
    notes: str


def authority_score(host: str) -> float:
    host = host.lower()
    if host.endswith('.mil') or 'defense.gov' in host or 'army.mil' in host:
        return 5.0
    if any(d in host for d in ('ndia.org', 'afcea.org', 'ausa.org', 'navyleague.org', 'afa.org', 'same.org')):
        return 4.0
    if any(d in host for d in ('govevents.com', 'github.io')):
        return 3.0
    return 2.0


def fetch_via_browser(url: str):
    if not FAST_BROWSER_FETCH.exists():
        raise RuntimeError('fast_browser_fetch_not_found')
    p = subprocess.run(
        [
            str(FAST_BROWSER_FETCH),
            '--engine',
            'auto',
            '--timeout',
            str(BROWSER_FETCH_TIMEOUT),
            '--quiet-meta',
            url,
        ],
        capture_output=True,
        text=True,
        check=True,
    )
    return 200, 'text/html', p.stdout


def fetch(url: str):
    req = Request(
        url,
        headers={
            'User-Agent': 'Mozilla/5.0 (compatible; RadarSourceScorer/1.0; +https://www.adamboas.com)',
            'Accept': 'text/html,application/xhtml+xml',
        },
    )
    ctx = ssl.create_default_context()
    try:
        with urlopen(req, timeout=15, context=ctx) as r:
            content_type = r.headers.get('Content-Type', '')
            data = r.read(220_000)
            return r.status, content_type, data.decode('utf-8', errors='ignore')
    except Exception:
        return fetch_via_browser(url)


def html_to_text(html: str) -> str:
    html = re.sub(r'(?is)<script[^>]*>.*?</script>', ' ', html)
    html = re.sub(r'(?is)<style[^>]*>.*?</style>', ' ', html)
    text = re.sub(r'(?s)<[^>]+>', ' ', html)
    text = re.sub(r'\s+', ' ', text)
    return text.strip().lower()


def freshness_score(text: str, status: int | str, url: str, authority: float) -> tuple[float, str]:
    if isinstance(status, int) and status >= 400:
        return 1.0, 'Blocked/non-200 response; freshness unknown.'

    if not text:
        return 1.0, 'No extractable content.'

    score = 1.0
    notes = []

    y2026 = len(re.findall(r'\b2026\b', text))
    y2027 = len(re.findall(r'\b2027\b', text))
    y2025 = len(re.findall(r'\b2025\b', text))

    event_terms = sum(len(re.findall(rf'\b{kw}\b', text)) for kw in ('events', 'calendar', 'conference', 'summit', 'industry day', 'upcoming'))
    month_hits = sum(len(re.findall(rf'\b{m}\b', text)) for m in MONTHS)

    if y2026 + y2027 > 0:
        score += 2.0
        notes.append(f'Mentions 2026/2027 ({y2026 + y2027} hits).')
    elif y2025 > 0:
        score += 1.0
        notes.append('Mentions 2025 only.')

    if event_terms >= 8:
        score += 1.2
        notes.append('Strong event/calendar language.')
    elif event_terms >= 3:
        score += 0.7
        notes.append('Some event/calendar language.')

    if month_hits >= 4:
        score += 0.8
        notes.append('Contains multiple dated references.')
    elif month_hits >= 1:
        score += 0.3

    # Fallback: known association event hubs are often JS-heavy and may under-extract.
    if authority >= 4.0 and isinstance(status, int) and status == 200 and '/events' in url.lower() and score < 3.0:
        score = 3.0
        notes.append('Applied association-events baseline freshness (content under-extracted).')

    score = min(5.0, round(score, 2))
    if not notes:
        notes.append('Limited date/event signals found.')
    return score, ' '.join(notes)


def tier(score: float) -> str:
    if score >= 4.2:
        return 'P1-Primary'
    if score >= 3.4:
        return 'P2-Secondary'
    return 'P3-Tertiary'


def main():
    rows: list[SourceScore] = []
    for name, url in SOURCES:
        host = urlparse(url).netloc.lower()
        auth = authority_score(host)
        status: int | str = 'error'
        text = ''
        note_prefix = ''
        try:
            status, ctype, html = fetch(url)
            text = html_to_text(html)
            if 'cloudflare' in text or 'just a moment' in text:
                note_prefix = 'Protected by anti-bot challenge. '
        except HTTPError as e:
            status = e.code
            try:
                text = e.read(40_000).decode('utf-8', errors='ignore').lower()
            except Exception:
                text = ''
            if 'access denied' in text or 'forbidden' in text:
                note_prefix = 'Access denied from automation. '
        except URLError:
            status = 'network_error'
            note_prefix = 'Network fetch failed. '
        except Exception:
            status = 'error'
            note_prefix = 'Unexpected fetch error. '

        fresh, notes = freshness_score(text, status, url, auth)
        priority = round(auth * 0.65 + fresh * 0.35, 2)
        rows.append(SourceScore(
            name=name,
            url=url,
            host=host,
            status=status,
            authorityScore=auth,
            freshnessScore=fresh,
            priorityScore=priority,
            tier=tier(priority),
            notes=(note_prefix + notes).strip(),
        ))

    rows.sort(key=lambda r: r.priorityScore, reverse=True)

    payload = {
        'generatedAt': datetime.now(timezone.utc).isoformat(),
        'scoring': {
            'authorityWeight': 0.65,
            'freshnessWeight': 0.35,
            'authorityScale': '1-5',
            'freshnessScale': '1-5',
        },
        'sources': [asdict(r) for r in rows],
    }
    OUT_JSON.write_text(json.dumps(payload, indent=2) + '\n', encoding='utf-8')

    lines = [
        '# Radar Source Priority List (Authority + Freshness)',
        '',
        f"Generated: {payload['generatedAt']}",
        '',
        'Scoring: `priority = 0.65*authority + 0.35*freshness`',
        '',
        '| Tier | Priority | Authority | Freshness | Source | URL | Status |',
        '|---|---:|---:|---:|---|---|---:|',
    ]
    for r in rows:
        lines.append(
            f"| {r.tier} | {r.priorityScore:.2f} | {r.authorityScore:.1f} | {r.freshnessScore:.1f} | {r.name} | {r.url} | {r.status} |"
        )

    lines.append('')
    lines.append('## Notes')
    lines.append('')
    for r in rows:
        lines.append(f"- **{r.name}**: {r.notes}")

    OUT_MD.write_text('\n'.join(lines) + '\n', encoding='utf-8')
    print(json.dumps({'json': str(OUT_JSON), 'md': str(OUT_MD), 'count': len(rows)}, indent=2))


if __name__ == '__main__':
    main()
