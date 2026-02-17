#!/usr/bin/env python3
import json
import re
import html
from dataclasses import dataclass
from datetime import date, datetime
from pathlib import Path
from typing import Optional
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

ROOT = Path('/home/anboas/clawd')
SITE_ROOT = ROOT / 'adamboas-site'
EVENTS_TS = SITE_ROOT / 'src/data/radar/events.ts'
LOCATIONS_JSON = ROOT / 'external/government-guide/conference-tracker/locations.json'
OUT_JSON = SITE_ROOT / 'src/data/radar/events-candidates-priority-sources-2026-02-13.json'
OUT_MD = SITE_ROOT / 'src/data/radar/events-candidates-priority-sources-2026-02-13.md'

HEADERS = {'User-Agent': 'Mozilla/5.0 (compatible; RadarSourceImport/1.0)'}

MONTHS = {
    'january': 1, 'jan': 1,
    'february': 2, 'feb': 2,
    'march': 3, 'mar': 3,
    'april': 4, 'apr': 4,
    'may': 5,
    'june': 6, 'jun': 6,
    'july': 7, 'jul': 7,
    'august': 8, 'aug': 8,
    'september': 9, 'sep': 9, 'sept': 9,
    'october': 10, 'oct': 10,
    'november': 11, 'nov': 11,
    'december': 12, 'dec': 12,
}


@dataclass
class RawEvent:
    source: str
    source_url: str
    title: str
    event_url: str
    date_text: str
    location_text: str
    branch: str
    type_hint: str
    notes: str = ''


def nrm(s: str) -> str:
    return re.sub(r'[^a-z0-9]+', ' ', (s or '').lower()).strip()


def slugify(s: str) -> str:
    return re.sub(r'(^-|-$)', '', re.sub(r'[^a-z0-9]+', '-', (s or '').lower()))[:70]


def parse_mmddyyyy_range(text: str):
    m = re.search(r'(\d{1,2})/(\d{1,2})/(20\d{2})\s*-\s*(\d{1,2})/(\d{1,2})/(20\d{2})', text)
    if not m:
        return None, None
    m1, d1, y1, m2, d2, y2 = map(int, m.groups())
    return f'{y1:04d}-{m1:02d}-{d1:02d}', f'{y2:04d}-{m2:02d}-{d2:02d}'


def parse_month_day_year(text: str):
    m = re.search(r'([A-Za-z]+)\s+(\d{1,2}),\s*(20\d{2})', text)
    if not m:
        return None
    mon, day, year = m.group(1).lower(), int(m.group(2)), int(m.group(3))
    mm = MONTHS.get(mon)
    if not mm:
        return None
    return f'{year:04d}-{mm:02d}-{day:02d}'


def parse_to_range(text: str):
    # e.g. February 23 to 25, 2026
    m = re.search(r'([A-Za-z]+)\s+(\d{1,2})\s+to\s+(\d{1,2}),\s*(20\d{2})', text)
    if m:
        mon = MONTHS.get(m.group(1).lower())
        if mon:
            d1, d2, y = int(m.group(2)), int(m.group(3)), int(m.group(4))
            return f'{y:04d}-{mon:02d}-{d1:02d}', f'{y:04d}-{mon:02d}-{d2:02d}'

    # e.g. March 24, 2026 to March 26, 2026
    m2 = re.search(r'([A-Za-z]+\s+\d{1,2},\s*20\d{2})\s+to\s+([A-Za-z]+\s+\d{1,2},\s*20\d{2})', text)
    if m2:
        s = parse_month_day_year(m2.group(1))
        e = parse_month_day_year(m2.group(2))
        return s, e

    return None, None


