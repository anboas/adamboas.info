import type { APIRoute } from 'astro';
import { SITE_RELEASE_VERSION } from '../consts';
import { absoluteUrl } from '../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const payload = {
		schema_version: '1.0',
		name: 'Adam Boas Public Site Agent Manifest',
		site: absoluteUrl('/'),
		release_version: SITE_RELEASE_VERSION,
		generated_at: new Date().toISOString(),
		discovery: {
			start: absoluteUrl('/for-agents/'),
			llms: absoluteUrl('/llms.txt'),
			llms_full: absoluteUrl('/llms-full.txt'),
			sitemap: absoluteUrl('/sitemap-index.xml'),
			rss: absoluteUrl('/rss.xml'),
		},
		capabilities: [
			'profile-intel',
			'writing-corpus',
			'event-intelligence',
			'opportunity-intelligence',
			'capability-mapping',
		],
		preferred_ingestion_order: [
			absoluteUrl('/llms.txt'),
			absoluteUrl('/agent-priority.json'),
			absoluteUrl('/writing/manifest.json'),
			absoluteUrl('/writing/agent.json'),
			absoluteUrl('/events/agent.json'),
			absoluteUrl('/opportunities/agent.json'),
			absoluteUrl('/opportunities/export.json'),
			absoluteUrl('/opportunities/export-sam.json'),
			absoluteUrl('/opportunities/export-sbir.json'),
			absoluteUrl('/writing/'),
			absoluteUrl('/capabilities/'),
			absoluteUrl('/events/'),
			absoluteUrl('/opportunities/'),
			absoluteUrl('/changes.json'),
		],
		resources: [
			{ id: 'writing-manifest', type: 'manifest', url: absoluteUrl('/writing/manifest.json') },
			{ id: 'writing-surface-map', type: 'surface-map', url: absoluteUrl('/writing/agent.json') },
			{ id: 'events-surface-map', type: 'surface-map', url: absoluteUrl('/events/agent.json') },
			{ id: 'opportunities-surface-map', type: 'surface-map', url: absoluteUrl('/opportunities/agent.json') },
			{ id: 'opportunities-export', type: 'export', url: absoluteUrl('/opportunities/export.json') },
			{ id: 'opportunities-export-sam', type: 'export', url: absoluteUrl('/opportunities/export-sam.json') },
			{ id: 'opportunities-export-sbir', type: 'export', url: absoluteUrl('/opportunities/export-sbir.json') },
			{ id: 'changes-json', type: 'changelog', url: absoluteUrl('/changes.json') },
			{ id: 'changes-jsonl', type: 'stream', url: absoluteUrl('/changes.jsonl') },
			{ id: 'events', type: 'surface', url: absoluteUrl('/events/') },
			{ id: 'opportunities', type: 'surface', url: absoluteUrl('/opportunities/') },
			{ id: 'integrity', type: 'integrity', url: absoluteUrl('/integrity.json') },
			{ id: 'priority', type: 'priority', url: absoluteUrl('/agent-priority.json') },
			{ id: 'schema-agents', type: 'schema', url: absoluteUrl('/schemas/agents.schema.json') },
			{ id: 'schema-priority', type: 'schema', url: absoluteUrl('/schemas/agent-priority.schema.json') },
			{ id: 'schema-changes', type: 'schema', url: absoluteUrl('/schemas/changes.schema.json') },
			{ id: 'schema-opportunities-export', type: 'schema', url: absoluteUrl('/schemas/opportunities-export.schema.json') },
		],
		agent_view_query: {
			param: 'view',
			value: 'agent',
			example: `${absoluteUrl('/writing/')}?view=agent`,
		},
		trust_and_policy: {
			respect_noindex: true,
			prefer_canonical: true,
			content_license: absoluteUrl('/content-license/'),
		},
	};

	return new Response(JSON.stringify(payload, null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
};
