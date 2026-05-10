import type { APIRoute } from 'astro';
import { absoluteUrl } from '../../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const schema = {
		$schema: 'https://json-schema.org/draft/2020-12/schema',
		$id: absoluteUrl('/schemas/opportunities-export-sam.schema.json'),
		title: 'Opportunities Export (SAM)',
		type: 'object',
		required: ['schema_version', 'source', 'count', 'returned_count', 'rows', 'variants', 'lineage'],
		properties: {
			schema_version: { type: 'string' },
			source: { const: 'sam' },
			count: { type: 'number' },
			returned_count: { type: 'number' },
			rows: { type: 'array' },
			query_support: { type: 'object' },
			lineage: { type: 'object' },
		},
	};

	return new Response(JSON.stringify(schema, null, 2), {
		headers: { 'Content-Type': 'application/schema+json; charset=utf-8' },
	});
};