def parse_dates(text: str):
    t = ' '.join((text or '').split())
    if re.search(r'every\s+week|every\s+\d+\s+weeks', t, re.I):
        return None, None

    # ISO date or range
    iso = re.search(r'(20\d{2}-\d{2}-\d{2})(?:\s+to\s+(20\d{2}-\d{2}-\d{2}))?', t)
    if iso:
        return iso.group(1), iso.group(2)

    # Month day-day, year (e.g., February 18-19, 2026)
    md = re.search(r'([A-Za-z]+)\s+(\d{1,2})-(\d{1,2}),\s*(20\d{2})', t)
    if md:
        mm = MONTHS.get(md.group(1).lower())
        if mm:
            d1, d2, y = int(md.group(2)), int(md.group(3)), int(md.group(4))
            return f'{y:04d}-{mm:02d}-{d1:02d}', f'{y:04d}-{mm:02d}-{d2:02d}'

    s, e = parse_mmddyyyy_range(t)
    if s:
        return s, e

    s, e = parse_to_range(t)
    if s:
        return s, e

    one = parse_month_day_year(t)
    if one:
        return one, None

    return None, None


def city_state_from_text(text: str) -> str:
    t = ' '.join((text or '').split())
    m = re.search(r'([A-Za-z][A-Za-z .\'-]+,\s*[A-Z]{2})', t)
    if m:
        return m.group(1).strip()

    # full-state fallback (e.g., "Arlington, Virginia")
    state_map = {
        'alabama': 'AL', 'alaska': 'AK', 'arizona': 'AZ', 'arkansas': 'AR', 'california': 'CA',
        'colorado': 'CO', 'connecticut': 'CT', 'delaware': 'DE', 'florida': 'FL', 'georgia': 'GA',
        'hawaii': 'HI', 'idaho': 'ID', 'illinois': 'IL', 'indiana': 'IN', 'iowa': 'IA', 'kansas': 'KS',
        'kentucky': 'KY', 'louisiana': 'LA', 'maine': 'ME', 'maryland': 'MD', 'massachusetts': 'MA',
        'michigan': 'MI', 'minnesota': 'MN', 'mississippi': 'MS', 'missouri': 'MO', 'montana': 'MT',
        'nebraska': 'NE', 'nevada': 'NV', 'new hampshire': 'NH', 'new jersey': 'NJ', 'new mexico': 'NM',
        'new york': 'NY', 'north carolina': 'NC', 'north dakota': 'ND', 'ohio': 'OH', 'oklahoma': 'OK',
        'oregon': 'OR', 'pennsylvania': 'PA', 'rhode island': 'RI', 'south carolina': 'SC', 'south dakota': 'SD',
        'tennessee': 'TN', 'texas': 'TX', 'utah': 'UT', 'vermont': 'VT', 'virginia': 'VA', 'washington': 'WA',
        'west virginia': 'WV', 'wisconsin': 'WI', 'wyoming': 'WY',
    }
    m2 = re.search(r'([A-Za-z][A-Za-z .\'-]+),\s*([A-Za-z ]+)', t)
    if m2:
        city = m2.group(1).strip()
        st_name = m2.group(2).strip().lower()
        if st_name in state_map:
            return f"{city}, {state_map[st_name]}"

    if 'washington dc' in t.lower() or 'washington, dc' in t.lower():
        return 'Washington, DC'
    if 'national harbor' in t.lower():
        return 'National Harbor, MD'
    if 'paris' in t.lower() and 'france' in t.lower():
        return 'Paris, France'
    if 'virtual' in t.lower() or 'web' in t.lower():
        return 'Virtual'
    return ''


def canonical_title_key(title: str) -> str:
    s = nrm(title)
    s = re.sub(r'\b20\d{2}\b', ' ', s)
    return re.sub(r'\s+', ' ', s).strip()


def year_from_text(*parts: Optional[str]) -> Optional[str]:
    blob = ' '.join(p for p in parts if p)
    m = re.search(r'\b(20\d{2})\b', blob)
    return m.group(1) if m else None


def dedupe_key(title: str, start_date: Optional[str], date_text: str = '') -> tuple[str, str]:
    year = start_date[:4] if start_date else year_from_text(date_text, title) or 'undated'
    return canonical_title_key(title), year


def extract_top_level_event_blocks(events_text: str) -> list[str]:
    start = events_text.find('[')
    end = events_text.rfind('];')
    if start == -1 or end == -1 or end <= start:
        return []

    body = events_text[start + 1:end]
    blocks = []
    depth = 0
    begin = None
    for i, ch in enumerate(body):
        if ch == '{':
            if depth == 0:
                begin = i
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0 and begin is not None:
                blocks.append(body[begin:i + 1])
                begin = None
    return blocks


