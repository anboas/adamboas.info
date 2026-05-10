import type { APIRoute } from 'astro';
import { SITE_RELEASE_VERSION } from '../consts';
import { absoluteUrl } from '../config/site';

export const prerender = true;

type ChangeEvent = {
	ts: string;
	type: 'release' | 'seo' | 'agentic' | 'ci';
	release: string;
	summary: string;
	links?: string[];
};

function toJsonl(events: ChangeEvent[]) {
	return `${events.map((event) => JSON.stringify(event)).join('\n')}\n`;
}

export const GET: APIRoute = () => {
	const nowIso = new Date().toISOString();
	const events: ChangeEvent[] = [
		{
			ts: nowIso,
			type: 'release',
			release: SITE_RELEASE_VERSION,
			summary: 'Current site release marker',
			links: [absoluteUrl('/changes/'), absoluteUrl('/changes.json')],
		},
		{
			ts: nowIso,
			type: 'agentic',
			release: SITE_RELEASE_VERSION,
			summary: 'Agent discovery pack published (llms-full, agents manifest, writing manifest, discovery hub)',
			links: [
				absoluteUrl('/for-agents/'),
				absoluteUrl('/llms.txt'),
				absoluteUrl('/llms-full.txt'),
				absoluteUrl('/agents.json'),
				absoluteUrl('/writing/manifest.json'),
			],
		},
		{
			ts: nowIso,
			type: 'seo',
			release: SITE_RELEASE_VERSION,
			summary: 'Expanded OG card coverage and source-specific opportunities social routes',
			links: [absoluteUrl('/opportunities/sam/'), absoluteUrl('/opportunities/sbir/')],
		},
	];

	return new Response(toJsonl(events), {
		headers: {
			'Content-Type': 'application/x-ndjson; charset=utf-8',
			'Cache-Control': 'public, max-age=300, s-maxage=300',
		},
	});
};
