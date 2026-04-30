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
];

export const allSpeakingTopicTags = Array.from(new Set(speakingEvents.flatMap((e) => e.topicTags))).sort((a, b) => a.localeCompare(b));

export function sponsorLabel(event: SpeakingEvent) {
	if (event.sponsorType === 'self') return 'Self-sponsored';
	if (event.sponsorType === 'external') return event.sponsorName ? `Sponsored by ${event.sponsorName}` : 'Sponsored engagement';
	return event.sponsorName ? `Employer-sponsored (${event.sponsorName})` : 'Employer-sponsored';
}
