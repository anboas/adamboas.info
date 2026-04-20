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
		id: 'radar-dsca-industry-day-2026',
		title: 'DSCA Industry Day 2026',
		description: 'Defense Security Cooperation University (DSCU) industry day focused on security cooperation priorities, FMS process updates, and foreign-industry partnership pathways.',
		startDate: '2026-04-23',
		endDate: '2026-04-23',
		branch: 'Joint',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location:
		{
			city: 'National Capital Region',
			state: 'DC',
			country: 'USA',
			lat: 38.9072,
			lng: -77.0369,
			venue: 'NCR venue details provided upon registration'
		},
		ontology:
		{
			themes: ['Security Cooperation', 'FMS Reform', 'Defense Industrial Partnerships'],
			capabilityAreas: ['Program execution', 'Partner integration', 'Acquisition alignment'],
			missionThreads: ['Security cooperation modernization', 'Partner capacity building'],
			stakeholders: ['DSCA', 'DSCU', 'U.S. government stakeholders', 'Foreign government representatives', 'Defense industry'],
			keywords: ['dsca', 'dscu', 'industry day', 'fms', 'security cooperation'],
			relatedPrograms: ['Foreign Military Sales', 'Security cooperation initiatives'],
			decisionWindows:
			{
				discovery: 'Now to registration close (2026-04-17)',
				prep: 'T-14 to T-1 days',
				execution: 'Event day + 14-day follow-up'
			},
			provenance: [
			{
				name: 'Defense Security Cooperation Agency LinkedIn announcement',
				url: 'https://www.linkedin.com/',
				type: 'official',
				lastVerified: '2026-04-09',
				confidence: 'Medium'
			}],
			links:
			{
				official: 'https://www.dsca.mil/',
				registration: 'https://lnkd.in/eu7H2DH9'
			},
			logistics:
			{
				format: 'Hybrid',
				estimatedCostUsd:
				{
					min: 0,
					max: 900
				},
				travelBurdenFromDc: 'Low'
			},
			acquisition:
			{
				engagementKinds: ['Industry Day'],
				noticeType: 'Industry Day announcement',
				agency: 'Defense Security Cooperation Agency / Defense Security Cooperation University',
				registrationDeadline: '2026-04-17'
			},
			engagement:
			{
				status: 'Not engaged',
				nextAction: 'Register and prepare target stakeholder list',
				nextActionDate: '2026-04-16'
			},
			notes: 'From DSCA/DSCU save-the-date announcement: hybrid format, registration required, in-person venue details provided after registration.'
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
			acquisition:
			{
				engagementKinds: ['Sources Sought', 'Pre-solicitation', 'Special Notice'],
				noticeType: 'Mixed (SOF notices)',
				agency: 'USSOCOM / MARSOC / Naval Special Warfare',
				solicitationNumber: 'H9225726QE007',
				responseDueDate: '2026-03-27',
				samIntelligence:
				{
					collectedAt: '2026-02-26',
					postedFrom: '2026-01-15',
					postedTo: '2026-02-26',
					noticeTypes: ['p', 'r', 's', 'o', 'k'],
					totalMatched: 49,
					topNotices: [
					{
						noticeId: 'b57eb3bbc1ba48fcb528ecff95240f91',
						title: 'USSOCOM SOF AT&L INNOVATIVE TECHNOLOGY AND AGILE ACQUISITION, Commercial Solutions Opening (CSO)',
						noticeType: 'Special Notice',
						postedDate: '2026-02-24',
						agencyPath: 'DEPT OF DEFENSE.US SPECIAL OPERATIONS COMMAND (USSOCOM).HQ USSOCOM',
						uiLink: 'https://sam.gov/workspace/contract/opp/b57eb3bbc1ba48fcb528ecff95240f91/view'
					},
					{
						noticeId: '1d5f0611f7ed430ab9a3e3b17ba98f0d',
						title: 'USSOCOM Small Cruise Missile (SCM)',
						noticeType: 'Sources Sought',
						postedDate: '2026-02-12',
						agencyPath: 'DEPT OF DEFENSE.US SPECIAL OPERATIONS COMMAND (USSOCOM).HQ USSOCOM',
						uiLink: 'https://sam.gov/workspace/contract/opp/1d5f0611f7ed430ab9a3e3b17ba98f0d/view'
					},
					{
						noticeId: 'ec6c6a446037465ba6bc4e7ed9ea0720',
						title: 'MARSOC Initial Equipment Multiple Award BPA',
						noticeType: 'Combined Synopsis/Solicitation',
						postedDate: '2026-02-25',
						responseDueDate: '2026-03-27T12:00:00-04:00',
						solicitationNumber: 'H9225726QE007',
						agencyPath: 'DEPT OF DEFENSE.US SPECIAL OPERATIONS COMMAND (USSOCOM).MARSOC H92257',
						naicsCode: '334111',
						classificationCode: '7E21',
						uiLink: 'https://sam.gov/workspace/contract/opp/ec6c6a446037465ba6bc4e7ed9ea0720/view'
					},
					{
						noticeId: '3ae1e431b0a747588762b770f7b6481c',
						title: 'RFI Combat Development Systems Engineering and Technical Assistance (SETA) Support',
						noticeType: 'Sources Sought',
						postedDate: '2026-02-12',
						responseDueDate: '2026-02-23T12:00:00-05:00',
						solicitationNumber: 'H9225726BG001',
						agencyPath: 'DEPT OF DEFENSE.US SPECIAL OPERATIONS COMMAND (USSOCOM).MARSOC H92257',
						naicsCode: '541690',
						classificationCode: 'R408',
						uiLink: 'https://sam.gov/workspace/contract/opp/3ae1e431b0a747588762b770f7b6481c/view'
					}
					]
				}
			},
			notes: 'Date aligned to current 2026 listing; high value when tied to mission-thread targets before attendance. SAM intelligence run attached 2026-02-26.'
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
			},
			acquisition:
			{
				engagementKinds: ['Pre-solicitation', 'Sources Sought', 'Special Notice'],
				noticeType: 'Mixed (Navy/NAVAIR notices)',
				agency: 'Department of the Navy / NAVAIR',
				solicitationNumber: 'N00019-26-RFPREQ-APM290-0571',
				responseDueDate: '2026-03-12',
				samIntelligence:
				{
					collectedAt: '2026-02-26',
					postedFrom: '2026-01-15',
					postedTo: '2026-02-26',
					noticeTypes: ['p', 'r', 's', 'o', 'k'],
					totalMatched: 50,
					topNotices: [
					{
						noticeId: '78ebb01c9dca4e79b0279b4f37c62f07',
						title: 'Airborne Radar supporting Multi-mission Maritime Aircraft',
						noticeType: 'Presolicitation',
						postedDate: '2026-02-19',
						responseDueDate: '2026-03-06T23:59:00-05:00',
						solicitationNumber: 'N00019-26-RFPREQ-APM290-0571',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.NAVAIR.NAVAIR HQS.NAVAL AIR SYSTEMS COMMAND',
						uiLink: 'https://sam.gov/workspace/contract/opp/78ebb01c9dca4e79b0279b4f37c62f07/view'
					},
					{
						noticeId: 'd7e950c6825641f396e1e635b193b9c7',
						title: 'Airborne Radar Solutions Supporting Multi-mission Maritime Aircraft',
						noticeType: 'Sources Sought',
						postedDate: '2026-02-05',
						responseDueDate: '2026-02-11T23:59:00-05:00',
						solicitationNumber: 'N00019-26-RFPREQ-APM290-0571',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.NAVAIR.NAVAIR HQS.NAVAL AIR SYSTEMS COMMAND',
						uiLink: 'https://sam.gov/workspace/contract/opp/d7e950c6825641f396e1e635b193b9c7/view'
					},
					{
						noticeId: 'd6fcfdb0f5b94267a59656c50a6cfef0',
						title: 'Active Expendable Decoy (AED) Procurement and Support',
						noticeType: 'Sources Sought',
						postedDate: '2026-02-25',
						responseDueDate: '2026-03-11T09:00:00-04:00',
						solicitationNumber: 'N00019-25-RFPREQ-TPM272-0096_01',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.NAVAIR.NAVAIR HQS.NAVAL AIR SYSTEMS COMMAND',
						uiLink: 'https://sam.gov/workspace/contract/opp/d6fcfdb0f5b94267a59656c50a6cfef0/view'
					},
					{
						noticeId: '1aafcd50f4c440d0a0350d8547092d3f',
						title: 'V-22 AE1107C Engine Mission Planning and Power Assurance Update',
						noticeType: 'Combined Synopsis/Solicitation',
						postedDate: '2026-02-25',
						responseDueDate: '2026-03-12T00:00:00-04:00',
						solicitationNumber: 'N00019-26-RFPREQ-APM260-0358',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.NAVAIR.NAVAIR HQS.NAVAL AIR SYSTEMS COMMAND',
						uiLink: 'https://sam.gov/workspace/contract/opp/1aafcd50f4c440d0a0350d8547092d3f/view'
					}
					]
				}
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
		title: 'DEPS Annual Directed Energy Science & Technology Symposium',
		description: 'Directed energy science and technology symposium spanning HEL/HPM, beam control, optics, and transition pathways with government, industry, and academia participants.',
		startDate: '2026-03-30',
		endDate: '2026-04-02',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'High',
		location: 
		{
			city: 'Tucson',
			state: 'AZ',
			country: 'USA',
			lat: 32.3904,
			lng: -110.9552,
			venue: 'El Conquistador Tucson, 10000 N Oracle Rd'
		},
		ontology: 
		{
			themes: ['Directed energy transition', 'HEL/HPM capability maturation', 'Defense R&D to production'],
			capabilityAreas: ['High-energy lasers', 'High-power microwave systems', 'Beam control and optics'],
			missionThreads: ['Prototype-to-production transition', 'Joint DE workforce and experimentation'],
			stakeholders: ['DEPS', 'JDETO', 'AFRL', 'Navy NAVSEA/NIWC', 'Army RCCTO', 'DoW/DoE labs'],
			keywords: ['directed energy', 'HEL', 'HPM', 'beam control', 'optics', 'DEPS'],
			relatedPrograms: ['Radar expansion', 'ACP-RA', 'A2A interoperability'],
			decisionWindows: 
			{
				discovery: 'Now to T-30 days',
				prep: 'T-21 to T-3 days',
				execution: 'Symposium week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'DEPS Annual DE S&T Symposium overview',
				url: 'https://www.deps.org/DEPSpages/DEsymp26.html',
				type: 'official',
				lastVerified: '2026-02-26',
				confidence: 'High'
			},
			{
				name: 'DEPS attendee information',
				url: 'https://www.deps.org/DEPSpages/DEsympAttendee.html',
				type: 'official',
				lastVerified: '2026-02-26',
				confidence: 'High'
			},
			{
				name: 'DEPS events calendar',
				url: 'https://www.deps.org/DEPSpages/events.html',
				type: 'official',
				lastVerified: '2026-02-26',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.deps.org/DEPSpages/DEsymp26.html',
				registration: 'https://www.deps.org/DEPSpages/DEsympAttendee.html#Fees',
				agenda: 'https://www.deps.org/DEPSpages/php/eventAgenda.php?eid=196',
				callForPapers: 'https://www.deps.org/DEPSpages/DEsymp26Presenter.html',
				hotelBlock: 'https://www.hilton.com/en/hotels/tushthh-el-conquistador-tucson/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 850,
					max: 1650
				},
				travelBurdenFromDc: 'High'
			},
			acquisition:
			{
				engagementKinds: ['Sources Sought', 'Pre-solicitation', 'Solicitation', 'Special Notice'],
				noticeType: 'Mixed (directed energy / photonics)',
				agency: 'AFRL / Army RCCTO / Navy NAVSEA/NIWC',
				solicitationNumber: 'DRFP-W50RAJ26A001',
				responseDueDate: '2026-03-05T16:00:00-05:00',
				samIntelligence:
				{
					collectedAt: '2026-02-26',
					postedFrom: '01/01/2026',
					postedTo: '02/26/2026',
					noticeTypes: ['p', 'r', 's', 'o', 'k'],
					totalMatched: 4,
					topNotices: [
					{
						noticeId: '202389e075d94e3e9a412388991d6a1b',
						title: 'MIL-PRF-XX750, Nickel Aluminum Bronze, Wire Arc, Directed Energy Deposition, Additively Manufactured',
						noticeType: 'Special Notice',
						postedDate: '2026-02-05',
						responseDueDate: '2026-03-05T16:00:00-05:00',
						solicitationNumber: 'N0002426SN-27',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.NAVSEA.NAVSEA HQ',
						naicsCode: '336611',
						classificationCode: '9999',
						uiLink: 'https://sam.gov/workspace/contract/opp/202389e075d94e3e9a412388991d6a1b/view'
					},
					{
						noticeId: '479ebb3222614cfcb087ae09f943b7a7',
						title: 'DRAFT RFP for Enduring-High Energy Laser Production Effort',
						noticeType: 'Presolicitation',
						postedDate: '2026-02-05',
						responseDueDate: '2026-02-16T10:00:00-05:00',
						solicitationNumber: 'DRFP-W50RAJ26A001',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.US ARMY ACQUISITION SUPPORT CENTER.RAPID CAPABILITIES CRITICAL TECH OFC.W6J1 RCCTO REDSTONE',
						classificationCode: '1095',
						uiLink: 'https://sam.gov/workspace/contract/opp/479ebb3222614cfcb087ae09f943b7a7/view'
					},
					{
						noticeId: '041ac5aad4624bfebef17cd86f181858',
						title: 'N66001-26-Q-6061 - Notice of Intent to Sole Source to PicoQuant Photonics North America Inc.',
						noticeType: 'Special Notice',
						postedDate: '2026-02-05',
						responseDueDate: '2026-02-12T12:00:00-07:00',
						solicitationNumber: '1301315605',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.SPAWAR.SPAWAR PACIFIC.NIWC PACIFIC',
						naicsCode: '334516',
						classificationCode: '6650',
						uiLink: 'https://sam.gov/workspace/contract/opp/041ac5aad4624bfebef17cd86f181858/view'
					},
					{
						noticeId: '70471cea48264a2da813ca38bacbcb08',
						title: 'Directed Energy Technology Experimentation Research (DETER) Advanced Research Announcement (ARA) Open Announcement',
						noticeType: 'Solicitation',
						postedDate: '2026-01-13',
						responseDueDate: '2027-08-10T17:00:00-06:00',
						solicitationNumber: 'FA9451-21-S-0001',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE.AIR FORCE MATERIEL COMMAND.AIR FORCE RESEARCH LABORATORY.FA9451  AFRL RDK',
						naicsCode: '541715',
						classificationCode: 'AC33',
						uiLink: 'https://sam.gov/workspace/contract/opp/70471cea48264a2da813ca38bacbcb08/view'
					}
					]
				}
			},
			notes: 'Official DEPS pages confirm the Tucson dates and venue. Some sessions are security-gated and event is currently closed to foreign participation per published attendee guidance. Room block deadline listed as 7 March 2026.'
		}
	},
{
		id: 'radar-same-san-juan-industry-day',
		title: 'SAME San Juan Field Chapter Industry Day March 2026',
		description: 'Multi-day USACE and federal-agency oriented industry event for Puerto Rico, USVI, and wider Caribbean opportunities across construction, A/E/C, and small business engagement.',
		startDate: '2026-03-03',
		endDate: '2026-03-05',
		branch: 'USACE',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'Fajardo',
			state: 'PR',
			country: 'USA',
			lat: 18.3676,
			lng: -65.6284,
			venue: 'El Conquistador Resort, 1000 Avenida El Conquistador'
		},
		ontology: 
		{
			themes: ['USACE Caribbean opportunity shaping', 'A/E/C capture preparation', 'Small-business teaming'],
			capabilityAreas: ['Surveying and mapping', 'Construction and facilities modernization', 'Program management and compliance'],
			missionThreads: ['Puerto Rico/USVI infrastructure delivery', 'USACE district engagement', 'Mentor-protege and JV formation'],
			stakeholders: ['USACE Caribbean District', 'USACE South Atlantic Division', 'Federal agencies in PR/USVI', 'A/E/C industry leaders'],
			keywords: ['same san juan', 'industry day', 'usace', 'caribbean district', 'puerto rico', 'us virgin islands'],
			relatedPrograms: ['Radar expansion', 'Opportunity intelligence'],
			decisionWindows: 
			{
				discovery: 'Now to T-14 days',
				prep: 'T-10 to T-1 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'SAME event listing (official)',
				url: 'https://www.same.org/event/san-juan-chapter-industry-day-march-2026/',
				type: 'official',
				lastVerified: '2026-02-26',
				confidence: 'High'
			},
			{
				name: 'SAME events programs index',
				url: 'https://www.same.org/events-programs/',
				type: 'official',
				lastVerified: '2026-02-26',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.same.org/event/san-juan-chapter-industry-day-march-2026/',
				registration: 'https://whova.com/web/iUpy-MaaymHLUxGBEciY9cLACNnG89G5%40CEGsfw3Zx8%3D/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 700,
					max: 2400
				},
				travelBurdenFromDc: 'Medium'
			},
			acquisition:
			{
				engagementKinds: ['Industry Day', 'Sources Sought', 'Pre-solicitation', 'Special Notice'],
				noticeType: 'Mixed (USACE Caribbean and adjacent federal opportunities)',
				agency: 'USACE Caribbean District / USACE SAD / GSA / FEMA / FAA',
				solicitationNumber: 'W51DQV-26-R-1AWR',
				responseDueDate: '2026-03-09T12:00:00-04:00',
				samIntelligence:
				{
					collectedAt: '2026-02-26',
					postedFrom: '01/01/2026',
					postedTo: '02/26/2026',
					noticeTypes: ['p', 'r', 's', 'o', 'k'],
					totalMatched: 107,
					topNotices: [
					{
						noticeId: 'c9a0371cd6604d6590d390477e9a1038',
						title: 'OUTREACH EVENT ANNOUNCEMENT: ARCHITECT AND ENGINEERING (A-E) SERVICES FOR SURVEYING AND MAPPING TO SUPPORT THE CARIBBEAN DISTRICT AND USACE',
						noticeType: 'Special Notice',
						postedDate: '2026-02-13',
						responseDueDate: '2026-02-26T16:00:00-05:00',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.US ARMY CORPS OF ENGINEERS.ENGINEER DIVISION SOUTH ATLANTIC.ENDIST CARIBBEAN.W2SR ENDIST CARIBBEAN(PROVIS)',
						naicsCode: '541370',
						uiLink: 'https://sam.gov/workspace/contract/opp/c9a0371cd6604d6590d390477e9a1038/view'
					},
					{
						noticeId: 'bf2cfbe4e7f34066a921127c9a53922d',
						title: 'INDEFINITE DELIVERY CONTRACT FOR ARCHITECT AND ENGINEERING (A-E) SERVICES FOR TOPOGRAPHIC AND HYDROGRAPHIC SURVEYING AND MAPPING SERVICES TO SUPPORT THE CARIBBEAN DISTRICT AND USACE',
						noticeType: 'Sources Sought',
						postedDate: '2026-01-07',
						responseDueDate: '2026-01-15T17:00:00-04:00',
						solicitationNumber: 'W51DQV-26-R-1AWR',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.US ARMY CORPS OF ENGINEERS.ENGINEER DIVISION SOUTH ATLANTIC.ENDIST CARIBBEAN.W2SR ENDIST CARIBBEAN(PROVIS)',
						naicsCode: '541370',
						classificationCode: 'C219',
						uiLink: 'https://sam.gov/workspace/contract/opp/bf2cfbe4e7f34066a921127c9a53922d/view'
					},
					{
						noticeId: '2ae7a63ed50d48a096e6a533bd058367',
						title: 'Rio Del La Plata Flood Control Project, Supplemental Contract 1, Dorado and Toa Baja, Puerto Rico.',
						noticeType: 'Presolicitation',
						postedDate: '2026-01-29',
						responseDueDate: '2026-02-28T16:00:00-04:00',
						solicitationNumber: 'W51DQV26RA002',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.US ARMY CORPS OF ENGINEERS.ENGINEER DIVISION SOUTH ATLANTIC.ENDIST CARIBBEAN.W2SR ENDIST CARIBBEAN(PROVIS)',
						naicsCode: '237990',
						classificationCode: 'Y1KB',
						uiLink: 'https://sam.gov/workspace/contract/opp/2ae7a63ed50d48a096e6a533bd058367/view'
					},
					{
						noticeId: 'f945c321f4954f29ac3dfaad012fee5b',
						title: 'Market Survey for Janitorial Services for Consolidated Janitorial Services at various locations throughout the Miami District to include the state of Florida, Puerto Rico, and US Virgin Islands (USVI)',
						noticeType: 'Sources Sought',
						postedDate: '2026-02-23',
						responseDueDate: '2026-03-09T12:00:00-04:00',
						solicitationNumber: 'ES-26-00008',
						agencyPath: 'TRANSPORTATION, DEPARTMENT OF.FEDERAL AVIATION ADMINISTRATION.697DCK REGIONAL ACQUISITIONS SVCS',
						naicsCode: '561720',
						classificationCode: 'S201',
						uiLink: 'https://sam.gov/workspace/contract/opp/f945c321f4954f29ac3dfaad012fee5b/view'
					},
					{
						noticeId: 'faf8341b421d448e93c4d8bf1c859e07',
						title: 'Industry Day for Construction Projects at Federico Degetau Federal Building and Clemente Ruiz Nazario U.S. Courthouse Complex, San Juan, Puerto Rico',
						noticeType: 'Special Notice',
						postedDate: '2026-01-27',
						responseDueDate: '2026-01-14T15:00:00-05:00',
						agencyPath: 'GENERAL SERVICES ADMINISTRATION.PUBLIC BUILDINGS SERVICE.PBS PROJECT DELIVERY CAPITAL CONSTRUCTION - BRANCH NORTHEAST',
						naicsCode: '236220',
						classificationCode: 'Y1AA',
						uiLink: 'https://sam.gov/workspace/contract/opp/faf8341b421d448e93c4d8bf1c859e07/view'
					},
					{
						noticeId: '8e1f401c9a9347bdadfb747af6397b2b',
						title: 'Disaster Overseas Transportation (DOTS) US Virgin Islands & Puerto Rico (VIPR)',
						noticeType: 'Presolicitation',
						postedDate: '2026-02-18',
						solicitationNumber: 'DOTSVIPR00000001',
						agencyPath: 'HOMELAND SECURITY, DEPARTMENT OF.FEDERAL EMERGENCY MANAGEMENT AGENCY.INCIDENT SUPPORT SECTION(ISS70)',
						naicsCode: '483111',
						classificationCode: 'V115',
						uiLink: 'https://sam.gov/workspace/contract/opp/8e1f401c9a9347bdadfb747af6397b2b/view'
					},
					{
						noticeId: 'd5edf0497c534200811c8f106cba5ccc',
						title: 'GSA OSDBU OFFICE HOURS: YOUR BUSINESS! YOUR OPPORTUNITIES! - Regions 1,2 & 3: CT, ME, MA, NH, RI, VT, NY, NJ, Puerto Rico, US Virgin Islands, DE, PA, WV, parts of MD & VA',
						noticeType: 'Special Notice',
						postedDate: '2026-02-11',
						responseDueDate: '2026-03-03T14:00:00-05:00',
						agencyPath: 'GENERAL SERVICES ADMINISTRATION',
						uiLink: 'https://sam.gov/workspace/contract/opp/d5edf0497c534200811c8f106cba5ccc/view'
					}
					]
				}
			},
			notes: 'Official SAME listing confirms March 3-5 window at El Conquistador in Fajardo with explicit sessions on Puerto Rico + USVI opportunity flow, including Meet the USACE SAA PMs and small-business/teaming panels.'
		}
	},
{
		id: 'radar-cyberbay-summit',
		title: 'CyberBay Summit 2026',
		description: 'Tampa Bay cybersecurity and emerging-technology summit convening government, defense, academia, and industry leadership around digital defense, resilience, and workforce development.',
		startDate: '2026-03-11',
		endDate: '2026-03-13',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'Tampa',
			state: 'FL',
			country: 'USA',
			lat: 27.9427,
			lng: -82.4450,
			venue: 'JW Marriott Tampa Water Street'
		},
		ontology: 
		{
			themes: ['Cyber resilience', 'Digital defense modernization', 'Critical infrastructure protection'],
			capabilityAreas: ['Cybersecurity operations', 'Threat intelligence', 'AI + security'],
			missionThreads: ['Government-industry cyber integration', 'Workforce development', 'Regional cyber ecosystem scaling'],
			stakeholders: ['Cyber Florida at USF', 'Bellini Capital', 'USF Bellini College', 'SOCOM/CENTCOM ecosystem', 'Federal and defense cyber leaders'],
			keywords: ['cyberbay', 'cybersecurity', 'digital defense', 'critical infrastructure', 'tampa'],
			relatedPrograms: ['Radar expansion', 'Opportunity intelligence'],
			decisionWindows: 
			{
				discovery: 'Now to T-14 days',
				prep: 'T-10 to T-1 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'CyberBay Summit official page',
				url: 'https://cyberbay.org/summit/',
				type: 'official',
				lastVerified: '2026-02-26',
				confidence: 'High'
			},
			{
				name: 'CyberBay home page',
				url: 'https://cyberbay.org/',
				type: 'official',
				lastVerified: '2026-02-26',
				confidence: 'High'
			},
			{
				name: 'Cyber Florida release: CyberBay Summit 2026',
				url: 'https://cyberflorida.org/cyberbay-summit-2026-advancing-the-future-of-digital-defense/',
				type: 'official',
				lastVerified: '2026-02-26',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://cyberbay.org/summit/',
				registration: 'https://cyberbay.eventsair.com/2026/register',
				agenda: 'https://cyberbay.org/agenda/',
				hotelBlock: 'https://cyberbay.org/summit/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 50,
					max: 250
				},
				travelBurdenFromDc: 'Medium'
			},
			acquisition:
			{
				engagementKinds: ['Industry Day', 'Sources Sought', 'Pre-solicitation', 'Special Notice'],
				noticeType: 'Mixed (cyber operations, information warfare, and enterprise security support)',
				agency: 'DoD / DHS / Navy NIWC / DCSA / USACE',
				solicitationNumber: 'W912DR25RA001',
				responseDueDate: '2026-03-13T11:00:00-05:00',
				samIntelligence:
				{
					collectedAt: '2026-02-26',
					postedFrom: '01/01/2026',
					postedTo: '02/26/2026',
					noticeTypes: ['p', 'r', 's', 'o', 'k'],
					totalMatched: 10,
					topNotices: [
					{
						noticeId: '720380d23d474906a0b8e407024f2778',
						title: 'Cybersecurity Operations Facility',
						noticeType: 'Solicitation',
						postedDate: '2026-02-19',
						responseDueDate: '2026-03-13T11:00:00-05:00',
						solicitationNumber: 'W912DR25RA001',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.US ARMY CORPS OF ENGINEERS.ENGINEER DIVISION NORTH ATLANTIC.ENDIST BALTIMORE.W2SD ENDIST BALTIMORE',
						naicsCode: '236220',
						classificationCode: 'Y1JZ',
						uiLink: 'https://sam.gov/workspace/contract/opp/720380d23d474906a0b8e407024f2778/view'
					},
					{
						noticeId: 'c78535582d04496db2d2fe313825177b',
						title: 'Area of Interest (AOI): Cyber Resource and Engineering Workforce (CREW) under CSO N0003925S0001',
						noticeType: 'Solicitation',
						postedDate: '2026-02-19',
						responseDueDate: '2026-03-05T14:00:00-08:00',
						solicitationNumber: 'N0003926RH001',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.SPAWAR.SPAWAR HQ.NAVAL INFORMATION WARFARE SYSTEMS',
						naicsCode: '541330',
						classificationCode: 'DD01',
						uiLink: 'https://sam.gov/workspace/contract/opp/c78535582d04496db2d2fe313825177b/view'
					},
					{
						noticeId: 'd3d58c82c96749b4a54d8dea78c9a39c',
						title: 'Communications, Network, Engineering, Cybersecurity, and Information Technology Services (CNECTS), aka "Connects"',
						noticeType: 'Special Notice',
						postedDate: '2026-02-25',
						responseDueDate: '2026-12-23T14:00:00-07:00',
						solicitationNumber: 'FA251827RCNECTS',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE.AIR FORCE SPACE COMMAND.FA2518 USSF SPOC/SAIO',
						naicsCode: '517810',
						classificationCode: 'DG01',
						uiLink: 'https://sam.gov/workspace/contract/opp/d3d58c82c96749b4a54d8dea78c9a39c/view'
					},
					{
						noticeId: 'f96c78589dc9482eb9d280b2927b6557',
						title: 'DCSA Enterprise Cybersecurity Support Services',
						noticeType: 'Sources Sought',
						postedDate: '2026-02-24',
						responseDueDate: '2026-02-23T17:00:00-05:00',
						solicitationNumber: 'DCSA_CYBERSSN_25',
						agencyPath: 'DEPT OF DEFENSE.DEFENSE COUNTERINTELLIGENCE AND SECURITY AGENCY (DCSA).DEFENSE CI AND SECURITY AGENCY',
						naicsCode: '541513',
						classificationCode: 'DJ01',
						uiLink: 'https://sam.gov/workspace/contract/opp/f96c78589dc9482eb9d280b2927b6557/view'
					},
					{
						noticeId: '54ae731156f845c694ea3020723b3b11',
						title: 'Trusted Operations, Maintenance, Cybersecurity, Assurance, and Technology',
						noticeType: 'Sources Sought',
						postedDate: '2026-02-19',
						responseDueDate: '2026-03-02T14:00:00-05:00',
						solicitationNumber: '70T3026_TOMCAT_DraftSOO_Questions',
						agencyPath: 'HOMELAND SECURITY, DEPARTMENT OF.TRANSPORTATION SECURITY ADMINISTRATION.ENTERPRISE INFORMATION TECHNOLOGY',
						uiLink: 'https://sam.gov/workspace/contract/opp/54ae731156f845c694ea3020723b3b11/view'
					},
					{
						noticeId: 'fa25d68331a44e02ab72b1209478731d',
						title: 'Cybersecurity Support Services for Offutt AFB Defense Red Switch Network (DRSN)',
						noticeType: 'Combined Synopsis/Solicitation',
						postedDate: '2026-02-10',
						responseDueDate: '2026-02-17T13:00:00-06:00',
						solicitationNumber: 'FA460026Q0012',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE.AIR COMBAT COMMAND.FA4600  55 CONS  PKP',
						naicsCode: '541513',
						classificationCode: 'DA01',
						uiLink: 'https://sam.gov/workspace/contract/opp/fa25d68331a44e02ab72b1209478731d/view'
					},
					{
						noticeId: 'a7028292a80246798854cf5643e81a2a',
						title: 'N61331-26-R-3101 LCAC C4N and Cybersecurity Systems Program Support',
						noticeType: 'Solicitation',
						postedDate: '2026-01-30',
						responseDueDate: '2026-01-30T16:00:00-06:00',
						solicitationNumber: 'N6133126R3101',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.NAVSEA.NAVSEA WARFARE CENTER.NAVAL SURFACE WARFARE CENTER',
						naicsCode: '541330',
						classificationCode: 'R425',
						uiLink: 'https://sam.gov/workspace/contract/opp/a7028292a80246798854cf5643e81a2a/view'
					},
					{
						noticeId: '304521f76b524448b0692bdf6dea2d06',
						title: 'Trusted Operations, Maintenance, Cybersecurity, Assurance, and Technology (TOMCAT)',
						noticeType: 'Presolicitation',
						postedDate: '2026-01-23',
						responseDueDate: '2025-12-16T17:00:00-05:00',
						solicitationNumber: '70T03026_VRR_TOMCAT',
						agencyPath: 'HOMELAND SECURITY, DEPARTMENT OF.TRANSPORTATION SECURITY ADMINISTRATION.ENTERPRISE INFORMATION TECHNOLOGY',
						classificationCode: '7E20',
						uiLink: 'https://sam.gov/workspace/contract/opp/304521f76b524448b0692bdf6dea2d06/view'
					},
					{
						noticeId: '862ac328162a48dab1794fd47ee16488',
						title: 'Foreign Military Sales – Cybersecurity Professionals Training Capability Assessment',
						noticeType: 'Sources Sought',
						postedDate: '2026-01-15',
						responseDueDate: '2026-02-27T13:00:00-06:00',
						solicitationNumber: 'FA3002-26-RFI-FMS',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE.AIR EDUCATION AND TRAINING COMMAND.FA3002  338 ESS CC',
						naicsCode: '611430',
						uiLink: 'https://sam.gov/workspace/contract/opp/862ac328162a48dab1794fd47ee16488/view'
					},
					{
						noticeId: 'efebe4124f904c65ae05dca3067f1c5f',
						title: 'Project Manager Electronic Warfare & Cyber (PM EW&C) Electromagnetic Spectrum Operations Characteristics of Need (EMSO CON) and Future Multiple Award (MA) Indefinite Delivery Indefinite Quantity (IDIQ) Vehicle',
						noticeType: 'Sources Sought',
						postedDate: '2026-02-24',
						responseDueDate: '2026-03-13T17:00:00-04:00',
						solicitationNumber: 'W56KGY-R-26-0224',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.AMC.ACC.ACC-CTRS.ACC-APG.W6QK ACC-APG',
						naicsCode: '334220',
						uiLink: 'https://sam.gov/workspace/contract/opp/efebe4124f904c65ae05dca3067f1c5f/view'
					}
					]
				}
			},
			notes: 'Official CyberBay sources confirm March 11-13, 2026 at JW Marriott Tampa Water Street with workshops beginning March 11 and broad public/private/defense participation; official pricing published for industry/public service/student tiers.'
		}
	},
{
		id: 'radar-afcea-nova-naval-it-day-2026',
		title: 'AFCEA NOVA Naval IT Day 2026',
		description: 'AFCEA NOVA industry day focused on Navy and Marine Corps digital modernization priorities, including data, cyber resilience, and decision advantage.',
		startDate: '2026-03-12',
		endDate: '2026-03-12',
		branch: 'Navy',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: 
		{
			city: 'Chantilly',
			state: 'VA',
			country: 'USA',
			lat: 38.885219,
			lng: -77.4486772,
			venue: 'Westfields Marriott Washington Dulles'
		},
		ontology: 
		{
			themes: ['Naval digital modernization', 'Cyber resilience', 'Data-driven decision advantage'],
			capabilityAreas: ['Information technology', 'Cybersecurity', 'Data and analytics'],
			missionThreads: ['Navy and USMC modernization alignment', 'Acquisition signal tracking', 'Industry teaming'],
			stakeholders: ['Department of the Navy', 'U.S. Marine Corps', 'NAVAIR', 'NAVSEA', 'NIWC Atlantic', 'NIWC Pacific'],
			keywords: ['afcea nova', 'naval it day', 'navy', 'marine corps', 'data', 'digital', 'decision advantage'],
			relatedPrograms: ['Radar expansion', 'Opportunity intelligence'],
			decisionWindows: 
			{
				discovery: 'Now to T-7 days',
				prep: 'T-7 to T-1 days',
				execution: 'Event day + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AFCEA NOVA calendar',
				url: 'https://nova.afceachapters.org/calendar',
				type: 'official',
				lastVerified: '2026-02-26',
				confidence: 'High'
			},
			{
				name: 'AFCEA NOVA Naval IT Day registration page',
				url: 'https://afceanova.swoogo.com/NavalITDay2025',
				type: 'official',
				lastVerified: '2026-02-26',
				confidence: 'High'
			},
			{
				name: 'GovEvents listing for Naval IT Day 2026',
				url: 'https://www.govevents.com/details/96237/afcea-nova-naval-it-day-2026',
				type: 'community',
				lastVerified: '2026-02-26',
				confidence: 'Medium'
			},
			{
				name: 'DLT sponsor event brief',
				url: 'https://www.dlt.com/events/afcea-nova-naval-it-day-2026',
				type: 'community',
				lastVerified: '2026-02-26',
				confidence: 'Medium'
			}],
			links: 
			{
				official: 'https://afceanova.swoogo.com/NavalITDay2025',
				registration: 'https://afceanova.swoogo.com/NavalITDay2025/register'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 0,
					max: 595
				},
				travelBurdenFromDc: 'Low'
			},
			acquisition:
			{
				engagementKinds: ['Industry Day', 'Sources Sought', 'Pre-solicitation', 'Special Notice'],
				noticeType: 'Mixed Navy/USMC IT, cyber, and digital modernization notices',
				agency: 'Department of the Navy (NIWC, NAVSEA, NAVAIR, USMC, ONR)',
				solicitationNumber: 'N6600126SC002',
				responseDueDate: '2026-03-23T23:59:00-04:00',
				samIntelligence:
				{
					collectedAt: '2026-02-26',
					postedFrom: '01/01/2026',
					postedTo: '02/26/2026',
					noticeTypes: ['p', 'r', 's', 'o', 'k'],
					totalMatched: 54,
					typeCounts: 
					{
						Presolicitation: 10,
						'Special Notice': 6,
						'Sources Sought': 9,
						'Combined Synopsis/Solicitation': 5,
						Solicitation: 24
					},
					topNotices: [
					{
						noticeId: '9b41ad1bb80c4c0185f42811866b291b',
						title: 'NIWC Pacific Commercial Solutions Opening (CSO)',
						noticeType: 'Special Notice',
						postedDate: '2026-02-25',
						solicitationNumber: 'N6600126SC002',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.SPAWAR.SPAWAR PACIFIC.NIWC PACIFIC',
						uiLink: 'https://sam.gov/workspace/contract/opp/9b41ad1bb80c4c0185f42811866b291b/view'
					},
					{
						noticeId: 'd72aae6312de4c4da25c73c56018baed',
						title: 'NIWC Atlantic Rapid Capabilities Office Commercial Solutions Opening',
						noticeType: 'Special Notice',
						postedDate: '2026-01-20',
						solicitationNumber: 'N6523626S0001',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.SPAWAR.SPAWAR LANT.NIWC ATLANTIC',
						naicsCode: '541715',
						uiLink: 'https://sam.gov/workspace/contract/opp/d72aae6312de4c4da25c73c56018baed/view'
					},
					{
						noticeId: '7e2c7a9a5d434249954f7f011eb8ce0d',
						title: 'Unmanned Common Controller (UCC) for the United States Marine Corps',
						noticeType: 'Sources Sought',
						postedDate: '2026-02-20',
						responseDueDate: '2026-03-23T23:59:00-04:00',
						solicitationNumber: '243-26-012',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.NAVAIR.NAVAIR HQS.NAVAL AIR SYSTEMS COMMAND',
						naicsCode: '334220',
						classificationCode: '1550',
						uiLink: 'https://sam.gov/workspace/contract/opp/7e2c7a9a5d434249954f7f011eb8ce0d/view'
					},
					{
						noticeId: '5b33422231bf40bebecdc97427922400',
						title: 'Marine Corps e-Learning Ecosystem (MCeLE) Support Services',
						noticeType: 'Sources Sought',
						postedDate: '2026-02-19',
						responseDueDate: '2026-02-27T15:00:00-05:00',
						solicitationNumber: 'M67854-26-I-4802',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.USMC.MARCOR SYSCOM.COMMANDER',
						uiLink: 'https://sam.gov/workspace/contract/opp/5b33422231bf40bebecdc97427922400/view'
					},
					{
						noticeId: 'a36fd62b1f89443d8ac9276c923cc39a',
						title: 'Marine Corps Tactical Instrumentation System Support Extension',
						noticeType: 'Presolicitation',
						postedDate: '2026-02-13',
						responseDueDate: '2026-02-28T12:00:00-05:00',
						solicitationNumber: 'M6785421C8051P00029',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.USMC.MARCOR SYSCOM.COMMANDER',
						classificationCode: 'J069',
						uiLink: 'https://sam.gov/workspace/contract/opp/a36fd62b1f89443d8ac9276c923cc39a/view'
					},
					{
						noticeId: '54a1dbbc6f4847829bcd6081d5ab7bc1',
						title: 'Marine Corps Tactical Instrumentation System',
						noticeType: 'Presolicitation',
						postedDate: '2026-02-13',
						responseDueDate: '2026-02-28T23:59:00-05:00',
						solicitationNumber: 'M67854R8010',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.USMC.MARCOR SYSCOM.COMMANDER',
						classificationCode: 'J069',
						uiLink: 'https://sam.gov/workspace/contract/opp/54a1dbbc6f4847829bcd6081d5ab7bc1/view'
					},
					{
						noticeId: '80cc33505e1141f2844ef1b61276906b',
						title: 'NAVSEALOGCEN Virtual Industry Day',
						noticeType: 'Special Notice',
						postedDate: '2026-02-02',
						responseDueDate: '2026-03-05T14:00:00-08:00',
						solicitationNumber: 'N65726-ID-2026',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.NAVSEA.NAVSEA WARFARE CENTER.NAVAL UNDERSEA WARFARE CENTER',
						uiLink: 'https://sam.gov/workspace/contract/opp/80cc33505e1141f2844ef1b61276906b/view'
					},
					{
						noticeId: '87d50461402e43ffb3ead43e62bd12e2',
						title: 'FY25 Long Range Broad Agency Announcement (BAA) for Navy and Marine Corps Science and Technology',
						noticeType: 'Solicitation',
						postedDate: '2026-01-14',
						responseDueDate: '2026-09-30T00:00:00-04:00',
						solicitationNumber: 'N0001425SB001',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.ONR.ONR HQS.OFFICE OF NAVAL RESEARCH',
						naicsCode: '541715',
						classificationCode: 'AC12',
						uiLink: 'https://sam.gov/workspace/contract/opp/87d50461402e43ffb3ead43e62bd12e2/view'
					},
					{
						noticeId: 'da28831e42904c3a80810b8dbb0b8bce',
						title: 'Pre-Solicitation Notice and Draft RFP for U.S. Navy (USN) Tactical Combat Training System Increment II (TCTS II) and United States Air Force (USAF) equivalent P6 combat Training System (P6CTS)',
						noticeType: 'Solicitation',
						postedDate: '2026-02-26',
						responseDueDate: '2026-03-12T17:00:00-04:00',
						solicitationNumber: 'n6134026r1008',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.NAVAIR.NAVAIR NAWC TSD.NAWC TRAINING SYSTEMS DIV',
						naicsCode: '336413',
						classificationCode: '6910',
						uiLink: 'https://sam.gov/workspace/contract/opp/da28831e42904c3a80810b8dbb0b8bce/view'
					}
					]
				}
			},
			notes: 'AFCEA NOVA calendar confirms Naval IT Day on March 12, 2026 with registration open. Swoogo registration flow provides fee tiers (industry, member/non-member, and no-cost government/military). Secondary event briefs align on venue (Westfields Marriott Washington Dulles) and theme: "Enabling the Naval Force: Data, Digital, and Decision Advantage."'
		}
	},
{
		id: 'radar-same-charleston-post-industry-day-2026',
		title: 'SAME Charleston Post 2026 Industry Day + Golf Tournament',
		description: 'Two-day SAME Charleston event combining a golf tournament, harbor reception, and a full Industry Day centered on USACE/NAVFAC/USCG/Joint Base Charleston project and contracting dialogue.',
		startDate: '2026-03-18',
		endDate: '2026-03-19',
		branch: 'USACE',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'Charleston',
			state: 'SC',
			country: 'USA',
			lat: 32.7884363,
			lng: -79.9399309,
			venue: 'Charleston Marriott'
		},
		ontology: 
		{
			themes: ['USACE and partner acquisition visibility', 'A/E/C teaming and networking', 'Regional infrastructure pipeline awareness'],
			capabilityAreas: ['Federal construction', 'Contracting strategy', 'Program and project delivery'],
			missionThreads: ['District-level opportunity mapping', 'Small-business alignment', 'Post-event capture planning'],
			stakeholders: ['USACE Charleston', 'USACE Savannah', 'USACE Wilmington', 'NAVFAC Southeast', 'U.S. Coast Guard', 'Joint Base Charleston'],
			keywords: ['same', 'charleston', 'industry day', 'usace', 'navfac', 'coast guard', 'joint base charleston'],
			relatedPrograms: ['Radar expansion', 'Opportunity intelligence'],
			decisionWindows: 
			{
				discovery: 'Now to T-14 days',
				prep: 'T-10 to T-1 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'SAME event page (official)',
				url: 'https://www.same.org/event/same-charleston-post-2026-industry-day-golf-tournament-2/',
				type: 'official',
				lastVerified: '2026-02-26',
				confidence: 'High'
			},
			{
				name: 'SAME Charleston events page',
				url: 'https://www.same.org/charleston/events/',
				type: 'official',
				lastVerified: '2026-02-26',
				confidence: 'High'
			},
			{
				name: '2026 Industry Day agenda PDF',
				url: 'https://www.same.org/wp-content/uploads/2026/02/2026-Industry-Day-AGENDA-_02092026.pdf',
				type: 'official',
				lastVerified: '2026-02-26',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.same.org/event/same-charleston-post-2026-industry-day-golf-tournament-2/',
				registration: 'https://www.zeffy.com/en-US/ticketing/same-charleston-post-2026-industry-day-golf-tournament',
				agenda: 'https://www.same.org/wp-content/uploads/2026/02/2026-Industry-Day-AGENDA-_02092026.pdf'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 0,
					max: 1200
				},
				travelBurdenFromDc: 'Medium'
			},
			acquisition:
			{
				engagementKinds: ['Industry Day', 'Special Notice', 'Sources Sought', 'Pre-solicitation'],
				noticeType: 'USACE-centric outreach with supporting regional infrastructure and base-support solicitations',
				agency: 'USACE Charleston and regional USACE districts, with related Joint Base Charleston activity',
				responseDueDate: '2026-03-19T09:00:00-04:00',
				samIntelligence:
				{
					collectedAt: '2026-02-26',
					postedFrom: '01/01/2026',
					postedTo: '02/26/2026',
					noticeTypes: ['p', 'r', 's', 'o', 'k'],
					totalMatched: 12,
					typeCounts:
					{
						'Special Notice': 10,
						Solicitation: 2
					},
					topNotices: [
					{
						noticeId: '35cfc764e5194217ab1842c04d3bf0ca',
						title: 'USACE Charleston District - SAME Charleston Post Industry Day',
						noticeType: 'Special Notice',
						postedDate: '2026-01-28',
						responseDueDate: '2026-03-19T09:00:00-04:00',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.US ARMY CORPS OF ENGINEERS.ENGINEER DIVISION SOUTH ATLANTIC.ENDIST CHARLESTON.W074 ENDIST CHARLESTON',
						uiLink: 'https://sam.gov/workspace/contract/opp/35cfc764e5194217ab1842c04d3bf0ca/view'
					},
					{
						noticeId: '30f377a70b804d1ca2781d50f4ea05a9',
						title: 'Virtual Industry Day Notice for construction projects for Fort Gillem, in Forest Park GA',
						noticeType: 'Special Notice',
						postedDate: '2026-02-17',
						responseDueDate: '2026-02-28T23:45:00-05:00',
						solicitationNumber: 'W912HNA037493',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.US ARMY CORPS OF ENGINEERS.ENGINEER DIVISION SOUTH ATLANTIC.ENDIST SAVANNAH.W074 ENDIST SAVANNAH',
						naicsCode: '236220',
						classificationCode: 'Y1DB',
						uiLink: 'https://sam.gov/workspace/contract/opp/30f377a70b804d1ca2781d50f4ea05a9/view'
					},
					{
						noticeId: 'fb029585ed37402d95675df1084cc58c',
						title: '2026 Joint Base Charleston Air Show Sound Equipment',
						noticeType: 'Solicitation',
						postedDate: '2026-02-26',
						responseDueDate: '2026-03-06T14:00:00-05:00',
						solicitationNumber: 'FA441826Q0014',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE.AIR MOBILITY COMMAND.FA4418  628 CONS PK',
						naicsCode: '532490',
						classificationCode: 'W099',
						uiLink: 'https://sam.gov/workspace/contract/opp/fb029585ed37402d95675df1084cc58c/view'
					},
					{
						noticeId: '275f02a29a044f36b7cf7481e9fc2c29',
						title: 'Joint Base Charleston 2026 Air Show - Tables, Chairs, & Tents',
						noticeType: 'Solicitation',
						postedDate: '2026-02-24',
						responseDueDate: '2026-03-05T16:00:00-05:00',
						solicitationNumber: 'FA441826Q0010',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE.AIR MOBILITY COMMAND.FA4418  628 CONS PK',
						naicsCode: '532289',
						classificationCode: 'W099',
						uiLink: 'https://sam.gov/workspace/contract/opp/275f02a29a044f36b7cf7481e9fc2c29/view'
					},
					{
						noticeId: '48dec4e05dd347ff97d2b0eada5b95e0',
						title: 'USACE New Orleans Industry Day 2026',
						noticeType: 'Special Notice',
						postedDate: '2026-01-14',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.US ARMY CORPS OF ENGINEERS.ENGINEER DIVISION MISSISSIPPI VALLEY.ENDIST NEW ORLEANS.W07V ENDIST NEW ORLEANS',
						uiLink: 'https://sam.gov/workspace/contract/opp/48dec4e05dd347ff97d2b0eada5b95e0/view'
					},
					{
						noticeId: '7206c6169d9c469dac621139764df65a',
						title: 'Virtual Industry Day: ERCIP Lake City Army Ammunition Plant Microgrid and Combined Heat and Power',
						noticeType: 'Special Notice',
						postedDate: '2026-02-26',
						responseDueDate: '2026-03-05T10:00:00-05:00',
						solicitationNumber: 'W912QR26RA041',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.US ARMY CORPS OF ENGINEERS.ENGINEER DIVISION GREAT LAKES AND OHIO.ENDIST LOUISVILLE.W072 ENDIST LOUISVILLE',
						naicsCode: '237130',
						classificationCode: 'Y1NZ',
						uiLink: 'https://sam.gov/workspace/contract/opp/7206c6169d9c469dac621139764df65a/view'
					}
					]
				}
			},
			notes: 'Official SAME pages confirm a March 18-19, 2026 two-day format at Charleston Marriott with golf, harbor reception, and Industry Day sessions. Published agenda lists USACE Charleston/Savannah/Wilmington, NAVFAC Southeast, US Coast Guard, and Joint Base Charleston speakers with registration and hotel block links live.'
		}
	},
{
		id: 'radar-satshow-satellite-2026',
		title: 'SATShow Week 2026 (SATELLITE + GovMilSpace)',
		description: 'Flagship satellite and space-communications week combining SATELLITE and GovMilSpace, with strong commercial, government, and military participation in Washington, DC.',
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
			lat: 38.9050,
			lng: -77.0230,
			venue: 'Walter E. Washington Convention Center'
		},
		ontology: 
		{
			themes: ['Satellite and space communications market intelligence', 'Government-military space collaboration', 'Space-domain capability scouting'],
			capabilityAreas: ['Satcom architectures', 'Space domain awareness', 'Mission communications resilience'],
			missionThreads: ['Gov-industry space integration', 'Technology scouting', 'Partnership and capture shaping'],
			stakeholders: ['SATELLITE organizers', 'GovMilSpace leaders', 'U.S. Space Force stakeholders', 'DoD space acquisition teams', 'Commercial satcom operators'],
			keywords: ['satshow', 'satellite', 'govmilspace', 'satcom', 'space domain awareness', 'space force'],
			relatedPrograms: ['Radar expansion', 'Opportunity intelligence'],
			decisionWindows: 
			{
				discovery: 'Now to T-10 days',
				prep: 'T-10 to T-1 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'SATShow Week official site',
				url: 'https://www.satshow.com/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'SATShow registration page',
				url: 'https://www.satshow.com/register/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'SATELLITE + GovMilSpace agenda expansion release',
				url: 'https://www.satshow.com/satellite-and-govmilspace-announce-expanded-conference-agenda-designed-to-bolster-the-satellite-and-space-industry-at-satshow-week-2026/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'GovMilSpace program page',
				url: 'https://www.satshow.com/govmilspace/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.satshow.com/',
				registration: 'https://www.satshow.com/register/',
				agenda: 'https://www.satshow.com/satellite-and-govmilspace-announce-expanded-conference-agenda-designed-to-bolster-the-satellite-and-space-industry-at-satshow-week-2026/',
				exhibitors: 'https://www.satshow.com/exhibit-sponsor/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 299,
					max: 3199
				},
				travelBurdenFromDc: 'Low'
			},
			acquisition:
			{
				engagementKinds: ['Special Notice', 'Sources Sought', 'Pre-solicitation', 'Vendor Outreach'],
				noticeType: 'Space domain awareness and satellite mission-support opportunities tied to DoD/USSF demand signals',
				agency: 'U.S. Space Force / DoD space acquisition organizations',
				solicitationNumber: 'FA2518-25-S-C001',
				responseDueDate: '2026-03-20T17:00:00-07:00',
				samIntelligence:
				{
					collectedAt: '2026-02-27',
					postedFrom: '01/01/2026',
					postedTo: '02/27/2026',
					noticeTypes: ['p', 'r', 's', 'o', 'k'],
					totalMatched: 5,
					typeCounts:
					{
						'Combined Synopsis/Solicitation': 1,
						'Special Notice': 3,
						'Sources Sought': 1
					},
					topNotices: [
					{
						noticeId: 'c2b581d2f96b4930ab4558fa04cf5daa',
						title: 'Commercial Solutions Opening (CSO) for Space Domain Awareness (SDA) Solutions.',
						noticeType: 'Combined Synopsis/Solicitation',
						postedDate: '2026-02-25',
						responseDueDate: '2030-01-23T12:00:00-07:00',
						solicitationNumber: 'FA2518-25-S-C001',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE.AIR FORCE SPACE COMMAND.FA2518 USSF SPOC/SAIO',
						naicsCode: '541715',
						classificationCode: 'AR12',
						uiLink: 'https://sam.gov/workspace/contract/opp/c2b581d2f96b4930ab4558fa04cf5daa/view'
					},
					{
						noticeId: 'd2d77b78d00941b9a19f34bb41c6b1db',
						title: 'Kill-web Operations Sustainment & Maintenance Of SDA (Space Domain Awareness) Systems (KOSMOSS)',
						noticeType: 'Special Notice',
						postedDate: '2026-02-06',
						solicitationNumber: 'SSC_BMC3I_SpOC_MD2_2STS_KOSMOSS_02062026Update',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE.AIR FORCE SPACE COMMAND.SPACE AND MISSILE CENTER.SPACE SYSTEMS2.FA8820  SUSTAINMENT SDACP SSC/PKL',
						naicsCode: '541330',
						uiLink: 'https://sam.gov/workspace/contract/opp/d2d77b78d00941b9a19f34bb41c6b1db/view'
					},
					{
						noticeId: '13dadac815274062b002c1f90d36cd89',
						title: 'Commercial Space Domain Awareness (SDA), Sensors as a Service',
						noticeType: 'Special Notice',
						postedDate: '2026-02-06',
						solicitationNumber: 'FA882025R0001_SDA_SensorsAsAService_02062026Update',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE.AIR FORCE SPACE COMMAND.SPACE AND MISSILE CENTER.SPACE SYSTEMS2.FA8820  SUSTAINMENT SDACP SSC/PKL',
						naicsCode: '541715',
						classificationCode: '5840',
						uiLink: 'https://sam.gov/workspace/contract/opp/13dadac815274062b002c1f90d36cd89/view'
					},
					{
						noticeId: '0a1e81c4bb3b4931b9e1a1979dbbcbdf',
						title: 'Space Domain Awareness (SDA) Novel Innovation Pipeline for Enhanced Resilience (SNIPER)',
						noticeType: 'Special Notice',
						postedDate: '2026-02-06',
						solicitationNumber: 'SSC_BMC3I_SpOC_MD2_2STS_SNIPER_020626Update',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE.AIR FORCE SPACE COMMAND.SPACE AND MISSILE CENTER.SPACE SYSTEMS2.FA8820  SUSTAINMENT SDACP SSC/PKL',
						naicsCode: '541330',
						uiLink: 'https://sam.gov/workspace/contract/opp/0a1e81c4bb3b4931b9e1a1979dbbcbdf/view'
					},
					{
						noticeId: 'bad8794abf484b5bbc03c3b09a3d7ce9',
						title: 'Space Domain Awareness (SDA) Request for Information (RFI)',
						noticeType: 'Sources Sought',
						postedDate: '2026-02-19',
						responseDueDate: '2026-03-20T17:00:00-07:00',
						solicitationNumber: 'SSCIA-26-FMS01',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE.FA8802 INTEGRATION OPERATION PIKPKE',
						uiLink: 'https://sam.gov/workspace/contract/opp/bad8794abf484b5bbc03c3b09a3d7ce9/view'
					}
					]
				}
			},
			notes: 'Official SATShow sources confirm March 23-26, 2026 at the Walter E. Washington Convention Center, with SATELLITE and GovMilSpace unified under one pass structure. Published event material emphasizes 15,000+ attendees, 450+ exhibitors, expanded government/military programming, and dedicated engineering tech seminars.'
		}
	},
{
		id: 'radar-qsecdef-world-symposium',
		title: 'QSECDEF World Symposium 2026',
		description: 'Inaugural half-day symposium on quantum-secure communications and critical-infrastructure resilience in the quantum-AI era, hosted alongside Quantum Networks Summit Paris.',
		startDate: '2026-03-24',
		endDate: '2026-03-24',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'High',
		location: 
		{
			city: 'Paris',
			country: 'France',
			lat: 48.8806,
			lng: 2.2817,
			venue: 'Palais des Congrès de Paris (Level 3, Auditorium Havana)'
		},
		ontology: 
		{
			themes: ['Quantum-safe communications', 'Critical infrastructure resilience', 'International quantum-security collaboration'],
			capabilityAreas: ['Post-quantum cryptography', 'Secure communications architecture', 'Quantum policy and standards'],
			missionThreads: ['Quantum transition planning', 'Cross-border interoperability', 'Defense-tech partnership development'],
			stakeholders: ['QSECDEF', 'Government policy teams', 'Defense and intelligence stakeholders', 'Telecom and enterprise security leaders'],
			keywords: ['qsecdef', 'quantum security defence', 'post-quantum cryptography', 'quantum secure communications', 'palais des congres'],
			relatedPrograms: ['Radar expansion', 'Opportunity intelligence'],
			decisionWindows: 
			{
				discovery: 'Now to T-14 days',
				prep: 'T-10 to T-1 days',
				execution: 'Event day + 14-day follow-up'
			},
			provenance: [
			{
				name: 'QSECDEF event site',
				url: 'https://www.quantumdefenceevent.com/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'QSECDEF events page',
				url: 'https://www.quantumsecuritydefence.com/events',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'Paris Quantum Tech event page',
				url: 'https://www.quantumsecuritydefence.com/events/paris-quantum-tech',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'Upperside conference program page',
				url: 'https://www.uppersideconferences.com/Quantum_Security_Defence/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.quantumdefenceevent.com/',
				registration: 'https://www.quantumsecuritydefence.com/events/paris-quantum-tech',
				agenda: 'https://www.uppersideconferences.com/Quantum_Security_Defence/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 149,
					max: 4200
				},
				travelBurdenFromDc: 'High'
			},
			notes: 'Official material describes a half-day inaugural symposium on 24 March 2026 in Paris focused on strategic security in the quantum-AI age, with QSECDEF sessions preceding the Quantum Networks Summit on 25-26 March.'
		}
	},
{
		id: 'radar-robins-requirements-symposium',
		title: '2026 Robins Requirements Symposium',
		description: 'One-day Robins AFB and NDIA Central Georgia symposium focused on portfolio priorities and acquisition forecasts across AFLCMC, AFSC, and related Robins mission organizations.',
		startDate: '2026-03-26',
		endDate: '2026-03-26',
		branch: 'Air Force / Space Force',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'Warner Robins',
			state: 'GA',
			country: 'USA',
			lat: 32.6200973,
			lng: -83.606568,
			venue: 'Museum of Aviation, Century of Flight Hangar'
		},
		ontology: 
		{
			themes: ['Air Force sustainment opportunity forecasting', 'Depot and lifecycle modernization visibility', 'Industry-government alignment at Robins AFB'],
			capabilityAreas: ['Sustainment acquisition', 'Program lifecycle management', 'Maintenance and modernization support'],
			missionThreads: ['AFLCMC/AFSC portfolio signaling', 'Robins AFB requirement shaping', 'Large/small business engagement'],
			stakeholders: ['Robins AFB', 'AFLCMC', 'AFSC', 'NDIA Central Georgia Chapter', 'DoD industry partners'],
			keywords: ['robins requirements symposium', 'robins afb', 'aflcmc', 'afsc', 'warner robins', 'ndia central georgia'],
			relatedPrograms: ['Radar expansion', 'Opportunity intelligence'],
			decisionWindows: 
			{
				discovery: 'Now to T-14 days',
				prep: 'T-10 to T-1 days',
				execution: 'Event day + 14-day follow-up'
			},
			provenance: [
			{
				name: 'SAM special notice: 2026 Robins Requirements Symposium',
				url: 'https://sam.gov/workspace/contract/opp/8cd6858ac8cc48bab19e7ffecb226610/view',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'Middle Georgia Innovation Corridor event page',
				url: 'https://middlegeorgiainnovates.com/event/robins-requirements-symposium/',
				type: 'community',
				lastVerified: '2026-02-27',
				confidence: 'Medium'
			},
			{
				name: 'NDIA Central Georgia chapter site',
				url: 'https://ndiacg.com/',
				type: 'community',
				lastVerified: '2026-02-27',
				confidence: 'Medium'
			}],
			links: 
			{
				official: 'https://sam.gov/workspace/contract/opp/8cd6858ac8cc48bab19e7ffecb226610/view',
				registration: 'https://sam.gov/workspace/contract/opp/8cd6858ac8cc48bab19e7ffecb226610/view',
				agenda: 'https://sam.gov/api/prod/opps/v3/opportunities/resources/files/fb9bd959ec544760aa23e32ffbcf6232/download'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 0,
					max: 500
				},
				travelBurdenFromDc: 'Medium'
			},
			acquisition:
			{
				engagementKinds: ['Industry Day', 'Special Notice', 'Sources Sought', 'Pre-solicitation'],
				noticeType: 'Robins AFB portfolio forecasts plus near-term sustainment and infrastructure notices across AFLCMC/AFSC and related commands',
				agency: 'Department of the Air Force (Robins AFB, AFLCMC, AFSC)',
				solicitationNumber: '2026_Robins_Requirements_Symposium',
				samIntelligence:
				{
					collectedAt: '2026-02-27',
					postedFrom: '03/01/2025',
					postedTo: '02/27/2026',
					noticeTypes: ['p', 'r', 's', 'o', 'k'],
					totalMatched: 5,
					typeCounts:
					{
						'Sources Sought': 2,
						'Combined Synopsis/Solicitation': 2,
						'Special Notice': 1
					},
					topNotices: [
					{
						noticeId: '8cd6858ac8cc48bab19e7ffecb226610',
						title: '2026 Robins Requirements Symposium -26 March 2026',
						noticeType: 'Special Notice',
						postedDate: '2026-02-04',
						solicitationNumber: '2026_Robins_Requirements_Symposium',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE',
						uiLink: 'https://sam.gov/workspace/contract/opp/8cd6858ac8cc48bab19e7ffecb226610/view'
					},
					{
						noticeId: '8318eedaeba54cfa80a5609bc5d87767',
						title: 'Utility Energy Service Contract (UESC), Warner Robins-Air Logistics Complex, Robins AFB, Georgia',
						noticeType: 'Sources Sought',
						postedDate: '2026-02-26',
						responseDueDate: '2026-03-10T15:00:00-04:00',
						solicitationNumber: 'SP0604-26-R-0408',
						agencyPath: 'DEPT OF DEFENSE.DEFENSE LOGISTICS AGENCY.DLA ENERGY.DLA ENERGY',
						naicsCode: '221122',
						classificationCode: 'S112',
						uiLink: 'https://sam.gov/workspace/contract/opp/8318eedaeba54cfa80a5609bc5d87767/view'
					},
					{
						noticeId: 'd6a8c13fe4d14955a2bac72b87854aef',
						title: 'BAF 78384 PSC & PWI Cage Material Robins AFB',
						noticeType: 'Combined Synopsis/Solicitation',
						postedDate: '2026-02-26',
						responseDueDate: '2026-03-11T15:00:00-04:00',
						solicitationNumber: 'FA857126Q3000',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE.AIR FORCE MATERIEL COMMAND.AIR FORCE SUSTAINMENT CENTER.FA8571  MAINT CONTRACTING AFSC PZIM',
						naicsCode: '332618',
						classificationCode: '5340',
						uiLink: 'https://sam.gov/workspace/contract/opp/d6a8c13fe4d14955a2bac72b87854aef/view'
					},
					{
						noticeId: 'cf95bfc336f449e1b3ff198f9b4c2905',
						title: 'RSAF F-15 Classified Repair and Return Services (Robins AFB)',
						noticeType: 'Sources Sought',
						postedDate: '2026-02-23',
						responseDueDate: '2026-03-03T16:00:00-05:00',
						solicitationNumber: 'FA8575-26-RSAFCRSS',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE.AIR FORCE MATERIEL COMMAND.AIR FORCE LIFE CYCLE MANAGEMENT CENTER.FIGHTER AND ADVANCED AIRCRAFT.FA8575  AFLCMC WAQKA',
						naicsCode: '488190',
						classificationCode: 'R706',
						uiLink: 'https://sam.gov/workspace/contract/opp/cf95bfc336f449e1b3ff198f9b4c2905/view'
					},
					{
						noticeId: 'b89dd560eb484309b3e8004f01036a5a',
						title: 'Robins AFB Overhead Door B319',
						noticeType: 'Combined Synopsis/Solicitation',
						postedDate: '2026-02-26',
						responseDueDate: '2026-02-27T12:00:00-05:00',
						solicitationNumber: 'FA850126Q0011',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE.AIR FORCE MATERIEL COMMAND.AIR FORCE SUSTAINMENT CENTER.FA8501  OPL CONTRACTING AFSC/PZIO',
						naicsCode: '332321',
						classificationCode: '5670',
						uiLink: 'https://sam.gov/workspace/contract/opp/b89dd560eb484309b3e8004f01036a5a/view'
					}
					]
				}
			},
			notes: 'SAM notice confirms the 26 March 2026 symposium at Museum of Aviation (Century of Flight Hangar) with Robins AFB + NDIA Central Georgia co-hosting; latest notice text indicates conference package/registration was pending approval as of 4 February 2026 and references updated draft agenda attachments.'
		}
	},
{
		id: 'radar-defense-manufacturing-conference-2026',
		title: 'Defense Manufacturing Conference (DMC) 2025/2026',
		description: 'Joint Defense Manufacturing Technology Panel forum for defense manufacturing priorities, policy, and innovation, rescheduled into spring 2026 after the 2025 federal shutdown window.',
		startDate: '2026-03-30',
		endDate: '2026-04-02',
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
			lat: 28.3600587,
			lng: -81.4934624,
			venue: 'Caribe Royale Orlando'
		},
		ontology: 
		{
			themes: ['Defense industrial-base modernization', 'Manufacturing innovation adoption', 'Government-industry production alignment'],
			capabilityAreas: ['Advanced manufacturing', 'Digital manufacturing', 'Production-readiness scaling'],
			missionThreads: ['DoD manufacturing policy awareness', 'Technology transition to programs', 'Industrial partner positioning'],
			stakeholders: ['Joint Defense Manufacturing Technology Panel (JDMTP)', 'ARCTOS', 'DoD manufacturing leaders', 'Industry and academia partners'],
			keywords: ['dmc', 'defense manufacturing conference', 'jdmtp', 'arctos', 'additive manufacturing', 'industrial base'],
			relatedPrograms: ['Radar expansion', 'Opportunity intelligence'],
			decisionWindows: 
			{
				discovery: 'Now to T-14 days',
				prep: 'T-10 to T-1 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'DMC official site',
				url: 'https://www.dmcmeeting.com/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'DMC attend/registration details',
				url: 'https://www.dmcmeeting.com/pages/attend.html',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'Manufacturing USA event listing',
				url: 'https://www.manufacturingusa.com/events/defense-manufacturing-conference',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.dmcmeeting.com/',
				registration: 'https://www.dmcmeeting.com/pages/attend.html',
				hotelBlock: 'https://www.dmcmeeting.com/pages/hotel.html'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 495,
					max: 995
				},
				travelBurdenFromDc: 'Medium'
			},
			acquisition:
			{
				engagementKinds: ['Special Notice', 'Sources Sought', 'Pre-solicitation', 'Vendor Outreach'],
				noticeType: 'Defense manufacturing and additive-manufacturing demand signals from Navy/DoD acquisition lanes',
				agency: 'DoD / DLA / Navy NAVSEA',
				solicitationNumber: 'SPE4AX26RAMP1',
				responseDueDate: '2026-03-05T16:00:00-05:00',
				samIntelligence:
				{
					collectedAt: '2026-02-27',
					postedFrom: '01/01/2026',
					postedTo: '02/27/2026',
					noticeTypes: ['p', 'r', 's', 'o', 'k'],
					totalMatched: 2,
					typeCounts:
					{
						'Combined Synopsis/Solicitation': 1,
						'Special Notice': 1
					},
					topNotices: [
					{
						noticeId: '12fb7a4ad9404543bc055fbf2080510d',
						title: 'AMENDED Combined Synopsis/Solicitation for NAVAIR Additive Manufacturing Capability',
						noticeType: 'Combined Synopsis/Solicitation',
						postedDate: '2026-02-19',
						responseDueDate: '2026-03-03T23:59:00-05:00',
						solicitationNumber: 'SPE4AX26RAMP1',
						agencyPath: 'DEPT OF DEFENSE.DEFENSE LOGISTICS AGENCY.DLA AVIATION.DLA AV RICHMOND.DLA AVIATION',
						naicsCode: '333248',
						classificationCode: '9999',
						uiLink: 'https://sam.gov/workspace/contract/opp/12fb7a4ad9404543bc055fbf2080510d/view'
					},
					{
						noticeId: 'ae049989963c4243b97dd82f81ab4833',
						title: 'MIL-PRF-XX758, Powder Feedstock, Copper-Nickel (70-30), for Use in Laser Powder Bed Fusion, Additive Manufacturing',
						noticeType: 'Special Notice',
						postedDate: '2026-02-05',
						responseDueDate: '2026-03-05T16:00:00-05:00',
						solicitationNumber: 'N0002426SN-28',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.NAVSEA.NAVSEA HQ',
						naicsCode: '336611',
						classificationCode: '9999',
						uiLink: 'https://sam.gov/workspace/contract/opp/ae049989963c4243b97dd82f81ab4833/view'
					}
					]
				}
			},
			notes: 'Official DMC sources confirm March 30-April 2, 2026 at Caribe Royale Orlando, with 2025 registrations and sponsorships carried over after federal shutdown delays. Public registration info lists industry/government/day-pass rates and ITAR/DD2345 participation controls.'
		}
	},
{
		id: 'radar-chicago-district-usace-industry-outreach-open-house',
		title: 'USACE Chicago Industry Open House 2026',
		description: 'Annual Chicago District industry outreach event for businesses to engage leadership, acquisition teams, and program stakeholders on upcoming projects and contracting opportunities.',
		startDate: '2026-04-01',
		endDate: '2026-04-01',
		branch: 'USACE',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'Chicago',
			state: 'IL',
			country: 'USA',
			lat: 41.8786,
			lng: -87.6322,
			venue: 'USACE Chicago District Headquarters (231 South LaSalle Street, Basement Level)'
		},
		ontology: 
		{
			themes: ['USACE district contracting visibility', 'Small-business outreach', 'Great Lakes infrastructure opportunity mapping'],
			capabilityAreas: ['Civil works acquisition', 'Construction and rehabilitation', 'District program engagement'],
			missionThreads: ['Industry capability alignment', 'Pre-solicitation relationship building', 'USACE pipeline awareness'],
			stakeholders: ['USACE Chicago District', 'District leadership', 'Program and acquisition personnel', 'Industry partners'],
			keywords: ['usace chicago', 'industry open house', 'district outreach', 'small business', 'w912p6'],
			relatedPrograms: ['Radar expansion', 'Opportunity intelligence'],
			decisionWindows: 
			{
				discovery: 'Now to T-7 days',
				prep: 'T-7 to T-1 days',
				execution: 'Event day + 14-day follow-up'
			},
			provenance: [
			{
				name: 'SAM special notice: USACE Chicago Industry Open House',
				url: 'https://sam.gov/workspace/contract/opp/bad041f46b4c44df889d99a2ece67e8e/view',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'WISPRO community event listing',
				url: 'https://www.wispro.org/event/chicago-district-corps-of-engineers-open-house-chicago-il/',
				type: 'community',
				lastVerified: '2026-02-27',
				confidence: 'Medium'
			}],
			links: 
			{
				official: 'https://sam.gov/workspace/contract/opp/bad041f46b4c44df889d99a2ece67e8e/view',
				registration: 'https://sam.gov/workspace/contract/opp/bad041f46b4c44df889d99a2ece67e8e/view'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 0,
					max: 300
				},
				travelBurdenFromDc: 'Medium'
			},
			acquisition:
			{
				engagementKinds: ['Industry Day', 'Special Notice', 'Sources Sought', 'Pre-solicitation'],
				noticeType: 'District outreach plus near-term Chicago District project solicitations',
				agency: 'USACE Chicago District (Great Lakes and Ohio Division)',
				solicitationNumber: 'OSBP2601',
				responseDueDate: '2026-03-31T23:45:00-04:00',
				samIntelligence:
				{
					collectedAt: '2026-02-27',
					postedFrom: '01/01/2026',
					postedTo: '02/27/2026',
					noticeTypes: ['p', 'r', 's', 'o', 'k'],
					totalMatched: 2,
					typeCounts:
					{
						'Special Notice': 1,
						Solicitation: 1
					},
					topNotices: [
					{
						noticeId: 'bad041f46b4c44df889d99a2ece67e8e',
						title: 'USACE Chicago Industry Open House',
						noticeType: 'Special Notice',
						postedDate: '2026-02-20',
						responseDueDate: '2026-03-31T23:45:00-04:00',
						solicitationNumber: 'OSBP2601',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.US ARMY CORPS OF ENGINEERS.ENGINEER DIVISION GREAT LAKES AND OHIO.ENDIST CHICAGO.W072 ENDIST CHICAGO',
						uiLink: 'https://sam.gov/workspace/contract/opp/bad041f46b4c44df889d99a2ece67e8e/view'
					},
					{
						noticeId: '04f158e4ad8b4ca888ca8326cdbbecda',
						title: 'W912P626BA003 Chesterton Interceptor Rehab',
						noticeType: 'Solicitation',
						postedDate: '2026-02-09',
						responseDueDate: '2026-03-04T14:00:00-06:00',
						solicitationNumber: 'W912P626BA003',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.US ARMY CORPS OF ENGINEERS.ENGINEER DIVISION GREAT LAKES AND OHIO.ENDIST CHICAGO.W072 ENDIST CHICAGO',
						naicsCode: '237990',
						classificationCode: 'Y1NZ',
						uiLink: 'https://sam.gov/workspace/contract/opp/04f158e4ad8b4ca888ca8326cdbbecda/view'
					}
					]
				}
			},
			notes: 'SAM notice confirms April 1, 2026 (9:00 AM-3:00 PM CST) in-person open house at USACE Chicago District HQ, with registration/capability statements due March 31, 2026 via LRC.SBO@usace.army.mil.'
		}
	},
{
		id: 'radar-army-aviation-mission-solutions-summit-2026-quad-a',
		title: '2026 Army Aviation Warfighting Summit (AAAA)',
		description: 'Annual AAAA summit focused on Army Aviation priorities, leadership panels, professional sessions, and industry engagement across the full aviation mission community.',
		startDate: '2026-04-15',
		endDate: '2026-04-17',
		branch: 'Army',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
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
			themes: ['Army aviation modernization awareness', 'Mission-focused government-industry dialogue', 'Aviation capability and training ecosystem alignment'],
			capabilityAreas: ['Aviation systems', 'Training and readiness', 'Lifecycle sustainment'],
			missionThreads: ['Army aviation stakeholder engagement', 'Program signal detection', 'Community-wide partnership building'],
			stakeholders: ['Army Aviation Association of America (AAAA)', 'Army Aviation leadership', 'Program executives', 'Industry solution providers'],
			keywords: ['army aviation', 'aaaa summit', 'warfighting summit', 'nashville', 'aviation mission solutions'],
			relatedPrograms: ['Radar expansion', 'Opportunity intelligence'],
			decisionWindows: 
			{
				discovery: 'Now to T-14 days',
				prep: 'T-10 to T-1 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AAAA event listing',
				url: 'https://www.quad-a.org/Public/Public/ContentAreas/Tagged-Content/AAAA-Events/2026-Army-Aviation-Mission-Solutions-Summit.aspx',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'AAAA Nashville summit page',
				url: 'https://www.quad-a.org/Public/Public/ContentAreas/Tagged-Content/Summits/2026-Nashville-Summit.aspx',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'AAAA summit registration site',
				url: 'https://s7.goeshow.com/aaaa/missionsolutions/2026/index.cfm',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'AAAA home page summit notice',
				url: 'https://quad-a.org/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.quad-a.org/Public/Public/ContentAreas/Tagged-Content/AAAA-Events/2026-Army-Aviation-Mission-Solutions-Summit.aspx',
				registration: 'https://s7.goeshow.com/aaaa/missionsolutions/2026/index.cfm'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 300,
					max: 1800
				},
				travelBurdenFromDc: 'Medium'
			},
			acquisition:
			{
				engagementKinds: ['Special Notice', 'Sources Sought', 'Pre-solicitation', 'Vendor Outreach'],
				noticeType: 'Army aviation training and capability modernization signals',
				agency: 'Department of the Army / ACC',
				solicitationNumber: 'W9113M-25-S-C006',
				responseDueDate: '2026-09-30T12:00:00-05:00',
				samIntelligence:
				{
					collectedAt: '2026-02-27',
					postedFrom: '03/01/2025',
					postedTo: '02/27/2026',
					noticeTypes: ['p', 'r', 's', 'o', 'k'],
					totalMatched: 1,
					typeCounts:
					{
						'Combined Synopsis/Solicitation': 1
					},
					topNotices: [
					{
						noticeId: '0994c5a8f33449768a41e2a96144778b',
						title: 'CSO - U.S. Army Aviation Training',
						noticeType: 'Combined Synopsis/Solicitation',
						postedDate: '2025-12-02',
						responseDueDate: '2026-09-30T12:00:00-05:00',
						solicitationNumber: 'W9113M-25-S-C006',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.AMC.ACC.ACC-CTRS.ACC RSA.W6QK ACC-RSA',
						naicsCode: '611512',
						classificationCode: 'U006',
						uiLink: 'https://sam.gov/workspace/contract/opp/0994c5a8f33449768a41e2a96144778b/view'
					}
					]
				}
			},
			notes: 'Official AAAA sources indicate the annual summit runs April 15-17, 2026 in Nashville and is framed as the principal annual gathering for the Army Aviation community.'
		}
	},
{		id: 'radar-same-fort-worth-post-industry-day-2026',
		title: 'SAME Fort Worth Post Industry Government Engagement 2026',
		description: 'Three-day SAME Fort Worth engagement including a golf kickoff, USACE/Federal partner sessions, and one-on-one networking with Fort Worth District personnel.',
		startDate: '2026-04-13',
		endDate: '2026-04-15',
		branch: 'USACE',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'Fort Worth',
			state: 'TX',
			country: 'USA',
			lat: 32.753177,
			lng: -97.3327459,
			venue: 'Will Rogers Round Up Inn / USACE Fort Worth District Federal Building'
		},
		ontology: 
		{
			themes: ['USACE district engagement', 'Federal construction pipeline visibility', 'A/E/C partner positioning'],
			capabilityAreas: ['Federal construction', 'Program delivery support', 'Small-business teaming'],
			missionThreads: ['Fort Worth District relationship building', 'Pre-RFP capture shaping', 'Post-session one-on-one follow-through'],
			stakeholders: ['USACE Fort Worth District', 'SAME Fort Worth Post', 'Regional federal partners (VA, TRWD)', 'Small and large business contractors'],
			keywords: ['same fort worth', 'industry government engagement', 'usace fort worth', 'round up inn', 'one-on-one networking'],
			relatedPrograms: ['Radar expansion', 'Opportunity intelligence'],
			decisionWindows: 
			{
				discovery: 'Now to T-14 days',
				prep: 'T-10 to T-1 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'SAME Fort Worth Post announcement (official)',
				url: 'https://samefortworth.org/2026/02/03/fort-worth-industry-government-engagement-2026/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'SAME Fort Worth Industry Day site',
				url: 'https://samefwindustryday.com/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'SAME Fort Worth ticketing page',
				url: 'https://samefwindustryday.com/buy-tickets/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'SAME Fort Worth RSS feed listing',
				url: 'https://samefortworth.org/feed/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'Medium'
			}],
			links: 
			{
				official: 'https://samefortworth.org/2026/02/03/fort-worth-industry-government-engagement-2026/',
				registration: 'https://samefwindustryday.com/buy-tickets/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 0,
					max: 900
				},
				travelBurdenFromDc: 'Medium'
			},
			acquisition:
			{
				engagementKinds: ['Industry Day', 'Sources Sought', 'Special Notice', 'Vendor Outreach'],
				noticeType: 'USACE Fort Worth district industry-engagement and event-support signals',
				agency: 'USACE Fort Worth District (SWD)',
				solicitationNumber: 'W9126G-26-N-OSBP',
				responseDueDate: '2025-08-25T22:00:00+00:00',
				samIntelligence:
				{
					collectedAt: '2026-02-27',
					postedFrom: '01/01/2025',
					postedTo: '02/27/2026',
					noticeTypes: ['r', 's'],
					totalMatched: 2,
					typeCounts:
					{
						'Sources Sought': 1,
						'Special Notice': 1
					},
					topNotices: [
					{
						noticeId: '7de205cc512c406cb46297f0e247abe1',
						title: 'Event Planning Services for Industry Day FY2026',
						noticeType: 'Sources Sought',
						postedDate: '2025-07-24',
						responseDueDate: '2025-08-25T22:00:00+00:00',
						solicitationNumber: 'W9126G-26-N-OSBP',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.USACE.SWD.W076 ENDIST FT WORTH',
						naicsCode: '561920',
						uiLink: 'https://sam.gov/workspace/contract/opp/7de205cc512c406cb46297f0e247abe1/view'
					},
					{
						noticeId: '8bf3d51104194547a4d96c4fbe778c19',
						title: 'Modified Central City and Dallas Floodway Industry Day – Fort Worth District',
						noticeType: 'Special Notice',
						postedDate: '2025-07-15',
						responseDueDate: '2025-07-09T14:00:00+00:00',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.USACE.SWD.W076 ENDIST FT WORTH',
						uiLink: 'https://sam.gov/workspace/contract/opp/8bf3d51104194547a4d96c4fbe778c19/view'
					}
					]
				}
			},
			notes: 'Official Fort Worth Post + event-site sources confirm a 3-day format (Apr 13-15, 2026): golf kickoff, full-day district/federal partner sessions at Round Up Inn, and appointment-based one-on-one sessions at the USACE Fort Worth District Federal Building; posted ticket tiers show $150 small-business, $200 large-business, and no-cost government registration.'
		}
	},