def load_existing():
    text = EVENTS_TS.read_text(encoding='utf-8')
    titles = {nrm(m.group(1).replace("\\'", "'")) for m in re.finditer(r"title:\s*'((?:\\'|[^'])*)'", text)}
    ids = {m.group(1) for m in re.finditer(r"id:\s*'([^']+)'", text)}

    keys = set()
    for block in extract_top_level_event_blocks(text):
        tm = re.search(r"title:\s*'((?:\\'|[^'])*)'", block)
        if not tm:
            continue
        title = tm.group(1).replace("\\'", "'")
        sm = re.search(r"startDate:\s*'([^']+)'", block)
        start = sm.group(1) if sm else None
        keys.add(dedupe_key(title, start, title))

    return text, titles, ids, keys


def load_locations():
    return json.loads(LOCATIONS_JSON.read_text(encoding='utf-8')).get('locations', {})


def resolve_location(loc_text: str, locations: dict):
    key = (loc_text or '').strip()
    if key in locations:
        entry = locations[key]
        return {
            'city': key.split(',')[0].strip(),
            'state': entry.get('state') or (key.split(',')[-1].strip() if ',' in key and len(key.split(',')[-1].strip()) == 2 else None),
            'country': 'France' if 'france' in (entry.get('label', '') or '').lower() else 'USA',
            'lat': float(entry.get('lat', 39.5)),
            'lng': float(entry.get('lng', -98.35)),
        }

    if key == 'Virtual' or not key:
        return {'city': 'Virtual', 'state': None, 'country': 'USA', 'lat': 39.5, 'lng': -98.35}

    if key == 'Washington, DC':
        return {'city': 'Washington', 'state': 'DC', 'country': 'USA', 'lat': 38.9072, 'lng': -77.0369}

    if key == 'National Harbor, MD':
        return {'city': 'National Harbor', 'state': 'MD', 'country': 'USA', 'lat': 38.7854, 'lng': -77.0153}

    if key == 'Paris, France':
        return {'city': 'Paris', 'state': None, 'country': 'France', 'lat': 48.8566, 'lng': 2.3522}

    m = re.match(r'([A-Za-z .\'-]+),\s*([A-Z]{2})$', key)
    if m:
        city, st = m.group(1).strip(), m.group(2).strip()
        for k, v in locations.items():
            if k.startswith(f'{city}, {st}'):
                return {'city': city, 'state': st, 'country': 'USA', 'lat': float(v.get('lat', 39.5)), 'lng': float(v.get('lng', -98.35))}
        return {'city': city, 'state': st, 'country': 'USA', 'lat': 39.5, 'lng': -98.35}

    # non-US city/country fallback
    m3 = re.match(r'([A-Za-z .\'-]+),\s*([A-Za-z .\'-]+)$', key)
    if m3:
        city, country = m3.group(1).strip(), m3.group(2).strip()
        if country.lower() not in {'usa', 'united states', 'us'}:
            return {'city': city, 'state': None, 'country': country, 'lat': 39.5, 'lng': -98.35}

    return {'city': key, 'state': None, 'country': 'USA', 'lat': 39.5, 'lng': -98.35}


def travel_burden(location):
    if location['country'] != 'USA':
        return 'High'
    near = {'DC', 'MD', 'VA', 'DE', 'PA', 'NJ'}
    far = {'CA', 'WA', 'OR', 'NV', 'AZ', 'NM', 'HI', 'AK'}
    st = location.get('state')
    if st in near:
        return 'Low'
    if st in far:
        return 'High'
    return 'Medium'


def default_cost(travel):
    if travel == 'Low':
        return {'min': 100, 'max': 900}
    if travel == 'High':
        return {'min': 1200, 'max': 4500}
    return {'min': 500, 'max': 2200}


def infer_type(title: str, hint: str):
    s = f'{title} {hint}'.lower()
    if 'webinar' in s or 'series' in s or 'industry day' in s or 'meeting' in s:
        return 'Workshop'
    if 'summit' in s or 'symposium' in s:
        return 'Summit'
    return 'Conference'


