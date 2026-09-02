import type { APIRoute } from 'astro';
import { absoluteUrl } from '../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const body = [
		'User-agent: *',
		'Allow: /',
		'Disallow: /research/',
		'',
		`Host: ${new URL(absoluteUrl('/')).host}`,
		`Sitemap: ${absoluteUrl('/sitemap-index.xml')}`,
		`# Agent discovery: ${absoluteUrl('/llms.txt')}`,
		`# Agent discovery full: ${absoluteUrl('/llms-full.txt')}`,
		`# Agent manifest: ${absoluteUrl('/agents.json')}`,
		`# Agent priority: ${absoluteUrl('/agent-priority.json')}`,
	].join('\n');

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
