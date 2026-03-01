#!/usr/bin/env python3
"""Augment SAM opportunities with downstream contract-award signal from SAM Contract Awards API.

This script enriches opportunities by solicitation number and stores a cached
summary in each candidate row under `contract_awards_signal`.
"""

from __future__ import annotations

import argparse
import json
import os
import time
from datetime import UTC, datetime
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen

ROOT = Path('/home/anboas/clawd/adamboas-site')
CANDIDATES_PATH = ROOT / 'src/data/radar/events-candidates-sam-opportunities.json'
CACHE_PATH = ROOT / '.cache/sam-contract-awards/by-solicitation.json'
SUMMARY_PATH = ROOT / 'src/data/radar/events-candidates-sam-opportunities-award-signals.md'
API_URL = 'https://api.sam.gov/contract-awards/v1/search'


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument('--api-key', default=None)
    parser.add_argument('--max-lookups', type=int, default=120, help='Maximum solicitation lookups this run')
    parser.add_argument('--cache-ttl-hours', type=int, default=168, help='Cache TTL in hours')
    parser.add_argument('--sleep-ms', type=int, default=100, help='Delay between API calls')
    parser.add_argument('--force-refresh', action='store_true', help='Ignore cache TTL')
    parser.add_argument('--limit', type=int, default=5, help='API row limit per solicitation')
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


def fetch_contract_awards(api_key: str, solicitation_id: str, limit: int) -> dict[str, Any]:
    params = {
        'api_key': api_key,
        'solicitationID': solicitation_id,
        'awardOrIDV': 'Award',
        'limit': max(1, min(100, limit)),
        'offset': 0,
    }
    req = Request(f"{API_URL}?{urlencode(params)}", headers={'Accept': 'application/json'})
    with urlopen(req, timeout=45) as resp:
        return json.loads(resp.read().decode('utf-8', errors='ignore'))


def pick_sample_award(payload: dict[str, Any]) -> dict[str, Any] | None:
    rows = payload.get('awardSummary')
    if not isinstance(rows, list) or not rows:
        return None

    row = rows[0]
    contract = row.get('contractId') or {}
    core = row.get('coreData') or {}
    details = row.get('awardDetails') or {}

    return {
        'piid': contract.get('piid'),
        'modificationNumber': contract.get('modificationNumber'),
        'dateSigned': (details.get('dates') or {}).get('dateSigned'),
        'actionObligation': (details.get('dollars') or {}).get('actionObligation'),
        'awardee': ((details.get('awardeeData') or {}).get('awardeeHeader') or {}).get('legalBusinessName'),
        'contractingSubtier': (((core.get('federalOrganization') or {}).get('contractingInformation') or {}).get('contractingSubtier') or {}).get('name'),
        'contractingDepartment': (((core.get('federalOrganization') or {}).get('contractingInformation') or {}).get('contractingDepartment') or {}).get('name'),
    }


def total_records(payload: dict[str, Any]) -> int:
    for key in ('totalRecords',):
        raw = payload.get(key)
        if raw not in (None, ''):
            try:
                return int(raw)
            except Exception:
                pass

    award_response = payload.get('awardResponse')
    if isinstance(award_response, dict):
        raw = award_response.get('totalRecords')
        if raw not in (None, ''):
            try:
                return int(raw)
            except Exception:
                pass
    return 0


def to_summary_markdown(candidates: list[dict[str, Any]], run_started: str, run_finished: str, lookups: int, cache_hits: int, errors: int) -> str:
    with_signal = [c for c in candidates if (c.get('contract_awards_signal') or {}).get('matched_award_count', 0) > 0]

    top = sorted(
        with_signal,
        key=lambda c: (
            -int((c.get('contract_awards_signal') or {}).get('matched_award_count') or 0),
            -int(c.get('relevance_score') or 0),
        ),
    )[:80]

    lines: list[str] = []
    lines.append('# Opportunity Contract-Award Signals')
    lines.append('')
    lines.append(f'- Run started: {run_started}')
    lines.append(f'- Run finished: {run_finished}')
    lines.append(f'- Lookups executed: {lookups}')
    lines.append(f'- Cache hits: {cache_hits}')
    lines.append(f'- Errors: {errors}')
    lines.append(f'- Opportunities with matched award history: {len(with_signal)} / {len(candidates)}')
    lines.append('')
    lines.append('| Matched awards | Solicitation | Agency | Title |')
    lines.append('|---:|---|---|---|')

    for row in top:
        signal = row.get('contract_awards_signal') or {}
        count = int(signal.get('matched_award_count') or 0)
        sol = row.get('solicitation_number') or '—'
        agency = row.get('agency_path') or '—'
        title = str(row.get('title') or 'Untitled').replace('|', '\\|')
        lines.append(f'| {count} | {sol} | {agency} | {title} |')

    lines.append('')
    lines.append('Notes:')
    lines.append('- Data source: SAM.gov Contract Awards API (`/contract-awards/v1/search`).')
    lines.append('- Query basis: `solicitationID` exact match, `awardOrIDV=Award`.')
    lines.append('- Signals do not imply direct continuity without analyst validation.')
    return '\n'.join(lines) + '\n'


