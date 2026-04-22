import fs from 'node:fs/promises';
import path from 'node:path';

const OUT_PATH = path.join(process.cwd(), 'src', 'generated', 'plausible-sitemap-analytics.json');
const DEFAULT_SITEMAP_INDEX_URL = 'https://www.adamboas.com/sitemap-index.xml';

const PAGEVIEWS_SNAPSHOT_PATH = path.join(process.cwd(), 'src', 'generated', 'plausible-pageviews.json');

async function loadLocalPageviewsSnapshot() {
	try {
		const raw = await fs.readFile(PAGEVIEWS_SNAPSHOT_PATH, 'utf-8');
		const parsed = JSON.parse(raw);
		const input = parsed?.pageviewsByPath && typeof parsed.pageviewsByPath === 'object' ? parsed.pageviewsByPath : {};
		const pageviewsByPath = {};
		for (const [k, v] of Object.entries(input)) {
			const key = normalizePath(k);
			const n = Number(v);
			if (!key || !Number.isFinite(n)) continue;
			pageviewsByPath[key] = (pageviewsByPath[key] ?? 0) + n;
		}
		return {
			ok: true,
			siteId: parsed?.meta?.siteId ?? null,
			dateRange: parsed?.meta?.dateRange ?? null,
			note: parsed?.meta?.note ?? null,
			pageviewsByPath,
			invalidRows: [],
		};
	} catch {
		return { ok: false };
	}
}

function normalizePath(input) {
	if (!input) return null;
	let s = String(input).trim();
	if (!s) return null;

	if (/https?:\/\//i.test(s)) {
		const match = s.match(/https?:\/\/[^\s]+/i);
		if (match?.[0]) s = match[0];
	}

	if (/^https?:\/\//i.test(s)) {
		try {
			const u = new URL(s);
			s = u.pathname || '/';
		} catch {
			return null;
		}
	}

	if (!s.startsWith('/')) s = `/${s}`;
	s = s.replace(/\s+/g, '');

	if (s.startsWith('/adamboas.info/')) s = s.slice('/adamboas.info'.length);
	if (s === '/adamboas.info') s = '/';

	if (s.length > 1 && s.endsWith('/')) s = s.slice(0, -1);
	return s || '/';
}

function pathVariants(input) {
	const key = normalizePath(input);
	if (!key) return [];
	const out = new Set([key]);

	if (key.startsWith('/adamboas.info/')) out.add(key.slice('/adamboas.info'.length));
	if (key !== '/' && !key.startsWith('/adamboas.info/')) out.add(`/adamboas.info${key}`);
	if (key === '/') out.add('/adamboas.info');

	return [...out];
}

function parseLocs(xmlText) {
	const locs = [];
	const re = /<loc>([^<]+)<\/loc>/gi;
	let m;
	while ((m = re.exec(xmlText)) !== null) {
		const value = String(m[1] || '').trim();
		if (value) locs.push(value);
	}
	return locs;
}

async function fetchText(url) {
	const res = await fetch(url);
	if (!res.ok) {
		const txt = await res.text().catch(() => '');
		throw new Error(`${url} -> ${res.status} ${res.statusText} ${txt.slice(0, 180)}`);
	}
	return await res.text();
}

async function loadSitemapPaths(indexUrl) {
	const indexXml = await fetchText(indexUrl);
	const indexLocs = parseLocs(indexXml);

	const sitemapUrls = indexLocs.length ? indexLocs : [indexUrl];
	const seenPages = new Set();
	const sitemapFiles = [];

	for (const sitemapUrl of sitemapUrls) {
		sitemapFiles.push(sitemapUrl);
		const xml = await fetchText(sitemapUrl);
		for (const loc of parseLocs(xml)) {
			const p = normalizePath(loc);
			if (p) seenPages.add(p);
		}
	}

	return {
		sitemapFiles,
		sitemapPaths: [...seenPages].sort((a, b) => a.localeCompare(b)),
	};
}

function parseResults(data) {
	const rows = Array.isArray(data?.results) ? data.results : [];
	const pageviewsByPath = {};
	const invalidRows = [];

	for (const row of rows) {
		const rawPath = Array.isArray(row?.dimensions)
			? row.dimensions[0]
			: row?.dimensions?.['event:page'] ?? row?.dimensions?.event?.page ?? row?.dimensions?.page ?? null;
		const pv = Array.isArray(row?.metrics)
			? row.metrics[0]
			: row?.metrics?.pageviews ?? row?.metrics?.['pageviews'] ?? null;
		if (typeof pv !== 'number') continue;

		const key = normalizePath(rawPath);
		if (!key) {
			invalidRows.push({ path: String(rawPath ?? ''), pageviews: pv });
			continue;
		}

		pageviewsByPath[key] = (pageviewsByPath[key] ?? 0) + pv;
	}

	return { pageviewsByPath, invalidRows };
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
			invalidRows: [],
		};
	}

	const data = await res.json();
	const parsed = parseResults(data);
	return {
		ok: true,
		status: res.status,
		statusText: res.statusText,
		pageviewsByPath: parsed.pageviewsByPath,
		invalidRows: parsed.invalidRows,
	};
}

