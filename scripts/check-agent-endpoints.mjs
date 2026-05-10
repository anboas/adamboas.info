#!/usr/bin/env node

const base = process.env.SITE_BASE || 'http://127.0.0.1:4321';

const checks = [
	{ path: '/llms.txt', type: 'text', mustContain: ['/agents.json', '/writing/manifest.json'] },
	{ path: '/llms-full.txt', type: 'text', mustContain: ['/agent-priority.json', '/integrity.json', '/writing/agent.json', '/opportunities/export.json', '/opportunities/export-sam.json', '/opportunities/export-sam-core.json', '/opportunities/export-sbir.json'] },
	{ path: '/agents.json', type: 'json', requiredKeys: ['schema_version', 'resources', 'preferred_ingestion_order'], validate: validateAgents },
	{ path: '/agent-priority.json', type: 'json', requiredKeys: ['schema_version', 'ingestion_tiers', 'crawler_hints'], validate: validatePriority },
	{ path: '/changes.json', type: 'json', requiredKeys: ['release_version', 'event_log', 'discovery_endpoints'], validate: validateChanges },
	{ path: '/changes.jsonl', type: 'jsonl', minLines: 1, validate: validateChangesJsonl },
	{ path: '/writing/manifest.json', type: 'json', requiredKeys: ['schema_version', 'entries', 'count'] },
	{ path: '/writing/agent.json', type: 'json', requiredKeys: ['surface', 'primary_manifest', 'crawl_hints'], validate: validateWritingSurface },
	{ path: '/events/agent.json', type: 'json', requiredKeys: ['surface', 'related_routes', 'crawl_hints'], validate: validateEventsSurface },
	{ path: '/opportunities/agent.json', type: 'json', requiredKeys: ['surface', 'source_routes', 'crawl_hints'], validate: validateOpportunitiesSurface },
	{ path: '/opportunities/export.json', type: 'json', requiredKeys: ['schema_version', 'sources', 'exports'], validate: validateOpportunitiesExport },
	{ path: '/opportunities/export-sam.json', type: 'json', requiredKeys: ['schema_version', 'source', 'count', 'rows', 'variants'], validate: validateOpportunitiesExportSam },
	{ path: '/opportunities/export-sam-core.json', type: 'json', requiredKeys: ['schema_version', 'source', 'profile', 'rows'], validate: validateOpportunitiesExportSamCore },
	{ path: '/opportunities/export-sbir.json', type: 'json', requiredKeys: ['schema_version', 'source', 'mode', 'artifacts'], validate: validateOpportunitiesExportSbir },
	{ path: '/opportunities/freshness.json', type: 'json', requiredKeys: ['schema_version', 'sources'], validate: validateOpportunitiesFreshness },
	{ path: '/integrity.json', type: 'json', requiredKeys: ['schema_version', 'tracked_source_integrity'], validate: validateIntegrity },
	{ path: '/for-agents/', type: 'html', mustContain: ['For Agents', 'Discovery Endpoints'] },
	{ path: '/.well-known/agent-manifest.json', type: 'json', requiredKeys: ['canonical_manifest', 'discovery'], validate: validateWellKnownManifest },
	{ path: '/.well-known/llms.txt', type: 'text', mustContain: ['/llms.txt'] },
	{ path: '/schemas/agents.schema.json', type: 'json', requiredKeys: ['$schema', '$id', 'type'], validate: validateSchemaDoc },
	{ path: '/schemas/agent-priority.schema.json', type: 'json', requiredKeys: ['$schema', '$id', 'type'], validate: validateSchemaDoc },
	{ path: '/schemas/changes.schema.json', type: 'json', requiredKeys: ['$schema', '$id', 'type'], validate: validateSchemaDoc },
	{ path: '/schemas/opportunities-export.schema.json', type: 'json', requiredKeys: ['$schema', '$id', 'type'], validate: validateSchemaDoc },
	{ path: '/schemas/opportunities-export-sam.schema.json', type: 'json', requiredKeys: ['$schema', '$id', 'type'], validate: validateSchemaDoc },
	{ path: '/schemas/opportunities-export-sbir.schema.json', type: 'json', requiredKeys: ['$schema', '$id', 'type'], validate: validateSchemaDoc },
];

