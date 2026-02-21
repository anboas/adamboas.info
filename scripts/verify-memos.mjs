import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import matter from 'gray-matter';

const repoRoot = process.cwd();

const memosContentDir = path.join(repoRoot, 'src', 'content', 'writing', 'memos');
const generatedHtmlDir = path.join(repoRoot, 'src', 'generated', 'memos');
const publicPdfDir = path.join(repoRoot, 'public', 'memos');

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
  console.error(`verify-memos: ${msg}`);
  process.exitCode = 1;
}

if (!exists(memosContentDir)) {
  console.warn(`verify-memos: no memos content dir at ${memosContentDir}; skipping`);
  process.exit(0);
}

const mdFiles = fs
  .readdirSync(memosContentDir)
  .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
  .sort();

if (mdFiles.length === 0) {
  console.warn('verify-memos: no memo markdown files found; skipping');
  process.exit(0);
}

for (const file of mdFiles) {
  const mdPath = path.join(memosContentDir, file);
  const slug = file.replace(/\.(md|mdx)$/i, '');

  const fm = matter(readText(mdPath)).data;
  if ((fm.status || 'published') !== 'published') continue;

  for (const key of ['title', 'date', 'status', 'type', 'summary', 'pdfPath']) {
    if (!fm[key]) die(`${slug}: missing required frontmatter: ${key}`);
  }

  if (fm.type !== 'memo') {
    die(`${slug}: type must be memo (got ${JSON.stringify(fm.type)})`);
  }

  if (typeof fm.pdfPath !== 'string' || !fm.pdfPath.startsWith('/memos/')) {
    die(`${slug}: pdfPath must start with "/memos/" (got ${JSON.stringify(fm.pdfPath)})`);
  }

  const expectedPdfName = path.basename(fm.pdfPath);
  const pdfPath = path.join(publicPdfDir, expectedPdfName);
  const htmlPath = path.join(generatedHtmlDir, `${slug}.html`);
  const rawHtmlPath = path.join(generatedHtmlDir, `${slug}.raw.html`);
  const manifestPath = path.join(generatedHtmlDir, `${slug}.manifest.json`);

  if (!exists(pdfPath)) die(`${slug}: missing PDF at ${path.relative(repoRoot, pdfPath)} (from pdfPath ${fm.pdfPath})`);
  if (!exists(htmlPath)) die(`${slug}: missing generated HTML at ${path.relative(repoRoot, htmlPath)}`);

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
      console.warn(`verify-memos: ${slug}: raw HTML missing (${path.relative(repoRoot, rawHtmlPath)}); skipping HTML hash verification.`);
    } else {
      const actualHtml = sha256File(rawHtmlPath);
      if (actualHtml !== expectedHtml) {
        die(`${slug}: HTML sha256 mismatch (expected ${expectedHtml}, got ${actualHtml}) comparing manifest to ${slug}.raw.html`);
      }
    }
  }

  const html = readText(htmlPath);
  if (/<script\b/i.test(html)) die(`${slug}: generated HTML contains <script> tag(s)`);
  if (/on\w+\s*=\s*['"]/i.test(html)) die(`${slug}: generated HTML contains inline event handlers (on*)`);
  if (/<iframe\b/i.test(html)) die(`${slug}: generated HTML contains <iframe> tag(s)`);

  const textLen = html.replace(/<[^>]*>/g, '').trim().length;
  if (textLen < 120) die(`${slug}: generated HTML looks too small (${textLen} chars of text)`);
}

if (!process.exitCode) {
  console.log(`verify-memos: OK (${mdFiles.length} memo file(s) scanned)`);
}
