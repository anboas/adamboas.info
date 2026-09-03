import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outDir = path.join(root, 'public', 'research', 'dashboard');
fs.mkdirSync(outDir, { recursive: true });

const researchBase = 'https://www.adamboas.com/research';
const blockUrl = {
	dashboard: `${researchBase}/dashboard/`,
	niwc: `${researchBase}/niwc-pac/`,
	cgcyber: `${researchBase}/cgcyber-iom/`,
	nae: `${researchBase}/naval-aviation-enterprise/`,
	system: `${researchBase}/system/`,
};

const opportunities = [
	[
		'1',
		'CGCYBER IOM',
		'CGCYBER Integrated Operations Management',
		'Coast Guard Cyber Command / CG-HCA',
		'Forecast',
		'Direct cyber-ops pursuit',
		'F2026073117',
		'>$100M / FFP / Q1 FY27 award signal',
		'Consolidates CuOps, FuOps, and Ops Support; requires 24x7 cyber-ops, transition, DODIN, and interface governance proof.',
		'High',
		'Research block; APFS package',
		blockUrl.cgcyber,
	],
	[
		'2',
		'NIWC PAC AA recompete',
		'Application Arsenal follow-on / recompete',
		'NIWC Pacific Code 53 / 532 / 53200',
		'Forecast / watch',
		'Direct AA / software factory pursuit',
		'AA support trail / 2026 recompete signal',
		'>= $10M class; exact public ceiling unresolved',
		'Application Arsenal, OSA, ACS, RAISE, Code 532, and Forward Slope/Accelint/Lyntris lineage define the current capture map.',
		'High',
		'NIWC PAC atlas; Forward Slope lineage',
		blockUrl.niwc,
	],
	[
		'3',
		'TARCES',
		'Training Aircraft Ranges Contractor Engineering Services',
		'NAWCAD / NAVAIR',
		'Forecast',
		'NAVAIR services / engineering opportunity',
		'NAWCAD LRAF',
		'$50M - $100M forecast band',
		'High-value NAE opportunity seam with public PCO/incumbent signal in the NAWCAD LRAF.',
		'High',
		'NAE opportunity table',
		blockUrl.nae,
	],
	[
		'4',
		'EXCOMM XI',
		'Expeditionary Communications follow-on',
		'NAWCAD / NAVAIR',
		'Forecast',
		'C5I / expeditionary communications',
		'NAWCAD LRAF',
		'$100M - $250M forecast band',
		'Large communications/C5I seam with incumbent and acquisition-strategy signal; needs deeper award-lineage page.',
		'High',
		'NAE opportunity table',
		blockUrl.nae,
	],
	[
		'5',
		'Cyber Warfare Services IDIQ',
		'Cyber Warfare Services support',
		'NAWCAD / NAVAIR',
		'Forecast',
		'Cyber / software / mission systems',
		'NAWCAD LRAF',
		'$100M - $250M forecast band',
		'NAVAIR cyber lane that can bridge Sabre NAVAIR credibility into cyber work, but must be mapped to exact technical outcomes.',
		'High',
		'NAE opportunity table',
		blockUrl.nae,
	],
	[
		'6',
		'PMA-290 support',
		'Maritime patrol and reconnaissance aircraft program support',
		'NAVAIR PMA-290',
		'Forecast',
		'PMA support / aviation mission systems',
		'NAWCAD LRAF',
		'$200M - $500M forecast band',
		'Large PMA support seam; needs incumbent lineage, customer priorities, and teammate strategy before capture action.',
		'High',
		'NAE opportunity table',
		blockUrl.nae,
	],
	[
		'7',
		'AIRWorks',
		'Rapid capability / AIRWorks support',
		'NAVAIR / NAWCAD',
		'Forecast',
		'Rapid engineering / prototyping',
		'NAWCAD LRAF',
		'$250M - $500M forecast band',
		'Strong fit for technical strategy, rapid prototyping, and transition story; should get a deep-dive page.',
		'High',
		'NAE opportunity table',
		blockUrl.nae,
	],
	[
		'8',
		'T-6/T-34 CLS',
		'T-6 / T-34 contractor logistics support',
		'NAVAIR / training aircraft',
		'Forecast',
		'Sustainment / logistics',
		'NAWCAD LRAF',
		'$500M - $1B forecast band',
		'Largest visible NAE value band but less obviously aligned to Sabre digital/cyber differentiators; likely partner or selective posture.',
		'Medium',
		'NAE opportunity table',
		blockUrl.nae,
	],
	[
		'9',
		'IARMS',
		'Information Assurance and Risk Management Support',
		'USCG / C5I / CGCYBER',
		'Active',
		'CGCYBER interface / A&A seam',
		'70Z04425DESD40001 / 70Z04425FCAD20001',
		'$160M / 2025-2030',
		'OneOmega controls direct cyber-adjacent risk/compliance context; must be treated as interface, partner, or threat for IOM.',
		'High',
		'CGCYBER contract ecosystem',
		blockUrl.cgcyber,
	],
	[
		'10',
		'IMS / IPSS / VIA',
		'Infrastructure modernization and support seam',
		'USCG C5ISC / C5I',
		'Active / forecast',
		'Infrastructure / platform interface',
		'70Z07923AISD20001 plus VIA forecast',
		'$345.3M task; VIA >$100M forecast signal',
		'GovCIO/Knight Point infrastructure seam shapes IOM tools, networks, service management, and transition assumptions.',
		'High',
		'CGCYBER contract ecosystem',
		blockUrl.cgcyber,
	],
	[
		'11',
		'C5I apps / COMPASS',
		'C5I application sustainment and Agile COMPASS STEW',
		'USCG C5ISC',
		'Active / forecast',
		'Applications / DevSecOps interface',
		'70Z0G326FESD30002; F2026074167',
		'$31.6M bridge; $50M - $100M follow-on',
		'Synergy application footprint likely controls queues, app incidents, DevSecOps knowledge, and audit-remediation context.',
		'High',
		'CGCYBER contract ecosystem',
		blockUrl.cgcyber,
	],
	[
		'12',
		'C5ISR engineering',
		'Afloat/ashore C5ISR engineering and sustainment',
		'USCG C5ISC / C5ISR',
		'Active',
		'Maritime engineering interface',
		'N6523625F3024',
		'$220.9M / 2025-2030',
		'Atlas owns a major engineering seam that IOM must interface with for field systems, testing, sustainment, and configuration.',
		'High',
		'CGCYBER contract ecosystem',
		blockUrl.cgcyber,
	],
];

