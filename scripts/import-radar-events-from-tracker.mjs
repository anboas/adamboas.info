import fs from 'node:fs';
import path from 'node:path';

const root = '/home/anboas/clawd';
const trackerPath = path.join(root, 'external/government-guide/conference-tracker/index.html');
const locationsPath = path.join(root, 'external/government-guide/conference-tracker/locations.json');
const eventsTsPath = path.join(root, 'adamboas-site/src/data/radar/events.ts');
const outJsonPath = path.join(root, 'adamboas-site/src/data/radar/events-candidates-2026-02-13.json');
const outMdPath = path.join(root, 'adamboas-site/src/data/radar/events-candidates-2026-02-13.md');

const html = fs.readFileSync(trackerPath, 'utf8');
const blockMatch = html.match(/const EVENTS = \[(.*?)\];\n\nconst STATE/s);
if (!blockMatch) throw new Error('Could not locate EVENTS block in conference-tracker index.html');
const trackerEvents = Function(`return [${blockMatch[1]}];`)();

const locations = JSON.parse(fs.readFileSync(locationsPath, 'utf8')).locations || {};
const existingTs = fs.readFileSync(eventsTsPath, 'utf8');

const normalize = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

const existingTitleSet = new Set(
	[...existingTs.matchAll(/title:\s*'((?:\\'|[^'])*)'/g)].map((m) => normalize(m[1].replace(/\\'/g, "'")))
);
const existingIdSet = new Set([...existingTs.matchAll(/id:\s*'([^']+)'/g)].map((m) => m[1]));

const statusPriority = { Upcoming: 3, Projected: 2, 'Needs Date': 1, Past: 0 };

function normalizeStatus(status) {
	const s = String(status || '').toLowerCase().trim();
	if (s.includes('upcoming')) return 'Upcoming';
	if (s.includes('projected')) return 'Projected';
	if (s.includes('needs')) return 'Needs Date';
	if (s.includes('past')) return 'Past';
	return 'Needs Date';
}

function normalizeType(type, name = '') {
	const t = `${type || ''} ${name || ''}`.toLowerCase();
	if (t.includes('hack')) return 'Hackathon';
	if (t.includes('exercise') || t.includes('airshow')) return 'Exercise';
	if (t.includes('summit') || t.includes('symposium')) return 'Summit';
	if (t.includes('industry day') || t.includes('open house') || t.includes('outreach')) return 'Workshop';
	return 'Conference';
}

function normalizeBranch(branch = '') {
	const b = branch.toLowerCase();
	if (b.includes('usace') && b.includes('army')) return 'Army / USACE';
	if (b.includes('usace')) return 'USACE';
	if (b.includes('air force') || b.includes('space force') || b.includes('af / sf')) return 'Air Force / Space Force';
	if (b.includes('marine')) return 'Marine Corps';
	if (b.includes('navy')) return 'Navy';
	if (b.includes('army')) return 'Army';
	if (b.includes('industry')) return 'Industry';
	return 'Joint';
}

function dateToIso(y, m, d) {
	return `${String(y).padStart(4, '0')}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

const MONTHS = {
	jan: 1,
	january: 1,
	feb: 2,
	february: 2,
	mar: 3,
	march: 3,
	apr: 4,
	april: 4,
	may: 5,
	jun: 6,
	june: 6,
	jul: 7,
	july: 7,
	aug: 8,
	august: 8,
	sep: 9,
	sept: 9,
	september: 9,
	oct: 10,
	october: 10,
	nov: 11,
	november: 11,
	dec: 12,
	december: 12,
};

function parseDateRange(dates, year, status) {
	const source = String(dates || '').trim();
	if (!source || /tbd/i.test(source) || status === 'Needs Date') return { startDate: null, endDate: null };

	let s = source
		.replace(/\(est\.?\)/gi, '')
		.replace(/\b(est\.?|approx\.?|approximately|late|early|mid|~)\b/gi, '')
		.replace(/\s+/g, ' ')
		.trim();

	const y = Number((s.match(/(20\d{2})/) || [])[1] || year || 2026);

	let m = s.match(/^([A-Za-z]{3,9})\s*(\d{1,2})\s*-\s*([A-Za-z]{3,9})\s*(\d{1,2}),?\s*(20\d{2})?$/);
	if (m) {
		const m1 = MONTHS[m[1].toLowerCase()];
		const d1 = Number(m[2]);
		const m2 = MONTHS[m[3].toLowerCase()];
		const d2 = Number(m[4]);
		const yy = Number(m[5] || y);
		if (m1 && m2) return { startDate: dateToIso(yy, m1, d1), endDate: dateToIso(yy, m2, d2) };
	}

	m = s.match(/^([A-Za-z]{3,9})\s*(\d{1,2})\s*-\s*(\d{1,2}),?\s*(20\d{2})?$/);
	if (m) {
		const mm = MONTHS[m[1].toLowerCase()];
		const d1 = Number(m[2]);
		const d2 = Number(m[3]);
		const yy = Number(m[4] || y);
		if (mm) return { startDate: dateToIso(yy, mm, d1), endDate: dateToIso(yy, mm, d2) };
	}

	m = s.match(/^([A-Za-z]{3,9})\s*-\s*([A-Za-z]{3,9})\s*(20\d{2})$/);
	if (m) {
		const m1 = MONTHS[m[1].toLowerCase()];
		const m2 = MONTHS[m[2].toLowerCase()];
		const yy = Number(m[3]);
		if (m1 && m2) {
			const endDay = new Date(yy, m2, 0).getDate();
			return { startDate: dateToIso(yy, m1, 1), endDate: dateToIso(yy, m2, endDay) };
		}
	}

	m = s.match(/^([A-Za-z]{3,9})\s*(\d{1,2}),?\s*(20\d{2})?$/);
	if (m) {
		const mm = MONTHS[m[1].toLowerCase()];
		const dd = Number(m[2]);
		const yy = Number(m[3] || y);
		if (mm) return { startDate: dateToIso(yy, mm, dd), endDate: null };
	}

	m = s.match(/^([A-Za-z]{3,9})\s*(20\d{2})$/);
	if (m) {
		const mm = MONTHS[m[1].toLowerCase()];
		const yy = Number(m[2]);
		if (mm) {
			const endDay = new Date(yy, mm, 0).getDate();
			return { startDate: dateToIso(yy, mm, 1), endDate: dateToIso(yy, mm, endDay) };
		}
	}

	return { startDate: null, endDate: null };
}

function resolveLocation(rawLocation) {
	let key = String(rawLocation || '').trim() || 'TBD';
	let found = locations[key];

	if (!found && key.includes('/')) {
		for (const part of key.split('/').map((p) => p.trim())) {
			if (locations[part]) {
				key = part;
				found = locations[part];
				break;
			}
		}
	}

	if (!found) {
		const m = key.match(/^TBD\s*\(([^)]+)\)$/i);
		if (m) {
			const inner = m[1].replace(/\s+in\s+20\d{2}.*/i, '').trim();
			if (locations[inner]) {
				key = inner;
				found = locations[inner];
			}
		}
	}

	if (!found && /california/i.test(key) && locations['California']) {
		key = 'California';
		found = locations.California;
	}

	if (!found) {
		return {
			city: /tbd/i.test(key) ? 'TBD' : key,
			state: undefined,
			country: 'USA',
			lat: 39.5,
			lng: -98.35,
			venue: /tbd/i.test(key) ? 'TBD' : undefined,
		};
	}

	let city = key.split(',')[0].trim();
	if (!city || city.toLowerCase() === 'tbd') city = found.state ? `Unknown (${found.state})` : 'TBD';
	if (city === 'Caribe Royale Orlando') city = 'Orlando';
	if (city === 'Tyndall AFB') city = 'Panama City';

	const state = found.state || ((key.match(/,\s*([A-Z]{2})$/) || [])[1] ?? undefined);
	const country = /france/i.test(found.label || key) ? 'France' : 'USA';
	return {
		city,
		state,
		country,
		lat: Number(found.lat),
		lng: Number(found.lng),
		venue: undefined,
	};
}

function travelBurdenFromDc(location) {
	if (location.country !== 'USA') return 'High';
	const near = new Set(['DC', 'MD', 'VA', 'PA', 'DE', 'NJ']);
	const far = new Set(['CA', 'WA', 'OR', 'NV', 'AZ', 'NM', 'UT', 'HI', 'AK']);
	if (location.state && near.has(location.state)) return 'Low';
	if (location.state && far.has(location.state)) return 'High';
	return 'Medium';
}

function confidenceFromStatus(status, hasDate) {
	if (status === 'Needs Date') return 'Low';
	if (status === 'Projected') return hasDate ? 'Medium' : 'Low';
	return hasDate ? 'High' : 'Medium';
}

function signalFromEvent(e, status) {
	const text = `${e.name || ''} ${e.focus || ''} ${e.remarks || ''}`.toLowerCase();
	if (/must attend|largest|premier|major event|15,000|12,000|7,000|4,000|inaugural/.test(text)) return 'High';
	if (status === 'Needs Date') return 'Low';
	return 'Medium';
}

function effortFromTravel(travel) {
	if (travel === 'Low') return 'Low';
	if (travel === 'High') return 'High';
	return 'Medium';
}

function estimatedCost(travel) {
	if (travel === 'Low') return { min: 150, max: 900 };
	if (travel === 'High') return { min: 1200, max: 4200 };
	return { min: 600, max: 2200 };
}

function slugify(s) {
	return String(s || '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '')
		.slice(0, 64);
}

function toTs(value, depth = 0) {
	const pad = '\t'.repeat(depth);
	if (value === null) return 'null';
	if (typeof value === 'string') return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
	if (typeof value === 'number' || typeof value === 'boolean') return String(value);
	if (Array.isArray(value)) {
		if (!value.length) return '[]';
		return `[${value.map((v) => toTs(v, depth)).join(', ')}]`;
	}
	const entries = Object.entries(value).filter(([, v]) => v !== undefined);
	if (!entries.length) return '{}';
	return `\n${pad}{\n${entries
		.map(([k, v]) => `${pad}\t${k}: ${toTs(v, depth + 1)}`)
		.join(',\n')}\n${pad}}`;
}

function createEventObject(e) {
	const status = normalizeStatus(e.status);
	const type = normalizeType(e.type, e.name);
	const branch = normalizeBranch(e.branch);
	const { startDate, endDate } = parseDateRange(e.dates, e.year, status);
	const location = resolveLocation(e.location);
	const travel = travelBurdenFromDc(location);
	const effort = effortFromTravel(travel);
	const signal = signalFromEvent(e, status);
	const confidence = confidenceFromStatus(status, Boolean(startDate));

	return {
		id: '',
		title: String(e.name || '').trim(),
		description:
			String(e.focus || '').trim() ||
			'Defense ecosystem event tracked for partner discovery, market sensing, and operational timing.',
		startDate,
		endDate,
		branch,
		type,
		status,
		signal,
		effort,
		location,
		ontology: {
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: [`${branch} stakeholders`, 'Program offices', 'Industry partners'],
			keywords: [
				...new Set(
					String(e.name || '')
						.toLowerCase()
						.split(/[^a-z0-9]+/)
						.filter((w) => w.length > 3)
						.slice(0, 4)
				),
			],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: {
				discovery: status === 'Needs Date' ? 'Monitor for date release' : 'Now to T-90 days',
				prep: status === 'Needs Date' ? 'After date confirmation' : 'T-60 to T-14 days',
				execution: status === 'Needs Date' ? 'TBD' : 'Event week + 14-day follow-up',
			},
			provenance: [
				{
					name: 'Government Guide conference tracker',
					url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
					type: 'aggregator',
					lastVerified: '2026-02-13',
					confidence,
				},
			],
			links: {},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: estimatedCost(travel),
				travelBurdenFromDc: travel,
			},
			notes: String(e.remarks || '').trim() || undefined,
		},
	};
}

const trackerCandidatePool = trackerEvents.filter((e) => Number(e.year || 0) >= 2026 && normalizeStatus(e.status) !== 'Past');

const dedupedByTitle = new Map();
for (const e of trackerCandidatePool) {
	const key = normalize(e.name);
	if (!key) continue;
	const current = dedupedByTitle.get(key);
	if (!current) {
		dedupedByTitle.set(key, e);
		continue;
	}
	const s1 = normalizeStatus(current.status);
	const s2 = normalizeStatus(e.status);
	const p1 = statusPriority[s1] ?? 0;
	const p2 = statusPriority[s2] ?? 0;
	if (p2 > p1) dedupedByTitle.set(key, e);
}

const imported = [];
for (const e of dedupedByTitle.values()) {
	if (existingTitleSet.has(normalize(e.name))) continue;
	const obj = createEventObject(e);
	let id = `radar-${slugify(obj.title)}`;
	let suffix = 2;
	while (existingIdSet.has(id) || imported.some((x) => x.id === id)) {
		id = `radar-${slugify(obj.title)}-${suffix}`;
		suffix += 1;
	}
	obj.id = id;
	imported.push(obj);
}

imported.sort((a, b) => {
	if (!a.startDate && !b.startDate) return a.title.localeCompare(b.title);
	if (!a.startDate) return 1;
	if (!b.startDate) return -1;
	return a.startDate.localeCompare(b.startDate);
});

const tail = '\n];\n';
if (!existingTs.endsWith(tail)) throw new Error('events.ts format changed; expected file to end with array close');

const renderedEvents = imported.map((obj) => `\t${toTs(obj, 1).trim()},`).join('\n');
const updatedTs = `${existingTs.slice(0, -tail.length)}\n${renderedEvents}\n];\n`;
fs.writeFileSync(eventsTsPath, updatedTs);

fs.writeFileSync(outJsonPath, JSON.stringify(imported, null, 2) + '\n');

const md = [
	'# Radar Event Candidates (2026-02-13)',
	'',
	`Total candidates imported: ${imported.length}`,
	'',
	'## Added events',
	'',
	...imported.map(
		(e) =>
			`- ${e.title} | ${e.status} | ${e.startDate ?? 'TBD'}${e.endDate ? ` to ${e.endDate}` : ''} | ${e.location.city}${e.location.state ? `, ${e.location.state}` : ''}`
	),
	'',
	'Source: https://jbenton1.github.io/government-guide/conference-tracker/',
	'',
].join('\n');
fs.writeFileSync(outMdPath, md);

console.log(JSON.stringify({
	trackerEvents: trackerEvents.length,
	candidatePool: trackerCandidatePool.length,
	imported: imported.length,
	outJsonPath,
	outMdPath,
	eventsTsPath,
}, null, 2));
