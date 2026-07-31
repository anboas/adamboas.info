import type { APIRoute } from 'astro';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { SITE_RELEASE_VERSION } from '../consts';
import { absoluteUrl } from '../config/site';

export const prerender = true;

const trackedFiles = [
	'src/pages/llms.txt.ts',
	'src/pages/llms-full.txt.ts',
	'src/pages/agents.json.ts',
	'src/pages/agent-priority.json.ts',
	'src/pages/strategic-work/index.astro',
	'src/data/strategicWork.ts',
	'src/pages/changes.json.ts',
	'src/pages/changes.jsonl.ts',
	'src/pages/integrity.json.ts',
	'src/pages/writing/manifest.json.ts',
	'src/pages/writing/agent.json.ts',
	'src/pages/events/agent.json.ts',
	'src/pages/opportunities/agent.json.ts',
	'src/pages/opportunities/export.json.ts',
	'src/pages/opportunities/export-sam.json.ts',
	'src/pages/opportunities/export-sam-core.json.ts',
	'src/pages/opportunities/export-sbir.json.ts',
	'src/pages/opportunities/freshness.json.ts',
	'src/pages/opportunities/lineage.json.ts',
	'src/pages/.well-known/agent-manifest.json.ts',
	'src/pages/.well-known/llms.txt.ts',
	'src/pages/schemas/agents.schema.json.ts',
	'src/pages/schemas/agent-priority.schema.json.ts',
	'src/pages/schemas/changes.schema.json.ts',
	'src/pages/schemas/opportunities-export.schema.json.ts',
	'src/pages/schemas/opportunities-export-sam.schema.json.ts',
	'src/pages/schemas/opportunities-export-sbir.schema.json.ts',
	'src/pages/schemas/opportunities-freshness.schema.json.ts',
	'src/pages/schemas/opportunities-lineage.schema.json.ts',
	'src/pages/for-agents/index.astro',
	'src/data/discovery-events.json',
];

async function hashFile(relativePath: string) {
	const fullPath = path.join(process.cwd(), relativePath);
	const content = await fs.readFile(fullPath);
	const digest = createHash('sha256').update(content).digest('hex');
	return { path: relativePath, sha256: digest, bytes: content.byteLength };
}

export const GET: APIRoute = async () => {
	const items = await Promise.all(trackedFiles.map(hashFile));

	const payload = {
		schema_version: '1.0',
		site: absoluteUrl('/'),
		release_version: SITE_RELEASE_VERSION,
		generated_at: new Date().toISOString(),
		tracked_source_integrity: items,
	};

	return new Response(JSON.stringify(payload, null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=300, s-maxage=300',
		},
	});
};
