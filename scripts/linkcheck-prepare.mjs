import fs from 'node:fs/promises';
import path from 'node:path';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const OUT_DIR = path.resolve(process.cwd(), 'tmp', 'linkcheck');

const ACCEPTED_PROTOCOLS = new Set(['http:', 'https:']);

const POLICY = {
  warnDomains: [
    'api.sam.gov',
    'asdevents.com',
    'same.org',
    'weforum.org',
    'usace.army.mil',
    'calendar.google.com',
    'ausa.org',
    'xponential.org',
    'hilton.com',
  ],
  ignoreDomains: [
    'adamboas.info',
    'www.adamboas.com',
    'adamboas.com',
    'linkedin.com',
    'www.linkedin.com',
    'newyorker.com',
    'www.newyorker.com',
    'dodcio.defense.gov',
    'media.defense.gov',
    'esd.whs.mil',
    'www.esd.whs.mil',
  ],
  ignoreRegex: [
    /^mailto:/i,
    /^https:\/\/www\.linkedin\.com\/posts\//i,
    /^https:\/\/(www\.)?newyorker\.com\/tech\/annals-of-technology\/why-a-i-didnt-transform-our-lives-in-2025/i,
    /^https:\/\/(www\.)?weforum\.org\/agenda\/2025\/01\/amodei-ai-agents\/?$/i,
    /^https:\/\/openai\.com\/blog\/reflections\/?$/i,
  ],
};

function normalizeHost(hostname) {
  return hostname.toLowerCase().replace(/^www\./, '');
}

function domainMatches(hostname, rule) {
  const host = normalizeHost(hostname);
  const target = normalizeHost(rule);
  return host === target || host.endsWith(`.${target}`);
}

function classifyUrl(rawUrl) {
  for (const pattern of POLICY.ignoreRegex) {
    if (pattern.test(rawUrl)) return 'ignore';
  }

  let parsed;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return 'ignore';
  }

  if (!ACCEPTED_PROTOCOLS.has(parsed.protocol)) return 'ignore';

  if (POLICY.ignoreDomains.some((rule) => domainMatches(parsed.hostname, rule))) return 'ignore';
  if (POLICY.warnDomains.some((rule) => domainMatches(parsed.hostname, rule))) return 'warn';
  return 'strict';
}

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
  while ((match = pattern.exec(html)) !== null) {
    urls.push(match[2]);
  }
  return urls;
}

async function main() {
  const htmlFiles = await walkHtmlFiles(DIST_DIR);
  const strictSet = new Set();
  const warnSet = new Set();
  const ignoreSet = new Set();

  for (const file of htmlFiles) {
    const html = await fs.readFile(file, 'utf8');
    const links = extractUrls(html);
    for (const link of links) {
      const tier = classifyUrl(link);
      if (tier === 'strict') strictSet.add(link);
      else if (tier === 'warn') warnSet.add(link);
      else ignoreSet.add(link);
    }
  }

  await fs.mkdir(OUT_DIR, { recursive: true });

  const strictLinks = [...strictSet].sort();
  const warnLinks = [...warnSet].sort();
  const ignoreLinks = [...ignoreSet].sort();

  await fs.writeFile(path.join(OUT_DIR, 'strict-links.txt'), strictLinks.join('\n') + '\n', 'utf8');
  await fs.writeFile(path.join(OUT_DIR, 'warn-links.txt'), warnLinks.join('\n') + '\n', 'utf8');
  await fs.writeFile(path.join(OUT_DIR, 'ignored-links.txt'), ignoreLinks.join('\n') + '\n', 'utf8');

  const summary = {
    htmlFiles: htmlFiles.length,
    strict: strictLinks.length,
    warn: warnLinks.length,
    ignored: ignoreLinks.length,
    generatedAt: new Date().toISOString(),
  };

  await fs.writeFile(path.join(OUT_DIR, 'summary.json'), JSON.stringify(summary, null, 2) + '\n', 'utf8');

  console.log(`Prepared linkcheck sets: strict=${summary.strict}, warn=${summary.warn}, ignored=${summary.ignored}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
