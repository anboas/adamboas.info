import type { RadarEvent } from './types';

export const radarEventsSeed: RadarEvent[] = [
{
		id: 'radar-ausa-2026',
		title: 'AUSA Global Force Symposium & Exposition',
		description: 'Army modernization conference focused on force design, acquisition priorities, and operational integration with industry partners.',
		startDate: '2026-03-24',
		endDate: '2026-03-26',
		branch: 'Army',
		type: 'Conference',
		status: 'Projected',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'Huntsville',
			state: 'AL',
			country: 'USA',
			lat: 34.7304,
			lng: -86.5861,
			venue: 'Von Braun Center'
		},
		ontology: 
		{
			themes: ['Force Design', 'Acquisition', 'Autonomy Integration'],
			capabilityAreas: ['Command and Control', 'DevSecOps', 'Systems Integration'],
			missionThreads: ['Land maneuver', 'Contested logistics'],
			stakeholders: ['PEO offices', 'Army Futures Command', 'Prime contractors'],
			keywords: ['army modernization', 'c2', 'joint interoperability'],
			relatedPrograms: ['DAD exploration', 'ACP-RA', 'A2A interoperability'],
			decisionWindows: 
			{
				discovery: 'Now to T-120 days',
				prep: 'T-90 to T-14 days',
				execution: 'Conference week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AUSA events',
				url: 'https://www.ausa.org/events/',
				type: 'official',
				lastVerified: '2026-02-12',
				confidence: 'Medium'
			}],
			links: 
			{
				official: 'https://www.ausa.org/events/',
				registration: 'https://www.ausa.org/events/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 850,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Strong venue for Army stakeholder mapping and policy alignment conversations.'
		}
	},
{
		id: 'radar-sofweek-2026',
		title: 'SOF Week',
		description: 'Special operations ecosystem event with acquisition, tactical experimentation, and mission partner participation.',
		startDate: '2026-05-18',
		endDate: '2026-05-21',
		branch: 'Joint',
		type: 'Summit',
		status: 'Projected',
		signal: 'High',
		effort: 'High',
		location: 
		{
			city: 'Tampa',
			state: 'FL',
			country: 'USA',
			lat: 27.9506,
			lng: -82.4572,
			venue: 'Tampa Convention Center'
		},
		ontology: 
		{
			themes: ['Operational experimentation', 'Joint mission integration', 'Partner ecosystems'],
			capabilityAreas: ['Autonomous systems', 'Edge C2', 'Mission command'],
			missionThreads: ['Special operations support', 'Rapid mission rehearsal'],
			stakeholders: ['USSOCOM', 'Coalition partners', 'Industry integrators'],
			keywords: ['sof', 'joint', 'expeditionary'],
			relatedPrograms: ['Agentic force creation', 'DAD pilot opportunities'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-75 to T-10 days',
				execution: 'Event week + 30-day integration tasks'
			},
			provenance: [
			{
				name: 'SOF Week',
				url: 'https://www.sofweek.org/',
				type: 'official',
				lastVerified: '2026-02-12',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.sofweek.org/',
				registration: 'https://www.sofweek.org/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1400,
					max: 3100
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Date aligned to current 2026 listing; high value when tied to mission-thread targets before attendance.'
		}
	},
{
		id: 'radar-sea-air-space-2026',
		title: 'Sea-Air-Space Exposition',
		description: 'Navy-focused exposition where maritime digital modernization and autonomy vendors are concentrated.',
		startDate: '2026-04-19',
		endDate: '2026-04-22',
		branch: 'Navy',
		type: 'Conference',
		status: 'Projected',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'National Harbor',
			state: 'MD',
			country: 'USA',
			lat: 38.7854,
			lng: -77.0153,
			venue: 'Gaylord National Resort'
		},
		ontology: 
		{
			themes: ['Maritime modernization', 'Fleet autonomy', 'Supply-chain resilience'],
			capabilityAreas: ['Mission systems', 'Data fusion', 'Secure integration'],
			missionThreads: ['Maritime C2', 'Fleet readiness'],
			stakeholders: ['Navy program offices', 'Integrators', 'Allied navies'],
			keywords: ['sea-air-space', 'navy', 'maritime'],
			relatedPrograms: ['ACP-RA', 'Code-as-policy'],
			decisionWindows: 
			{
				discovery: 'Now to T-100 days',
				prep: 'T-60 to T-7 days',
				execution: 'Event week + immediate partner triage'
			},
			provenance: [
			{
				name: 'Navy League events',
				url: 'https://seaairspace.org/',
				type: 'official',
				lastVerified: '2026-02-12',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://seaairspace.org/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 300,
					max: 1300
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
{
		id: 'radar-technet-cyber-2026',
		title: 'AFCEA TechNet Cyber',
		description: 'Cyber operations and digital modernization event spanning civilian and military operators.',
		startDate: '2026-06-16',
		endDate: '2026-06-18',
		branch: 'Joint',
		type: 'Conference',
		status: 'Projected',
		signal: 'High',
		effort: 'Low',
		location: 
		{
			city: 'Baltimore',
			state: 'MD',
			country: 'USA',
			lat: 39.2904,
			lng: -76.6122,
			venue: 'Baltimore Convention Center'
		},
		ontology: 
		{
			themes: ['Zero trust', 'Operational cyber', 'Joint interoperability'],
			capabilityAreas: ['Identity', 'Policy automation', 'Secure A2A'],
			missionThreads: ['Cyber defense acceleration', 'Cross-domain operations'],
			stakeholders: ['DISA', 'Service cyber commands', 'Industry'],
			keywords: ['technet', 'zero trust', 'mission assurance'],
			relatedPrograms: ['Trust scopes', 'Tool security research'],
			decisionWindows: 
			{
				discovery: 'Now to T-120 days',
				prep: 'T-45 to T-7 days',
				execution: '3-day conference + 2-week follow-up'
			},
			provenance: [
			{
				name: 'AFCEA events',
				url: 'https://www.afcea.org/events',
				type: 'official',
				lastVerified: '2026-02-12',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.afcea.org/events',
				registration: 'https://www.afcea.org/events'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 250,
					max: 1200
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
{
		id: 'radar-dii-feb-2026',
		title: 'Defense Innovation Integration Forum',
		description: 'Seeded event prototype to represent smaller integration venues where specific implementation partnerships can be formed quickly.',
		startDate: '2026-02-28',
		branch: 'Joint',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: 
		{
			city: 'Arlington',
			state: 'VA',
			country: 'USA',
			lat: 38.8816,
			lng: -77.091,
			venue: 'Ballston corridor (seed)'
		},
		ontology: 
		{
			themes: ['Execution velocity', 'Capability transition', 'Policy-to-deployment'],
			capabilityAreas: ['Rapid prototyping', 'Program governance'],
			missionThreads: ['Decision-cycle compression'],
			stakeholders: ['Program managers', 'Tech leads', 'Acquisition teams'],
			keywords: ['integration', 'pilot', 'transition'],
			relatedPrograms: ['DAD stand-up', 'ACP-RA operationalization'],
			decisionWindows: 
			{
				discovery: 'Now to T-30 days',
				prep: 'T-20 to T-3 days',
				execution: 'Day-of capture + 7-day follow-up'
			},
			provenance: [
			{
				name: 'Manual seed record',
				url: 'https://www.adamboas.com/events/',
				type: 'manual',
				lastVerified: '2026-02-12',
				confidence: 'Low'
			}],
			links: 
			{
			},
			logistics: 
			{
				format: 'Hybrid',
				estimatedCostUsd: 
				{
					min: 100,
					max: 700
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Placeholder archetype for the ontology and scoring flow.'
		}
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
		location: 
		{
			city: 'Colorado Springs',
			state: 'CO',
			country: 'USA',
			lat: 38.8339,
			lng: -104.8214,
			venue: 'Broadmoor'
		},
		ontology: 
		{
			themes: ['Space operations', 'All-domain command', 'Commercial partnerships'],
			capabilityAreas: ['Resilient C2', 'Orbital data pipelines'],
			missionThreads: ['Cross-domain integration'],
			stakeholders: ['USSF', 'USAF', 'Commercial space firms'],
			keywords: ['space', 'resilience', 'commercial integration'],
			relatedPrograms: ['Agentic force creation'],
			decisionWindows: 
			{
				discovery: 'Now to T-120 days',
				prep: 'T-90 to T-14 days',
				execution: 'Event week + 30-day partner follow-up'
			},
			provenance: [
			{
				name: 'Space Symposium',
				url: 'https://www.spacesymposium.org/',
				type: 'official',
				lastVerified: '2026-02-12',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.spacesymposium.org/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1600,
					max: 3600
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
{
		id: 'radar-federal-ai-summit-2026',
		title: 'AI Summit 2026',
		description: 'GovCIO Media summit on scaling AI responsibly across federal missions with trust and security focus.',
		startDate: '2026-11-06',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'Tysons',
			state: 'VA',
			country: 'USA',
			lat: 38.9243,
			lng: -77.2342,
			venue: 'Hyatt Regency Tysons Corner Center'
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Applied AI adoption', 'Federal mission modernization'],
			capabilityAreas: ['AI/ML', 'Data modernization', 'Cybersecurity'],
			missionThreads: ['Program sensing', 'Technology adoption'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['ai summit', 'govcio', 'federal ai', 'responsible ai', 'mission modernization'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event day + 14-day follow-up'
			},
			provenance: [
			{
				name: 'GovCIO Media & Research',
				url: 'https://govciomedia.com/ai-summit-2026/',
				type: 'official',
				lastVerified: '2026-02-17',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://govciomedia.com/ai-summit-2026/',
				registration: 'https://govciomedia.com/ai-summit-2026/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 0,
					max: 600
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
{
		id: 'radar-federal-ai-forum-2026',
		title: 'Federal AI Forum 2026',
		description: 'GovCIO Media forum focused on agentic AI implementation patterns for federal missions.',
		startDate: '2026-08-13',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location:
		{
			city: 'Reston',
			state: 'VA',
			country: 'USA',
			lat: 38.9586,
			lng: -77.3570
		},
		ontology:
		{
			themes: ['Defense conference monitoring', 'Applied AI adoption', 'Agentic AI operations'],
			capabilityAreas: ['AI/ML', 'Data modernization', 'Cybersecurity'],
			missionThreads: ['Program sensing', 'Technology adoption'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['federal ai forum', 'govcio', 'agentic ai', 'autonomous agents', 'copilots'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows:
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event day + 14-day follow-up'
			},
			provenance: [
			{
				name: 'GovCIO Media & Research',
				url: 'https://govciomedia.com/federal-ai-forum/',
				type: 'official',
				lastVerified: '2026-02-17',
				confidence: 'High'
			}],
			links:
			{
				official: 'https://govciomedia.com/federal-ai-forum/',
				registration: 'https://govciomedia.com/federal-ai-forum/'
			},
			logistics:
			{
				format: 'In-person',
				estimatedCostUsd:
				{
					min: 0,
					max: 400
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Date verified from organizer page; location inferred from indexed listing and should be rechecked against final organizer update.'
		}
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
		location: 
		{
			city: 'Brussels',
			country: 'Belgium',
			lat: 50.8503,
			lng: 4.3517,
			venue: 'TBD'
		},
		ontology: 
		{
			themes: ['Allied interoperability', 'Policy alignment', 'Coalition operations'],
			capabilityAreas: ['Federated governance', 'Data-sharing controls'],
			missionThreads: ['Coalition mission assurance'],
			stakeholders: ['NATO working groups', 'National MOD teams'],
			keywords: ['nato', 'interoperability', 'allied'],
			relatedPrograms: ['Trust scopes', 'Department of War coordination concepts'],
			decisionWindows: 
			{
				discovery: 'Monitor continuously',
				prep: 'Post-date-confirmation only',
				execution: 'Dependent on schedule release'
			},
			provenance: [
			{
				name: 'Manual seed record',
				url: 'https://www.adamboas.com/events/',
				type: 'manual',
				lastVerified: '2026-02-12',
				confidence: 'Low'
			}],
			links: 
			{
				official: 'https://www.nato.int/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 2400,
					max: 5200
				},
				travelBurdenFromDc: 'High'
			}
		}
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
		location: 
		{
			city: 'Washington',
			state: 'DC',
			country: 'USA',
			lat: 38.9072,
			lng: -77.0369,
			venue: 'TBD'
		},
		ontology: 
		{
			themes: ['Public sector AI delivery', 'Governance', 'Procurement'],
			capabilityAreas: ['Program management', 'Evaluation', 'Interagency learning'],
			missionThreads: ['Government modernization'],
			stakeholders: ['Federal CIO Council', 'State innovation offices'],
			keywords: ['govai', 'public sector ai', 'procurement'],
			relatedPrograms: ['Code-as-policy'],
			decisionWindows: 
			{
				discovery: 'Now to T-180 days',
				prep: 'T-75 to T-10 days',
				execution: 'Event + 21-day partner routing'
			},
			provenance: [
			{
				name: 'GovAI Summit',
				url: 'https://www.govaisummit.com/',
				type: 'official',
				lastVerified: '2026-02-12',
				confidence: 'Medium'
			}],
			links: 
			{
				official: 'https://www.govaisummit.com/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 200,
					max: 1100
				},
				travelBurdenFromDc: 'Low'
			}
		}
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
		location: 
		{
			city: 'Nashville',
			state: 'TN',
			country: 'USA',
			lat: 36.1627,
			lng: -86.7816,
			venue: 'USACE-hosted venue (seed)'
		},
		ontology: 
		{
			themes: ['Infrastructure modernization', 'Delivery systems', 'Program execution'],
			capabilityAreas: ['Portfolio governance', 'Engineering data'],
			missionThreads: ['Civil works modernization'],
			stakeholders: ['USACE district teams', 'Contractors', 'State partners'],
			keywords: ['usace', 'infrastructure', 'delivery systems'],
			relatedPrograms: ['DAD mission-support threads'],
			decisionWindows: 
			{
				discovery: 'Now to T-150 days',
				prep: 'T-45 to T-7 days',
				execution: 'Event + 30-day implementation mapping'
			},
			provenance: [
			{
				name: 'Manual seed record',
				url: 'https://www.adamboas.com/events/',
				type: 'manual',
				lastVerified: '2026-02-12',
				confidence: 'Low'
			}],
			links: 
			{
				official: 'https://www.usace.army.mil/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 700,
					max: 2000
				},
				travelBurdenFromDc: 'Medium'
			}
		}
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
		location: 
		{
			city: 'Fort Meade',
			state: 'MD',
			country: 'USA',
			lat: 39.109,
			lng: -76.744,
			venue: 'TBD'
		},
		ontology: 
		{
			themes: ['Secure interoperability', 'Mission networking', 'Identity-driven control'],
			capabilityAreas: ['ICAM', 'Policy enforcement', 'Cross-domain data'],
			missionThreads: ['Joint C2 modernization'],
			stakeholders: ['DISA', 'Service C4 shops', 'Mission owners'],
			keywords: ['disa', 'c4', 'joint c2'],
			relatedPrograms: ['ACP-RA', 'trust scopes'],
			decisionWindows: 
			{
				discovery: 'Now to T-120',
				prep: 'T-60 to T-7',
				execution: 'Workshop + 10-day action review'
			},
			provenance: [
			{
				name: 'Manual seed record',
				url: 'https://www.adamboas.com/events/',
				type: 'manual',
				lastVerified: '2026-02-12',
				confidence: 'Low'
			}],
			links: 
			{
				official: 'https://www.disa.mil/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 100,
					max: 850
				},
				travelBurdenFromDc: 'Low'
			}
		}
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
		location: 
		{
			city: 'San Diego',
			state: 'CA',
			country: 'USA',
			lat: 32.7157,
			lng: -117.1611,
			venue: 'TBD'
		},
		ontology: 
		{
			themes: ['Model security', 'Resilience', 'Counter-adversarial operations'],
			capabilityAreas: ['Evaluation', 'Guardrails', 'Data governance'],
			missionThreads: ['Contested-environment assurance'],
			stakeholders: ['Operational evaluators', 'Security researchers'],
			keywords: ['model security', 'contested ops'],
			relatedPrograms: ['Agent tool security research note'],
			decisionWindows: 
			{
				discovery: 'Historical reference',
				prep: 'N/A',
				execution: 'Reference only'
			},
			provenance: [
			{
				name: 'Manual historical record',
				url: 'https://www.adamboas.com/events/',
				type: 'manual',
				lastVerified: '2026-02-12',
				confidence: 'Medium'
			}],
			links: 
			{
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 900,
					max: 2400
				},
				travelBurdenFromDc: 'High'
			}
		}
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
		location: 
		{
			city: 'Austin',
			state: 'TX',
			country: 'USA',
			lat: 30.2672,
			lng: -97.7431,
			venue: 'TBD'
		},
		ontology: 
		{
			themes: ['Protocol implementation', 'Integration acceleration', 'Agent reliability'],
			capabilityAreas: ['A2A', 'MCP', 'Agent orchestration'],
			missionThreads: ['Tool chain hardening'],
			stakeholders: ['Developers', 'Platform teams', 'Tool vendors'],
			keywords: ['a2a', 'mcp', 'integration'],
			relatedPrograms: ['Tool supply-chain research'],
			decisionWindows: 
			{
				discovery: 'Now to T-21 days',
				prep: 'T-14 to T-2 days',
				execution: 'Event day + 3-day synthesis'
			},
			provenance: [
			{
				name: 'Manual seed record',
				url: 'https://www.adamboas.com/events/',
				type: 'manual',
				lastVerified: '2026-02-12',
				confidence: 'Low'
			}],
			links: 
			{
			},
			logistics: 
			{
				format: 'Hybrid',
				estimatedCostUsd: 
				{
					min: 0,
					max: 650
				},
				travelBurdenFromDc: 'Medium'
			}
		}
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
			themes: ['Governance fractures', 'Authority design', 'Control-plane coherence'],
			capabilityAreas: ['Policy operations', 'Decision rights', 'Institution design'],
			missionThreads: ['Department of War transition planning'],
			stakeholders: ['Policy directors', 'Joint mission owners'],
			keywords: ['governance', 'control plane', 'authority'],
			relatedPrograms: ['DAD memo', 'Annex A framework'],
			decisionWindows: 
			{
				discovery: 'Continuous tracking',
				prep: 'After date confirmation',
				execution: 'TBD'
			},
			provenance: [
			{
				name: 'Manual seed record',
				url: 'https://www.adamboas.com/events/',
				type: 'manual',
				lastVerified: '2026-02-12',
				confidence: 'Low'
			}],
			links: 
			{
			},
			logistics: 
			{
				format: 'Virtual',
				estimatedCostUsd: 
				{
					min: 0,
					max: 0
				},
				travelBurdenFromDc: 'Low'
			}
		}
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
				name: 'Marine Military Expos',
				url: 'https://marinemilitaryexpos.com/',
				type: 'official',
				lastVerified: '2026-02-17',
				confidence: 'High'
			}],
			links: {
				official: 'https://marinemilitaryexpos.com/',
				registration: 'https://marinemilitaryexpos.com/attendee-information-registration/'
			},
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
				name: 'AUVSI',
				url: 'https://www.auvsi.org/events/calendar-of-events/',
				type: 'official',
				lastVerified: '2026-02-17',
				confidence: 'High'
			}],
			links: {
				official: 'https://xponential.org/',
				agenda: 'https://xponential.org/sag.cfm'
			},
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
		startDate: '2026-03-18',
		endDate: '2026-03-19',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
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
			keywords: ['autonomy', 'defense', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Corinium Intelligence',
				url: 'https://defense-autonomy.coriniumintelligence.com',
				type: 'official',
				lastVerified: '2026-02-17',
				confidence: 'Medium'
			}],
			links: {
				official: 'https://defense-autonomy.coriniumintelligence.com',
				agenda: 'https://defense-autonomy.coriniumintelligence.com/agenda'
			},
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
			notes: 'Date and location inferred from organizer metadata; recheck if organizer updates timing.'
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
{
		id: 'radar-2026-warfare-symposium',
		title: '2026 Warfare Symposium',
		description: 'AFA sourced event for defense ecosystem tracking and engagement planning.',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['2026', 'warfare', 'symposium'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AFA',
				url: 'https://www.afa.org/events/',
				type: 'official',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.afa.org/events/2026-afa-warfare-symposium/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-ausa-noon-report-warrant-officers-and-technical-expertise-transforming',
		title: 'AUSA Noon Report - Warrant Officers and Technical Expertise: Transforming the Future Army',
		description: 'AUSA sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-02-24',
		branch: 'Army',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Virtual',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['ausa', 'noon', 'report', 'warrant', 'officers'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AUSA',
				url: 'https://www.ausa.org/meet',
				type: 'official',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ausa.org/events/noon-report/warrant-officers-and-technical-expertise'
			},
			logistics: 
			{
				format: 'Virtual',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-san-antonio-post-february-meeting',
		title: 'San Antonio Post February Meeting',
		description: 'SAME sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-02-26',
		branch: 'USACE',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Posts',
			state: 'SA',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['antonio', 'post', 'february', 'meeting'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'SAME',
				url: 'https://www.same.org/events/',
				type: 'official',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.same.org/events/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-ausa-noon-report-ai-at-the-core-advancing-army-cyber-priorities',
		title: 'AUSA Noon Report: AI at the Core: Advancing Army Cyber Priorities',
		description: 'AUSA sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-12',
		branch: 'Army',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Virtual',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['ausa', 'noon', 'report', 'core', 'advancing'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AUSA',
				url: 'https://www.ausa.org/meet',
				type: 'official',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ausa.org/events/noon-report/ai-at-the-core'
			},
			logistics: 
			{
				format: 'Virtual',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-coffee-series-featuring-honorable-brent-ingraham',
		title: 'Coffee Series featuring Honorable Brent Ingraham',
		description: 'AUSA sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-12',
		branch: 'Army',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'Coffee Series featuring Honorable Brent Ingraham Arlington',
			state: 'VA',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['coffee', 'series', 'featuring', 'honorable', 'brent'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AUSA',
				url: 'https://www.ausa.org/meet',
				type: 'official',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ausa.org/events/coffee-series/ingraham'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
{
		id: 'radar-coffee-series-featuring-honorable-daniel-driscoll',
		title: 'Coffee Series Featuring Honorable Daniel Driscoll',
		description: 'AUSA sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-17',
		branch: 'Army',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'Coffee Series Featuring Honorable Daniel Driscoll Arlington',
			state: 'VA',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['coffee', 'series', 'featuring', 'honorable', 'daniel'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AUSA',
				url: 'https://www.ausa.org/meet',
				type: 'official',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ausa.org/events/coffee-series/driscoll'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
{
		id: 'radar-san-antonio-post-apwa-march-meeting',
		title: 'San Antonio Post-APWA March Meeting',
		description: 'SAME sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-24',
		branch: 'USACE',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Posts',
			state: 'SA',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['antonio', 'post', 'apwa', 'march', 'meeting'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'SAME',
				url: 'https://www.same.org/events/',
				type: 'official',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.same.org/events/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-operation-deploy-your-dress-pop-up',
		title: 'Operation Deploy Your Dress Pop-up',
		description: 'AUSA sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-04-25',
		branch: 'Army',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Virtual',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['operation', 'deploy', 'your', 'dress'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AUSA',
				url: 'https://www.ausa.org/meet',
				type: 'official',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ausa.org/events/ausa-odyd-popup'
			},
			logistics: 
			{
				format: 'Virtual',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-san-antonio-post-small-business-event',
		title: 'San Antonio Post Small Business Event',
		description: 'SAME sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-05-06',
		branch: 'USACE',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Posts',
			state: 'SA',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['USACE stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['antonio', 'post', 'small', 'business', 'event'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'SAME',
				url: 'https://www.same.org/events/',
				type: 'official',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.same.org/events/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-2026-lanpac-symposium-exposition',
		title: '2026 LANPAC Symposium & Exposition',
		description: 'AUSA sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-05-12',
		endDate: '2026-05-14',
		branch: 'Army',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'High',
		location: 
		{
			city: 'Exposition Honolulu',
			state: 'HI',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['2026', 'lanpac', 'symposium', 'exposition'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AUSA',
				url: 'https://www.ausa.org/meet',
				type: 'official',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ausa.org/events/2026-lanpac-symposium-exposition'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
{
		id: 'radar-usa-security-and-defense-pavilion-at-eurosatory-2026',
		title: 'USA Security and Defense Pavilion at Eurosatory 2026',
		description: 'AUSA sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-06-15',
		endDate: '2026-06-19',
		branch: 'Army',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['security', 'defense', 'pavilion', 'eurosatory', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AUSA',
				url: 'https://www.ausa.org/meet',
				type: 'official',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ausa.org/events/usa-security-and-defense-pavilion-eurosatory-2026'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
{
		id: 'radar-2026-national-convention',
		title: '2026 National Convention',
		description: 'AFA sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-09-12',
		endDate: '2026-09-13',
		branch: 'Air Force / Space Force',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['2026', 'national', 'convention'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AFA',
				url: 'https://www.afa.org/events/',
				type: 'official',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.afa.org/events/2026-national-convention/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
{
		id: 'radar-2026-air-space-cyber-conference',
		title: '2026 Air, Space & Cyber Conference',
		description: 'AFA sourced event for defense ecosystem tracking and engagement planning.',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['2026', 'space', 'cyber', 'conference'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AFA',
				url: 'https://www.afa.org/events/',
				type: 'official',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.afa.org/events/2026-air-space-cyber-conference/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
{
		id: 'radar-navy-birthday-ball',
		title: 'Navy Birthday Ball',
		description: 'Navy League sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-10-10',
		branch: 'Navy',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Navy stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['navy', 'birthday', 'ball'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Navy League',
				url: 'https://www.navyleague.org/meetings-and-events/',
				type: 'official',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.navyleague.org/meetings-and-events/us-navy-birthday-ball/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
{
		id: 'radar-2027-warfare-symposium',
		title: '2027 Warfare Symposium',
		description: 'AFA sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2027-03-01',
		endDate: '2027-03-03',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['2027', 'warfare', 'symposium'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AFA',
				url: 'https://www.afa.org/events/',
				type: 'official',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.afa.org/events/2027-warfare-symposium/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-joint-fires-summit-2026',
		title: 'Joint Fires Summit 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-02-18',
		endDate: '2026-02-19',
		branch: 'Joint',
		type: 'Summit',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['joint', 'fires', 'summit', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25836'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-ramstein-ab-tech-expo',
		title: 'Ramstein AB Tech Expo',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-02-18',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Ramstein-Miesenbach',
			country: 'Germany',
			lat: 49.4447,
			lng: 7.5562
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['ramstein', 'tech', 'expo'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.militaryexpos.com/ramstein/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Air Force Cyber International Speaking Opportunities'
		}
	},
{
		id: 'radar-usag-wiesbaden-clay-kaserne-industry-day-tech-expo',
		title: 'USAG Wiesbaden/Clay Kaserne Industry Day & Tech Expo',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-02-19',
		endDate: '2026-02-20',
		branch: 'Joint',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Wiesbaden',
			country: 'Germany',
			lat: 50.0782,
			lng: 8.2398
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['usag', 'wiesbaden', 'clay', 'kaserne', 'industry'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.militaryexpos.com/claykaserne/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Army Cyber International Speaking Opportunities Tactical'
		}
	},
{
		id: 'radar-usag-bavaria-grafenwoehr-tech-expo',
		title: 'USAG Bavaria/Grafenwoehr Tech Expo',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-02-23',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Grafenwoehr',
			country: 'Germany',
			lat: 49.723,
			lng: 11.906
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['usag', 'bavaria', 'grafenwoehr', 'tech', 'expo'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.militaryexpos.com/usagbavaria/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Army International Tactical'
		}
	},
{
		id: 'radar-future-indirect-fires-conference-2026',
		title: 'Future Indirect Fires Conference 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-02-24',
		endDate: '2026-02-25',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Withheld for security reasons',
			country: 'United Kingdom',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['future', 'indirect', 'fires', 'conference', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25813'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
{
		id: 'radar-international-military-helicopter-conference-2026',
		title: 'International Military Helicopter Conference 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-02-24',
		endDate: '2026-02-26',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'London',
			country: 'United Kingdom',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['international', 'military', 'helicopter', 'conference', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25711'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
{
		id: 'radar-joint-military-training-simulation-conference-2026',
		title: 'Joint Military Training & Simulation Conference 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-02-24',
		endDate: '2026-02-25',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Withheld for security reasons',
			country: 'United Kingdom',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['joint', 'military', 'training', 'simulation', 'conference'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25812'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
{
		id: 'radar-kelley-barracks-tech-expo',
		title: 'Kelley Barracks Tech Expo',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-02-24',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Stuttgart',
			country: 'Germany',
			lat: 48.7758,
			lng: 9.1829
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['kelley', 'barracks', 'tech', 'expo'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.militaryexpos.com/kelleybarracks/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Army International'
		}
	},
{
		id: 'radar-military-simulation-training-summit-2026',
		title: 'Military Simulation Training Summit 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-02-24',
		endDate: '2026-02-25',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['military', 'simulation', 'training', 'summit', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25635'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-eucom-innovation-expo',
		title: 'EUCOM Innovation Expo',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-02-25',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Stuttgart',
			country: 'Germany',
			lat: 48.7758,
			lng: 9.1829
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['eucom', 'innovation', 'expo'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.militaryexpos.com/patchbarracks/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Army International'
		}
	},
{
		id: 'radar-2026-govcon-executive-leadership-summit',
		title: '2026 GovCon Executive Leadership Summit',
		description: 'Potomac Officers Club sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-02-26',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Hyatt Regency Reston',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['2026', 'govcon', 'executive', 'leadership', 'summit'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Potomac Officers Club',
				url: 'https://www.potomacofficersclub.com/govcon-events/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.potomacofficersclub.com/events/2026-govcon-executive-leadership-summit/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-loitering-munition-systems-summit-2026',
		title: 'Loitering Munition Systems Summit 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-03',
		endDate: '2026-03-04',
		branch: 'Joint',
		type: 'Summit',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['loitering', 'munition', 'systems', 'summit', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25702'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-joint-space-operations-summit-2026',
		title: 'Joint Space Operations Summit 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-04',
		endDate: '2026-03-05',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['joint', 'space', 'operations', 'summit', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25726'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
{
		id: 'radar-future-soldier-technology-2026-conference',
		title: 'Future Soldier Technology 2026 Conference',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-09',
		endDate: '2026-03-11',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'London',
			country: 'United Kingdom',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['future', 'soldier', 'technology', '2026', 'conference'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25724'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
{
		id: 'radar-joint-cbrn-symposium',
		title: 'Joint CBRN Symposium',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-10',
		endDate: '2026-03-11',
		branch: 'Joint',
		type: 'Summit',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['joint', 'cbrn', 'symposium'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25852'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
{
		id: 'radar-fort-bragg-tactical-tech-day',
		title: 'Fort Bragg Tactical & Tech Day',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-11',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Fayetteville',
			state: 'NC',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['fort', 'bragg', 'tactical', 'tech'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.militaryexpos.com/fortbragg/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Army Southeast Tactical'
		}
	},
{
		id: 'radar-homeland-security-week-summit-2026',
		title: 'Homeland Security Week Summit 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-17',
		endDate: '2026-03-18',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['homeland', 'security', 'week', 'summit', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25837'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
{
		id: 'radar-hurlburt-field-innovation-day-tech-expo',
		title: 'Hurlburt Field Innovation Day & Tech Expo',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-17',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Fort Walton Beach',
			state: 'FL',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['hurlburt', 'field', 'innovation', 'tech', 'expo'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.militaryexpos.com/hurlburt/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Air Force Southeast'
		}
	},
{
		id: 'radar-operational-medicine-symposium-technology-showcase',
		title: 'Operational Medicine Symposium & Technology Showcase',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-17',
		endDate: '2026-03-18',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'San Antonio',
			state: 'TX',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['operational', 'medicine', 'symposium', 'technology', 'showcase'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25613'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-2026-artificial-intelligence-summit',
		title: '2026 Artificial Intelligence Summit',
		description: 'Potomac Officers Club sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-18',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Hyatt Regency Reston',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['2026', 'artificial', 'intelligence', 'summit'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Potomac Officers Club',
				url: 'https://www.potomacofficersclub.com/govcon-events/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.potomacofficersclub.com/events/2026-artificial-intelligence-summit/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-eglin-afb-tech-expo',
		title: 'Eglin AFB Tech Expo',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-18',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Fort Walton Beach',
			state: 'FL',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['eglin', 'tech', 'expo'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ncsi.com/event-registration/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Air Force Southeast'
		}
	},
{
		id: 'radar-insider-risk-summit-west-2026',
		title: 'Insider Risk Summit West 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-18',
		endDate: '2026-03-19',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['insider', 'risk', 'summit', 'west', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25841'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
{
		id: 'radar-national-congress-on-counter-uas-technology-2026',
		title: 'National Congress on Counter-UAS Technology 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-18',
		endDate: '2026-03-19',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'San Diego',
			state: 'CA',
			country: 'USA',
			lat: 32.7174202,
			lng: -117.162772
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['national', 'congress', 'counter', 'technology', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25819'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
{
		id: 'radar-deployed-medical-and-healthcare-delivery-conference-2026',
		title: 'Deployed Medical and Healthcare Delivery Conference 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-24',
		endDate: '2026-03-25',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'London',
			country: 'United Kingdom',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['deployed', 'medical', 'healthcare', 'delivery', 'conference'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25712'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
{
		id: 'radar-tech-summit-at-fort-huachuca',
		title: 'Tech Summit at Fort Huachuca',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-24',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Sierra Vista',
			state: 'AZ',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['tech', 'summit', 'fort', 'huachuca'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.militaryexpos.com/techsummit/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Army Cyber Southwest'
		}
	},
{
		id: 'radar-futureg-for-defense-warfare-summit-2026',
		title: 'FutureG for Defense & Warfare Summit 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-25',
		endDate: '2026-03-26',
		branch: 'Joint',
		type: 'Summit',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['futureg', 'defense', 'warfare', 'summit', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25870'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
{
		id: 'radar-border-security-intelligence-summit-2026',
		title: 'Border Security & Intelligence Summit 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-04-01',
		endDate: '2026-04-02',
		branch: 'Joint',
		type: 'Summit',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['border', 'security', 'intelligence', 'summit', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25897'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
{
		id: 'radar-military-flight-training-conference-2026',
		title: 'Military Flight Training Conference 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-04-02',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Lucerne',
			country: 'Switzerland',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['military', 'flight', 'training', 'conference', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25821'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			}
		}
	},
{
		id: 'radar-assured-pnt-summit-2026',
		title: 'Assured PNT Summit 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-04-07',
		endDate: '2026-04-08',
		branch: 'Joint',
		type: 'Summit',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['assured', 'summit', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25871'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			}
		}
	},
{
		id: 'radar-dow-mission-partner-environment-mpe-summit-26-1',
		title: 'DoW Mission Partner Environment (MPE) Summit 26-1',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-04-14',
		endDate: '2026-04-16',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Fort Lauderdale',
			state: 'FL',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['mission', 'partner', 'environment', 'summit'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ncsi.com/event/mpe/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Conference Southeast'
		}
	},
{
		id: 'radar-wright-patterson-afb-tech-expo',
		title: 'Wright-Patterson AFB Tech Expo',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-04-14',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['wright', 'patterson', 'tech', 'expo'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.militaryexpos.com/wpafb/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Air Force Cyber Intel Midwest'
		}
	},
{
		id: 'radar-law-enforcement-homeland-security-forum-technology-expo',
		title: 'Law Enforcement-Homeland Security Forum & Technology Expo',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-05-05',
		endDate: '2026-05-07',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'NRO Chantilly',
			state: 'VA',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['enforcement', 'homeland', 'security', 'forum', 'technology'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ncsi.com/event/lehs/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Conference Intel Mid-Atlantic Southeast'
		}
	},
{
		id: 'radar-holistic-health-and-fitness-h2f-symposium',
		title: 'Holistic Health and Fitness (H2F) Symposium',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-05-12',
		endDate: '2026-05-14',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'Hampton',
			state: 'VA',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['holistic', 'health', 'fitness', 'symposium'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.militaryexpos.com/h2f/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Army Health & Wellness Mid-Atlantic Southeast'
		}
	},
{
		id: 'radar-2026-cyber-summit',
		title: '2026 Cyber Summit',
		description: 'Potomac Officers Club sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-05-21',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Falls Church Marriott Fairview Park',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['2026', 'cyber', 'summit'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Potomac Officers Club',
				url: 'https://www.potomacofficersclub.com/govcon-events/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.potomacofficersclub.com/events/2026-cyber-summit/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-jbsa-fort-sam-houston-tech-expo',
		title: 'JBSA-Fort Sam Houston Tech Expo',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-06-16',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'San Antonio',
			state: 'TX',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['jbsa', 'fort', 'houston', 'tech', 'expo'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ncsi.com/event-registration/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Army Medical Southwest'
		}
	},
{
		id: 'radar-2026-army-summit',
		title: '2026 Army Summit',
		description: 'Potomac Officers Club sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-06-18',
		branch: 'Army',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Virtual',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['2026', 'army', 'summit'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Potomac Officers Club',
				url: 'https://www.potomacofficersclub.com/govcon-events/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.potomacofficersclub.com/events/2026-army-summit/'
			},
			logistics: 
			{
				format: 'Virtual',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-spangdahlem-ab-tech-expo',
		title: 'Spangdahlem AB Tech Expo',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-07-13',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Spangdahlem',
			country: 'Germany',
			lat: 49.9858,
			lng: 6.6918
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['spangdahlem', 'tech', 'expo'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ncsi.com/event-registration/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Air Force International'
		}
	},
{
		id: 'radar-usag-wiesbaden-clay-kaserne-technology-industry-day',
		title: 'USAG Wiesbaden/Clay Kaserne Technology Industry Day',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-07-16',
		branch: 'Joint',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Wiesbaden',
			country: 'Germany',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['usag', 'wiesbaden', 'clay', 'kaserne', 'technology'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ncsi.com/event-registration/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Army International'
		}
	},
{
		id: 'radar-joint-industry-forum-at-kelley-barracks',
		title: 'Joint Industry Forum at Kelley Barracks',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-07-21',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Stuttgart',
			country: 'Germany',
			lat: 48.7758,
			lng: 9.1829
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['joint', 'industry', 'forum', 'kelley', 'barracks'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ncsi.com/event-registration/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Army International'
		}
	},
{
		id: 'radar-joint-industry-forum-at-patch-barracks',
		title: 'Joint Industry Forum at Patch Barracks',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-07-22',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Stuttgart',
			country: 'Germany',
			lat: 48.7758,
			lng: 9.1829
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['joint', 'industry', 'forum', 'patch', 'barracks'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ncsi.com/event-registration/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Army International'
		}
	},
{
		id: 'radar-photogrammetry-3d-visualization-and-lidar-community-of-practice-confer',
		title: 'Photogrammetry, 3D Visualization, and Lidar Community of Practice Conference',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-07-27',
		endDate: '2026-07-31',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'Springfield',
			state: 'VA',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['photogrammetry', 'visualization', 'lidar', 'community', 'practice'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ncsi.com/event-registration/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Conference Geospatial Intel Mid-Atlantic Southeast'
		}
	},
{
		id: 'radar-2026-air-and-space-summit',
		title: '2026 Air and Space Summit',
		description: 'Potomac Officers Club sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-07-30',
		branch: 'Air Force / Space Force',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Virtual',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Air Force / Space Force stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['2026', 'space', 'summit'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Potomac Officers Club',
				url: 'https://www.potomacofficersclub.com/govcon-events/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.potomacofficersclub.com/events/2026-air-and-space-summit/'
			},
			logistics: 
			{
				format: 'Virtual',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-vandenberg-sfb-tech-expo',
		title: 'Vandenberg SFB Tech Expo',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-08-19',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Lompoc',
			state: 'CA',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['vandenberg', 'tech', 'expo'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ncsi.com/event-registration/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Air Force Space Force West'
		}
	},
{
		id: 'radar-2026-navy-summit',
		title: '2026 Navy Summit',
		description: 'Potomac Officers Club sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-08-27',
		branch: 'Navy',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Virtual',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Navy stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['2026', 'navy', 'summit'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Potomac Officers Club',
				url: 'https://www.potomacofficersclub.com/govcon-events/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.potomacofficersclub.com/events/2026-navy-summit/'
			},
			logistics: 
			{
				format: 'Virtual',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-2026-intel-summit',
		title: '2026 Intel Summit',
		description: 'Potomac Officers Club sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-09-24',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Virtual',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['2026', 'intel', 'summit'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Potomac Officers Club',
				url: 'https://www.potomacofficersclub.com/govcon-events/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.potomacofficersclub.com/events/2026-intel-summit/'
			},
			logistics: 
			{
				format: 'Virtual',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			}
		}
	},
{
		id: 'radar-fort-bragg-tactical-medicine-tech-expo',
		title: 'Fort Bragg Tactical Medicine & Tech Expo',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-09-30',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Fayetteville',
			state: 'NC',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['fort', 'bragg', 'tactical', 'medicine', 'tech'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ncsi.com/event-registration/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Army Medical Southeast Tactical'
		}
	},
{
		id: 'radar-davis-monthan-afb-tech-expo',
		title: 'Davis-Monthan AFB Tech Expo',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-11-04',
		branch: 'Joint',
		type: 'Conference',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['davis', 'monthan', 'tech', 'expo'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ncsi.com/event-registration/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Air Force Southwest West'
		}
	},
{
		id: 'radar-luke-afb-tech-expo',
		title: 'Luke AFB Tech Expo',
		description: 'Military Expos sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-11-05',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Glendale',
			state: 'AZ',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['luke', 'tech', 'expo'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Military Expos',
				url: 'https://www.militaryexpos.com/',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ncsi.com/event-registration/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Air Force Southwest West'
		}
	},
	{
		id: 'radar-36th-annual-ndia-special-operations-symposium',
		title: '36th Annual NDIA Special Operations Symposium',
		description: 'Complex, dynamic, asymmetric, technological, and intense – all are adjectives commonly used to describe modern conflict. Importantly, these are all adjectives that play to the strengths of special operations. While the return to great strategic competition has changed the stakes ',
		startDate: '2026-02-17',
		endDate: '2026-02-18',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: {
			city: 'Washington',
			state: 'DC',
			country: 'USA',
			lat: 38.8950368,
			lng: -77.0365427,
			venue: 'The Westin DC Downtown'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'36th',
				'annual',
				'ndia',
				'special',
				'operations',
				'symposium'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/2/17/36th-annual-ndia-special-operations-symposium',
				agenda: 'https://app.swapcard.com/event/36th-annual-special-operations-symposium'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Division: Special Operations. Card summary: Complex, dynamic, asymmetric, technological, and intense – all are adjectives commonly used to describe modern conflict. Importantly, these are all adjectives that play to the strengths of special operations. While the return to great strategic competition has changed the stakes '
		}
	},
	{
		id: 'radar-40th-annual-national-logistics-forum',
		title: '40th Annual National Logistics Forum',
		description: 'Join us in Tampa, FL at the 40th Annual National Logistics Forum to explore innovative, forward-thinking approaches for improving Logistics Readiness through the strategic integration of cutting-edge AI technologies and the unwavering principles of the Warrior Ethos. AGENDA',
		startDate: '2026-02-17',
		endDate: '2026-02-19',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: {
			city: 'Tampa',
			state: 'FL',
			country: 'USA',
			lat: 27.950575,
			lng: -82.457178,
			venue: 'Hilton Tampa Downtown'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'40th',
				'annual',
				'national',
				'logistics',
				'forum'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/2/17/6370-log-forum',
				agenda: 'https://app.swapcard.com/event/40th-annual-national-logistics-forum'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Division: Logistics. Card summary: Join us in Tampa, FL at the 40th Annual National Logistics Forum to explore innovative, forward-thinking approaches for improving Logistics Readiness through the strategic integration of cutting-edge AI technologies and the unwavering principles of the Warrior Ethos. AGENDA'
		}
	},
	{
		id: 'radar-ai-enabled-market-intelligence-for-acquisition-success-transforming-how-',
		title: 'AI-Enabled Market Intelligence for Acquisition Success: Transforming How the Pentagon Conducts Market Research in partnership with MITRE',
		description: 'Webinar Join NDIA’s Emerging Technologies Institute (ETI), in partnership with MITRE, for a virtual webinar on February 18, 2026, at 1:00 p.m. ET: AI for Market Research. REGISTER AGENDA SPEAKERS',
		startDate: '2026-02-18',
		branch: 'Joint',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: {
			city: 'Virtual',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'ai',
				'enabled',
				'market',
				'intelligence',
				'for',
				'acquisition',
				'success',
				'transforming',
				'emerging',
				'technologies'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/2/18/ai-for-market-research-webinar',
				registration: 'https://www.ndia.org/events/2026/2/18/ai-for-market-research-webinar/registration',
				agenda: 'https://www.ndia.org/events/2026/2/18/ai-for-market-research-webinar/agenda'
			},
			logistics: {
				format: 'Virtual',
				estimatedCostUsd: {
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Division: Emerging Technologies. Speakers/participants: https://www.ndia.org/events/2026/2/18/ai-for-market-research-webinar/speakers Card summary: Webinar Join NDIA’s Emerging Technologies Institute (ETI), in partnership with MITRE, for a virtual webinar on February 18, 2026, at 1:00 p.m. ET: AI for Market Research. REGISTER AGENDA SPEAKERS'
		}
	},
	{
		id: 'radar-2026-tactical-wheeled-vehicles-conference',
		title: '2026 Tactical Wheeled Vehicles Conference',
		description: 'The purpose of the NDIA Tactical Wheeled Vehicle Division is to conduct a forum to present, discuss, and answer questions related to vehicle acquisition program strategies, updates, priorities, technology requirements, and other desired capabilities and characterist',
		startDate: '2026-02-23',
		endDate: '2026-02-25',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: {
			city: 'Pittsburgh',
			state: 'PA',
			country: 'USA',
			lat: 40.440624,
			lng: -79.995888,
			venue: 'Wyndham Grand Pittsburgh Downtown'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'2026',
				'tactical',
				'wheeled',
				'vehicles',
				'conference'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/2/23/twv-2026',
				registration: 'https://www.ndia.org/events/2026/2/23/twv-2026/registration',
				agenda: 'https://app.swapcard.com/event/2026-tactical-wheeled-vehicles-conference'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Division: Tactical Wheeled Vehicles. Card summary: The purpose of the NDIA Tactical Wheeled Vehicle Division is to conduct a forum to present, discuss, and answer questions related to vehicle acquisition program strategies, updates, priorities, technology requirements, and other desired capabilities and characterist'
		}
	},
	{
		id: 'radar-digital-transformation-for-acquisition-dxa-the-art-of-the-possible-part-',
		title: 'Digital Transformation for Acquisition (DxA) - The Art of the Possible Part three of the Digital Transformation for Acquisition (DxA) Series',
		description: 'Webinar Join NDIA’s Emerging Technologies Institute (ETI) virtually on February 25, 2026, from 1:00 – 2:30 p.m. ET for the third webinar in our Digital Transformation for Acquisition (DxA) series, Digital Transformation for Acquisition (DxA): The',
		startDate: '2026-02-25',
		branch: 'Joint',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: {
			city: 'Virtual',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'digital',
				'transformation',
				'for',
				'acquisition',
				'dxa',
				'the',
				'art',
				'of',
				'emerging',
				'technologies'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/2/25/digital-transformation-for-acquisition-the-art-of-the-possible',
				registration: 'https://www.ndia.org/events/2026/2/25/digital-transformation-for-acquisition-the-art-of-the-possible/registration',
				agenda: 'https://www.ndia.org/events/2026/2/25/digital-transformation-for-acquisition-the-art-of-the-possible/agenda'
			},
			logistics: {
				format: 'Virtual',
				estimatedCostUsd: {
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Division: Emerging Technologies. Speakers/participants: https://www.ndia.org/events/2026/2/25/digital-transformation-for-acquisition-the-art-of-the-possible/speakers Card summary: Webinar Join NDIA’s Emerging Technologies Institute (ETI) virtually on February 25, 2026, from 1:00 – 2:30 p.m. ET for the third webinar in our Digital Transformation for Acquisition (DxA) series, Digital Transformation for Acquisition (DxA): The'
		}
	},
	{
		id: 'radar-robotics-division-meeting',
		title: 'Robotics Division Meeting',
		description: 'The Robotics quarterly meeting this December will focus our attention on asking how government and industry can best work together to “chart a faster path” to get the right robotic and autonomous tech into the hands of the warfighter. Current events demand an aggressive approach.',
		startDate: '2026-03-05',
		branch: 'Joint',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: {
			city: 'Arlington',
			state: 'VA',
			country: 'USA',
			lat: 38.881621,
			lng: -77.09098,
			venue: 'NDIA Headquarters'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'robotics',
				'division',
				'meeting'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/3/5/robotics-division-meeting',
				registration: 'https://www.ndia.org/events/2026/3/5/robotics-division-meeting/registration',
				agenda: 'https://www.ndia.org/events/2026/3/5/robotics-division-meeting/agenda'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Division: Robotics. Speakers/participants: https://www.ndia.org/events/2026/3/5/robotics-division-meeting/speaker Card summary: The Robotics quarterly meeting this December will focus our attention on asking how government and industry can best work together to “chart a faster path” to get the right robotic and autonomous tech into the hands of the warfighter. Current events demand an aggressive approach.'
		}
	},
	{
		id: 'radar-2026-pacific-operational-science-technology-post-conference',
		title: '2026 Pacific Operational Science & Technology (POST) Conference',
		description: 'POST 2026 brings together senior U.S. Department of Defense leaders from the Services and Agencies, senior leaders from the international Science & Technology community, industry executives and engineers, university representat',
		startDate: '2026-03-09',
		endDate: '2026-03-12',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'High',
		location: {
			city: 'Honolulu',
			state: 'HI',
			country: 'USA',
			lat: 21.306944,
			lng: -157.858333,
			venue: 'Hilton Hawaiian Village Waikiki Beach Resort'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'2026',
				'pacific',
				'operational',
				'science',
				'technology',
				'post',
				'conference',
				'and',
				'engineering'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/3/9/post-2026'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Division: Science and Engineering Technology. Card summary: POST 2026 brings together senior U.S. Department of Defense leaders from the Services and Agencies, senior leaders from the international Science & Technology community, industry executives and engineers, university representat'
		}
	},
	{
		id: 'radar-2026-human-systems-conference',
		title: '2026 Human Systems Conference',
		description: 'The 2026 NDIA Human Systems Division conference will explore the theme “Human Systems for a Secure and Resilient Future,” emphasizing the critical role of human systems in preparing for and adapting to a rapidly evolving threat landscape. As the pace of technological, geopolitica',
		startDate: '2026-03-17',
		endDate: '2026-03-18',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: {
			city: 'Arlington',
			state: 'VA',
			country: 'USA',
			lat: 38.881621,
			lng: -77.09098,
			venue: 'George Mason University, Arlington Campus'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'2026',
				'human',
				'systems',
				'conference'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/3/17/human-systems-conference',
				registration: 'https://www.ndia.org/events/2026/3/17/human-systems-conference/registration',
				agenda: 'https://www.ndia.org/events/2026/3/17/human-systems-conference/agenda'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Division: Human Systems. Speakers/participants: https://www.ndia.org/events/2026/3/17/human-systems-conference/speakers Card summary: The 2026 NDIA Human Systems Division conference will explore the theme “Human Systems for a Secure and Resilient Future,” emphasizing the critical role of human systems in preparing for and adapting to a rapidly evolving threat landscape. As the pace of technological, geopolitica'
		}
	},
	{
		id: 'radar-2026-munitions-executive-summit',
		title: '2026 Munitions Executive Summit',
		description: 'Join NDIA at the 2026 Munitions Executive Summit scheduled for March 17 – 18, 2026, in Parsippany, NJ. This summit hosted by the Munitions Division aims to provide a meaningful interchange on the challenges confronting the U.S. Munitions Enterprise. REGISTER AGENDA SPEAKERS',
		startDate: '2026-03-17',
		endDate: '2026-03-18',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: {
			city: 'Parsippany',
			state: 'NJ',
			country: 'USA',
			lat: 40.857875,
			lng: -74.425986,
			venue: 'Hilton Parsippany'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'2026',
				'munitions',
				'executive',
				'summit',
				'technology'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/3/17/munitions-executive-summit',
				registration: 'https://www.ndia.org/events/2026/3/17/munitions-executive-summit/registration',
				agenda: 'https://www.ndia.org/events/2026/3/17/munitions-executive-summit/agenda'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Division: Munitions Technology. Speakers/participants: https://www.ndia.org/events/2026/3/17/munitions-executive-summit/speakers Card summary: Join NDIA at the 2026 Munitions Executive Summit scheduled for March 17 – 18, 2026, in Parsippany, NJ. This summit hosted by the Munitions Division aims to provide a meaningful interchange on the challenges confronting the U.S. Munitions Enterprise. REGISTER AGENDA SPEAKERS'
		}
	},
	{
		id: 'radar-digital-transformation-for-acquisition-dxa-moving-faster-than-bullet-tim',
		title: 'Digital Transformation for Acquisition (DxA) – Moving Faster than Bullet Time Part four of the Digital Transformation for Acquisition (DxA) Series',
		description: 'Webinar Join NDIA’s Emerging Technologies Institute (ETI) virtually on March 18, 2026, from 1:00 to 2:00 p.m. ET for the final webinar in our Digital Transformation for Acquisition (DxA) series, featuring a fireside chat on moving faster thr',
		startDate: '2026-03-18',
		branch: 'Joint',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: {
			city: 'Virtual',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'digital',
				'transformation',
				'for',
				'acquisition',
				'dxa',
				'moving',
				'faster',
				'than',
				'emerging',
				'technologies'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/3/18/digital-transformation-for-acquisition-moving-faster-than-bullet-time',
				registration: 'https://www.ndia.org/events/2026/3/18/digital-transformation-for-acquisition-moving-faster-than-bullet-time/registration'
			},
			logistics: {
				format: 'Virtual',
				estimatedCostUsd: {
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Division: Emerging Technologies. Speakers/participants: https://www.ndia.org/events/2026/3/18/digital-transformation-for-acquisition-moving-faster-than-bullet-time/speakers Card summary: Webinar Join NDIA’s Emerging Technologies Institute (ETI) virtually on March 18, 2026, from 1:00 to 2:00 p.m. ET for the final webinar in our Digital Transformation for Acquisition (DxA) series, featuring a fireside chat on moving faster thr'
		}
	},
	{
		id: 'radar-tech-101-defense-radar-a-monthly-eti-tech-webinar-series',
		title: 'Tech 101: Defense Radar A Monthly ETI Tech Webinar Series',
		description: 'Webinar Join NDIA\'s Emerging Technologies Institute (ETI) virtually on March 19, 2026, at 1:00 pm ET for our monthly Tech 101 series focusing on Defense Radar. REGISTER SPEAKERS',
		startDate: '2026-03-19',
		branch: 'Joint',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: {
			city: 'Virtual',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'tech',
				'101',
				'defense',
				'radar',
				'a',
				'monthly',
				'eti',
				'webinar',
				'emerging',
				'technologies'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/3/19/tech-101-defense-radar',
				registration: 'https://www.ndia.org/events/2026/3/19/tech-101-defense-radar/registration'
			},
			logistics: {
				format: 'Virtual',
				estimatedCostUsd: {
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Division: Emerging Technologies. Speakers/participants: https://www.ndia.org/events/2026/3/19/tech-101-defense-radar/speaker Card summary: Webinar Join NDIA\'s Emerging Technologies Institute (ETI) virtually on March 19, 2026, at 1:00 pm ET for our monthly Tech 101 series focusing on Defense Radar. REGISTER SPEAKERS'
		}
	},
	{
		id: 'radar-2026-undersea-warfare-spring-conference',
		title: '2026 Undersea Warfare Spring Conference',
		description: 'NDIA’s 2026 Undersea Warfare Spring Conference, will take place March 23 - 25, 2026, in San Diego, CA. This in-person conference serves as the leading forum for networking and learning in the undersea warfare community. Connect with the brightest minds and gain insight into',
		startDate: '2026-03-23',
		endDate: '2026-03-25',
		branch: 'Navy',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'High',
		location: {
			city: 'San Diego',
			state: 'CA',
			country: 'USA',
			lat: 32.715736,
			lng: -117.161087,
			venue: 'Admiral Kidd Conference Center | Naval Base Point Loma'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Navy stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'2026',
				'undersea',
				'warfare',
				'spring',
				'conference'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/3/23/6260-usw-spring',
				registration: 'https://www.ndia.org/events/2026/3/23/6260-usw-spring/registration',
				agenda: 'https://www.ndia.org/events/2026/3/23/6260-usw-spring/agenda'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Card summary: NDIA’s 2026 Undersea Warfare Spring Conference, will take place March 23 - 25, 2026, in San Diego, CA. This in-person conference serves as the leading forum for networking and learning in the undersea warfare community. Connect with the brightest minds and gain insight into'
		}
	},
	{
		id: 'radar-spring-2026-integrated-program-management-forum',
		title: 'Spring 2026 Integrated Program Management Forum',
		description: 'The Integrated Program Management Division (IPMD) leads the advancement of Integrated Program Management (IPM) through industry and government collaboration. As the steward of the EIA-748 Standard for Earned Value Management Systems (EVMS), IPMD shapes ind',
		startDate: '2026-03-24',
		endDate: '2026-03-26',
		branch: 'Joint',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: {
			city: 'Herndon',
			state: 'VA',
			country: 'USA',
			lat: 38.969555,
			lng: -77.386098,
			venue: 'Hyatt Regency Dulles'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'spring',
				'2026',
				'integrated',
				'program',
				'management',
				'forum'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/3/24/spring-2026-ipmd-forum',
				registration: 'https://www.ndia.org/events/2026/3/24/spring-2026-ipmd-forum/registration',
				agenda: 'https://www.ndia.org/events/2026/3/24/spring-2026-ipmd-forum/agenda'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Division: Integrated Program Management. Card summary: The Integrated Program Management Division (IPMD) leads the advancement of Integrated Program Management (IPM) through industry and government collaboration. As the steward of the EIA-748 Standard for Earned Value Management Systems (EVMS), IPMD shapes ind'
		}
	},
	{
		id: 'radar-mobilizing-capital-for-defense-tactics-and-recommendations-an-eti-resear',
		title: 'Mobilizing Capital for Defense: Tactics and Recommendations An ETI Research Rollout Event',
		description: 'Symposium Join NDIA’s Emerging Technologies Institute (ETI) on March 26, 2026, from 1:00 p.m. to 4:00 p.m. ET for a hybrid rollout event, available to attend in person or stream live via Zoom, marking the release of ETI’s new research report, Mobilizing Capital for Defense: Tacti',
		startDate: '2026-03-26',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: {
			city: 'Virtual',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'mobilizing',
				'capital',
				'for',
				'defense',
				'tactics',
				'and',
				'recommendations',
				'an',
				'emerging',
				'technologies'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/3/26/mobilizing-capital-for-defense',
				registration: 'https://www.ndia.org/events/2026/3/26/mobilizing-capital-for-defense/registration',
				agenda: 'https://www.ndia.org/events/2026/3/26/mobilizing-capital-for-defense/agenda'
			},
			logistics: {
				format: 'Virtual',
				estimatedCostUsd: {
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Division: Emerging Technologies. Speakers/participants: https://www.ndia.org/events/2026/3/26/mobilizing-capital-for-defense/speakers Card summary: Symposium Join NDIA’s Emerging Technologies Institute (ETI) on March 26, 2026, from 1:00 p.m. to 4:00 p.m. ET for a hybrid rollout event, available to attend in person or stream live via Zoom, marking the release of ETI’s new research report, Mobilizing Capital for Defense: Tacti'
		}
	},
	{
		id: 'radar-itec-2026',
		title: 'ITEC 2026',
		description: 'Held annually, ITEC is Europe’s primary forum for representatives from across the military, civil sector, industry and academia to connect and share knowledge about simulation, training and education. The three-day exhibition and conference gathers a broad selection of the indust',
		startDate: '2026-04-14',
		endDate: '2026-04-16',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'High',
		location: {
			city: 'London',
			country: 'United Kingdom',
			lat: 51.507351,
			lng: -0.127758,
			venue: 'ExCeL London'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'itec',
				'2026'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ntsa.org/events/2026/4/14/itec-2026'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Card summary: Held annually, ITEC is Europe’s primary forum for representatives from across the military, civil sector, industry and academia to connect and share knowledge about simulation, training and education. The three-day exhibition and conference gathers a broad selection of the indust'
		}
	},
	{
		id: 'radar-space-breakfast',
		title: 'Space Breakfast',
		description: 'Join members of the community at 7:00 am MT on Tuesday, April 14, 2026, for the Space Division Breakfast. Space is limited, so register today. Do not miss the opportunity to interface with the aerospace industry leaders and partners who directly support the Space program. NOTE: T',
		startDate: '2026-04-14',
		branch: 'Air Force / Space Force',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: {
			city: 'Colorado Springs',
			state: 'CO',
			country: 'USA',
			lat: 38.833881,
			lng: -104.821365,
			venue: 'DoubleTree by Hilton'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Air Force / Space Force stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'space',
				'breakfast'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/4/14/space-breakfast',
				registration: 'https://www.ndia.org/events/2026/4/14/space-breakfast/registration',
				agenda: 'https://www.ndia.org/events/2026/4/14/space-breakfast/agenda'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Speakers/participants: https://www.ndia.org/events/2026/4/14/space-breakfast/keynote Card summary: Join members of the community at 7:00 am MT on Tuesday, April 14, 2026, for the Space Division Breakfast. Space is limited, so register today. Do not miss the opportunity to interface with the aerospace industry leaders and partners who directly support the Space program. NOTE: T'
		}
	},
	{
		id: 'radar-april-2026-procurement-division-meeting',
		title: 'April 2026 Procurement Division Meeting',
		description: 'Join the NDIA Procurement Division on April 14, 2026, for its quarterly meeting, to address key challenges and priorities shaping today’s procurement landscape. This meeting also provides an opportunity for the Division’s committees to conduct business and engage with their',
		startDate: '2026-04-14',
		branch: 'Joint',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: {
			city: 'Arlington',
			state: 'VA',
			country: 'USA',
			lat: 38.881621,
			lng: -77.09098,
			venue: 'UVA Darden Sands Family Grounds'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'april',
				'2026',
				'procurement',
				'division',
				'meeting'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/4/14/april-2026-procurement-divison-meeting'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Division: Procurement. Card summary: Join the NDIA Procurement Division on April 14, 2026, for its quarterly meeting, to address key challenges and priorities shaping today’s procurement landscape. This meeting also provides an opportunity for the Division’s committees to conduct business and engage with their'
		}
	},
	{
		id: 'radar-mastering-the-art-of-business-development-workshop',
		title: 'Mastering the Art of Business Development® Workshop',
		description: 'The Mastering the Art of Business Development® Workshop is an educational and professional development program which focuses on the thinking, process and discipline required for professional Business Development. This 2-day workshop fosters participants’ understanding of the',
		startDate: '2026-04-15',
		endDate: '2026-04-16',
		branch: 'Joint',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: {
			city: 'Arlington',
			state: 'VA',
			country: 'USA',
			lat: 38.881621,
			lng: -77.09098,
			venue: 'NDIA Headquarters'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'mastering',
				'the',
				'art',
				'of',
				'business',
				'development',
				'workshop',
				'institute'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/4/15/mbdi-april',
				registration: 'https://www.ndia.org/events/2026/4/15/mbdi-april/registration',
				agenda: 'https://www.ndia.org/events/2026/4/15/mbdi-april/agenda'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Division: Business Institute. Speakers/participants: https://www.ndia.org/events/2026/4/15/mbdi-april/instructors Card summary: The Mastering the Art of Business Development® Workshop is an educational and professional development program which focuses on the thinking, process and discipline required for professional Business Development. This 2-day workshop fosters participants’ understanding of the'
		}
	},
	{
		id: 'radar-2026-missile-defense-conference-and-ronald-reagan-missile-defense-award-',
		title: '2026 Missile Defense Conference and Ronald Reagan Missile Defense Award Ceremony',
		description: 'This year\'s conference will focus on the Next Generation of Missile Defense. REGISTER AGENDA',
		startDate: '2026-04-21',
		endDate: '2026-04-22',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: {
			city: 'Washington',
			state: 'DC',
			country: 'USA',
			lat: 38.8950368,
			lng: -77.0365427,
			venue: 'Ronald Reagan Building and International Trade Center'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'2026',
				'missile',
				'defense',
				'conference',
				'and',
				'ronald',
				'reagan',
				'award'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/4/21/6md3-missile-defense-conference',
				registration: 'https://www.ndia.org/events/2026/4/21/6md3-missile-defense-conference/registration',
				agenda: 'https://www.ndia.org/events/2026/4/21/6md3-missile-defense-conference/agenda'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Division: Missile Defense. Card summary: This year\'s conference will focus on the Next Generation of Missile Defense. REGISTER AGENDA'
		}
	},
	{
		id: 'radar-simulation-training-community-forum-2026',
		title: 'Simulation & Training Community Forum 2026',
		description: 'STCF provides industry an opportunity to network and interact with Air Force procurement officials for training and simulation products and services. The Forum includes updates from the Simulators Program Office and the Simulator Branch. Panel discussion updates include 19th AF, ',
		startDate: '2026-04-22',
		branch: 'Air Force / Space Force',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: {
			city: 'Dayton',
			state: 'OH',
			country: 'USA',
			lat: 39.758948,
			lng: -84.191607,
			venue: 'Dayton Convention Center'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Air Force / Space Force stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'simulation',
				'training',
				'community',
				'forum',
				'2026'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ntsa.org/events/2026/4/22/stcf-2026',
				registration: 'https://www.ntsa.org/events/2026/4/22/stcf-2026/registration-fee-page',
				agenda: 'https://www.ntsa.org/events/2026/4/22/stcf-2026/agenda'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Card summary: STCF provides industry an opportunity to network and interact with Air Force procurement officials for training and simulation products and services. The Forum includes updates from the Simulators Program Office and the Simulator Branch. Panel discussion updates include 19th AF, '
		}
	},
	{
		id: 'radar-9th-annual-ndia-new-england-cyber-event',
		title: '9th Annual NDIA New England Cyber Event',
		description: 'Save the date for the 9th Annual NDIA New England Cyber Event! This year’s focus on “Implementing and Operationalizing CMMC” will feature expert speakers, interactive sessions, and networking opportunities to help you stay ahead in compliance and cyber resilience. Registration co',
		startDate: '2026-04-29',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: {
			city: 'Foxborough',
			state: 'MA',
			country: 'USA',
			lat: 42.065376,
			lng: -71.24783,
			venue: 'Gillette Stadium'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'9th',
				'annual',
				'ndia',
				'new',
				'england',
				'cyber',
				'event'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/4/29/ndia-new-england-chapter-cyber-event'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Division: Cyber. Card summary: Save the date for the 9th Annual NDIA New England Cyber Event! This year’s focus on “Implementing and Operationalizing CMMC” will feature expert speakers, interactive sessions, and networking opportunities to help you stay ahead in compliance and cyber resilience. Registration co'
		}
	},
	{
		id: 'radar-2026-department-of-the-air-force-modeling-simulation-analytics-summit-co',
		title: '2026 Department of the Air Force Modeling, Simulation & Analytics Summit Converging Horizons',
		description: 'The goal of the DAFMSA Summit is to gather Air Force and Space Force M&S experts to learn about new M&S initiatives and techniques, network across military services and with industry experts, and to hear our technological leaders’ perspectives on how M&S can tr',
		startDate: '2026-05-05',
		endDate: '2026-05-08',
		branch: 'Air Force / Space Force',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'High',
		location: {
			city: 'Colorado Springs',
			state: 'CO',
			country: 'USA',
			lat: 38.833881,
			lng: -104.821365,
			venue: 'Hotel Polaris'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Air Force / Space Force stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'2026',
				'department',
				'of',
				'the',
				'air',
				'force',
				'modeling',
				'simulation'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ntsa.org/events/2026/5/5/dafmsas-2026',
				registration: 'https://www.dafmss.org/attend/registration-information'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 1200,
					max: 4500
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Card summary: The goal of the DAFMSA Summit is to gather Air Force and Space Force M&S experts to learn about new M&S initiatives and techniques, network across military services and with industry experts, and to hear our technological leaders’ perspectives on how M&S can tr'
		}
	},
	{
		id: 'radar-michigan-defense-expo-advanced-planning-briefing-for-industry',
		title: 'Michigan Defense Expo & Advanced Planning Briefing for Industry',
		description: 'Conference,  Michigan Defense Expo & Advanced Planning Briefing for Industry (APBI) is bringing defense to Detroit this year! Co-located with AUVSI XPONENTIAL, we\'re showing the world what Michigan\'s defense industry can do - register today to secure your spot. REGISTER',
		startDate: '2026-05-12',
		endDate: '2026-05-14',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: {
			city: 'Detroit',
			state: 'MI',
			country: 'USA',
			lat: 42.33155,
			lng: -83.04664,
			venue: 'Huntington Palace'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'michigan',
				'defense',
				'expo',
				'advanced',
				'planning',
				'briefing',
				'for',
				'industry'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/5/12/ndia-michigan-mdex',
				registration: 'https://mdex-ndia.com/2026-registration/'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Card summary: Conference,  Michigan Defense Expo & Advanced Planning Briefing for Industry (APBI) is bringing defense to Detroit this year! Co-located with AUVSI XPONENTIAL, we\'re showing the world what Michigan\'s defense industry can do - register today to secure your spot. REGISTER'
		}
	},
	{
		id: 'radar-2026-joint-ndia-aia-spring-industrial-security-conference',
		title: '2026 Joint NDIA/AIA Spring Industrial Security Conference',
		description: 'This bi-annual conference brings together executive-level security leadership and policy-makers across the federal agencies and U.S. industry to address major government security topics warranting your attendance. REGISTER',
		startDate: '2026-05-18',
		endDate: '2026-05-20',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: {
			city: 'Orlando',
			state: 'FL',
			country: 'USA',
			lat: 28.538336,
			lng: -81.379234,
			venue: 'Rosen Centre Orlando'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'2026',
				'joint',
				'ndia',
				'aia',
				'spring',
				'industrial',
				'security',
				'conference',
				'and',
				'counterintelligence'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/5/18/isc-spring-2026',
				registration: 'https://www.ndia.org/events/2026/5/18/isc-spring-2026/registration'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Division: Security and Counterintelligence. Card summary: This bi-annual conference brings together executive-level security leadership and policy-makers across the federal agencies and U.S. industry to address major government security topics warranting your attendance. REGISTER'
		}
	},
	{
		id: 'radar-dla-supply-chain-alliance-symposium-exhibition',
		title: 'DLA Supply Chain Alliance Symposium & Exhibition',
		description: 'Join Government and Industry leaders as we focus on domestic manufacturing and learn about solutions to the challenges jointly faced by global events impacting supply chains. No matter if you are a small business looking to begin a working relationship with DLA or an established',
		startDate: '2026-06-02',
		endDate: '2026-06-03',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: {
			city: 'Columbus',
			state: 'OH',
			country: 'USA',
			lat: 39.961176,
			lng: -82.998794,
			venue: 'Greater Columbus Convention Center'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'dla',
				'supply',
				'chain',
				'alliance',
				'symposium',
				'exhibition',
				'logistics'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ndia.org/events/2026/6/2/6780-dla',
				registration: 'https://www.ndia.org/events/2026/6/2/6780-dla/registration'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Division: Logistics. Card summary: Join Government and Industry leaders as we focus on domestic manufacturing and learn about solutions to the challenges jointly faced by global events impacting supply chains. No matter if you are a small business looking to begin a working relationship with DLA or an established'
		}
	},
	{
		id: 'radar-training-simulation-industry-symposium-tsis-2026',
		title: 'Training & Simulation Industry Symposium (TSIS) 2026',
		description: 'Held annually, TSIS provides industry an opportunity to network and interact with procurement officials for training and simulation products and services from the Army, Navy, Marine Corps, and Air Force. Industry looks for insight on near-term and long-term opportunities, to incl',
		startDate: '2026-06-17',
		endDate: '2026-06-18',
		branch: 'Air Force / Space Force',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: {
			city: 'Orlando',
			state: 'FL',
			country: 'USA',
			lat: 28.538336,
			lng: -81.379234,
			venue: 'Rosen Centre Hotel'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Air Force / Space Force stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'training',
				'simulation',
				'industry',
				'symposium',
				'tsis',
				'2026'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ntsa.org/events/2026/6/17/tsis-2026',
				registration: 'https://www.ntsa.org/events/2026/6/17/tsis-2026/registration'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Card summary: Held annually, TSIS provides industry an opportunity to network and interact with procurement officials for training and simulation products and services from the Army, Navy, Marine Corps, and Air Force. Industry looks for insight on near-term and long-term opportunities, to incl'
		}
	},
	{
		id: 'radar-capitol-hill-modeling-simulation-expo-2026',
		title: 'Capitol Hill Modeling & Simulation Expo 2026',
		description: 'Tentative date, more information coming soon!',
		startDate: '2026-07-09',
		branch: 'Joint',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: {
			city: 'Washington',
			state: 'DC',
			country: 'USA',
			lat: 38.8950368,
			lng: -77.0365427,
			venue: 'Rayburn House Office Building – Foyer'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'capitol',
				'hill',
				'modeling',
				'simulation',
				'expo',
				'2026'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ntsa.org/events/2026/7/9/capitol-hill-expo-2026'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Card summary: Tentative date, more information coming soon!'
		}
	},
	{
		id: 'radar-i-itsec-2026',
		title: 'I/ITSEC 2026 Beyond the Battlefield: Training Readiness and Lethality for All-Domain Dominance!',
		description: 'The Interservice/Industry Training, Simulation and Education Conference (I/ITSEC) is the world\'s largest modeling, simulation, and training conference. Held near the beginning of December in Orlando, Florida, USA, I/ITSEC co',
		startDate: '2026-11-30',
		endDate: '2026-12-03',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: {
			city: 'Orlando',
			state: 'FL',
			country: 'USA',
			lat: 28.538336,
			lng: -81.379234,
			venue: 'Orange County Convention Center – South Concourse'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Opportunity timing',
				'Ecosystem engagement'
			],
			capabilityAreas: [
				'Acquisition',
				'Mission systems',
				'Digital modernization'
			],
			missionThreads: [
				'Partnership development',
				'Program sensing'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'i',
				'itsec',
				'2026',
				'beyond',
				'the',
				'battlefield',
				'training',
				'readiness'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
				{
					name: 'NDIA Events page (live browser relay)',
					url: 'https://www.ndia.org/events',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://www.ntsa.org/events/2026/11/30/iitsec-2026'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Card summary: The Interservice/Industry Training, Simulation and Education Conference (I/ITSEC) is the world\'s largest modeling, simulation, and training conference. Held near the beginning of December in Orlando, Florida, USA, I/ITSEC co'
		}
	},
	{
		id: 'radar-defense-it-summit-2026',
		title: 'Defense IT Summit 2026',
		description: 'GovCIO summit focused on defense IT modernization, AI adoption, cybersecurity, acquisition speed, and software delivery for mission readiness.',
		startDate: '2026-02-26',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: {
			city: 'Arlington',
			state: 'VA',
			country: 'USA',
			lat: 38.8816,
			lng: -77.091,
			venue: 'Ritz Carlton Pentagon City'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'AI-enabled mission delivery',
				'Software modernization'
			],
			capabilityAreas: [
				'AI/ML',
				'Cybersecurity',
				'DevSecOps'
			],
			missionThreads: [
				'Technology transition',
				'Mission IT modernization'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'defense it',
				'ai',
				'acquisition',
				'devsecops',
				'cybersecurity'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event day + 14-day follow-up'
			},
			provenance: [
				{
					name: 'GovCIO Media & Research',
					url: 'https://govciomedia.com/defense-it-summit-2026/',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://govciomedia.com/defense-it-summit-2026/',
				registration: 'https://govciomedia.com/defense-it-summit-2026/'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 0,
					max: 500
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Event date/time from official page: February 26, 2026, 8:00am-2:15pm ET.'
		}
	},
	{
		id: 'radar-cyberscape-summit-2026',
		title: 'CyberScape Summit 2026',
		description: 'Federal cybersecurity summit covering AI-enabled cyber defense, identity/zero trust, cloud security, and supply-chain resilience.',
		startDate: '2026-04-16',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: {
			city: 'Arlington',
			state: 'VA',
			country: 'USA',
			lat: 38.8816,
			lng: -77.091,
			venue: 'Renaissance Arlington Capital View'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Cyber resilience',
				'AI-enabled security'
			],
			capabilityAreas: [
				'Cybersecurity',
				'Zero Trust',
				'Cloud security'
			],
			missionThreads: [
				'Critical infrastructure defense',
				'Supply-chain risk reduction'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'cyberscape',
				'zero trust',
				'identity',
				'cloud security',
				'ai'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event day + 14-day follow-up'
			},
			provenance: [
				{
					name: 'GovCIO Media & Research',
					url: 'https://govciomedia.com/cyberscape-summit-2026/',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://govciomedia.com/cyberscape-summit-2026/',
				registration: 'https://govciomedia.com/cyberscape-summit-2026/'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 0,
					max: 500
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Event date/time from official page: April 16, 2026, 8:00am-3:30pm ET.'
		}
	},
	{
		id: 'radar-federal-it-efficiency-summit-2026',
		title: 'Federal IT Efficiency Summit 2026',
		description: 'Federal summit on IT optimization, cloud efficiency, AI-driven productivity, and software procurement models for mission delivery.',
		startDate: '2026-05-20',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: {
			city: 'Reston',
			state: 'VA',
			country: 'USA',
			lat: 38.9586,
			lng: -77.357,
			venue: 'Carahsoft Conference & Collaboration Center'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'IT modernization',
				'AI productivity'
			],
			capabilityAreas: [
				'Cloud',
				'Data modernization',
				'Software acquisition'
			],
			missionThreads: [
				'Cost reduction',
				'Workflow automation'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'federal it efficiency',
				'cloud',
				'ai',
				'software',
				'modernization'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event day + 14-day follow-up'
			},
			provenance: [
				{
					name: 'GovCIO Media & Research',
					url: 'https://govciomedia.com/federal-it-efficiency-summit-2026/',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://govciomedia.com/federal-it-efficiency-summit-2026/',
				registration: 'https://govciomedia.com/federal-it-efficiency-summit-2026/'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 0,
					max: 400
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Event date/time from official page: May 20, 2026, 8:00am-3:00pm ET.'
		}
	},
	{
		id: 'radar-federal-tech-leaders-summit-2026',
		title: 'Federal Tech Leaders Summit 2026',
		description: 'Leadership summit on AI integration, cloud modernization, cybersecurity, and federal software/data strategy execution.',
		startDate: '2026-06-12',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: {
			city: 'Washington',
			state: 'DC',
			country: 'USA',
			lat: 38.895,
			lng: -77.0365,
			venue: 'Hilton Washington DC Capitol Hill'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Technology leadership',
				'Cloud and AI operations'
			],
			capabilityAreas: [
				'AI/ML',
				'Cybersecurity',
				'Cloud'
			],
			missionThreads: [
				'Digital service delivery',
				'Mission IT modernization'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'tech leaders',
				'ai',
				'cloud',
				'it modernization',
				'federal cio'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event day + 14-day follow-up'
			},
			provenance: [
				{
					name: 'GovCIO Media & Research',
					url: 'https://govciomedia.com/federal-tech-leaders-summit/',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://govciomedia.com/federal-tech-leaders-summit/',
				registration: 'https://govciomedia.com/federal-tech-leaders-summit/'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 0,
					max: 400
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Event date/time from official page: June 12, 2026, 8:00am-12:30pm ET.'
		}
	},
	{
		id: 'radar-federal-cloud-data-forum-2026',
		title: 'Federal Cloud & Data Forum 2026',
		description: 'Forum focused on cloud, edge, and hybrid data architectures enabling AI-driven decision advantage across federal missions.',
		startDate: '2026-10-08',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: {
			city: 'Washington',
			state: 'DC',
			country: 'USA',
			lat: 38.895,
			lng: -77.0365,
			venue: 'Hilton Washington DC Capitol Hill'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Cloud transformation',
				'Data architecture for AI'
			],
			capabilityAreas: [
				'Cloud',
				'Data engineering',
				'Edge computing'
			],
			missionThreads: [
				'Decision support modernization',
				'Scalable AI enablement'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'cloud',
				'data',
				'hybrid',
				'edge',
				'ai'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event day + 14-day follow-up'
			},
			provenance: [
				{
					name: 'GovCIO Media & Research',
					url: 'https://govciomedia.com/federal-cloud-data-forum/',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://govciomedia.com/federal-cloud-data-forum/',
				registration: 'https://govciomedia.com/federal-cloud-data-forum/'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 0,
					max: 400
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Event date/time from official page: October 8, 2026, 8:00am-12:00pm ET.'
		}
	},
	{
		id: 'radar-health-it-summit-2026',
		title: 'Health IT Summit 2026',
		description: 'Federal health technology summit covering EHR modernization, interoperability, and AI-enabled care/data workflows.',
		startDate: '2026-09-02',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: {
			city: 'Bethesda',
			state: 'MD',
			country: 'USA',
			lat: 38.9847,
			lng: -77.0947,
			venue: 'Bethesda Marriott'
		},
		ontology: {
			themes: [
				'Defense conference monitoring',
				'Health IT modernization',
				'AI-enabled operations'
			],
			capabilityAreas: [
				'Interoperability',
				'Data exchange',
				'AI/ML'
			],
			missionThreads: [
				'Clinical mission support',
				'Digital transformation'
			],
			stakeholders: [
				'Joint stakeholders',
				'Program offices',
				'Industry partners'
			],
			keywords: [
				'health it',
				'ehr',
				'interoperability',
				'ai',
				'data exchange'
			],
			relatedPrograms: [
				'Radar expansion'
			],
			decisionWindows: {
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event day + 14-day follow-up'
			},
			provenance: [
				{
					name: 'GovCIO Media & Research',
					url: 'https://govciomedia.com/health-it-summit-2026/',
					type: 'official',
					lastVerified: '2026-02-17',
					confidence: 'High'
				}
			],
			links: {
				official: 'https://govciomedia.com/health-it-summit-2026/',
				registration: 'https://govciomedia.com/health-it-summit-2026/'
			},
			logistics: {
				format: 'In-person',
				estimatedCostUsd: {
					min: 0,
					max: 400
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'Event date/time from official page: September 2, 2026, 8:00am-3:00pm ET.'
		}
	},
	{
		id: 'radar-special-topic-breakfasts',
		title: 'Special Topic Breakfasts',
		description: 'Navy League sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-02-25',
		branch: 'Navy',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'Virtual',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Navy stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['special', 'topic', 'breakfasts'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Navy League',
				url: 'https://www.navyleague.org/meetings-and-events/',
				type: 'official',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.navyleague.org/meetings-and-events/special-topic-breakfasts/'
			},
			logistics: 
			{
				format: 'Virtual',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'No public government POC, solicitation number, notice type, response date, or registration deadline was published on the source page as of 2026-02-18.'
		}
	},
	{
		id: 'radar-2026-global-force-symposium-exposition',
		title: '2026 Global Force Symposium & Exposition',
		description: 'AUSA sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-03-24',
		endDate: '2026-03-26',
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
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['2026', 'global', 'force', 'symposium', 'exposition'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AUSA',
				url: 'https://www.ausa.org/meet',
				type: 'official',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ausa.org/events/2026-global-force-symposium-exposition'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 500,
					max: 2200
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'No public government POC, solicitation number, notice type, response date, or registration deadline was published on the source page as of 2026-02-18.'
		}
	},
	{
		id: 'radar-mosa-for-defense-warfare-summit-2026',
		title: 'MOSA for Defense & Warfare Summit 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-04-08',
		endDate: '2026-04-09',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['mosa', 'defense', 'warfare', 'summit', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25916'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'No public government POC, solicitation number, notice type, response date, or registration deadline was published on the source page as of 2026-02-18.'
		}
	},
	{
		id: 'radar-unmanned-autonomous-systems-summit-2026',
		title: 'Unmanned & Autonomous Systems Summit 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-04-08',
		endDate: '2026-04-09',
		branch: 'Joint',
		type: 'Summit',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['unmanned', 'autonomous', 'systems', 'summit', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25915'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'No public government POC, solicitation number, notice type, response date, or registration deadline was published on the source page as of 2026-02-18.'
		}
	},
	{
		id: 'radar-sea-air-space',
		title: 'Sea-Air-Space',
		description: 'Navy League sourced event for defense ecosystem tracking and engagement planning.',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Navy stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['space'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Navy League',
				url: 'https://www.navyleague.org/meetings-and-events/',
				type: 'official',
				lastVerified: '2026-02-13',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.seaairspace.org/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 100,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			notes: 'No public government POC, solicitation number, notice type, response date, or registration deadline was published on the source page as of 2026-02-18.'
		}
	},





	{
		id: 'radar-t2com',
		title: 'T2COM',
		description: 'AUSA event focused on U.S. Army Transformation and Training Command (T2COM) mission, structure, and industry collaboration.',
		startDate: '2026-03-04',
		branch: 'Army',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location:
		{
			city: 'Belcamp',
			state: 'MD',
			country: 'USA',
			lat: 39.4663403,
			lng: -76.2377005,
			venue: "Water's Edge Event Center"
		},
		ontology:
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['t2com', 'industry partners', 'army modernization'],
			relatedPrograms: ['Transformation and Training Command (T2COM)'],
			decisionWindows:
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AUSA Event Page',
				url: 'https://www.ausa.org/events/t2com',
				type: 'official',
				lastVerified: '2026-02-19',
				confidence: 'High'
			}],
			links:
			{
				official: 'https://www.ausa.org/events/t2com'
			},
			logistics:
			{
				format: 'In-person',
				travelBurdenFromDc: 'Low'
			},
			acquisition:
			{
				engagementKinds: ['Vendor Outreach'],
				noticeType: 'Industry partner outreach event',
				agency: 'U.S. Army Transformation and Training Command (T2COM)'
			},
			engagement:
			{
				status: 'Not engaged',
				contacts: [
					{
						name: 'CSM Troy Welch',
						role: 'Event Information',
						organization: 'Association of the United States Army (AUSA)',
						email: 'twelch@ausa.org',
						phone: '703-907-2682'
					},
					{
						name: 'Suzanne McCollum',
						role: 'Registration Information',
						organization: 'Association of the United States Army (AUSA)',
						email: 'smccollum@ausa.org',
						phone: '703-907-2416'
					}
				],
				notes: 'No public solicitation number, response due date, or registration deadline was published on the source page as of 2026-02-19.'
			},
			notes: 'Event location and contacts verified from AUSA event page; coordinates geocoded from the published street address.'
		}
	},
,
	{
		id: 'radar-cyber-workforce-summit-2-0',
		title: 'Cyber Workforce Summit 2.0: Forging Cyber Warriors',
		description: 'DoW CIO-hosted cyber workforce summit with AFCEA and National Defense University, including the inaugural Cyber Workforce Competition.',
		startDate: '2026-03-24',
		endDate: '2026-03-26',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location:
		{
			city: 'Washington',
			state: 'DC',
			country: 'USA',
			lat: 38.8674,
			lng: -77.0163,
			venue: 'National Defense University, Fort Lesley J. McNair'
		},
		ontology:
		{
			themes: ['Cyber workforce readiness', 'Operational cyber training', 'Cross-sector coordination'],
			capabilityAreas: ['Cyber operations', 'Workforce development', 'Policy implementation'],
			missionThreads: ['Cyber readiness', 'Talent pipeline acceleration'],
			stakeholders: ['DoW CIO', 'USCYBERCOM', 'DISA', 'Service CIOs', 'Academic and industry partners'],
			keywords: ['cyber workforce summit', 'cws 2.0', 'fort mcnair', 'doW 8140', 'cyber workforce competition'],
			relatedPrograms: ['Cyber Academic Engagement', 'Cyber Service Academy', 'DoW 8140 Qualification Program'],
			decisionWindows:
			{
				discovery: 'Now to T-30 days',
				prep: 'T-21 to T-3 days',
				execution: 'Summit week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AFCEA Cyber Workforce Summit',
				url: 'https://www.afcea.org/events/cyber-workforce-summit',
				type: 'official',
				lastVerified: '2026-02-23',
				confidence: 'High'
			},
			{
				name: 'DoW CIO news release',
				url: 'https://dowcio.war.gov/In-the-News/Article/4409772/cyber-workforce-summit-unites-military-government-and-industry-leaders-to-advan/',
				type: 'official',
				lastVerified: '2026-02-23',
				confidence: 'High'
			}],
			links:
			{
				official: 'https://www.afcea.org/events/cyber-workforce-summit',
				registration: 'https://member.afcea.org/s/eventdetails?id=a0lPW0000078tBNYAY'
			},
			logistics:
			{
				format: 'In-person',
				estimatedCostUsd:
				{
					min: 50,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			engagement:
			{
				status: 'Not engaged',
				nextAction: 'Register and capture agenda/prioritized sessions',
				nextActionDate: '2026-03-01'
			},
			notes: 'Metadata validated from AFCEA event page and DoW CIO release; registration shortlink in social post resolves to AFCEA member event URL.'
		}
	}

];