def infer_signal(title: str):
    t = title.lower()
    if any(k in t for k in ['annual meeting', 'air, space & cyber', 'sea-air-space', 'warfare symposium', 'global force', 'lanpac', 'technet']):
        return 'High'
    return 'Medium'


def infer_status(start_date: Optional[str]):
    if not start_date:
        return 'Needs Date'
    try:
        d = date.fromisoformat(start_date)
        return 'Past' if d < date.today() else 'Upcoming'
    except Exception:
        return 'Needs Date'


SOURCE_PRIORITY = {
    'AUSA': 100,
    'AFCEA': 100,
    'AFA': 100,
    'Navy League': 100,
    'CTO Innovation': 95,
    'SAME': 95,
    'Potomac Officers Club': 70,
    'ASD Events': 60,
    'Military Expos': 55,
}


def source_priority(source: str) -> int:
    return SOURCE_PRIORITY.get(source, 50)


def source_url_for_event(base: str, href: str):
    if not href:
        return base
    return urljoin(base, href)


def get(url: str) -> BeautifulSoup:
    r = requests.get(url, timeout=30, headers=HEADERS)
    r.raise_for_status()
    return BeautifulSoup(r.text, 'html.parser')


def scrape_ausa() -> list[RawEvent]:
    url = 'https://www.ausa.org/meet'
    soup = get(url)
    out = []
    for art in soup.select('article.node--type-event'):
        title_el = art.select_one('.event-page-title')
        if not title_el:
            continue
        title = ' '.join(title_el.get_text(' ', strip=True).split())
        text = ' '.join(art.get_text(' ', strip=True).split())
        href = art.select_one('a[href]')
        event_url = source_url_for_event(url, href['href']) if href else url
        date_text_match = re.search(r'([A-Za-z]+\s+\d{1,2},\s*20\d{2}(?:\s+to\s+[A-Za-z]+\s+\d{1,2},\s*20\d{2})?)', text)
        date_text = date_text_match.group(1) if date_text_match else ''
        loc = city_state_from_text(text)
        if 'United States' in text and not loc:
            loc = 'Virtual'
        out.append(RawEvent('AUSA', url, title, event_url, date_text, loc, 'Army', 'Conference'))
    return out


def scrape_afcea() -> list[RawEvent]:
    url = 'https://www.afcea.org/events'
    soup = get(url)
    out = []
    for row in soup.select('div.views-row article'):
        h3 = row.find('h3')
        if not h3:
            continue
        a = h3.find('a', href=True)
        if not a:
            continue
        title = ' '.join(a.get_text(' ', strip=True).split())
        if not title or title.lower().startswith('filter events'):
            continue
        text = ' '.join(row.get_text(' ', strip=True).split())
        date_text = ''
        m = re.search(r'([A-Za-z]+,\s+[A-Za-z]+\s+\d{1,2},\s*20\d{2}(?:\s+to\s+[A-Za-z]+,\s+[A-Za-z]+\s+\d{1,2},\s*20\d{2})?)', text)
        if m:
            date_text = m.group(1)
        else:
            m2 = re.search(r'([A-Za-z]+\s+\d{1,2},\s*20\d{2}(?:\s+to\s+[A-Za-z]+\s+\d{1,2},\s*20\d{2})?)', text)
            if m2:
                date_text = m2.group(1)
        loc = city_state_from_text(text)
        out.append(RawEvent('AFCEA', url, title, source_url_for_event(url, a['href']), date_text, loc, 'Joint', 'Conference'))
    return out


def scrape_afa() -> list[RawEvent]:
    url = 'https://www.afa.org/events/'
    soup = get(url)
    out = []
    for art in soup.select('article'):
        h3 = art.find('h3')
        if not h3:
            continue
        a = h3.find('a', href=True)
        if not a:
            continue
        title = ' '.join(a.get_text(' ', strip=True).split())
        text = ' '.join(art.get_text(' ', strip=True).split())
        m = re.search(r'([A-Za-z]+\s+\d{1,2}\s+to\s+\d{1,2},\s*20\d{2})', text)
        date_text = m.group(1) if m else ''
        loc = 'Virtual'
        if 'air, space & cyber' in title.lower():
            loc = 'National Harbor, MD'
        elif 'warfare symposium' in title.lower():
            loc = 'Aurora, CO'
        elif 'national convention' in title.lower():
            loc = 'Washington, DC'
        out.append(RawEvent('AFA', url, title, source_url_for_event(url, a['href']), date_text, loc, 'Air Force / Space Force', 'Conference'))
    return out


