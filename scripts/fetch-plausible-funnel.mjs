import fs from 'node:fs/promises';
import path from 'node:path';

const OUT_PATH = path.join(process.cwd(), 'src', 'generated', 'plausible-funnel.json');

function parseHostLike(value) {
	const raw = String(value || '').trim();
	if (!raw) return '';
	try {
		return new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`).host;
	} catch {
		return raw;
	}
}

function getSiteCandidates(configuredSiteId) {
	const envHost = parseHostLike(process.env.PUBLIC_SITE_URL);
	return [configuredSiteId, envHost, 'www.adamboas.com', 'adamboas.com', 'anboas.github.io/adamboas.info']
		.map((s) => String(s || '').trim())
		.filter(Boolean)
		.filter((s, i, arr) => arr.indexOf(s) === i);
}

const FUNNEL_EVENTS = [
	'Contact: Intake Click',
	'Contact Form: View',
	'Contact Form: Start',
	'Contact Form: Submit',
	'Contact Form: Success',
	'Contact Form: Error',
	'Contact: Email Click',
];

function normalizePath(p) {
	if (!p) return '/';
	let s = String(p).trim();
	if (!s.startsWith('/')) s = '/' + s;
	if (s.length > 1 && s.endsWith('/')) s = s.slice(0, -1);
	return s;
}

function asMetricValue(value) {
	if (typeof value === 'number') return value;
	if (typeof value === 'string' && value.trim()) {
		const n = Number(value);
		if (Number.isFinite(n)) return n;
	}
	return 0;
}

async function writeSnapshot({ siteId, dateRange, note, eventTotals = {}, byPage = {}, triedSiteIds = [] }) {
	const out = {
		meta: {
			generatedAt: new Date().toISOString(),
			siteId: siteId ?? null,
			dateRange: dateRange ?? null,
			note: note ?? null,
			triedSiteIds,
		},
		eventTotals,
		byPage,
	};
	await fs.mkdir(path.dirname(OUT_PATH), { recursive: true });
	await fs.writeFile(OUT_PATH, JSON.stringify(out, null, 2) + '\n', 'utf-8');
}

function parseDimensions(row) {
	if (Array.isArray(row?.dimensions)) {
		return {
			eventName: String(row.dimensions[0] ?? '').trim(),
			page: String(row.dimensions[1] ?? '').trim(),
		};
	}
	const dims = row?.dimensions ?? {};
	return {
		eventName: String(dims?.['event:name'] ?? dims?.event?.name ?? dims?.name ?? '').trim(),
		page: String(dims?.['event:page'] ?? dims?.event?.page ?? dims?.page ?? '').trim(),
	};
}

function parseMetrics(row) {
	if (Array.isArray(row?.metrics)) return asMetricValue(row.metrics[0]);
	const metrics = row?.metrics ?? {};
	return asMetricValue(metrics?.events ?? metrics?.['events'] ?? 0);
}

function parseResults(data) {
	const rows = Array.isArray(data?.results) ? data.results : [];
	const eventTotals = Object.fromEntries(FUNNEL_EVENTS.map((name) => [name, 0]));
	const byPage = {};

	for (const row of rows) {
		const { eventName, page } = parseDimensions(row);
		if (!eventName || !FUNNEL_EVENTS.includes(eventName)) continue;
		const count = parseMetrics(row);
		if (!count) continue;

		eventTotals[eventName] = (eventTotals[eventName] ?? 0) + count;
		const key = normalizePath(page || '/');
		if (!byPage[key]) byPage[key] = {};
		byPage[key][eventName] = (byPage[key][eventName] ?? 0) + count;
	}

	return { eventTotals, byPage };
}

async function querySite({ apiKey, siteId, dateRange }) {
	const url = 'https://plausible.io/api/v2/query';
	const body = {
		site_id: siteId,
		metrics: ['events'],
		date_range: dateRange,
		dimensions: ['event:name', 'event:page'],
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
			eventTotals: {},
			byPage: {},
		};
	}

	const data = await res.json();
	const parsed = parseResults(data);
	return {
		ok: true,
		status: res.status,
		statusText: res.statusText,
		eventTotals: parsed.eventTotals,
		byPage: parsed.byPage,
	};
}

async function main() {
	const apiKey = (process.env.PLAUSIBLE_API_KEY || '').trim();
	const configuredSiteId = (process.env.PLAUSIBLE_SITE_ID || '').trim();
	const dateRange = process.env.PLAUSIBLE_DATE_RANGE || '30d';

	if (!apiKey) {
		console.log('Plausible funnel: missing PLAUSIBLE_API_KEY, writing empty snapshot.');
		await writeSnapshot({ siteId: configuredSiteId || null, dateRange, note: 'missing api key' });
		return;
	}

	const siteCandidates = getSiteCandidates(configuredSiteId);

	if (!siteCandidates.length) {
		console.log('Plausible funnel: no site candidates, writing empty snapshot.');
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

		const totalEvents = Object.values(result.eventTotals).reduce(
			(sum, n) => sum + (Number.isFinite(n) ? Number(n) : 0),
			0,
		);
		const eventKinds = Object.values(result.eventTotals).filter((n) => Number(n) > 0).length;

		if (!best || totalEvents > best.totalEvents || (totalEvents === best.totalEvents && eventKinds > best.eventKinds)) {
			best = {
				siteId,
				totalEvents,
				eventKinds,
				eventTotals: result.eventTotals,
				byPage: result.byPage,
			};
		}
	}

	if (!best) {
		const note = failures.length ? `api errors: ${failures.join(' | ')}` : 'no successful responses';
		await writeSnapshot({
			siteId: configuredSiteId || siteCandidates[0],
			dateRange,
			note,
			triedSiteIds: siteCandidates,
		});
		return;
	}

	await writeSnapshot({
		siteId: best.siteId,
		dateRange,
		note: `ok (${best.totalEvents} events)`,
		eventTotals: best.eventTotals,
		byPage: best.byPage,
		triedSiteIds: siteCandidates,
	});
	console.log(`Plausible funnel: selected ${best.siteId} with ${best.totalEvents} events.`);
}

main();