const companies = [
	[
		'1',
		'GovCIO / Knight Point',
		'T1 interface',
		'Engage as infrastructure-interface partner or threat',
		'USCG IMS/IPSS infrastructure seam',
		'Not direct SOC operations proof',
		'MAS / HACS path',
		'High',
		'CGCYBER',
		blockUrl.cgcyber,
	],
	[
		'2',
		'Synergy',
		'T1 interface',
		'Treat as C5I apps / DevSecOps interface',
		'USCG C5I bridge and COMPASS incumbent signal',
		'Limited public 24x7 cyber-ops proof',
		'MAS 54151S signal',
		'High',
		'CGCYBER',
		blockUrl.cgcyber,
	],
	[
		'3',
		'Forward Slope / Accelint / Lyntris',
		'AA incumbent lineage',
		'Track for AA recompete and transition knowledge',
		'AA/Storefront award trail and current Accelint identity',
		'Current AA PM/COR/TCA not public',
		'Contract-specific',
		'High',
		'NIWC PAC AA',
		blockUrl.niwc,
	],
	[
		'4',
		'NetCentrics',
		'T1 legacy cyber',
		'Diligence target for current CGCYBER bridge/staff',
		'Historical NOSC/CuOps lineage',
		'Last direct public order ended Jan 2024',
		'MAS / HACS claimed',
		'High',
		'CGCYBER',
		blockUrl.cgcyber,
	],
	[
		'5',
		'OneOmega',
		'T1 cyber-adjacent',
		'Resolve IARMS boundary and OCI posture',
		'Current $160M IARMS award',
		'HACS status and operational boundary unclear',
		'MAS 54151S / OLM',
		'High',
		'CGCYBER',
		blockUrl.cgcyber,
	],
	[
		'6',
		'Atlas Technologies',
		'T2 engineering',
		'Consider for maritime C5ISR/field engineering seam',
		'Current $220.9M USCG C5ISR engineering order',
		'Cyber-ops prime fit not public',
		'Vehicle fit unresolved',
		'High',
		'CGCYBER',
		blockUrl.cgcyber,
	],
	[
		'7',
		'BAE Systems',
		'NAE incumbent',
		'Map C5ISR/mission-system role by opportunity',
		'Public NAE incumbent/company row',
		'Specific bid intent unknown',
		'Opportunity-specific',
		'Medium',
		'NAE',
		blockUrl.nae,
	],
	[
		'8',
		'StraCon',
		'NAE incumbent',
		'Track PMA-272 and PMA support opportunities',
		'PMA support / ATAPS connection in NAE table',
		'Need current team/vehicle posture',
		'Opportunity-specific',
		'Medium',
		'NAE',
		blockUrl.nae,
	],
	[
		'9',
		'CRL Technologies',
		'NAE incumbent',
		'Track AIRWorks and rapid engineering role',
		'AIRWorks-related NAE company signal',
		'Need deeper award lineage',
		'Opportunity-specific',
		'Medium',
		'NAE',
		blockUrl.nae,
	],
	[
		'10',
		'Booz Allen / GDIT / CACI NSS',
		'Scale wildcards',
		'Monitor as HACS scale partners or competitors',
		'Cyber/IT scale, HACS eligibility, broad federal footprint',
		'No direct public IOM lineage found',
		'MAS HACS / 54151S',
		'Medium',
		'CGCYBER / NAE',
		`${blockUrl.cgcyber}; ${blockUrl.nae}`,
	],
];

