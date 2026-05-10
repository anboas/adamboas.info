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
	'src/pages/changes.json.ts',
	'src/pages/changes.jsonl.ts',
	'src/pages/writing/manifest.json.ts',
	'src/pages/for-agents/index.astro',
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