function assert(condition, message) {
	if (!condition) throw new Error(message);
}

function isAbsUrl(value) {
	if (typeof value !== 'string') return false;
	return /^https?:\/\//.test(value);
}

function assertAbsUrl(value, label) {
	assert(isAbsUrl(value), `${label} must be an absolute URL`);
}

function assertHasEndpointWithPath(urls, path, label) {
	assert(Array.isArray(urls), `${label} must be an array`);
	assert(urls.some((url) => typeof url === 'string' && url.includes(path)), `${label} missing endpoint containing: ${path}`);
}

function validateAgents(data) {
	assert(data.schema_version === '1.0', '/agents.json schema_version must be 1.0');
	assert(Array.isArray(data.preferred_ingestion_order), '/agents.json preferred_ingestion_order must be array');
	assertHasEndpointWithPath(data.preferred_ingestion_order, '/agent-priority.json', '/agents.json preferred_ingestion_order');
	assertHasEndpointWithPath(data.preferred_ingestion_order, '/writing/agent.json', '/agents.json preferred_ingestion_order');
	assertHasEndpointWithPath(data.preferred_ingestion_order, '/events/agent.json', '/agents.json preferred_ingestion_order');
	assertHasEndpointWithPath(data.preferred_ingestion_order, '/opportunities/agent.json', '/agents.json preferred_ingestion_order');
	assertHasEndpointWithPath(data.preferred_ingestion_order, '/opportunities/export.json', '/agents.json preferred_ingestion_order');
	assertHasEndpointWithPath(data.preferred_ingestion_order, '/opportunities/export-sam.json', '/agents.json preferred_ingestion_order');
	assertHasEndpointWithPath(data.preferred_ingestion_order, '/opportunities/export-sam-core.json', '/agents.json preferred_ingestion_order');
	assertHasEndpointWithPath(data.preferred_ingestion_order, '/opportunities/export-sbir.json', '/agents.json preferred_ingestion_order');
	assertHasEndpointWithPath(data.preferred_ingestion_order, '/opportunities/freshness.json', '/agents.json preferred_ingestion_order');

	assert(Array.isArray(data.resources) && data.resources.length >= 5, '/agents.json resources must be non-empty array');
	const ids = new Set();
	for (const resource of data.resources) {
		assert(typeof resource.id === 'string' && resource.id.length > 0, '/agents.json resource.id missing');
		assert(!ids.has(resource.id), `/agents.json duplicate resource id: ${resource.id}`);
		ids.add(resource.id);
		assert(typeof resource.type === 'string' && resource.type.length > 0, `/agents.json resource type missing: ${resource.id}`);
		assertAbsUrl(resource.url, `/agents.json resource url (${resource.id})`);
	}
}

function validatePriority(data) {
	assert(Array.isArray(data.ingestion_tiers) && data.ingestion_tiers.length >= 3, '/agent-priority.json ingestion_tiers invalid');
	let lastTier = 0;
	for (const tier of data.ingestion_tiers) {
		assert(typeof tier.tier === 'number', '/agent-priority.json tier.tier must be number');
		assert(tier.tier > lastTier, '/agent-priority.json tiers must be strictly ascending');
		lastTier = tier.tier;
		assert(Array.isArray(tier.endpoints) && tier.endpoints.length > 0, `/agent-priority tier ${tier.tier} endpoints missing`);
		for (const endpoint of tier.endpoints) assertAbsUrl(endpoint, `/agent-priority tier ${tier.tier} endpoint`);
		assert(typeof tier.refresh_hint === 'string' && tier.refresh_hint.length > 0, `/agent-priority tier ${tier.tier} refresh_hint missing`);
	}
	assert(typeof data.crawler_hints?.agent_view_query === 'string', '/agent-priority crawler_hints.agent_view_query missing');
}

