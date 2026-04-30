import fs from 'node:fs/promises';
import path from 'node:path';

const OUT_PATH = path.join(process.cwd(), 'src', 'generated', 'plausible-sitemap-analytics.json');
const PAGEVIEWS_SNAPSHOT_PATH = path.join(process.cwd(), 'src', 'generated', 'plausible-pageviews.json');

function normalizeOrigin(value) {
	const raw = String(value || '').trim();
	if (!raw) return null;
	try {
		return new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`).origin;
	} catch {
		return null;
	}
}

const DEFAULT_SITE_ORIGIN =
	normalizeOrigin(process.env.PUBLIC_SITE_URL) ||
	normalizeOrigin(process.env.PLAUSIBLE_SITE_ID) ||
	'https://www.adamboas.com';
const DEFAULT_SITEMAP_INDEX_URL = `${DEFAULT_SITE_ORIGIN}/sitemap-index.xml`;

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

function rankByViews(entries, limit = 50) {
	return [...entries].sort((a, b) => b.pageviews - a.pageviews || a.path.localeCompare(b.path)).slice(0, limit);
}

function dayCountFromRange(dateRange) {
	const m = /^\s*(\d+)d\s*$/i.exec(String(dateRange || ''));
	if (!m) return null;
	const days = Number(m[1]);
	return Number.isFinite(days) && days > 0 ? days : null;
}

function emptyTrendWindow(range, label) {
	return { range, label, pageviews: null, perDay: null, status: 'missing' };
}

function defaultTrends(note = null) {
	return {
		mode: 'none',
		note,
		windows: [emptyTrendWindow('7d', '7d'), emptyTrendWindow('30d', '30d'), emptyTrendWindow('90d', '90d')],
		momentum: {
			last7vsPrev23Pct: null,
			last30vsPrev60Pct: null,
		},
	};
}

function sectionKey(routePath) {
	if (routePath === '/') return 'home';
	if (routePath.startsWith('/writing/tags')) return 'writing/tags';
	const first = routePath.split('/').filter(Boolean)[0];
	return first || 'home';
}

function asPageviews(input) {
	const n = Number(input);
	return Number.isFinite(n) ? n : 0;
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

function parsePathRows(data) {
	const rows = Array.isArray(data?.results) ? data.results : [];
	const pageviewsByPath = {};
	const invalidRows = [];

	for (const row of rows) {
		const rawPath = Array.isArray(row?.dimensions)
			? row.dimensions[0]
			: (row?.dimensions?.['event:page'] ?? row?.dimensions?.event?.page ?? row?.dimensions?.page ?? null);
		const pv = Array.isArray(row?.metrics)
			? row.metrics[0]
			: (row?.metrics?.pageviews ?? row?.metrics?.['pageviews'] ?? null);
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

function parseTotalPageviews(data) {
	const rows = Array.isArray(data?.results) ? data.results : [];
	if (!rows.length) return 0;

	let total = 0;
	for (const row of rows) {
		if (Array.isArray(row?.metrics)) {
			total += asPageviews(row.metrics[0] ?? 0);
			continue;
		}
		total += asPageviews(row?.metrics?.pageviews ?? row?.metrics?.['pageviews'] ?? 0);
	}

	if (total > 0) return total;

	if (typeof data?.results?.pageviews === 'number') return data.results.pageviews;
	if (typeof data?.results?.[0]?.pageviews === 'number') return data.results[0].pageviews;
	return 0;
}

async function queryPageviewsByPath({ apiKey, siteId, dateRange }) {
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
	const parsed = parsePathRows(data);
	return {
		ok: true,
		status: res.status,
		statusText: res.statusText,
		pageviewsByPath: parsed.pageviewsByPath,
		invalidRows: parsed.invalidRows,
	};
}

async function queryTotalPageviews({ apiKey, siteId, dateRange }) {
	const url = 'https://plausible.io/api/v2/query';
	const body = {
		site_id: siteId,
		metrics: ['pageviews'],
		date_range: dateRange,
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
			errorSnippet: txt.slice(0, 300),
			pageviews: null,
		};
	}

	const data = await res.json();
	return {
		ok: true,
		status: res.status,
		statusText: res.statusText,
		pageviews: parseTotalPageviews(data),
	};
}

function buildModel({ sitemapPaths, pageviewsByPath, invalidRows }) {
	const trackedEntries = Object.entries(pageviewsByPath || {}).map(([pathKey, pageviews]) => ({
		path: pathKey,
		pageviews: asPageviews(pageviews),
	}));

	const trackedMap = new Map(trackedEntries.map((x) => [x.path, x.pageviews]));
	const sitemapRows = sitemapPaths.map((sPath) => {
		let pv = 0;
		for (const variant of pathVariants(sPath)) {
			if (trackedMap.has(variant)) {
				pv = asPageviews(trackedMap.get(variant));
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

	const viewedSitemap = rankByViews(
		sitemapRows.filter((row) => row.pageviews > 0),
		500,
	);
	const paretoTop = [];
	let running = 0;
	for (const [idx, row] of viewedSitemap.slice(0, 24).entries()) {
		running += row.pageviews;
		const sharePct = totalPageviewsOnSitemap ? Number(((row.pageviews / totalPageviewsOnSitemap) * 100).toFixed(1)) : 0;
		const cumulativePct = totalPageviewsOnSitemap ? Number(((running / totalPageviewsOnSitemap) * 100).toFixed(1)) : 0;
		paretoTop.push({
			rank: idx + 1,
			path: row.path,
			pageviews: row.pageviews,
			sharePct,
			cumulativePct,
		});
	}

	const sectionMap = new Map();
	for (const row of sitemapRows) {
		const key = sectionKey(row.path);
		if (!sectionMap.has(key)) {
			sectionMap.set(key, {
				section: key,
				totalRoutes: 0,
				routesWithViews: 0,
				totalViews: 0,
			});
		}
		const agg = sectionMap.get(key);
		agg.totalRoutes += 1;
		agg.totalViews += row.pageviews;
		if (row.pageviews > 0) agg.routesWithViews += 1;
	}

	const sectionRows = [...sectionMap.values()];
	const maxSectionViews = sectionRows.reduce((max, row) => Math.max(max, row.totalViews), 0);
	const sectionHeatmap = sectionRows
		.map((row) => {
			const coveragePctSection = row.totalRoutes
				? Number(((row.routesWithViews / row.totalRoutes) * 100).toFixed(1))
				: 0;
			const viewsSharePct = totalPageviewsOnSitemap
				? Number(((row.totalViews / totalPageviewsOnSitemap) * 100).toFixed(1))
				: 0;
			const intensity = maxSectionViews ? Number(((row.totalViews / maxSectionViews) * 100).toFixed(1)) : 0;
			return {
				section: row.section,
				totalRoutes: row.totalRoutes,
				routesWithViews: row.routesWithViews,
				totalViews: row.totalViews,
				coveragePct: coveragePctSection,
				viewsSharePct,
				intensity,
			};
		})
		.sort((a, b) => b.totalViews - a.totalViews || a.section.localeCompare(b.section))
		.slice(0, 24);

	const offTotalViews = offSitemap.reduce((sum, row) => sum + row.pageviews, 0);
	const offMax = offSitemap.reduce((max, row) => Math.max(max, row.pageviews), 0);
	const offSitemapRisk = rankByViews(offSitemap, 40).map((row) => {
		const maxShare = offMax ? row.pageviews / offMax : 0;
		const poolShare = offTotalViews ? row.pageviews / offTotalViews : 0;
		const riskScore = Math.round(maxShare * 70 + poolShare * 30);
		const tier = riskScore >= 60 ? 'high' : riskScore >= 25 ? 'medium' : 'low';
		return {
			path: row.path,
			pageviews: row.pageviews,
			sharePct: offTotalViews ? Number((poolShare * 100).toFixed(1)) : 0,
			riskScore,
			tier,
		};
	});

	return {
		summary: {
			totalSitemapPages,
			pagesWithViews,
			coveragePct,
			totalPageviewsOnSitemap,
			totalTrackedPaths: trackedEntries.length,
			trackedOffSitemapCount: offSitemap.length,
		},
		rows: {
			topSitemap: rankByViews(
				sitemapRows.filter((row) => row.pageviews > 0),
				80,
			),
			zeroViewSitemap: sitemapRows.filter((row) => row.pageviews === 0).slice(0, 300),
			offSitemap: rankByViews(offSitemap, 120),
			invalidTrackedPaths: (invalidRows || []).slice(0, 80),
		},
		insights: {
			paretoTop,
			sectionHeatmap,
			offSitemapRisk,
		},
	};
}

function momentumPct(currentPerDay, previousPerDay) {
	if (!Number.isFinite(currentPerDay) || !Number.isFinite(previousPerDay) || previousPerDay <= 0) return null;
	return Number((((currentPerDay - previousPerDay) / previousPerDay) * 100).toFixed(1));
}

async function buildLiveTrends({ apiKey, siteId }) {
	const windows = [];
	for (const range of ['7d', '30d', '90d']) {
		const result = await queryTotalPageviews({ apiKey, siteId, dateRange: range });
		if (!result.ok || !Number.isFinite(result.pageviews)) {
			windows.push({ ...emptyTrendWindow(range, range), status: 'error' });
			continue;
		}
		const days = dayCountFromRange(range) || 1;
		windows.push({
			range,
			label: range,
			pageviews: result.pageviews,
			perDay: Number((result.pageviews / days).toFixed(2)),
			status: 'ok',
		});
	}

	const byRange = Object.fromEntries(windows.map((w) => [w.range, w]));
	const v7 = byRange['7d']?.pageviews;
	const v30 = byRange['30d']?.pageviews;
	const v90 = byRange['90d']?.pageviews;

	const current7PerDay = Number.isFinite(v7) ? v7 / 7 : null;
	const prev23PerDay = Number.isFinite(v30) && Number.isFinite(v7) ? (v30 - v7) / 23 : null;
	const current30PerDay = Number.isFinite(v30) ? v30 / 30 : null;
	const prev60PerDay = Number.isFinite(v90) && Number.isFinite(v30) ? (v90 - v30) / 60 : null;

	const hasLive = windows.some((w) => Number.isFinite(w.pageviews));
	return {
		mode: hasLive ? 'live' : 'none',
		note: hasLive ? 'Live Plausible totals for 7d/30d/90d windows.' : 'Trend data unavailable from API.',
		windows,
		momentum: {
			last7vsPrev23Pct: momentumPct(current7PerDay, prev23PerDay),
			last30vsPrev60Pct: momentumPct(current30PerDay, prev60PerDay),
		},
	};
}

function buildFallbackTrends({ dateRange, totalViews, note }) {
	const trends = defaultTrends(`Fallback from local snapshot: ${note || 'no note'}`);
	const range = String(dateRange || '')
		.trim()
		.toLowerCase();
	const idx = trends.windows.findIndex((w) => w.range === range);
	const days = dayCountFromRange(range);
	if (idx >= 0 && Number.isFinite(totalViews) && days) {
		trends.windows[idx] = {
			range,
			label: range,
			pageviews: totalViews,
			perDay: Number((totalViews / days).toFixed(2)),
			status: 'fallback',
		};
		trends.mode = 'fallback';
	}
	return trends;
}

function getSiteCandidates(configuredSiteId) {
	const envSite = String(process.env.PUBLIC_SITE_URL || '').trim();
	let envHost = '';
	if (envSite) {
		try {
			envHost = new URL(/^https?:\/\//i.test(envSite) ? envSite : `https://${envSite}`).host;
		} catch {
			envHost = envSite;
		}
	}

	return [configuredSiteId, envHost, 'www.adamboas.com', 'adamboas.com', 'anboas.github.io/adamboas.info']
		.map((s) => String(s || '').trim())
		.filter(Boolean)
		.filter((s, i, arr) => arr.indexOf(s) === i);
}

