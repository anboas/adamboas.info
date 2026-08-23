export const sabreUpdatedAt = '2026-08-22';

export const budgetRollup = {
	totalFy2027B: 1472.4,
	books: [
		{
			name: 'Procurement',
			code: 'P-1',
			valueB: 434.2,
			signal: 'where platforms, weapons, space, drones, cyber hardware, and modernization buys become programs',
		},
		{
			name: 'Operations and Maintenance',
			code: 'O-1',
			valueB: 430.8,
			signal: 'where sustainment, readiness, enterprise services, cloud, cyber operations, and services scale',
		},
		{
			name: 'RDT&E',
			code: 'R-1',
			valueB: 344.8,
			signal: 'where emerging tech, software, AI, digital engineering, test, and new mission concepts start',
		},
		{
			name: 'Military Personnel',
			code: 'M-1',
			valueB: 205.1,
			signal: 'force structure, training burden, readiness pressure, and personnel-driven modernization needs',
		},
		{
			name: 'MILCON / Family Housing / BRAC',
			code: 'C-1',
			valueB: 31.3,
			signal: 'base modernization, labs, depots, ranges, shipyards, and physical infrastructure',
		},
		{
			name: 'Revolving and Management Funds',
			code: 'RF-1',
			valueB: 26.3,
			signal: 'working-capital, logistics, stockpile, commissary, and industrial operations',
		},
	],
	orgs: [
		{ code: 'N', name: 'Navy / Marine Corps', valueB: 392.3 },
		{ code: 'F', name: 'Air Force / Space Force', valueB: 318.0 },
		{ code: 'A', name: 'Army', valueB: 249.0 },
		{ code: 'OSD', name: 'OSD / Defense-Wide', valueB: 227.3 },
		{ code: 'DHA', name: 'Defense Health Agency', valueB: 47.2 },
		{ code: 'DISA', name: 'DISA', valueB: 22.8 },
		{ code: 'DLA', name: 'Defense Logistics Agency', valueB: 21.2 },
		{ code: 'MDA', name: 'Missile Defense Agency', valueB: 19.0 },
		{ code: 'SOCOM', name: 'USSOCOM', valueB: 15.7 },
		{ code: 'DARPA', name: 'DARPA', valueB: 5.0 },
		{ code: 'CYBER', name: 'USCYBERCOM', valueB: 4.2 },
	],
	heatmap: [
		{ lane: 'Army', oAndM: 85.4, procurement: 65.9, rdte: 18.3, milpers: 80.0, milcon: 5.1 },
		{ lane: 'Navy / Marine Corps', oAndM: 110.2, procurement: 151.4, rdte: 33.5, milpers: 70.1, milcon: 26.9 },
		{ lane: 'Air Force / Space Force', oAndM: 101.1, procurement: 89.9, rdte: 68.4, milpers: 55.1, milcon: 3.5 },
		{ lane: 'Fourth Estate', oAndM: 134.1, procurement: 127.0, rdte: 224.6, milpers: 0, milcon: 0.8 },
	],
	topLines: [
		{
			buyer: 'OSD / Defense-Wide',
			book: 'R-1',
			line: 'Defense-Wide RDT&E',
			valueB: 156.2,
			growth: 'AI, cyber, space, missile defense, test, and enterprise modernization starts here.',
		},
		{
			buyer: 'Air Force / Space Force',
			book: 'R-1',
			line: 'Air and space RDT&E',
			valueB: 114.8,
			growth: 'EWAAC, digital engineering, weapons integration, space superiority, and software acceleration.',
		},
		{
			buyer: 'Navy / Marine Corps',
			book: 'P-1/O-1',
			line: 'Fleet, aviation, shipyard, and Marine modernization',
			valueB: 261.6,
			growth: 'Use NAVAIR as proof, but expand into NAVSEA, NIWC, PEO Digital, unmanned, and sustainment.',
		},
		{
			buyer: 'DISA / DLA / DHA / MDA',
			book: 'O-1/R-1/RF-1',
			line: 'Fourth Estate enterprise mass',
			valueB: 110.2,
			growth: 'Enterprise data, cyber, workflow, logistics, health, missile defense, and platform modernization.',
		},
	],
};

