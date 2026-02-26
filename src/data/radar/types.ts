export type RadarStatus = 'Upcoming' | 'Projected' | 'Needs Date' | 'Past';
export type RadarSignal = 'High' | 'Medium' | 'Low';
export type RadarEffort = 'Low' | 'Medium' | 'High';
export type RadarFormat = 'In-person' | 'Hybrid' | 'Virtual';

export interface RadarSource {
	name: string;
	url: string;
	type: 'official' | 'aggregator' | 'community' | 'manual';
	lastVerified: string;
	confidence: 'High' | 'Medium' | 'Low';
	evidenceId?: string;
	evidenceHash?: string;
	snapshotDate?: string;
	checkedBy?: string;
}

export interface RadarLinks {
	official?: string;
	registration?: string;
	callForPapers?: string;
	agenda?: string;
	hotelBlock?: string;
}

export interface RadarLocation {
	city: string;
	state?: string;
	country: string;
	lat: number;
	lng: number;
	venue?: string;
}

export type RadarEngagementKind = 'Industry Day' | 'Pre-solicitation' | 'Sources Sought' | 'Vendor Outreach' | 'Special Notice';
export type RadarEngagementStatus = 'Not engaged' | 'Registered' | 'Met' | 'Follow-up sent' | 'Qualified' | 'No-go' | 'Monitor';

export interface RadarContact {
	name: string;
	role?: string;
	organization?: string;
	email?: string;
	phone?: string;
	link?: string;
}

export interface RadarEngagementTracking {
	status: RadarEngagementStatus;
	owner?: string;
	nextAction?: string;
	nextActionDate?: string;
	lastTouchDate?: string;
	notes?: string;
	contacts?: RadarContact[];
}

export interface RadarOntology {
	themes: string[];
	capabilityAreas: string[];
	missionThreads: string[];
	stakeholders: string[];
	keywords: string[];
	relatedPrograms: string[];
	decisionWindows: {
		discovery: string;
		prep: string;
		execution: string;
	};
	provenance: RadarSource[];
	links: RadarLinks;
	logistics: {
		format: RadarFormat;
		estimatedCostUsd?: { min: number; max: number };
		travelBurdenFromDc: 'Low' | 'Medium' | 'High';
	};
	acquisition?: {
		engagementKinds?: RadarEngagementKind[];
		noticeType?: string;
		agency?: string;
		solicitationNumber?: string;
		responseDueDate?: string;
		registrationDeadline?: string;
		samIntelligence?: {
			collectedAt?: string;
			postedFrom?: string;
			postedTo?: string;
			noticeTypes?: string[];
			totalMatched?: number;
			topNotices?: Array<{
				noticeId: string;
				title: string;
				noticeType: string;
				postedDate?: string;
				responseDueDate?: string;
				solicitationNumber?: string;
				agencyPath?: string;
				naicsCode?: string;
				classificationCode?: string;
				uiLink?: string;
			}>;
		};
	};
	engagement?: RadarEngagementTracking;
	notes?: string;
}

export interface RadarEvent {
	id: string;
	title: string;
	description: string;
	startDate: string | null;
	endDate?: string | null;
	branch: string;
	type: 'Conference' | 'Workshop' | 'Summit' | 'Hackathon' | 'Exercise';
	status: RadarStatus;
	signal: RadarSignal;
	effort: RadarEffort;
	location: RadarLocation;
	ontology: RadarOntology;
}

export interface RadarScoreBreakdown {
	signal: number;
	effort: number;
	status: number;
	branchFit: number;
	dateProximity: number;
	sourceConfidence: number;
	travelPenalty: number;
	metaCompleteness: number;
	total: number;
}

export interface RadarScoredEvent extends RadarEvent {
	score: RadarScoreBreakdown;
}
