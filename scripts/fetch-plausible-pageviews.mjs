import fs from 'node:fs/promises';
import path from 'node:path';

const OUT_PATH = path.join(process.cwd(), 'src', 'generated', 'plausible-pageviews.json');

function normalizePath(p) {
	if (!p) return null;
	// keep leading slash, drop trailing slash (except root)
	let s = String(p).trim();
	if (!s.startsWith('/')) s = '/' + s;
	if (s.length > 1 && s.endsWith('/')) s = s.slice(0, -1);
	return s;
}

async function writeEmpty({ siteId, dateRange, note }) {
	const out = {
		meta: {
			generatedAt: new Date().toISOString(),
			siteId: siteId ?? null,
			dateRange: dateRange ?? null,
			note: note ?? null,
		},
		pageviewsByPath: {},
	};
	await fs.mkdir(path.dirname(OUT_PATH), { recursive: true });
	await fs.writeFile(OUT_PATH, JSON.stringify(out, null, 2) + '\n', 'utf-8');
}

async function main() {
	const apiKey = process.env.PLAUSIBLE_API_KEY;
	const siteId = process.env.PLAUSIBLE_SITE_ID;
	const dateRange = process.env.PLAUSIBLE_DATE_RANGE || '30d';

	if (!apiKey || !siteId) {
		console.log('Plausible pageviews: missing PLAUSIBLE_API_KEY or PLAUSIBLE_SITE_ID, writing empty file.');
		await writeEmpty({ siteId, dateRange, note: 'missing secrets' });
		return;
	}

	try {
		const url = 'https://plausible.io/api/v2/query';
		const body = {
			site_id: siteId,
			metrics: ['pageviews'],
			date_range: dateRange,
			dimensions: ['event:page'],
			// Pull only writing pages to keep the payload small.
			filters: [["contains", "event:page", ["/writing/"]]],
		};

		const res = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${apiKey}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});

		if (!res.ok) {
			const txt = await res.text().catch(() => '');
			console.warn(`Plausible API failed: ${res.status} ${res.statusText}`);
			if (txt) console.warn(txt.slice(0, 800));
			await writeEmpty({ siteId, dateRange, note: `api error ${res.status}` });
			return;
		}

		const data = await res.json();
		const rows = Array.isArray(data?.results) ? data.results : [];

		const pageviewsByPath = {};
		for (const r of rows) {
			const rawPath = r?.dimensions?.['event:page'] ?? r?.dimensions?.event?.page ?? r?.dimensions?.page ?? null;
			const pv = r?.metrics?.pageviews ?? r?.metrics?.['pageviews'] ?? null;
			const key = normalizePath(rawPath);
			if (!key) continue;
			if (typeof pv !== 'number') continue;
			pageviewsByPath[key] = pv;
		}

		const out = {
			meta: {
				generatedAt: new Date().toISOString(),
				siteId,
				dateRange,
			},
			pageviewsByPath,
		};

		await fs.mkdir(path.dirname(OUT_PATH), { recursive: true });
		await fs.writeFile(OUT_PATH, JSON.stringify(out, null, 2) + '\n', 'utf-8');
		console.log(`Wrote ${Object.keys(pageviewsByPath).length} Plausible pageview rows to ${OUT_PATH}`);
	} catch (err) {
		console.warn('Plausible pageviews: unexpected error, writing empty file.');
		console.warn(err);
		await writeEmpty({ siteId, dateRange, note: 'unexpected error' });
	}
}

main();