function validateChanges(data) {
	assert(data.event_log?.format === 'jsonl', '/changes.json event_log.format must be jsonl');
	assertAbsUrl(data.event_log?.url, '/changes.json event_log.url');
	assert(typeof data.event_log?.count === 'number' && data.event_log.count >= 1, '/changes.json event_log.count invalid');
	assert(typeof data.event_log?.latest_event_id === 'string' && data.event_log.latest_event_id.length > 0, '/changes.json latest_event_id missing');
	assert(typeof data.event_log?.latest_event_ts === 'string' && data.event_log.latest_event_ts.length > 0, '/changes.json latest_event_ts missing');

	const requiredEndpoints = [
		'llms',
		'llms_full',
		'agents',
		'priority',
		'writing_manifest',
		'writing_surface',
		'events_surface',
		'opportunities_surface',
		'opportunities_export',
		'opportunities_export_sam',
		'opportunities_export_sam_core',
		'opportunities_export_sbir',
		'opportunities_freshness',
		'schema_agents',
		'schema_priority',
		'schema_changes',
		'schema_opportunities_export',
		'schema_opportunities_export_sam',
		'schema_opportunities_export_sbir',
	];
	for (const key of requiredEndpoints) {
		assertAbsUrl(data.discovery_endpoints?.[key], `/changes.json discovery_endpoints.${key}`);
	}
}

function validateChangesJsonl(lines) {
	const ids = new Set();
	let lastTs = 0;
	for (const [idx, event] of lines.entries()) {
		const prefix = `/changes.jsonl line ${idx + 1}`;
		assert(typeof event.id === 'string' && event.id.length > 0, `${prefix} missing id`);
		assert(!ids.has(event.id), `${prefix} duplicate id: ${event.id}`);
		ids.add(event.id);
		assert(['release', 'seo', 'agentic', 'ci'].includes(event.type), `${prefix} invalid type: ${event.type}`);
		assert(typeof event.summary === 'string' && event.summary.length > 0, `${prefix} missing summary`);
		const ts = Date.parse(event.ts);
		assert(Number.isFinite(ts), `${prefix} invalid ts`);
		assert(ts >= lastTs, `${prefix} timestamps must be ascending`);
		lastTs = ts;
		if (event.links) {
			assert(Array.isArray(event.links), `${prefix} links must be array when present`);
			for (const link of event.links) assertAbsUrl(link, `${prefix} link`);
		}
	}
}

function validateWritingSurface(data) {
	assert(data.surface === 'writing', '/writing/agent.json surface must be writing');
	assertAbsUrl(data.primary_manifest, '/writing/agent.json primary_manifest');
	assertHasEndpointWithPath(data.related_endpoints, '/changes.jsonl', '/writing/agent.json related_endpoints');
	assert(data.crawl_hints?.refresh_hint === 'daily', '/writing/agent.json refresh_hint should be daily');
}

function validateEventsSurface(data) {
	assert(data.surface === 'events', '/events/agent.json surface must be events');
	assertAbsUrl(data.related_routes?.sources, '/events/agent.json related_routes.sources');
	assertAbsUrl(data.related_routes?.changes_stream, '/events/agent.json related_routes.changes_stream');
	assert(data.crawl_hints?.refresh_hint === 'every-4h', '/events/agent.json refresh_hint should be every-4h');
}

function validateOpportunitiesSurface(data) {
	assert(data.surface === 'opportunities', '/opportunities/agent.json surface must be opportunities');
	assertAbsUrl(data.source_routes?.unified, '/opportunities/agent.json source_routes.unified');
	assertAbsUrl(data.source_routes?.sam, '/opportunities/agent.json source_routes.sam');
	assertAbsUrl(data.source_routes?.sbir, '/opportunities/agent.json source_routes.sbir');
	assert(Array.isArray(data.query_hints?.source_param), '/opportunities/agent.json query_hints.source_param must be array');
	assert(data.query_hints.source_param.includes('sam'), '/opportunities/agent.json missing sam source param');
	assert(data.query_hints.source_param.includes('sbir'), '/opportunities/agent.json missing sbir source param');
}

