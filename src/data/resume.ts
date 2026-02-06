export type ExperienceItem = {
	slug: string;
	company: string;
	title: string;
	period: string;
};

export type EducationItem = {
	slug: string;
	issuer: string;
	name: string;
	year?: string;
};

// Keep these in one place so the homepage section + dedicated pages stay in sync.
export const experience: ExperienceItem[] = [
	{ slug: 'kbr-solutions-architect-2025', company: 'KBR', title: 'Solutions Architect', period: '2025–present' },
	{ slug: 'booz-allen-solutions-architect-2024', company: 'Booz Allen Hamilton', title: 'Solutions Architect', period: '2024–2025' },
	{ slug: 'kbr-solutions-architect-2022', company: 'KBR', title: 'Solutions Architect', period: '2022–2024' },
	{ slug: 'booz-allen-solutions-architect-2019', company: 'Booz Allen Hamilton', title: 'Solutions Architect', period: '2019–2022' },
	{ slug: 'kbrwyle-cloud-architect-sre-2018', company: 'KBRwyle', title: 'Cloud Architect / Site Reliability Engineer', period: '2018–2019' },
	{ slug: 'kbrwyle-architecture-analyst-software-engineer-2018', company: 'KBRwyle', title: 'Architecture Analyst / Software Engineer', period: '2018' },
	{ slug: 'kbr-software-engineer-2015', company: 'KBR', title: 'Software Engineer', period: '2015–2018' },
	{ slug: 'fast-das-jr-rf-engineer-2015', company: 'Fast DAS', title: 'Jr. RF Engineer', period: '2015' },
	{ slug: 'kerry-group-programming-consultant-2014', company: 'Kerry Group', title: 'Programming Consultant', period: '2014' },
	{ slug: 'central-florida-health-alliance-programming-consultant-2014', company: 'Central Florida Health Alliance', title: 'Programming Consultant', period: '2014' },
];

export const education: EducationItem[] = [
	{
		slug: 'umgc-bs-cybersecurity-management-and-policy',
		issuer: 'University of Maryland Global Campus',
		name: 'Bachelor of Science — Cybersecurity Management and Policy',
		year: '2023',
	},
	{ slug: 'aws-cloud-practitioner', issuer: 'Amazon Web Services', name: 'AWS Certified Cloud Practitioner', year: '2019' },
	{ slug: 'aws-solutions-architect-associate', issuer: 'Amazon Web Services', name: 'AWS Certified Solutions Architect - Associate', year: '2019' },
	{ slug: 'hpe-ase-fortify-v1', issuer: 'HP Enterprise (HPE)', name: 'HP ASE - FORTIFY V1', year: '2016' },
	{ slug: 'scrumalliance-certified-scrummaster', issuer: 'ScrumAlliance', name: 'CERTIFIED SCRUMMASTER', year: '2016' },
	{ slug: 'college-of-southern-maryland-as-computer-science', issuer: 'College of Southern Maryland', name: 'ASSOCIATE OF SCIENCE - COMPUTER SCIENCE', year: '2013–2015' },
	{ slug: 'james-a-forest-ccna-networking-fundamentals', issuer: 'James A. Forest Career and Technology Center', name: 'CCNA Exploration: Networking Fundamentals 4.0', year: '2010–2011' },
];
