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
			surface_maps: [
				absoluteUrl('/writing/agent.json'),
				absoluteUrl('/events/agent.json'),
				absoluteUrl('/opportunities/agent.json'),
			],
		},
	};

	return new Response(JSON.stringify(payload, null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
};
