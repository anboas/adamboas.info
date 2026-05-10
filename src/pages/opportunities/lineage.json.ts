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
	agency_path?: string;
	posted_date?: string;
	response_deadline?: string;
	relevance_score?: number;
	navy_related?: boolean;
};

const SBIR_MANIFEST_URL =
	'https://raw.githubusercontent.com/anboas/adamboas-media/main/opportunities/sbir-sttr/latest/manifest.json';

function normalizeSamFull(row: SamRaw) {
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

function normalizeSamCore(row: ReturnType<typeof normalizeSamFull>) {
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
	const fullRows = (samOpportunitiesFeed as SamRaw[]).map(normalizeSamFull);
	const coreRows = fullRows.map(normalizeSamCore);

	const payload = {
		schema_version: '1.0',
		generated_at: new Date().toISOString(),
		canonical: absoluteUrl('/opportunities/'),
		lineage: {
			sam: {
				source_dataset_path: 'src/data/radar/events-candidates-sam-opportunities.json',
				full_snapshot_id: createHash('sha256').update(JSON.stringify(fullRows)).digest('hex'),
				core_snapshot_id: createHash('sha256').update(JSON.stringify(coreRows)).digest('hex'),
				export_full: absoluteUrl('/opportunities/export-sam.json'),
				export_core: absoluteUrl('/opportunities/export-sam-core.json'),
			},
			sbir: {
				manifest_url: SBIR_MANIFEST_URL,
				export: absoluteUrl('/opportunities/export-sbir.json'),
			},
		},
		related: {
			combined_export: absoluteUrl('/opportunities/export.json'),
			freshness: absoluteUrl('/opportunities/freshness.json'),
		},
	};

	return new Response(JSON.stringify(payload, null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=300, s-maxage=300',
		},
	});
};