export const growthPlays = [
	{
		name: 'Agentic Software Factory',
		short: 'Devin + Sabre',
		fit: 'Use Cognition Devin as the wedge, with Sabre providing federal adoption, secure delivery, RMF evidence, evaluation, human review, and sustainment.',
		buyers: ['Air Force software factories', 'DISA', 'CDAO', 'PEO Digital', 'DHA', 'DLA', 'Army PEOs'],
		firstProof:
			'Non-production backlog burn-down, test generation, modernization of a legacy service, and audited human-in-the-loop code review.',
	},
	{
		name: 'Mission Data and AI Integration',
		short: 'data to decision',
		fit: 'Build governed data products, authoritative feeds, analytics, model evaluation, and AI-ready operating pictures.',
		buyers: ['CDAO', 'DAF', 'DLA', 'DHA', 'Army C5ISR', 'Navy PEO Digital', 'USSF'],
		firstProof:
			'One mission data product with lineage, access controls, dashboard, model-ready schema, and decision workflow.',
	},
	{
		name: 'Digital Engineering Bridge',
		short: 'MBSE to delivery',
		fit: 'Connect systems engineering, MBSE, test, software, and data into digital-thread artifacts that programs can actually use.',
		buyers: ['AFLCMC/Eglin', 'AFTC', 'NAVAIR', 'NAVSEA', 'MDA', 'Army Futures Command'],
		firstProof: 'A model-to-test-to-software trace for one weapon, platform, payload, or integration problem.',
	},
	{
		name: 'Continuous Authorization',
		short: 'ATO evidence',
		fit: 'Turn pipelines, controls, vulnerability flow, SBOMs, audit records, and deployment evidence into a repeatable cATO package.',
		buyers: ['DISA', 'Service CIOs', 'DHA', 'DLA', 'PEO Digital', 'software factories'],
		firstProof: 'One compliance evidence spine mapped to NIST controls, artifacts, owners, and release gates.',
	},
	{
		name: 'Test and Evaluation Acceleration',
		short: 'test velocity',
		fit: 'Use automation and AI to accelerate test planning, evidence capture, anomaly triage, simulation, and reporting.',
		buyers: ['AFTC', 'NAWCAD', 'ATEC', 'MDA', 'AFRL', 'range organizations'],
		firstProof: 'A test evidence workflow that reduces report cycle time and improves traceability.',
	},
	{
		name: 'Enterprise Workflow Modernization',
		short: 'Fourth Estate',
		fit: 'Modernize high-friction administrative, logistics, health, audit, and financial workflows without pretending the customer has clean greenfield systems.',
		buyers: ['DLA', 'DHA', 'DCMA', 'DCSA', 'DFAS', 'WHS', 'DODEA'],
		firstProof: 'One painful workflow rebuilt with identity, data, approvals, audit trail, and dashboarding.',
	},
];

