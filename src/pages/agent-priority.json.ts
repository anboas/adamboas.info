import type { APIRoute } from 'astro';
import { absoluteUrl } from '../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const payload = {
		schema_version: '1.0',
		generated_at: new Date().toISOString(),
		ingestion_tiers: [
			{
				tier: 1,
				reason: 'Core authored corpus and discovery manifests',
				endpoints: [
					absoluteUrl('/llms.txt'),
					absoluteUrl('/llms-full.txt'),
					absoluteUrl('/agents.json'),
					absoluteUrl('/writing/manifest.json'),
					absoluteUrl('/writing/agent.json'),
					absoluteUrl('/events/agent.json'),
					absoluteUrl('/opportunities/agent.json'),
					absoluteUrl('/opportunities/export.json'),
					absoluteUrl('/opportunities/export-sam.json'),
					absoluteUrl('/opportunities/export-sbir.json'),
				],
				refresh_hint: 'hourly',
			},
			{
				tier: 2,
				reason: 'High-value authored and profile surfaces',
				endpoints: [
					absoluteUrl('/writing/'),
					absoluteUrl('/profile/'),
					absoluteUrl('/capabilities/'),
				],
				refresh_hint: 'daily',
			},
			{
				tier: 3,
				reason: 'Operational intelligence surfaces',
				endpoints: [
					absoluteUrl('/events/'),
					absoluteUrl('/opportunities/'),
					absoluteUrl('/changes.jsonl'),
				],
				refresh_hint: 'every-4h',
			},
		],
		crawler_hints: {
			prefer_canonical: true,
			respect_noindex: true,
			agent_view_query: 'view=agent',
		},
	};

	return new Response(JSON.stringify(payload, null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=300, s-maxage=300',
		},
	});
};
