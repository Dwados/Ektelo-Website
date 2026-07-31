# Ektelio — Operational Transformation Company

> **ektelio** — *“to execute.”*
> We digitize operations, not just software.

Premium enterprise marketing website for Ektelio, an operational transformation
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

### The house palette

**`ektelio` — Ektelio Standard** is the shipping palette (`DEFAULT_THEME`).
Petrol-ink surfaces machined to near-black (hue 202, between navy and petrol),
a blue cooled to #1474C8 so white labels hold 4.85:1, and brass #E2B865 marking
proven results. It is a three-way merge of Signal Navy, Sovereign Petrol and
Blued Steel.

Seven earlier explorations remain in `src/theme/palettes.ts` and can be previewed
or deleted: `signature` (Signal Navy), `graphite` (Graphite Ember), `meridian`
(Bronze Standard), `sovereign` (Sovereign Petrol), `executive` (Bone & Brass),
`chancery` (Chancery Bronze), `bluedsteel` (Blued Steel).

```bash
EKTELIO_THEME=sovereign npm run dev      # preview another palette
EKTELIO_THEME=sovereign npm run build    # builds into .next-sovereign
```

Every palette is contrast-audited: all load-bearing text pairs clear WCAG AA
(4.5:1) and graphic elements clear 3:1.

> A colour cannot be both 4.5:1 against white and 3:1 against a near-black panel.
> That is why the hero graphic draws its flow lines in `accentSoft`, never
> `accent` — don't "fix" that back.

## Pages

**Top level** — `/` Home · `/about` · `/services` · `/industries` ·
`/solutions` · `/insights` · `/contact` · `/careers`

**Detail pages** (statically generated) — `/services/[slug]` ×14,
`/industries/[slug]` ×9, `/solutions/[slug]` ×15, `/insights/[slug]` ×6

**Trust & legal** — `/privacy` · `/terms` · `/accessibility` · `/security`

**Machine-readable** — `sitemap.xml`, `robots.txt`, `manifest.webmanifest`,
`/insights/rss.xml`, generated `opengraph-image` and `apple-icon`, plus JSON-LD
for Organization, Service, Article, FAQPage, and BreadcrumbList.

Content is split in two: [`src/lib/data.ts`](src/lib/data.ts) holds the
structural content (services, industries, navigation, contact details) and [`src/lib/content.ts`](src/lib/content.ts) holds the long-form
content (insight essays, the legal and trust pages, the FAQ, careers). The solutions
catalogue lives in [`src/lib/solutions.ts`](src/lib/solutions.ts).

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm start
```

## Contact form

The form posts to `/api/contact`, which validates, rate-limits (5 per IP per 10
minutes), screens bots with a honeypot field plus a minimum time-on-form, then
relays the message to every address in `site.emails`. `Reply-To` is set to the
enquirer, so replying goes straight to them.

Copy [`.env.example`](.env.example) to `.env.local` and configure **one** provider.
[`src/lib/mailer.ts`](src/lib/mailer.ts) picks whichever is present, Resend first.

**SMTP** — works today, no domain required:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=lumuedwardkiko@gmail.com
SMTP_PASS=your-16-char-app-password   # Google App Password, not your login
```

**Resend** — preferred once `ektelio.com` is registered:

```bash
RESEND_API_KEY=re_xxx
CONTACT_FROM="Ektelio Website <engage@ektelio.com>"
```

> Resend only delivers to the address its account was created with until you
> verify a sending domain. Add `ektelio.com` under Domains, publish the SPF and
> DKIM records, and set `CONTACT_FROM` to an address on it — otherwise only one
> of the two contact addresses will ever receive anything.

Optional for either: `CONTACT_TO=a@x.com,b@y.com` overrides the recipients.

Check what a running deployment actually picked up — it reports the provider and
recipient count, never a credential:

```bash
curl https://ektelio.com/api/contact
# {"provider":"smtp","configured":true,"recipients":2,...}
```

With no provider configured the endpoint returns 503, and on a delivery failure
502; in both cases the form hands the visitor a pre-filled email instead, so a
submission is never silently lost. Note this route is server-rendered — the rest
of the site is static, so deploy somewhere that runs Node (Vercel does by default).

## Before going live

- Set `site.url` in `src/lib/data.ts` to the real domain — it feeds every
  canonical URL, the sitemap, and the JSON-LD.
- Confirm the address in `site.address`.
- Have counsel review `/privacy` and `/terms`. They are accurate to how the site
  actually behaves but they are not legal advice.
- Prune the seven unused palettes from `src/theme/palettes.ts`.
