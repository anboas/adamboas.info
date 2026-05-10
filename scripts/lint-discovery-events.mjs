#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const file = path.resolve('src/data/discovery-events.json');
const raw = fs.readFileSync(file, 'utf8');
const events = JSON.parse(raw);

if (!Array.isArray(events) || events.length === 0) {
	throw new Error('discovery-events.json must contain a non-empty array');
}

const ids = new Set();
let lastTs = 0;

for (const [idx, event] of events.entries()) {
	const prefix = `event[${idx}]`;
	for (const key of ['id', 'ts', 'type', 'release', 'summary']) {
		if (!event[key]) throw new Error(`${prefix} missing required key: ${key}`);
	}
	if (ids.has(event.id)) throw new Error(`${prefix} duplicate id: ${event.id}`);
	ids.add(event.id);

	const tsMs = Date.parse(event.ts);
	if (!Number.isFinite(tsMs)) throw new Error(`${prefix} invalid ts: ${event.ts}`);
	if (tsMs < lastTs) throw new Error(`${prefix} ts out of order (must be ascending)`);
	lastTs = tsMs;

	if (event.links && !Array.isArray(event.links)) {
		throw new Error(`${prefix} links must be an array when present`);
	}
}

console.log(`discovery-events lint passed (${events.length} events)`);
