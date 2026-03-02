#!/usr/bin/env python3
"""Generate opportunities drift/freshness report from latest enrichment data.

Outputs:
- src/data/radar/events-candidates-sam-opportunities-drift-latest.json
- src/data/radar/events-candidates-sam-opportunities-drift-latest.md
- src/data/radar/events-candidates-sam-opportunities-drift-snapshot.json (state)
"""

from __future__ import annotations

import json
from datetime import UTC, datetime
from pathlib import Path
from typing import Any

ROOT = Path('/home/anboas/clawd/adamboas-site')
CANDIDATES_PATH = ROOT / 'src/data/radar/events-candidates-sam-opportunities.json'
DRIFT_JSON_PATH = ROOT / 'src/data/radar/events-candidates-sam-opportunities-drift-latest.json'
DRIFT_MD_PATH = ROOT / 'src/data/radar/events-candidates-sam-opportunities-drift-latest.md'
SNAPSHOT_PATH = ROOT / 'src/data/radar/events-candidates-sam-opportunities-drift-snapshot.json'


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


def as_int(value: Any) -> int:
    try:
        return int(value)
    except Exception:
        return 0


def parse_iso(value: Any) -> datetime | None:
    txt = str(value or '').strip()
    if not txt:
        return None
    try:
        if txt.endswith('Z'):
            txt = txt[:-1] + '+00:00'
        dt = datetime.fromisoformat(txt)
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=UTC)
        return dt.astimezone(UTC)
    except Exception:
        return None


def checked_age_days(row: dict[str, Any], now: datetime) -> int | None:
    us = row.get('usaspending_signal') or {}
    checked = parse_iso(us.get('checked_at'))
    if not checked:
        return None
    return max(0, (now.date() - checked.date()).days)


def summarize(rows: list[dict[str, Any]], now: datetime) -> dict[str, Any]:
    total = len(rows)

    def us(row: dict[str, Any]) -> dict[str, Any]:
        payload = row.get('usaspending_signal')
        return payload if isinstance(payload, dict) else {}

    us_matches = [r for r in rows if as_int(us(r).get('matched_award_count')) > 0]
    us_errors = [r for r in rows if str(us(r).get('error') or '').strip()]

    exact_matches = [
        r for r in rows
        if as_int(us(r).get('matched_award_count')) > 0
        and 'solicitation' in str(us(r).get('query_type') or '').lower()
    ]
    fallback_matches = [
        r for r in rows
        if as_int(us(r).get('matched_award_count')) > 0
        and 'fallback' in str(us(r).get('query_type') or '').lower()
    ]

    high_confidence = [
        r for r in rows
        if as_int((r.get('cross_data_signal') or {}).get('score')) >= 70
    ]
    strong_corroboration = [
        r for r in rows
        if str((r.get('cross_data_signal') or {}).get('level') or '') == 'Strong'
    ]
    fpds_medium = [
        r for r in rows
        if as_int((r.get('fpds_signal') or {}).get('alignment_score')) >= 45
    ]
    fpds_high = [
        r for r in rows
        if as_int((r.get('fpds_signal') or {}).get('alignment_score')) >= 70
    ]

    deep_text = [r for r in rows if as_int(r.get('detail_text_length')) > 0]
    attachments = [r for r in rows if as_int(r.get('resource_count')) > 0]
    sam_awards = [r for r in rows if as_int((r.get('contract_awards_signal') or {}).get('matched_award_count')) > 0]

    fresh = []
    stale = []
    unknown_age = []
    for row in us_matches:
        age = checked_age_days(row, now)
        if age is None:
            unknown_age.append(row)
        elif age <= 3:
            fresh.append(row)
        elif age > 14:
            stale.append(row)

    by_query_confidence: dict[str, int] = {'High': 0, 'Medium': 0, 'Low': 0}
    for row in rows:
        confidence = str((row.get('cross_data_signal') or {}).get('usaspending_query_confidence') or 'Low')
        if confidence not in by_query_confidence:
            by_query_confidence[confidence] = 0
        by_query_confidence[confidence] += 1

    return {
        'total_rows': total,
        'us_matches': len(us_matches),
        'us_errors': len(us_errors),
        'exact_matches': len(exact_matches),
        'fallback_matches': len(fallback_matches),
        'high_confidence': len(high_confidence),
        'strong_corroboration': len(strong_corroboration),
        'fpds_medium': len(fpds_medium),
        'fpds_high': len(fpds_high),
        'deep_text_rows': len(deep_text),
        'attachment_rows': len(attachments),
        'sam_award_rows': len(sam_awards),
        'fresh_checks_3d': len(fresh),
        'stale_checks_14d': len(stale),
        'unknown_check_age': len(unknown_age),
        'query_confidence': by_query_confidence,
        'rates': {
            'us_match_rate': round((len(us_matches) / total), 4) if total else 0.0,
            'us_error_rate': round((len(us_errors) / total), 4) if total else 0.0,
            'high_confidence_rate': round((len(high_confidence) / total), 4) if total else 0.0,
            'fpds_medium_rate': round((len(fpds_medium) / total), 4) if total else 0.0,
            'exact_match_share': round((len(exact_matches) / max(1, len(us_matches))), 4),
            'fallback_match_share': round((len(fallback_matches) / max(1, len(us_matches))), 4),
            'fresh_check_share': round((len(fresh) / max(1, len(us_matches))), 4),
        },
    }