def scrape_navy_league() -> list[RawEvent]:
    url = 'https://www.navyleague.org/meetings-and-events/'
    soup = get(url)
    out = []
    for a in soup.find_all('a', href=True):
        title = ' '.join(a.get_text(' ', strip=True).split())
        if title not in {'Special Topic Breakfasts', 'Sea-Air-Space', 'Navy Birthday Ball'}:
            continue
        parent = a
        for _ in range(4):
            if parent.parent:
                parent = parent.parent
        text = ' '.join(parent.get_text(' ', strip=True).split())
        dm = re.search(r'([A-Za-z]+\s+\d{1,2}(?:-\d{1,2})?,\s*20\d{2})', text)
        date_text = dm.group(1) if dm else ''
        loc = 'Virtual'
        if title == 'Sea-Air-Space':
            loc = 'National Harbor, MD'
        elif title == 'Navy Birthday Ball':
            loc = 'Washington, DC'
        out.append(RawEvent('Navy League', url, title, source_url_for_event(url, a['href']), date_text, loc, 'Navy', 'Conference'))
    return out


def scrape_cto() -> list[RawEvent]:
    url = 'https://www.ctoinnovation.mil/events/'
    soup = get(url)
    out = []
    for a in soup.find_all('a', href=True):
        title = ' '.join(a.get_text(' ', strip=True).split())
        if len(title) < 6:
            continue
        if title in {'Business & Industry', 'CRITICAL TECH AREAS'}:
            continue
        if not any(k in title.lower() for k in ['conference', 'summit', 'itsec', 'tech', 'day', 'expo', 'industry', 'cyber', 'air, space']):
            continue
        parent = a
        for _ in range(5):
            if parent.parent:
                parent = parent.parent
        text = ' '.join(parent.get_text(' ', strip=True).split())
        if not re.search(r'20\d{2}|every\s+week|every\s+\d+\s+weeks', text, re.I):
            continue
        # only keep if event card-like has DoD attending/sponsored context
        if 'dod attending' not in text.lower() and 'dod sponsored event' not in text.lower():
            continue

        # specific dated event first
        m = re.search(r'(\d{1,2}/\d{1,2}/20\d{2}\s*-\s*\d{1,2}/\d{1,2}/20\d{2})', text)
        date_text = m.group(1) if m else ''
        loc = city_state_from_text(text)
        if not loc:
            loc = 'Virtual'
        out.append(RawEvent('CTO Innovation', url, title, source_url_for_event(url, a['href']), date_text, loc, 'Joint', 'Conference'))
    return out


def scrape_same() -> list[RawEvent]:
    url = 'https://www.same.org/events/'
    soup = get(url)
    out = []
    for h in soup.find_all(['h2', 'h3', 'h4']):
        title = ' '.join(h.get_text(' ', strip=True).split())
        if not title or 'san antonio post events' in title.lower():
            continue
        if not any(k in title.lower() for k in ['small business', 'industry', 'meeting']):
            continue
        text = ' '.join(h.parent.get_text(' ', strip=True).split())
        m = re.search(r'([A-Za-z]+\s+\d{1,2},\s*20\d{2})', text)
        if not m:
            continue
        date_text = m.group(1)
        loc = city_state_from_text(text)
        a = h.find_parent().find('a', href=True)
        href = a['href'] if a else url
        out.append(RawEvent('SAME', url, title, source_url_for_event(url, href), date_text, loc or 'Virtual', 'USACE', 'Workshop'))
    return out


