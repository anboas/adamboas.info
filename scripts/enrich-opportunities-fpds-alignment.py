#!/usr/bin/env python3
"""Add FPDS-aligned identifier continuity signals to opportunity rows.

This is a deterministic scaffolding layer using already-ingested award identifiers
(SAM contract-award sample + USAspending top awards) to estimate FPDS/PIID continuity.
"""

from __future__ import annotations

import json
import re
from datetime import UTC, datetime
from pathlib import Path
from typing import Any

ROOT = Path('/home/anboas/clawd/adamboas-site')
CANDIDATES_PATH = ROOT / 'src/data/radar/events-candidates-sam-opportunities.json'
SUMMARY_PATH = ROOT / 'src/data/radar/events-candidates-sam-opportunities-fpds-alignment.md'


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


def norm(value: Any) -> str:
    return re.sub(r'[^A-Z0-9]', '', str(value or '').upper())


def token_set(value: Any) -> set[str]:
    txt = str(value or '').upper()
    base = re.findall(r'[A-Z0-9]{3,}', txt)
    return {t for t in base if len(t) >= 4}


def alignment_level(score: int) -> str:
    if score >= 70:
        return 'High'
    if score >= 45:
        return 'Medium'
    if score > 0:
        return 'Low'
    return 'None'


def candidate_ids(row: dict[str, Any]) -> tuple[list[str], str | None]:
    ids: list[str] = []

    sample = ((row.get('contract_awards_signal') or {}).get('sample_award') or {})
    sample_piid = str(sample.get('piid') or '').strip()
    if sample_piid:
        ids.append(sample_piid)

    us = row.get('usaspending_signal') or {}
    awards = us.get('top_awards') if isinstance(us.get('top_awards'), list) else []
    for award in awards[:12]:
        award_id = str((award or {}).get('award_id') or '').strip()
        if award_id:
            ids.append(award_id)

    uniq: list[str] = []
    seen: set[str] = set()
    for item in ids:
        key = norm(item)
        if not key or key in seen:
            continue
        seen.add(key)
        uniq.append(item)

    return uniq, sample_piid or None


def score_row(row: dict[str, Any]) -> dict[str, Any]:
    solicitation = str(row.get('solicitation_number') or '').strip()
    sol_norm = norm(solicitation)
    sol_tokens = token_set(solicitation)

    us = row.get('usaspending_signal') or {}
    us_count = int(us.get('matched_award_count') or 0)
    query_type = str(us.get('query_type') or '').lower()

    ids, sample_piid = candidate_ids(row)

    score = 0
    factors: list[str] = []

    if sample_piid:
        score += 45
        factors.append('SAM contract-awards PIID present')

    id_norms = [norm(x) for x in ids]
    if sol_norm and sol_norm in id_norms:
        score += 35
        factors.append('Exact solicitation-to-award identifier match')

    overlap_hits = 0
    for award_id in ids:
        award_tokens = token_set(award_id)
        overlap = sol_tokens.intersection(award_tokens)
        if overlap:
            overlap_hits += 1
    if overlap_hits > 0:
        score += min(22, overlap_hits * 6)
        factors.append(f'Token overlap across solicitation and award IDs ({overlap_hits})')

    if us_count > 0:
        score += 12
        factors.append('USAspending award identifiers available')

    if 'solicitation' in query_type and us_count > 0:
        score += 10
        factors.append('USAspending exact solicitation query path')
    elif 'fallback' in query_type and us_count > 0:
        score += 5
        factors.append('USAspending fallback query path')

    score = min(100, score)
    level = alignment_level(score)

    canonical = sample_piid if sample_piid else (ids[0] if ids else None)

    return {
        'source': 'FPDS-aligned scaffold v1',
        'alignment_score': score,
        'alignment_level': level,
        'canonical_piid': canonical,
        'piid_candidates': ids[:12],
        'factors': factors,
        'checked_at': datetime.now(UTC).isoformat(),
    }


def to_summary_markdown(rows: list[dict[str, Any]], started: str, finished: str) -> str:
    levels = {'High': 0, 'Medium': 0, 'Low': 0, 'None': 0}
    for row in rows:
        level = str((row.get('fpds_signal') or {}).get('alignment_level') or 'None')
        levels[level] = levels.get(level, 0) + 1

    top = sorted(
        rows,
        key=lambda r: (
            -int((r.get('fpds_signal') or {}).get('alignment_score') or 0),
            -int((r.get('cross_data_signal') or {}).get('score') or 0),
            -int((r.get('usaspending_signal') or {}).get('matched_award_count') or 0),
        ),
    )[:120]

    lines: list[str] = []
    lines.append('# Opportunity FPDS-Aligned Identifier Continuity')
    lines.append('')
    lines.append(f'- Run started: {started}')
    lines.append(f'- Run finished: {finished}')
    lines.append(f'- Total opportunities scored: {len(rows)}')
    lines.append('')
    lines.append('## Alignment level distribution')
    for label in ('High', 'Medium', 'Low', 'None'):
        lines.append(f'- {label}: {levels.get(label, 0)}')
    lines.append('')
    lines.append('| FPDS alignment | Canonical PIID | Solicitation | USA awards | Title |')
    lines.append('|---|---|---|---:|---|')

    for row in top:
        signal = row.get('fpds_signal') or {}
        score = int(signal.get('alignment_score') or 0)
        level = str(signal.get('alignment_level') or 'None')
        canonical = signal.get('canonical_piid') or '—'
        solicitation = row.get('solicitation_number') or '—'
        us_count = int((row.get('usaspending_signal') or {}).get('matched_award_count') or 0)
        title = str(row.get('title') or 'Untitled').replace('|', '\\|')
        lines.append(f'| {level} ({score}) | {canonical} | {solicitation} | {us_count} | {title} |')

    lines.append('')
    lines.append('Notes:')
    lines.append('- This layer is a scaffold for FPDS continuity modeling using currently available identifiers.')
    lines.append('- It does not yet call a direct FPDS endpoint; it prepares normalized PIID continuity features for downstream integration.')
    return '\n'.join(lines) + '\n'


def main() -> int:
    started = datetime.now(UTC).isoformat()
    rows = load_json(CANDIDATES_PATH, [])
    if not isinstance(rows, list):
        raise SystemExit(f'Unexpected candidates payload at {CANDIDATES_PATH}')

    for row in rows:
        signal = score_row(row)
        row['fpds_signal'] = signal
        row['fpds_alignment_score'] = int(signal.get('alignment_score') or 0)
        row['fpds_alignment_level'] = str(signal.get('alignment_level') or 'None')

    save_json(CANDIDATES_PATH, rows)

    finished = datetime.now(UTC).isoformat()
    SUMMARY_PATH.write_text(to_summary_markdown(rows, started, finished), encoding='utf-8')

    high = sum(1 for r in rows if str((r.get('fpds_signal') or {}).get('alignment_level') or '') == 'High')
    medium = sum(1 for r in rows if str((r.get('fpds_signal') or {}).get('alignment_level') or '') == 'Medium')
    print(f'- {CANDIDATES_PATH}')
    print(f'- {SUMMARY_PATH}')
    print(f'Rows: {len(rows)}')
    print(f'FPDS alignment High: {high}')
    print(f'FPDS alignment Medium: {medium}')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