function rankByViews(entries, limit = 50) {
	return [...entries].sort((a, b) => b.pageviews - a.pageviews || a.path.localeCompare(b.path)).slice(0, limit);
}

async function writeSnapshot(payload) {
	await fs.mkdir(path.dirname(OUT_PATH), { recursive: true });
	await fs.writeFile(OUT_PATH, JSON.stringify(payload, null, 2) + '\n', 'utf-8');
}

async function main() {
	const apiKey = (process.env.PLAUSIBLE_API_KEY || '').trim();
	const configuredSiteId = (process.env.PLAUSIBLE_SITE_ID || '').trim();
	const dateRange = process.env.PLAUSIBLE_DATE_RANGE || '30d';
	const sitemapIndexUrl = (process.env.PLAUSIBLE_SITEMAP_INDEX_URL || DEFAULT_SITEMAP_INDEX_URL).trim();

	if (!apiKey) {
		const local = await loadLocalPageviewsSnapshot();
		if (!local.ok) {
			await writeSnapshot({
				meta: {
					generatedAt: new Date().toISOString(),
					siteId: configuredSiteId || null,
					dateRange,
					note: 'missing api key',
					triedSiteIds: [],
					sitemapIndexUrl,
				},
				summary: {
					totalSitemapPages: 0,
					pagesWithViews: 0,
					coveragePct: 0,
					totalPageviewsOnSitemap: 0,
					totalTrackedPaths: 0,
					trackedOffSitemapCount: 0,
				},
				rows: {
					topSitemap: [],
					zeroViewSitemap: [],
					offSitemap: [],
					invalidTrackedPaths: [],
				},
			});
			console.log('Plausible sitemap analytics: missing PLAUSIBLE_API_KEY and no local snapshot.');
			return;
		}

		process.env.PLAUSIBLE_DATE_RANGE = local.dateRange || dateRange;
		const syntheticSite = local.siteId || configuredSiteId || null;
		const syntheticResult = {
			siteId: syntheticSite,
			pageviewsByPath: local.pageviewsByPath,
			invalidRows: local.invalidRows || [],
		};

		// Continue pipeline using local snapshot as best result
		const _apiKeyBypassed = true;
		globalThis.__PLAUSIBLE_SITEMAP_LOCAL = {
			result: syntheticResult,
			note: `local pageviews snapshot fallback (${local.note || 'no note'})`,
			dateRange: local.dateRange || dateRange,
		};
	}

	let sitemapPaths = [];
	let sitemapFiles = [];
	let sitemapLoadError = null;
	try {
		const loaded = await loadSitemapPaths(sitemapIndexUrl);
		sitemapPaths = loaded.sitemapPaths;
		sitemapFiles = loaded.sitemapFiles;
	} catch (err) {
		sitemapLoadError = err instanceof Error ? err.message : String(err);
	}


	const localFallback = globalThis.__PLAUSIBLE_SITEMAP_LOCAL ?? null;
	if (localFallback?.result?.pageviewsByPath) {
		const best = {
			siteId: localFallback.result.siteId,
			rowCount: Object.keys(localFallback.result.pageviewsByPath).length,
			totalViews: Object.values(localFallback.result.pageviewsByPath).reduce((sum, n) => sum + (typeof n === 'number' ? n : 0), 0),
			pageviewsByPath: localFallback.result.pageviewsByPath,
			invalidRows: localFallback.result.invalidRows || [],
		};

		const trackedEntries = Object.entries(best.pageviewsByPath).map(([pathKey, pageviews]) => ({ path: pathKey, pageviews: Number(pageviews) || 0 }));
		const trackedMap = new Map(trackedEntries.map((x) => [x.path, x.pageviews]));
		const sitemapRows = sitemapPaths.map((sPath) => {
			let pv = 0;
			for (const variant of pathVariants(sPath)) {
				if (trackedMap.has(variant)) {
					pv = Number(trackedMap.get(variant) || 0);
					break;
				}
			}
			return { path: sPath, pageviews: pv };
		});

		const sitemapSet = new Set(sitemapPaths);
		const offSitemap = trackedEntries.filter(({ path }) => {
			for (const variant of pathVariants(path)) {
				if (sitemapSet.has(variant)) return false;
			}
			return true;
		});

		const pagesWithViews = sitemapRows.filter((row) => row.pageviews > 0).length;
		const totalSitemapPages = sitemapRows.length;
		const totalPageviewsOnSitemap = sitemapRows.reduce((sum, row) => sum + row.pageviews, 0);
		const coveragePct = totalSitemapPages ? Number(((pagesWithViews / totalSitemapPages) * 100).toFixed(1)) : 0;

		await writeSnapshot({
			meta: {
				generatedAt: new Date().toISOString(),
				siteId: best.siteId,
				dateRange: localFallback.dateRange || dateRange,
				note: localFallback.note,
				triedSiteIds: [],
				sitemapIndexUrl,
				sitemapLoadError,
				sitemapFiles,
			},
			summary: {
				totalSitemapPages,
				pagesWithViews,
				coveragePct,
				totalPageviewsOnSitemap,
				totalTrackedPaths: trackedEntries.length,
				trackedOffSitemapCount: offSitemap.length,
			},
			rows: {
				topSitemap: rankByViews(sitemapRows.filter((row) => row.pageviews > 0), 50),
				zeroViewSitemap: sitemapRows.filter((row) => row.pageviews === 0).slice(0, 250),
				offSitemap: rankByViews(offSitemap, 80),
				invalidTrackedPaths: best.invalidRows.slice(0, 80),
			},
		});
		console.log(`Plausible sitemap analytics: fallback snapshot ${pagesWithViews}/${totalSitemapPages}.`);
		return;
	}

	const siteCandidates = [configuredSiteId, 'www.adamboas.com', 'adamboas.com', 'anboas.github.io/adamboas.info']
		.map((s) => (s || '').trim())
		.filter(Boolean)
		.filter((s, i, arr) => arr.indexOf(s) === i);

	let best = null;
	const failures = [];
	for (const siteId of siteCandidates) {
		const result = await querySite({ apiKey, siteId, dateRange });
		if (!result.ok) {
			failures.push(`${siteId}: ${result.status}`);
			continue;
		}

		const rowCount = Object.keys(result.pageviewsByPath).length;
		const totalViews = Object.values(result.pageviewsByPath).reduce((sum, n) => sum + (typeof n === 'number' ? n : 0), 0);

		if (!best || rowCount > best.rowCount || (rowCount === best.rowCount && totalViews > best.totalViews)) {
			best = {
				siteId,
				rowCount,
				totalViews,
				pageviewsByPath: result.pageviewsByPath,
				invalidRows: result.invalidRows,
			};
		}
	}

	if (!best) {
		await writeSnapshot({
			meta: {
				generatedAt: new Date().toISOString(),
				siteId: configuredSiteId || siteCandidates[0] || null,
				dateRange,
				note: failures.length ? `api errors: ${failures.join(' | ')}` : 'no successful responses',
				triedSiteIds: siteCandidates,
				sitemapIndexUrl,
				sitemapLoadError,
				sitemapFiles,
			},
			summary: {
				totalSitemapPages: sitemapPaths.length,
				pagesWithViews: 0,
				coveragePct: 0,
				totalPageviewsOnSitemap: 0,
				totalTrackedPaths: 0,
				trackedOffSitemapCount: 0,
			},
			rows: {
				topSitemap: [],
				zeroViewSitemap: sitemapPaths.slice(0, 250).map((p) => ({ path: p, pageviews: 0 })),
				offSitemap: [],
				invalidTrackedPaths: [],
			},
		});
		return;
	}

	const trackedPaths = best.pageviewsByPath;
	const trackedEntries = Object.entries(trackedPaths).map(([pathKey, pageviews]) => ({ path: pathKey, pageviews: Number(pageviews) || 0 }));
	const trackedMap = new Map(trackedEntries.map((x) => [x.path, x.pageviews]));

	const sitemapRows = sitemapPaths.map((sPath) => {
		let pv = 0;
		for (const variant of pathVariants(sPath)) {
			if (trackedMap.has(variant)) {
				pv = Number(trackedMap.get(variant) || 0);
				break;
			}
		}
		return { path: sPath, pageviews: pv };
	});

	const sitemapSet = new Set(sitemapPaths);
	const offSitemap = trackedEntries.filter(({ path }) => {
		for (const variant of pathVariants(path)) {
			if (sitemapSet.has(variant)) return false;
		}
		return true;
	});

	const pagesWithViews = sitemapRows.filter((row) => row.pageviews > 0).length;
	const totalSitemapPages = sitemapRows.length;
	const totalPageviewsOnSitemap = sitemapRows.reduce((sum, row) => sum + row.pageviews, 0);
	const coveragePct = totalSitemapPages ? Number(((pagesWithViews / totalSitemapPages) * 100).toFixed(1)) : 0;

	const payload = {
		meta: {
			generatedAt: new Date().toISOString(),
			siteId: best.siteId,
			dateRange,
			note: `ok (${best.rowCount} tracked paths)` ,
			triedSiteIds: siteCandidates,
			sitemapIndexUrl,
			sitemapLoadError,
			sitemapFiles,
		},
		summary: {
			totalSitemapPages,
			pagesWithViews,
			coveragePct,
			totalPageviewsOnSitemap,
			totalTrackedPaths: trackedEntries.length,
			trackedOffSitemapCount: offSitemap.length,
		},
		rows: {
			topSitemap: rankByViews(sitemapRows.filter((row) => row.pageviews > 0), 50),
			zeroViewSitemap: sitemapRows.filter((row) => row.pageviews === 0).slice(0, 250),
			offSitemap: rankByViews(offSitemap, 80),
			invalidTrackedPaths: best.invalidRows.slice(0, 80),
		},
	};

	await writeSnapshot(payload);
	console.log(`Plausible sitemap analytics: ${best.siteId}, ${pagesWithViews}/${totalSitemapPages} sitemap pages with views.`);
}

main();
