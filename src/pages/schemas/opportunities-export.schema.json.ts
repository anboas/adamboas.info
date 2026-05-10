import type { APIRoute } from 'astro';
import { absoluteUrl } from '../../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const schema = {
		$schema: 'https://json-schema.org/draft/2020-12/schema',
		$id: absoluteUrl('/schemas/opportunities-export.schema.json'),
		title: 'Opportunities Export (Combined)',
		type: 'object',
		required: ['schema_version', 'canonical', 'exports', 'sources'],
		properties: {
			schema_version: { type: 'string' },
			canonical: { type: 'string', format: 'uri' },
			exports: {
				type: 'object',
				required: ['sam', 'sam_core', 'sbir'],
				properties: {
					sam: { type: 'string', format: 'uri' },
					sam_core: { type: 'string', format: 'uri' },
					sbir: { type: 'string', format: 'uri' },
				},
			},
			sources: { type: 'object' },
		},
	};

	return new Response(JSON.stringify(schema, null, 2), {
		headers: { 'Content-Type': 'application/schema+json; charset=utf-8' },
	});
};
