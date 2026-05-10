#!/usr/bin/env node

const base = process.env.SITE_BASE || 'http://127.0.0.1:4321';

const checks = [
	{ path: '/llms.txt', type: 'text', mustContain: ['/agents.json', '/writing/manifest.json'] },
	{ path: '/llms-full.txt', type: 'text', mustContain: ['/agent-priority.json', '/integrity.json'] },
	{ path: '/agents.json', type: 'json', requiredKeys: ['schema_version', 'resources', 'preferred_ingestion_order'] },
	{ path: '/agent-priority.json', type: 'json', requiredKeys: ['schema_version', 'ingestion_tiers', 'crawler_hints'] },
	{ path: '/changes.json', type: 'json', requiredKeys: ['release_version', 'discovery_endpoints'] },
	{ path: '/changes.jsonl', type: 'jsonl', minLines: 1 },
	{ path: '/writing/manifest.json', type: 'json', requiredKeys: ['schema_version', 'entries', 'count'] },
	{ path: '/integrity.json', type: 'json', requiredKeys: ['schema_version', 'tracked_source_integrity'] },
	{ path: '/for-agents/', type: 'html', mustContain: ['For Agents', 'Discovery Endpoints'] },
	{ path: '/.well-known/agent-manifest.json', type: 'json', requiredKeys: ['canonical_manifest', 'discovery'] },
	{ path: '/.well-known/llms.txt', type: 'text', mustContain: ['/llms.txt'] },
];

function assert(condition, message) {
	if (!condition) throw new Error(message);
}

async function get(path) {
	const url = new URL(path, base).toString();
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error(`${path} returned ${res.status}`);
	}
	return { url, text: await res.text(), contentType: res.headers.get('content-type') || '' };
}

async function run() {
	for (const check of checks) {
		const { text, contentType } = await get(check.path);

		if (check.type === 'json') {
			assert(contentType.includes('application/json'), `${check.path} not JSON content-type: ${contentType}`);
			const data = JSON.parse(text);
			for (const key of check.requiredKeys || []) {
				assert(Object.hasOwn(data, key), `${check.path} missing key: ${key}`);
			}
		}

		if (check.type === 'jsonl') {
			const lines = text
				.split('\n')
				.map((line) => line.trim())
				.filter(Boolean);
			assert(lines.length >= (check.minLines || 1), `${check.path} has no JSONL rows`);
			for (const [idx, line] of lines.entries()) {
				try {
					JSON.parse(line);
				} catch {
					throw new Error(`${check.path} invalid JSON on line ${idx + 1}`);
				}
			}
		}

		if (check.type === 'text' || check.type === 'html') {
			for (const token of check.mustContain || []) {
				assert(text.includes(token), `${check.path} missing expected token: ${token}`);
			}
		}

		console.log(`ok ${check.path}`);
	}
}

run().catch((error) => {
	console.error(`agent-endpoint-check failed: ${error.message}`);
	process.exit(1);
});