const actions = [
	[
		'1',
		'Global Opportunity Dashboard',
		'Cross-block pursuit cockpit',
		'Current build',
		'First unified surface across NIWC PAC AA, CGCYBER IOM, and NAE.',
		'Research-wide',
		'Dashboard',
		'Capture action',
		'Create comparable opportunity, company, gap, and source tables so the existing blocks can be worked as one portfolio.',
		'High',
		'Dashboard',
		blockUrl.dashboard,
	],
	[
		'2',
		'Top Pursuit Deep Dives',
		'Opportunity one-pagers',
		'Next',
		'CGCYBER IOM, NIWC PAC AA recompete, TARCES, EXCOMM XI, AIRWorks, PMA-290.',
		'All blocks',
		'Deep dives',
		'Capture action',
		'Build one detail page per priority pursuit with buyer, incumbent, value, vehicle, gaps, win themes, and next actions.',
		'High',
		'Research System',
		blockUrl.system,
	],
	[
		'3',
		'CGCYBER Incumbent Bridge',
		'Current performer resolution',
		'Open',
		'Find 2025-2026 CuOps/FuOps/Ops Support performer or keep explicitly unresolved.',
		'CGCYBER IOM',
		'Collection',
		'Gap closure',
		'Current bridge is not public in existing sources; this is the biggest transition-knowledge uncertainty.',
		'High',
		'CGCYBER IOM',
		blockUrl.cgcyber,
	],
	[
		'4',
		'AA PM / COR / TCA Gap',
		'Current official role resolution',
		'Open',
		'Continue public-source search for current AA PM, COR, technical lead, and TCA role.',
		'NIWC PAC AA',
		'Collection',
		'Gap closure',
		'No public current names found so far; matrix should continue to show public-gap rows instead of guessed people.',
		'High',
		'NIWC PAC AA',
		blockUrl.niwc,
	],
	[
		'5',
		'NAE 44-Row Prioritization',
		'Opportunity scoring',
		'Open',
		'Rank NAE rows by value, fit, timing, access, incumbent threat, and actionability.',
		'NAE',
		'Scoring',
		'Portfolio action',
		'The NAE table is broad now; it needs a sharper top-10 and no-bid/watch split.',
		'High',
		'NAE',
		blockUrl.nae,
	],
	[
		'6',
		'Cross-Block Company Graph',
		'Company and teaming network',
		'Open',
		'Connect GovCIO, Synergy, Forward Slope/Accelint/Lyntris, NetCentrics, OneOmega, Atlas, BAE, StraCon, CRL, Booz, GDIT, CACI.',
		'Research-wide',
		'Graph',
		'Teaming action',
		'Company rows still live in separate block tables; a unified network will expose partner/threat overlap.',
		'High',
		'Research System',
		blockUrl.system,
	],
	[
		'7',
		'Cross-Block Contact Graph',
		'Public professional contact network',
		'Open',
		'Unify public PCOs, OSBP routes, command leaders, office mailboxes, and technical stakeholders.',
		'Research-wide',
		'Graph',
		'Engagement action',
		'Must preserve public-professional-only boundary and keep source confidence visible.',
		'High',
		'Research System',
		blockUrl.system,
	],
	[
		'8',
		'Source Drift Monitor',
		'Automated change detection',
		'Open',
		'Watch APFS, SAM, LRAF, awards, source health, value/date/status changes, and dead links.',
		'Research-wide',
		'Automation',
		'Watchlist action',
		'Needs normalized source registry and scheduled checks across all research blocks.',
		'Medium',
		'Research System',
		blockUrl.system,
	],
];