def deltas(current: dict[str, Any], previous: dict[str, Any] | None) -> dict[str, int]:
    previous = previous or {}
    fields = [
        'total_rows',
        'us_matches',
        'us_errors',
        'exact_matches',
        'fallback_matches',
        'high_confidence',
        'strong_corroboration',
        'fpds_medium',
        'fpds_high',
        'fresh_checks_3d',
        'stale_checks_14d',
    ]
    return {field: as_int(current.get(field)) - as_int(previous.get(field)) for field in fields}


def fmt_delta(value: int) -> str:
    if value > 0:
        return f'+{value}'
    return str(value)


def to_markdown(*, generated_at: str, current: dict[str, Any], previous: dict[str, Any] | None, change: dict[str, int]) -> str:
    prev_label = str((previous or {}).get('generated_at') or 'none')
    lines: list[str] = []
    lines.append('# Opportunities Drift & Freshness Report')
    lines.append('')
    lines.append(f'- Generated at: {generated_at}')
    lines.append(f'- Previous baseline: {prev_label}')
    lines.append('')
    lines.append('## Current snapshot')
    lines.append(f"- Total rows: {current['total_rows']}")
    lines.append(f"- USA matches: {current['us_matches']} ({current['rates']['us_match_rate']:.2%})")
    lines.append(f"- USA errors: {current['us_errors']} ({current['rates']['us_error_rate']:.2%})")
    lines.append(f"- Exact matches: {current['exact_matches']} ({current['rates']['exact_match_share']:.2%} of matched)")
    lines.append(f"- Fallback matches: {current['fallback_matches']} ({current['rates']['fallback_match_share']:.2%} of matched)")
    lines.append(f"- High confidence: {current['high_confidence']} ({current['rates']['high_confidence_rate']:.2%})")
    lines.append(f"- Strong corroboration: {current['strong_corroboration']}")
    lines.append(f"- FPDS aligned Medium+: {current['fpds_medium']} ({current['rates']['fpds_medium_rate']:.2%})")
    lines.append(f"- FPDS aligned High: {current['fpds_high']}")
    lines.append(f"- Fresh checks (<=3d): {current['fresh_checks_3d']} ({current['rates']['fresh_check_share']:.2%} of matched)")
    lines.append(f"- Stale checks (>14d): {current['stale_checks_14d']}")
    lines.append(f"- Unknown check age: {current['unknown_check_age']}")
    lines.append('')
    lines.append('## Delta vs previous')
    lines.append(f"- Total rows: {fmt_delta(change['total_rows'])}")
    lines.append(f"- USA matches: {fmt_delta(change['us_matches'])}")
    lines.append(f"- USA errors: {fmt_delta(change['us_errors'])}")
    lines.append(f"- Exact matches: {fmt_delta(change['exact_matches'])}")
    lines.append(f"- Fallback matches: {fmt_delta(change['fallback_matches'])}")
    lines.append(f"- High confidence: {fmt_delta(change['high_confidence'])}")
    lines.append(f"- Strong corroboration: {fmt_delta(change['strong_corroboration'])}")
    lines.append(f"- FPDS aligned Medium+: {fmt_delta(change['fpds_medium'])}")
    lines.append(f"- FPDS aligned High: {fmt_delta(change['fpds_high'])}")
    lines.append(f"- Fresh checks (<=3d): {fmt_delta(change['fresh_checks_3d'])}")
    lines.append(f"- Stale checks (>14d): {fmt_delta(change['stale_checks_14d'])}")
    lines.append('')
    lines.append('## Query-confidence distribution')
    for key in ('High', 'Medium', 'Low'):
        lines.append(f"- {key}: {as_int((current.get('query_confidence') or {}).get(key))}")
    lines.append('')
    lines.append('Notes:')
    lines.append('- This report is derived from the latest opportunities enrichment dataset.')
    lines.append('- Deltas compare against the previous committed drift snapshot baseline.')
    return '\n'.join(lines) + '\n'


def main() -> int:
    rows = load_json(CANDIDATES_PATH, [])
    if not isinstance(rows, list):
        raise SystemExit(f'Unexpected candidates payload at {CANDIDATES_PATH}')

    now = datetime.now(UTC)
    generated_at = now.isoformat()

    previous_snapshot = load_json(SNAPSHOT_PATH, None)
    previous_metrics = previous_snapshot.get('metrics') if isinstance(previous_snapshot, dict) else None

    current_metrics = summarize(rows, now)
    change = deltas(current_metrics, previous_metrics)

    latest_payload = {
        'generated_at': generated_at,
        'baseline_generated_at': (previous_snapshot or {}).get('generated_at') if isinstance(previous_snapshot, dict) else None,
        'metrics': current_metrics,
        'deltas': change,
    }
    save_json(DRIFT_JSON_PATH, latest_payload)

    DRIFT_MD_PATH.write_text(
        to_markdown(
            generated_at=generated_at,
            current=current_metrics,
            previous=previous_snapshot if isinstance(previous_snapshot, dict) else None,
            change=change,
        ),
        encoding='utf-8',
    )

    snapshot_payload = {
        'generated_at': generated_at,
        'metrics': current_metrics,
    }
    save_json(SNAPSHOT_PATH, snapshot_payload)

    print(f'- {DRIFT_JSON_PATH}')
    print(f'- {DRIFT_MD_PATH}')
    print(f'- {SNAPSHOT_PATH}')
    print(f"Rows: {current_metrics['total_rows']}")
    print(f"USA matches: {current_metrics['us_matches']}")
    print(f"USA errors: {current_metrics['us_errors']}")
    print(f"FPDS aligned Medium+: {current_metrics['fpds_medium']}")
    print(f"Fresh checks <=3d: {current_metrics['fresh_checks_3d']}")
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
