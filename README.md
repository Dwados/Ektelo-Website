# Ektelo — Operational Transformation Company

> **ektelo** — *“to execute.”*
> We digitize operations, not just software.

Premium enterprise marketing website for Ektelo, an operational transformation
company serving governments, corporations, and enterprises. Positioned alongside
Palantir / IBM Consulting / McKinsey Digital — but AI-native and execution-focused.

## Stack

- **Next.js 15** (App Router, fully static output) · React 19 · TypeScript
- **Tailwind CSS 3.4** with a brand token system
- **Framer Motion 12** — scroll reveals, hero animation, micro-interactions (all respect `prefers-reduced-motion`)
- **lucide-react** icons · `next/font` (Space Grotesk / Inter / IBM Plex Mono)

## Brand system

Type: **Space Grotesk** (display) · **Inter** (body) · **IBM Plex Mono** (eyebrows, labels, metrics).

### Colour is themeable

No component contains a hex value. Every colour resolves to a CSS custom property
emitted from [`src/theme/palettes.ts`](src/theme/palettes.ts), so the whole site
re-skins by switching one environment variable.

Semantic tokens (Tailwind class → meaning):

| Token | Classes | Use |
|---|---|---|
| `surface` / `-deep` / `-raised` | `bg-surface`, `bg-surface-deep` | Dark bands: hero, process, CTA, footer |
| `on-dark` / `-strong` / `-soft` / `-faint` | `text-on-dark` | Text on dark bands |
| `accent` / `-hover` / `-soft` / `-ink` | `bg-accent`, `text-accent-ink` | Primary actions, links, flow. `-ink` is the ≥4.5:1 on-white sibling |
| `signal` / `-ink` | `text-signal` | Verified gain: eyebrows on dark, metric suffixes |
| `canvas` / `-alt` | `bg-canvas`, `bg-canvas-alt` | Light bands and their alternate |
| `ink` / `-strong` / `-soft` / `-faint` | `text-ink-soft` | Text on light bands |
| `hairline` | `border-hairline` | 1px rules on light |

### Six palettes ship in the box

| Key | Name | Character |
|---|---|---|
| `signature` | Signal Navy | Ink navy + electric blue + measured green (default) |
| `graphite` | Graphite Ember | Near-black machined greys + a single heated accent |
| `meridian` | Bronze Standard | Midnight ink + burnished bronze institutional warmth |
| `sovereign` | Sovereign Petrol | Green-cyan petrol surfaces, intelligence-console cool |
| `executive` | Bone & Brass | Light-dominant warm bone canvas, dark used as punctuation |
| `chancery` | Chancery Bronze | Near-black chartered green + bronze + gauge-glass cyan |

```bash
EKTELO_THEME=sovereign npm run dev      # preview a palette
EKTELO_THEME=sovereign npm run build    # builds into .next-sovereign
```

Every palette was contrast-audited: all 18 load-bearing text pairs clear WCAG AA
(4.5:1) and graphic elements clear 3:1 in all six. To lock one in permanently,
set `DEFAULT_THEME` in `src/theme/palettes.ts` and delete the rest.

> Note: `src/app/icon.svg` (the favicon) is a static file and still carries the
> Signature blue/emerald. Update it by hand if you adopt a different palette.

## Pages

`/` Home (hero, stats, sectors, mission, approach, services, industries, why,
6-step process, capabilities, featured result, CTA) · `/about` · `/services` ·
`/industries` · `/case-studies` · `/insights` · `/contact` + 404, sitemap,
robots, JSON-LD organization schema.

All content lives in [`src/lib/data.ts`](src/lib/data.ts) — one file to edit copy,
services, industries, case studies, and insights.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static production build
npm start
```

## Notes

- Case studies are **representative sample engagements** (anonymized placeholders) — replace with real ones before launch.
- Contact form validates inline and opens a pre-filled email to `engage@ektelo.com`; wire a real backend/API route when ready.
- Update `site.url`, email, phone, and address in `src/lib/data.ts` before going live.
