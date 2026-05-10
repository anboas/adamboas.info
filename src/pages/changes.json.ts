import type { APIRoute } from 'astro';
import { SITE_RELEASE_VERSION } from '../consts';
import { absoluteUrl } from '../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const nowIso = new Date().toISOString();
	const payload = {
		site: absoluteUrl('/'),
		release_version: SITE_RELEASE_VERSION,
		generated_at: nowIso,
		highlights: [
			'SEO metadata hardening and richer robots directives',
			'Expanded Open Graph share cards for core surfaces',
			'Agent discovery pack endpoints: llms-full.txt, agents.json, writing manifest',
			'GitHub Actions maintenance and workflow hardening across owned repositories',
		],
		discovery_endpoints: {
			llms: absoluteUrl('/llms.txt'),
			llms_full: absoluteUrl('/llms-full.txt'),
			agents: absoluteUrl('/agents.json'),
			writing_manifest: absoluteUrl('/writing/manifest.json'),
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
