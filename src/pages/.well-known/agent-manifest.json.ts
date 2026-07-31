import type { APIRoute } from 'astro';
import { absoluteUrl } from '../../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const payload = {
		name: 'Adam Boas Agent Manifest (Well-Known)',
		canonical_manifest: absoluteUrl('/agents.json'),
		discovery: {
			llms: absoluteUrl('/llms.txt'),
			llms_full: absoluteUrl('/llms-full.txt'),
			priority: absoluteUrl('/agent-priority.json'),
			integrity: absoluteUrl('/integrity.json'),
			for_agents: absoluteUrl('/for-agents/'),
			strategic_work: absoluteUrl('/strategic-work/'),
			surface_maps: [
				absoluteUrl('/writing/agent.json'),
				absoluteUrl('/events/agent.json'),
				absoluteUrl('/opportunities/agent.json'),
			],
			exports: [
				absoluteUrl('/opportunities/export.json'),
				absoluteUrl('/opportunities/export-sam.json'),
				absoluteUrl('/opportunities/export-sam-core.json'),
				absoluteUrl('/opportunities/export-sbir.json'),
			],
			metadata: [absoluteUrl('/opportunities/freshness.json'), absoluteUrl('/opportunities/lineage.json')],
			schemas: [
				absoluteUrl('/schemas/agents.schema.json'),
				absoluteUrl('/schemas/agent-priority.schema.json'),
				absoluteUrl('/schemas/changes.schema.json'),
				absoluteUrl('/schemas/opportunities-export.schema.json'),
				absoluteUrl('/schemas/opportunities-export-sam.schema.json'),
				absoluteUrl('/schemas/opportunities-export-sbir.schema.json'),
				absoluteUrl('/schemas/opportunities-freshness.schema.json'),
				absoluteUrl('/schemas/opportunities-lineage.schema.json'),
			],
		},
	};

	return new Response(JSON.stringify(payload, null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
};