{
		id: 'radar-southeast-region-fedcon-usace-summit',
		title: 'Southeast Region Federal Construction, Infrastructure & Environment Summit 2026',
		description: 'NCMBC-led regional summit convening USACE, NAVFAC, military installations, and industry for program/requirements dialogue and federal construction networking across the Southeast.',
		startDate: '2026-04-14',
		endDate: '2026-04-16',
		branch: 'USACE',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'Wilmington',
			state: 'NC',
			country: 'USA',
			lat: 34.2352853,
			lng: -77.9487284,
			venue: 'Wilmington Convention Center, 515 Nutt Street'
		},
		ontology: 
		{
			themes: ['Southeast federal construction market access', 'USACE/NAVFAC requirement visibility', 'Regional teaming and supplier expansion'],
			capabilityAreas: ['Federal construction and infrastructure delivery', 'Environmental remediation', 'Facility support and services'],
			missionThreads: ['Program and requirements dialogue participation', 'Prime-sub supply-chain matchmaking', 'Southeast district capture planning'],
			stakeholders: ['North Carolina Military Business Center (NCMBC)', 'USACE South Atlantic Division districts', 'NAVFAC and military installations', 'General/specialty contractors and A/E firms'],
			keywords: ['southeast summit', 'ncmbc', 'federal construction', 'usace sad', 'wilmington convention center'],
			relatedPrograms: ['Radar expansion', 'Opportunity intelligence'],
			decisionWindows: 
			{
				discovery: 'Now to T-21 days',
				prep: 'T-14 to T-2 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'NCMBC official event listing',
				url: 'https://www.ncmbc.us/event/southeast-region-federal-construction-infrastructure-and-environmental-summit/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'Summit about page (official)',
				url: 'https://summit.ncmbc.us/why-attend/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'Summit registration page',
				url: 'https://summit.ncmbc.us/register/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ncmbc.us/event/southeast-region-federal-construction-infrastructure-and-environmental-summit/',
				registration: 'https://summit.ncmbc.us/register/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 0,
					max: 1700
				},
				travelBurdenFromDc: 'Medium'
			},
			acquisition:
			{
				engagementKinds: ['Industry Day', 'Special Notice', 'Solicitation', 'Vendor Outreach'],
				noticeType: 'USACE South Atlantic Division dredging and district-construction signals aligned with summit audience',
				agency: 'USACE South Atlantic Division (Wilmington/Savannah districts)',
				solicitationNumber: 'W912PM25BA007',
				responseDueDate: '2026-03-01T04:45:00+00:00',
				samIntelligence:
				{
					collectedAt: '2026-02-27',
					postedFrom: '01/01/2025',
					postedTo: '02/27/2026',
					noticeTypes: ['s', 'o'],
					totalMatched: 3,
					typeCounts:
					{
						'Special Notice': 2,
						Solicitation: 1
					},
					topNotices: [
					{
						noticeId: 'ba3389ff6ebe4e41a3bbb17d0b4d6471',
						title: 'Industry Day for FY26 South Atlantic Division (SAD) Regional Harbor Dredging Contract (RHDC)',
						noticeType: 'Special Notice',
						postedDate: '2025-03-18',
						responseDueDate: '2025-04-03T13:00:00+00:00',
						solicitationNumber: 'W912PM25BA007',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.USACE.SAD.W074 ENDIST WILMINGTON',
						naicsCode: '237990',
						uiLink: 'https://sam.gov/workspace/contract/opp/ba3389ff6ebe4e41a3bbb17d0b4d6471/view'
					},
					{
						noticeId: '99a21a4395e548fd87f20620fd643845',
						title: 'FY26 Maintenance Dredging, South Atlantic Division (SAD) Regional Harbor Dredging Contract (RHDC) Contract 1',
						noticeType: 'Solicitation',
						postedDate: '2025-07-17',
						responseDueDate: '2025-07-17T17:00:00+00:00',
						solicitationNumber: 'W912PM25BA007',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.USACE.SAD.W074 ENDIST WILMINGTON',
						naicsCode: '237990',
						uiLink: 'https://sam.gov/workspace/contract/opp/99a21a4395e548fd87f20620fd643845/view'
					},
					{
						noticeId: '30f377a70b804d1ca2781d50f4ea05a9',
						title: 'Virtual Industry Day Notice for construction projects for Fort Gillem, in Forest Park GA.',
						noticeType: 'Special Notice',
						postedDate: '2026-02-17',
						responseDueDate: '2026-03-01T04:45:00+00:00',
						solicitationNumber: 'W912HNA037493',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.USACE.SAD.W074 ENDIST SAVANNAH',
						naicsCode: '236220',
						uiLink: 'https://sam.gov/workspace/contract/opp/30f377a70b804d1ca2781d50f4ea05a9/view'
					}
					]
				}
			},
			notes: 'Official NCMBC and summit pages confirm April 14-16, 2026 in Wilmington, with 800+ participants across USACE/NAVFAC/installation stakeholders, requirement-dialogue sessions, and published registration tiers ($200 early attendee; $255 standard; free active duty/federal; exhibitor $800/$850).'
		}
	},