export const serviceLanes = [
	{
		name: 'Air Force / Space Force',
		tag: 'primary growth wedge',
		budgetSignal:
			'$318.0B FY2027 extract across major books; DAF public page cites a $338.8B total request and strategic shift to modernization/readiness.',
		focus: [
			'EWAAC task-order activation at AFLCMC Armament Directorate and Eglin mission partners.',
			'Digital/model-based systems engineering, open systems architecture, weapons integration, data analytics, test acceleration.',
			'Drone/counter-drone, Golden Dome, cyber superiority, space superiority, F-47, B-21, munitions, and battle-network integration.',
			'Software factories, cATO, AI-enabled engineering, platform modernization, and data products that shorten acquisition/test cycles.',
		],
		who: [
			'AFLCMC/EB and Eglin',
			'AFTC/Edwards',
			'AFRL',
			'AFWERX',
			'Kessel Run / DAF software ecosystem',
			'PEO Digital',
			'Space Systems Command',
			'SpaceWERX',
			'SDA',
			'USSF/S4S and C3BM-adjacent offices',
		],
		companies: [
			'Cognition',
			'Anduril',
			'Palantir',
			'RTX',
			'Lockheed Martin',
			'Northrop Grumman',
			'Boeing',
			'L3Harris',
			'SAIC',
			'Leidos',
			'CACI',
			'Booz Allen',
			'Raft',
			'Rise8',
			'Second Front',
			'Microsoft',
			'AWS',
			'Google Public Sector',
			'Databricks',
			'Snowflake',
			'Red Hat',
			'GitLab',
		],
		opportunities: [
			'EWAAC weapons/digital engineering package',
			'Devin pilot for software-factory backlog',
			'Golden Dome data/test/cyber edge package',
			'AFTC test evidence automation',
			'USSF data and software modernization wedge',
		],
		first30:
			'Walk into Denver with three offers: EWAAC digital-engineering acceleration, agentic software factory pilot, and test/evidence automation for weapons programs.',
	},
	{
		name: 'Army',
		tag: 'APG and C5ISR expansion',
		budgetSignal:
			'$249.0B FY2027 extract; heavy O&M and personnel mass, with modernization opportunity in C5ISR, tactical network, EW, cyber, autonomy, and industrial base.',
		focus: [
			'Exploit Sabre APG/C5ISR credibility beyond staff augmentation into tactical network, crypto modernization, cyber, lab engineering, and integration.',
			'Target PEO C3T, PEO IEW&S, DEVCOM C5ISR, AFC, RCCTO, ACC-APG, ACC-Redstone, and depot/arsenal modernization.',
			'Position software/data/AI as enablers of tactical network, sensor-to-shooter, EW, sustainment, and readiness.',
			'Look for places where O&M pain can fund workflow, data, cyber, and lab automation faster than large program starts.',
		],
		who: [
			'PEO C3T',
			'PEO IEW&S',
			'DEVCOM C5ISR Center',
			'Army Futures Command',
			'RCCTO',
			'ACC-APG',
			'ACC-Redstone',
			'ATEC',
			'Army Cyber',
			'depots and arsenals',
		],
		companies: [
			'Palantir',
			'Anduril',
			'L3Harris',
			'General Dynamics Mission Systems',
			'RTX',
			'Northrop Grumman',
			'Lockheed Martin',
			'CACI',
			'Leidos',
			'SAIC',
			'Booz Allen',
			'Sierra Nevada',
			'Parry Labs',
			'Red Hat',
			'GitLab',
			'Microsoft',
			'AWS',
		],
		opportunities: [
			'C5ISR lab modernization',
			'tactical network data products',
			'EW/cyber engineering support',
			'depot workflow and data modernization',
			'AI-assisted test and integration',
		],
		first30:
			'Use APG as the first non-NAVAIR proof lane: map existing Sabre relationships, then identify two C5ISR modernization pursuits with funding path and partner fit.',
	},
	{
		name: 'Navy / Marine Corps',
		tag: 'proof library, not only destination',
		budgetSignal:
			'$392.3B FY2027 extract; largest service-family mass, but your role should use NAVAIR as credibility while expanding into Navy/Marine enterprise and adjacent commands.',
		focus: [
			'Keep NAVAIR SED/NDD as proof of mission-systems plus digital modernization, but avoid being boxed into NAVAIR.',
			'Expand into NAVSEA, NIWC, PEO Digital, shipyard modernization, unmanned systems, Marine Corps C2/autonomy, and sustainment analytics.',
			'Turn aircraft/platform engineering patterns into reusable Navy/Marine digital-thread, test, data, and secure software offerings.',
			'Use PMA lessons to open conversations where mission systems, software, data, and cyber are already entangled.',
		],
		who: [
			'NAVSEA',
			'NIWC Atlantic/Pacific',
			'PEO Digital',
			'Marine Corps Warfighting Lab',
			'PEO Land Systems',
			'MARCORSYSCOM',
			'NAVAIR SED/NDD',
			'shipyard and depot modernization offices',
		],
		companies: [
			'HII Mission Technologies',
			'Serco',
			'QinetiQ',
			'BAE Systems',
			'ManTech',
			'Leidos',
			'SAIC',
			'CACI',
			'Booz Allen',
			'GDIT',
			'Palantir',
			'Anduril',
			'Saronic',
			'Shield AI',
			'Microsoft',
			'AWS',
			'Databricks',
		],
		opportunities: [
			'NDD activation packages',
			'shipyard data/workflow modernization',
			'unmanned C2/data integration',
			'Marine Corps autonomy/C2 support',
			'AI-assisted engineering/test workflows',
		],
		first30:
			'Protect existing Sabre ownership, then harvest repeatable patterns from NAVAIR that can become Navy/Marine-wide offers.',
	},
	{
		name: 'Fourth Estate / Joint',
		tag: 'enterprise modernization field',
		budgetSignal:
			'Defense-Wide/OSD plus agencies dominate RDT&E and O&M signals: OSD $227.3B, DHA $47.2B, DISA $22.8B, DLA $21.2B, MDA $19.0B in extracted FY2027 lines.',
		focus: [
			'Lead with enterprise pain: data access, cyber compliance, audit, logistics, health, identity, workflow drag, legacy apps, and shared-service modernization.',
			'Prioritize DISA, DLA, DHA, CDAO, MDA, USCYBERCOM, SOCOM, DCSA, DCMA, DFAS, WHS, and Joint Staff where mission outcome depends on enterprise systems.',
			'Use Devin/Cognition as a secure adoption play for software throughput, not a standalone AI pitch.',
			'Build solutions around governance, evidence, data boundaries, modernization, and practical integration in messy environments.',
		],
		who: [
			'DISA',
			'DLA',
			'DHA',
			'CDAO',
			'MDA',
			'USCYBERCOM',
			'USSOCOM',
			'DCSA',
			'DCMA',
			'DFAS',
			'WHS',
			'Joint Staff',
			'OUSD CIO / CDAO-adjacent policy offices',
		],
		companies: [
			'Cognition',
			'ServiceNow',
			'Palantir',
			'Databricks',
			'Snowflake',
			'Microsoft',
			'AWS',
			'Google Public Sector',
			'Oracle',
			'Salesforce',
			'GitLab',
			'Red Hat',
			'Splunk',
			'Elastic',
			'Zscaler',
			'Tanium',
			'Booz Allen',
			'Leidos',
			'SAIC',
			'CACI',
			'GDIT',
			'ECS',
		],
		opportunities: [
			'DISA secure software/ATO package',
			'DLA logistics data modernization',
			'DHA workflow and data automation',
			'CDAO mission data product factory',
			'MDA digital-thread/test evidence package',
		],
		first30:
			'Build a Fourth Estate account map from budget mass, pain themes, existing Sabre access, and partner leverage. Pick one enterprise buyer for a 90-day pilot.',
	},
];

