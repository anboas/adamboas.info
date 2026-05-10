import type { APIRoute } from 'astro';
import { SITE_RELEASE_VERSION } from '../consts';
import { absoluteUrl } from '../config/site';
import discoveryEvents from '../data/discovery-events.json';

export const prerender = true;

type ChangeEvent = {
	id: string;
	ts: string;
	type: 'release' | 'seo' | 'agentic' | 'ci';
	release: string;
	summary: string;
	links?: string[];
};

export const GET: APIRoute = () => {
	const events = (discoveryEvents as ChangeEvent[]).slice().sort((a, b) => Date.parse(b.ts) - Date.parse(a.ts));
	const latest = events[0];

	const payload = {
		site: absoluteUrl('/'),
		release_version: SITE_RELEASE_VERSION,
		generated_at: latest?.ts ?? new Date().toISOString(),
		highlights: events.slice(0, 5).map((event) => event.summary),
		event_log: {
			format: 'jsonl',
			url: absoluteUrl('/changes.jsonl'),
			count: events.length,
			latest_event_id: latest?.id ?? null,
			latest_event_ts: latest?.ts ?? null,
		},
		discovery_endpoints: {
			llms: absoluteUrl('/llms.txt'),
			llms_full: absoluteUrl('/llms-full.txt'),
			agents: absoluteUrl('/agents.json'),
			priority: absoluteUrl('/agent-priority.json'),
			writing_manifest: absoluteUrl('/writing/manifest.json'),
			writing_surface: absoluteUrl('/writing/agent.json'),
			events_surface: absoluteUrl('/events/agent.json'),
			opportunities_surface: absoluteUrl('/opportunities/agent.json'),
			opportunities_export: absoluteUrl('/opportunities/export.json'),
			rss: absoluteUrl('/rss.xml'),
			sitemap: absoluteUrl('/sitemap-index.xml'),
		},
	};

	return new Response(JSON.stringify(payload, null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=300, s-maxage=300',
		},
	});
};