{
		id: 'radar-sacramento-district-usace-industry-day',
		title: 'USACE Sacramento District 2026 Business Opportunities Open House',
		description: 'USACE Sacramento District open house and small-business matchmaking touchpoint focused on upcoming district procurements and direct networking with district leadership/industry teams.',
		startDate: '2026-04-16',
		endDate: '2026-04-17',
		branch: 'USACE',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'Sacramento',
			state: 'CA',
			country: 'USA',
			lat: 38.5810606,
			lng: -121.493895,
			venue: 'Hyatt Regency Sacramento'
		},
		ontology: 
		{
			themes: ['USACE district procurement visibility', 'Small-business matchmaking', 'Civil-works and A/E capture timing'],
			capabilityAreas: ['Civil works engineering', 'Architecture-engineering services', 'Federal construction delivery'],
			missionThreads: ['District opportunity mapping', 'Prime-sub partner alignment', 'Post-open-house pursuit planning'],
			stakeholders: ['USACE Sacramento District (SPD)', 'SAME Sacramento Post', 'Small and large business contractors', 'A/E service providers'],
			keywords: ['usace sacramento', 'business opportunities open house', 'booh', 'small business matchmaking', 'hyatt regency sacramento'],
			relatedPrograms: ['Radar expansion', 'Opportunity intelligence'],
			decisionWindows: 
			{
				discovery: 'Now to T-14 days',
				prep: 'T-10 to T-1 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'SAME Sacramento homepage events listing',
				url: 'http://www.samesacramento.org/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'SAME Sacramento calendar page',
				url: 'http://www.samesacramento.org/calendar.shtml',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'SAM special notice: USACE Sacramento District 2026 BOOH',
				url: 'https://sam.gov/workspace/contract/opp/2a881e2c642d4776a1d8c3422433cc63/view',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'Eventbrite registration page',
				url: 'https://www.eventbrite.com/e/usace-sacramento-district-2026-business-opportunities-open-house-booh-tickets-1981460187761?aff=oddtdtcreator',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://sam.gov/workspace/contract/opp/2a881e2c642d4776a1d8c3422433cc63/view',
				registration: 'https://www.eventbrite.com/e/usace-sacramento-district-2026-business-opportunities-open-house-booh-tickets-1981460187761?aff=oddtdtcreator'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 0,
					max: 1200
				},
				travelBurdenFromDc: 'High'
			},
			acquisition:
			{
				engagementKinds: ['Industry Day', 'Small Business Matchmaking', 'Special Notice', 'Solicitation'],
				noticeType: 'Sacramento District BOOH signal with concurrent district A/E and civil-works procurement activity',
				agency: 'USACE Sacramento District (SPD)',
				solicitationNumber: 'SPKFY2026BOOH',
				responseDueDate: '2026-04-16T16:00:00+00:00',
				samIntelligence:
				{
					collectedAt: '2026-02-27',
					postedFrom: '01/01/2026',
					postedTo: '02/27/2026',
					noticeTypes: ['s', 'o'],
					totalMatched: 2,
					typeCounts:
					{
						'Special Notice': 1,
						Solicitation: 1
					},
					topNotices: [
					{
						noticeId: '2a881e2c642d4776a1d8c3422433cc63',
						title: 'USACE Sacramento District 2026 Business Opportunities Open House',
						noticeType: 'Special Notice',
						postedDate: '2026-01-26',
						responseDueDate: '2026-04-16T16:00:00+00:00',
						solicitationNumber: 'SPKFY2026BOOH',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.USACE.SPD.W075 ENDIST SACRAMENTO',
						uiLink: 'https://sam.gov/workspace/contract/opp/2a881e2c642d4776a1d8c3422433cc63/view'
					},
					{
						noticeId: '5abcf4cc1b6a45dab3097a7fdc2b7b9d',
						title: '$238M SPK Civil Works AE MATOC',
						noticeType: 'Solicitation',
						postedDate: '2026-02-20',
						responseDueDate: '2026-03-02T22:00:00+00:00',
						solicitationNumber: 'W9123826RA010',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.USACE.SPD.W075 ENDIST SACRAMENTO',
						naicsCode: '541330',
						uiLink: 'https://sam.gov/workspace/contract/opp/5abcf4cc1b6a45dab3097a7fdc2b7b9d/view'
					}
					]
				}
			},
			notes: 'SAME Sacramento pages list an April 16-17, 2026 USACE Business Opportunities Open House + small-business matchmaking at Hyatt Regency; SAM and Eventbrite copies align on the Apr 16 BOOH session (9:00 AM PT) and reference district forecast/procurement engagement.'
		}
	},

