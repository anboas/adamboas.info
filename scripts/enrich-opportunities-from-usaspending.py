#!/usr/bin/env python3
"""Augment SAM opportunities with third-party USAspending corroboration signals.

This script adds two enrichment blocks to each opportunity row:
  - `usaspending_signal`: match count + top award samples from USAspending
  - `cross_data_signal`: multi-source corroboration score/level

Data source:
  https://api.usaspending.gov/api/v2/search/spending_by_award/
"""

from __future__ import annotations

import argparse
import json
import os
import re
import time
from datetime import UTC, date, datetime
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

ROOT = Path('/home/anboas/clawd/adamboas-site')
CANDIDATES_PATH = ROOT / 'src/data/radar/events-candidates-sam-opportunities.json'
CACHE_PATH = ROOT / '.cache/usaspending/by-solicitation.json'
SUMMARY_PATH = ROOT / 'src/data/radar/events-candidates-sam-opportunities-usaspending-signals.md'
API_URL = 'https://api.usaspending.gov/api/v2/search/spending_by_award/'

CONTRACT_AWARD_TYPE_CODES = ['A', 'B', 'C', 'D']


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument('--max-lookups', type=int, default=140, help='Maximum solicitation lookups this run')
    parser.add_argument('--cache-ttl-hours', type=int, default=168, help='Cache TTL in hours')
    parser.add_argument('--sleep-ms', type=int, default=120, help='Delay between API calls')
    parser.add_argument('--force-refresh', action='store_true', help='Ignore cache TTL')
    parser.add_argument('--limit', type=int, default=5, help='Rows to request from USAspending per solicitation query')
    parser.add_argument('--start-date', default='2018-10-01', help='Search start date (YYYY-MM-DD)')
    parser.add_argument('--end-date', default=None, help='Search end date (YYYY-MM-DD); defaults to today')
    return parser.parse_args()


def load_json(path: Path, fallback: Any) -> Any:
    if not path.exists():
        return fallback
    try:
        return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        return fallback


def save_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')


def solicitation_key(value: str | None) -> str | None:
    if not value:
        return None
    key = str(value).strip().upper()
    return key or None


def to_float(value: Any) -> float:
    try:
        if value in (None, ''):
            return 0.0
        return float(value)
    except Exception:
        return 0.0


def normalize_name(value: str | None) -> str:
    txt = str(value or '').lower()
    txt = re.sub(r'[^a-z0-9\s]', ' ', txt)
    txt = re.sub(r'\s+', ' ', txt).strip()
    return txt


def similar_recipient(a: str | None, b: str | None) -> bool:
    left = normalize_name(a)
    right = normalize_name(b)
    if not left or not right:
        return False
    if left == right:
        return True
    left_tokens = {t for t in left.split(' ') if len(t) >= 4}
    right_tokens = {t for t in right.split(' ') if len(t) >= 4}
    if not left_tokens or not right_tokens:
        return False
    overlap = left_tokens.intersection(right_tokens)
    return len(overlap) >= 2


STOPWORDS = {
    'the', 'and', 'for', 'with', 'from', 'this', 'that', 'into', 'under', 'over',
    'open', 'notice', 'sources', 'sought', 'request', 'proposal', 'solicitation',
    'support', 'services', 'service', 'task', 'contract', 'navy', 'department',
    'office', 'program', 'systems', 'system', 'engineering', 'development',
    'industry', 'day', 'special', 'federal', 'government',
}


