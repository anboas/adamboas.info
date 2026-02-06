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

    # Pandoc uses <h1> for every section. Our page already has an H1.
    # Downgrade pandoc H1 -> H2 for a sane hierarchy.
    body = re.sub(r"<\s*h1\b", "<h2", body, flags=re.IGNORECASE)
    body = re.sub(r"</\s*h1\s*>", "</h2>", body, flags=re.IGNORECASE)

    # Drop empty paragraphs.
    body = re.sub(r"<p>\s*</p>", "", body, flags=re.IGNORECASE)

    # Drop redundant subtitle lines that duplicate page header description.
    body = re.sub(
        r"\A\s*<p>\s*A\s+white\s+paper\s+on\s+agentic\s+autonomy[^<]*</p>\s*",
        "",
        body,
        flags=re.IGNORECASE | re.DOTALL,
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