export const firstThirtyDays = [
	{
		window: 'Days 1-5',
		name: 'Listen and map power',
		actions: [
			'Meet Sabre growth, capture, delivery, and contract owners.',
			'Map vehicles, incumbents, customer owners, task-order health, and no-go boundaries.',
			'Ask where Sabre is credible but not converting credibility into growth.',
		],
	},
	{
		window: 'Days 6-10',
		name: 'Build the market map',
		actions: [
			'Create service/Fourth Estate account maps.',
			'Tie budget lines to likely buyers, vehicles, and Sabre capabilities.',
			'Rank 15 target accounts by access, urgency, funding, partner leverage, and delivery credibility.',
		],
	},
	{
		window: 'Days 11-15',
		name: 'Partner and productize',
		actions: [
			'Run Cognition/Devin security and partner diligence.',
			'Create partner tiers: platform, mission tech, cyber/data, capture allies, and subcontract channels.',
			'Turn generic services into six named offers with proof artifacts.',
		],
	},
	{
		window: 'Days 16-20',
		name: 'Pick lighthouse pursuits',
		actions: [
			'Select one Air Force/EWAAC play, one Fourth Estate play, and one Devin pilot.',
			'Draft solution sketches, customer questions, vehicle path, differentiators, and delivery handoff.',
			'Identify first customer meeting and first internal owner for each.',
		],
	},
	{
		window: 'Days 21-30',
		name: 'Operate the growth machine',
		actions: [
			'Stand up a weekly growth architecture board.',
			'Publish the pursuit intake and qualification method.',
			'Create first brief decks, one-pagers, budget traces, partner asks, and pilot charters.',
		],
	},
];

