import type { APIRoute } from 'astro';
import { absoluteUrl } from '../../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const payload = {
		schema_version: '1.0',
		surface: 'opportunities',
		canonical: absoluteUrl('/opportunities/'),
		agent_view: `${absoluteUrl('/opportunities/')}?view=agent`,
		source_routes: {
			unified: absoluteUrl('/opportunities/'),
			sam: absoluteUrl('/opportunities/sam/'),
			sbir: absoluteUrl('/opportunities/sbir/'),
		},
		query_hints: {
			source_param: ['sam', 'sbir'],
			recommended_examples: [
				`${absoluteUrl('/opportunities/')}?source=sam&view=agent`,
				`${absoluteUrl('/opportunities/')}?source=sbir&view=agent`,
			],
			export_endpoints: {
				combined: absoluteUrl('/opportunities/export.json'),
				sam: absoluteUrl('/opportunities/export-sam.json'),
				sbir: absoluteUrl('/opportunities/export-sbir.json'),
			},
		},
		crawl_hints: {
			refresh_hint: 'every-4h',
			prefer_source_specific_routes: true,
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