{
		id: 'radar-afcea-nova-innovation-it-day-2026',
		title: 'AFCEA NOVA Innovation IT Day Showcase 2026',
		description: 'AFCEA NOVA showcase focused on DoD and 4th-estate digital modernization, innovation demos, and direct government-industry exchange.',
		startDate: '2026-04-27',
		endDate: null,
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: 
		{
			city: 'Reston',
			state: 'VA',
			country: 'USA',
			lat: 38.953282,
			lng: -77.3464516,
			venue: 'Carahsoft Technology Corporation (11493 Sunset Hills Rd)'
		},
		ontology: 
		{
			themes: ['Defense IT modernization', 'Government-industry collaboration', 'Emerging technology adoption'],
			capabilityAreas: ['Cloud modernization', 'Enterprise platforms', 'Cybersecurity', 'Digital engineering'],
			missionThreads: ['4th-estate mission support', 'Acquisition shaping', 'Partner positioning'],
			stakeholders: ['AFCEA NOVA', 'DoD military branches', '4th Estate agencies', 'DISA', 'USMC Systems Command', 'NIWC Atlantic', 'AFLCMC BES'],
			keywords: ['AFCEA NOVA', 'Innovation IT Day', 'DoD IT', '4th Estate', 'cloud', 'cybersecurity'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-60 days',
				prep: 'T-45 to T-7 days',
				execution: 'Event day + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AFCEA NOVA calendar',
				url: 'https://nova.afceachapters.org/calendar',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'AFCEA NOVA Innovation IT Day event page',
				url: 'https://afceanova.swoogo.com/innovationitday2026',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'AFCEA NOVA 2025-2026 IT Day sponsorship sheet',
				url: 'https://afceanova.swoogo.com/sponsor2025-2026/itdays',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			}],
			links: {
				official: 'https://afceanova.swoogo.com/innovationitday2026',
				registration: 'https://afceanova.swoogo.com/innovationitday2026',
				eventSeries: 'https://nova.afceachapters.org/calendar'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 0,
					max: 595
				},
				travelBurdenFromDc: 'Low',
				registrationDeadline: '2026-04-27'
			},
			acquisition: 
			{
				noticeType: 'Enterprise IT and cyber modernization signals from DISA, USMC, NIWC Atlantic, and AFLCMC BES',
				agency: 'DoD enterprise IT stakeholders (DISA / USMC / Navy / Air Force)',
				solicitationNumber: '632674007',
				responseDueDate: '2026-03-06T21:00:00+00:00',
				samIntelligence:
				{
					collectedAt: '2026-02-27',
					postedFrom: '01/01/2026',
					postedTo: '02/27/2026',
					noticeTypes: ['r', 'o'],
					totalMatched: 4,
					typeCounts:
					{
						'Sources Sought': 3,
						Solicitation: 1
					},
					topNotices: [
					{
						noticeId: '72d61906e6fd4f969acca13cea3d3b11',
						title: 'Spectrum Information Systems (SIS) Helpdesk',
						noticeType: 'Sources Sought',
						postedDate: '2026-02-27',
						responseDueDate: '2026-03-06T21:00:00+00:00',
						solicitationNumber: '632674007',
						agencyPath: 'DEPT OF DEFENSE.DEFENSE INFORMATION SYSTEMS AGENCY (DISA).DEFENSE INFORMATION SYSTEMS AGENCY',
						uiLink: 'https://sam.gov/workspace/contract/opp/72d61906e6fd4f969acca13cea3d3b11/view'
					},
					{
						noticeId: '5b33422231bf40bebecdc97427922400',
						title: 'Marine Corps e-Learning Ecosystem (MCeLE) Support Services',
						noticeType: 'Sources Sought',
						postedDate: '2026-02-19',
						responseDueDate: '2026-02-27T20:00:00+00:00',
						solicitationNumber: 'M67854-26-I-4802',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.USMC.MARCOR SYSCOM.COMMANDER',
						uiLink: 'https://sam.gov/workspace/contract/opp/5b33422231bf40bebecdc97427922400/view'
					},
					{
						noticeId: '2aadca7bbdda41cfa37f51b4983fb60c',
						title: 'AOI 26-A002: Specter- Container-Native Platform for Navy Tactical and Enterprise Applications',
						noticeType: 'Solicitation',
						postedDate: '2026-01-23',
						responseDueDate: '2026-01-30T18:00:00+00:00',
						solicitationNumber: 'N6523626SC002',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.SPAWAR.SPAWAR LANT.NIWC ATLANTIC',
						uiLink: 'https://sam.gov/workspace/contract/opp/2aadca7bbdda41cfa37f51b4983fb60c/view'
					},
					{
						noticeId: '81226ff1ad31454a8da7d6f68d528780',
						title: 'GB CAS - Cloud  Assessment, Cloud Migration, Cloud Continuous Development, and Cybersecurity',
						noticeType: 'Sources Sought',
						postedDate: '2026-01-15',
						responseDueDate: '2026-01-29T22:00:00+00:00',
						solicitationNumber: 'FA8771-25-R-0017',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE.AIR FORCE MATERIEL COMMAND.AIR FORCE LIFE CYCLE MANAGEMENT CENTER.BUSINESS AND ENTERPRISE SYSTEMS.FA8771  AFLCMC GBK',
						uiLink: 'https://sam.gov/workspace/contract/opp/81226ff1ad31454a8da7d6f68d528780/view'
					}
					]
				}
			},
			notes: 'Official AFCEA NOVA sources align on Apr 27, 2026 at Carahsoft Reston; pricing ranges from free (government/military) to paid member/non-member tiers and sponsorship planning indicates ~300 prior-year attendees.'
		}
	},

