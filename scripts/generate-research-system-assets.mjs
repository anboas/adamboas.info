import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'public', 'research', 'system');
fs.mkdirSync(outDir, { recursive: true });

const baseUrl = 'https://www.adamboas.com/research';
const sourceUrl = {
	researchIndex: `${baseUrl}/`,
	niwc: `${baseUrl}/niwc-pac/`,
	cgcyber: `${baseUrl}/cgcyber-iom/`,
	nae: `${baseUrl}/naval-aviation-enterprise/`,
};

const sources = [
	['S1', 'Research index', sourceUrl.researchIndex, 'Hidden research folder index and current block inventory'],
	[
		'S2',
		'NIWC PAC AA research block',
		sourceUrl.niwc,
		'Existing NIWC Pacific / Application Arsenal org, POC, Forward Slope, and lineage atlas',
	],
	[
		'S3',
		'CGCYBER IOM research block',
		sourceUrl.cgcyber,
		'Existing Coast Guard Cyber IOM org, contract, competitor, and source atlas',
	],
	[
		'S4',
		'Naval Aviation Enterprise research block',
		sourceUrl.nae,
		'Existing NAVAIR / NAE org, opportunity, company, and source atlas',
	],
	[
		'S5',
		'Research system operating standard',
		sourceUrl.researchIndex,
		'Local repeatable capture-intel workflow defined for future company, organization, opportunity, or market targets',
	],
];

const modules = [
	[
		'1',
		'Target intake',
		'Normalize the ask',
		'Required module',
		'Repeatable start',
		'INTAKE',
		'Research system',
		'Workflow',
		'Convert a company, org, program, opportunity, or market phrase into scope, hypotheses, boundary rules, and success criteria.',
		'High',
		'S5',
		sourceUrl.researchIndex,
	],
	[
		'2',
		'Source register',
		'Evidence spine',
		'Required module',
		'Citation control',
		'SOURCE',
		'Research system',
		'Data',
		'Carry every public source with URL, use, confidence, extraction notes, stale/blocked caveats, and artifact references.',
		'High',
		'S5',
		sourceUrl.researchIndex,
	],
	[
		'3',
		'Authority and org map',
		'Who owns the mission',
		'Required module',
		'Customer truth',
		'ORG',
		'Research system',
		'Diagram/table',
		'Show command, acquisition, program, technical, contracting, small-business, and delivery chains with public confidence labels.',
		'High',
		'S2; S3; S4',
		`${sourceUrl.niwc}; ${sourceUrl.cgcyber}; ${sourceUrl.nae}`,
	],
	[
		'4',
		'Contact and office roster',
		'Public engagement map',
		'Required module',
		'Legal outreach routes',
		'POC',
		'Research system',
		'Data',
		'Track only public professional roles, office routes, public PCOs, OSBP routes, source confidence, and specific relevance.',
		'High',
		'S2; S3; S4',
		`${sourceUrl.niwc}; ${sourceUrl.cgcyber}; ${sourceUrl.nae}`,
	],
	[
		'5',
		'Opportunity watchlist',
		'What money is moving',
		'Required module',
		'Pipeline creation',
		'OPP',
		'Research system',
		'Data',
		'Capture value, timing, vehicle, buyer, incumbent, acquisition strategy, status, Sabre fit, gaps, and next action.',
		'High',
		'S3; S4',
		`${sourceUrl.cgcyber}; ${sourceUrl.nae}`,
	],
	[
		'6',
		'Contract and incumbent lineage',
		'How the work got here',
		'Required module',
		'Transition intelligence',
		'LINEAGE',
		'Research system',
		'Diagram/table',
		'Link prior award, bridge, current award, forecast, recompete, contract IDs, performers, and unresolved lineage gaps.',
		'High',
		'S2; S3',
		`${sourceUrl.niwc}; ${sourceUrl.cgcyber}`,
	],
	[
		'7',
		'Company ecosystem',
		'Who can win or block',
		'Required module',
		'Partner and threat map',
		'COMPANY',
		'Research system',
		'Data',
		'Map incumbents, likely bidders, specialist subs, parent-company lineage, vehicles, strengths, risks, and teaming posture.',
		'High',
		'S2; S3; S4',
		`${sourceUrl.niwc}; ${sourceUrl.cgcyber}; ${sourceUrl.nae}`,
	],
	[
		'8',
		'Competitive posture',
		'Probability-weighted field',
		'Required module',
		'Bid/no-bid evidence',
		'COMPETE',
		'Research system',
		'Analysis',
		'Rank credible competitors by customer adjacency, technical depth, vehicle eligibility, scale, price posture, and proof gaps.',
		'Medium',
		'S3',
		sourceUrl.cgcyber,
	],
	[
		'9',
		'Visual atlas',
		'Interactive SVGs',
		'Required module',
		'Fast executive understanding',
		'VISUAL',
		'Research system',
		'UI',
		'Create chart tabs for org, opportunity, contract ecosystem, company lineage, and action/roadmap views with pan/zoom controls.',
		'High',
		'S2; S3; S4',
		`${sourceUrl.niwc}; ${sourceUrl.cgcyber}; ${sourceUrl.nae}`,
	],
	[
		'10',
		'Capture action layer',
		'Next thing to resolve',
		'Required module',
		'Execution leverage',
		'ACTION',
		'Research system',
		'Plan',
		'Attach owner-ready actions by opportunity: vehicle gate, partner target, incumbent question, source gap, outreach route, and proof artifact.',
		'High',
		'S5',
		sourceUrl.researchIndex,
	],
	[
		'11',
		'Watchlist and drift monitor',
		'Change detection',
		'Expansion module',
		'Proactive alerts',
		'WATCH',
		'Research system',
		'Automation',
		'Monitor APFS, SAM, LRAF, source URLs, company news, and public award records for date/status/value/incumbent changes.',
		'Medium',
		'S5',
		sourceUrl.researchIndex,
	],
	[
		'12',
		'Verification and publish gate',
		'Quality control',
		'Required module',
		'Trust',
		'VERIFY',
		'Research system',
		'Workflow',
		'Run generator, CSV/SVG parse, build, research regression, mobile overflow, noindex/robots checks, production smoke, and source sanity.',
		'High',
		'S5',
		sourceUrl.researchIndex,
	],
];

