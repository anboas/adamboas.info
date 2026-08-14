export type SabreResumeBulletGroup = {
	title: string;
	bullets: string[];
};

export type SabreResumeRole = {
	company: string;
	title: string;
	period: string;
	summary: string;
	groups?: SabreResumeBulletGroup[];
};

export type SabreResumeValueItem = {
	title: string;
	body: string;
};

export const sabreResumeProfile = {
	name: 'Adam Boas',
	email: 'anboas@gmail.com',
	phone: '(301) 904-2011',
	url: 'www.adamboas.com',
	clearance: 'Top Secret',
	pdfPath: '/files/adam-boas-sabre-resume.pdf',
};

export const sabreResumeSummary = [
	'Growth-oriented solutions architect and senior technical strategist who helps defense firms turn customer mission friction into funded task orders, qualified captures, technical architectures, and delivery transitions.',
	'Operates between business development and operations: discovery, mission problem, architecture, contract path, capture package, and execution handoff.',
];

export const sabreResumeValueProposition: SabreResumeValueItem[] = [
	{
		title: 'Enterprise capture accelerator',
		body: 'Establish the customer problem, stakeholder map, acquisition drivers, solution baseline, discriminators, partner gaps, proof points, narrative, and delivery model.',
	},
	{
		title: 'Portfolio-to-opportunity map',
		body: 'Convert delivery knowledge into a register of mission friction, fundable demand, task-order paths, delivery constraints, data rights, security assumptions, and next customer engagements.',
	},
	{
		title: 'NDD offering activation',
		body: 'Shape repeatable packages for program data-to-WDP, software modernization, DevSecOps, digital thread, AI-for-test, cloud authorization, workflow automation, and portfolio analytics.',
	},
];