{
		id: 'radar-modern-day-marine-2026',
		title: 'Modern Day Marine 2026',
		description: 'Largest Marine-focused defense technology exposition with acquisitions programming, UAS/C-UAS sessions, and direct Marine Corps stakeholder engagement.',
		startDate: '2026-04-28',
		endDate: '2026-04-30',
		branch: 'Marine Corps',
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
			lng: -77.0365427,
			venue: 'Walter E. Washington Convention Center'
		},
		ontology: 
		{
			themes: ['Marine Corps modernization', 'Operational technology transition', 'Acquisition and contracting engagement'],
			capabilityAreas: ['Unmanned systems', 'Training and simulation', 'Logistics AI', 'Enterprise IT support'],
			missionThreads: ['Program-office access', 'Industry positioning', 'Technology transition mapping'],
			stakeholders: ['US Marine Corps', 'Marine Corps Systems Command', 'NAVAIR', 'Acquisition professionals', 'Prime and non-traditional vendors'],
			keywords: ['Modern Day Marine', 'USMC', 'UAS', 'C-UAS', 'contracts industry day', 'acquisitions'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-75 days',
				prep: 'T-45 to T-7 days',
				execution: 'Event week + 21-day follow-up'
			},
			provenance: [
			{
				name: 'Modern Day Marine official site',
				url: 'https://marinemilitaryexpos.com/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'Modern Day Marine attendee information',
				url: 'https://marinemilitaryexpos.com/attendee-information-registration/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'Modern Day Marine schedule',
				url: 'https://marinemilitaryexpos.com/show-schedule-info/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			}],
			links: {
				official: 'https://marinemilitaryexpos.com/',
				registration: 'https://marinemilitaryexpos.com/attendee-information-registration/',
				schedule: 'https://marinemilitaryexpos.com/show-schedule-info/',
				showMap: 'https://mme.a2zinc.net/ModernDay2026/Public/eventmap.aspx?shAvailable=1&ID=57353'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 0,
					max: 300
				},
				travelBurdenFromDc: 'Low'
			},
			acquisition:
			{
				noticeType: 'USMC and joint modernization notices aligned to event tracks (training ecosystem, UAS/C-UAS, acquisition engagement)',
				agency: 'USMC Systems Command / NAVAIR / ACC / DoD',
				solicitationNumber: 'M67854-26-I-4802',
				responseDueDate: '2026-03-09T00:00:00+00:00',
				samIntelligence:
				{
					collectedAt: '2026-02-27',
					postedFrom: '01/01/2026',
					postedTo: '02/27/2026',
					noticeTypes: ['r', 's'],
					totalMatched: 4,
					typeCounts:
					{
						'Sources Sought': 3,
						'Special Notice': 1
					},
					topNotices: [
					{
						noticeId: '5b33422231bf40bebecdc97427922400',
						title: 'Marine Corps e-Learning Ecosystem (MCeLE) Support Services',
						noticeType: 'Sources Sought',
						postedDate: '2026-02-19',
						responseDueDate: '2026-02-27T20:00:00+00:00',
						solicitationNumber: 'M67854-26-I-4802',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.USMC.MARCOR SYSCOM.COMMANDER',
						uiLink: 'https://sam.gov/workspace/contract/opp/5b33422231bf40bebecdc97427922400/view'
					},
					{
						noticeId: 'b7c30b38c0c146959eda43eb198f7cd4',
						title: 'Request for Information (RFI) for Unmanned Aircraft Systems (UAS), Counter-UAS Systems, and Related Supplies',
						noticeType: 'Sources Sought',
						postedDate: '2026-01-29',
						responseDueDate: '2026-03-09T00:00:00+00:00',
						solicitationNumber: 'PAN411-26-P-0000027192',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.AMC.ACC.ACC-OO.411TH CSB.0411 AQ HQ     CONTRACT AUG',
						uiLink: 'https://sam.gov/workspace/contract/opp/b7c30b38c0c146959eda43eb198f7cd4/view'
					},
					{
						noticeId: 'd76cc239a31148dfbc84c17e8bbf3769',
						title: 'Small Unmanned Aircraft Systems (sUAS) for the United States Marine Corps',
						noticeType: 'Sources Sought',
						postedDate: '2026-01-13',
						responseDueDate: '2026-02-17T04:59:00+00:00',
						solicitationNumber: '243-25-157',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.NAVAIR.NAVAIR HQS.NAVAL AIR SYSTEMS COMMAND',
						uiLink: 'https://sam.gov/workspace/contract/opp/d76cc239a31148dfbc84c17e8bbf3769/view'
					},
					{
						noticeId: 'dcb4c311e9c342759c0e8b35c330572a',
						title: 'JIATF 401 C-sUAS Industry Day',
						noticeType: 'Special Notice',
						postedDate: '2026-02-12',
						responseDueDate: '2026-02-18T20:00:00+00:00',
						agencyPath: 'DEPT OF DEFENSE',
						uiLink: 'https://sam.gov/workspace/contract/opp/dcb4c311e9c342759c0e8b35c330572a/view'
					}
					]
				}
			},
			notes: 'Official show pages confirm Apr 28-30, 2026 at Walter E. Washington Convention Center with acquisitions briefings, Contracts Industry Day, and UAS/C-UAS + logistics AI programming that align with current Marine and joint requirement signals in SAM.'
		}
	},

