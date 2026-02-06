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
    body = re.sub(r"\A\s*<h1\b[^>]*>.*?</h1>\s*", "", body, flags=re.IGNORECASE | re.DOTALL)

    # Normalize excessive blank lines.
    body = re.sub(r"\n{3,}", "\n\n", body)

    dst.parent.mkdir(parents=True, exist_ok=True)
    dst.write_text(body.strip() + "\n", "utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
