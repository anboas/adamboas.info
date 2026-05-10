import type { APIRoute } from 'astro';
import samOpportunitiesFeed from '../../data/radar/events-candidates-sam-opportunities.json';
import { absoluteUrl } from '../../config/site';

export const prerender = true;

type SamRaw = {
	id?: string;
	title?: string;
	opportunity_url?: string;
	ui_link?: string;
	notice_id?: string;
	notice_type?: string;
	notice_type_code?: string;
	solicitation_number?: string;
	agency_path?: string;
	posted_date?: string;
	response_deadline?: string;
	relevance_score?: number;
	navy_related?: boolean;
	resource_count?: number;
	related_links?: string[];
};

const SBIR_TOPICS_URL =
	'https://raw.githubusercontent.com/anboas/adamboas-media/main/opportunities/sbir-sttr/latest/topics.json';
const SBIR_SUMMARY_URL =
	'https://raw.githubusercontent.com/anboas/adamboas-media/main/opportunities/sbir-sttr/latest/summary.json';
const SBIR_REPORT_URL =
	'https://raw.githubusercontent.com/anboas/adamboas-media/main/opportunities/sbir-sttr/latest/report.md';

function normalizeSamRow(row: SamRaw) {
	return {
		id: String(row.id || row.notice_id || '').trim() || null,
		notice_id: String(row.notice_id || '').trim() || null,
		title: String(row.title || '').trim() || null,
		notice_type: String(row.notice_type || row.notice_type_code || '').trim() || null,
		solicitation_number: String(row.solicitation_number || '').trim() || null,
		agency_path: String(row.agency_path || '').trim() || null,
		posted_date: String(row.posted_date || '').trim() || null,
		response_deadline: String(row.response_deadline || '').trim() || null,
		relevance_score: Number.isFinite(Number(row.relevance_score)) ? Number(row.relevance_score) : null,
		navy_related: Boolean(row.navy_related),
		resource_count: Number.isFinite(Number(row.resource_count)) ? Number(row.resource_count) : 0,
		urls: {
			opportunity: String(row.opportunity_url || '').trim() || null,
			workspace: String(row.ui_link || '').trim() || null,
		},
	};
}

export const GET: APIRoute = () => {
	const samRows = (samOpportunitiesFeed as SamRaw[]).map(normalizeSamRow);
	const samRowsWithDate = samRows.filter((row) => row.posted_date);
	const lastPostedDate = samRowsWithDate
		.map((row) => row.posted_date as string)
		.sort((a, b) => Date.parse(b) - Date.parse(a))[0] ?? null;

	const payload = {
		schema_version: '1.0',
		generated_at: new Date().toISOString(),
		canonical: absoluteUrl('/opportunities/'),
		sources: {
			sam: {
				mode: 'embedded',
				count: samRows.length,
				last_posted_date: lastPostedDate,
				rows: samRows,
			},
			sbir: {
				mode: 'remote-artifact',
				topics_url: SBIR_TOPICS_URL,
				summary_url: SBIR_SUMMARY_URL,
				report_url: SBIR_REPORT_URL,
				ui_url: absoluteUrl('/opportunities/?source=sbir'),
			},
		},
	};

	return new Response(JSON.stringify(payload, null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=300, s-maxage=300',
		},
	});
};