{
		id: 'radar-dod-small-business-training-week',
		title: 'DoD Small Business Training Week 2026 (Date TBA)',
		description: 'Annual DoD OSBP training week for federal acquisition and small-business professionals; 2026 event window/location not yet publicly posted.',
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
			venue: 'TBD (DoD OSBP to publish)'
		},
		ontology: 
		{
			themes: ['Small-business policy execution', 'Acquisition workforce training', 'Defense industrial base expansion'],
			capabilityAreas: ['Federal acquisition', 'Small-business utilization', 'Mentor-Protégé program operations'],
			missionThreads: ['Policy-to-execution translation', 'Cross-component OSBP coordination', 'Industry-engagement readiness'],
			stakeholders: ['DoD Office of Small Business Programs', 'Military Department OSBPs', 'Defense Agencies', 'SBA', 'Federal acquisition workforce'],
			keywords: ['SBTW', 'DoD OSBP', 'small business', 'acquisition training', 'vanguard awards'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 14-day follow-up'
			},
			provenance: [
			{
				name: 'DoD OSBP SBTW24 announcement',
				url: 'https://business.defense.gov/Engage/News/Article/3650311/small-business-training-week-2024-announced/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'Medium'
			},
			{
				name: 'DoD OSBP SBTW24 registration notice',
				url: 'https://business.defense.gov/Engage/News/Article/3671835/small-business-training-week-registration-now-open/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'Medium'
			},
			{
				name: 'DoD OSBP SBTW24 recap',
				url: 'https://business.defense.gov/Engage/News/SBTW24/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'Medium'
			},
			{
				name: 'DVIDS DoD OSBP channel',
				url: 'https://www.dvidshub.net/unit/DoDOSBP',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'Medium'
			}],
			links: {
				official: 'https://business.defense.gov/Engage/News/SBTW24/',
				eventsCalendar: 'https://business.defense.gov/Engage/Events-Calendar/',
				registration: 'https://www.sbtw24.com/',
				publicMedia: 'https://www.dvidshub.net/unit/DoDOSBP'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 0,
					max: 1800
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: '2026-specific date/location not yet publicly posted in accessible official pages. Direct business.defense.gov fetch from this runner returned 403; official pages were verified via mirrored fetch fallback and cross-checked against DoD OSBP DVIDS channel to confirm annual continuity.'
		}
	},