export const conversationTargets = [
	{
		group: 'Sabre internal',
		people: [
			'Dennis DePriest',
			'Brian Harper',
			'Jackie Erickson',
			'EWAAC owner',
			'APG/C5ISR owner',
			'Fourth Estate/federal civilian owner',
			'Contracts lead',
			'Pricing/finance lead',
			'Top program managers',
		],
		ask: 'Where do we have access, credibility, and contractual path, but no packaged growth motion yet?',
	},
	{
		group: 'Cognition',
		people: ['Partnership lead', 'Federal/security lead', 'Product lead', 'Deployment architecture lead'],
		ask: 'What does it take for Sabre to become the federal SI wrapper: security, delivery, support, pricing, evaluation, and partner exclusivity?',
	},
	{
		group: 'Air Force / Space',
		people: [
			'AFLCMC/Eglin stakeholders',
			'EWAAC teammates',
			'AFTC contacts',
			'AFRL/AFWERX contacts',
			'USSF software/data contacts',
		],
		ask: 'Which mission workflows are funded, painful, and measurable enough for a 60-90 day modernization pilot?',
	},
	{
		group: 'Fourth Estate',
		people: [
			'DISA platform/cyber owners',
			'DLA logistics/data owners',
			'DHA workflow/data owners',
			'CDAO mission-data owners',
			'MDA digital engineering/test owners',
		],
		ask: 'Where can secure software, data, workflow, and AI integration remove cycle time or compliance drag quickly?',
	},
	{
		group: 'Partner ecosystem',
		people: [
			'Cloud providers',
			'data platforms',
			'DevSecOps vendors',
			'mission-tech firms',
			'major primes with channel access',
			'small innovators needing federal integration',
		],
		ask: 'What can Sabre uniquely integrate, certify, sell, and sustain that the partner cannot do alone?',
	},
];

export const financialLifecycle = [
	{
		stage: 'Strategy and Budget Build',
		artifacts: ['National Defense Strategy', 'service POM builds', 'FYDP', 'President Budget request'],
		sabreMove:
			'Find the program office pain before it becomes a requirement. Shape language, metrics, pilots, and partner demos early.',
		watch:
			'Budget issue papers, POM trades, RDT&E starts, unfunded priority lists, posture statements, and service modernization themes.',
	},
	{
		stage: 'Authorization',
		artifacts: ['NDAA marks', 'committee reports', 'policy direction', 'program restrictions'],
		sabreMove:
			'Track what Congress authorizes, restricts, accelerates, or asks to be reported. Convert direction into capture narratives.',
		watch:
			'New starts, plus-ups, reporting requirements, pilots, acquisition authorities, and industrial-base language.',
	},
	{
		stage: 'Appropriation',
		artifacts: ['defense appropriations', 'explanatory statements', 'reprogramming lanes', 'color-of-money totals'],
		sabreMove:
			'Separate interest from obligable money. Match each opportunity to RDT&E, procurement, O&M, MILCON, or working capital.',
		watch:
			'Line-item plus-ups, reductions, congressional special-interest items, marks against software/data/AI lines, and execution clocks.',
	},
	{
		stage: 'Allocation and Execution',
		artifacts: ['apportionment', 'allotment', 'spend plans', 'MIPRs', 'program office execution plans'],
		sabreMove:
			'Find who controls the spend plan and who can release funding to a vehicle. Build task-order-ready packages.',
		watch:
			'Spend-plan owners, contracting office workload, MIPR recipients, expiring funds, and end-of-year unfunded requirement movement.',
	},
	{
		stage: 'Acquisition Channel',
		artifacts: [
			'IDIQ task order',
			'GWAC/BPA order',
			'OTA prototype',
			'SBIR/STTR',
			'BAA/CSO',
			'marketplace award',
			'direct award',
		],
		sabreMove: 'Pick the path that matches urgency, maturity, competition, partner access, and compliance burden.',
		watch:
			'Scope fit, fair opportunity, protest risk, OTA membership, marketplace eligibility, security requirements, and evaluation path.',
	},
	{
		stage: 'Obligation to Renewal',
		artifacts: ['award', 'obligation', 'modification', 'CPARS', 'follow-on production', 'option exercise'],
		sabreMove:
			'Turn delivery into the next opportunity. Capture evidence, expand scope, and create repeatable offerings from successful pilots.',
		watch:
			'Obligation burn, ceiling remaining, option timing, performance ratings, adjacent offices, and production/follow-on authority.',
	},
];

