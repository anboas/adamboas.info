export type ExperienceItem = {
	slug: string;
	company: string;
	title: string;
	period: string;
	summary: string;
};

export type EducationItem = {
	slug: string;
	issuer: string;
	name: string;
	year?: string;
};

export const CONTACT_PHONE = '(301) 904-2011';
export const RESUME_CLEARANCE = 'Top Secret';

// Keep these in one place so the homepage section + dedicated pages stay in sync.
export const experience: ExperienceItem[] = [
	{
		slug: 'sabre-systems-solutions-architect-2026',
		company: 'Sabre Systems',
		title: 'Solutions Architect',
		period: '2026 - present',
		summary:
			'Support defense growth, mission modernization, and solution architecture by connecting customer discovery, systems and software engineering, data/AI opportunities, secure adoption, capture strategy, and executable delivery paths across Sabre mission portfolios.',
	},
	{
		slug: 'kbr-solutions-architect-2025',
		company: 'KBR',
		title: 'Solutions Architect',
		period: '2025 - 2026',
		summary:
			'Supported enterprise technology strategy, solution architecture, technical capture, proposal solutioning, emerging-technology assessment, and modernization initiatives. Connected mission demand, stakeholder priorities, architecture, acquisition context, and delivery evidence so technical access could become sustained growth and operational capability.',
	},
	{
		slug: 'booz-allen-solutions-architect-2024',
		company: 'Booz Allen Hamilton',
		title: 'Solutions Architect',
		period: '2024 - 2025',
		summary:
			'Supported DoD CIO for the Information Enterprise as a solutions architect and senior technical strategist. Primary author of the forthcoming DoD Instruction on Modern Software Development, co-led the AI for Software Development Lifecycle working group, and helped coordinate software modernization, cloud, DevSecOps, policy, acquisition, and enterprise-governance stakeholders.',
	},
	{
		slug: 'kbr-solutions-architect-2022',
		company: 'KBR',
		title: 'Solutions Architect',
		period: '2022 - 2024',
		summary:
			'Supported Navy aviation mission-system modernization, IL5 cloud architecture, DevSecOps alignment, software/data modernization, and secure cloud integration. Helped connect mission engineering, systems engineering, technical architecture, and delivery teams across modernization paths for aviation and logistics environments.',
	},
	{
		slug: 'booz-allen-solutions-architect-2019',
		company: 'Booz Allen Hamilton',
		title: 'Solutions Architect',
		period: '2019 - 2022',
		summary:
			'Advised senior Information Warfare stakeholders on DevSecOps, secure cloud architecture, modernization strategy, and rapid Compile-to-Combat initiatives within IL5/IL6 environments. Authored the DevSecOps definition used in relevant DoD fundamentals guidance and helped align technical communities around delivery systems suitable for high-consequence environments.',
	},
	{
		slug: 'kbrwyle-cloud-architect-sre-2018',
		company: 'KBRwyle',
		title: 'Cloud Architect / Site Reliability Engineer',
		period: '2018 - 2019',
		summary:
			"Built and operated scalable, automated cloud environments with CI/CD, configuration management, monitoring, and recovery automation to increase reliability and deployment velocity. Instituted best practices and cost tracking to drive resilient, efficient cloud operations.",
	},
	{
		slug: 'kbrwyle-architecture-analyst-software-engineer-2018',
		company: 'KBRwyle',
		title: 'Architecture Analyst / Software Engineer',
		period: '2018',
		summary:
			"Diagnosed and remediated complex multi-host development environments (TFS, SQL, SharePoint, Fortify, custom apps) and stabilized infrastructure after a major environment transition. Managed a large ESXi/vCenter HA fleet and storage footprint, improving reliability and operational visibility.",
	},
	{
		slug: 'kbr-software-engineer-2015',
		company: 'KBR',
		title: 'Software Engineer',
		period: '2015 - 2018',
		summary:
			"Delivered software in Agile/SCRUM environments and strengthened internal application lifecycle management and security tooling across a diverse tech stack. Led Fortify SSC/SCA configuration, reduced technical debt, and shipped reusable shared libraries to accelerate delivery.",
	},
	{
		slug: 'fast-das-jr-rf-engineer-2015',
		company: 'Fast DAS',
		title: 'Jr. RF Engineer',
		period: '2015',
		summary:
			"Supported RF testing and deployment troubleshooting for in-building distributed antenna systems, improving signal performance and field reliability.",
	},
	{
		slug: 'kerry-group-programming-consultant-2014',
		company: 'Kerry Group',
		title: 'Programming Consultant',
		period: '2014',
		summary: "Delivered remote, short-cycle software consulting to unblock delivery and improve operational outcomes.",
	},
	{
		slug: 'central-florida-health-alliance-programming-consultant-2014',
		company: 'Central Florida Health Alliance',
		title: 'Programming Consultant',
		period: '2014',
		summary: "Provided remote software development consulting focused on practical fixes, speed, and stakeholder alignment.",
	},
];

export const education: EducationItem[] = [
	{
		slug: 'umgc-bs-cybersecurity-management-and-policy',
		issuer: 'University of Maryland Global Campus',
		name: 'Bachelor of Science — Cybersecurity Management and Policy',
		year: '2023',
	},
	{ slug: 'comptia-security-plus-sy0-601', issuer: 'CompTIA', name: 'Security+ (SY0-601)', year: '2023' },
	{ slug: 'aws-cloud-practitioner', issuer: 'Amazon Web Services', name: 'AWS Certified Cloud Practitioner', year: '2019' },
	{ slug: 'aws-solutions-architect-associate', issuer: 'Amazon Web Services', name: 'AWS Certified Solutions Architect – Associate', year: '2019' },
	{ slug: 'hpe-ase-fortify-v1', issuer: 'Hewlett Packard Enterprise (HPE)', name: 'HPE ASE – Fortify v1', year: '2016' },
	{ slug: 'scrumalliance-certified-scrummaster', issuer: 'Scrum Alliance', name: 'Certified ScrumMaster (CSM)', year: '2016' },
	{ slug: 'college-of-southern-maryland-as-computer-science', issuer: 'College of Southern Maryland', name: 'Associate of Science – Computer Science', year: '2015' },
	{ slug: 'james-a-forest-ccna-networking-fundamentals', issuer: 'James A. Forest Career and Technology Center', name: 'CCNA Exploration: Networking Fundamentals 4.0', year: '2011' },
];