def scrape_asd_events() -> list[RawEvent]:
    url = 'https://www.asdevents.com/defense-security'
    soup = get(url)
    out = []
    for block in soup.select('div.overview-event'):
        a = block.select_one('a[href*="event.asp?id="]')
        if not a:
            continue
        title_el = block.select_one('span.item-title')
        title = ' '.join((title_el.get_text(' ', strip=True).split())) if title_el else ' '.join(a.get_text(' ', strip=True).split())
        if not title:
            continue
        t_low = title.lower()
        if any(k in t_low for k in ['boot camp', 'seminar', 'export compliance']):
            continue
        if not any(k in t_low for k in ['conference', 'summit', 'symposium', 'expo', 'forum', 'industry', 'technology', 'fires']):
            continue

        other_el = block.select_one('span.item-other')
        other = ' '.join(other_el.get_text(' ', strip=True).split()) if other_el else ''
        # e.g., February 18-19, 2026 - Huntsville, AL, United States
        date_text = ''
        m = re.search(r'([A-Za-z]+\s+\d{1,2}(?:-\d{1,2})?,\s*20\d{2})', other)
        if m:
            date_text = m.group(1)
        loc = ''
        lm = re.search(r'-\s*([^\-]+)$', other)
        if lm:
            loc = lm.group(1).replace('United States', '').strip().strip(',')
        loc = city_state_from_text(loc or other) or loc or 'Virtual'

        out.append(RawEvent('ASD Events', url, title, source_url_for_event(url, a.get('href', '')), date_text, loc, 'Joint', 'Conference'))
    return out


def scrape_military_expos() -> list[RawEvent]:
    url = 'https://www.militaryexpos.com/'
    r = requests.get(url, timeout=30, headers=HEADERS)
    r.raise_for_status()
    text = r.text

    m = re.search(r"data-events='(\[.*?\])'\s+data-events-image", text, re.S)
    if not m:
        return []

    payload = json.loads(html.unescape(m.group(1)))
    out = []
    for ev in payload:
        title = ' '.join(str(ev.get('title', '')).split())
        if not title:
            continue
        start = str(ev.get('date_start') or '')
        if not start.startswith('2026') and not start.startswith('2027'):
            continue

        t_low = title.lower()
        if not any(k in t_low for k in ['expo', 'conference', 'summit', 'symposium', 'forum', 'industry day', 'tech']):
            continue

        loc = ' '.join(str(ev.get('location') or '').split())
        if not loc:
            st = ''
            countries = (ev.get('locations') or {}).get('countries') or {}
            states = (ev.get('locations') or {}).get('states') or {}
            if states:
                st = list(states.values())[0]
            country = list(countries.values())[0] if countries else ''
            loc = ', '.join([x for x in [st, country] if x]) or 'Virtual'

        categories = ev.get('categories') or {}
        cat_text = ' '.join(str(v) for v in categories.values())
        branch = 'Joint'
        if 'air force' in t_low:
            branch = 'Air Force / Space Force'
        elif 'army' in t_low:
            branch = 'Army'
        elif 'navy' in t_low:
            branch = 'Navy'

        end = str(ev.get('date_end') or '')
        date_text = start if not end or end == start else f'{start} to {end}'
        event_url = str(ev.get('registration_url') or url)
        out.append(RawEvent('Military Expos', url, title, event_url, date_text, loc, branch, 'Conference', notes=cat_text[:240]))
    return out


def scrape_potomac_events() -> list[RawEvent]:
    url = 'https://www.potomacofficersclub.com/govcon-events/'
    soup = get(url)
    out = []
    for card in soup.select('div[data-start]'):
        h2 = card.find('h2')
        if not h2:
            continue
        title = ' '.join(h2.get_text(' ', strip=True).split())
        if not title:
            continue

        t_low = title.lower()
        if not any(k in t_low for k in ['defense', 'army', 'navy', 'air', 'space', 'cyber', 'intel', 'govcon', 'homeland']):
            continue

        start = (card.get('data-start') or '').strip()
        if start and start != 'TBD' and not (start.startswith('2026') or start.startswith('2027')):
            continue

        date_text = start if start and start != 'TBD' else ''
        text = ' '.join(card.get_text(' ', strip=True).split())
        lm = re.search(r'Location:\s*([^W]+?)\s+When:', text)
        loc_raw = lm.group(1).strip() if lm else ''
        if not loc_raw:
            if 'reston' in text.lower():
                loc_raw = 'Reston, VA'
            elif 'mclean' in text.lower():
                loc_raw = 'McLean, VA'
            else:
                loc_raw = 'Virtual'
        loc = city_state_from_text(loc_raw) or loc_raw

        a = card.find('a', href=True)
        event_url = source_url_for_event(url, a['href']) if a else url
        branch = 'Joint'
        if 'army' in t_low:
            branch = 'Army'
        elif 'navy' in t_low:
            branch = 'Navy'
        elif 'air and space' in t_low or 'space' in t_low:
            branch = 'Air Force / Space Force'

        out.append(RawEvent('Potomac Officers Club', url, title, event_url, date_text, loc, branch, 'Summit'))
    return out


