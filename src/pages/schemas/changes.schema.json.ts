import type { APIRoute } from 'astro';
import { absoluteUrl } from '../../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const schema = {
		$schema: 'https://json-schema.org/draft/2020-12/schema',
		$id: absoluteUrl('/schemas/changes.schema.json'),
		title: 'Changes Snapshot',
		type: 'object',
		required: ['release_version', 'event_log', 'discovery_endpoints'],
		properties: {
			release_version: { type: 'string' },
			event_log: {
				type: 'object',
				required: ['format', 'url', 'count', 'latest_event_id', 'latest_event_ts'],
			},
			discovery_endpoints: { type: 'object' },
		},
	};

	return new Response(JSON.stringify(schema, null, 2), {
		headers: { 'Content-Type': 'application/schema+json; charset=utf-8' },
	});
};