export const sabreResumeExperience: SabreResumeRole[] = [
	{
		company: 'KBR',
		title: 'Senior Technical Strategist / Solutions Architect',
		period: '2025 - present',
		summary:
			'Serve as a growth-focused solutions architect for Mission Engineering Technical Operations, converting mission-owner friction into capture strategy, technical artifacts, differentiated value propositions, and executable delivery paths across Navy, DoD, and federal markets.',
		groups: [
			{
				title: 'Growth, capture, and mission discovery',
				bullets: [
					'Built lightweight mission-discovery and technology-insertion frameworks, including Program Immersion Visits, to surface customer pain, stakeholder influence, acquisition paths, technical insertions, and follow-on growth candidates without separating business development from delivery reality.',
					'Converted scattered customer and program context into capture artifacts including capability statements, white papers, solution briefs, Q&A inputs, compliance traces, and proposal narratives across aviation, cyber, AI, data, facility-support, and science-and-engineering markets.',
					'Provided strategic DOE/NASA Ames facility-support positioning by connecting mission owners, their leadership, and CIO-aligned resources to articulate a KBR-specific value proposition grounded in mission understanding, enterprise technical credibility, and executable support models.',
					'Served across pursuit lifecycles as solutions architect, technical lead, volume and section lead, author, reviewer, recovery lead, and color-team evaluator, keeping responses compelling for capture leadership and credible for delivery executives.',
				],
			},
			{
				title: 'Modernization architecture',
				bullets: [
					'Advanced Navy data modernization and War Data Platform strategies through approaches for authoritative data onboarding, cross-domain exchange, governance, access control, analytics, and AI-enabled decision support.',
					'Produced reusable reference architectures and executive artifacts across GovCloud, JWCC, DevSecOps, data fabrics, digital engineering, continuous authorization, generative AI, and agentic workflows, giving capture teams technical material that could survive solution review and transition into delivery.',
				],
			},
		],
	},
	{
		company: 'Booz Allen Hamilton',
		title: 'Solutions Architect',
		period: '2024 - 2025',
		summary:
			'Supported DoD CIO Information Enterprise across software modernization policy, AI4SDLC governance, cloud, DevSecOps, acquisition coordination, and market growth support.',
		groups: [
			{
				title: 'DoD CIO Information Enterprise - Software Modernization and Cloud Directorate',
				bullets: [
					'Primary author for DoD Modern Software Directive and Instruction work; led a 10-week Department-wide collaboration to identify policy gaps and drive modernization.',
					'Led SHARE IT Act implementation guidance to streamline software reuse, acquisition, and licensing compliance.',
					'Aligned initiatives with Deputy Secretary goals in the Fulcrum IT Advancement Strategy to modernize digital infrastructure and improve interoperability.',
					'Directed strategic and technical modernization of CODE.mil and CLOUD.mil, including ownership transition support from Defense Digital Service and strengthened software sharing posture.',
					'Created the Digital Arsenal catalog of DevSecOps platforms and software factories for DoD-wide visibility and reuse.',
					'Built out the DoD CIO Library as a more robust suite of policy, strategy, and technical guidance, developing reference architectures, fundamentals documents, and preferred practices with mission owners and organizations including DISA HaCC.',
					'Developed AI-enabled frameworks for quantitative and qualitative policy analysis, enabling scalable evaluation of policy issuances and cross-document alignment.',
					'Worked directly with the Chief Digital and Artificial Intelligence Office on cross-functional initiatives, including AI-enabled policy assessment aligned to EO 14110 and OMB M-24-10 AI governance expectations, plus DOGE portfolio assessment support.',
					'Reviewed and provided recommendations on industry, standards, and Service-aligned policy and technical materials, including NIST publications, Military Department CIO policy inputs, Service strategies, and international standards-body drafts.',
					'Engaged Military Department and Service CIO stakeholders across Army, Navy, Air Force, Marine Corps, Space Force, and Fourth Estate communities, helping align software, cloud, data, AI, and cybersecurity guidance across Department priorities.',
					'Assessed RMF policy and implementation friction to inform the DoD CIO Cybersecurity Risk Management Construct, translating authorization pain points into recommendations for risk-based, continuous cyber governance.',
					'Worked closely with A&S, R&E, DOT&E, and DoD CIO leadership on strategy and policy development, functioning as a software modernization, DevSecOps, cloud, and AI policy subject-matter expert.',
					'Provided technical review and input to the DoD CIO FinOps Strategy, connecting cloud financial management, engineering governance, and mission-owner accountability.',
					'Reviewed material for the DoD Weapon Systems Software Summit and served as a panel member, contributing software modernization and policy expertise for senior defense stakeholders.',
					'Co-led the AI for Software Development Lifecycle work group; authored AI integration policies and guidance under a tri-chaired SES-level Senior Steering Group.',
				],
			},
			{
				title: 'Booz Allen Market Growth Support',
				bullets: [
					'Served as cloud/software SME to Navy/Marine Corps VP/SVP leadership on the Booz Allen/AWS master services agreement, translating partnership priorities into Global Defense marketing and executive positioning across Booz Allen\'s $10.7B federal technology business.',
					'Performed growth activities for Senior Associates, Principals, and Vice Presidents across the organization, including customer discovery, capture shaping, proposal strategy, solution architecture, technical lead support, color-team review, and executive-ready narratives.',
					'Supported proposal initiatives at every level of involvement, serving as solutions architect, technical lead, reviewer, writer, and executive narrative contributor across local, market, and enterprise pursuits.',
					'Advised VP/SVP stakeholders on strategic alignment, opportunity tracking, and GenAI applications to improve contract value delivery.',
					'Provided domain guidance for localized opportunity pursuits to strengthen competitive positioning and client value.',
				],
			},
		],
	},
	{
		company: 'KBR',
		title: 'Solutions Architect',
		period: '2022 - 2024',
		summary:
			'Supported Navy aviation mission-system modernization, IL5 cloud architecture, DevSecOps alignment, software/data modernization, secure cloud integration, and technical capture.',
		groups: [
			{
				title: 'COMFRC HQ Digital Group - AvPLM Cloud Migration and Modernization IPT',
				bullets: [
					'Led AWS-based cloud architecture for Aviation Product Lifecycle Management to improve capability, scalability, and security.',
					'Implemented modernization approaches that strengthened cloud integration and security posture while increasing team proficiency in cloud operations.',
					'Coordinated with engineering and AWS stakeholders on security-first cloud optimization to mitigate vulnerabilities and improve resilience.',
					'Built relationships with AWS and the Naval Enterprise to secure technical consultancy and support.',
					'Produced and delivered training on cloud modernization, DevSecOps, and cybersecurity to enable continuous learning.',
				],
			},
			{
				title: 'PEO MLB - Logistics IT Services',
				bullets: [
					'Integrated AvPLM efforts into the LOG-IT portfolio and developed long-term cloud adoption strategies aligned to enterprise technology goals, resilience, and efficiency.',
				],
			},
			{
				title: 'KBR Capture, Proposal, and Technical Writing',
				bullets: [
					'Supported numerous capture and proposal initiatives as solutions architect, technical lead, volume lead, reviewer, writer, and compliance translator, helping convert operational credibility into evaluator-ready technical solutions and win themes.',
					'Section Lead for IAC MAC proposal work to modernize legacy logistics systems; shaped integration and efficiency approaches.',
					'Performed technical review and strategic input for LOG IT portfolio integration work, aligning response material to cloud integration and long-term infrastructure objectives.',
					'Led technical writing for operational support strategy, aviation logistics modernization, and cloud value-delivery narratives.',
				],
			},
		],
	},
	{
		company: 'Booz Allen Hamilton',
		title: 'Solutions Architect',
		period: '2019 - 2022',
		summary:
			'Advised Information Warfare, NAVAIR, PEO Digital, PEO Submarines, OPNAV, and NECC stakeholders on DevSecOps, secure cloud architecture, modernization strategy, and Compile-to-Combat initiatives.',
		groups: [
			{
				title: 'PEO Digital, PEO Submarines, and NAVAIR Cloud Broker',
				bullets: [
					'Trusted advisor to the Service Family Owner for Software Practice and Automation; provided cloud and cybersecurity guidance to shape strategy and operating model.',
					'Cross-functionally supported Platform One through Booz Allen contract channels, providing strategy, guidance, technical recommendations, and platform-direction input across software factory, DevSecOps, cloud, and enterprise adoption considerations.',
					'Led mission-owner outreach and onboarding for Black Pearl, aligning platform adoption, training, and support to mission objectives.',
					'Provided DevSecOps, software factory, and cloud SME support to improve cybersecurity posture and operational efficiency.',
					'Led architecture assessments for custom and COTS applications; developed modernization and cloud migration strategies with scope, cost analysis, and technical advisories.',
					'Provided architecture support to roughly 30 teams across about 75 applications, ranging from tactical adjustments to full-stack redevelopment.',
				],
			},
			{
				title: 'Department of Defense and Navy Strategy Support',
				bullets: [
					'Authored documentation and training on software modernization, cloud migration, and cybersecurity, including a Software Modernization Approach document that bridged leadership expectations and technical execution.',
					'Contributor to DevSecOps Task Force behavior and practices work; gathered and synthesized enterprise feedback and briefed DASN IWAR on adoption path forward.',
					'Led OPNAV N2N6 software modernization alternatives analysis leveraging Cloud Broker and Service Provider capabilities.',
					'Implemented cloud development strategies that reduced operational costs by roughly 90 percent while maintaining operational efficiency.',
					'Briefed senior Navy leaders on NAV-ITAS Compile-to-Combat compliance roadmap and modernization initiatives at the Pentagon.',
				],
			},
			{
				title: 'NECC and Internal Booz Allen Growth',
				bullets: [
					'Led architecture and gap analysis for the Readiness and Cost Reporting Program; produced modernization and cloud migration roadmap to improve efficiency and resilience.',
					'Provided cloud adoption guidance at IL5 and IL6; facilitated discussions between Amazon and Navy stakeholders to enable secure cloud use.',
					'Led architecture analysis and solutioning for white papers, technical responses, quick-look assessments, cloud broker performance, Agile Core Services integration, NCCS intake automation, NSWCDD, NAVAIR, and NECC response work.',
				],
			},
		],
	},
	{
		company: 'KBRwyle',
		title: 'Cloud Architect / Site Reliability Engineer',
		period: '2018 - 2019',
		summary:
			'Built and operated automated cloud environments with CI/CD, configuration management, monitoring, recovery automation, disaster-recovery planning, documentation, and cost tracking.',
		groups: [
			{
				title: 'Cloud operations',
				bullets: [
					'Architected and built scalable, reliable, automated cloud environments with supporting documentation.',
					'Implemented configuration management, CI/CD, and cloud monitoring to improve reliability and deployment velocity.',
					'Partnered with development teams to monitor service health and implement automated failure recovery to reduce downtime.',
					'Developed cloud best practices and procedures for deployment and cloud-native operations.',
					'Implemented cost-tracking mechanisms to monitor and reduce cloud spend without degrading service quality.',
				],
			},
		],
	},
	{
		company: 'KBRwyle',
		title: 'Architecture Analyst / Software Engineer',
		period: '2018',
		summary:
			'Stabilized multi-host development environments spanning TFS, SQL, SharePoint, Fortify, custom apps, ESXi/vCenter, and storage.',
		groups: [
			{
				title: 'Infrastructure and remediation',
				bullets: [
					'Diagnosed and resolved issues across single-host and multi-host deployments, including TFS, SQL, SharePoint, Fortify, and custom applications.',
					'Analyzed an inherited development environment and delivered remediation recommendations focused on root-cause resolution.',
					'Administered a multi-host ESXi environment, including a roughly 70-VM HA cluster and NAS devices with roughly 80 TB raw / 60 TB usable capacity.',
				],
			},
		],
	},
	{
		company: 'KBR',
		title: 'Software Engineer',
		period: '2015 - 2018',
		summary:
			'Delivered Agile software, strengthened ALM and security tooling, configured Fortify SSC/SCA, reduced technical debt, and shipped reusable shared libraries.',
		groups: [
			{
				title: 'Software delivery and security tooling',
				bullets: [
					'Delivered iterative product increments using Agile/Scrum under tight timelines.',
					'Applied MVP and MVC patterns to produce maintainable architectures.',
					'Managed and optimized the Application Lifecycle Management tool suite.',
					'Administered HP Fortify Software Security Center and Static Code Analysis across C/C++, ColdFusion, Java, and C#/.NET.',
					'Provided cross-department technical support and led intern integration, training, and supervision.',
				],
			},
		],
	},
];