def to_ts(obj, depth=0):
    pad = '\t' * depth
    if obj is None:
        return 'null'
    if isinstance(obj, str):
        return "'" + obj.replace('\\', '\\\\').replace("'", "\\'") + "'"
    if isinstance(obj, bool):
        return 'true' if obj else 'false'
    if isinstance(obj, (int, float)):
        return str(obj)
    if isinstance(obj, list):
        if not obj:
            return '[]'
        return '[' + ', '.join(to_ts(x, depth) for x in obj) + ']'
    if isinstance(obj, dict):
        items = [(k, v) for k, v in obj.items() if v is not None]
        if not items:
            return '{}'
        inner = ',\n'.join(f"{pad}\t{k}: {to_ts(v, depth + 1)}" for k, v in items)
        return f"\n{pad}{{\n{inner}\n{pad}}}"
    raise TypeError(type(obj))


def build_event(raw: RawEvent, locations: dict):
    start, end = parse_dates(raw.date_text)

    # allow 2026+ or undated recurring source cards
    if start:
        y = int(start[:4])
        if y < 2026:
            return None
    else:
        if 'every week' not in raw.date_text.lower() and 'every' not in raw.date_text.lower():
            return None

    location = resolve_location(raw.location_text, locations)
    travel = travel_burden(location)
    event_type = infer_type(raw.title, raw.type_hint)
    signal = infer_signal(raw.title)
    status = infer_status(start)
    if status == 'Past':
        return None

    effort = 'Low' if travel == 'Low' else ('High' if travel == 'High' else 'Medium')

    return {
        'id': '',
        'title': raw.title,
        'description': f"{raw.source} sourced event for defense ecosystem tracking and engagement planning.",
        'startDate': start,
        'endDate': end,
        'branch': raw.branch,
        'type': event_type,
        'status': status,
        'signal': signal,
        'effort': effort,
        'location': {
            'city': location['city'],
            'state': location.get('state'),
            'country': location['country'],
            'lat': location['lat'],
            'lng': location['lng'],
        },
        'ontology': {
            'themes': ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
            'capabilityAreas': ['Acquisition', 'Mission systems', 'Digital modernization'],
            'missionThreads': ['Partnership development', 'Program sensing'],
            'stakeholders': [f"{raw.branch} stakeholders", 'Program offices', 'Industry partners'],
            'keywords': [w for w in re.findall(r'[A-Za-z0-9]+', raw.title.lower()) if len(w) > 3][:5],
            'relatedPrograms': ['Radar expansion'],
            'decisionWindows': {
                'discovery': 'Now to T-90 days' if start else 'Continuous monitoring',
                'prep': 'T-60 to T-14 days' if start else 'After date confirmation',
                'execution': 'Event window + 14-day follow-up' if start else 'TBD',
            },
            'provenance': [
                {
                    'name': raw.source,
                    'url': raw.source_url,
                    'type': 'official' if any(k in raw.source for k in ['AUSA', 'AFCEA', 'AFA', 'Navy', 'CTO', 'SAME']) else 'aggregator',
                    'lastVerified': '2026-02-13',
                    'confidence': 'High' if start else 'Medium',
                }
            ],
            'links': {'official': raw.event_url},
            'logistics': {
                'format': 'Virtual' if location['city'] == 'Virtual' else 'In-person',
                'estimatedCostUsd': default_cost(travel),
                'travelBurdenFromDc': travel,
            },
            'notes': raw.notes or None,
        },
    }


