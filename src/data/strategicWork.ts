export type StrategicWorkItem = {
	slug: string;
	title: string;
	theme: string;
	missionProblem: string;
	role: string;
	approach: string[];
	practicalValue: string;
	relatedEvidence: { label: string; href: string }[];
};

export const strategicWorkItems: StrategicWorkItem[] = [
	{
		slug: 'dod-software-policy-and-enterprise-governance',
		title: 'DoD Software Policy and Enterprise Governance',
		theme: 'Enterprise policy',
		missionProblem:
			'Defense software guidance often lands as static compliance language instead of execution-ready architecture, controls, acquisition choices, and delivery practices.',
		role: 'Served in senior technical-strategy and solution-architecture roles supporting DoD CIO software modernization, policy drafting, DevSecOps guidance, AI4SDLC governance, and policy-to-execution translation.',
		approach: [
			'Connected software modernization, cloud, DevSecOps, cyber, acquisition, and enterprise governance communities.',
			'Translated policy intent into architecture patterns, implementation guardrails, and delivery-system expectations.',
			'Used direct technical experience to keep enterprise guidance grounded in how teams actually build, secure, and ship software.',
		],
		practicalValue:
			'Helps senior leaders turn policy into executable modernization systems that can be governed, assessed, and improved over time.',
		relatedEvidence: [
			{ label: 'From PDFs to Pull Requests', href: '/writing/code-as-policy/' },
			{ label: 'Profile', href: '/profile/' },
		],
	},
	{
		slug: 'technology-insertion-and-mission-discovery',
		title: 'Technology Insertion and Mission Discovery',
		theme: 'Transition',
		missionProblem:
			'Emerging technology demonstrations can create excitement without producing operational adoption, transition ownership, integration paths, or scale decisions.',
		role: 'Supported modernization and emerging-technology strategy across mission systems, cloud, software, data, AI, and operational-transition contexts.',
		approach: [
			'Start with program immersion and operational problem framing before solution advocacy.',
			'Design transition pathways around owners, funding options, integration constraints, acceptance criteria, and delivery evidence.',
			'Use evidence to decide when to scale, reshape, or stop an insertion effort.',
		],
		practicalValue:
			'Turns technical access into transition discipline so promising capability has a path from discovery to funded operational use.',
		relatedEvidence: [
			{
				label: 'Technology insertion note',
				href: '/writing/2026-07-30-technology-insertion-management-system/',
			},
			{ label: 'Capability: Technology Insertion', href: '/capabilities/technology-insertion-transition/' },
		],
	},
	{
		slug: 'defense-growth-and-technical-capture',
		title: 'Defense Growth and Technical Capture',
		theme: 'Growth',
		missionProblem:
			'Capture teams can gain customer access without converting it into differentiated technical positions, executable solution architecture, and credible proposal evidence.',
		role: 'Provides solution architecture, technical capture, proposal solutioning, white-paper development, emerging-technology assessment, and strategic opportunity shaping support.',
		approach: [
			'Sense demand signals across programs, policy, budget, operational pain, industry days, and delivery evidence.',
			'Shape solution architecture around mission truth, technical feasibility, transition constraints, and partner alignment.',
			'Turn discriminators into claims that can survive proposal review and delivery execution.',
		],
		practicalValue:
			'Improves the path from opportunity identification to capture strategy, proposal architecture, and executable delivery posture.',
		relatedEvidence: [
			{
				label: 'Defense growth note',
				href: '/writing/2026-07-30-missing-operating-system-defense-growth/',
			},
			{ label: 'Capability: Technical Capture', href: '/capabilities/technical-capture-proposal-strategy/' },
		],
	},
	{
		slug: 'digital-and-mission-engineering',
		title: 'Digital and Mission Engineering',
		theme: 'Mission systems',
		missionProblem:
			'Systems engineering, digital engineering, software, data, architecture, acquisition, and operational feedback often live in separate decision loops.',
		role: 'Worked across Navy and Marine Corps contexts spanning PEO Digital, NAVAIR, mission engineering, systems engineering, cloud, software, data, and modernization.',
		approach: [
			'Frame architecture around mission threads and decision points rather than artifact production alone.',
			'Connect model-informed engineering, software delivery, data strategy, and acquisition evidence.',
			'Use integration constraints and operational feedback to keep engineering decisions tied to mission outcomes.',
		],
		practicalValue:
			'Creates a shared decision system for technical teams, mission owners, and acquisition stakeholders.',
		relatedEvidence: [
			{
				label: 'Digital engineering note',
				href: '/writing/2026-07-31-digital-engineering-not-a-department/',
			},
			{ label: 'Capability: Mission & Digital Engineering', href: '/capabilities/mission-digital-engineering/' },
		],
	},
	{
		slug: 'governed-ai-and-autonomy',
		title: 'Governed AI and Autonomy',
		theme: 'AI governance',
		missionProblem:
			'AI and autonomy can move faster than existing authority, assurance, and accountability systems, especially in contested or degraded environments.',
		role: 'Develops control-plane, continuous-assurance, trust-scope, and delegated-authority patterns for high-consequence defense AI and autonomy.',
		approach: [
			'Separate signal, trust, control, and assurance concerns so authority can be bounded and audited.',
			'Design policy gates, operator override paths, telemetry, rollback, and evidence into the architecture.',
			'Account for degraded connectivity, contested operations, and multi-agent coordination.',
		],
		practicalValue:
			'Keeps autonomy a governed mission capability instead of an isolated model, demo, or tool integration.',
		relatedEvidence: [
			{ label: 'ACP-RA', href: '/writing/acp-ra/' },
			{ label: 'CAF-RA', href: '/writing/caf-ra/' },
			{
				label: 'The Next AI Bottleneck Is Delegated Authority',
				href: '/writing/2026-04-18-the-next-ai-bottleneck-is-delegated-authority/',
			},
		],
	},
];