def fallback_keywords(row: dict[str, Any]) -> list[str]:
    title = str(row.get('title') or '')
    agency = str(row.get('agency_path') or '')
    notice_type = str(row.get('notice_type') or '')

    tokens: list[str] = []

    # Agency anchor (often useful with broad title language)
    agency_blob = agency.lower().replace('.', ' ')
    if 'navy' in agency_blob or 'naval' in agency_blob:
        tokens.append('navy')
    elif 'air force' in agency_blob:
        tokens.append('air force')
    elif 'army' in agency_blob:
        tokens.append('army')

    # Keep 2-3 meaningful title terms
    for token in re.findall(r'[A-Za-z0-9]{4,}', title.lower()):
        if token in STOPWORDS:
            continue
        if token.isdigit():
            continue
        tokens.append(token)
        if len(tokens) >= 4:
            break

    if notice_type:
        nt = notice_type.lower()
        if 'pre' in nt and 'solicitation' in nt:
            tokens.append('presolicitation')
        elif 'sources sought' in nt:
            tokens.append('sources sought')

    # Preserve order, de-dup
    deduped: list[str] = []
    seen: set[str] = set()
    for token in tokens:
        t = token.strip()
        if not t or t in seen:
            continue
        seen.add(t)
        deduped.append(t)
    return deduped[:5]


def build_payload(*, keywords: list[str], limit: int, start_date: str, end_date: str) -> dict[str, Any]:
    return {
        'subawards': False,
        'limit': max(1, min(50, int(limit))),
        'page': 1,
        'sort': 'Last Modified Date',
        'order': 'desc',
        'filters': {
            'keywords': keywords,
            'award_type_codes': CONTRACT_AWARD_TYPE_CODES,
            'time_period': [
                {
                    'start_date': start_date,
                    'end_date': end_date,
                }
            ],
        },
        'fields': [
            'Award ID',
            'Recipient Name',
            'Award Amount',
            'Awarding Agency',
            'Awarding Sub Agency',
            'Start Date',
            'End Date',
            'Description',
            'Last Modified Date',
            'Contract Award Type',
            'NAICS',
            'PSC',
        ],
    }


def fetch_usaspending(*, keywords: list[str], limit: int, start_date: str, end_date: str) -> dict[str, Any]:
    payload = build_payload(keywords=keywords, limit=limit, start_date=start_date, end_date=end_date)
    req = Request(
        API_URL,
        data=json.dumps(payload).encode('utf-8'),
        headers={
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'adamboas-opportunity-intel/1.0',
        },
        method='POST',
    )

    with urlopen(req, timeout=60) as resp:
        return json.loads(resp.read().decode('utf-8', errors='ignore'))


def summarize_response(payload: dict[str, Any]) -> dict[str, Any]:
    rows = payload.get('results')
    if not isinstance(rows, list):
        rows = []

    total_amount = 0.0
    top_awards: list[dict[str, Any]] = []

    for row in rows:
        amount = to_float(row.get('Award Amount'))
        total_amount += amount
        top_awards.append(
            {
                'award_id': row.get('Award ID'),
                'recipient_name': row.get('Recipient Name'),
                'award_amount': round(amount, 2),
                'awarding_agency': row.get('Awarding Agency'),
                'awarding_sub_agency': row.get('Awarding Sub Agency'),
                'contract_award_type': row.get('Contract Award Type'),
                'naics': row.get('NAICS'),
                'psc': row.get('PSC'),
                'start_date': row.get('Start Date'),
                'end_date': row.get('End Date'),
                'last_modified_date': row.get('Last Modified Date'),
            }
        )

    return {
        'matched_award_count': len(rows),
        'total_award_amount': round(total_amount, 2),
        'top_awards': top_awards[:5],
    }


def correlation_level(score: int) -> str:
    if score >= 70:
        return 'Strong'
    if score >= 45:
        return 'Moderate'
    if score >= 20:
        return 'Weak'
    return 'None'


