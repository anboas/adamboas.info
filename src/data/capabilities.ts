export type CapabilityTopic = {
	slug: string;
	title: string;
	summary: string;
	description: string;
	keywords: string[];
	writingTags: string[];
	opportunityQuery: string;
};

export const capabilityTopics: CapabilityTopic[] = [
	{
		slug: 'ai-autonomy',
		title: 'AI & Trusted Autonomy',
		summary: 'Governed autonomy for high-consequence operations with policy and operator control.',
		description: 'Capability coverage for applied AI systems, autonomy guardrails, trust scopes, and mission-facing governance patterns.',
		keywords: ['ai', 'autonomy', 'agent', 'agentic', 'llm', 'frontier', 'governance', 'policy'],
		writingTags: ['ai-policy', 'autonomy', 'agents', 'governance', 'trust-scopes', 'a2a'],
		opportunityQuery: 'AI autonomy machine learning agentic',
	},
	{
		slug: 'cybersecurity',
		title: 'Cybersecurity & Zero Trust',
		summary: 'Security engineering for resilient delivery, hardening, and adversarial operations.',
		description: 'Capability coverage for zero trust, cyber posture, secure architecture, and mission-assurance-oriented defensive systems.',
		keywords: ['cyber', 'security', 'zero trust', 'rmf', 'hardening', 'defense', 'assurance'],
		writingTags: ['security', 'zero-trust', 'trust-scopes', 'mission-assurance', 'prompt-injection'],
		opportunityQuery: 'cybersecurity zero trust rmf security operations',
	},
	{
		slug: 'cloud-platforms',
		title: 'Cloud Platforms & Modernization',
		summary: 'Cloud architecture, platform engineering, and modernization at execution tempo.',
		description: 'Capability coverage for cloud migration, platform patterns, reliability engineering, and infrastructure modernization.',
		keywords: ['cloud', 'platform', 'infrastructure', 'modernization', 'aws', 'kubernetes', 'sre'],
		writingTags: ['modernization', 'delivery-systems', 'control-planes', 'reliability'],
		opportunityQuery: 'cloud infrastructure platform modernization',
	},
	{
		slug: 'devsecops-delivery',
		title: 'DevSecOps & Delivery Systems',
		summary: 'Build secure, repeatable delivery systems with measurable reliability and rollback safety.',
		description: 'Capability coverage for CI/CD, software factories, release engineering, observability, and delivery governance.',
		keywords: ['devsecops', 'cicd', 'pipeline', 'delivery', 'software factory', 'release', 'observability'],
		writingTags: ['devsecops', 'delivery-systems', 'tool-use', 'tool-supply-chain', 'reliability'],
		opportunityQuery: 'devsecops ci cd software delivery pipeline',
	},
	{
		slug: 'data-analytics',
		title: 'Data & Analytics',
		summary: 'Evidence-driven operations with traceable data pipelines and actionable analytics.',
		description: 'Capability coverage for analytics systems, telemetry, decision support, and evidence pipelines used in mission planning.',
		keywords: ['data', 'analytics', 'telemetry', 'evidence', 'insight', 'decision'],
		writingTags: ['evidence', 'evaluation', 'benchmarks', 'memory'],
		opportunityQuery: 'data analytics decision support',
	},
	{
		slug: 'proposal-capture',
		title: 'Proposal & Capture Engineering',
		summary: 'Technical capture support for RFI/RFP strategy, solution shaping, and proposal execution.',
		description: 'Capability coverage for proposal architecture, capture strategy, acquisition alignment, and response acceleration.',
		keywords: ['proposal', 'capture', 'rfp', 'rfi', 'solicitation', 'acquisition', 'industry day'],
		writingTags: ['defense', 'governance', 'control-planes', 'policy-as-code'],
		opportunityQuery: 'proposal capture rfp rfi acquisition solicitation',
	},
];

export function capabilityBySlug(slug: string) {
	return capabilityTopics.find((capability) => capability.slug === slug) ?? null;
}