const intake = [
	[
		'1',
		'Target definition',
		'Company / org / opportunity name',
		'Input field',
		'Scope lock',
		'TARGET',
		'Example: NIWC PAC AA, CGCYBER IOM, NAE, Forward Slope, NetCentrics, PMA-290.',
		'High',
		'S5',
		sourceUrl.researchIndex,
	],
	[
		'2',
		'Research question',
		'What decision it supports',
		'Input field',
		'Output alignment',
		'QUESTION',
		'Examples: pursue as prime, identify POCs, understand incumbent lineage, build capture plan, find opportunities.',
		'High',
		'S5',
		sourceUrl.researchIndex,
	],
	[
		'3',
		'Boundary and ethics rules',
		'Public-source-only guardrails',
		'Input field',
		'Compliance',
		'BOUNDARY',
		'Exclude private contact data, procurement-sensitive information, impersonation, personal targeting, and unsupported claims.',
		'High',
		'S5',
		sourceUrl.researchIndex,
	],
	[
		'4',
		'Mission owner',
		'Customer authority',
		'Output field',
		'Org map',
		'CUSTOMER',
		'Command, component, program office, directorate, acquisition authority, technical authority, and operating unit.',
		'High',
		'S2; S3; S4',
		`${sourceUrl.niwc}; ${sourceUrl.cgcyber}; ${sourceUrl.nae}`,
	],
	[
		'5',
		'Buyer and vehicle',
		'How it buys',
		'Output field',
		'Opportunity gate',
		'BUYER',
		'Contracting office, PCO, APFS/SAM/LRAF row, GSA/SIN, SeaPort, IDIQ, BPA, set-aside, full/open, or unknown.',
		'High',
		'S3; S4',
		`${sourceUrl.cgcyber}; ${sourceUrl.nae}`,
	],
	[
		'6',
		'Incumbent and lineage',
		'Who owns current truth',
		'Output field',
		'Transition',
		'INCUMBENT',
		'Prime, subcontractors, predecessor awards, bridges, recompetes, legal-name changes, parent ownership, and confidence.',
		'High',
		'S2; S3; S4',
		`${sourceUrl.niwc}; ${sourceUrl.cgcyber}; ${sourceUrl.nae}`,
	],
	[
		'7',
		'Contacts and routes',
		'Who can be contacted lawfully',
		'Output field',
		'Engagement',
		'CONTACT',
		'Public PCOs, OSBP, vendor-relations, official office mailboxes, command/public-affairs routes, and named professional roles.',
		'High',
		'S2; S3; S4',
		`${sourceUrl.niwc}; ${sourceUrl.cgcyber}; ${sourceUrl.nae}`,
	],
	[
		'8',
		'Competitors and team shape',
		'Who matters commercially',
		'Output field',
		'Partnering',
		'TEAM',
		'Likely primes, specialist subs, current adjacent performers, vehicle-fit issues, past performance, and preferred posture.',
		'High',
		'S2; S3; S4',
		`${sourceUrl.niwc}; ${sourceUrl.cgcyber}; ${sourceUrl.nae}`,
	],
	[
		'9',
		'Sabre fit',
		'Why us / why not',
		'Output field',
		'Bid decision',
		'FIT',
		'Score mission adjacency, technical proof, contract vehicle, scale, staffing, customer access, price confidence, and differentiators.',
		'High',
		'S5',
		sourceUrl.researchIndex,
	],
	[
		'10',
		'Gaps and collection plan',
		'What must be resolved',
		'Output field',
		'Next action',
		'GAP',
		'Call out unknown incumbent, missing branch chief, RFQ not released, vehicle ambiguity, staffing proof, price volumes, or source contradictions.',
		'High',
		'S3; S4',
		`${sourceUrl.cgcyber}; ${sourceUrl.nae}`,
	],
	[
		'11',
		'Deliverables',
		'What gets published',
		'Output field',
		'Research block',
		'DELIVER',
		'Interactive page, SVG charts, CSV tables, source register, downloadable assets, verification notes, and update history.',
		'High',
		'S2; S3; S4',
		`${sourceUrl.niwc}; ${sourceUrl.cgcyber}; ${sourceUrl.nae}`,
	],
	[
		'12',
		'Watch cadence',
		'How it stays alive',
		'Output field',
		'Automation',
		'CADENCE',
		'Daily/weekly/triggered checks for APFS, SAM, LRAF, official pages, award feeds, company press releases, and source health.',
		'Medium',
		'S5',
		sourceUrl.researchIndex,
	],
];