function validateOpportunitiesExport(data) {
	assert(data.schema_version === '1.2', '/opportunities/export.json schema_version must be 1.2');
	assertAbsUrl(data.canonical, '/opportunities/export.json canonical');
	assertAbsUrl(data.exports?.sam, '/opportunities/export.json exports.sam');
	assertAbsUrl(data.exports?.sam_core, '/opportunities/export.json exports.sam_core');
	assertAbsUrl(data.exports?.sbir, '/opportunities/export.json exports.sbir');
	assert(data.sources?.sam?.mode === 'embedded', '/opportunities/export.json sources.sam.mode should be embedded');
	assert(typeof data.sources?.sam?.count === 'number' && data.sources.sam.count >= 1, '/opportunities/export.json sam count invalid');
	assert(Array.isArray(data.sources?.sam?.rows), '/opportunities/export.json sam rows must be array');
	assert(data.sources.sam.rows.length === data.sources.sam.count, '/opportunities/export.json sam count mismatch');
	assert(typeof data.sources?.sbir?.mode === 'string' && data.sources.sbir.mode.length > 0, '/opportunities/export.json sbir mode missing');
	assertAbsUrl(data.sources?.sbir?.topics_url, '/opportunities/export.json sbir topics_url');
	assertAbsUrl(data.sources?.sbir?.summary_url, '/opportunities/export.json sbir summary_url');
	assertAbsUrl(data.sources?.sbir?.report_url, '/opportunities/export.json sbir report_url');
	assertAbsUrl(data.sources?.sbir?.ui_url, '/opportunities/export.json sbir ui_url');
}

function validateOpportunitiesExportSam(data) {
	assert(data.schema_version === '1.2', '/opportunities/export-sam.json schema_version must be 1.2');
	assert(data.source === 'sam', '/opportunities/export-sam.json source must be sam');
	assertAbsUrl(data.canonical, '/opportunities/export-sam.json canonical');
	assert(typeof data.count === 'number' && data.count >= 1, '/opportunities/export-sam.json count invalid');
	assert(typeof data.returned_count === 'number' && data.returned_count >= 1, '/opportunities/export-sam.json returned_count invalid');
	assert(Array.isArray(data.rows), '/opportunities/export-sam.json rows must be array');
	assert(data.rows.length === data.returned_count, '/opportunities/export-sam.json returned_count mismatch');
	assert(data.returned_count <= data.count, '/opportunities/export-sam.json returned_count cannot exceed count');
	assertAbsUrl(data.variants?.full, '/opportunities/export-sam.json variants.full');
	assertAbsUrl(data.variants?.core, '/opportunities/export-sam.json variants.core');
	assert(typeof data.lineage?.source_dataset_path === 'string', '/opportunities/export-sam.json lineage.source_dataset_path missing');
}

function validateOpportunitiesExportSamCore(data) {
	assert(data.schema_version === '1.0', '/opportunities/export-sam-core.json schema_version must be 1.0');
	assert(data.source === 'sam', '/opportunities/export-sam-core.json source must be sam');
	assert(data.profile === 'core', '/opportunities/export-sam-core.json profile must be core');
	assert(Array.isArray(data.rows), '/opportunities/export-sam-core.json rows must be array');
	if (data.rows.length > 0) {
		const row = data.rows[0];
		assert(Object.hasOwn(row, 'id') && Object.hasOwn(row, 'title'), '/opportunities/export-sam-core.json row missing required fields');
		assert(!Object.hasOwn(row, 'solicitation_number'), '/opportunities/export-sam-core.json row should omit solicitation_number');
	}
}

function validateOpportunitiesFreshness(data) {
	assert(data.schema_version === '1.0', '/opportunities/freshness.json schema_version must be 1.0');
	assert(typeof data.sources?.sam?.count === 'number', '/opportunities/freshness.json sources.sam.count missing');
	assertAbsUrl(data.sources?.sam?.export_full, '/opportunities/freshness.json sam export_full');
	assertAbsUrl(data.sources?.sam?.export_core, '/opportunities/freshness.json sam export_core');
	assertAbsUrl(data.sources?.sbir?.manifest_url, '/opportunities/freshness.json sbir manifest_url');
	assertAbsUrl(data.sources?.sbir?.export, '/opportunities/freshness.json sbir export');
}