def build_cross_data_signal(row: dict[str, Any]) -> dict[str, Any]:
    contract = row.get('contract_awards_signal') or {}
    contract_count = int(contract.get('matched_award_count') or 0)
    contract_sample = (contract.get('sample_award') or {}).get('awardee')

    us = row.get('usaspending_signal') or {}
    us_count = int(us.get('matched_award_count') or 0)
    us_total = to_float(us.get('total_award_amount'))
    us_awards = us.get('top_awards') if isinstance(us.get('top_awards'), list) else []

    detail_len = int(row.get('detail_text_length') or 0)
    resource_count = int(row.get('resource_count') or 0)
    relevance_score = int(row.get('relevance_score') or 0)
    navy_related = bool(row.get('navy_related'))

    score = 0
    factors: list[str] = []

    if contract_count > 0:
        score += 30
        factors.append('SAM contract-award continuity present')

    if us_count > 0:
        score += 30
        factors.append('USAspending third-party matches present')

    if us_total >= 5_000_000:
        score += 8
        factors.append('USAspending matched awards include material dollar volume')
    elif us_total > 0:
        score += 4
        factors.append('USAspending matched awards include non-zero obligations')

    if contract_count > 0 and us_count > 0:
        score += 10
        factors.append('Cross-source award corroboration (SAM + USAspending)')

    overlap = False
    if contract_sample and us_awards:
        for award in us_awards:
            if similar_recipient(contract_sample, award.get('recipient_name')):
                overlap = True
                break
    if overlap:
        score += 7
        factors.append('Recipient overlap across SAM and USAspending samples')

    if detail_len > 0:
        score += 10
        factors.append('Deep notice text captured')
    if resource_count > 0:
        score += 8
        factors.append('Attachment/resource evidence captured')

    if navy_related:
        score += 4
        factors.append('Navy relevance signal')

    if relevance_score >= 6:
        score += 3
        factors.append('High internal relevance score')

    score = min(100, score)
    level = correlation_level(score)

    return {
        'score': score,
        'level': level,
        'factors': factors,
        'sources': ['SAM opportunities', 'SAM contract awards', 'USAspending'],
        'checked_at': datetime.now(UTC).isoformat(),
    }


def to_summary_markdown(
    *,
    candidates: list[dict[str, Any]],
    run_started: str,
    run_finished: str,
    lookups: int,
    cache_hits: int,
    errors: int,
) -> str:
    with_us = [c for c in candidates if int((c.get('usaspending_signal') or {}).get('matched_award_count') or 0) > 0]
    by_level: dict[str, int] = {'Strong': 0, 'Moderate': 0, 'Weak': 0, 'None': 0}

    for row in candidates:
        level = str((row.get('cross_data_signal') or {}).get('level') or 'None')
        if level not in by_level:
            by_level[level] = 0
        by_level[level] += 1

    top = sorted(
        candidates,
        key=lambda c: (
            -int((c.get('cross_data_signal') or {}).get('score') or 0),
            -int((c.get('usaspending_signal') or {}).get('matched_award_count') or 0),
            -int((c.get('contract_awards_signal') or {}).get('matched_award_count') or 0),
            -int(c.get('relevance_score') or 0),
        ),
    )[:100]

    lines: list[str] = []
    lines.append('# Opportunity USAspending + Cross-Data Corroboration Signals')
    lines.append('')
    lines.append(f'- Run started: {run_started}')
    lines.append(f'- Run finished: {run_finished}')
    lines.append(f'- Lookups executed: {lookups}')
    lines.append(f'- Cache hits: {cache_hits}')
    lines.append(f'- Errors: {errors}')
    lines.append(f'- Opportunities with USAspending matches: {len(with_us)} / {len(candidates)}')
    lines.append('')
    lines.append('## Corroboration level distribution')
    for label in ('Strong', 'Moderate', 'Weak', 'None'):
        lines.append(f'- {label}: {by_level.get(label, 0)}')
    lines.append('')
    lines.append('| Corroboration | USA awards | SAM awards | Solicitation | Agency | Title |')
    lines.append('|---|---:|---:|---|---|---|')

    for row in top:
        cross = row.get('cross_data_signal') or {}
        us = row.get('usaspending_signal') or {}
        sam = row.get('contract_awards_signal') or {}
        score = int(cross.get('score') or 0)
        level = str(cross.get('level') or 'None')
        us_count = int(us.get('matched_award_count') or 0)
        sam_count = int(sam.get('matched_award_count') or 0)
        solicitation = row.get('solicitation_number') or '—'
        agency = row.get('agency_path') or '—'
        title = str(row.get('title') or 'Untitled').replace('|', '\\|')
        lines.append(f'| {level} ({score}) | {us_count} | {sam_count} | {solicitation} | {agency} | {title} |')

    lines.append('')
    lines.append('Notes:')
    lines.append('- USAspending enrichment uses `search/spending_by_award` with solicitation-keyword first, then scoped context fallback keywords when needed.')
    lines.append('- Cross-data score is a deterministic weighted fusion of SAM + USAspending + document depth signals.')
    lines.append('- Corroboration is directional intelligence, not a final bid/no-bid decision.')
    return '\n'.join(lines) + '\n'