export const workSources = [
	{
		name: 'Program Vehicles and Task Orders',
		type: 'FAR / IDIQ',
		speed: 'medium',
		bestFor:
			'known services, systems engineering, software modernization, cyber, data, and sustainment where Sabre already has vehicle access',
		whereToWatch: ['Sabre prime vehicles', 'EWAAC', 'SED/NDD', 'SAM.gov notices', 'incumbent task-order mods'],
		sabreAction:
			'Build task-order-ready solution packages with scope language, labor categories, transition plan, and proof artifacts.',
		risk: 'Ceiling is not revenue. Scope and customer ownership matter more than vehicle logo.',
	},
	{
		name: 'GWACs, BPAs, and IT Marketplaces',
		type: 'GSA / NASA SEWP / agency stores',
		speed: 'medium-fast',
		bestFor:
			'enterprise IT, cloud, software, cybersecurity, platforms, data products, hardware/software bundles, and commercial services',
		whereToWatch: [
			'GSA Alliant / Polaris / STARS / VETS',
			'NASA SEWP',
			'agency BPAs',
			'eBuy-style RFQs',
			'reseller channels',
		],
		sabreAction:
			'Map which partners already hold the right spot, then package Sabre as implementation, integration, security, and mission adoption lead.',
		risk: 'Easy to buy does not mean easy to win. Partner position and socioeconomic strategy can dominate.',
	},
	{
		name: 'OTAs and Consortia',
		type: 'prototype / production pathway',
		speed: 'fast when sponsor is real',
		bestFor:
			'nontraditional tech, prototypes, mission demonstrations, microelectronics, cyber, autonomy, hypersonics, C5ISR, and rapid transition',
		whereToWatch: ['NSTXL', 'ATI-managed consortia', 'SOSSEC', 'Space Enterprise Consortium', 'TReX', 'C5 Consortium'],
		sabreAction:
			'Join, partner, or become the federal integration wrapper for commercial tech that needs mission engineering, test, RMF, and transition.',
		risk: 'Prototype awards are not automatically durable revenue. Follow-on production strategy must be designed on day one.',
	},
	{
		name: 'Commercial Solution Openings and BAAs',
		type: 'CSO / BAA / R&D',
		speed: 'fast-to-medium',
		bestFor:
			'RDT&E, demonstrations, applied research, new capability areas, AI/data prototypes, and mission experiments',
		whereToWatch: ['DIU solicitations', 'AFWERX', 'DARPA/ARPA-style BAAs', 'service labs', 'CDAO mission challenges'],
		sabreAction:
			'Pair a technology partner with Sabre delivery credibility, then propose a measurable mission experiment with transition owner.',
		risk: 'Can produce impressive pilots that die without a program office, budget line, or transition vehicle.',
	},
	{
		name: 'Tradewinds and AI Marketplaces',
		type: 'CDAO / marketplace',
		speed: 'fast discovery, variable award path',
		bestFor: 'AI, data, analytics, model operations, governance, evaluation, and software-enabled mission tools',
		whereToWatch: [
			'Tradewinds Solutions Marketplace',
			'CDAO channels',
			'AI/data challenge calls',
			'platform partner listings',
		],
		sabreAction:
			'Use marketplace visibility to make Devin/Sabre and data/AI offers discoverable, then drive buyer-specific pilots.',
		risk: 'Marketplace presence is lead generation, not capture. You still need buyer, funding, authority, and delivery path.',
	},
	{
		name: 'SBIR/STTR and Phase III',
		type: 'small business transition',
		speed: 'medium',
		bestFor:
			'commercial innovation, non-dilutive R&D, Phase III transition, and teaming with small firms that hold technical rights',
		whereToWatch: [
			'DoD SBIR/STTR',
			'AFWERX open topics',
			'Navy/Army topics',
			'Phase III sole-source paths',
			'portfolio companies',
		],
		sabreAction:
			'Become transition/integration partner for small firms: mission fit, systems engineering, cyber, deployment, and sustainment.',
		risk: 'Small business owns the core path. Sabre has to add transition power without smothering the innovator.',
	},
	{
		name: 'Strategic Capital and Industrial Base Finance',
		type: 'loans / fund leverage / supply-chain finance',
		speed: 'slow strategic',
		bestFor:
			'manufacturing scale, critical technology supply chains, munitions, microelectronics, energy, space, autonomy, and industrial capacity',
		whereToWatch: [
			'Office of Strategic Capital',
			'Title III / IBAS',
			'critical technology funds',
			'loan programs',
			'partner cap tables',
		],
		sabreAction:
			'Track where capital-backed companies need federal demand, integration, certification, test, and program access.',
		risk: 'Not a contract substitute. Treat as partner intelligence and industrial-base shaping.',
	},
	{
		name: 'Subcontracts and Prime Ecosystems',
		type: 'partner channel',
		speed: 'variable',
		bestFor: 'large programs where access, clearance, incumbency, or contract position is controlled by a major prime',
		whereToWatch: [
			'prime supplier portals',
			'teammate pipelines',
			'industry days',
			'mentor-protege channels',
			'capture partner calls',
		],
		sabreAction:
			'Be the differentiated technical growth partner: agentic software, digital engineering, data, cyber, and mission integration.',
		risk: 'Prime-led work can trap Sabre in low-margin labor unless the technical wedge and customer visibility are explicit.',
	},
];

