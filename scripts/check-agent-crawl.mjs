#!/usr/bin/env node

const base = process.env.SITE_BASE || 'http://127.0.0.1:4321';

function assert(condition, message) {
	if (!condition) throw new Error(message);
}

async function getJson(path) {
	const url = new URL(path, base).toString();
	const res = await fetch(url);
	if (!res.ok) throw new Error(`${path} returned ${res.status}`);
	return res.json();
}

function asPath(url) {
	try {
		return new URL(url).pathname;
	} catch {
		return url;
	}
}

async function run() {
	const wk = await getJson('/.well-known/agent-manifest.json');
	assert(typeof wk.canonical_manifest === 'string', 'well-known missing canonical_manifest');

	const agentsPath = asPath(wk.canonical_manifest);
	const agents = await getJson(agentsPath);
	assert(Array.isArray(agents.preferred_ingestion_order), 'agents missing preferred_ingestion_order');

	const priorityPath = asPath(
		agents.preferred_ingestion_order.find((u) => String(u).includes('/agent-priority.json')) || '/agent-priority.json',
	);
	const priority = await getJson(priorityPath);
	assert(Array.isArray(priority.ingestion_tiers) && priority.ingestion_tiers.length > 0, 'priority tiers missing');

	const tieredEndpoints = new Set(
		priority.ingestion_tiers.flatMap((t) => (Array.isArray(t.endpoints) ? t.endpoints : [])),
	);

	const mustReach = [
		'/writing/agent.json',
		'/events/agent.json',
		'/opportunities/agent.json',
		'/opportunities/export.json',
		'/opportunities/export-sam.json',
		'/opportunities/export-sam-core.json',
		'/opportunities/export-sbir.json',
		'/opportunities/freshness.json',
		'/opportunities/lineage.json',
		'/schemas/agents.schema.json',
		'/schemas/agent-priority.schema.json',
		'/schemas/changes.schema.json',
		'/schemas/opportunities-export.schema.json',
		'/schemas/opportunities-export-sam.schema.json',
		'/schemas/opportunities-export-sbir.schema.json',
		'/schemas/opportunities-freshness.schema.json',
		'/schemas/opportunities-lineage.schema.json',
	];

	for (const path of mustReach) {
		const inPriority = [...tieredEndpoints].some((u) => String(u).includes(path));
		assert(inPriority, `priority map missing endpoint: ${path}`);
		await getJson(path);
		console.log(`ok crawl ${path}`);
	}

	const combined = await getJson('/opportunities/export.json');
	assert(
		combined.exports?.sam && combined.exports?.sam_core && combined.exports?.sbir,
		'combined export missing per-source links',
	);
	await getJson(asPath(combined.exports.sam));
	await getJson(asPath(combined.exports.sam_core));
	await getJson(asPath(combined.exports.sbir));
	console.log('ok crawl opportunities combined -> per-source exports');

	console.log('agent-crawl-check passed');
}

run().catch((error) => {
	console.error(`agent-crawl-check failed: ${error.message}`);
	process.exit(1);
});
