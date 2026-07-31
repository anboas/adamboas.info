import type { APIRoute } from 'astro';
import { absoluteUrl } from '../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const body = [
		'# Adam Boas (adamboas.com)',
		'',
		'> Public profile, selected strategic work, writing, event intelligence, and capability mapping.',
		'',
		'## Canonical',
		`- ${absoluteUrl('/')}`,
		'',
		'## High-value pages',
		`- ${absoluteUrl('/strategic-work/')}`,
		`- ${absoluteUrl('/writing/')}`,
		`- ${absoluteUrl('/profile/')}`,
		`- ${absoluteUrl('/capabilities/')}`,
		`- ${absoluteUrl('/events/')}`,
		`- ${absoluteUrl('/opportunities/')}`,
		'',
		'## Feeds and crawl assets',
		`- Sitemap: ${absoluteUrl('/sitemap-index.xml')}`,
		`- RSS: ${absoluteUrl('/rss.xml')}`,
		`- Agent manifest: ${absoluteUrl('/agents.json')}`,
		`- Writing manifest: ${absoluteUrl('/writing/manifest.json')}`,
		`- Changes stream: ${absoluteUrl('/changes.jsonl')}`,
		`- Integrity: ${absoluteUrl('/integrity.json')}`,
		`- Agent priority: ${absoluteUrl('/agent-priority.json')}`,
		`- Full map: ${absoluteUrl('/llms-full.txt')}`,
		'',
		'## Notes',
		'- Primary authored content is under /writing/.',
		'- Some operational pages may be noindex by design while still publicly accessible.',
	].join('\n');

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
