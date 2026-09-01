export type CapabilityTopic = {
	slug: string;
	title: string;
	summary: string;
	description: string;
	valueProposition: string;
	activities: string[];
	evidence: string[];
	links: { label: string; href: string }[];
	keywords: string[];
	writingTags: string[];
	opportunityQuery: string;
};

export const capabilityTopics: CapabilityTopic[] = [
	{
		slug: 'defense-technology-strategy',
		title: 'Defense Technology Strategy',
		summary: 'Turn mission, policy, acquisition, and technical signals into executable modernization and growth choices.',
		description:
			'Capability coverage for enterprise defense technology strategy, opportunity sensing, modernization roadmaps, and executive decision support.',
		valueProposition:
			'Translate fragmented mission demand and technology options into defensible strategies that can be funded, captured, delivered, and scaled.',
		activities: [
			'Opportunity sensing and demand framing',
			'Technology portfolio assessment',
			'Executive roadmaps and decision briefs',
			'Strategy-to-solution translation',
		],
		evidence: [
			'Sabre and KBR enterprise solution architecture and emerging-technology assessment',
			'DoD CIO software modernization and policy support',
			'Public writing on control planes, policy modernization, and delegated authority',
		],
		links: [
			{ label: 'Selected strategic work', href: '/strategic-work/' },
			{ label: 'Profile evidence', href: '/profile/' },
			{ label: 'Opportunity intelligence', href: '/opportunities/' },
		],
		keywords: ['strategy', 'technology', 'modernization', 'mission', 'acquisition', 'capture', 'portfolio', 'roadmap'],
		writingTags: ['defense', 'modernization', 'governance', 'policy-as-code', 'control-planes'],
		opportunityQuery: 'technology strategy modernization acquisition mission systems',
	},
	{
		slug: 'mission-digital-engineering',
		title: 'Mission & Digital Engineering',
		summary: 'Connect systems engineering, software, data, architecture, and mission threads around operational decisions.',
		description:
			'Capability coverage for mission engineering, digital engineering, enterprise architecture, MBSE-aligned thinking, and systems/software integration.',
		valueProposition:
			'Make engineering artifacts useful to mission, acquisition, and delivery decisions instead of leaving models and software in separate lanes.',
		activities: [
			'Mission-thread and stakeholder mapping',
			'Enterprise and solution architecture',
			'Systems/software integration framing',
			'Model-informed technical review support',
		],
		evidence: [
			'Navy aviation mission-system modernization experience',
			'Cloud, software, data, and systems integration across Navy and Marine Corps environments',
			'Mission-thread framing across systems engineering, software, data, and acquisition decisions',
		],
		links: [
			{ label: 'Selected strategic work', href: '/strategic-work/#digital-and-mission-engineering' },
			{ label: 'Profile', href: '/profile/' },
		],
		keywords: ['mission engineering', 'digital engineering', 'systems engineering', 'mbse', 'architecture', 'integration'],
		writingTags: ['modernization', 'systems-engineering', 'digital-engineering', 'architecture'],
		opportunityQuery: 'digital engineering mission engineering systems engineering MBSE architecture',
	},
	{
		slug: 'software-modernization-devsecops',
		title: 'Software Modernization & DevSecOps',
		summary: 'Build policy-aligned software delivery systems that improve speed, security, reliability, and governance.',
		description:
			'Capability coverage for software modernization, DevSecOps, software factories, cloud platforms, CI/CD, reliability engineering, and delivery governance.',
		valueProposition:
			'Move modernization from slogans and tooling into repeatable delivery systems with observable evidence and practical governance.',
		activities: [
			'Modernization roadmaps and architecture',
			'DevSecOps and software-factory patterns',
			'CI/CD, observability, rollback, and SRE practices',
			'Policy-to-implementation translation',
		],
		evidence: [
			'Author of the DevSecOps definition used in relevant DoD fundamentals guidance',
			'DoD CIO software policy and software modernization support',
			'Published paper: From PDFs to Pull Requests',
		],
		links: [
			{ label: 'From PDFs to Pull Requests', href: '/writing/code-as-policy/' },
			{ label: 'Selected strategic work', href: '/strategic-work/#dod-software-policy-and-enterprise-governance' },
		],
		keywords: ['devsecops', 'software', 'modernization', 'cloud', 'platform', 'pipeline', 'delivery', 'sre', 'cicd'],
		writingTags: ['devsecops', 'delivery-systems', 'modernization', 'policy-as-code', 'reliability'],
		opportunityQuery: 'software modernization devsecops software factory cloud platform',
	},
	{
		slug: 'data-ai-governed-autonomy',
		title: 'Data, AI & Governed Autonomy',
		summary: 'Apply AI and autonomy through bounded authority, evidence, policy gates, and mission-aware control planes.',
		description:
			'Capability coverage for AI governance, data-enabled decision systems, delegated autonomy, continuous assurance, and control-plane architecture.',
		valueProposition:
			'Keep AI and autonomy useful in high-consequence settings by designing the authority, evidence, and control layers around the mission.',
		activities: [
			'AI governance and assurance models',
			'Agent control-plane and trust-scope design',
			'Data strategy and evidence pipelines',
			'Contested/degraded operations planning',
		],
		evidence: [
			'Published Agent Control Plane Reference Architecture',
			'Published Continuous Assurance Framework Reference Architecture',
			'Co-leadership of the AI for Software Development Lifecycle working group',
		],
		links: [
			{ label: 'ACP-RA', href: '/writing/acp-ra/' },
			{ label: 'CAF-RA', href: '/writing/caf-ra/' },
			{ label: 'Selected strategic work', href: '/strategic-work/#governed-ai-and-autonomy' },
		],
		keywords: ['ai', 'autonomy', 'agent', 'agentic', 'llm', 'data', 'governance', 'assurance', 'control plane'],
		writingTags: ['ai-policy', 'autonomy', 'agents', 'governance', 'trust-scopes', 'control-plane', 'evidence'],
		opportunityQuery: 'AI autonomy data governance machine learning agentic',
	},
	{
		slug: 'technology-insertion-transition',
		title: 'Technology Insertion & Transition',
		summary: 'Move promising capabilities from demos and pilots into governed, funded, operational pathways.',
		description:
			'Capability coverage for technology insertion, mission discovery, transition planning, acquisition pathways, integration constraints, and scale/stop decisions.',
		valueProposition:
			'Turn technical access and demonstrations into accountable transition systems with owners, evidence, funding paths, and integration discipline.',
		activities: [
			'Program immersion and operational problem framing',
			'Transition pathway design',
			'Acceptance criteria and evidence plans',
			'Scale, stop, and portfolio reuse decisions',
		],
		evidence: [
			'Sabre/KBR and Navy modernization work across mission systems, cloud, software, and data',
			'Transition framing across owners, funding paths, integration constraints, and acceptance criteria',
			'Public writing on delegated authority, assurance, and control planes',
		],
		links: [
			{ label: 'Selected strategic work', href: '/strategic-work/#technology-insertion-and-mission-discovery' },
			{ label: 'Writing', href: '/writing/' },
		],
		keywords: ['technology insertion', 'transition', 'pilot', 'prototype', 'demo', 'integration', 'funding', 'acquisition'],
		writingTags: ['modernization', 'transition', 'evidence', 'control-planes', 'delivery-systems'],
		opportunityQuery: 'technology insertion transition prototype pilot acquisition integration',
	},
	{
		slug: 'technical-capture-proposal-strategy',
		title: 'Technical Capture & Proposal Strategy',
		summary: 'Shape opportunities, technical solutions, discriminators, and proposal narratives around mission truth.',
		description:
			'Capability coverage for technical capture, solution shaping, white papers, RFI/RFP strategy, proposal architecture, partner alignment, and win-theme development.',
		valueProposition:
			'Convert customer access and technical insight into credible solution architecture, evidence-backed discriminators, and executable proposal positions.',
		activities: [
			'Capture solution architecture',
			'White-paper and RFI/RFP response strategy',
			'Win themes and technical discriminators',
			'Partner and stakeholder alignment',
		],
		evidence: [
			'Current Sabre and prior KBR support for capture, solution architecture, technical proposals, and emerging-technology assessment',
			'Opportunity intelligence surfaces maintained on this site',
			'Public writing on policy modernization, delegated authority, and control-plane architecture',
		],
		links: [
			{ label: 'Selected strategic work', href: '/strategic-work/#defense-growth-and-technical-capture' },
			{ label: 'Opportunities', href: '/opportunities/' },
			{ label: 'Contact', href: '/contact/' },
		],
		keywords: ['proposal', 'capture', 'rfp', 'rfi', 'solicitation', 'acquisition', 'white paper', 'win theme'],
		writingTags: ['defense', 'governance', 'control-planes', 'policy-as-code', 'acquisition'],
		opportunityQuery: 'proposal capture rfp rfi acquisition solicitation white paper',
	},
	{
		slug: 'enterprise-policy-governance',
		title: 'Enterprise Policy & Governance',
		summary: 'Connect senior policy, acquisition, cyber, software, cloud, and AI governance to execution realities.',
		description:
			'Capability coverage for enterprise policy, governance, senior stakeholder alignment, software modernization policy, AI4SDLC governance, and implementation patterns.',
		valueProposition:
			'Make enterprise guidance executable by tying policy language to architecture, controls, acquisition decisions, and delivery evidence.',
		activities: [
			'Policy drafting and technical interpretation',
			'Governance model design',
			'Stakeholder coordination across government and industry',
			'Execution playbooks and implementation guardrails',
		],
		evidence: [
			'Previous support to DoD CIO for the Information Enterprise',
			'Primary authorship of forthcoming DoD modern software development instruction',
			'AI4SDLC working-group co-leadership and DevSecOps guidance contributions',
		],
		links: [
			{ label: 'From PDFs to Pull Requests', href: '/writing/code-as-policy/' },
			{ label: 'Selected strategic work', href: '/strategic-work/#dod-software-policy-and-enterprise-governance' },
			{ label: 'Profile', href: '/profile/' },
		],
		keywords: ['policy', 'governance', 'enterprise', 'devsecops', 'software', 'cloud', 'AI4SDLC', 'stakeholder'],
		writingTags: ['governance', 'policy-as-code', 'devsecops', 'modernization', 'security'],
		opportunityQuery: 'enterprise policy governance software modernization devsecops AI governance',
	},
];

export function capabilityBySlug(slug: string) {
	return capabilityTopics.find((capability) => capability.slug === slug) ?? null;
}
