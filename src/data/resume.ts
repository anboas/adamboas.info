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
		period: '2025 - present',
		summary:
			"Lead enterprise technology strategy and AI adoption pathways aligned to mission objectives, advising senior leadership on how emerging capabilities transition from experimentation to operational integration. Conduct strategic assessments of legacy environments and architect modernization roadmaps suitable for autonomy-enabled mission ecosystems.",
	},
	{
		slug: 'booz-allen-solutions-architect-2024',
		company: 'Booz Allen Hamilton',
		title: 'Solutions Architect',
		period: '2024 - 2025',
		summary:
			"Primary author of Department of Defense Instruction on \"Modern Software Development\" (yet to be published), shaping how AI capabilities are governed, secured, and operationalized across the DoD. Led cross-Service alignment among CIOs, DevSecOps Platforms, and Software Factories to translate modernization strategy into executable enterprise architectures.",
	},
	{
		slug: 'kbr-solutions-architect-2022',
		company: 'KBR',
		title: 'Solutions Architect',
		period: '2022 - 2024',
		summary:
			"Led IL5 cloud architecture and modernization of aviation mission systems, aligning DevSecOps practices and secure cloud integration to support scalable, cyber-resilient operations. Positioned legacy logistics platforms for transition into modern, cloud-native environments capable of supporting future AI-enabled workflows and decision-support capabilities.",
	},
	{
		slug: 'booz-allen-solutions-architect-2019',
		company: 'Booz Allen Hamilton',
		title: 'Solutions Architect',
		period: '2019 - 2022',
		summary:
			"Trusted advisor to senior Information Warfare leadership on DevSecOps, secure cloud architecture, and rapid Compile-to-Combat initiatives within IL5/IL6 environments. Drove mission system modernization strategies that balanced operational speed, accreditation rigor, and scalable delivery pipelines suitable for high-consequence environments.",
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
