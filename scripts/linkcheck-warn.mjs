import fs from 'node:fs/promises';
import path from 'node:path';

const WARN_FILE = path.resolve(process.cwd(), 'tmp', 'linkcheck', 'warn-links.txt');
const OUT_DIR = path.resolve(process.cwd(), 'tmp', 'linkcheck');
const ACCEPT = new Set([200, 206, 401, 403, 429]);
const TIMEOUT_MS = 15000;

function withTimeout(ms) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  return { controller, timer };
}

async function checkUrl(url) {
  const attempt = async (method) => {
    const { controller, timer } = withTimeout(TIMEOUT_MS);
    try {
      const res = await fetch(url, {
        method,
        redirect: 'follow',
        signal: controller.signal,
        headers: {
          'user-agent': 'adamboas-site-linkcheck-warn/1.0',
        },
      });
      return {
        ok: ACCEPT.has(res.status),
        status: res.status,
        method,
        finalUrl: res.url,
      };
    } catch (error) {
      return {
        ok: false,
        status: null,
        method,
        finalUrl: null,
        error: error instanceof Error ? error.message : String(error),
      };
    } finally {
      clearTimeout(timer);
    }
  };

  const head = await attempt('HEAD');
  if (head.ok) return head;
  // Many sites reject HEAD; retry GET before deciding.
  const get = await attempt('GET');
  if (get.ok) return get;
  return get.error ? get : head;
}

async function runLimited(items, limit, worker) {
  const results = [];
  let idx = 0;

  async function runner() {
    while (idx < items.length) {
      const current = idx++;
      const item = items[current];
      // eslint-disable-next-line no-await-in-loop
      const value = await worker(item);
      results[current] = value;
    }
  }

  const workers = Array.from({ length: Math.min(limit, items.length || 1) }, () => runner());
  await Promise.all(workers);
  return results;
}

async function main() {
  const raw = await fs.readFile(WARN_FILE, 'utf8').catch(() => '');
  const urls = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!urls.length) {
    console.log('WARN tier: no links to check.');
    return;
  }

  const results = await runLimited(urls, 8, checkUrl);
  const failures = [];

  for (let i = 0; i < urls.length; i += 1) {
    const url = urls[i];
    const r = results[i];
    if (!r?.ok) {
      failures.push({ url, ...r });
    }
  }

  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(
    path.join(OUT_DIR, 'warn-results.json'),
    JSON.stringify({ total: urls.length, failures }, null, 2) + '\n',
    'utf8',
  );

  if (!failures.length) {
    console.log(`WARN tier: all ${urls.length} links accepted.`);
    return;
  }

  console.log(`WARN tier: ${failures.length}/${urls.length} links need review (non-blocking).`);
  for (const failure of failures.slice(0, 30)) {
    console.log(`- ${failure.url}`);
    console.log(`  status=${failure.status ?? 'ERR'} method=${failure.method ?? 'n/a'} final=${failure.finalUrl ?? 'n/a'} ${failure.error ? `error=${failure.error}` : ''}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(0);
});
