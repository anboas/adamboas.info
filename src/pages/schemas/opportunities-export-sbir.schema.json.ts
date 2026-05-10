import type { APIRoute } from 'astro';
import { absoluteUrl } from '../../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const schema = {
		$schema: 'https://json-schema.org/draft/2020-12/schema',
		$id: absoluteUrl('/schemas/opportunities-export-sbir.schema.json'),
		title: 'Opportunities Export (SBIR)',
		type: 'object',
		required: ['schema_version', 'source', 'mode', 'artifacts', 'lineage'],
		properties: {
			schema_version: { type: 'string' },
			source: { const: 'sbir' },
			mode: { const: 'remote-artifact' },
			artifacts: { type: 'object' },
			lineage: { type: 'object' },
		},
	};

	return new Response(JSON.stringify(schema, null, 2), {
		headers: { 'Content-Type': 'application/schema+json; charset=utf-8' },
	});
};
