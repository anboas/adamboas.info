import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;
const OUT_DIR = path.join(process.cwd(), 'public', 'og');

const cards = [
  { file: 'default.png', accent: '#00a6a6', title: 'Adam Boas', subtitle: 'Trusted autonomy, control planes, and execution at tempo' },
  { file: 'home.png', accent: '#00a6a6', title: 'Adam Boas', subtitle: 'Solutions Architect · Writing · Experience · Education' },
  { file: 'writing.png', accent: '#00a6a6', title: 'Writing', subtitle: 'Notes, memos, and papers on AI systems and governance' },
  { file: 'paper.png', accent: '#d4a574', title: 'Paper', subtitle: 'Long-form technical architecture and reference work' },
  { file: 'note.png', accent: '#00a6a6', title: 'Note', subtitle: 'Short-form insights, experiments, and synthesis' },
  { file: 'memo.png', accent: '#3b82f6', title: 'Memo', subtitle: 'Focused briefs and decision-ready technical analysis' },
];

function svgTemplate({ accent, title, subtitle }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="100%" stop-color="#0b1220"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect x="0" y="0" width="14" height="630" fill="${accent}"/>
  <rect x="48" y="48" width="1104" height="534" fill="none" stroke="rgba(148,163,184,0.18)" stroke-width="2"/>
  <text x="90" y="130" font-family="Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="34" font-weight="700" fill="#e2e8f0">adamboas.info</text>
  <text x="90" y="310" font-family="Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="78" font-weight="800" fill="#f8fafc">${title}</text>
  <text x="90" y="376" font-family="Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="34" font-weight="500" fill="#cbd5e1">${subtitle}</text>
  <rect x="90" y="430" width="420" height="2" fill="${accent}" opacity="0.8"/>
</svg>`;
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  for (const card of cards) {
    const svg = Buffer.from(svgTemplate(card));
    const out = path.join(OUT_DIR, card.file);
    await sharp(svg).png({ compressionLevel: 9 }).toFile(out);
    console.log(`wrote ${out}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