function validateOpportunitiesExportSbir(data) {
	assert(data.schema_version === '1.1', '/opportunities/export-sbir.json schema_version must be 1.1');
	assert(data.source === 'sbir', '/opportunities/export-sbir.json source must be sbir');
	assert(data.mode === 'remote-artifact', '/opportunities/export-sbir.json mode must be remote-artifact');
	assertAbsUrl(data.canonical, '/opportunities/export-sbir.json canonical');
	assertAbsUrl(data.artifacts?.topics_url, '/opportunities/export-sbir.json artifacts.topics_url');
	assertAbsUrl(data.artifacts?.summary_url, '/opportunities/export-sbir.json artifacts.summary_url');
	assertAbsUrl(data.artifacts?.report_url, '/opportunities/export-sbir.json artifacts.report_url');
	assertAbsUrl(data.artifacts?.manifest_url, '/opportunities/export-sbir.json artifacts.manifest_url');
	assert(typeof data.lineage?.artifact_repo === 'string' && data.lineage.artifact_repo.length > 0, '/opportunities/export-sbir.json lineage.artifact_repo missing');
	assert(typeof data.lineage?.artifact_path === 'string' && data.lineage.artifact_path.length > 0, '/opportunities/export-sbir.json lineage.artifact_path missing');
}

function validateWellKnownManifest(data) {
	assertAbsUrl(data.canonical_manifest, '/.well-known/agent-manifest.json canonical_manifest');
	assertAbsUrl(data.discovery?.llms, '/.well-known/agent-manifest.json discovery.llms');
	assertAbsUrl(data.discovery?.llms_full, '/.well-known/agent-manifest.json discovery.llms_full');
	assert(Array.isArray(data.discovery?.surface_maps), '/.well-known/agent-manifest.json discovery.surface_maps must be array');
	assert(data.discovery.surface_maps.length >= 3, '/.well-known/agent-manifest.json discovery.surface_maps expected >= 3');
	for (const mapUrl of data.discovery.surface_maps) assertAbsUrl(mapUrl, '/.well-known/agent-manifest.json discovery.surface_maps entry');
	assert(Array.isArray(data.discovery?.exports), '/.well-known/agent-manifest.json discovery.exports must be array');
	for (const exportUrl of data.discovery.exports) assertAbsUrl(exportUrl, '/.well-known/agent-manifest.json discovery.exports entry');
	assertHasEndpointWithPath(data.discovery.exports, '/opportunities/export.json', '/.well-known/agent-manifest.json discovery.exports');
	assertHasEndpointWithPath(data.discovery.exports, '/opportunities/export-sam.json', '/.well-known/agent-manifest.json discovery.exports');
	assertHasEndpointWithPath(data.discovery.exports, '/opportunities/export-sam-core.json', '/.well-known/agent-manifest.json discovery.exports');
	assertHasEndpointWithPath(data.discovery.exports, '/opportunities/export-sbir.json', '/.well-known/agent-manifest.json discovery.exports');
	assert(Array.isArray(data.discovery?.metadata), '/.well-known/agent-manifest.json discovery.metadata must be array');
	for (const metadataUrl of data.discovery.metadata) assertAbsUrl(metadataUrl, '/.well-known/agent-manifest.json discovery.metadata entry');
	assertHasEndpointWithPath(data.discovery.metadata, '/opportunities/freshness.json', '/.well-known/agent-manifest.json discovery.metadata');
	assert(Array.isArray(data.discovery?.schemas), '/.well-known/agent-manifest.json discovery.schemas must be array');
	for (const schemaUrl of data.discovery.schemas) assertAbsUrl(schemaUrl, '/.well-known/agent-manifest.json discovery.schemas entry');
	assertHasEndpointWithPath(data.discovery.schemas, '/schemas/agents.schema.json', '/.well-known/agent-manifest.json discovery.schemas');
	assertHasEndpointWithPath(data.discovery.schemas, '/schemas/agent-priority.schema.json', '/.well-known/agent-manifest.json discovery.schemas');
	assertHasEndpointWithPath(data.discovery.schemas, '/schemas/changes.schema.json', '/.well-known/agent-manifest.json discovery.schemas');
	assertHasEndpointWithPath(data.discovery.schemas, '/schemas/opportunities-export.schema.json', '/.well-known/agent-manifest.json discovery.schemas');
	assertHasEndpointWithPath(data.discovery.schemas, '/schemas/opportunities-export-sam.schema.json', '/.well-known/agent-manifest.json discovery.schemas');
	assertHasEndpointWithPath(data.discovery.schemas, '/schemas/opportunities-export-sbir.schema.json', '/.well-known/agent-manifest.json discovery.schemas');
}

