import type { RadarEvent } from './types';

export const radarEventsSeed: RadarEvent[] = [
	{
		id: 'radar-ausa-2026',
		title: 'AUSA Global Force Symposium',
		description:
			'Army modernization conference focused on force design, acquisition priorities, and operational integration with industry partners.',
		startDate: '2026-03-25',
		endDate: '2026-03-27',
		branch: 'Army',
		type: 'Conference',
		status: 'Projected',
		signal: 'High',
		effort: 'Medium',
		location: {
			city: 'Huntsville',
			state: 'AL',
			country: 'USA',
			lat: 34.7304,
			lng: -86.5861,
			venue: 'Von Braun Center',
		},
		ontology: {
			themes: ['Force Design', 'Acquisition', 'Autonomy Integration'],
			capabilityAreas: ['Command and Control', 'DevSecOps', 'Systems Integration'],
			missionThreads: ['Land maneuver', 'Contested logistics'],
			stakeholders: ['PEO offices', 'Army Futures Command', 'Prime contractors'],
			keywords: ['army modernization', 'c2', 'joint interoperability'],
			relatedPrograms: ['DAD exploration', 'ACP-RA', 'A2A interoperability'],
			decisionWindows: {
				discovery: 'Now to T-120 days',
				prep: 'T-90 to T-14 days',
				execution: 'Conference week + 14-day follow-up',
			},
			provenance: [
				{
					name: 'AUSA events',
					url: 'https://www.ausa.org/meetings-events',
					type: 'official',
					lastVerified: '2026-02-12',
					confidence: 'Medium',
				},
			],
			links: {
				official: 'https://www.ausa.org/meetings-events',
				registration: 'https://www.ausa.org/meetings-events',
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: { min: 850, max: 2200 },
				travelBurdenFromDc: 'Medium',
			},
			notes: 'Strong venue for Army stakeholder mapping and policy alignment conversations.',
		},
	},
	{
		id: 'radar-sofweek-2026',
		title: 'SOF Week',
		description:
			'Special operations ecosystem event with acquisition, tactical experimentation, and mission partner participation.',
		startDate: '2026-05-04',
		endDate: '2026-05-08',
		branch: 'Joint',
		type: 'Summit',
		status: 'Projected',
		signal: 'High',
		effort: 'High',
		location: {
			city: 'Tampa',
			state: 'FL',
			country: 'USA',
			lat: 27.9506,
			lng: -82.4572,
			venue: 'Tampa Convention Center',
		},
		ontology: {
			themes: ['Operational experimentation', 'Joint mission integration', 'Partner ecosystems'],
			capabilityAreas: ['Autonomous systems', 'Edge C2', 'Mission command'],
			missionThreads: ['Special operations support', 'Rapid mission rehearsal'],
			stakeholders: ['USSOCOM', 'Coalition partners', 'Industry integrators'],
			keywords: ['sof', 'joint', 'expeditionary'],
			relatedPrograms: ['Agentic force creation', 'DAD pilot opportunities'],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-75 to T-10 days',
				execution: 'Event week + 30-day integration tasks',
			},
			provenance: [
				{
					name: 'SOF Week',
					url: 'https://www.sofweek.org/',
					type: 'official',
					lastVerified: '2026-02-12',
					confidence: 'High',
				},
			],
			links: {
				official: 'https://www.sofweek.org/',
				registration: 'https://www.sofweek.org/',
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: { min: 1400, max: 3100 },
				travelBurdenFromDc: 'High',
			},
			notes: 'High value if tied to specific mission threads before attendance.',
		},
	},
	{
		id: 'radar-sea-air-space-2026',
		title: 'Sea-Air-Space Exposition',
		description:
			'Navy-focused exposition where maritime digital modernization and autonomy vendors are concentrated.',
		startDate: '2026-04-12',
		endDate: '2026-04-15',
		branch: 'Navy',
		type: 'Conference',
		status: 'Projected',
		signal: 'Medium',
		effort: 'Medium',
		location: {
			city: 'National Harbor',
			state: 'MD',
			country: 'USA',
			lat: 38.7854,
			lng: -77.0153,
			venue: 'Gaylord National Resort',
		},
		ontology: {
			themes: ['Maritime modernization', 'Fleet autonomy', 'Supply-chain resilience'],
			capabilityAreas: ['Mission systems', 'Data fusion', 'Secure integration'],
			missionThreads: ['Maritime C2', 'Fleet readiness'],
			stakeholders: ['Navy program offices', 'Integrators', 'Allied navies'],
			keywords: ['sea-air-space', 'navy', 'maritime'],
			relatedPrograms: ['ACP-RA', 'Code-as-policy'],
			decisionWindows: {
				discovery: 'Now to T-100 days',
				prep: 'T-60 to T-7 days',
				execution: 'Event week + immediate partner triage',
			},
			provenance: [
				{
					name: 'Navy League events',
					url: 'https://seaairspace.org/',
					type: 'official',
					lastVerified: '2026-02-12',
					confidence: 'High',
				},
			],
			links: { official: 'https://seaairspace.org/' },
			logistics: {
				format: 'In-person',
				estimatedCostUsd: { min: 300, max: 1300 },
				travelBurdenFromDc: 'Low',
			},
		},
	},
	{
		id: 'radar-technet-cyber-2026',
		title: 'AFCEA TechNet Cyber',
		description:
			'Cyber operations and digital modernization event spanning civilian and military operators.',
		startDate: '2026-06-16',
		endDate: '2026-06-18',
		branch: 'Joint',
		type: 'Conference',
		status: 'Projected',
		signal: 'High',
		effort: 'Low',
		location: {
			city: 'Baltimore',
			state: 'MD',
			country: 'USA',
			lat: 39.2904,
			lng: -76.6122,
			venue: 'Baltimore Convention Center',
		},
		ontology: {
			themes: ['Zero trust', 'Operational cyber', 'Joint interoperability'],
			capabilityAreas: ['Identity', 'Policy automation', 'Secure A2A'],
			missionThreads: ['Cyber defense acceleration', 'Cross-domain operations'],
			stakeholders: ['DISA', 'Service cyber commands', 'Industry'],
			keywords: ['technet', 'zero trust', 'mission assurance'],
			relatedPrograms: ['Trust scopes', 'Tool security research'],
			decisionWindows: {
				discovery: 'Now to T-120 days',
				prep: 'T-45 to T-7 days',
				execution: '3-day conference + 2-week follow-up',
			},
			provenance: [
				{
					name: 'AFCEA events',
					url: 'https://www.afcea.org/events',
					type: 'official',
					lastVerified: '2026-02-12',
					confidence: 'High',
				},
			],
			links: {
				official: 'https://www.afcea.org/events',
				registration: 'https://www.afcea.org/events',
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: { min: 250, max: 1200 },
				travelBurdenFromDc: 'Low',
			},
		},
	},
	{
		id: 'radar-dii-feb-2026',
		title: 'Defense Innovation Integration Forum',
		description:
			'Seeded event prototype to represent smaller integration venues where specific implementation partnerships can be formed quickly.',
		startDate: '2026-02-28',
		branch: 'Joint',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: {
			city: 'Arlington',
			state: 'VA',
			country: 'USA',
			lat: 38.8816,
			lng: -77.091,
			venue: 'Ballston corridor (seed)',
		},
		ontology: {
			themes: ['Execution velocity', 'Capability transition', 'Policy-to-deployment'],
			capabilityAreas: ['Rapid prototyping', 'Program governance'],
			missionThreads: ['Decision-cycle compression'],
			stakeholders: ['Program managers', 'Tech leads', 'Acquisition teams'],
			keywords: ['integration', 'pilot', 'transition'],
			relatedPrograms: ['DAD stand-up', 'ACP-RA operationalization'],
			decisionWindows: {
				discovery: 'Now to T-30 days',
				prep: 'T-20 to T-3 days',
				execution: 'Day-of capture + 7-day follow-up',
			},
			provenance: [
				{
					name: 'Manual seed record',
					url: 'https://www.adamboas.com/radar/',
					type: 'manual',
					lastVerified: '2026-02-12',
					confidence: 'Low',
				},
			],
			links: {
				official: 'https://www.adamboas.com/radar/',
			},
			logistics: {
				format: 'Hybrid',
				estimatedCostUsd: { min: 100, max: 700 },
				travelBurdenFromDc: 'Low',
			},
			notes: 'Placeholder archetype for the ontology and scoring flow.',
		},
	},
	{
		id: 'radar-space-symposium-2026',
		title: 'Space Symposium',
		description: 'Major defense space event with military, policy, and commercial stakeholders.',
		startDate: '2026-04-13',
		endDate: '2026-04-16',
		branch: 'Air Force',
		type: 'Conference',
		status: 'Projected',
		signal: 'Medium',
		effort: 'High',
		location: {
			city: 'Colorado Springs',
			state: 'CO',
			country: 'USA',
			lat: 38.8339,
			lng: -104.8214,
			venue: 'Broadmoor',
		},
		ontology: {
			themes: ['Space operations', 'All-domain command', 'Commercial partnerships'],
			capabilityAreas: ['Resilient C2', 'Orbital data pipelines'],
			missionThreads: ['Cross-domain integration'],
			stakeholders: ['USSF', 'USAF', 'Commercial space firms'],
			keywords: ['space', 'resilience', 'commercial integration'],
			relatedPrograms: ['Agentic force creation'],
			decisionWindows: {
				discovery: 'Now to T-120 days',
				prep: 'T-90 to T-14 days',
				execution: 'Event week + 30-day partner follow-up',
			},
			provenance: [
				{
					name: 'Space Symposium',
					url: 'https://www.spacesymposium.org/',
					type: 'official',
					lastVerified: '2026-02-12',
					confidence: 'High',
				},
			],
			links: { official: 'https://www.spacesymposium.org/' },
			logistics: {
				format: 'In-person',
				estimatedCostUsd: { min: 1600, max: 3600 },
				travelBurdenFromDc: 'High',
			},
		},
	},
	{
		id: 'radar-federal-ai-summit-2026',
		title: 'Federal AI Summit',
		description:
			'Cross-agency AI operations and governance event with practical implementation tracks.',
		startDate: '2026-03-10',
		branch: 'Civilian',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: {
			city: 'Washington',
			state: 'DC',
			country: 'USA',
			lat: 38.9072,
			lng: -77.0369,
			venue: 'Downtown DC (seed)',
		},
		ontology: {
			themes: ['Policy implementation', 'Responsible AI', 'Program execution'],
			capabilityAreas: ['Governance controls', 'Model evaluation', 'Workflow automation'],
			missionThreads: ['Policy-to-practice acceleration'],
			stakeholders: ['Agency CIO shops', 'Program executives', 'Vendors'],
			keywords: ['federal ai', 'governance', 'implementation'],
			relatedPrograms: ['Code-as-policy', 'ACP-RA'],
			decisionWindows: {
				discovery: 'Now to T-45 days',
				prep: 'T-30 to T-5 days',
				execution: 'Day-of + 14-day debrief',
			},
			provenance: [
				{
					name: 'Manual seed record',
					url: 'https://www.adamboas.com/radar/',
					type: 'manual',
					lastVerified: '2026-02-12',
					confidence: 'Low',
				},
			],
			links: {
				official: 'https://www.adamboas.com/radar/',
				agenda: 'https://www.adamboas.com/radar/',
			},
			logistics: {
				format: 'Hybrid',
				estimatedCostUsd: { min: 0, max: 450 },
				travelBurdenFromDc: 'Low',
			},
		},
	},
	{
		id: 'radar-nato-emerging-tech-2026',
		title: 'NATO Emerging Tech Working Forum',
		description: 'Allied coordination venue for AI, autonomy, and interoperability governance threads.',
		startDate: null,
		branch: 'Allied',
		type: 'Workshop',
		status: 'Needs Date',
		signal: 'Medium',
		effort: 'High',
		location: {
			city: 'Brussels',
			country: 'Belgium',
			lat: 50.8503,
			lng: 4.3517,
			venue: 'TBD',
		},
		ontology: {
			themes: ['Allied interoperability', 'Policy alignment', 'Coalition operations'],
			capabilityAreas: ['Federated governance', 'Data-sharing controls'],
			missionThreads: ['Coalition mission assurance'],
			stakeholders: ['NATO working groups', 'National MOD teams'],
			keywords: ['nato', 'interoperability', 'allied'],
			relatedPrograms: ['Trust scopes', 'Department of War coordination concepts'],
			decisionWindows: {
				discovery: 'Monitor continuously',
				prep: 'Post-date-confirmation only',
				execution: 'Dependent on schedule release',
			},
			provenance: [
				{
					name: 'Manual seed record',
					url: 'https://www.adamboas.com/radar/',
					type: 'manual',
					lastVerified: '2026-02-12',
					confidence: 'Low',
				},
			],
			links: { official: 'https://www.nato.int/' },
			logistics: {
				format: 'In-person',
				estimatedCostUsd: { min: 2400, max: 5200 },
				travelBurdenFromDc: 'High',
			},
		},
	},
	{
		id: 'radar-govai-2026',
		title: 'GovAI Summit',
		description: 'Public-sector AI strategy and implementation discussions with federal and state participation.',
		startDate: '2026-09-18',
		branch: 'Civilian',
		type: 'Conference',
		status: 'Projected',
		signal: 'Medium',
		effort: 'Medium',
		location: {
			city: 'Washington',
			state: 'DC',
			country: 'USA',
			lat: 38.9072,
			lng: -77.0369,
			venue: 'TBD',
		},
		ontology: {
			themes: ['Public sector AI delivery', 'Governance', 'Procurement'],
			capabilityAreas: ['Program management', 'Evaluation', 'Interagency learning'],
			missionThreads: ['Government modernization'],
			stakeholders: ['Federal CIO Council', 'State innovation offices'],
			keywords: ['govai', 'public sector ai', 'procurement'],
			relatedPrograms: ['Code-as-policy'],
			decisionWindows: {
				discovery: 'Now to T-180 days',
				prep: 'T-75 to T-10 days',
				execution: 'Event + 21-day partner routing',
			},
			provenance: [
				{
					name: 'GovAI Summit',
					url: 'https://www.govaisummit.com/',
					type: 'official',
					lastVerified: '2026-02-12',
					confidence: 'Medium',
				},
			],
			links: { official: 'https://www.govaisummit.com/' },
			logistics: {
				format: 'In-person',
				estimatedCostUsd: { min: 200, max: 1100 },
				travelBurdenFromDc: 'Low',
			},
		},
	},
	{
		id: 'radar-usace-infra-2026',
		title: 'USACE Digital Delivery & Infrastructure Forum',
		description: 'Infrastructure and delivery systems focus area, useful for civil works and mission support lanes.',
		startDate: '2026-07-22',
		branch: 'USACE',
		type: 'Workshop',
		status: 'Projected',
		signal: 'Medium',
		effort: 'Medium',
		location: {
			city: 'Nashville',
			state: 'TN',
			country: 'USA',
			lat: 36.1627,
			lng: -86.7816,
			venue: 'USACE-hosted venue (seed)',
		},
		ontology: {
			themes: ['Infrastructure modernization', 'Delivery systems', 'Program execution'],
			capabilityAreas: ['Portfolio governance', 'Engineering data'],
			missionThreads: ['Civil works modernization'],
			stakeholders: ['USACE district teams', 'Contractors', 'State partners'],
			keywords: ['usace', 'infrastructure', 'delivery systems'],
			relatedPrograms: ['DAD mission-support threads'],
			decisionWindows: {
				discovery: 'Now to T-150 days',
				prep: 'T-45 to T-7 days',
				execution: 'Event + 30-day implementation mapping',
			},
			provenance: [
				{
					name: 'Manual seed record',
					url: 'https://www.adamboas.com/radar/',
					type: 'manual',
					lastVerified: '2026-02-12',
					confidence: 'Low',
				},
			],
			links: { official: 'https://www.usace.army.mil/' },
			logistics: {
				format: 'In-person',
				estimatedCostUsd: { min: 700, max: 2000 },
				travelBurdenFromDc: 'Medium',
			},
		},
	},
	{
		id: 'radar-disa-c4-2026',
		title: 'DISA C4 Integration Workshop',
		description: 'Focused workshop on command, control, communications, and secure network integration.',
		startDate: '2026-08-05',
		branch: 'Joint',
		type: 'Workshop',
		status: 'Projected',
		signal: 'High',
		effort: 'Medium',
		location: {
			city: 'Fort Meade',
			state: 'MD',
			country: 'USA',
			lat: 39.109,
			lng: -76.744,
			venue: 'TBD',
		},
		ontology: {
			themes: ['Secure interoperability', 'Mission networking', 'Identity-driven control'],
			capabilityAreas: ['ICAM', 'Policy enforcement', 'Cross-domain data'],
			missionThreads: ['Joint C2 modernization'],
			stakeholders: ['DISA', 'Service C4 shops', 'Mission owners'],
			keywords: ['disa', 'c4', 'joint c2'],
			relatedPrograms: ['ACP-RA', 'trust scopes'],
			decisionWindows: {
				discovery: 'Now to T-120',
				prep: 'T-60 to T-7',
				execution: 'Workshop + 10-day action review',
			},
			provenance: [
				{
					name: 'Manual seed record',
					url: 'https://www.adamboas.com/radar/',
					type: 'manual',
					lastVerified: '2026-02-12',
					confidence: 'Low',
				},
			],
			links: { official: 'https://www.disa.mil/' },
			logistics: {
				format: 'In-person',
				estimatedCostUsd: { min: 100, max: 850 },
				travelBurdenFromDc: 'Low',
			},
		},
	},
	{
		id: 'radar-modelsec-2025',
		title: 'Model Security in Contested Ops Colloquium',
		description: 'Past event retained for trend and source continuity.',
		startDate: '2025-11-14',
		branch: 'Navy',
		type: 'Workshop',
		status: 'Past',
		signal: 'High',
		effort: 'Medium',
		location: {
			city: 'San Diego',
			state: 'CA',
			country: 'USA',
			lat: 32.7157,
			lng: -117.1611,
			venue: 'TBD',
		},
		ontology: {
			themes: ['Model security', 'Resilience', 'Counter-adversarial operations'],
			capabilityAreas: ['Evaluation', 'Guardrails', 'Data governance'],
			missionThreads: ['Contested-environment assurance'],
			stakeholders: ['Operational evaluators', 'Security researchers'],
			keywords: ['model security', 'contested ops'],
			relatedPrograms: ['Agent tool security research note'],
			decisionWindows: {
				discovery: 'Historical reference',
				prep: 'N/A',
				execution: 'Reference only',
			},
			provenance: [
				{
					name: 'Manual historical record',
					url: 'https://www.adamboas.com/radar/',
					type: 'manual',
					lastVerified: '2026-02-12',
					confidence: 'Medium',
				},
			],
			links: { official: 'https://www.adamboas.com/radar/' },
			logistics: {
				format: 'In-person',
				estimatedCostUsd: { min: 900, max: 2400 },
				travelBurdenFromDc: 'High',
			},
		},
	},
	{
		id: 'radar-a2a-devday-2026',
		title: 'A2A Integration Developer Day',
		description: 'Applied event lane for protocol/tool interoperability and implementation patterns.',
		startDate: '2026-03-03',
		branch: 'Industry',
		type: 'Hackathon',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: {
			city: 'Austin',
			state: 'TX',
			country: 'USA',
			lat: 30.2672,
			lng: -97.7431,
			venue: 'TBD',
		},
		ontology: {
			themes: ['Protocol implementation', 'Integration acceleration', 'Agent reliability'],
			capabilityAreas: ['A2A', 'MCP', 'Agent orchestration'],
			missionThreads: ['Tool chain hardening'],
			stakeholders: ['Developers', 'Platform teams', 'Tool vendors'],
			keywords: ['a2a', 'mcp', 'integration'],
			relatedPrograms: ['Tool supply-chain research'],
			decisionWindows: {
				discovery: 'Now to T-21 days',
				prep: 'T-14 to T-2 days',
				execution: 'Event day + 3-day synthesis',
			},
			provenance: [
				{
					name: 'Manual seed record',
					url: 'https://www.adamboas.com/radar/',
					type: 'manual',
					lastVerified: '2026-02-12',
					confidence: 'Low',
				},
			],
			links: {
				official: 'https://www.adamboas.com/radar/',
				registration: 'https://www.adamboas.com/radar/',
			},
			logistics: {
				format: 'Hybrid',
				estimatedCostUsd: { min: 0, max: 650 },
				travelBurdenFromDc: 'Medium',
			},
		},
	},
	{
		id: 'radar-autonomy-governance-forum',
		title: 'Autonomy Governance Fracture Forum',
		description: 'A seeded analytical forum object to model governance-fracture monitoring against mission assurance.',
		startDate: null,
		branch: 'Joint',
		type: 'Summit',
		status: 'Needs Date',
		signal: 'High',
		effort: 'Low',
		location: {
			city: 'TBD',
			country: 'USA',
			lat: 39.5,
			lng: -98.35,
			venue: 'TBD',
		},
		ontology: {
			themes: ['Governance fractures', 'Authority design', 'Control-plane coherence'],
			capabilityAreas: ['Policy operations', 'Decision rights', 'Institution design'],
			missionThreads: ['Department of War transition planning'],
			stakeholders: ['Policy directors', 'Joint mission owners'],
			keywords: ['governance', 'control plane', 'authority'],
			relatedPrograms: ['DAD memo', 'Annex A framework'],
			decisionWindows: {
				discovery: 'Continuous tracking',
				prep: 'After date confirmation',
				execution: 'TBD',
			},
			provenance: [
				{
					name: 'Manual seed record',
					url: 'https://www.adamboas.com/radar/',
					type: 'manual',
					lastVerified: '2026-02-12',
					confidence: 'Low',
				},
			],
			links: { official: 'https://www.adamboas.com/radar/' },
			logistics: {
				format: 'Virtual',
				estimatedCostUsd: { min: 0, max: 0 },
				travelBurdenFromDc: 'Low',
			},
		},
	},
	{
		id: 'radar-aaaa-best-drone-warfighter-competition',
		title: 'AAAA Best Drone Warfighter Competition',
		description: 'First-ever annual competition: Agile, Adaptive, Lethal',
		startDate: '2026-02-17',
		endDate: '2026-02-19',
		branch: 'Army',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Huntsville',
			state: 'AL',
			country: 'USA',
			lat: 34.729847,
			lng: -86.5859011
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['aaaa', 'best', 'drone', 'warfighter'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-afa-warfare-symposium-2026',
		title: 'AFA Warfare Symposium 2026',
		description: 'USAF & USSF senior leaders, force design, NGAD, CCA, space systems',
		startDate: '2026-02-23',
		endDate: '2026-02-25',
		branch: 'Air Force / Space Force',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'Aurora',
			state: 'CO',
			country: 'USA',
			lat: 39.7405111,
			lng: -104.830994
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['warfare', 'symposium', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Major event - 4,000+ attendees'
		}
	},
	{
		id: 'radar-detroit-district-usace-business-open-house',
		title: 'Detroit District USACE Business Open House',
		description: 'Soo Locks 5-Year Major Work Outlay, Dredge Material Management breakout sessions. Lt. Col. Wallace Bandeff opening remarks.',
		startDate: '2026-02-23',
		endDate: null,
		branch: 'USACE',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Detroit',
			state: 'MI',
			country: 'USA',
			lat: 42.3315509,
			lng: -83.0466403
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['detroit', 'district', 'usace', 'business'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: '8:30am-noon. POC: brian.r.korzetz@usace.army.mil'
		}
	},
	{
		id: 'radar-same-mid-atlantic-small-business-outreach-industry-day',
		title: 'SAME Mid-Atlantic Small Business Outreach + Industry Day',
		description: 'Hampton Roads, Coastal Carolina, Virginia Peninsula, Central Virginia SAME Posts. Business opportunity sessions, exhibit hall, one-on-one meetings.',
		startDate: '2026-02-23',
		endDate: '2026-02-25',
		branch: 'USACE',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'Virginia Beach',
			state: 'VA',
			country: 'USA',
			lat: 36.8496579,
			lng: -75.9760751
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['same', 'atlantic', 'small', 'business'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 150,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Virginia Beach Convention Center. Contact: samehrpost757@gmail.com'
		}
	},
	{
		id: 'radar-usace-albuquerque-district-business-opportunities-open-house',
		title: 'USACE Albuquerque District Business Opportunities Open House',
		description: 'Albuquerque District business opportunities and contracting engagement',
		startDate: '2026-02-25',
		endDate: null,
		branch: 'USACE',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Albuquerque',
			state: 'NM',
			country: 'USA',
			lat: 35.0841034,
			lng: -106.650985
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['usace', 'albuquerque', 'district', 'business'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4200
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Sid Cutter Pilot\'s Pavilion, 9am-12pm MST'
		}
	},
	{
		id: 'radar-deps-hel-symposium',
		title: 'DEPS HEL Symposium',
		description: 'Directed energy, high energy lasers',
		startDate: '2026-03-01',
		endDate: '2026-04-30',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Tucson',
			state: 'AZ',
			country: 'USA',
			lat: 32.2228765,
			lng: -110.974847
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['deps', 'symposium'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4200
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
	{
		id: 'radar-same-san-juan-industry-day',
		title: 'SAME San Juan Industry Day',
		description: 'SAME San Juan Post. All SAD districts attend. Caribbean, construction, A/E services.',
		startDate: '2026-03-02',
		endDate: '2026-03-06',
		branch: 'USACE',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'San Juan',
			state: 'PR',
			country: 'USA',
			lat: 18.465299,
			lng: -66.116666
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['same', 'juan', 'industry'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-cyberbay-summit',
		title: 'CyberBay Summit',
		description: 'Cybersecurity/national security convergence, SOCOM & CENTCOM leadership',
		startDate: '2026-03-11',
		endDate: '2026-03-13',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Tampa',
			state: 'FL',
			country: 'USA',
			lat: 27.9449854,
			lng: -82.4583107
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['cyberbay', 'summit'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Emerging event'
		}
	},
	{
		id: 'radar-afcea-nova-naval-it-day-2026',
		title: 'AFCEA NOVA Naval IT Day 2026',
		description: 'Naval IT modernization, cybersecurity',
		startDate: '2026-03-12',
		endDate: null,
		branch: 'Navy',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'Chantilly',
			state: 'VA',
			country: 'USA',
			lat: 38.885219,
			lng: -77.4486772
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Navy stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['afcea', 'nova', 'naval', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 150,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Westfields Marriott Washington Dulles. New date (rescheduled).'
		}
	},
	{
		id: 'radar-same-charleston-post-industry-day-2026',
		title: 'SAME Charleston Post Industry Day 2026',
		description: 'USACE Charleston District. Day 1: Golf tournament + sunset boat cruise. Day 2: Full industry day with speakers, networking, happy hour.',
		startDate: '2026-03-18',
		endDate: '2026-03-19',
		branch: 'USACE',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Charleston',
			state: 'SC',
			country: 'USA',
			lat: 32.7884363,
			lng: -79.9399309
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['same', 'charleston', 'post', 'industry'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Charleston Marriott, 170 Lockwood Blvd. Boat cruise included with ticket.'
		}
	},
	{
		id: 'radar-satshow-satellite-2026',
		title: 'SATShow / SATELLITE 2026',
		description: 'Satellite communications, space technology, GovMilSpace',
		startDate: '2026-03-23',
		endDate: '2026-03-26',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: 
		{
			city: 'Washington',
			state: 'DC',
			country: 'USA',
			lat: 38.8950368,
			lng: -77.0365427
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['satshow', 'satellite', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 150,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'World\'s largest satellite/space communications event. 15,000+ registrants, 450+ exhibitors. Walter E. Washington Convention Center.'
		}
	},
	{
		id: 'radar-ausa-global-force-2026',
		title: 'AUSA Global Force 2026',
		description: 'Army modernization: R&D, acquisition, contracting, sustainment, OIB',
		startDate: '2026-03-24',
		endDate: '2026-03-26',
		branch: 'Army',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'Huntsville',
			state: 'AL',
			country: 'USA',
			lat: 34.729847,
			lng: -86.5859011
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['ausa', 'global', 'force', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Premier Army event - must attend'
		}
	},
	{
		id: 'radar-qsecdef-world-symposium',
		title: 'QSECDEF World Symposium',
		description: 'Inaugural quantum security for defense, quantum-secure communications',
		startDate: '2026-03-24',
		endDate: null,
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'High',
		location: 
		{
			city: 'Paris',
			country: 'France',
			lat: 48.8534951,
			lng: 2.3483915
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['qsecdef', 'world', 'symposium'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4200
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
	{
		id: 'radar-robins-requirements-symposium',
		title: 'Robins Requirements Symposium',
		description: 'WR-ALC requirements, sustainment pipeline',
		startDate: '2026-03-26',
		endDate: null,
		branch: 'Air Force / Space Force',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Warner Robins',
			state: 'GA',
			country: 'USA',
			lat: 32.6200973,
			lng: -83.606568
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['robins', 'requirements', 'symposium'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-defense-manufacturing-conference-2026',
		title: 'Defense Manufacturing Conference 2026',
		description: 'Nation\'s annual forum for defense manufacturing. 1,500+ attendees. JDMTP and ARCTOS. Engineers, managers, tech leaders, scientists, policymakers. Rescheduled from Dec 2025 due to gov shutdown.',
		startDate: '2026-03-30',
		endDate: '2026-04-02',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Orlando',
			state: 'FL',
			country: 'USA',
			lat: 28.3600587,
			lng: -81.4934624
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['defense', 'manufacturing', 'conference', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'All paid registrations transferred. Hotel booking open.'
		}
	},
	{
		id: 'radar-chicago-district-usace-industry-outreach-open-house',
		title: 'Chicago District USACE Industry Outreach Open House',
		description: 'Chicago District contracting opportunities, Great Lakes & Ohio River Division',
		startDate: '2026-04-01',
		endDate: null,
		branch: 'USACE',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Chicago',
			state: 'IL',
			country: 'USA',
			lat: 41.8755616,
			lng: -87.6244212
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['chicago', 'district', 'usace', 'industry'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-space-symposium-2026-2',
		title: 'Space Symposium 2026',
		description: 'Space industry, military space programs, USSF priorities',
		startDate: '2026-04-13',
		endDate: '2026-04-16',
		branch: 'Air Force / Space Force',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'Colorado Springs',
			state: 'CO',
			country: 'USA',
			lat: 38.8339578,
			lng: -104.825348
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['space', 'symposium', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: '41st Space Symposium. The Broadmoor & Cheyenne Mountain Resort. 12,000+ attendees from 60+ countries.'
		}
	},
	{
		id: 'radar-army-aviation-mission-solutions-summit-2026-quad-a',
		title: 'Army Aviation Mission Solutions Summit 2026 (Quad-A)',
		description: 'PEO Aviation, FVL/FLRAA, sustainment, UAS, rotary wing modernization',
		startDate: '2026-04-14',
		endDate: '2026-04-16',
		branch: 'Army',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Nashville',
			state: 'TN',
			country: 'USA',
			lat: 36.1622767,
			lng: -86.7742984
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['army', 'aviation', 'mission', 'solutions'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-same-fort-worth-post-industry-day-2026',
		title: 'SAME Fort Worth Post Industry Day 2026',
		description: 'Industry Government Engagement 2026. Day 1: Presentations at Round Up Inn. Day 2: One-on-One meetings at USACE Fort Worth District HQ.',
		startDate: '2026-04-14',
		endDate: '2026-04-15',
		branch: 'USACE',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Fort Worth',
			state: 'TX',
			country: 'USA',
			lat: 32.753177,
			lng: -97.3327459
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['same', 'fort', 'worth', 'post'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Primary presenter: USACE Fort Worth District. Fritz G. Lanham Federal Office Building (security checkpoint).'
		}
	},
	{
		id: 'radar-southeast-region-fedcon-usace-summit',
		title: 'Southeast Region FEDCON USACE Summit',
		description: 'Southeast region federal construction summit. NCMBC hosted. All USACE SAD districts attend.',
		startDate: '2026-04-14',
		endDate: '2026-04-16',
		branch: 'USACE',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Wilmington',
			state: 'NC',
			country: 'USA',
			lat: 34.2352853,
			lng: -77.9487284
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['southeast', 'region', 'fedcon', 'usace'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-sacramento-district-usace-industry-day',
		title: 'Sacramento District USACE Industry Day',
		description: 'Sacramento District contracting opportunities, South Pacific Division',
		startDate: '2026-04-16',
		endDate: null,
		branch: 'USACE',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Sacramento',
			state: 'CA',
			country: 'USA',
			lat: 38.5810606,
			lng: -121.493895
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['sacramento', 'district', 'usace', 'industry'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4200
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
	{
		id: 'radar-sea-air-space-2026-2',
		title: 'Sea-Air-Space 2026',
		description: 'Navy League global maritime exposition. CNO priorities, shipbuilding, undersea warfare',
		startDate: '2026-04-19',
		endDate: '2026-04-22',
		branch: 'Navy',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: 
		{
			city: 'National Harbor',
			state: 'MD',
			country: 'USA',
			lat: 38.783342,
			lng: -77.0148285
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Navy stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['space', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 150,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Navy League\'s Global Maritime Exposition. Gaylord National Resort, National Harbor. 15,000+ attendees, 400+ exhibitors. STEM Expo Apr 19.'
		}
	},
	{
		id: 'radar-afcea-nova-innovation-it-day-2026',
		title: 'AFCEA NOVA Innovation IT Day 2026',
		description: 'IT innovation showcase, emerging tech',
		startDate: '2026-04-27',
		endDate: null,
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'Reston',
			state: 'VA',
			country: 'USA',
			lat: 38.953282,
			lng: -77.3464516
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['afcea', 'nova', 'innovation', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 150,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Carahsoft Technology HQ. 300+ expected registrants.'
		}
	},
	{
		id: 'radar-modern-day-marine-2026',
		title: 'Modern Day Marine 2026',
		description: 'USMC modernization, expeditionary warfighting',
		startDate: '2026-04-28',
		endDate: '2026-04-30',
		branch: 'Marine Corps',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'Washington',
			state: 'DC',
			country: 'USA',
			lat: 38.8950368,
			lng: -77.0365427
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Marine Corps stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['modern', 'marine', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 150,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
	{
		id: 'radar-dod-small-business-training-week',
		title: 'DoD Small Business Training Week',
		description: 'DoD OSBP small business training and engagement',
		startDate: '2026-05-01',
		endDate: '2026-05-31',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'TBD',
			country: 'USA',
			lat: 39.5,
			lng: -98.35,
			venue: 'TBD'
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['small', 'business', 'training', 'week'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-usace-national-dredging-meeting',
		title: 'USACE National Dredging Meeting',
		description: 'National dredging operations, all USACE divisions',
		startDate: '2026-05-01',
		endDate: '2026-05-31',
		branch: 'USACE',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Atlanta',
			state: 'GA',
			country: 'USA',
			lat: 33.7544657,
			lng: -84.3898151
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['usace', 'national', 'dredging', 'meeting'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-huntington-district-usace-industry-outreach-open-house',
		title: 'Huntington District USACE Industry Outreach Open House',
		description: 'Huntington District opportunities, Great Lakes & Ohio River Division',
		startDate: '2026-05-07',
		endDate: null,
		branch: 'USACE',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Huntington',
			state: 'WV',
			country: 'USA',
			lat: 38.4192496,
			lng: -82.445154
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['huntington', 'district', 'usace', 'industry'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-auvsi-xponential-2026',
		title: 'AUVSI XPONENTIAL 2026',
		description: '8,500+ attendees. Co-located with NDIA MDEX. Unmanned systems, robotics, autonomy',
		startDate: '2026-05-11',
		endDate: '2026-05-14',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Detroit',
			state: 'MI',
			country: 'USA',
			lat: 42.3315509,
			lng: -83.0466403
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['auvsi', 'xponential', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Co-located with MDEX'
		}
	},
	{
		id: 'radar-ausa-lanpac-2026',
		title: 'AUSA LANPAC 2026',
		description: 'Army Pacific theater engagement, Indo-Pacific strategy',
		startDate: '2026-05-12',
		endDate: '2026-05-14',
		branch: 'Army',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Honolulu',
			state: 'HI',
			country: 'USA',
			lat: 21.304547,
			lng: -157.855676
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['ausa', 'lanpac', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4200
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
	{
		id: 'radar-afcea-nova-space-force-it-day-2026',
		title: 'AFCEA NOVA Space Force IT Day 2026',
		description: 'Space Force IT, digital transformation',
		startDate: '2026-05-12',
		endDate: null,
		branch: 'Air Force / Space Force',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'Chantilly',
			state: 'VA',
			country: 'USA',
			lat: 38.885219,
			lng: -77.4486772
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['afcea', 'nova', 'space', 'force'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 150,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Westfields Marriott Washington Dulles. 530+ registrants in 2025.'
		}
	},
	{
		id: 'radar-new-orleans-district-usace-industry-day-2026',
		title: 'New Orleans District USACE Industry Day 2026',
		description: 'Active projects: Comite River Diversion, West Shore Lake Pontchartrain, East Baton Rouge Flood Mgmt, MS River Levee, Morganza to Gulf, Atchafalaya Basin, SW Coastal, Locks & Structures, Dredging, A-E Outlook.',
		startDate: '2026-05-14',
		endDate: null,
		branch: 'USACE',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'New Orleans',
			state: 'LA',
			country: 'USA',
			lat: 29.9561422,
			lng: -90.0733934
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['orleans', 'district', 'usace', 'industry'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'USACE HQ District Assembly Room, 7400 Leake Ave. One-on-one breakout sessions, contractor presentations, vendor displays. Free.'
		}
	},
	{
		id: 'radar-deps-de-test-evaluation-conference',
		title: 'DEPS DE Test & Evaluation Conference',
		description: 'Directed energy test & evaluation, rescheduled from Feb',
		startDate: '2026-05-18',
		endDate: '2026-05-21',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Albuquerque',
			state: 'NM',
			country: 'USA',
			lat: 35.0841034,
			lng: -106.650985
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['deps', 'test', 'evaluation', 'conference'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4200
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
	{
		id: 'radar-sof-week-2026',
		title: 'SOF Week 2026',
		description: '15,000-20,000 attendees, 600+ exhibitors. New: The Outpost at Peter O. Knight Airport',
		startDate: '2026-05-18',
		endDate: '2026-05-21',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'Tampa',
			state: 'FL',
			country: 'USA',
			lat: 27.9449854,
			lng: -82.4583107
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['week', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Largest SOF event'
		}
	},
	{
		id: 'radar-same-jetc-2026',
		title: 'SAME JETC 2026',
		description: 'Innovate Forward theme, 2,700+ attendees. USACE engineering & construction',
		startDate: '2026-05-19',
		endDate: '2026-05-21',
		branch: 'USACE',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Portland',
			state: 'OR',
			country: 'USA',
			lat: 45.5202471,
			lng: -122.674194
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['same', 'jetc', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4200
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
	{
		id: 'radar-cyber-industry-day-at-fort-eisenhower',
		title: 'Cyber Industry Day at Fort Eisenhower',
		description: 'Army Cyber Command industry engagement',
		startDate: '2026-05-19',
		endDate: null,
		branch: 'Army',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Fort Eisenhower',
			state: 'GA',
			country: 'USA',
			lat: 33.3578877,
			lng: -82.2402132
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['cyber', 'industry', 'fort', 'eisenhower'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-mscoe-protection-maneuver-support-industry-expo',
		title: 'MSCoE Protection & Maneuver Support Industry Expo',
		description: 'Maneuver Support Center of Excellence combined industry expo',
		startDate: '2026-05-19',
		endDate: '2026-05-21',
		branch: 'Army',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Fort Leonard Wood',
			state: 'MO',
			country: 'USA',
			lat: 37.70114,
			lng: -92.1693303
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['mscoe', 'protection', 'maneuver', 'support'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-us-women-s-chamber-small-business-federal-summit',
		title: 'US Women\'s Chamber Small Business Federal Summit',
		description: 'Women-owned small business federal contracting summit',
		startDate: '2026-06-01',
		endDate: '2026-06-30',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Charleston',
			state: 'SC',
			country: 'USA',
			lat: 32.7884363,
			lng: -79.9399309
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['women', 'chamber', 'small', 'business'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-dredging-summit-and-expo-2026-weda',
		title: 'Dredging Summit and Expo 2026 (WEDA)',
		description: 'Western Dredging Association annual summit and exposition',
		startDate: '2026-06-01',
		endDate: '2026-07-31',
		branch: 'USACE',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Las Vegas',
			state: 'NV',
			country: 'USA',
			lat: 36.1674263,
			lng: -115.1484131
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['dredging', 'summit', 'expo', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4200
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
	{
		id: 'radar-ndia-future-force-capabilities-conference',
		title: 'NDIA Future Force Capabilities Conference',
		description: 'Combined armaments, robotics, munitions technology, FUZE, and EOD',
		startDate: '2026-06-08',
		endDate: '2026-06-10',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Las Vegas',
			state: 'NV',
			country: 'USA',
			lat: 36.1674263,
			lng: -115.1484131
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['ndia', 'future', 'force', 'capabilities'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4200
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
	{
		id: 'radar-eurosatory-2026',
		title: 'Eurosatory 2026',
		description: 'International defense expo, AUSA organizing USA pavilion',
		startDate: '2026-06-15',
		endDate: '2026-06-19',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Paris',
			country: 'France',
			lat: 48.8534951,
			lng: 2.3483915
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['eurosatory', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4200
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
	{
		id: 'radar-tsis-training-simulation-industry-symposium',
		title: 'TSIS (Training & Simulation Industry Symposium)',
		description: 'PEO STRI, NAWCTSD, training/simulation procurement',
		startDate: '2026-06-17',
		endDate: '2026-06-18',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Orlando',
			state: 'FL',
			country: 'USA',
			lat: 28.5421218,
			lng: -81.379045
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['tsis', 'training', 'simulation', 'industry'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-same-savannah-usace-annual-program-review',
		title: 'SAME Savannah USACE Annual Program Review',
		description: 'USACE Savannah District annual program review, South Atlantic Division',
		startDate: '2026-06-24',
		endDate: '2026-06-26',
		branch: 'USACE',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Savannah',
			state: 'GA',
			country: 'USA',
			lat: 32.0790074,
			lng: -81.0921335
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['same', 'savannah', 'usace', 'annual'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-national-hubzone-conference',
		title: 'National HUBZone Conference',
		description: 'SBA HUBZone program, small business federal contracting',
		startDate: '2026-07-01',
		endDate: '2026-07-31',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'Chantilly',
			state: 'VA',
			country: 'USA',
			lat: 38.885219,
			lng: -77.4486772
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['national', 'hubzone', 'conference'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 150,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
	{
		id: 'radar-same-dc-nova-small-business-conference',
		title: 'SAME DC & NoVA Small Business Conference',
		description: 'Federal small business construction/engineering',
		startDate: '2026-07-07',
		endDate: '2026-07-08',
		branch: 'USACE',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'Washington',
			state: 'DC',
			country: 'USA',
			lat: 38.8950368,
			lng: -77.0365427
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['same', 'nova', 'small', 'business'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 150,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
	{
		id: 'radar-dafitc-2026',
		title: 'DAFITC 2026',
		description: 'DAF IT Conference. Call for Presentations opens Spring 2026.',
		startDate: '2026-08-01',
		endDate: '2026-08-31',
		branch: 'Air Force / Space Force',
		type: 'Conference',
		status: 'Projected',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Montgomery',
			state: 'AL',
			country: 'USA',
			lat: 32.3777111,
			lng: -86.3090775
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['dafitc', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Medium'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-power-up-energy-expo',
		title: 'Power Up Energy Expo',
		description: 'Energy and resilience for military installations',
		startDate: '2026-08-01',
		endDate: '2026-08-31',
		branch: 'Air Force / Space Force',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Panama City',
			state: 'FL',
			country: 'USA',
			lat: 30.0691172,
			lng: -85.5772755
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['power', 'energy', 'expo'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'SAD districts attend'
		}
	},
	{
		id: 'radar-tinker-and-the-primes-2026',
		title: 'Tinker and the Primes 2026',
		description: '~2,000 attendees. Sustainment, supply chain, innovation with Tinker AFB leadership',
		startDate: '2026-08-04',
		endDate: '2026-08-06',
		branch: 'Air Force / Space Force',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Midwest City',
			state: 'OK',
			country: 'USA',
			lat: 35.4495097,
			lng: -97.3967025
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['tinker', 'primes', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-gvsets-2026-18th-annual',
		title: 'GVSETS 2026 (18th Annual)',
		description: '~2,000 attendees. Ground vehicle systems engineering & technology. NDIA Michigan.',
		startDate: '2026-08-11',
		endDate: '2026-08-13',
		branch: 'Army',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Novi',
			state: 'MI',
			country: 'USA',
			lat: 42.48059,
			lng: -83.4754913
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['gvsets', '2026', '18th', 'annual'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Co-located with APBI'
		}
	},
	{
		id: 'radar-space-missile-defense-symposium-2026',
		title: 'Space & Missile Defense Symposium 2026',
		description: '7,000+ attendees. 28th year, MDA partnership',
		startDate: '2026-08-11',
		endDate: '2026-08-13',
		branch: 'Army',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'Huntsville',
			state: 'AL',
			country: 'USA',
			lat: 34.729847,
			lng: -86.5859011
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['space', 'missile', 'defense', 'symposium'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-gvsets-2026',
		title: 'GVSETS 2026',
		description: 'Ground vehicle systems engineering, modernization',
		startDate: '2026-08-11',
		endDate: '2026-08-13',
		branch: 'Army',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Novi',
			state: 'MI',
			country: 'USA',
			lat: 42.48059,
			lng: -83.4754913
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['gvsets', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: '18th Annual. NDIA Michigan Chapter. Suburban Collection Showplace. Free to attend. Technical sessions with ESD/SAE.'
		}
	},
	{
		id: 'radar-afcea-technet-augusta-2026',
		title: 'AFCEA TechNet Augusta 2026',
		description: 'Army Cyber Command, PEO offices, network modernization',
		startDate: '2026-08-17',
		endDate: '2026-08-20',
		branch: 'Army',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Augusta',
			state: 'GA',
			country: 'USA',
			lat: 33.4709714,
			lng: -81.9748429
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['afcea', 'technet', 'augusta', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-afa-air-space-cyber-conference-2026',
		title: 'AFA Air, Space & Cyber Conference 2026',
		description: '~300 exhibitors. SECAF keynote, USAF/USSF leadership',
		startDate: '2026-09-14',
		endDate: '2026-09-16',
		branch: 'Air Force / Space Force',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: 
		{
			city: 'National Harbor',
			state: 'MD',
			country: 'USA',
			lat: 38.783342,
			lng: -77.0148285
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['space', 'cyber', 'conference', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 150,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'AFA\'s premier fall conference'
		}
	},
	{
		id: 'radar-defense-techconnect-innovation-summit-2026',
		title: 'Defense TechConnect Innovation Summit 2026',
		description: 'Co-located w/ MOSA Summit & SBIR/STTR Conference. 1,000+ attendees',
		startDate: '2026-09-22',
		endDate: '2026-09-24',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'National Harbor',
			state: 'MD',
			country: 'USA',
			lat: 38.783342,
			lng: -77.0148285
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['defense', 'techconnect', 'innovation', 'summit'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 150,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
	{
		id: 'radar-mosa-industry-government-summit-2026',
		title: 'MOSA Industry & Government Summit 2026',
		description: 'Modular Open Systems Approach, co-located with TechConnect',
		startDate: '2026-09-22',
		endDate: '2026-09-24',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'National Harbor',
			state: 'MD',
			country: 'USA',
			lat: 38.783342,
			lng: -77.0148285
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['mosa', 'industry', 'government', 'summit'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 150,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Growing event'
		}
	},
	{
		id: 'radar-ausa-annual-meeting-2026',
		title: 'AUSA Annual Meeting 2026',
		description: 'Army 2030 objectives, OIB modernization, acquisition updates',
		startDate: '2026-10-12',
		endDate: '2026-10-14',
		branch: 'Army',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: 
		{
			city: 'Washington',
			state: 'DC',
			country: 'USA',
			lat: 38.8950368,
			lng: -77.0365427
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['ausa', 'annual', 'meeting', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 150,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Largest Army conference - must attend'
		}
	},
	{
		id: 'radar-imagine-nation-elc-2026',
		title: 'Imagine Nation ELC 2026',
		description: 'Government technology, IT modernization, innovation',
		startDate: '2026-10-25',
		endDate: '2026-10-27',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'TBD',
			country: 'USA',
			lat: 39.5,
			lng: -98.35,
			venue: 'TBD'
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['imagine', 'nation', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'ACT-IAC annual conference. 1,000+ government/industry executives. Was in Hershey, PA in 2025.'
		}
	},
	{
		id: 'radar-deps-annual-directed-energy-symposium',
		title: 'DEPS Annual Directed Energy Symposium',
		description: 'Directed energy systems, HEL, HPM',
		startDate: '2026-11-01',
		endDate: '2026-11-30',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Monterey',
			state: 'CA',
			country: 'USA',
			lat: 36.2231079,
			lng: -121.387742
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['deps', 'annual', 'directed', 'energy'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4200
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
	{
		id: 'radar-same-sbc-2026-small-business-conference',
		title: 'SAME SBC 2026 (Small Business Conference)',
		description: 'SAME National small business conference. Largest federal A/E/C small business event. All USACE SAD districts attend.',
		startDate: '2026-11-04',
		endDate: '2026-11-06',
		branch: 'USACE',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'Charlotte',
			state: 'NC',
			country: 'USA',
			lat: 35.2272086,
			lng: -80.8430827
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['same', '2026', 'small', 'business'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-i-itsec-2026',
		title: 'I/ITSEC 2026',
		description: 'Interservice training, simulation & education conference',
		startDate: '2026-11-30',
		endDate: '2026-12-04',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'Orlando',
			state: 'FL',
			country: 'USA',
			lat: 28.5421218,
			lng: -81.379045
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['itsec', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'World\'s largest M&S/training conference. Orange County Convention Center. NTSA/NDIA. 16,000+ visitors.'
		}
	},
	{
		id: 'radar-spacecom-space-congress-2027',
		title: 'SpaceCom / Space Congress 2027',
		description: 'Commercial space, space economy, government partnerships',
		startDate: '2027-01-11',
		endDate: '2027-01-14',
		branch: 'Air Force / Space Force',
		type: 'Conference',
		status: 'Projected',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Orlando',
			state: 'FL',
			country: 'USA',
			lat: 28.5421218,
			lng: -81.379045
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['spacecom', 'space', 'congress', '2027'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Medium'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Orange County Convention Center. Expo Jan 12-14. Commercial Space Week.'
		}
	},
	{
		id: 'radar-aa-s-conference-2026',
		title: 'AA&S Conference 2026',
		description: 'Army Acquisition & Sustainment',
		startDate: null,
		endDate: null,
		branch: 'Army',
		type: 'Conference',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Medium',
		location: 
		{
			city: 'TBD',
			country: 'USA',
			lat: 39.5,
			lng: -98.35,
			venue: 'TBD'
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['conference', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Check ausa.org or Army acquisition sites.'
		}
	},
	{
		id: 'radar-advanced-manufacturing-for-defense-summit-2026',
		title: 'Advanced Manufacturing for Defense Summit 2026',
		description: 'Additive manufacturing, advanced materials, DIB',
		startDate: null,
		endDate: null,
		branch: 'Joint',
		type: 'Summit',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'High',
		location: 
		{
			city: 'California',
			state: 'CA',
			country: 'USA',
			lat: 36.7783,
			lng: -119.4179
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['advanced', 'manufacturing', 'defense', 'summit'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4200
				},
				travelBurdenFromDc: 'High'
			},
			notes: '⚠️ Dates need verifying. Was Jun 24-26, 2025 in California.'
		}
	},
	{
		id: 'radar-afa-warfare-symposium-2027',
		title: 'AFA Warfare Symposium 2027',
		description: 'USAF/USSF annual warfare symposium',
		startDate: null,
		endDate: null,
		branch: 'Air Force / Space Force',
		type: 'Summit',
		status: 'Projected',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Aurora',
			state: 'CO',
			country: 'USA',
			lat: 39.7405111,
			lng: -104.830994
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['warfare', 'symposium', '2027'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-aflcmc-life-cycle-industry-days-lcid-2026',
		title: 'AFLCMC Life Cycle Industry Days (LCID) 2026',
		description: '2,600+ attendees. Cancelled 2025 (EO 14222). Re-evaluating for 2026.',
		startDate: null,
		endDate: null,
		branch: 'Air Force / Space Force',
		type: 'Workshop',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Medium',
		location: 
		{
			city: 'Dayton',
			state: 'OH',
			country: 'USA',
			lat: 39.7589478,
			lng: -84.1916069
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['aflcmc', 'life', 'cycle', 'industry'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Monitor aflcmc.af.mil/LCID'
		}
	},
	{
		id: 'radar-afrl-classified-industry-day-2026',
		title: 'AFRL Classified Industry Day 2026',
		description: 'AFRL programs, classified briefings, S&T partnerships',
		startDate: null,
		endDate: null,
		branch: 'Air Force / Space Force',
		type: 'Workshop',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Medium',
		location: 
		{
			city: 'Wright-Patterson AFB',
			state: 'OH',
			country: 'USA',
			lat: 39.8219053,
			lng: -84.0495886
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['afrl', 'classified', 'industry', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: '⚠️ Dates need verifying. Was Oct 8, 2025 at WPAFB.'
		}
	},
	{
		id: 'radar-agc-fedcon-2026',
		title: 'AGC FedCon 2026',
		description: 'Federal construction industry. AGC website: \'Working on 2026 FedCon\'',
		startDate: null,
		endDate: null,
		branch: 'USACE',
		type: 'Conference',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Medium',
		location: 
		{
			city: 'TBD',
			country: 'USA',
			lat: 39.5,
			lng: -98.35,
			venue: 'TBD'
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['fedcon', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-aiaa-aviation-2026',
		title: 'AIAA Aviation 2026',
		description: 'Aviation technology and research',
		startDate: null,
		endDate: null,
		branch: 'Joint',
		type: 'Conference',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Medium',
		location: 
		{
			city: 'TBD',
			country: 'USA',
			lat: 39.5,
			lng: -98.35,
			venue: 'TBD'
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['aiaa', 'aviation', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: '2025 was Jul 21-25 in Las Vegas.'
		}
	},
	{
		id: 'radar-armored-vehicles-2026',
		title: 'Armored Vehicles 2026',
		description: 'Modernizing the US Armored Force',
		startDate: null,
		endDate: null,
		branch: 'Army',
		type: 'Conference',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Medium',
		location: 
		{
			city: 'Detroit',
			state: 'MI',
			country: 'USA',
			lat: 42.3315509,
			lng: -83.0466403
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['armored', 'vehicles', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: '2025 was Jun 24-25. Check IDGA.'
		}
	},
	{
		id: 'radar-ausa-annual-meeting-2027',
		title: 'AUSA Annual Meeting 2027',
		description: 'Largest Army conference',
		startDate: null,
		endDate: null,
		branch: 'Army',
		type: 'Conference',
		status: 'Projected',
		signal: 'High',
		effort: 'Low',
		location: 
		{
			city: 'Washington',
			state: 'DC',
			country: 'USA',
			lat: 38.8950368,
			lng: -77.0365427
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['ausa', 'annual', 'meeting', '2027'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 150,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
	{
		id: 'radar-ausa-global-force-2027',
		title: 'AUSA Global Force 2027',
		description: 'Army modernization strategy',
		startDate: null,
		endDate: null,
		branch: 'Army',
		type: 'Conference',
		status: 'Projected',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Huntsville',
			state: 'AL',
			country: 'USA',
			lat: 34.729847,
			lng: -86.5859011
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['ausa', 'global', 'force', '2027'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-autonomy-in-defense-2026',
		title: 'Autonomy in Defense 2026',
		description: 'Inaugural summit: human-machine teaming, ethical AI, JADC2',
		startDate: null,
		endDate: null,
		branch: 'Joint',
		type: 'Conference',
		status: 'Needs Date',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'TBD',
			country: 'USA',
			lat: 39.5,
			lng: -98.35,
			venue: 'TBD'
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['autonomy', 'defense', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Corinium Intelligence. Watch for announcement.'
		}
	},
	{
		id: 'radar-ccad-depot-forum-2026',
		title: 'CCAD Depot Forum 2026',
		description: 'Army Aviation depot sustainment, CCAD modernization',
		startDate: null,
		endDate: null,
		branch: 'Army',
		type: 'Workshop',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Medium',
		location: 
		{
			city: 'Corpus Christi',
			state: 'TX',
			country: 'USA',
			lat: 27.7635302,
			lng: -97.4033191
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['ccad', 'depot', 'forum', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: '2025 was Feb 11-12. No 2026 date announced.'
		}
	},
	{
		id: 'radar-ctma-partners-meeting-2026-ncms',
		title: 'CTMA Partners Meeting 2026 (NCMS)',
		description: 'Condition-based maintenance, sustainment technology',
		startDate: null,
		endDate: null,
		branch: 'Joint',
		type: 'Conference',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Medium',
		location: 
		{
			city: 'TBD (Jacksonville',
			state: 'FL',
			country: 'USA',
			lat: 30.3322,
			lng: -81.6557
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['ctma', 'partners', 'meeting', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: '⚠️ Dates need verifying. Was Jun 16-18, 2025 in Jacksonville.'
		}
	},
	{
		id: 'radar-dayton-digital-transformation-2026',
		title: 'Dayton Digital Transformation 2026',
		description: 'Digital engineering transformation for defense',
		startDate: null,
		endDate: null,
		branch: 'Air Force / Space Force',
		type: 'Conference',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Medium',
		location: 
		{
			city: 'Dayton',
			state: 'OH',
			country: 'USA',
			lat: 39.7589478,
			lng: -84.1916069
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['dayton', 'digital', 'transformation', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Check daytondefense.org'
		}
	},
	{
		id: 'radar-dodiis-worldwide-conference-2026',
		title: 'DoDIIS Worldwide Conference 2026',
		description: 'DoD/Intelligence Community IT and cyber conference',
		startDate: null,
		endDate: null,
		branch: 'Joint',
		type: 'Conference',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Medium',
		location: 
		{
			city: 'TBD',
			country: 'USA',
			lat: 39.5,
			lng: -98.35,
			venue: 'TBD'
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['dodiis', 'worldwide', 'conference', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Confirmed returning in 2026'
		}
	},
	{
		id: 'radar-future-indirect-fires-conference-2027',
		title: 'Future Indirect Fires Conference 2027',
		description: 'Self-Propelled Howitzer, IFPC, counter-UAS, C4ISR',
		startDate: null,
		endDate: null,
		branch: 'Army',
		type: 'Conference',
		status: 'Projected',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'TBD',
			country: 'USA',
			lat: 39.5,
			lng: -98.35,
			venue: 'TBD'
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['future', 'indirect', 'fires', 'conference'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
	{
		id: 'radar-hypersonic-technology-systems-conference',
		title: 'Hypersonic Technology & Systems Conference',
		description: 'Classified-capable (Secret/NOFORN). Propulsion, thermal, materials.',
		startDate: null,
		endDate: null,
		branch: 'Joint',
		type: 'Conference',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Medium',
		location: 
		{
			city: 'TBD',
			country: 'USA',
			lat: 39.5,
			lng: -98.35,
			venue: 'TBD'
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['hypersonic', 'technology', 'systems', 'conference'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Blue52 Productions. Monitor for announcement.'
		}
	},
	{
		id: 'radar-letterkenny-modernization-industry-day-2026',
		title: 'Letterkenny Modernization Industry Day 2026',
		description: 'Depot modernization, sustainment, ammunition',
		startDate: null,
		endDate: null,
		branch: 'Army',
		type: 'Workshop',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Low',
		location: 
		{
			city: 'Chambersburg',
			state: 'PA',
			country: 'USA',
			lat: 39.9375112,
			lng: -77.6612586
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['letterkenny', 'modernization', 'industry', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 150,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: '⚠️ Dates need verifying. Was Oct 15, 2025 in Chambersburg.'
		}
	},
	{
		id: 'radar-milsatcom-2026',
		title: 'MILSATCOM 2026',
		description: 'Military SATCOM, spectrum management',
		startDate: null,
		endDate: null,
		branch: 'Joint',
		type: 'Conference',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Low',
		location: 
		{
			city: 'Arlington',
			state: 'VA',
			country: 'USA',
			lat: 38.8769326,
			lng: -77.0893094
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['milsatcom', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 150,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: '2025 was Jun 16-18.'
		}
	},
	{
		id: 'radar-peo-aviation-uas-industry-days-2026',
		title: 'PEO Aviation UAS Industry Days 2026',
		description: 'PEO Aviation UAS programs, FVL, FLRAA',
		startDate: null,
		endDate: null,
		branch: 'Army',
		type: 'Workshop',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Medium',
		location: 
		{
			city: 'Huntsville',
			state: 'AL',
			country: 'USA',
			lat: 34.729847,
			lng: -86.5859011
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['aviation', 'industry', 'days', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Announced on SAM.gov with short lead.'
		}
	},
	{
		id: 'radar-pine-bluff-arsenal-industry-day-2026',
		title: 'Pine Bluff Arsenal Industry Day 2026',
		description: 'Chemical/biological defense, smoke/obscurant munitions',
		startDate: null,
		endDate: null,
		branch: 'Army',
		type: 'Workshop',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Medium',
		location: 
		{
			city: 'White Hall',
			state: 'AR',
			country: 'USA',
			lat: 34.2752744,
			lng: -92.0917001
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['pine', 'bluff', 'arsenal', 'industry'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: '⚠️ Dates need verifying. Was Nov 2025 in White Hall.'
		}
	},
	{
		id: 'radar-realize-live-2026-siemens',
		title: 'Realize LIVE 2026 (Siemens)',
		description: 'Digital engineering, PLM, simulation, manufacturing',
		startDate: null,
		endDate: null,
		branch: 'Industry',
		type: 'Conference',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Medium',
		location: 
		{
			city: 'TBD (Detroit',
			state: 'MI',
			country: 'USA',
			lat: 42.3314,
			lng: -83.0458
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Industry stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['realize', 'live', '2026', 'siemens'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: '⚠️ Dates need verifying. Was Jun 2-4, 2025 in Detroit.'
		}
	},
	{
		id: 'radar-saspo-robins-afb-industry-day-2026',
		title: 'SASPO Robins AFB Industry Day 2026',
		description: 'WR-ALC: C-130, C-5, F-15 sustainment',
		startDate: null,
		endDate: null,
		branch: 'Air Force / Space Force',
		type: 'Workshop',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Medium',
		location: 
		{
			city: 'Warner Robins',
			state: 'GA',
			country: 'USA',
			lat: 32.6200973,
			lng: -83.606568
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['saspo', 'robins', 'industry', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: '2024 was Mar 29. No 2026 date announced.'
		}
	},
	{
		id: 'radar-se-defense-procurement-conference-2026',
		title: 'SE Defense Procurement Conference 2026',
		description: 'Defense contractors, program managers, contracting officers',
		startDate: null,
		endDate: null,
		branch: 'Army',
		type: 'Conference',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Medium',
		location: 
		{
			city: 'Atlanta',
			state: 'GA',
			country: 'USA',
			lat: 33.7544657,
			lng: -84.3898151
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['defense', 'procurement', 'conference', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: '2025 was Mar 11-12. Check SAME Atlanta chapter.'
		}
	},
	{
		id: 'radar-sea-air-space-2027',
		title: 'Sea-Air-Space 2027',
		description: 'Navy League maritime exposition',
		startDate: null,
		endDate: null,
		branch: 'Navy',
		type: 'Conference',
		status: 'Projected',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'National Harbor',
			state: 'MD',
			country: 'USA',
			lat: 38.783342,
			lng: -77.0148285
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Navy stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['space', '2027'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 150,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
	{
		id: 'radar-tri-regional-jets-2026-same-jacksonville',
		title: 'Tri-Regional JETS 2026 (SAME Jacksonville)',
		description: 'Joint engineer training, USACE multi-region collaboration',
		startDate: null,
		endDate: null,
		branch: 'USACE',
		type: 'Conference',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Medium',
		location: 
		{
			city: 'TBD (Jacksonville',
			state: 'FL',
			country: 'USA',
			lat: 30.3322,
			lng: -81.6557
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['regional', 'jets', '2026', 'same'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: '⚠️ Dates need verifying. Was Oct 21-23, 2025 in Jacksonville.'
		}
	},
	{
		id: 'radar-vets-conference-2026',
		title: 'VETS Conference 2026',
		description: 'Veterans in energy transition, clean energy workforce',
		startDate: null,
		endDate: null,
		branch: 'Joint',
		type: 'Conference',
		status: 'Needs Date',
		signal: 'Low',
		effort: 'Medium',
		location: 
		{
			city: 'TBD (Orlando',
			state: 'FL',
			country: 'USA',
			lat: 28.5383,
			lng: -81.3792
		},
		ontology: 
		{
			themes: ['Defense ecosystem scanning', 'Opportunity timing', 'Partner engagement'],
			capabilityAreas: ['Acquisition', 'Systems integration', 'Operational modernization'],
			missionThreads: ['Pipeline development', 'Stakeholder engagement'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['vets', 'conference', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Monitor for date release',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Government Guide conference tracker',
				url: 'https://jbenton1.github.io/government-guide/conference-tracker/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'Low'
			}],
			links: {},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 600,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: '⚠️ Dates need verifying. Was May 13-16, 2025 in Orlando.'
		}
	},
];
