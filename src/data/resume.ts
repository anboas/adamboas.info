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

// Keep these in one place so the homepage section + dedicated pages stay in sync.
export const experience: ExperienceItem[] = [
	{
		slug: 'kbr-solutions-architect-2025',
		company: 'KBR',
		title: 'Solutions Architect',
		period: '2025–present',
		summary:
			"Senior technical strategist driving technology direction and modernization, aligning cloud and software initiatives to mission outcomes. Leads cross-functional delivery, evaluates emerging capabilities, and translates complex technical tradeoffs into actionable plans for leadership.",
	},
	{
		slug: 'booz-allen-solutions-architect-2024',
		company: 'Booz Allen Hamilton',
		title: 'Solutions Architect',
		period: '2024–2025',
		summary:
			"Primary author and strategist for DoD-wide modern software policy and implementation plans, including modernization of CODE.mil/CLOUD.mil and the Digital Arsenal catalog. Built repeatable, AI-assisted policy analysis and led cross-enterprise alignment across CIO, Services, and senior steering groups.",
	},
	{
		slug: 'kbr-solutions-architect-2022',
		company: 'KBR',
		title: 'Solutions Architect',
		period: '2022–2024',
		summary:
			"Led AWS cloud architecture and modernization for naval aviation lifecycle management (AvPLM), improving scalability, security posture, and team cloud competence. Drove security-first optimization with AWS/DNA Engineering and authored training and technical strategy to accelerate DevSecOps adoption.",
	},
	{
		slug: 'booz-allen-solutions-architect-2019',
		company: 'Booz Allen Hamilton',
		title: 'Solutions Architect',
		period: '2019–2022',
		summary:
			"Trusted advisor and solution architect for DoD/Navy cloud modernization and DevSecOps initiatives, supporting dozens of teams and applications with migration strategy, cost/security tradeoffs, and execution guidance. Led onboarding/outreach for software factory capabilities and authored modernization and training materials that bridged leadership intent to technical delivery.",
	},
	{
		slug: 'kbrwyle-cloud-architect-sre-2018',
		company: 'KBRwyle',
		title: 'Cloud Architect / Site Reliability Engineer',
		period: '2018–2019',
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
		period: '2015–2018',
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
	{ slug: 'aws-cloud-practitioner', issuer: 'Amazon Web Services', name: 'AWS Certified Cloud Practitioner', year: '2019' },
	{ slug: 'aws-solutions-architect-associate', issuer: 'Amazon Web Services', name: 'AWS Certified Solutions Architect – Associate', year: '2019' },
	{ slug: 'hpe-ase-fortify-v1', issuer: 'Hewlett Packard Enterprise (HPE)', name: 'HPE ASE – Fortify v1', year: '2016' },
	{ slug: 'scrumalliance-certified-scrummaster', issuer: 'Scrum Alliance', name: 'Certified ScrumMaster (CSM)', year: '2016' },
	{ slug: 'college-of-southern-maryland-as-computer-science', issuer: 'College of Southern Maryland', name: 'Associate of Science – Computer Science', year: '2015' },
	{ slug: 'james-a-forest-ccna-networking-fundamentals', issuer: 'James A. Forest Career and Technology Center', name: 'CCNA Exploration: Networking Fundamentals 4.0', year: '2011' },
];