function validateSchemaDoc(data) {
	assert(typeof data.$schema === 'string' && data.$schema.includes('json-schema.org'), 'schema doc missing valid $schema');
	assert(typeof data.$id === 'string' && data.$id.length > 0, 'schema doc missing $id');
	assert(data.type === 'object', 'schema doc top-level type must be object');
}

function validateIntegrity(data) {
	assert(Array.isArray(data.tracked_source_integrity), '/integrity.json tracked_source_integrity must be array');
	const expectedPaths = [
		'src/pages/llms.txt.ts',
		'src/pages/llms-full.txt.ts',
		'src/pages/agents.json.ts',
		'src/pages/agent-priority.json.ts',
		'src/pages/changes.json.ts',
		'src/pages/changes.jsonl.ts',
		'src/pages/writing/manifest.json.ts',
		'src/pages/writing/agent.json.ts',
		'src/pages/events/agent.json.ts',
		'src/pages/opportunities/agent.json.ts',
		'src/pages/opportunities/export.json.ts',
		'src/pages/opportunities/export-sam.json.ts',
		'src/pages/opportunities/export-sam-core.json.ts',
		'src/pages/opportunities/export-sbir.json.ts',
		'src/pages/opportunities/freshness.json.ts',
		'src/pages/.well-known/agent-manifest.json.ts',
		'src/pages/.well-known/llms.txt.ts',
		'src/pages/schemas/agents.schema.json.ts',
		'src/pages/schemas/agent-priority.schema.json.ts',
		'src/pages/schemas/changes.schema.json.ts',
		'src/pages/schemas/opportunities-export.schema.json.ts',
		'src/pages/schemas/opportunities-export-sam.schema.json.ts',
		'src/pages/schemas/opportunities-export-sbir.schema.json.ts',
		'src/pages/for-agents/index.astro',
		'src/data/discovery-events.json',
	];
	const pathSet = new Set(data.tracked_source_integrity.map((item) => item.path));
	for (const expected of expectedPaths) {
		assert(pathSet.has(expected), `/integrity.json missing tracked file: ${expected}`);
	}
	for (const item of data.tracked_source_integrity) {
		assert(typeof item.path === 'string' && item.path.length > 0, '/integrity.json item.path missing');
		assert(typeof item.sha256 === 'string' && /^[a-f0-9]{64}$/.test(item.sha256), `/integrity.json invalid sha256 for ${item.path}`);
		assert(typeof item.bytes === 'number' && item.bytes > 0, `/integrity.json invalid bytes for ${item.path}`);
	}
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
			check.validate?.(data);
		}

		if (check.type === 'jsonl') {
			const lines = text
				.split('\n')
				.map((line) => line.trim())
				.filter(Boolean);
			assert(lines.length >= (check.minLines || 1), `${check.path} has no JSONL rows`);
			const parsed = [];
			for (const [idx, line] of lines.entries()) {
				try {
					parsed.push(JSON.parse(line));
				} catch {
					throw new Error(`${check.path} invalid JSON on line ${idx + 1}`);
				}
			}
			check.validate?.(parsed);
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