export const sabreResumeEducation = [
	'University of Maryland Global Campus - B.S., Cybersecurity Management and Policy (2023)',
	'CompTIA Security+ (SY0-601) (2023)',
	'AWS Certified Cloud Practitioner (2019)',
	'AWS Certified Solutions Architect - Associate (2019)',
	'HPE ASE - Fortify v1 (2016)',
	'Certified ScrumMaster (2016)',
	'College of Southern Maryland - A.S., Computer Science (2015)',
	'James A. Forest Career and Technology Center - Cisco Accredited Computer Networking Academy (2012)',
];

export const sabreResumeWriting = [
	{
		title: 'Agent Control Plane Reference Architecture (ACP-RA)',
		year: '2026',
		url: '/writing/acp-ra/',
	},
	{
		title: 'Continuous Assurance Fabric Reference Architecture (CAF-RA)',
		year: '2026',
		url: '/writing/caf-ra/',
	},
	{
		title: 'From PDFs to Pull Requests',
		year: '2025',
		url: '/writing/code-as-policy/',
	},
];

export const sabreResumeSpeaking = [
	'Modern Day Marine - Model-Based Systems Engineering (2026)',
	'DON Red Hat PAX River Tech Day - Partner Lunch Panel (2024)',
	'NavalX Scrum for Leaders - Agile Leadership (2022)',
	'OPNAV N7 MyNavy HR Cybersecurity Off-Site (2020)',
];
