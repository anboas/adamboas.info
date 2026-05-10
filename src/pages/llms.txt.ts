import type { APIRoute } from 'astro';
import { absoluteUrl } from '../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const body = [
		'# Adam Boas (adamboas.com)',
		'',
		'> Public profile, writing, event intelligence, and capability mapping.',
		'',
		'## Canonical',
		`- ${absoluteUrl('/')}`,
		'',
		'## High-value pages',
		`- ${absoluteUrl('/writing/')}`,
		`- ${absoluteUrl('/profile/')}`,
		`- ${absoluteUrl('/capabilities/')}`,
		`- ${absoluteUrl('/events/')}`,
		`- ${absoluteUrl('/opportunities/')}`,
		'',
		'## Feeds and crawl assets',
		`- Sitemap: ${absoluteUrl('/sitemap-index.xml')}`,
		`- RSS: ${absoluteUrl('/rss.xml')}`,
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
