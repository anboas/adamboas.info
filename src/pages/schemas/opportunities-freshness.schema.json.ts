import type { APIRoute } from 'astro';
import { absoluteUrl } from '../../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const schema = {
		$schema: 'https://json-schema.org/draft/2020-12/schema',
		$id: absoluteUrl('/schemas/opportunities-freshness.schema.json'),
		title: 'Opportunities Freshness Metadata',
		type: 'object',
		required: ['schema_version', 'generated_at', 'sources'],
		properties: {
			schema_version: { type: 'string' },
			generated_at: { type: 'string', format: 'date-time' },
			sources: {
				type: 'object',
				required: ['sam', 'sbir'],
				properties: {
					sam: { type: 'object' },
					sbir: { type: 'object' },
				},
			},
		},
	};

	return new Response(JSON.stringify(schema, null, 2), {
		headers: { 'Content-Type': 'application/schema+json; charset=utf-8' },
	});
};