{
		id: 'radar-usace-national-dredging-meeting',
		title: 'USACE National Dredging Meeting 2026 (Planned)',
		description: 'USACE-led national dredging coordination meeting; FY26 outreach matrix places this event in May 2026 in Atlanta with multi-district participation.',
		startDate: '2026-05-01',
		endDate: '2026-05-31',
		branch: 'USACE',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'Atlanta',
			state: 'GA',
			country: 'USA',
			lat: 33.7544657,
			lng: -84.3898151,
			venue: 'TBD (USACE to publish)'
		},
		ontology: 
		{
			themes: ['Navigation infrastructure sustainment', 'Civil works dredging execution', 'USACE district-market synchronization'],
			capabilityAreas: ['Maintenance dredging', 'Hydrographic support', 'Waterway operations'],
			missionThreads: ['USACE civil works delivery', 'Contract opportunity timing', 'District-level engagement planning'],
			stakeholders: ['USACE Headquarters', 'USACE South Atlantic Division', 'USACE Savannah District', 'USACE Los Angeles District', 'Dredging industry primes and subs'],
			keywords: ['USACE', 'national dredging meeting', 'navigation', 'maintenance dredging', 'civil works'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event month + 21-day follow-up'
			},
			provenance: [
			{
				name: 'USACE South Atlantic Division FY26 outreach conference matrix',
				url: 'https://www.sac.usace.army.mil/Portals/43/FY26%20USACE%20-%20SAD%20Outreach%20District%20Breakout%209_22_25.pdf',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'Medium'
			},
			{
				name: 'USACE operations conference page (CAC-restricted)',
				url: 'https://operations.erdc.dren.mil/conference.cfm?CoP=&Id=16maynat&Type=Conf',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'Medium'
			},
			{
				name: 'USACE SAM special notice baseline (2024 cycle)',
				url: 'https://sam.gov/workspace/contract/opp/05bf668f6ec54ccfa1a034811f73fa7d/view',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'Medium'
			}],
			links: {
				official: 'https://www.sac.usace.army.mil/Portals/43/FY26%20USACE%20-%20SAD%20Outreach%20District%20Breakout%209_22_25.pdf',
				conferenceAccess: 'https://operations.erdc.dren.mil/conference.cfm?CoP=&Id=16maynat&Type=Conf',
				baselineNotice: 'https://sam.gov/workspace/contract/opp/05bf668f6ec54ccfa1a034811f73fa7d/view'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 0,
					max: 1200
				},
				travelBurdenFromDc: 'Medium'
			},
			acquisition:
			{
				noticeType: 'USACE dredging procurement signals aligned to FY26 national dredging mission set',
				agency: 'USACE SAD / USACE Los Angeles District',
				solicitationNumber: 'W912PL26RA006',
				responseDueDate: '2026-02-23T21:00:00+00:00',
				samIntelligence:
				{
					collectedAt: '2026-02-27',
					postedFrom: '01/01/2026',
					postedTo: '02/27/2026',
					noticeTypes: ['o'],
					totalMatched: 2,
					typeCounts:
					{
						Solicitation: 2
					},
					topNotices: [
					{
						noticeId: '6e90fca2c984402296fd3a3c16939046',
						title: 'Oceanside Harbor Maintenance Dredging',
						noticeType: 'Solicitation',
						postedDate: '2026-02-19',
						responseDueDate: '2026-02-23T21:00:00+00:00',
						solicitationNumber: 'W912PL26RA006',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.USACE.SPD.W075 ENDIST LOS ANGELES',
						uiLink: 'https://sam.gov/workspace/contract/opp/6e90fca2c984402296fd3a3c16939046/view'
					},
					{
						noticeId: 'aee792f656944495b7fa18081eb70f10',
						title: 'FY25 Atlantic Intracoastal Waterway Maintenance Dredging - Select Sites',
						noticeType: 'Solicitation',
						postedDate: '2026-01-20',
						responseDueDate: '2026-01-14T17:00:00+00:00',
						solicitationNumber: 'W912HN26BA002',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.USACE.SAD.W074 ENDIST SAVANNAH',
						uiLink: 'https://sam.gov/workspace/contract/opp/aee792f656944495b7fa18081eb70f10/view'
					}
					]
				}
			},
			notes: 'USACE FY26 SAD outreach matrix confirms May 2026 Atlanta placement, while detailed conference page is CAC-restricted. Current SAM dredging solicitations provide live acquisition context pending release of public 2026 meeting registration details.'
		}
	},

{
		id: 'radar-huntington-district-usace-industry-outreach-open-house',
		title: 'Huntington District Industry Outreach Open House',
		description: 'USACE Huntington District outreach open house for industry engagement; official listing currently remains in save-the-date mode pending detailed agenda release.',
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
			lng: -82.445154,
			venue: 'TBD (USACE Huntington District to publish)'
		},
		ontology: 
		{
			themes: ['USACE district outreach', 'Acquisition visibility', 'Small-business engagement'],
			capabilityAreas: ['Civil works support', 'Construction services', 'Engineering and A/E services'],
			missionThreads: ['District relationship building', 'Forecast alignment', 'Follow-on procurement awareness'],
			stakeholders: ['USACE Huntington District', 'USACE Great Lakes and Ohio River Division', 'Small and large business contractors'],
			keywords: ['Huntington District', 'industry outreach', 'USACE', 'open house', 'LRH'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-60 days',
				prep: 'T-45 to T-7 days',
				execution: 'Event day + 14-day follow-up'
			},
			provenance: [
			{
				name: 'USACE LRD announcement page',
				url: 'https://www.lrd.usace.army.mil/News/Announcements/Display/Article/4328448/huntington-district-industry-outreach-open-house/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'USACE print view for announcement',
				url: 'https://www.lrd.usace.army.mil/DesktopModules/ArticleCS/Print.aspx?PortalId=73&ModuleId=151095&Article=4328448',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'Google calendar link embedded by USACE article',
				url: 'http://www.google.com/calendar/event?action=TEMPLATE&text=Huntington%20District%20Industry%20Outreach%20Open%20House&dates=20260507T000000/20260507T000000&details=Save%20the%20date%20and%20check%20back%20soon%20for%20more%20details.&trp=false&sprop=&sprop=name:',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'Medium'
			}],
			links: {
				official: 'https://www.lrd.usace.army.mil/News/Announcements/Display/Article/4328448/huntington-district-industry-outreach-open-house/',
				printView: 'https://www.lrd.usace.army.mil/DesktopModules/ArticleCS/Print.aspx?PortalId=73&ModuleId=151095&Article=4328448',
				calendar: 'http://www.google.com/calendar/event?action=TEMPLATE&text=Huntington%20District%20Industry%20Outreach%20Open%20House&dates=20260507T000000/20260507T000000&details=Save%20the%20date%20and%20check%20back%20soon%20for%20more%20details.&trp=false&sprop=&sprop=name:'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 0,
					max: 500
				},
				travelBurdenFromDc: 'Medium'
			},
			notes: 'Official USACE listing currently provides date-only save-the-date language with no agenda/registration package yet. Direct site access from this runner returned 403; details were validated through official mirrored print payload.'
		}
	},

