import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import matter from 'gray-matter';

const repoRoot = process.cwd();

const papersContentDir = path.join(repoRoot, 'src', 'content', 'papers');
const generatedHtmlDir = path.join(repoRoot, 'src', 'generated', 'papers');
const publicPdfDir = path.join(repoRoot, 'public', 'papers');

function exists(p) {
  try {
    fs.accessSync(p, fs.constants.R_OK);
    return true;
  } catch {
    return false;
  }
}

function readText(p) {
  return fs.readFileSync(p, 'utf8');
}

function sha256File(p) {
  const h = crypto.createHash('sha256');
  h.update(fs.readFileSync(p));
  return h.digest('hex');
}

function die(msg) {
  console.error(`verify-papers: ${msg}`);
  process.exitCode = 1;
}

if (!exists(papersContentDir)) {
  console.warn(`verify-papers: no papers content dir at ${papersContentDir}; skipping`);
  process.exit(0);
}

const mdFiles = fs
  .readdirSync(papersContentDir)
  .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
  .sort();

if (mdFiles.length === 0) {
  console.warn('verify-papers: no paper markdown files found; skipping');
  process.exit(0);
}

for (const file of mdFiles) {
  const mdPath = path.join(papersContentDir, file);
  const slug = file.replace(/\.(md|mdx)$/i, '');

  const fm = matter(readText(mdPath)).data;

  // Required metadata for site rendering + sharing
  for (const key of ['title', 'description', 'date', 'status', 'pdfPath']) {
    if (!fm[key]) die(`${slug}: missing required frontmatter: ${key}`);
  }

  if (typeof fm.pdfPath !== 'string' || !fm.pdfPath.startsWith('/papers/')) {
    die(`${slug}: pdfPath must start with "/papers/" (got ${JSON.stringify(fm.pdfPath)})`);
  }

  const expectedPdfName = path.basename(fm.pdfPath);
  const pdfPath = path.join(publicPdfDir, expectedPdfName);
  const htmlPath = path.join(generatedHtmlDir, `${slug}.html`);
  const rawHtmlPath = path.join(generatedHtmlDir, `${slug}.raw.html`);
  const manifestPath = path.join(generatedHtmlDir, `${slug}.manifest.json`);

  if (!exists(pdfPath)) die(`${slug}: missing PDF at ${path.relative(repoRoot, pdfPath)} (from pdfPath ${fm.pdfPath})`);
  if (!exists(htmlPath)) die(`${slug}: missing generated HTML at ${path.relative(repoRoot, htmlPath)} (expected src/generated/papers/${slug}.html)`);

  // If we have a sync manifest from Whitepaper, verify round-trip integrity.
  if (exists(manifestPath)) {
    let manifest;
    try {
      manifest = JSON.parse(readText(manifestPath));
    } catch (e) {
      die(`${slug}: could not parse manifest JSON at ${path.relative(repoRoot, manifestPath)}: ${e}`);
    }

    const expectedPdf = manifest?.artifacts?.pdf?.sha256;
    const expectedHtml = manifest?.artifacts?.html?.sha256;

    if (!expectedPdf || !expectedHtml) {
      die(`${slug}: manifest missing expected sha256 fields (artifacts.pdf.sha256 / artifacts.html.sha256)`);
    }

    const actualPdf = sha256File(pdfPath);

    if (actualPdf !== expectedPdf) {
      die(`${slug}: PDF sha256 mismatch (expected ${expectedPdf}, got ${actualPdf})`);
    }

    if (!exists(rawHtmlPath)) {
      // We only verify HTML hashes against the upstream manifest if we have the exact raw
      // HTML fragment saved from the sync job. The normalized site fragment is intentionally
      // modified (table fixes, etc.), so it will not match.
      console.warn(
        `verify-papers: ${slug}: raw HTML missing (${path.relative(repoRoot, rawHtmlPath)}); skipping HTML hash verification (will be enforced after next sync).`
      );
    } else {
      const actualHtml = sha256File(rawHtmlPath);
      if (actualHtml !== expectedHtml) {
        die(`${slug}: HTML sha256 mismatch (expected ${expectedHtml}, got ${actualHtml}) comparing manifest to ${slug}.raw.html`);
      }
    }
  }

  const html = readText(htmlPath);

  // Basic safety/sanity guards. The site sanitizes again, but keep sources clean.
  if (/<script\b/i.test(html)) die(`${slug}: generated HTML contains <script> tag(s)`);
  if (/on\w+\s*=\s*['"]/i.test(html)) die(`${slug}: generated HTML contains inline event handlers (on*)`);
  if (/<iframe\b/i.test(html)) die(`${slug}: generated HTML contains <iframe> tag(s)`);

  // Ensure the HTML isn’t empty.
  const textLen = html.replace(/<[^>]*>/g, '').trim().length;
  if (textLen < 200) die(`${slug}: generated HTML looks too small (${textLen} chars of text)`);
}

if (!process.exitCode) {
  console.log(`verify-papers: OK (${mdFiles.length} paper(s))`);
}