const sources = [
	['S1', 'Research System', 'Repeatable schema and plan source', blockUrl.system],
	['S2', 'NIWC PAC AA research block', 'NIWC PAC, AA, Forward Slope, and lineage source data', blockUrl.niwc],
	['S3', 'CGCYBER IOM research block', 'CGCYBER org, contracts, competitors, and source data', blockUrl.cgcyber],
	['S4', 'Naval Aviation Enterprise research block', 'NAE org, opportunity, company, and source data', blockUrl.nae],
];

const headers = {
	opportunities: [
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
	companies: [
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
	actions: [
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
	sources: ['ID', 'Title', 'Use', 'URL'],
};

function csvEscape(value) {
	const text = String(value ?? '');
	if (/[",\n\r]/.test(text)) return `"${text.replaceAll('"', '""')}"`;
	return text;
}

function writeCsv(name, header, rows) {
	fs.writeFileSync(path.join(outDir, name), [header, ...rows].map((row) => row.map(csvEscape).join(',')).join('\n'));
}

function escapeXml(value) {
	return String(value ?? '')
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');
}

function wrap(value, max = 26) {
	const lines = [];
	let line = '';
	for (const word of String(value).split(/\s+/)) {
		const next = line ? `${line} ${word}` : word;
		if (next.length > max) {
			if (line) lines.push(line);
			line = word;
		} else line = next;
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
		red: ['#450a0a', '#f87171'],
		slate: ['#1e293b', '#94a3b8'],
	};
	const [fill, stroke] = palette[tone] ?? palette.core;
	return `<g>
		<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="0" fill="${fill}" stroke="${stroke}" stroke-width="1.4"/>
		${wrap(title, 24)
			.map((line, i) => `<text x="${x + 14}" y="${y + 24 + i * 16}" class="box-title">${escapeXml(line)}</text>`)
			.join('')}
		${wrap(body, 32)
			.map((line, i) => `<text x="${x + 14}" y="${y + 72 + i * 15}" class="box-body">${escapeXml(line)}</text>`)
			.join('')}
	</g>`;
}

function line(x1, y1, x2, y2) {
	const mid = Math.round((x1 + x2) / 2);
	return `<path d="M ${x1} ${y1} L ${mid} ${y1} L ${mid} ${y2} L ${x2} ${y2}" fill="none" stroke="#64748b" stroke-width="1.2" opacity="0.72" marker-end="url(#arrow)"/>`;
}

function svgShell(title, subtitle, content) {
	return `<svg xmlns="http://www.w3.org/2000/svg" width="1320" height="720" viewBox="0 0 1320 720">
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
		<rect class="bg" width="1320" height="720"/>
		<text x="36" y="42" class="kicker">Research dashboard</text>
		<text x="36" y="78" class="title">${escapeXml(title)}</text>
		<text x="36" y="104" class="subtitle">${escapeXml(subtitle)}</text>
		${content}
	</svg>`;
}

function cockpitSvg() {
	const content = [
		box({
			x: 40,
			y: 150,
			w: 250,
			h: 150,
			title: 'NIWC PAC AA',
			body: 'AA recompete, Code 53/532/53200, Forward Slope lineage, public POC gaps.',
			tone: 'blue',
		}),
		box({
			x: 340,
			y: 150,
			w: 250,
			h: 150,
			title: 'CGCYBER IOM',
			body: '>$100M FFP forecast, 24x7 SOC/CSSP gap, IARMS/IMS/C5I seams.',
			tone: 'green',
		}),
		box({
			x: 640,
			y: 150,
			w: 250,
			h: 150,
			title: 'NAE',
			body: '44 NAWCAD LRAF rows, PEO/PMA lanes, PCOs, incumbents, OSBP routes.',
			tone: 'amber',
		}),
		box({
			x: 990,
			y: 150,
			w: 250,
			h: 150,
			title: 'Global Cockpit',
			body: 'Compare value, timing, buyer, incumbent, Sabre fit, team need, next action.',
			tone: 'core',
		}),
		box({
			x: 190,
			y: 410,
			w: 250,
			h: 136,
			title: 'Deep Dives',
			body: 'TARCES, EXCOMM XI, CGCYBER IOM, AA recompete, PMA-290, AIRWorks.',
			tone: 'purple',
		}),
		box({
			x: 535,
			y: 410,
			w: 250,
			h: 136,
			title: 'Graphs',
			body: 'Company graph, contact graph, lineage timelines, source confidence.',
			tone: 'slate',
		}),
		box({
			x: 880,
			y: 410,
			w: 250,
			h: 136,
			title: 'Watchlist',
			body: 'APFS, SAM, LRAF, awards, dates, value changes, and source health.',
			tone: 'red',
		}),
		line(290, 225, 340, 225),
		line(590, 225, 640, 225),
		line(890, 225, 990, 225),
		line(1115, 300, 315, 410),
		line(1115, 300, 660, 410),
		line(1115, 300, 1005, 410),
	].join('');
	return svgShell(
		'Cross-Block Opportunity Cockpit',
		'Existing research blocks now roll up into one comparable pursuit surface.',
		content,
	);
}

writeCsv('research-dashboard-opportunities.csv', headers.opportunities, opportunities);
writeCsv('research-dashboard-companies.csv', headers.companies, companies);
writeCsv('research-dashboard-actions.csv', headers.actions, actions);
writeCsv('research-dashboard-source-register.csv', headers.sources, sources);
fs.writeFileSync(path.join(outDir, 'research-dashboard-cockpit.svg'), cockpitSvg());

console.log(
	JSON.stringify(
		{
			opportunities: opportunities.length,
			companies: companies.length,
			actions: actions.length,
			sources: sources.length,
			charts: 1,
		},
		null,
		2,
	),
);
