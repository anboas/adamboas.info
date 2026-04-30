export type SpeakingSponsorType = 'employer' | 'external' | 'self';

export type SpeakingEvent = {
	slug: string;
	title: string;
	eventName: string;
	eventUrl: string;
	eventDateRange: string;
	sessionDateTime: string;
	stage: string;
	track?: string;
	role: string;
	speakerTitle?: string;
	speakerOrganization?: string;
	sponsorType: SpeakingSponsorType;
	sponsorName?: string;
	topicTags: string[];
	summary: string;
	sourceUrl: string;
};

export const speakingEvents: SpeakingEvent[] = [
	{
		slug: 'modern-day-marine-2026-mbse',
		title: 'Model-Based Systems Engineering: Accelerating system design through model-based methods',
		eventName: 'Modern Day Marine 2026',
		eventUrl: 'https://marinemilitaryexpos.com/session-speakers/',
		eventDateRange: 'Apr 28-30, 2026',
		sessionDateTime: 'Tue, Apr 28, 2026 · 1:40 PM-2:10 PM ET',
		stage: 'Acquisition Stage',
		track: 'Industry',
		role: 'Speaker',
		speakerTitle: 'Solutions Architect',
		speakerOrganization: 'KBR',
		sponsorType: 'employer',
		sponsorName: 'KBR',
		topicTags: ['MBSE', 'Systems Engineering', 'Acquisition', 'Rapid Prototyping', 'COTS'],
		summary:
			'MBSE framed as a speed enabler for rapid-prototyping programs, using architecture baselines and model-driven decision support to reduce integration and sustainment risk as capabilities transition into operations.',
		sourceUrl: 'https://marinemilitaryexpos.com/session-speakers/',
	},
	{
		slug: 'don-redhat-pax-river-2024-partner-lunch-panel',
		title: 'Partner Lunch Panel Featuring AWS, KBR, Confluent and Colossal',
		eventName: 'DON Red Hat PAX River Tech Day',
		eventUrl: 'https://do.dlt.com/DONRedHatQ12024PAXRiverLandingPage-342414_TDSynnexPublicSector.html',
		eventDateRange: 'Mar 28, 2024',
		sessionDateTime: 'Thu, Mar 28, 2024 · 12:00 PM-1:00 PM ET',
		stage: 'Partner Lunch Panel',
		track: 'Panel Discussion',
		role: 'Panelist (KBR)',
		speakerTitle: 'KBR participant',
		speakerOrganization: 'KBR',
		sponsorType: 'employer',
		sponsorName: 'KBR',
		topicTags: ['Cloud Migration', 'Software Modernization', 'Value Realization', 'Enterprise Cloud', 'Platform Delivery'],
		summary:
			'Contributed cloud and software expertise from the KBR perspective, focused on how organizations realize measurable value during cloud migration and software modernization programs.',
		sourceUrl: 'https://do.dlt.com/DONRedHatQ12024PAXRiverLandingPage-342414_TDSynnexPublicSector.html',
	},
	{
		slug: 'navalx-scrum-for-leaders-2022-agile-cyber-software',
		title: 'Agile Leadership in Cybersecurity and Software Development',
		eventName: 'NavalX Center for Adaptive Warfighting Scrum for Leaders',
		eventUrl: 'https://blackpearl.navy.mil/',
		eventDateRange: 'Jun 9, 2022',
		sessionDateTime: 'Thu, Jun 9, 2022 · exact session time not publicly listed',
		stage: 'Guest Speaker Session',
		track: 'Agile Leadership',
		role: 'Guest Speaker',
		speakerTitle: 'Outreach, Onboarding, and Planning Lead',
		speakerOrganization: 'Black Pearl (Booz Allen Hamilton support contractor to PEO Digital PAS Software Practice & Automation)',
		sponsorType: 'employer',
		sponsorName: 'Booz Allen Hamilton',
		topicTags: ['Agile Leadership', 'Cybersecurity', 'Software Development', 'DevSecOps', 'Outreach', 'Onboarding', 'Planning', 'Black Pearl', 'PEO Digital'],
		summary:
			'Invited as a guest speaker while supporting PEO Digital, Platform Application Services, Software Practice and Automation at Black Pearl. Focused on agile leadership patterns for cyber and software teams, including onboarding pipelines, outreach-driven adoption, and planning rhythms that support mission-paced DevSecOps delivery.',
		sourceUrl: 'https://blackpearl.navy.mil/',
	},

	{
		slug: 'opnav-n7-mynavyhr-cybersecurity-offsite-c2c24-2020',
		title: 'OPNAV N7 MyNavy HR Cybersecurity Off-Site',
		eventName: 'OPNAV N7 MyNavy HR Cybersecurity Off-Site',
		eventUrl: 'https://www.navy.mil/DesktopModules/ArticleCS/Print.aspx?PortalId=1&ModuleId=2652&Article=2959448',
		eventDateRange: '2020 (exact date not publicly listed)',
		sessionDateTime: '2020 · exact session time not publicly listed',
		stage: 'Opening Presentation',
		track: 'Cybersecurity Leadership',
		role: 'Opening Presenter',
		speakerTitle: 'Opening presenter on Compile-to-Combat in 24 hours (C2C24)',
		speakerOrganization: 'Booz Allen Hamilton support contractor to PEO Digital PAS Software Practice & Automation',
		sponsorType: 'employer',
		sponsorName: 'Booz Allen Hamilton',
		topicTags: ['Compile-to-Combat', 'C2C24', 'MyNavy HR', 'OPNAV N7', 'Cybersecurity', 'Software Development', 'Agile Leadership', 'DevSecOps'],
		summary:
			'Opened for RDML Danelle Barrett by laying the foundation for Compile-to-Combat in 24 hours (C2C24), framing its purpose and operational value for mission-paced cybersecurity and software delivery. Session context aligned with MyNavy HR cyber modernization priorities and agile leadership execution.',
		sourceUrl: 'https://www.navy.mil/DesktopModules/ArticleCS/Print.aspx?PortalId=1&ModuleId=2652&Article=2959448',
	},
];

export const allSpeakingTopicTags = Array.from(new Set(speakingEvents.flatMap((e) => e.topicTags))).sort((a, b) => a.localeCompare(b));

export function sponsorLabel(event: SpeakingEvent) {
	if (event.sponsorType === 'self') return 'Self-sponsored';
	if (event.sponsorType === 'external') return event.sponsorName ? `Sponsored by ${event.sponsorName}` : 'Sponsored engagement';
	return event.sponsorName ? `Employer-sponsored (${event.sponsorName})` : 'Employer-sponsored';
}