const plans = [
	[
		'1',
		'Global opportunity dashboard',
		'Next build',
		'Build now',
		'One cockpit across NIWC PAC AA, CGCYBER IOM, NAE, and future blocks: value, timing, buyer, vehicle, incumbent, Sabre fit, team need, confidence, next action.',
		'No unified cross-block data model yet.',
		'Research index + all blocks',
		'High',
		'S2; S3; S4; S5',
		`${sourceUrl.researchIndex}; ${sourceUrl.niwc}; ${sourceUrl.cgcyber}; ${sourceUrl.nae}`,
	],
	[
		'2',
		'Deep-dive pages per opportunity',
		'Next build',
		'Build after dashboard',
		'Create one-page pursuit briefs for TARCES, EXCOMM XI, CGCYBER IOM, AA recompete, PMA-290, AIRWorks, T-6/T-34 CLS, and Cyber Warfare Services IDIQ.',
		'Need stable priority ranking and source gap list.',
		'Opportunity-specific pages',
		'High',
		'S3; S4; S5',
		`${sourceUrl.cgcyber}; ${sourceUrl.nae}`,
	],
	[
		'3',
		'Cross-block company graph',
		'Expansion',
		'Build after dashboard',
		'Show where the same primes/subs appear across Navy, USCG, C5I, cyber, software, aviation, and AA work.',
		'Company records live in separate block CSVs today.',
		'GovCIO, Synergy, Atlas, Forward Slope/Accelint/Lyntris, NetCentrics, Booz, GDIT, CACI, BAE, StraCon',
		'High',
		'S2; S3; S4',
		`${sourceUrl.niwc}; ${sourceUrl.cgcyber}; ${sourceUrl.nae}`,
	],
	[
		'4',
		'Contact graph',
		'Expansion',
		'Build after company graph',
		'Create a public-professional contact graph grouped by government POC, OSBP/vendor route, command leadership, technical stakeholder, incumbent/company lead, event signal.',
		'Must preserve ethics boundaries and avoid private-person targeting.',
		'Research-wide contact roster',
		'High',
		'S2; S3; S4; S5',
		`${sourceUrl.niwc}; ${sourceUrl.cgcyber}; ${sourceUrl.nae}; ${sourceUrl.researchIndex}`,
	],
	[
		'5',
		'Incumbent lineage timelines',
		'Expansion',
		'Build for top pursuits',
		'For each big seam, show prior award, bridge, current order, recompete, forecast, contract IDs, and unresolved performer gaps.',
		'Some incumbent bridges are not public and must be labeled unresolved.',
		'AA, CGCYBER NOSC/CuOps, IARMS, IMS/IPSS, NAE opportunity incumbents',
		'High',
		'S2; S3; S4',
		`${sourceUrl.niwc}; ${sourceUrl.cgcyber}; ${sourceUrl.nae}`,
	],
	[
		'6',
		'Automated watchlist',
		'Automation',
		'Build after dashboard',
		'Monitor APFS/SAM/LRAF/source URLs for release dates, award shifts, value changes, set-aside changes, incumbent changes, and dead links.',
		'Needs source registry schema and alert rules.',
		'APFS, SAM, LRAF, USAspending, official pages, company news',
		'Medium',
		'S5',
		sourceUrl.researchIndex,
	],
	[
		'7',
		'Capture action layer',
		'Execution',
		'Build into dashboard',
		'Replace generic sprint tables with concise next-resolution fields per opportunity: vehicle gate, partner target, incumbent question, source gap, outreach route.',
		'Need owner/status fields if this becomes operational task management.',
		'All priority opportunities',
		'High',
		'S5',
		sourceUrl.researchIndex,
	],
	[
		'8',
		'Better UX across research',
		'UI',
		'Continuous',
		'Add global search, shared filters, compare-opportunities view, source-confidence badges, update history, and PNG/CSV/PDF export controls.',
		'Need common components instead of repeated Astro sections.',
		'Research system',
		'Medium',
		'S2; S3; S4; S5',
		`${sourceUrl.researchIndex}; ${sourceUrl.niwc}; ${sourceUrl.cgcyber}; ${sourceUrl.nae}`,
	],
	[
		'9',
		'NAE plan',
		'Current block',
		'Expand',
		'Prioritize top-value NAWCAD rows, build PMA-by-PMA deep dives, pull SAM/USAspending award lineage, add named PEO/PMA contacts where public, and score Sabre fit.',
		'NAVAIR site blocks lightweight fetch; use LRAF/PDF/SAM/official anchors carefully.',
		'NAE / NAVAIR',
		'High',
		'S4',
		sourceUrl.nae,
	],
	[
		'10',
		'CGCYBER IOM plan',
		'Current block',
		'Expand',
		'Turn IOM into a pursuit brief: RFQ watch, vehicle/SIN gate, incumbent bridge hunt, SOC/CSSP partner short list, transition model, price/FTE stress model.',
		'Current CuOps/FuOps/Ops Support bridge remains unresolved publicly.',
		'CGCYBER IOM',
		'High',
		'S3',
		sourceUrl.cgcyber,
	],
	[
		'11',
		'NIWC PAC AA plan',
		'Current block',
		'Expand',
		'Build AA recompete deep dive: Code 53/532/53200 stakeholder map, Forward Slope/Accelint/Lyntris lineage, current award trail, adjacent OSA/ACS seams, source-gap list.',
		'No public current AA PM/COR/TCA lead found yet; retain public-gap labels.',
		'NIWC PAC / Application Arsenal',
		'High',
		'S2',
		sourceUrl.niwc,
	],
];

