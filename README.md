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

| Token | Value | Use |
|---|---|---|
| Deep Navy | `#081A2B` | Primary surfaces (hero, process, CTA, footer) |
| Electric Blue | `#2D7FF9` | Actions, links, highlights (`blue-600 #1663D9` for text on white) |
| Emerald | `#00C48C` | Accents, positive metrics (`emerald-700` for text on white) |
| Charcoal | `#1E293B` | Body text on light |
| Mist | `#F4F6F9` | Alternating light sections |

Type: **Space Grotesk** (display) · **Inter** (body) · **IBM Plex Mono** (eyebrows, labels, metrics).

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
