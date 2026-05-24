/**
 * Generates public/og-image.png (1200×630) matching the portfolio's
 * dark-navy design — runs once at build-prep time, not at deploy time.
 */
import sharp from "sharp";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../public/og-image.png");

// ── Design tokens (mirror globals.css) ──────────────────────────────────────
const BG        = "#1e1e28";
const BORDER    = "#2e2e3e";
const ACCENT    = "#c778dd";   // --hl purple
const WHITE     = "#ffffff";
const MUTED     = "#abb2bf";
const CARD_BG   = "#252535";

const W = 1200;
const H = 630;

// ── CC logo path (same as logo-default.svg, scaled) ─────────────────────────
// Original viewBox 0 0 52 52 — scale to ~56px
const LOGO_SCALE = 56 / 52;
const logoPath = `M${39*LOGO_SCALE} ${0} H${26*LOGO_SCALE} V${13*LOGO_SCALE} H${13*LOGO_SCALE} H0 V${26*LOGO_SCALE} V${39*LOGO_SCALE} V${56} H${13*LOGO_SCALE} H${26*LOGO_SCALE} V${39*LOGO_SCALE} H${39*LOGO_SCALE} H${56} V${26*LOGO_SCALE} V${13*LOGO_SCALE} V0 H${39*LOGO_SCALE} Z M${13*LOGO_SCALE} ${39*LOGO_SCALE} H${26*LOGO_SCALE} V${26*LOGO_SCALE} H${39*LOGO_SCALE} V${13*LOGO_SCALE} H${26*LOGO_SCALE} V${26*LOGO_SCALE} H${13*LOGO_SCALE} V${39*LOGO_SCALE} Z`;

// ── Skills chips ─────────────────────────────────────────────────────────────
const skills = ["React", "TypeScript", "Webpack MF", "Node.js", "Micro-frontends"];

function chipSVG(label, x, y) {
  const pw = label.length * 8.5 + 24;
  return `
    <rect x="${x}" y="${y}" width="${pw}" height="28" rx="4"
          fill="${CARD_BG}" stroke="${BORDER}" stroke-width="1"/>
    <text x="${x + pw/2}" y="${y + 18}" text-anchor="middle"
          font-family="monospace" font-size="13" fill="${MUTED}">${label}</text>`;
}

// layout chips in a row
let chipX = 80;
const CHIP_Y = 460;
const chipSVGs = skills.map((s) => {
  const svg = chipSVG(s, chipX, CHIP_Y);
  chipX += s.length * 8.5 + 24 + 12;
  return svg;
}).join("");

// ── Decorative dot grid (5×4) ────────────────────────────────────────────────
let dots = "";
for (let r = 0; r < 4; r++) {
  for (let c = 0; c < 5; c++) {
    dots += `<circle cx="${990 + c*18}" cy="${80 + r*18}" r="1.5" fill="${BORDER}"/>`;
  }
}
for (let r = 0; r < 4; r++) {
  for (let c = 0; c < 5; c++) {
    dots += `<circle cx="${80 + c*18}" cy="${540 + r*18}" r="1.5" fill="${BORDER}"/>`;
  }
}

// ── Accent rectangle deco (mirrors .sec-rect-deco) ───────────────────────────
const rectDeco = `
  <rect x="1110" y="180" width="8" height="80" fill="${ACCENT}" opacity="0.6"/>
  <rect x="1122" y="200" width="8" height="60" fill="${ACCENT}" opacity="0.3"/>
`;

// ── Full SVG ─────────────────────────────────────────────────────────────────
const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"
     xmlns="http://www.w3.org/2000/svg">

  <!-- background -->
  <rect width="${W}" height="${H}" fill="${BG}"/>

  <!-- border frame -->
  <rect x="1" y="1" width="${W-2}" height="${H-2}"
        fill="none" stroke="${BORDER}" stroke-width="1"/>

  <!-- top accent bar -->
  <rect x="80" y="80" width="3" height="60" fill="${ACCENT}"/>

  <!-- decorative dots -->
  ${dots}

  <!-- accent rect deco -->
  ${rectDeco}

  <!-- CC logo -->
  <g transform="translate(80, 82)">
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="${logoPath}" fill="${ACCENT}" opacity="0.15"/>
  </g>

  <!-- site label top-right -->
  <text x="${W - 80}" y="108" text-anchor="end"
        font-family="monospace" font-size="14" fill="${MUTED}">
    chandancc.github.io/get-to-know-me
  </text>

  <!-- eyebrow -->
  <text x="80" y="210"
        font-family="monospace" font-size="16" fill="${ACCENT}">
    &lt;senior-frontend-engineer /&gt;
  </text>

  <!-- name -->
  <text x="80" y="295"
        font-family="Arial, sans-serif" font-size="72" font-weight="700"
        fill="${WHITE}">
    Chandan
  </text>
  <text x="80" y="375"
        font-family="Arial, sans-serif" font-size="72" font-weight="700"
        fill="${WHITE}">
    Chhouda
  </text>

  <!-- descriptor -->
  <text x="80" y="428"
        font-family="monospace" font-size="18" fill="${MUTED}">
    6+ yrs · React &amp; TypeScript · Micro-frontends · Bengaluru, IN
  </text>

  <!-- skill chips -->
  ${chipSVGs}

  <!-- bottom divider -->
  <line x1="80" y1="${H - 60}" x2="${W - 80}" y2="${H - 60}"
        stroke="${BORDER}" stroke-width="1"/>

  <!-- bottom tagline -->
  <text x="80" y="${H - 30}"
        font-family="monospace" font-size="13" fill="${MUTED}">
    Arctic Wolf Networks · Yellow.ai · GeekyAnts
  </text>
</svg>`.trim();

// ── Convert SVG → PNG via sharp ───────────────────────────────────────────────
const buf = Buffer.from(svg);
await sharp(buf).png().toFile(OUT);
console.log(`✓  OG image written → ${OUT}`);
