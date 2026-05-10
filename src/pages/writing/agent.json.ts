import type { APIRoute } from 'astro';
import { absoluteUrl } from '../../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const payload = {
		schema_version: '1.0',
		surface: 'writing',
		canonical: absoluteUrl('/writing/'),
		agent_view: `${absoluteUrl('/writing/')}?view=agent`,
		primary_manifest: absoluteUrl('/writing/manifest.json'),
		related_endpoints: [
			absoluteUrl('/llms.txt'),
			absoluteUrl('/llms-full.txt'),
			absoluteUrl('/agents.json'),
			absoluteUrl('/changes.jsonl'),
		],
		crawl_hints: {
			refresh_hint: 'daily',
			prefer_manifest_ordering: true,
			prefer_canonical: true,
		},
	};

	return new Response(JSON.stringify(payload, null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=300, s-maxage=300',
		},
	});
};