async function writeSnapshot(payload) {
	await fs.mkdir(path.dirname(OUT_PATH), { recursive: true });
	await fs.writeFile(OUT_PATH, JSON.stringify(payload, null, 2) + '\n', 'utf-8');
}

function emptyPayload({ siteId, dateRange, note, triedSiteIds, sitemapIndexUrl, sitemapLoadError, sitemapFiles }) {
	return {
		meta: {
			generatedAt: new Date().toISOString(),
			siteId: siteId || null,
			dateRange: dateRange || null,
			note,
			triedSiteIds: triedSiteIds || [],
			sitemapIndexUrl,
			sitemapLoadError: sitemapLoadError || null,
			sitemapFiles: sitemapFiles || [],
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
		insights: {
			paretoTop: [],
			sectionHeatmap: [],
			offSitemapRisk: [],
		},
		trends: defaultTrends(),
	};
}

async function main() {
	const apiKey = String(process.env.PLAUSIBLE_API_KEY || '').trim();
	const configuredSiteId = String(process.env.PLAUSIBLE_SITE_ID || '').trim();
	const dateRange = String(process.env.PLAUSIBLE_DATE_RANGE || '30d').trim();
	const sitemapIndexUrl = String(process.env.PLAUSIBLE_SITEMAP_INDEX_URL || DEFAULT_SITEMAP_INDEX_URL).trim();

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

	if (!apiKey) {
		const local = await loadLocalPageviewsSnapshot();
		if (!local.ok) {
			await writeSnapshot(
				emptyPayload({
					siteId: configuredSiteId || null,
					dateRange,
					note: 'missing api key and no local snapshot',
					triedSiteIds: [],
					sitemapIndexUrl,
					sitemapLoadError,
					sitemapFiles,
				}),
			);
			console.log('Plausible sitemap analytics: missing PLAUSIBLE_API_KEY and no local snapshot.');
			return;
		}

		const model = buildModel({
			sitemapPaths,
			pageviewsByPath: local.pageviewsByPath,
			invalidRows: local.invalidRows,
		});
		const totalViews = Object.values(local.pageviewsByPath || {}).reduce((sum, n) => sum + asPageviews(n), 0);
		const payload = {
			meta: {
				generatedAt: new Date().toISOString(),
				siteId: local.siteId || configuredSiteId || null,
				dateRange: local.dateRange || dateRange,
				note: `local pageviews snapshot fallback (${local.note || 'no note'})`,
				triedSiteIds: [],
				sitemapIndexUrl,
				sitemapLoadError,
				sitemapFiles,
			},
			...model,
			trends: buildFallbackTrends({ dateRange: local.dateRange || dateRange, totalViews, note: local.note }),
		};

		await writeSnapshot(payload);
		console.log(
			`Plausible sitemap analytics: fallback snapshot ${model.summary.pagesWithViews}/${model.summary.totalSitemapPages}.`,
		);
		return;
	}

	const siteCandidates = getSiteCandidates(configuredSiteId);
	if (!siteCandidates.length) {
		await writeSnapshot(
			emptyPayload({
				siteId: null,
				dateRange,
				note: 'no Plausible site candidates',
				triedSiteIds: [],
				sitemapIndexUrl,
				sitemapLoadError,
				sitemapFiles,
			}),
		);
		return;
	}

	let best = null;
	const failures = [];
	for (const siteId of siteCandidates) {
		const result = await queryPageviewsByPath({ apiKey, siteId, dateRange });
		if (!result.ok) {
			failures.push(`${siteId}: ${result.status}`);
			continue;
		}

		const rowCount = Object.keys(result.pageviewsByPath).length;
		const totalViews = Object.values(result.pageviewsByPath).reduce((sum, n) => sum + asPageviews(n), 0);
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
		await writeSnapshot(
			emptyPayload({
				siteId: configuredSiteId || siteCandidates[0] || null,
				dateRange,
				note: failures.length ? `api errors: ${failures.join(' | ')}` : 'no successful responses',
				triedSiteIds: siteCandidates,
				sitemapIndexUrl,
				sitemapLoadError,
				sitemapFiles,
			}),
		);
		return;
	}

	const model = buildModel({
		sitemapPaths,
		pageviewsByPath: best.pageviewsByPath,
		invalidRows: best.invalidRows,
	});
	const trends = await buildLiveTrends({ apiKey, siteId: best.siteId });

	const payload = {
		meta: {
			generatedAt: new Date().toISOString(),
			siteId: best.siteId,
			dateRange,
			note: `ok (${best.rowCount} tracked paths)`,
			triedSiteIds: siteCandidates,
			sitemapIndexUrl,
			sitemapLoadError,
			sitemapFiles,
		},
		...model,
		trends,
	};

	await writeSnapshot(payload);
	console.log(
		`Plausible sitemap analytics: ${best.siteId}, ${model.summary.pagesWithViews}/${model.summary.totalSitemapPages} sitemap pages with views.`,
	);
}

main();
