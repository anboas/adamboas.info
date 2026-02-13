import fs from 'node:fs/promises';
import path from 'node:path';

const OUT_PATH = path.join(process.cwd(), 'src', 'generated', 'plausible-pageviews.json');

function normalizePath(p) {
	if (!p) return null;
	let s = String(p).trim();
	if (!s.startsWith('/')) s = '/' + s;
	if (s.length > 1 && s.endsWith('/')) s = s.slice(0, -1);
	return s;
}

async function writeSnapshot({ siteId, dateRange, note, pageviewsByPath = {}, triedSiteIds = [] }) {
	const out = {
		meta: {
			generatedAt: new Date().toISOString(),
			siteId: siteId ?? null,
			dateRange: dateRange ?? null,
			note: note ?? null,
			triedSiteIds,
		},
		pageviewsByPath,
	};
	await fs.mkdir(path.dirname(OUT_PATH), { recursive: true });
	await fs.writeFile(OUT_PATH, JSON.stringify(out, null, 2) + '\n', 'utf-8');
}

function parseResults(data) {
	const rows = Array.isArray(data?.results) ? data.results : [];
	const pageviewsByPath = {};
	for (const r of rows) {
		const rawPath = Array.isArray(r?.dimensions)
			? r.dimensions[0]
			: r?.dimensions?.['event:page'] ?? r?.dimensions?.event?.page ?? r?.dimensions?.page ?? null;
		const pv = Array.isArray(r?.metrics)
			? r.metrics[0]
			: r?.metrics?.pageviews ?? r?.metrics?.['pageviews'] ?? null;
		const key = normalizePath(rawPath);
		if (!key || typeof pv !== 'number') continue;
		pageviewsByPath[key] = pv;
	}
	return pageviewsByPath;
}

async function querySite({ apiKey, siteId, dateRange }) {
	const url = 'https://plausible.io/api/v2/query';
	const body = {
		site_id: siteId,
		metrics: ['pageviews'],
		date_range: dateRange,
		dimensions: ['event:page'],
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
		return {
			ok: false,
			status: res.status,
			statusText: res.statusText,
			errorSnippet: txt.slice(0, 500),
			pageviewsByPath: {},
		};
	}

	const data = await res.json();
	const pageviewsByPath = parseResults(data);
	return {
		ok: true,
		status: res.status,
		statusText: res.statusText,
		pageviewsByPath,
	};
}

async function main() {
	const apiKey = (process.env.PLAUSIBLE_API_KEY || '').trim();
	const configuredSiteId = (process.env.PLAUSIBLE_SITE_ID || '').trim();
	const dateRange = process.env.PLAUSIBLE_DATE_RANGE || '30d';

	if (!apiKey) {
		console.log('Plausible pageviews: missing PLAUSIBLE_API_KEY, writing empty snapshot.');
		await writeSnapshot({ siteId: configuredSiteId, dateRange, note: 'missing api key' });
		return;
	}

	const siteCandidates = [
		configuredSiteId,
		'www.adamboas.com',
		'adamboas.com',
		'anboas.github.io/adamboas.info',
	]
		.map((s) => (s || '').trim())
		.filter(Boolean)
		.filter((s, i, arr) => arr.indexOf(s) === i);

	if (!siteCandidates.length) {
		console.log('Plausible pageviews: no site candidates, writing empty snapshot.');
		await writeSnapshot({ siteId: null, dateRange, note: 'missing site id' });
		return;
	}

	let best = null;
	const failures = [];

	for (const siteId of siteCandidates) {
		const result = await querySite({ apiKey, siteId, dateRange });
		if (!result.ok) {
			failures.push(`${siteId}: ${result.status}`);
			continue;
		}

		const rowCount = Object.keys(result.pageviewsByPath).length;
		const totalViews = Object.values(result.pageviewsByPath).reduce((acc, n) => acc + (typeof n === 'number' ? n : 0), 0);

		if (!best || rowCount > best.rowCount || (rowCount === best.rowCount && totalViews > best.totalViews)) {
			best = {
				siteId,
				rowCount,
				totalViews,
				pageviewsByPath: result.pageviewsByPath,
			};
		}
	}

	if (!best) {
		const note = failures.length ? `api errors: ${failures.join(' | ')}` : 'no successful responses';
		await writeSnapshot({ siteId: configuredSiteId || siteCandidates[0], dateRange, note, triedSiteIds: siteCandidates });
		return;
	}

	await writeSnapshot({
		siteId: best.siteId,
		dateRange,
		note: `ok (${best.rowCount} paths)`, 
		pageviewsByPath: best.pageviewsByPath,
		triedSiteIds: siteCandidates,
	});
	console.log(`Plausible pageviews: selected ${best.siteId} with ${best.rowCount} paths.`);
}

main();
