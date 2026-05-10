import type { APIRoute } from 'astro';
import { absoluteUrl } from '../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const body = [
		'# Adam Boas - LLM Full Discovery Map',
		'',
		`Canonical: ${absoluteUrl('/')}`,
		`Generated: ${new Date().toISOString()}`,
		'',
		'## Primary surfaces (indexable)',
		`- Home: ${absoluteUrl('/')}`,
		`- Writing index: ${absoluteUrl('/writing/')}`,
		`- Writing tag index: ${absoluteUrl('/writing/tags/')}`,
		`- Profile: ${absoluteUrl('/profile/')}`,
		`- Capabilities: ${absoluteUrl('/capabilities/')}`,
		`- Speaking: ${absoluteUrl('/speaking/')}`,
		'',
		'## Operational surfaces (some may be noindex by design)',
		`- Events: ${absoluteUrl('/events/')}`,
		`- Opportunities: ${absoluteUrl('/opportunities/')}`,
		`- Event sources: ${absoluteUrl('/events/sources/')}`,
		`- Status: ${absoluteUrl('/status/')}`,
		`- Changes: ${absoluteUrl('/changes/')}`,
		'',
		'## Machine endpoints',
		`- llms.txt: ${absoluteUrl('/llms.txt')}`,
		`- llms-full.txt: ${absoluteUrl('/llms-full.txt')}`,
		`- agents.json: ${absoluteUrl('/agents.json')}`,
		`- changes.json: ${absoluteUrl('/changes.json')}`,
		`- changes.jsonl: ${absoluteUrl('/changes.jsonl')}`,
		`- writing manifest: ${absoluteUrl('/writing/manifest.json')}`,
		`- writing surface map: ${absoluteUrl('/writing/agent.json')}`,
		`- events surface map: ${absoluteUrl('/events/agent.json')}`,
		`- opportunities surface map: ${absoluteUrl('/opportunities/agent.json')}`,
		`- opportunities export: ${absoluteUrl('/opportunities/export.json')}`,
		`- opportunities export (sam): ${absoluteUrl('/opportunities/export-sam.json')}`,
		`- opportunities export (sam core): ${absoluteUrl('/opportunities/export-sam-core.json')}`,
		`- opportunities export (sbir): ${absoluteUrl('/opportunities/export-sbir.json')}`,
		`- opportunities freshness: ${absoluteUrl('/opportunities/freshness.json')}`,
		`- integrity manifest: ${absoluteUrl('/integrity.json')}`,
		`- agent priority: ${absoluteUrl('/agent-priority.json')}`,
		`- well-known manifest: ${absoluteUrl('/.well-known/agent-manifest.json')}`,
		`- rss: ${absoluteUrl('/rss.xml')}`,
		`- sitemap: ${absoluteUrl('/sitemap-index.xml')}`,
		`- schema (agents): ${absoluteUrl('/schemas/agents.schema.json')}`,
		`- schema (priority): ${absoluteUrl('/schemas/agent-priority.schema.json')}`,
		`- schema (changes): ${absoluteUrl('/schemas/changes.schema.json')}`,
		`- schema (opportunities export): ${absoluteUrl('/schemas/opportunities-export.schema.json')}`,
		`- schema (opportunities export sam): ${absoluteUrl('/schemas/opportunities-export-sam.schema.json')}`,
		`- schema (opportunities export sbir): ${absoluteUrl('/schemas/opportunities-export-sbir.schema.json')}`,
		`- schema (opportunities freshness): ${absoluteUrl('/schemas/opportunities-freshness.schema.json')}`,
		'',
		'## Crawl policy notes',
		'- Prefer canonical URLs and sitemap-index ordering.',
		'- Prioritize /writing/ and detail pages for authored material.',
		'- Treat /events/ and /opportunities/ as high-churn intelligence surfaces.',
		'- Use `?view=agent` on page URLs for low-noise extraction mode when needed.',
		'- Respect noindex directives where present.',
	].join('\n');

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
