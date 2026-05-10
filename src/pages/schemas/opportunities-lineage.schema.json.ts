import type { APIRoute } from 'astro';
import { absoluteUrl } from '../../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const schema = {
		$schema: 'https://json-schema.org/draft/2020-12/schema',
		$id: absoluteUrl('/schemas/opportunities-lineage.schema.json'),
		title: 'Opportunities Lineage Metadata',
		type: 'object',
		required: ['schema_version', 'lineage'],
		properties: {
			schema_version: { type: 'string' },
			lineage: {
				type: 'object',
				required: ['sam', 'sbir'],
			},
		},
	};

	return new Response(JSON.stringify(schema, null, 2), {
		headers: { 'Content-Type': 'application/schema+json; charset=utf-8' },
	});
};