{
		id: 'radar-auvsi-xponential-2026',
		title: 'AUVSI XPONENTIAL 2026',
		description: 'Global autonomy and uncrewed-systems conference in Detroit with MDEX co-location and dedicated defense autonomy programming.',
		startDate: '2026-05-11',
		endDate: '2026-05-14',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Medium',
		location: 
		{
			city: 'Detroit',
			state: 'MI',
			country: 'USA',
			lat: 42.3315509,
			lng: -83.0466403,
			venue: 'Huntington Place Convention Center'
		},
		ontology: 
		{
			themes: ['Autonomy at operational scale', 'Defense-industrial integration', 'Government-industry technical exchange'],
			capabilityAreas: ['Unmanned systems', 'Counter-UAS', 'Robotics', 'Autonomy software and AI'],
			missionThreads: ['Defense market positioning', 'Capability mapping to mission buyers', 'Partnership and teaming'],
			stakeholders: ['AUVSI', 'DoD acquisition organizations', 'USAREUR-AF', 'US Army contracting commands', 'USMC/NAVAIR'],
			keywords: ['XPONENTIAL', 'AUVSI', 'uncrewed systems', 'autonomy', 'MDEX', 'defense technology zone'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event week + 21-day follow-up'
			},
			provenance: [
			{
				name: 'XPONENTIAL official site',
				url: 'https://xponential.org/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'XPONENTIAL schedule-at-a-glance',
				url: 'https://xponential.org/sag.cfm',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			},
			{
				name: 'AUVSI official event listing',
				url: 'https://www.auvsi.org/event/xponential-2026/',
				type: 'official',
				lastVerified: '2026-02-27',
				confidence: 'High'
			}],
			links: {
				official: 'https://xponential.org/',
				agenda: 'https://xponential.org/sag.cfm',
				registration: 'https://xponential.org/',
				auvsiEvent: 'https://www.auvsi.org/event/xponential-2026/'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 250,
					max: 2500
				},
				travelBurdenFromDc: 'Medium'
			},
			acquisition:
			{
				noticeType: 'Defense autonomy and UAS requirement signals aligned to XPONENTIAL defense programming',
				agency: 'US Army ACC / USAREUR-AF / NAVAIR',
				solicitationNumber: 'W912PB26RA008',
				responseDueDate: '2028-12-31T22:59:00+00:00',
				samIntelligence:
				{
					collectedAt: '2026-02-27',
					postedFrom: '01/01/2026',
					postedTo: '02/27/2026',
					noticeTypes: ['r', 'k'],
					totalMatched: 4,
					typeCounts:
					{
						'Sources Sought': 3,
						'Combined Synopsis/Solicitation': 1
					},
					topNotices: [
					{
						noticeId: '2b32fcbd97224f68bbd4d2649bf6c28f',
						title: 'USAREUR-AF Small Unmanned Aircraft Systems (sUAS) Blanket Purchase Agreement',
						noticeType: 'Sources Sought',
						postedDate: '2026-02-20',
						responseDueDate: '2028-12-31T22:59:00+00:00',
						solicitationNumber: 'W912PB26RA008',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.AMC.ACC.ACC-OO.409TH CSB.0409 AQ HQ     CONTRACT',
						uiLink: 'https://sam.gov/workspace/contract/opp/2b32fcbd97224f68bbd4d2649bf6c28f/view'
					},
					{
						noticeId: 'b7c30b38c0c146959eda43eb198f7cd4',
						title: 'Request for Information (RFI) for Unmanned Aircraft Systems (UAS), Counter-UAS Systems, and Related Supplies',
						noticeType: 'Sources Sought',
						postedDate: '2026-01-29',
						responseDueDate: '2026-03-09T00:00:00+00:00',
						solicitationNumber: 'PAN411-26-P-0000027192',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.AMC.ACC.ACC-OO.411TH CSB.0411 AQ HQ     CONTRACT AUG',
						uiLink: 'https://sam.gov/workspace/contract/opp/b7c30b38c0c146959eda43eb198f7cd4/view'
					},
					{
						noticeId: 'd76cc239a31148dfbc84c17e8bbf3769',
						title: 'Small Unmanned Aircraft Systems (sUAS) for the United States Marine Corps',
						noticeType: 'Sources Sought',
						postedDate: '2026-01-13',
						responseDueDate: '2026-02-17T04:59:00+00:00',
						solicitationNumber: '243-25-157',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE NAVY.NAVAIR.NAVAIR HQS.NAVAL AIR SYSTEMS COMMAND',
						uiLink: 'https://sam.gov/workspace/contract/opp/d76cc239a31148dfbc84c17e8bbf3769/view'
					},
					{
						noticeId: '40ef4cc490164d29a21aea6a77a741c2',
						title: 'ARTB Drone Targetry',
						noticeType: 'Combined Synopsis/Solicitation',
						postedDate: '2026-01-13',
						responseDueDate: '2026-01-23T10:00:00+00:00',
						solicitationNumber: 'W911S226U2440',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE ARMY.AMC.ACC.MISSION & INSTALLATION CONTRACTING COMMAND.419TH CSB.W6QM MICC-FT DRUM',
						uiLink: 'https://sam.gov/workspace/contract/opp/40ef4cc490164d29a21aea6a77a741c2/view'
					}
					]
				}
			},
			notes: 'Official XPONENTIAL + AUVSI sources align on the May 11-14 Detroit run with Huntington Place operations and explicit defense/autonomy emphasis via MDEX co-location and defense programming tracks.'
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
			acquisition:
			{
				engagementKinds: ['Pre-solicitation', 'Sources Sought', 'Special Notice'],
				noticeType: 'Mixed (AFSOC/SOCOM notices)',
				agency: 'AFSOC / USSOCOM / SOCCENT',
				solicitationNumber: 'FA441726R0005',
				responseDueDate: '2026-04-30',
				samIntelligence:
				{
					collectedAt: '2026-02-26',
					postedFrom: '2026-01-15',
					postedTo: '2026-02-26',
					noticeTypes: ['p', 'r', 's', 'o', 'k'],
					totalMatched: 15,
					topNotices: [
					{
						noticeId: 'f0d21164aad341c8a6354512a2d4adf0',
						title: 'Hurlburt Field Integrated Base Defense Security System (IBDSS) IDIQ',
						noticeType: 'Solicitation',
						postedDate: '2026-02-20',
						responseDueDate: '2026-02-27T14:00:00-06:00',
						solicitationNumber: 'FA441726R0005',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE.AIR FORCE SPECIAL OPERATIONS COMMAND',
						uiLink: 'https://sam.gov/workspace/contract/opp/f0d21164aad341c8a6354512a2d4adf0/view'
					},
					{
						noticeId: '4c3d61f4a9564ea096bf4375509c6899',
						title: 'AFSOC Innovation, Logistical, and Material Support OTA',
						noticeType: 'Solicitation',
						postedDate: '2026-02-10',
						responseDueDate: '2026-02-17T14:00:00-06:00',
						solicitationNumber: 'AFSOC-OTA-26-001',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE.AIR FORCE SPECIAL OPERATIONS COMMAND',
						uiLink: 'https://sam.gov/workspace/contract/opp/4c3d61f4a9564ea096bf4375509c6899/view'
					},
					{
						noticeId: '25dabf3434514fa6bd5a30dbb057a5ad',
						title: 'J7 OCSIC Support',
						noticeType: 'Solicitation',
						postedDate: '2026-02-24',
						responseDueDate: '2026-03-06T12:00:00+03:00',
						solicitationNumber: 'H9227726R0001',
						agencyPath: 'DEPT OF DEFENSE.US SPECIAL OPERATIONS COMMAND (USSOCOM).SOCCENT',
						uiLink: 'https://sam.gov/workspace/contract/opp/25dabf3434514fa6bd5a30dbb057a5ad/view'
					},
					{
						noticeId: 'aa0039a497594af9bf71c3aef6c227e1',
						title: 'Demo Reef Dining Facility, Bldg 90326',
						noticeType: 'Presolicitation',
						postedDate: '2026-02-25',
						responseDueDate: '2026-04-30T14:00:00-05:00',
						solicitationNumber: 'FA441726B0001',
						agencyPath: 'DEPT OF DEFENSE.DEPT OF THE AIR FORCE.AIR FORCE SPECIAL OPERATIONS COMMAND',
						uiLink: 'https://sam.gov/workspace/contract/opp/aa0039a497594af9bf71c3aef6c227e1/view'
					}
					]
				}
			},
			notes: 'Air Force Southeast. SAM intelligence run attached 2026-02-26.'
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
				registration: 'https://www.ndia.org/events/2026/4/21/6md3-missile-defense-conference'
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
	},

	{
		id: 'radar-military-robotics-autonomous-systems-2026-conference',
		title: 'Military Robotics & Autonomous Systems 2026 Conference',
		description: 'Conference focused on military uncrewed systems development, integration, and procurement.',
		startDate: '2026-04-13',
		endDate: '2026-04-15',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location:
		{
			city: 'London',
			country: 'United Kingdom',
			lat: 51.5074,
			lng: -0.1278
		},
		ontology:
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['military', 'robotics', 'autonomous', 'systems', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows:
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events Defense & Security listing',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-24',
				confidence: 'High'
			},
			{
				name: 'ASD Events event page',
				url: 'https://www.asdevents.com/event.asp?id=25815',
				type: 'aggregator',
				lastVerified: '2026-02-24',
				confidence: 'High'
			}],
			links:
			{
				official: 'https://www.asdevents.com/event.asp?id=25815',
				registration: 'https://www.asdevents.com/event_register.asp?id=25815'
			},
			logistics:
			{
				format: 'In-person',
				travelBurdenFromDc: 'High'
			},
			acquisition:
			{
				registrationDeadline: '2026-04-13'
			},
			engagement:
			{
				status: 'Not engaged',
				notes: 'No public government POC name, solicitation number, response due date, or sponsoring agency field was published on the source page as of 2026-02-24.'
			},
			notes: 'Date, city, and registration URL verified from ASD event page metadata; venue remains undisclosed until approved registration.'
		}
	},
	{
		id: 'radar-counter-uas-technology-europe-conference-2026',
		title: 'Counter UAS Technology Europe Conference 2026',
		description: 'Conference on European counter-UAS detection, targeting, and defeat operations and technology.',
		startDate: '2026-04-20',
		endDate: '2026-04-22',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location:
		{
			city: 'London',
			country: 'United Kingdom',
			lat: 51.5074,
			lng: -0.1278
		},
		ontology:
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['counter', 'technology', 'europe', 'conference', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows:
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'ASD Events Defense & Security listing',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-02-24',
				confidence: 'High'
			},
			{
				name: 'ASD Events event page',
				url: 'https://www.asdevents.com/event.asp?id=25774',
				type: 'aggregator',
				lastVerified: '2026-02-24',
				confidence: 'High'
			}],
			links:
			{
				official: 'https://www.asdevents.com/event.asp?id=25774',
				registration: 'https://www.asdevents.com/event_register.asp?id=25774'
			},
			logistics:
			{
				format: 'In-person',
				travelBurdenFromDc: 'High'
			},
			acquisition:
			{
				registrationDeadline: '2026-04-20'
			},
			engagement:
			{
				status: 'Not engaged',
				notes: 'No public government POC name, solicitation number, response due date, or sponsoring agency field was published on the source page as of 2026-02-24.'
			},
			notes: 'Date, city, and registration URL verified from ASD event page metadata; venue remains undisclosed until approved registration.'
		}
	},
	{
		id: 'radar-2026-homeland-security-summit',
		title: '2026 Homeland Security Summit',
		description: 'Potomac Officers Club homeland security summit with published date, agenda window, and registration link.',
		startDate: '2026-11-12',
		branch: 'Joint',
		type: 'Summit',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Medium',
		location: 
		{
			city: 'TBD',
			country: 'USA',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Homeland security'],
			capabilityAreas: ['Acquisition'],
			missionThreads: ['Industry engagement'],
			stakeholders: ['Government and industry participants'],
			keywords: ['homeland security', 'summit', 'potomac officers club', '2026'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Not published by source',
				prep: 'Not published by source',
				execution: '2026-11-12 (agenda window published)'
			},
			provenance: [
			{
				name: 'Potomac Officers Club',
				url: 'https://www.potomacofficersclub.com/govcon-events/',
				type: 'aggregator',
				lastVerified: '2026-02-26',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.potomacofficersclub.com/events/2026-homeland-security-summit/',
				registration: 'https://potomacofficersclub.com/register/?event=701PM00000lj5tMYAQ'
			},
			logistics: 
			{
				format: 'In-person',
				travelBurdenFromDc: 'Medium'
			},
			acquisition: {},
			notes: 'Source page publishes date/time and registration URL; venue is listed as "Will be announced soon." No public government contact, notice type, agency owner, solicitation number, response deadline, or registration deadline was published as of 2026-02-26.'
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
		id: 'radar-deps-hel-symposium-2',
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
		id: 'radar-same-san-juan-industry-day-2',
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
		id: 'radar-cyberbay-summit-2',
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
		id: 'radar-same-charleston-post-industry-day-2026-2',
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
		id: 'radar-satshow-satellite-2026-2',
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
		id: 'radar-qsecdef-world-symposium-2',
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
		id: 'radar-robins-requirements-symposium-2',
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
		id: 'radar-defense-manufacturing-conference-2026-2',
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
		id: 'radar-chicago-district-usace-industry-outreach-open-house-2',
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
		id: 'radar-army-aviation-mission-solutions-summit-2026-quad-a-2',
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
		id: 'radar-same-fort-worth-post-industry-day-2026-2',
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
		id: 'radar-southeast-region-fedcon-usace-summit-2',
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
		id: 'radar-sacramento-district-usace-industry-day-2',
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
		id: 'radar-afcea-nova-innovation-it-day-2026-2',
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
		id: 'radar-dod-small-business-training-week-2',
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
		id: 'radar-usace-national-dredging-meeting-2',
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
		id: 'radar-huntington-district-usace-industry-outreach-open-house-2',
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
		id: 'radar-i-itsec-2026-2',
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
		id: 'radar-wildfire-technology-summit-2026',
		title: 'Wildfire Technology Summit 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-04-21',
		endDate: '2026-04-22',
		branch: 'Joint',
		type: 'Summit',
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
			keywords: ['wildfire', 'technology', 'summit', '2026'],
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
				official: 'https://www.asdevents.com/event.asp?id=25838'
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
		id: 'radar-hot-topic-transforming-army-installations',
		title: 'Hot Topic - Transforming Army Installations',
		description: 'AUSA sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-04-01',
		branch: 'Army',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'Hot Topic - Transforming Army Installations Arlington',
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
			keywords: ['topic', 'transforming', 'army', 'installations'],
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
				official: 'https://www.ausa.org/events/hot-topic/transforming-army-installations'
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
		id: 'radar-future-armoured-vehicles-situational-awareness-conference-2026',
		title: 'Future Armoured Vehicles Situational Awareness Conference 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-04-22',
		endDate: '2026-04-23',
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
			keywords: ['future', 'armoured', 'vehicles', 'situational', 'awareness'],
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
				official: 'https://www.asdevents.com/event.asp?id=25775'
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
		id: 'radar-hot-topic-installation-transformation',
		title: 'Hot Topic - Installation Transformation',
		description: 'AUSA Army Aviation hot-topic forum focused on force modernization, acquisition priorities, and industry-government collaboration.',
		startDate: '2026-04-01',
		branch: 'Army',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'Arlington',
			state: 'VA',
			country: 'USA',
			lat: 38.8908,
			lng: -77.0881,
			venue: 'General Gordon R. Sullivan Conference & Events Center'
		},
		ontology: 
		{
			themes: ['Army aviation modernization', 'Industry-government collaboration', 'Aviation force sustainment'],
			capabilityAreas: ['Aviation systems', 'Acquisition', 'Training and sustainment'],
			missionThreads: ['Army Aviation readiness', 'Multi-Domain Operations support'],
			stakeholders: ['Army aviation leaders', 'Program offices', 'Industry partners'],
			keywords: ['army aviation', 'installation transformation', 'hot topic'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-30 days',
				prep: 'T-21 to T-1 days',
				execution: 'Event day + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AUSA events',
				url: 'https://www.ausa.org/events/hot-topic/installation-transformation',
				type: 'official',
				lastVerified: '2026-03-05',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ausa.org/events/hot-topic/installation-transformation',
				registration: 'https://ausa.my.site.com/OnlineCommunity/s/community-event?id=a2VPn000003RzqTMAS'
			},
			logistics: 
			{
				format: 'In-person',
				estimatedCostUsd: 
				{
					min: 0,
					max: 750
				},
				travelBurdenFromDc: 'Low'
			},
			acquisition:
			{
				engagementKinds: ['Vendor Outreach'],
				noticeType: 'Event registration (no SAM solicitation published on official event page)',
				agency: 'U.S. Army Aviation (topic focus)',
				registrationDeadline: '2026-03-30'
			},
			engagement:
			{
				status: 'Not engaged',
				contacts: [
				{
					name: 'Kevin Engler',
					role: 'Deputy Director, Outreach and Programs',
					organization: 'AUSA',
					email: 'kengler@ausa.org',
					phone: '703.907.2412'
				},
				{
					name: 'Sophia Martin',
					role: 'Registrar',
					organization: 'AUSA',
					email: 'smartin@ausa.org',
					phone: '703.907.2692'
				}
				]
			},
			notes: 'Official listing provides registration details and organizer contacts only; no public government POC or solicitation number was listed as of 2026-03-05.'
		}
	},
	{
		id: 'radar-cyber-intelligence-europe-2026-conference',
		title: 'Cyber Intelligence Europe 2026 Conference',
		description: 'Conference listing for Cyber Intelligence Europe 2026 in Brussels.',
		startDate: '2026-04-22',
		endDate: '2026-04-23',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Brussels',
			country: 'Belgium',
			lat: 50.8503,
			lng: 4.3517
		},
		ontology: 
		{
			themes: ['Cyber intelligence'],
			capabilityAreas: [],
			missionThreads: [],
			stakeholders: [],
			keywords: ['cyber intelligence', 'europe', 'brussels'],
			relatedPrograms: [],
			decisionWindows: 
			{
				discovery: 'Unspecified in source',
				prep: 'Unspecified in source',
				execution: 'Unspecified in source'
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-03-09',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25854'
			},
			logistics: 
			{
				format: 'In-person',
				travelBurdenFromDc: 'High'
			},
			notes: 'Source provides event title/date/location and registration link only. No public government contacts, solicitation number, response date, or registration deadline were listed as of 2026-03-09.'
		}
	},
	{
		id: 'radar-national-conference-on-cfius-2026',
		title: 'National Conference on CFIUS 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-04-22',
		endDate: '2026-04-23',
		branch: 'Joint',
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
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['national', 'conference', 'cfius', '2026'],
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
				official: 'https://www.asdevents.com/event.asp?id=25945'
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
			notes: 'Source page provides agenda and speaker roster but no public government point-of-contact email/phone, solicitation number, response deadline, or registration cutoff as of 2026-03-10.'
		}
	},
	{
		id: 'radar-dow-va-government-health-it-summit-2026',
		title: 'DoW/VA & Government Health IT Summit 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-04-28',
		endDate: '2026-04-29',
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
			keywords: ['government', 'health', 'summit', '2026'],
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
				official: 'https://www.asdevents.com/event.asp?id=25615'
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
			notes: 'Source page provides agenda and speaker roster but no public government point-of-contact email/phone, solicitation number, response deadline, or registration cutoff as of 2026-03-10.'
		}
	},
	{
		id: 'radar-ausa-noon-report-soldier-for-life',
		title: 'AUSA Noon Report: Soldier for Life',
		description: 'AUSA sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-04-30',
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
			keywords: ['ausa', 'noon', 'report', 'soldier', 'life'],
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
				official: 'https://www.ausa.org/events/noon-report/soldier-for-life'
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
			notes: 'AUSA source lists title/date and official event link only; no public government contact, solicitation number, response date, registration deadline, or engagement-kind metadata was published as of 2026-03-11.'
		}
	},

	{
		id: 'radar-2026-ausa-annual-meeting-exposition',
		title: '2026 AUSA Annual Meeting & Exposition',
		description: 'AUSA sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-10-12',
		endDate: '2026-10-14',
		branch: 'Army',
		type: 'Workshop',
		status: 'Upcoming',
		signal: 'High',
		effort: 'Low',
		location: 
		{
			city: 'Washington',
			state: 'DC',
			country: 'USA',
			lat: 38.9072,
			lng: -77.0369
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['2026', 'ausa', 'annual', 'meeting', 'exposition'],
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
				official: 'https://www.ausa.org/events/2026-ausa-annual-meeting-exposition'
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
		id: 'radar-hypersonic-weapons-emerging-technologies-summit-2026',
		title: 'Hypersonic Weapons & Emerging Technologies Summit 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-04-28',
		endDate: '2026-04-29',
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
			keywords: ['hypersonic', 'weapons', 'emerging', 'technologies', 'summit'],
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
				official: 'https://www.asdevents.com/event.asp?id=25845'
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
		id: 'radar-military-space-situational-awareness-conference-2025',
		title: 'Military Space Situational Awareness Conference 2025',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-05-05',
		endDate: '2026-05-07',
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
			keywords: ['military', 'space', 'situational', 'awareness', 'conference'],
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
				official: 'https://www.asdevents.com/event.asp?id=25776'
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
		id: 'radar-c4isr-global-conference-2026',
		title: 'C4ISR Global Conference 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-05-06',
		endDate: '2026-05-07',
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
			keywords: ['c4isr', 'global', 'conference', '2026'],
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
				official: 'https://www.asdevents.com/event.asp?id=25853'
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
		id: 'radar-air-dominance-summit-2026',
		title: 'Air Dominance Summit 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-05-12',
		endDate: '2026-05-13',
		branch: 'Joint',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['dominance', 'summit', '2026'],
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
				official: 'https://www.asdevents.com/event.asp?id=25873'
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
		id: 'radar-landeuro-2026',
		title: 'LANDEURO 2026',
		description: 'AUSA sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-12-03',
		endDate: '2026-12-04',
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
			keywords: ['landeuro', '2026'],
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
				official: 'https://www.ausa.org/events/landeuro-2026'
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
		id: 'radar-assured-logistics-summit-2026',
		title: 'Assured Logistics Summit 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-05-12',
		endDate: '2026-05-13',
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
			themes: [],
			capabilityAreas: [],
			missionThreads: [],
			stakeholders: [],
			keywords: ['assured', 'logistics', 'summit', '2026'],
			relatedPrograms: [],
			decisionWindows: 
			{
				discovery: '',
				prep: '',
				execution: ''
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
				official: 'https://www.asdevents.com/event.asp?id=25990'
			},
			logistics: 
			{
				format: 'In-person',
				travelBurdenFromDc: 'Low'
			},
			notes: 'Source listing does not publish public government contact, notice type, solicitation, or response/registration dates.'
		}
	},
	{
		id: 'radar-loitering-munitions-usa-conference-2026',
		title: 'Loitering Munitions USA Conference 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-05-13',
		endDate: '2026-05-14',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['loitering', 'munitions', 'conference', '2026'],
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
				official: 'https://www.asdevents.com/event.asp?id=25842'
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
			notes: 'Source listing does not publish public government contact, notice type, solicitation, or response/registration dates.'
		}
	},
	{
		id: 'radar-ausa-noon-report-once-a-soldier-always-a-soldier-how-soldier-for-life-',
		title: 'AUSA Noon Report: Once a Soldier, Always a Soldier: How Soldier for Life Builds Lifelong Readiness',
		description: 'AUSA sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-04-30',
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
			themes: [],
			capabilityAreas: [],
			missionThreads: [],
			stakeholders: [],
			keywords: ['ausa', 'soldier-for-life'],
			relatedPrograms: [],
			decisionWindows: 
			{
				discovery: '',
				prep: '',
				execution: ''
			},
			provenance: [
			{
				name: 'AUSA',
				url: 'https://www.ausa.org/events/noon-report/soldier-for-life',
				type: 'official',
				lastVerified: '2026-03-26',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ausa.org/events/noon-report/soldier-for-life'
			},
			logistics: 
			{
				format: 'Virtual',
				travelBurdenFromDc: 'Low'
			},
			notes: 'Source confirms event title/date and virtual format. No public government contact, notice type, solicitation number, response due date, or registration deadline published as of 2026-03-26.'
		}
	},
	{
		id: 'radar-future-armoured-vehicles-central-and-eastern-europe-conference-2026',
		title: 'Future Armoured Vehicles Central and Eastern Europe Conference 2026',
		description: 'ASD Events listing for defense ecosystem tracking.',
		startDate: '2026-05-18',
		endDate: '2026-05-19',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Prague',
			country: 'Czech Republic',
			lat: 50.0755,
			lng: 14.4378
		},
		ontology: 
		{
			themes: [],
			capabilityAreas: [],
			missionThreads: [],
			stakeholders: [],
			keywords: ['future', 'armoured', 'vehicles', 'central', 'eastern europe'],
			relatedPrograms: [],
			decisionWindows: 
			{
				discovery: '',
				prep: '',
				execution: ''
			},
			provenance: [
			{
				name: 'ASD Events',
				url: 'https://www.asdevents.com/defense-security',
				type: 'aggregator',
				lastVerified: '2026-03-31',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.asdevents.com/event.asp?id=25843'
			},
			logistics: 
			{
				format: 'In-person',
				travelBurdenFromDc: 'High'
			},
			notes: 'Source confirms title, date range, city, and official event URL. No public government contact, notice type, solicitation number, response due date, or registration deadline published as of 2026-03-31.'
		}
	},



	{
		id: 'radar-future-artillery-conference-2026',
		title: 'Future Artillery Conference 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-05-19',
		endDate: '2026-05-21',
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
			keywords: ['future', 'artillery', 'conference', '2026'],
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
				official: 'https://www.asdevents.com/event.asp?id=25872'
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
		id: 'radar-helicopter-technology-central-and-eastern-europe-conference-2026',
		title: 'Helicopter Technology Central and Eastern Europe Conference 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-05-20',
		endDate: '2026-05-21',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'High',
		location: 
		{
			city: 'Prague',
			country: 'Czech Republic',
			lat: 39.5,
			lng: -98.35
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['helicopter', 'technology', 'central', 'eastern', 'europe'],
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
				official: 'https://www.asdevents.com/event.asp?id=25894'
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
		id: 'radar-advanced-energy-storage-for-defense-security-summit-2026',
		title: 'Advanced Energy Storage for Defense & Security Summit 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-05-27',
		endDate: '2026-05-28',
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
			keywords: ['advanced', 'energy', 'storage', 'defense', 'security'],
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
				official: 'https://www.asdevents.com/event.asp?id=25995'
			},
			logistics: 
			{
				format: 'In-person',
				travelBurdenFromDc: 'Low'
			},
			notes: 'Source confirms title, date range, city, and official event URL. No public government contact, SAM notice type, solicitation number, response due date, or registration deadline published as of 2026-02-13.'
		}
	},
	{
		id: 'radar-future-soldier-technology-usa-conference-2026',
		title: 'Future Soldier Technology USA Conference 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-06-01',
		endDate: '2026-06-02',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['future', 'soldier', 'technology', 'conference', '2026'],
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
				official: 'https://www.asdevents.com/event.asp?id=25900'
			},
			logistics: 
			{
				format: 'In-person',
				travelBurdenFromDc: 'Low'
			},
			notes: 'Source confirms title, date range, city, and official event URL. No public government contact, SAM notice type, solicitation number, response due date, or registration deadline published as of 2026-02-13.'
		}
	},

	{
		id: 'radar-milsatcom-usa-conference-2026',
		title: 'MILSATCOM USA Conference 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-06-08',
		endDate: '2026-06-10',
		branch: 'Joint',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
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
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Joint stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['milsatcom', 'conference', '2026'],
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
				official: 'https://www.asdevents.com/event.asp?id=25901'
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
		id: 'radar-hot-topic-army-acquisitions-and-contracting',
		title: 'Hot Topic - Army Acquisitions and Contracting',
		description: 'AUSA sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-06-25',
		branch: 'Army',
		type: 'Conference',
		status: 'Upcoming',
		signal: 'Medium',
		effort: 'Low',
		location: 
		{
			city: 'Arlington',
			state: 'VA',
			country: 'USA',
			lat: 38.8907613,
			lng: -77.0880681,
			venue: 'General Gordon R. Sullivan Conference & Events Center'
		},
		ontology: 
		{
			themes: ['Defense conference monitoring', 'Opportunity timing', 'Ecosystem engagement'],
			capabilityAreas: ['Acquisition', 'Mission systems', 'Digital modernization'],
			missionThreads: ['Partnership development', 'Program sensing'],
			stakeholders: ['Army stakeholders', 'Program offices', 'Industry partners'],
			keywords: ['topic', 'army', 'acquisitions', 'contracting'],
			relatedPrograms: ['Radar expansion'],
			decisionWindows: 
			{
				discovery: 'Now to T-90 days',
				prep: 'T-60 to T-14 days',
				execution: 'Event window + 14-day follow-up'
			},
			provenance: [
			{
				name: 'AUSA Event Page',
				url: 'https://www.ausa.org/events/hot-topic/army-acquisitions-and-contracting',
				type: 'official',
				lastVerified: '2026-04-16',
				confidence: 'High'
			}],
			links: 
			{
				official: 'https://www.ausa.org/events/hot-topic/army-acquisitions-and-contracting',
				registration: 'https://ausa.my.site.com/OnlineCommunity/s/community-event?id=a2VPn000003ijKfMAI',
				hotelBlock: 'https://www.hyatt.com/en-US/hotel/virginia/hyatt-place-arlington-courthouse-plaza/wasza?corp_id=7376'
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
			acquisition: 
			{
				engagementKinds: ['Vendor Outreach'],
				noticeType: 'Event Registration',
				agency: 'Association of the United States Army (AUSA)',
				registrationDeadline: '2026-06-23'
			},
			engagement: 
			{
				status: 'Not engaged',
				contacts: [
				{
					name: 'Kevin Engler',
					role: 'Deputy Director, Outreach and Programs',
					organization: 'AUSA',
					email: 'kengler@ausa.org',
					phone: '703.907.2412'
				},
				{
					name: 'Sophia Martin',
					role: 'Registrar',
					organization: 'AUSA',
					email: 'smartin@ausa.org',
					phone: '703.907.2692'
				},
				{
					name: 'Emily Call',
					role: 'Sponsorship Manager',
					organization: 'AUSA',
					email: 'ecall@ausa.org',
					phone: '703.907.2606'
				}]
			},
			notes: 'Source-backed enrichment: registration closes 2026-06-23 at 1700 EST; no solicitation number or response due date published on the event page.'
		}
	},
	{
		id: 'radar-human-performance-biosystems-summit-2026',
		title: 'Human Performance & Biosystems Summit 2026',
		description: 'ASD Events sourced event for defense ecosystem tracking and engagement planning.',
		startDate: '2026-06-10',
		endDate: '2026-06-11',
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
			keywords: ['human', 'performance', 'biosystems', 'summit', '2026'],
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
				official: 'https://www.asdevents.com/event.asp?id=26020'
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
			notes: 'No public government contact, solicitation number, or response/registration cutoff was published on the source page at import time; fields intentionally left blank.'
		}
	},
];
