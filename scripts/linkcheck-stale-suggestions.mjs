import fs from 'node:fs/promises';
import path from 'node:path';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const OUT_DIR = path.resolve(process.cwd(), 'tmp', 'linkcheck');

const STALE_MAP = {
  'https://www.ausa.org/meetings-events': 'https://www.ausa.org/events/',
  'https://api.sam.gov/opportunities/v2/search': 'https://open.gsa.gov/api/get-opportunities-public-api/',
  'https://weforum.org/agenda/2025/01/amodei-ai-agents': 'https://www.weforum.org/videos/davos-day-3-am25/',
};

async function walkHtmlFiles(dir, out = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkHtmlFiles(full, out);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

function extractUrls(html) {
  const urls = [];
  const pattern = /\b(?:href|src)=(["'])(https?:\/\/[^"']+)\1/gi;
  let match;
  while ((match = pattern.exec(html)) !== null) urls.push(match[2]);
  return urls;
}

function normalize(url) {
  try {
    const parsed = new URL(url);
    parsed.hash = '';
    return parsed.toString().replace(/\/$/, '');
  } catch {
    return url;
  }
}

async function main() {
  const htmlFiles = await walkHtmlFiles(DIST_DIR);
  const findings = [];

  for (const file of htmlFiles) {
    const html = await fs.readFile(file, 'utf8');
    const urls = extractUrls(html);
    for (const url of urls) {
      const normalized = normalize(url);
      for (const [stale, replacement] of Object.entries(STALE_MAP)) {
        if (normalize(stale) === normalized) {
          findings.push({
            file: path.relative(process.cwd(), file),
            stale,
            replacement,
          });
        }
      }
    }
  }

  const unique = [];
  const seen = new Set();
  for (const finding of findings) {
    const key = `${finding.file}|${finding.stale}|${finding.replacement}`;
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(finding);
  }

  await fs.mkdir(OUT_DIR, { recursive: true });

  if (!unique.length) {
    const msg = 'No mapped stale links found in dist HTML.';
    await fs.writeFile(path.join(OUT_DIR, 'stale-suggestions.md'), `${msg}\n`, 'utf8');
    console.log(msg);
    return;
  }

  const lines = [
    '# Stale link remediation suggestions',
    '',
    '| File | Stale URL | Suggested replacement |',
    '|---|---|---|',
    ...unique.map((f) => `| ${f.file} | ${f.stale} | ${f.replacement} |`),
    '',
  ];

  const out = lines.join('\n');
  await fs.writeFile(path.join(OUT_DIR, 'stale-suggestions.md'), out, 'utf8');
  console.log(out);
}

main().catch((err) => {
  console.error(err);
  process.exit(0);
});
