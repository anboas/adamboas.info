#!/usr/bin/env python3
"""Convert a Pandoc standalone HTML file into a body-only fragment.

Pandoc's default -s output includes its own <style> that fights our site theme.
We extract <body>...</body>, drop <style>/<link>/<meta>/<title>/<script> tags,
and remove the first H1 (the site template already renders the title).

Usage:
  extract_pandoc_body.py in.html out.html
"""

from __future__ import annotations

import re
import sys
from pathlib import Path


def main() -> int:
    if len(sys.argv) != 3:
        print(__doc__.strip(), file=sys.stderr)
        return 2

    src = Path(sys.argv[1])
    dst = Path(sys.argv[2])

    html = src.read_text("utf-8", errors="ignore")

    m = re.search(r"<body[^>]*>(.*)</body>", html, flags=re.IGNORECASE | re.DOTALL)
    body = m.group(1) if m else html

    # Drop pandoc header cruft that sometimes appears in body.
    body = re.sub(r"<(style|script)[^>]*>.*?</\1>", "", body, flags=re.IGNORECASE | re.DOTALL)
    body = re.sub(r"<link\b[^>]*?>", "", body, flags=re.IGNORECASE)
    body = re.sub(r"<meta\b[^>]*?>", "", body, flags=re.IGNORECASE)
    body = re.sub(r"<title\b[^>]*>.*?</title>", "", body, flags=re.IGNORECASE | re.DOTALL)

    # Remove the first H1 (pandoc title) to avoid duplicate titles.
    # Pandoc sometimes wraps it in <header id="title-block-header">.
    body = re.sub(
        r"\A\s*<header\b[^>]*id=\"title-block-header\"[^>]*>.*?</header>\s*",
        "",
        body,
        flags=re.IGNORECASE | re.DOTALL,
    )
    body = re.sub(r"\A\s*<h1\b[^>]*>.*?</h1>\s*", "", body, flags=re.IGNORECASE | re.DOTALL)

    # Drop inline styles (pandoc uses these for colors) so site theme wins.
    body = re.sub(r"\sstyle=\"[^\"]*\"", "", body, flags=re.IGNORECASE)

    # Collapse hard line-wraps inside text (pandoc emits newlines that show up in headings).
    body = re.sub(r"([A-Za-z0-9,.;:\)])\n([A-Za-z0-9(])", r"\1 \2", body)

    # Convert our generated pipe tables (sometimes escaped) into real HTML tables.
    # Pattern lives inside a <p> and looks like: &lt;!– begin:generated-table –&gt; | a | b | ...
    try:
        import html as _html

        def pipe_to_table(md: str) -> str:
            # Remove markers and collapse whitespace.
            md = re.sub(r"<\s*!\s*[^>]*?generated-table[^>]*?>", " ", md, flags=re.IGNORECASE)
            md = re.sub(r"\s+", " ", md).strip()

            # If it looks like the assistant/agent baseline table, parse tokens into rows.
            if '|' in md and ('Primary unit of output' in md or 'Force Multiplication' in md):
                toks = [t.strip() for t in md.split('|')]
                toks = [t for t in toks if t and t not in {'—', '--', '---'}]

                # Ensure a sane header.
                header = ['Dimension', 'Force Multiplication (Assistants)', 'Force Creation (Agents)']

                # If the first token isn't the first dimension label, drop leading junk.
                while toks and toks[0].lower() in {'dimension', 'force multiplication (assistants)', 'force creation (agents)'}:
                    toks = toks[1:]

                # Build rows by grouping into triples.
                rows = []
                for i in range(0, len(toks), 3):
                    chunk = toks[i:i+3]
                    if len(chunk) < 3:
                        break
                    rows.append(chunk)

                if rows:
                    out = ['<div class="table-wrap"><table>']
                    out.append('<thead><tr>' + ''.join(f'<th>{_html.escape(c)}</th>' for c in header) + '</tr></thead>')
                    out.append('<tbody>')
                    for r in rows:
                        out.append('<tr>' + ''.join(f'<td>{_html.escape(c)}</td>' for c in r) + '</tr>')
                    out.append('</tbody></table></div>')
                    return ''.join(out)

            return md

        def table_repl(m: re.Match) -> str:
            raw = m.group(1)
            unesc = _html.unescape(raw)
            return pipe_to_table(unesc)

        body = re.sub(
            r"<p>\s*(&lt;!\s*[^>]*begin:generated-table[^<]*&gt;[\s\S]*?end:generated-table[^<]*&gt;)\s*</p>",
            table_repl,
            body,
            flags=re.IGNORECASE,
        )

        # Convert pandoc's tabular fallback (div.tabular) into a real table.
        def tabular_div_repl(m: re.Match) -> str:
            raw = m.group(1)
            # Replace <br/> with newlines, strip tags.
            txt = re.sub(r"<br\s*/?>", "\n", raw, flags=re.IGNORECASE)
            txt = re.sub(r"<[^>]+>", "", txt)
            txt = _html.unescape(txt)
            raw_lines = [ln.rstrip() for ln in txt.splitlines() if ln.strip()]
            lines = []
            i = 0
            while i < len(raw_lines):
                ln = raw_lines[i].strip()
                # join soft-wrapped lines (pandoc sometimes splits after a '+')
                while ln.endswith('+') and i + 1 < len(raw_lines):
                    ln = (ln[:-1].rstrip() + ' + ' + raw_lines[i + 1].strip())
                    i += 1
                lines.append(ln)
                i += 1
            # drop leading colspec junk lines (often start with p0.26)
            while lines and lines[0].lower().startswith('p') and 'dimension' not in lines[0].lower():
                lines = lines[1:]
            if not lines:
                return m.group(0)

            header = ['Dimension', 'Force Multiplication (Assistants)', 'Force Creation (Agents)']
            rows = []
            for ln in lines:
                parts = [p.strip() for p in ln.split('&')]
                if len(parts) < 3:
                    continue
                if 'dimension' in parts[0].lower() and 'force multiplication' in parts[1].lower():
                    continue
                rows.append(parts[:3])

            if not rows:
                return m.group(0)

            out = ['<div class="table-wrap"><table>']
            out.append('<thead><tr>' + ''.join(f'<th>{_html.escape(c)}</th>' for c in header) + '</tr></thead>')
            out.append('<tbody>')
            for r in rows:
                out.append('<tr>' + ''.join(f'<td>{_html.escape(c)}</td>' for c in r) + '</tr>')
            out.append('</tbody></table></div>')
            return ''.join(out)

        body = re.sub(
            r"<div\s+class=\"tabular\"[^>]*>\s*<p>([\s\S]*?)</p>\s*</div>",
            tabular_div_repl,
            body,
            flags=re.IGNORECASE,
        )
    except Exception:
        pass

    # Pandoc uses <h1> for every section. Our page already has an H1.
    # Downgrade pandoc H1 -> H2 for a sane hierarchy.
    body = re.sub(r"<\s*h1\b", "<h2", body, flags=re.IGNORECASE)
    body = re.sub(r"</\s*h1\s*>", "</h2>", body, flags=re.IGNORECASE)

    # Drop empty paragraphs.
    body = re.sub(r"<p>\s*</p>", "", body, flags=re.IGNORECASE)

    # Drop redundant subtitle lines that duplicate page header description.
    body = re.sub(
        r"\A\s*<p>\s*A\s+white\s+paper\s+on\s+agentic\s+autonomy[\s\S]*?</p>\s*",
        "",
        body,
        flags=re.IGNORECASE,
    )

    # Clean up leading distribution/disclaimer boilerplate blocks.
    body = re.sub(
        r"\A\s*(<p>\s*<span[^>]*>\s*(DISTRIBUTION|DISCLAIMER)[\s\S]*?</p>\s*){1,4}",
        "",
        body,
        flags=re.IGNORECASE,
    )

    # Normalize excessive blank lines.
    body = re.sub(r"\n{3,}", "\n\n", body)

    dst.parent.mkdir(parents=True, exist_ok=True)
    dst.write_text(body.strip() + "\n", "utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