def main():
    existing_text, existing_titles, existing_ids, existing_keys = load_existing()
    locations = load_locations()

    scrapers = [
        ('AUSA', scrape_ausa),
        ('AFCEA', scrape_afcea),
        ('AFA', scrape_afa),
        ('Navy League', scrape_navy_league),
        ('CTO Innovation', scrape_cto),
        ('SAME', scrape_same),
        ('ASD Events', scrape_asd_events),
        ('Military Expos', scrape_military_expos),
        ('Potomac Officers Club', scrape_potomac_events),
    ]

    raw: list[RawEvent] = []
    scrape_errors = []
    for source_name, fn in scrapers:
        try:
            raw.extend(fn())
        except Exception as e:
            scrape_errors.append({'source': source_name, 'error': str(e)})

    # remove exact source/title/date duplicates first
    seen_source_title = set()
    raw_unique = []
    for r in raw:
        key = (r.source, nrm(r.title), nrm(r.date_text))
        if key in seen_source_title:
            continue
        seen_source_title.add(key)
        raw_unique.append(r)

    # canonical same-title-year dedupe with source precedence
    selected_by_key = {}
    skipped_existing = 0
    for r in raw_unique:
        ev = build_event(r, locations)
        if not ev:
            continue

        key = dedupe_key(ev['title'], ev.get('startDate'), r.date_text)
        if nrm(ev['title']) in existing_titles or key in existing_keys:
            skipped_existing += 1
            continue

        rank = (
            source_priority(r.source),
            1 if ev.get('ontology', {}).get('provenance', [{}])[0].get('type') == 'official' else 0,
            1 if ev.get('startDate') else 0,
        )

        prev = selected_by_key.get(key)
        if prev and rank <= prev['rank']:
            continue
        selected_by_key[key] = {'event': ev, 'rank': rank}

    built = [v['event'] for v in selected_by_key.values()]
    built.sort(key=lambda e: (e['startDate'] is None, e['startDate'] or '9999-12-31', e['title']))

    taken_ids = set(existing_ids)
    for ev in built:
        base = f"radar-{slugify(ev['title'])}"
        cid = base
        i = 2
        while cid in taken_ids:
            cid = f'{base}-{i}'
            i += 1
        ev['id'] = cid
        taken_ids.add(cid)

    tail = '\n];\n'
    if not existing_text.endswith(tail):
        raise RuntimeError('events.ts format unexpected; missing final array close')

    rendered = '\n'.join(f"\t{to_ts(ev, 1).strip()}," for ev in built)
    updated = f"{existing_text[:-len(tail)]}\n{rendered}\n];\n"
    EVENTS_TS.write_text(updated, encoding='utf-8')

    OUT_JSON.write_text(json.dumps(built, indent=2) + '\n', encoding='utf-8')

    lines = [
        '# Radar Candidates from New Priority Lists (2026-02-13)',
        '',
        f'Total imported candidates: {len(built)}',
        f'Skipped existing (same title/year): {skipped_existing}',
        f'Scraper errors tolerated: {len(scrape_errors)}',
        '',
        '## Added events',
        '',
    ]
    for ev in built:
        lines.append(f"- {ev['title']} | {ev['status']} | {ev['startDate'] or 'TBD'}{(' to ' + ev['endDate']) if ev['endDate'] else ''} | {ev['location']['city']}{(', ' + ev['location']['state']) if ev['location'].get('state') else ''}")

    if scrape_errors:
        lines.extend(['', '## Scraper errors', ''])
        for err in scrape_errors:
            lines.append(f"- {err['source']}: {err['error']}")

    lines.append('')
    lines.append('Sources: AUSA, AFCEA, AFA, Navy League, CTO Innovation, SAME, ASD Events, Military Expos, Potomac Officers Club')
    OUT_MD.write_text('\n'.join(lines) + '\n', encoding='utf-8')

    print(json.dumps({
        'raw': len(raw),
        'rawUnique': len(raw_unique),
        'skippedExisting': skipped_existing,
        'imported': len(built),
        'scrapeErrors': scrape_errors,
        'json': str(OUT_JSON),
        'md': str(OUT_MD)
    }, indent=2))


if __name__ == '__main__':
    main()
