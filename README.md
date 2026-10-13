# Clickworks — Landing Page

A responsive marketing landing page for Clickworks, built from the supplied
wireframe with **Next.js (App Router)**, **Tailwind CSS v4** and
**lucide-react**.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # production build
npm start       # serve the production build
```

## Page structure

Sections render top-to-bottom from `app/page.tsx`:

| Section | Component | Anchor |
| --- | --- | --- |
| Sticky navigation + CTA | `components/Navbar.tsx` | — |
| Hero + "Insert Video" slot | `components/Hero.tsx` | `#top`, `#about` |
| "Our work, Real Results." carousel | `components/OurWork.tsx` | `#work` |
| iOS badge, value prop, service tiles, stats | `components/Services.tsx` | `#features`, `#services` |
| "Life with clickworks" team carousel | `components/TeamSection.tsx` | `#plans` |
| Contact form | `components/ContactForm.tsx` | `#contact` |
| Footer | `components/Footer.tsx` | — |

Shared pieces live alongside them: `Container` (page gutter and max width),
`Carousel` (the snap-scrolling rail both carousels use), `Wordmark`,
`SketchArrow` (the hand-drawn arrow from the wireframe), `VideoShowcase`,
`ServiceTiles` and `AppleIcon`.

## Design tokens

Colour, typography, shadow and animation tokens are declared once in the
`@theme` block of `app/globals.css` and consumed as Tailwind utilities
(`bg-ink`, `text-ink-muted`, `shadow-soft`, `animate-rise`, …). Adjust the
palette there and it propagates across the page.

- **Neutrals** — `ink` `#09090b` through `paper` `#ffffff`, with `line` for
  hairline borders and `paper-soft` for recessed surfaces.
- **Accent** — a single blue (`accent`) reserved for the primary "Get Started"
  CTA, so it stays the loudest thing on the page.
- **Type** — Poppins for display/wordmark, Inter for body, both via
  `next/font`.

## Notes for whoever picks this up

- **Content is placeholder.** Project names, team members and stat figures are
  stand-ins; swap the `PROJECTS`, `TEAM` and `STATS` arrays for real data.
- **The video slot is empty.** `VideoShowcase` renders the "Insert Video"
  placeholder until you pass it a `src`, at which point it becomes a
  click-to-play player.
- **The contact form has no backend.** `handleSubmit` currently just flips to
  the success state — point it at a route handler or form service.
- **Team portraits** are placeholder circles in `MemberCard`; drop in
  `next/image` once you have the photography.

## Accessibility & motion

Skip link, labelled form fields, keyboard-reachable carousels with real
`aria-label`s, visible focus rings, and a `prefers-reduced-motion` guard that
disables the looping tile animations.
