import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const ENV_EXAMPLE_PATH = path.join(ROOT, '.env.example');

function parseEnvLines(text) {
	const out = {};
	for (const line of String(text).split(/\r?\n/)) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith('#')) continue;
		const idx = trimmed.indexOf('=');
		if (idx <= 0) continue;
		const key = trimmed.slice(0, idx).trim();
		const value = trimmed.slice(idx + 1).trim();
		out[key] = value;
	}
	return out;
}

function isValidHttpUrl(input) {
	if (!input) return false;
	try {
		const u = new URL(input);
		return u.protocol === 'https:' || u.protocol === 'http:';
	} catch {
		return false;
	}
}

function isValidEmail(input) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(input || ''));
}

function isValidE164(input) {
	return /^\+[1-9]\d{7,14}$/.test(String(input || ''));
}

async function main() {
	const errors = [];
	let envText = '';
	try {
		envText = await fs.readFile(ENV_EXAMPLE_PATH, 'utf-8');
	} catch {
		errors.push('Missing .env.example');
	}

	const env = parseEnvLines(envText);
	const requiredKeys = [
		'PUBLIC_SITE_URL',
		'PUBLIC_CONTACT_EMAIL',
		'PUBLIC_CONTACT_PHONE_E164',
		'PUBLIC_CONTACT_FORM_ENDPOINT',
		'PUBLIC_MEDIA_BASE_URL',
		'PLAUSIBLE_API_KEY',
		'PLAUSIBLE_SITE_ID',
		'PLAUSIBLE_DATE_RANGE',
		'PLAUSIBLE_SITEMAP_INDEX_URL',
	];

	for (const key of requiredKeys) {
		if (!(key in env)) errors.push(`.env.example missing key: ${key}`);
	}

	const siteUrl = String(env.PUBLIC_SITE_URL || '').trim();
	if (!siteUrl || !isValidHttpUrl(siteUrl)) {
		errors.push('PUBLIC_SITE_URL must be set to an absolute http(s) URL in .env.example');
	}

	const contactEmail = String(env.PUBLIC_CONTACT_EMAIL || '').trim();
	if (!contactEmail || !isValidEmail(contactEmail)) {
		errors.push('PUBLIC_CONTACT_EMAIL must be a valid email in .env.example');
	}

	const contactPhone = String(env.PUBLIC_CONTACT_PHONE_E164 || '').trim();
	if (!contactPhone || !isValidE164(contactPhone)) {
		errors.push('PUBLIC_CONTACT_PHONE_E164 must be valid E.164 (e.g. +13019042011) in .env.example');
	}

	const contactEndpoint = String(env.PUBLIC_CONTACT_FORM_ENDPOINT || '').trim();
	if (contactEndpoint && !isValidHttpUrl(contactEndpoint)) {
		errors.push('PUBLIC_CONTACT_FORM_ENDPOINT must be an absolute http(s) URL when set');
	}

	const mediaBase = String(env.PUBLIC_MEDIA_BASE_URL || '').trim();
	if (mediaBase && !isValidHttpUrl(mediaBase)) {
		errors.push('PUBLIC_MEDIA_BASE_URL must be an absolute http(s) URL when set');
	}

	const plausibleSitemap = String(env.PLAUSIBLE_SITEMAP_INDEX_URL || '').trim();
	if (plausibleSitemap && !isValidHttpUrl(plausibleSitemap)) {
		errors.push('PLAUSIBLE_SITEMAP_INDEX_URL must be an absolute http(s) URL when set');
	}

	if (errors.length) {
		console.error('config/env lint failed:\n');
		for (const e of errors) console.error(`- ${e}`);
		process.exit(1);
	}

	console.log('config/env lint passed');
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
