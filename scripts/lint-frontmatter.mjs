import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

const root = process.cwd();

function fail(msg) {
	console.error(msg);
	process.exitCode = 1;
}

function isNonEmptyString(x) {
	return typeof x === 'string' && x.trim().length > 0;
}

function isValidDate(x) {
	// Allow Date objects (from YAML timestamps) and ISO/date-ish strings.
	if (x instanceof Date && !Number.isNaN(x.valueOf())) return true;
	if (typeof x === 'string') {
		const d = new Date(x);
		return !Number.isNaN(d.valueOf());
	}
	return false;
}

function asArray(x) {
	if (Array.isArray(x)) return x;
	return [];
}

function checkCommon(file, data) {
	if (!isNonEmptyString(data.title)) fail(`${file}: missing/empty title`);
	if (!data.status) fail(`${file}: missing status`);
	if (!['draft', 'published'].includes(data.status)) fail(`${file}: invalid status (${data.status})`);
	const tags = asArray(data.tags).filter(isNonEmptyString);
	if (data.status === 'published' && tags.length === 0) fail(`${file}: published items must have >=1 tag`);
}

function checkWriting(file, data) {
	checkCommon(file, data);
	if (!['note', 'memo'].includes(data.type)) fail(`${file}: writing.type must be note|memo`);
	if (!isValidDate(data.date)) fail(`${file}: missing/invalid date`);
	if (data.status === 'published' && !isNonEmptyString(data.summary))
		fail(`${file}: published writing must have summary`);
}

function checkPaper(file, data) {
	checkCommon(file, data);
	// papers allow optional date in schema, but require it when published for SEO.
	if (data.status === 'published' && !isValidDate(data.date)) fail(`${file}: published papers must have date`);
	if (data.status === 'published' && !isNonEmptyString(data.description))
		fail(`${file}: published papers must have description`);
	if (data.status === 'published' && !isNonEmptyString(data.pdfPath))
		fail(`${file}: published papers must have pdfPath`);
}

async function listMd(dir) {
	try {
		const ents = await fs.readdir(dir, { withFileTypes: true });
		const out = [];
		for (const e of ents) {
			const p = path.join(dir, e.name);
			if (e.isDirectory()) out.push(...(await listMd(p)));
			else if (e.isFile() && p.endsWith('.md')) out.push(p);
		}
		return out;
	} catch {
		return [];
	}
}

async function main() {
	const writingDir = path.join(root, 'src', 'content', 'writing');
	const papersDir = path.join(root, 'src', 'content', 'papers');

	const writingFiles = await listMd(writingDir);
	const paperFiles = await listMd(papersDir);

	if (writingFiles.length === 0) console.warn('lint-frontmatter: no writing files found');
	if (paperFiles.length === 0) console.warn('lint-frontmatter: no paper files found');

	for (const f of writingFiles) {
		const raw = await fs.readFile(f, 'utf8');
		const { data } = matter(raw);
		checkWriting(path.relative(root, f), data);
	}

	for (const f of paperFiles) {
		const raw = await fs.readFile(f, 'utf8');
		const { data } = matter(raw);
		checkPaper(path.relative(root, f), data);
	}

	if (process.exitCode) {
		console.error('frontmatter lint failed');
		process.exit(1);
	}
	console.log('frontmatter lint passed');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