const headers = {
	modules: [
		'ID',
		'Node',
		'Role',
		'Status',
		'IOM Relevance',
		'Code',
		'Domain',
		'Type',
		'Evidence',
		'Confidence',
		'Source Refs',
		'Source URL',
	],
	intake: [
		'ID',
		'Program',
		'Prime',
		'Status',
		'IOM Seam / Relevance',
		'Award / Forecast ID',
		'Value / Term',
		'Scope',
		'Confidence',
		'Source Refs',
		'Source URL',
	],
	plans: [
		'ID',
		'Entity',
		'Tier',
		'Recommended Posture',
		'Power Base',
		'Gap / Vulnerability',
		'Vehicle',
		'Confidence',
		'Source Refs',
		'Source URL',
	],
	sources: ['ID', 'Title', 'Use', 'URL'],
};

function csvEscape(value) {
	const text = String(value ?? '');
	if (/[",\n\r]/.test(text)) return `"${text.replaceAll('"', '""')}"`;
	return text;
}

function writeCsv(fileName, header, rows) {
	fs.writeFileSync(
		path.join(outDir, fileName),
		[header, ...rows].map((row) => row.map(csvEscape).join(',')).join('\n'),
	);
}

function escapeXml(value) {
	return String(value ?? '')
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');
}

function wrap(value, max = 28) {
	const words = String(value).split(/\s+/);
	const lines = [];
	let line = '';
	for (const word of words) {
		if ((line ? `${line} ${word}` : word).length > max) {
			if (line) lines.push(line);
			line = word;
		} else {
			line = line ? `${line} ${word}` : word;
		}
	}
	if (line) lines.push(line);
	return lines.slice(0, 5);
}

function box({ x, y, w, h, title, body, tone = 'core' }) {
	const palette = {
		core: ['#0f172a', '#14b8a6'],
		blue: ['#172554', '#60a5fa'],
		green: ['#052e16', '#22c55e'],
		amber: ['#451a03', '#f59e0b'],
		purple: ['#312e81', '#a78bfa'],
		slate: ['#1e293b', '#94a3b8'],
	};
	const [fill, stroke] = palette[tone] ?? palette.core;
	const titleLines = wrap(title, 24);
	const bodyLines = wrap(body, 32);
	return `<g>
		<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="0" fill="${fill}" stroke="${stroke}" stroke-width="1.4"/>
		${titleLines.map((line, i) => `<text x="${x + 14}" y="${y + 24 + i * 16}" class="box-title">${escapeXml(line)}</text>`).join('')}
		${bodyLines.map((line, i) => `<text x="${x + 14}" y="${y + 72 + i * 15}" class="box-body">${escapeXml(line)}</text>`).join('')}
	</g>`;
}

function line(x1, y1, x2, y2) {
	const mid = Math.round((y1 + y2) / 2);
	return `<path d="M ${x1} ${y1} L ${x1} ${mid} L ${x2} ${mid} L ${x2} ${y2}" fill="none" stroke="#64748b" stroke-width="1.2" opacity="0.72" marker-end="url(#arrow)"/>`;
}

function svgShell(title, subtitle, width, height, content) {
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
		<defs>
			<marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
				<path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/>
			</marker>
			<style>
				.bg { fill: #f8fafc; }
				.kicker { font: 700 13px Inter, Arial, sans-serif; letter-spacing: .12em; text-transform: uppercase; fill: #0f766e; }
				.title { font: 800 30px Inter, Arial, sans-serif; fill: #0f172a; }
				.subtitle { font: 500 14px Inter, Arial, sans-serif; fill: #475569; }
				.box-title { font: 800 14px Inter, Arial, sans-serif; fill: #f8fafc; }
				.box-body { font: 500 11px Inter, Arial, sans-serif; fill: #cbd5e1; }
			</style>
		</defs>
		<rect class="bg" width="${width}" height="${height}"/>
		<text x="36" y="42" class="kicker">Research system</text>
		<text x="36" y="78" class="title">${escapeXml(title)}</text>
		<text x="36" y="104" class="subtitle">${escapeXml(subtitle)}</text>
		${content}
	</svg>`;
}

function pipelineSvg() {
	const boxes = [
		[40, 150, 'Intake', 'Target, decision, boundaries, success criteria', 'core'],
		[270, 150, 'Evidence', 'Source register, extraction notes, confidence', 'blue'],
		[500, 150, 'Maps', 'Org, contacts, contracts, companies, competitors', 'green'],
		[730, 150, 'Actions', 'Fit score, gaps, next move, owner-ready output', 'amber'],
		[960, 150, 'Publish', 'Noindex page, SVGs, CSVs, tests, production smoke', 'purple'],
		[270, 380, 'Watch', 'APFS, SAM, LRAF, awards, company/news drift', 'slate'],
		[500, 380, 'Deepen', 'Deep-dive briefs, lineage timelines, contact graph', 'slate'],
		[730, 380, 'Brief', 'VP-ready cockpit, priority moves, risks, asks', 'slate'],
	];
	const content = [
		boxes.map(([x, y, title, body, tone]) => box({ x, y, w: 190, h: 138, title, body, tone })).join(''),
		line(230, 219, 270, 219),
		line(460, 219, 500, 219),
		line(690, 219, 730, 219),
		line(920, 219, 960, 219),
		line(365, 288, 365, 380),
		line(595, 288, 595, 380),
		line(825, 288, 825, 380),
	].join('');
	return svgShell(
		'Repeatable Capture-Intel Pipeline',
		'Give it a company, organization, program, or opportunity; it returns a verified research block and action plan.',
		1190,
		560,
		content,
	);
}

function schemaSvg() {
	const centers = [
		[
			480,
			160,
			'Unified Block Schema',
			'Every research page uses the same evidence-backed tables and chart controls.',
			'core',
		],
		[60, 320, 'Org / POCs', 'Authority, office, role, contact route, relevance', 'blue'],
		[285, 320, 'Opportunities', 'Value, timing, buyer, vehicle, incumbent, status', 'green'],
		[510, 320, 'Contracts', 'Award IDs, bridges, recompetes, lineage gaps', 'amber'],
		[735, 320, 'Companies', 'Primes, subs, parent lineage, posture, risk', 'purple'],
		[960, 320, 'Sources', 'URL, use, confidence, stale/blocked caveats', 'slate'],
	];
	const content = [
		centers
			.map(([x, y, title, body, tone], index) => box({ x, y, w: index ? 190 : 250, h: 138, title, body, tone }))
			.join(''),
		line(605, 298, 155, 320),
		line(605, 298, 380, 320),
		line(605, 298, 605, 320),
		line(605, 298, 830, 320),
		line(605, 298, 1055, 320),
	].join('');
	return svgShell(
		'Canonical Research Block Format',
		'One schema, many targets: NIWC PAC AA, CGCYBER IOM, NAE, and whatever comes next.',
		1190,
		560,
		content,
	);
}

function roadmapSvg() {
	const content = [
		box({
			x: 50,
			y: 150,
			w: 250,
			h: 150,
			title: 'NIWC PAC AA',
			body: 'AA recompete, Code 53/532/53200, Forward Slope lineage, OSA/ACS seams, public POC gaps.',
			tone: 'blue',
		}),
		box({
			x: 330,
			y: 150,
			w: 250,
			h: 150,
			title: 'CGCYBER IOM',
			body: '>$100M IOM, APFS RFQ watch, SOC/CSSP gap, IARMS/IMS/C5I seams, partner diligence.',
			tone: 'green',
		}),
		box({
			x: 610,
			y: 150,
			w: 250,
			h: 150,
			title: 'NAE',
			body: '44 opportunity rows, PMA/NAWCAD/COMFRC lanes, PCOs, OSBP routes, incumbent ecosystem.',
			tone: 'amber',
		}),
		box({
			x: 890,
			y: 150,
			w: 250,
			h: 150,
			title: 'Global Dashboard',
			body: 'Compare value, timing, vehicle, incumbent, Sabre fit, team need, confidence, and next action.',
			tone: 'purple',
		}),
		box({
			x: 190,
			y: 380,
			w: 250,
			h: 126,
			title: 'Deep Dives',
			body: 'TARCES, EXCOMM XI, CGCYBER IOM, AA recompete, PMA-290, AIRWorks.',
			tone: 'slate',
		}),
		box({
			x: 470,
			y: 380,
			w: 250,
			h: 126,
			title: 'Graphs',
			body: 'Cross-block companies, public contact routes, incumbent timelines, source confidence.',
			tone: 'slate',
		}),
		box({
			x: 750,
			y: 380,
			w: 250,
			h: 126,
			title: 'Watchlist',
			body: 'Automated drift alerts for APFS, SAM, LRAF, awards, values, dates, and source health.',
			tone: 'slate',
		}),
		line(300, 225, 330, 225),
		line(580, 225, 610, 225),
		line(860, 225, 890, 225),
		line(1015, 300, 315, 380),
		line(1015, 300, 595, 380),
		line(1015, 300, 875, 380),
	].join('');
	return svgShell(
		'Current Pursuit Build Plan',
		'The research blocks become inputs to one capture cockpit, then branch into opportunity deep dives and monitors.',
		1190,
		580,
		content,
	);
}

writeCsv('research-system-modules.csv', headers.modules, modules);
writeCsv('research-system-intake-template.csv', headers.intake, intake);
writeCsv('research-system-pursuit-plans.csv', headers.plans, plans);
writeCsv('research-system-source-register.csv', headers.sources, sources);
fs.writeFileSync(path.join(outDir, 'research-system-pipeline.svg'), pipelineSvg());
fs.writeFileSync(path.join(outDir, 'research-system-schema.svg'), schemaSvg());
fs.writeFileSync(path.join(outDir, 'research-system-roadmap.svg'), roadmapSvg());

console.log(
	JSON.stringify(
		{
			modules: modules.length,
			intake: intake.length,
			plans: plans.length,
			sources: sources.length,
			charts: 3,
		},
		null,
		2,
	),
);
