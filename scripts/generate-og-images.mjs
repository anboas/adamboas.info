import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import matter from 'gray-matter';

const WIDTH = 1200;
const HEIGHT = 630;
const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'public', 'og');

const accentByType = {
  paper: '#d4a574',
  note: '#00a6a6',
  memo: '#3b82f6',
};

const cards = [
  { file: 'default.png', accent: '#00a6a6', title: 'Adam Boas', subtitle: 'Trusted autonomy, control planes, and execution at tempo', kicker: 'adamboas.com' },
  { file: 'home.png', accent: '#00a6a6', title: 'Adam Boas', subtitle: 'Solutions Architect · Writing · Experience · Education', kicker: 'adamboas.com' },
  { file: 'writing.png', accent: '#00a6a6', title: 'Writing', subtitle: 'Notes, memos, and papers on AI systems and governance', kicker: 'adamboas.com' },
  { file: 'paper.png', accent: '#d4a574', title: 'Paper', subtitle: 'Long-form technical architecture and reference work', kicker: 'adamboas.com' },
  { file: 'note.png', accent: '#00a6a6', title: 'Note', subtitle: 'Short-form insights, experiments, and synthesis', kicker: 'adamboas.com' },
  { file: 'memo.png', accent: '#3b82f6', title: 'Memo', subtitle: 'Focused briefs and decision-ready technical analysis', kicker: 'adamboas.com' },
];

function escapeXml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function clip(text = '', max = 120) {
  const s = String(text).replace(/\s+/g, ' ').trim();
  if (s.length <= max) return s;
  return `${s.slice(0, Math.max(0, max - 1)).trimEnd()}…`;
}

function splitTitleLines(text = '', maxChars = 30, maxLines = 2) {
  const words = String(text).replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);
  if (!words.length) return ['Untitled'];

  const lines = [];
  let current = '';

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;

    if (next.length <= maxChars) {
      current = next;
      continue;
    }

    if (current) {
      lines.push(current);
      current = word;
    } else {
      // Single very long token (rare): hard clip token itself
      lines.push(clip(word, maxChars));
      current = '';
    }

    if (lines.length >= maxLines - 1) break;
  }

  if (lines.length < maxLines && current) lines.push(current);

  const consumedWords = lines.join(' ').split(' ').filter(Boolean).length;
  if (consumedWords < words.length) {
    lines[lines.length - 1] = clip(lines[lines.length - 1], Math.max(8, maxChars - 1));
    if (!lines[lines.length - 1].endsWith('…')) lines[lines.length - 1] += '…';
  }

  return lines.slice(0, maxLines);
}

function svgTemplate({
  accent,
  title,
  subtitle,
  kicker = 'adamboas.com',
  titleSize = 66,
  titleY = 294,
  titleLineGap = Math.round(66 * 1.12),
  maxTitleChars = 30,
  maxTitleLines = 2,
  subtitleSize = 32,
  subtitleMax = 84,
}) {
  const titleLines = splitTitleLines(title, maxTitleChars, maxTitleLines);
  const titleSpans = titleLines
    .map((line, i) => `<tspan x="90" dy="${i === 0 ? 0 : titleLineGap}">${escapeXml(line)}</tspan>`)
    .join('');

  const computedSubtitleY = titleY + (titleLines.length - 1) * titleLineGap + Math.round(titleSize * 1.45);
  const subtitleY = Math.min(computedSubtitleY, 520);
  const ruleY = Math.min(subtitleY + Math.round(subtitleSize * 1.8), 582);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeXml(title)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="100%" stop-color="#0b1220"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect x="0" y="0" width="14" height="630" fill="${accent}"/>
  <rect x="48" y="48" width="1104" height="534" fill="none" stroke="rgba(148,163,184,0.18)" stroke-width="2"/>
  <text x="90" y="130" font-family="Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="34" font-weight="700" fill="#e2e8f0">${escapeXml(kicker)}</text>
  <text x="90" y="${titleY}" font-family="Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="${titleSize}" font-weight="800" fill="#f8fafc">${titleSpans}</text>
  <text x="90" y="${subtitleY}" font-family="Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="${subtitleSize}" font-weight="500" fill="#cbd5e1">${escapeXml(clip(subtitle, subtitleMax))}</text>
  <rect x="90" y="${ruleY}" width="460" height="2" fill="${accent}" opacity="0.85"/>
</svg>`;
}

async function listMarkdownFiles(dir) {
  const out = [];
  let entries = [];
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await listMarkdownFiles(full)));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'README.md') {
      out.push(full);
    }
  }
  return out;
}

function toIsoDate(v) {
  if (!v) return '';
  const d = new Date(v);
  if (Number.isNaN(d.valueOf())) return String(v).slice(0, 10);
  return d.toISOString().slice(0, 10);
}

async function collectWritingCards() {
  const collected = [];
  const seen = new Set();

  const writingRoot = path.join(ROOT, 'src', 'content', 'writing');
  const writingFiles = await listMarkdownFiles(writingRoot);
  for (const file of writingFiles) {
    const raw = await fs.readFile(file, 'utf-8');
    const fm = matter(raw).data || {};
    if ((fm.status || 'published') !== 'published') continue;

    const type = fm.type;
    if (!['note', 'memo'].includes(type)) continue;

    const slug = path.basename(file, '.md');
    if (seen.has(slug)) continue;
    seen.add(slug);

    const title = fm.title || slug;
    const date = toIsoDate(fm.date);
    const subtitle = fm.summary || `${type.toUpperCase()}${date ? ` · ${date}` : ''}`;

    collected.push({
      file: `writing/${slug}.png`,
      accent: accentByType[type],
      title,
      subtitle,
      kicker: `adamboas.com · ${type.toUpperCase()}${date ? ` · ${date}` : ''}`,
      titleSize: 52,
      titleY: 252,
      titleLineGap: 58,
      maxTitleChars: 22,
      maxTitleLines: 4,
      subtitleSize: 26,
      subtitleMax: 92,
    });
  }

  const papersRoot = path.join(ROOT, 'src', 'content', 'papers');
  const paperFiles = await listMarkdownFiles(papersRoot);
  for (const file of paperFiles) {
    const raw = await fs.readFile(file, 'utf-8');
    const fm = matter(raw).data || {};
    if ((fm.status || 'published') !== 'published') continue;

    const slug = path.basename(file, '.md');
    if (seen.has(slug)) continue;
    seen.add(slug);

    const title = fm.title || slug;
    const date = toIsoDate(fm.date);
    const subtitle = fm.description || `PAPER${date ? ` · ${date}` : ''}`;

    collected.push({
      file: `writing/${slug}.png`,
      accent: accentByType.paper,
      title,
      subtitle,
      kicker: `adamboas.com · PAPER${date ? ` · ${date}` : ''}`,
      titleSize: 52,
      titleY: 252,
      titleLineGap: 58,
      maxTitleChars: 22,
      maxTitleLines: 4,
      subtitleSize: 26,
      subtitleMax: 92,
    });
  }

  return collected;
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const dynamicWritingCards = await collectWritingCards();
  const allCards = [...cards, ...dynamicWritingCards];

  for (const card of allCards) {
    const svg = Buffer.from(svgTemplate(card));
    const out = path.join(OUT_DIR, card.file);
    await fs.mkdir(path.dirname(out), { recursive: true });
    await sharp(svg).png({ compressionLevel: 9 }).toFile(out);
    console.log(`wrote ${out}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