export const opportunityAssessment = {
	gates: [
		{
			name: 'Mission Pain',
			question: 'Is there a named mission, program, or enterprise workflow with measurable friction?',
			evidence: ['cycle time', 'readiness gap', 'test delay', 'ATO delay', 'data-access problem', 'sustainment burden'],
		},
		{
			name: 'Money Path',
			question: 'Which appropriation, budget line, spend plan, or MIPR can actually pay for it?',
			evidence: ['R-1/P-1/O-1 line', 'FYDP signal', 'plus-up', 'expiring O&M', 'program-office spend owner'],
		},
		{
			name: 'Authority and Channel',
			question:
				'What lets the buyer move: task order, GWAC, OTA, CSO, BAA, SBIR Phase III, marketplace, or subcontract?',
			evidence: [
				'vehicle scope',
				'ordering office',
				'consortium sponsor',
				'marketplace listing',
				'contracting strategy',
			],
		},
		{
			name: 'Sabre Right To Win',
			question: 'Why Sabre instead of the incumbent, prime, boutique, or product vendor?',
			evidence: [
				'past performance',
				'customer access',
				'mission engineering',
				'clearances',
				'delivery team',
				'partner leverage',
			],
		},
		{
			name: 'Partner Leverage',
			question: 'Which company makes the offer sharper or faster, and what can Sabre do that partner cannot?',
			evidence: [
				'product wedge',
				'reseller path',
				'exclusive angle',
				'security wrapper',
				'integration burden',
				'support model',
			],
		},
		{
			name: 'Conversion Path',
			question: 'Can a pilot become durable work within 6-18 months?',
			evidence: [
				'production authority',
				'option/mod path',
				'follow-on task order',
				'budget owner',
				'CPARS path',
				'repeatable offer',
			],
		},
	],
	scoring: [
		{ factor: 'Buyer pain clarity', weight: 20 },
		{ factor: 'Funding traceability', weight: 20 },
		{ factor: 'Contract channel readiness', weight: 15 },
		{ factor: 'Sabre differentiator', weight: 15 },
		{ factor: 'Partner leverage', weight: 10 },
		{ factor: 'Speed to pilot', weight: 10 },
		{ factor: 'Follow-on scale', weight: 10 },
	],
	decisionBands: [
		{
			range: '85-100',
			label: 'Pursue now',
			action: 'assign owner, schedule customer call, build capture artifact this week',
		},
		{
			range: '70-84',
			label: 'Shape hard',
			action: 'resolve missing buyer, funding, or channel evidence before committing resources',
		},
		{
			range: '50-69',
			label: 'Watch / partner',
			action: 'track source, build relationship, wait for clearer money or access',
		},
		{ range: '<50', label: 'Do not chase', action: 'archive unless leadership has a strategic reason to invest' },
	],
};

