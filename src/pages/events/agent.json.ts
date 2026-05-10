import type { APIRoute } from 'astro';
import { absoluteUrl } from '../../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const payload = {
		schema_version: '1.0',
		surface: 'events',
		canonical: absoluteUrl('/events/'),
		agent_view: `${absoluteUrl('/events/')}?view=agent`,
		related_routes: {
			sources: absoluteUrl('/events/sources/'),
			changes_stream: absoluteUrl('/changes.jsonl'),
			priority_map: absoluteUrl('/agent-priority.json'),
		},
		crawl_hints: {
			refresh_hint: 'every-4h',
			high_churn_surface: true,
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
