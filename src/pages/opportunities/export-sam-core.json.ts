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
	agency_path?: string;
	posted_date?: string;
	response_deadline?: string;
	relevance_score?: number;
	navy_related?: boolean;
};

function normalizeCoreRow(row: SamRaw) {
	return {
		id: String(row.id || row.notice_id || '').trim() || null,
		title: String(row.title || '').trim() || null,
		notice_type: String(row.notice_type || row.notice_type_code || '').trim() || null,
		agency_path: String(row.agency_path || '').trim() || null,
		posted_date: String(row.posted_date || '').trim() || null,
		response_deadline: String(row.response_deadline || '').trim() || null,
		relevance_score: Number.isFinite(Number(row.relevance_score)) ? Number(row.relevance_score) : null,
		navy_related: Boolean(row.navy_related),
		urls: {
			opportunity: String(row.opportunity_url || '').trim() || null,
			workspace: String(row.ui_link || '').trim() || null,
		},
	};
}

export const GET: APIRoute = () => {
	const rows = (samOpportunitiesFeed as SamRaw[]).map(normalizeCoreRow);
	const payload = {
		schema_version: '1.0',
		source: 'sam',
		profile: 'core',
		generated_at: new Date().toISOString(),
		canonical: absoluteUrl('/opportunities/?source=sam'),
		count: rows.length,
		rows,
	};

	return new Response(JSON.stringify(payload, null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=300, s-maxage=300',
		},
	});
};
