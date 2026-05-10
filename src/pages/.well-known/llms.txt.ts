import type { APIRoute } from 'astro';
import { absoluteUrl } from '../../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const body = [
		'# Canonical llms endpoint',
		`See: ${absoluteUrl('/llms.txt')}`,
		`Full: ${absoluteUrl('/llms-full.txt')}`,
	].join('\n');

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
