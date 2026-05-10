import type { APIRoute } from 'astro';
import { createHash } from 'node:crypto';
import samOpportunitiesFeed from '../../data/radar/events-candidates-sam-opportunities.json';
import { absoluteUrl } from '../../config/site';

export const prerender = true;

type SamRaw = {
	posted_date?: string;
	response_deadline?: string;
};

const SBIR_MANIFEST_URL =
	'https://raw.githubusercontent.com/anboas/adamboas-media/main/opportunities/sbir-sttr/latest/manifest.json';

function latestDate(values: (string | undefined)[]) {
	const cleaned = values.filter(Boolean) as string[];
	if (!cleaned.length) return null;
	return cleaned.sort((a, b) => Date.parse(b) - Date.parse(a))[0] ?? null;
}

export const GET: APIRoute = () => {
	const samRows = samOpportunitiesFeed as SamRaw[];
	const samLastPosted = latestDate(samRows.map((row) => row.posted_date));
	const samLastDeadline = latestDate(samRows.map((row) => row.response_deadline));

	const samSnapshotId = createHash('sha256').update(JSON.stringify(samRows)).digest('hex');

	const payload = {
		schema_version: '1.1',
		generated_at: new Date().toISOString(),
		canonical: absoluteUrl('/opportunities/'),
		sources: {
			sam: {
				count: samRows.length,
				last_posted_date: samLastPosted,
				last_response_deadline: samLastDeadline,
				snapshot_id: samSnapshotId,
				export_full: absoluteUrl('/opportunities/export-sam.json'),
				export_core: absoluteUrl('/opportunities/export-sam-core.json'),
			},
			sbir: {
				manifest_url: SBIR_MANIFEST_URL,
				export: absoluteUrl('/opportunities/export-sbir.json'),
				source_updated_at: null,
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