def main() -> int:
    args = parse_args()
    end_date = args.end_date or date.today().isoformat()

    candidates = load_json(CANDIDATES_PATH, [])
    if not isinstance(candidates, list) or not candidates:
        raise SystemExit(f'No candidates found at {CANDIDATES_PATH}')

    now = time.time()
    now_iso = datetime.now(UTC).isoformat()
    ttl_seconds = max(0, int(args.cache_ttl_hours) * 3600)

    cache = load_json(CACHE_PATH, {})
    if not isinstance(cache, dict):
        cache = {}

    solicitation_rows: dict[str, dict[str, Any]] = {}
    ordered = sorted(candidates, key=lambda r: (-int(r.get('relevance_score') or 0), str(r.get('response_deadline') or '9999-12-31')))
    for row in ordered:
        key = solicitation_key(row.get('solicitation_number'))
        if not key or key in solicitation_rows:
            continue
        solicitation_rows[key] = row

    lookups = 0
    cache_hits = 0
    errors = 0
    total_targets = len(solicitation_rows)

    for idx, (sol, sample_row) in enumerate(solicitation_rows.items(), start=1):
        cached = cache.get(sol)
        if isinstance(cached, dict) and not args.force_refresh:
            checked_at = cached.get('checked_at_unix')
            if isinstance(checked_at, (int, float)) and (now - float(checked_at) <= ttl_seconds):
                cache_hits += 1
                if cache_hits % 25 == 0:
                    print(f'[cache] {cache_hits} hits ({idx}/{total_targets})', flush=True)
                continue

        if lookups >= args.max_lookups:
            break

        try:
            primary_keywords = [sol]
            payload = fetch_usaspending(
                keywords=primary_keywords,
                limit=args.limit,
                start_date=args.start_date,
                end_date=end_date,
            )
            summary = summarize_response(payload)
            query_type = 'solicitation-keyword'
            query_keywords = primary_keywords

            # If exact solicitation keyword has no matches, try a scoped contextual fallback.
            if int(summary.get('matched_award_count') or 0) <= 0:
                fallback = fallback_keywords(sample_row)
                if fallback:
                    fallback_payload = fetch_usaspending(
                        keywords=fallback,
                        limit=args.limit,
                        start_date=args.start_date,
                        end_date=end_date,
                    )
                    fallback_summary = summarize_response(fallback_payload)
                    if int(fallback_summary.get('matched_award_count') or 0) > 0:
                        summary = fallback_summary
                        query_type = 'context-keyword-fallback'
                        query_keywords = fallback

            cache[sol] = {
                'checked_at': now_iso,
                'checked_at_unix': now,
                'source': 'USAspending API v2',
                'query_type': query_type,
                'query': sol,
                'query_keywords': query_keywords,
                **summary,
                'error': None,
            }
            lookups += 1
            if lookups % 10 == 0 or idx == total_targets:
                print(f'[lookup] {lookups} completed ({idx}/{total_targets}) :: {sol} -> {int(summary.get("matched_award_count") or 0)}', flush=True)
            if args.sleep_ms > 0:
                time.sleep(args.sleep_ms / 1000)
        except HTTPError as exc:
            errors += 1
            error_body = ''
            try:
                error_body = exc.read().decode('utf-8', errors='ignore')[:500]
            except Exception:
                error_body = ''
            cache[sol] = {
                'checked_at': now_iso,
                'checked_at_unix': now,
                'source': 'USAspending API v2',
                'query_type': 'solicitation-keyword',
                'query': sol,
                'query_keywords': [sol],
                'matched_award_count': 0,
                'total_award_amount': 0.0,
                'top_awards': [],
                'error': f'HTTP {exc.code}: {error_body}'.strip(),
            }
            print(f'[error] HTTP {exc.code} ({idx}/{total_targets}) :: {sol}', flush=True)
            if exc.code == 429:
                break
        except URLError:
            errors += 1
            print(f'[error] URLError ({idx}/{total_targets}) :: {sol}', flush=True)
        except Exception:
            errors += 1
            print(f'[error] Exception ({idx}/{total_targets}) :: {sol}', flush=True)

    for row in candidates:
        sol = solicitation_key(row.get('solicitation_number'))
        us = cache.get(sol) if sol else None

        if isinstance(us, dict):
            row['usaspending_signal'] = {
                'source': us.get('source') or 'USAspending API v2',
                'query_type': us.get('query_type') or 'keyword',
                'query': us.get('query') or sol,
                'query_keywords': us.get('query_keywords') if isinstance(us.get('query_keywords'), list) else [],
                'matched_award_count': int(us.get('matched_award_count') or 0),
                'total_award_amount': round(to_float(us.get('total_award_amount')), 2),
                'top_awards': us.get('top_awards') if isinstance(us.get('top_awards'), list) else [],
                'checked_at': us.get('checked_at'),
                'error': us.get('error'),
            }
            us_count = int(row['usaspending_signal']['matched_award_count'])
            us_amount = to_float(row['usaspending_signal']['total_award_amount'])
            us_score = min(12, us_count * 2 + (4 if us_amount >= 5_000_000 else 0) + (2 if us_amount >= 25_000_000 else 0))
            row['usaspending_score'] = int(us_score)
        else:
            row['usaspending_signal'] = {
                'source': 'USAspending API v2',
                'query_type': 'keyword',
                'query': sol,
                'query_keywords': [sol] if sol else [],
                'matched_award_count': 0,
                'total_award_amount': 0.0,
                'top_awards': [],
                'checked_at': None,
                'error': None,
            }
            row['usaspending_score'] = 0

        cross = build_cross_data_signal(row)
        row['cross_data_signal'] = cross
        row['cross_data_score'] = int(cross.get('score') or 0)

    save_json(CANDIDATES_PATH, candidates)
    save_json(CACHE_PATH, cache)

    finished_iso = datetime.now(UTC).isoformat()
    SUMMARY_PATH.write_text(
        to_summary_markdown(
            candidates=candidates,
            run_started=now_iso,
            run_finished=finished_iso,
            lookups=lookups,
            cache_hits=cache_hits,
            errors=errors,
        ),
        encoding='utf-8',
    )

    with_us = sum(1 for row in candidates if int((row.get('usaspending_signal') or {}).get('matched_award_count') or 0) > 0)
    strong = sum(1 for row in candidates if str((row.get('cross_data_signal') or {}).get('level') or '') == 'Strong')

    print(f'Candidates: {len(candidates)}')
    print(f'USAspending lookups executed: {lookups}')
    print(f'Cache hits: {cache_hits}')
    print(f'Errors: {errors}')
    print(f'Rows with USAspending matches: {with_us}')
    print(f'Rows with Strong cross-data corroboration: {strong}')
    print(f'- {CANDIDATES_PATH}')
    print(f'- {SUMMARY_PATH}')
    print(f'- {CACHE_PATH}')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
