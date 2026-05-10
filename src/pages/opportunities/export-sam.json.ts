import type { APIRoute } from 'astro';
import { createHash } from 'node:crypto';
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
};

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

function toCoreRow(row: ReturnType<typeof normalizeSamRow>) {
	return {
		id: row.id,
		title: row.title,
		notice_type: row.notice_type,
		agency_path: row.agency_path,
		posted_date: row.posted_date,
		response_deadline: row.response_deadline,
		relevance_score: row.relevance_score,
		navy_related: row.navy_related,
		urls: row.urls,
	};
}

export const GET: APIRoute = () => {
	const rows = (samOpportunitiesFeed as SamRaw[]).map(normalizeSamRow);
	const dated = rows.filter((row) => row.posted_date);
	const lastPostedDate = dated
		.map((row) => row.posted_date as string)
		.sort((a, b) => Date.parse(b) - Date.parse(a))[0] ?? null;

	const snapshotId = createHash('sha256').update(JSON.stringify(rows)).digest('hex');

	const payload = {
		schema_version: '1.3',
		source: 'sam',
		generated_at: new Date().toISOString(),
		canonical: absoluteUrl('/opportunities/?source=sam'),
		count: rows.length,
		returned_count: rows.length,
		last_posted_date: lastPostedDate,
		variants: {
			full: absoluteUrl('/opportunities/export-sam.json'),
			core: absoluteUrl('/opportunities/export-sam-core.json'),
		},
		lineage: {
			source_dataset_path: 'src/data/radar/events-candidates-sam-opportunities.json',
			source_updated_at: lastPostedDate,
			snapshot_id: snapshotId,
		},
		rows,
	};

	return new Response(JSON.stringify(payload, null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=300, s-maxage=300',
		},
	});
};
