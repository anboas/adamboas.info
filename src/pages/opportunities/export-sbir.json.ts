import type { APIRoute } from 'astro';
import { absoluteUrl } from '../../config/site';

export const prerender = true;

const TOPICS_URL =
	'https://raw.githubusercontent.com/anboas/adamboas-media/main/opportunities/sbir-sttr/latest/topics.json';
const SUMMARY_URL =
	'https://raw.githubusercontent.com/anboas/adamboas-media/main/opportunities/sbir-sttr/latest/summary.json';
const REPORT_URL =
	'https://raw.githubusercontent.com/anboas/adamboas-media/main/opportunities/sbir-sttr/latest/report.md';
const MANIFEST_URL =
	'https://raw.githubusercontent.com/anboas/adamboas-media/main/opportunities/sbir-sttr/latest/manifest.json';

export const GET: APIRoute = () => {
	const payload = {
		schema_version: '1.1',
		source: 'sbir',
		generated_at: new Date().toISOString(),
		canonical: absoluteUrl('/opportunities/?source=sbir'),
		mode: 'remote-artifact',
		artifacts: {
			topics_url: TOPICS_URL,
			summary_url: SUMMARY_URL,
			report_url: REPORT_URL,
			manifest_url: MANIFEST_URL,
		},
		lineage: {
			artifact_repo: 'anboas/adamboas-media',
			artifact_path: 'opportunities/sbir-sttr/latest/*',
			source_updated_at: null,
		},
		details: {
			surface_map: absoluteUrl('/opportunities/agent.json'),
			source_route: absoluteUrl('/opportunities/sbir/'),
			recommended_refresh: 'every-4h',
		},
	};

	return new Response(JSON.stringify(payload, null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=300, s-maxage=300',
		},
	});
};