def main() -> int:
    args = parse_args()
    api_key = args.api_key or os.environ.get('SAM_API_KEY')
    if not api_key:
        raise SystemExit('Missing SAM API key. Set SAM_API_KEY or pass --api-key.')

    candidates = load_json(CANDIDATES_PATH, [])
    if not isinstance(candidates, list) or not candidates:
        raise SystemExit(f'No candidates found at {CANDIDATES_PATH}')

    now = time.time()
    now_iso = datetime.now(UTC).isoformat()
    ttl_seconds = max(0, int(args.cache_ttl_hours) * 3600)

    cache = load_json(CACHE_PATH, {})
    if not isinstance(cache, dict):
        cache = {}

    unique_solicitations: list[str] = []
    seen: set[str] = set()
    ordered = sorted(candidates, key=lambda r: (-int(r.get('relevance_score') or 0), str(r.get('response_deadline') or '9999-12-31')))
    for row in ordered:
        key = solicitation_key(row.get('solicitation_number'))
        if not key or key in seen:
            continue
        seen.add(key)
        unique_solicitations.append(key)

    lookups = 0
    cache_hits = 0
    errors = 0

    for sol in unique_solicitations:
        cached = cache.get(sol)
        if isinstance(cached, dict) and not args.force_refresh:
            checked_at = cached.get('checked_at_unix')
            if isinstance(checked_at, (int, float)) and (now - float(checked_at) <= ttl_seconds):
                cache_hits += 1
                continue

        if lookups >= args.max_lookups:
            break

        try:
            payload = fetch_contract_awards(api_key=api_key, solicitation_id=sol, limit=args.limit)
            cache[sol] = {
                'checked_at': now_iso,
                'checked_at_unix': now,
                'matched_award_count': total_records(payload),
                'sample_award': pick_sample_award(payload),
                'source': 'SAM.gov Contract Awards API',
            }
            lookups += 1
            if args.sleep_ms > 0:
                time.sleep(args.sleep_ms / 1000)
        except HTTPError as exc:
            errors += 1
            cache[sol] = {
                'checked_at': now_iso,
                'checked_at_unix': now,
                'error': f'HTTP {exc.code}',
                'matched_award_count': 0,
                'sample_award': None,
                'source': 'SAM.gov Contract Awards API',
            }
            if exc.code == 429:
                break
        except URLError:
            errors += 1
        except Exception:
            errors += 1

    for row in candidates:
        sol = solicitation_key(row.get('solicitation_number'))
        signal = cache.get(sol) if sol else None
        if isinstance(signal, dict):
            row['contract_awards_signal'] = {
                'source': signal.get('source') or 'SAM.gov Contract Awards API',
                'solicitation_id': sol,
                'matched_award_count': int(signal.get('matched_award_count') or 0),
                'sample_award': signal.get('sample_award'),
                'checked_at': signal.get('checked_at'),
                'error': signal.get('error'),
            }
            row['contract_awards_score'] = min(10, int(signal.get('matched_award_count') or 0))
        else:
            row['contract_awards_signal'] = {
                'source': 'SAM.gov Contract Awards API',
                'solicitation_id': sol,
                'matched_award_count': 0,
                'sample_award': None,
                'checked_at': None,
                'error': None,
            }
            row['contract_awards_score'] = 0

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

    with_signal = sum(1 for row in candidates if int((row.get('contract_awards_signal') or {}).get('matched_award_count') or 0) > 0)
    print(f'Candidates: {len(candidates)}')
    print(f'Contract-award lookups executed: {lookups}')
    print(f'Cache hits: {cache_hits}')
    print(f'Errors: {errors}')
    print(f'Rows with matched award history: {with_signal}')
    print(f'- {CANDIDATES_PATH}')
    print(f'- {SUMMARY_PATH}')
    print(f'- {CACHE_PATH}')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