export const sources = [
	{
		label: 'DoW FY2027 budget release',
		url: 'https://www.war.gov/News/Releases/Release/Article/4466038/department-of-war-releases-the-presidents-fiscal-year-2027-budget/',
	},
	{ label: 'OUSD(C) FY2027 budget materials', url: 'https://comptroller.war.gov/Budget-Materials/' },
	{
		label: 'FY2027 budget overview book',
		url: 'https://comptroller.war.gov/Portals/45/Documents/defbudget/FY2027/FY2027_Budget_Request_Overview_Book.pdf',
	},
	{
		label: 'FY2027 full budget request',
		url: 'https://comptroller.war.gov/Portals/45/Documents/defbudget/FY2027/FY2027_Budget_Request.pdf',
	},
	{
		label: 'FY2027 O-1 display',
		url: 'https://comptroller.war.gov/Portals/45/Documents/defbudget/FY2027/o1_display.xlsx',
	},
	{
		label: 'FY2027 P-1 display',
		url: 'https://comptroller.war.gov/Portals/45/Documents/defbudget/FY2027/p1_display.xlsx',
	},
	{
		label: 'FY2027 R-1 display',
		url: 'https://comptroller.war.gov/Portals/45/Documents/defbudget/FY2027/r1_display.xlsx',
	},
	{ label: 'Army budget materials', url: 'https://www.asafm.army.mil/Budget-Materials/' },
	{
		label: 'Department of the Air Force SAF/FM budget page',
		url: 'https://www.af.mil/Secretariat-of-the-Air-Force/Financial-Management-SAF-FM/#budget',
	},
	{
		label: 'Department of the Navy FY2027 budget documentation',
		url: 'https://www.secnav.navy.mil/fmc/Pages/Fiscal-Year-2027.aspx',
	},
	{
		label: 'Defense-Wide FY2027 budget justification',
		url: 'https://comptroller.war.gov/Budget-Materials/FY2027BudgetJustification/',
	},
	{
		label: 'Sabre $499M NAWCAD SED award',
		url: 'https://www.sabresystems.com/sabre-systems-awarded-499m-systems-engineering-contract/',
	},
	{
		label: 'Sabre EWAAC award',
		url: 'https://www.sabresystems.com/sabre-systems-inc-was-awarded-a-prime-position-on-the-eglin-wide-agile-acquisition-contract-ewaac-by-the-armament-directorate-air-force-life-cycle-management-center/',
	},
	{
		label: 'NAVAIR Digital Department award notice',
		url: 'https://www.war.gov/News/Contracts/Contract/Article/4314128/contracts-for-sep-24-2025/',
	},
	{ label: 'Cognition / Devin', url: 'https://cognition.com/' },
	{ label: 'Introducing Devin', url: 'https://cognition.com/blog/introducing-devin' },
	{ label: 'SAM.gov contract opportunities', url: 'https://sam.gov/content/opportunities' },
	{ label: 'DIU commercial / CSO path', url: 'https://www.diu.mil/work-with-us/companies' },
	{ label: 'Tradewinds Solutions Marketplace', url: 'https://www.tradewindsai.com/solutions-marketplace' },
	{ label: 'NSTXL OTA opportunities', url: 'https://nstxl.org/nstxl-opportunities/' },
	{ label: 'Advanced Technology International', url: 'https://www.ati.org/' },
	{ label: 'SOSSEC consortium management', url: 'https://sossecinc.com/' },
	{
		label: 'GSA Governmentwide Acquisition Contracts',
		url: 'https://www.gsa.gov/technology/it-contract-vehicles-and-purchasing-programs/gwacs',
	},
	{ label: 'NASA SEWP', url: 'https://www.sewp.nasa.gov/' },
	{ label: 'FAR Part 16 contract types / IDIQ orders', url: 'https://www.acquisition.gov/far/part-16' },
	{ label: 'FAR Part 35 R&D contracting', url: 'https://www.acquisition.gov/far/part-35' },
	{ label: 'FAR Part 12 commercial products and services', url: 'https://www.acquisition.gov/far/part-12' },
	{ label: 'Office of Strategic Capital', url: 'https://www.cto.mil/osc/' },
];
