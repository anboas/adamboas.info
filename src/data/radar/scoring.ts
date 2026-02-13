import type { RadarEvent, RadarScoreBreakdown, RadarScoredEvent } from './types';

const signalWeight = {
	High: 34,
	Medium: 22,
	Low: 10,
} as const;

const effortWeight = {
	Low: 16,
	Medium: 9,
	High: 2,
} as const;

const statusWeight = {
	Upcoming: 14,
	Projected: 8,
	'Needs Date': 3,
	Past: 0,
} as const;

const branchWeight: Record<string, number> = {
	Joint: 12,
	Army: 8,
	'Air Force': 8,
	Navy: 8,
	USACE: 7,
	Civilian: 6,
	Industry: 5,
	Allied: 6,
};

const sourceConfidenceWeight = {
	High: 8,
	Medium: 4,
	Low: 1,
} as const;

const travelPenaltyWeight = {
	Low: 0,
	Medium: -2,
	High: -5,
} as const;

function daysUntil(dateStr: string | null) {
	if (!dateStr) return null;
	const ms = new Date(dateStr).getTime() - Date.now();
	return Math.round(ms / 86_400_000);
}

function dateProximityWeight(dateStr: string | null) {
	const d = daysUntil(dateStr);
	if (d === null) return 0;
	if (d < 0) return -4;
	if (d <= 14) return 14;
	if (d <= 30) return 10;
	if (d <= 60) return 6;
	if (d <= 120) return 3;
	return 0;
}

function metadataCompleteness(event: RadarEvent) {
	const checks = [
		Boolean(event.description?.trim()),
		Boolean(event.ontology.links.official),
		Boolean(event.ontology.links.registration || event.ontology.links.callForPapers),
		event.ontology.themes.length > 0,
		event.ontology.capabilityAreas.length > 0,
		event.ontology.provenance.length > 0,
	];
	const passing = checks.filter(Boolean).length;
	if (passing >= 6) return 7;
	if (passing >= 4) return 4;
	if (passing >= 2) return 2;
	return 0;
}

function sourceConfidence(event: RadarEvent) {
	const confidences = event.ontology.provenance.map((p) => sourceConfidenceWeight[p.confidence]);
	if (!confidences.length) return 0;
	return Math.round(confidences.reduce((acc, n) => acc + n, 0) / confidences.length);
}

export function scoreEvent(event: RadarEvent): RadarScoreBreakdown {
	const breakdown: RadarScoreBreakdown = {
		signal: signalWeight[event.signal],
		effort: effortWeight[event.effort],
		status: statusWeight[event.status],
		branchFit: branchWeight[event.branch] ?? 4,
		dateProximity: dateProximityWeight(event.startDate),
		sourceConfidence: sourceConfidence(event),
		travelPenalty: travelPenaltyWeight[event.ontology.logistics.travelBurdenFromDc],
		metaCompleteness: metadataCompleteness(event),
		total: 0,
	};

	breakdown.total = Math.max(
		1,
		Math.min(
			100,
			breakdown.signal +
				breakdown.effort +
				breakdown.status +
				breakdown.branchFit +
				breakdown.dateProximity +
				breakdown.sourceConfidence +
				breakdown.travelPenalty +
				breakdown.metaCompleteness
		)
	);

	return breakdown;
}

export function scoreEvents(events: RadarEvent[]): RadarScoredEvent[] {
	return events.map((event) => ({ ...event, score: scoreEvent(event) }));
}

export function scoringLegend() {
	return {
		signalWeight,
		effortWeight,
		statusWeight,
		branchWeight,
		sourceConfidenceWeight,
		travelPenaltyWeight,
		dateProximity: {
			past: -4,
			in14: 14,
			in30: 10,
			in60: 6,
			in120: 3,
			later: 0,
		},
		metadataCompleteness: {
			high: 7,
			medium: 4,
			low: 2,
			none: 0,
		},
	};
}
