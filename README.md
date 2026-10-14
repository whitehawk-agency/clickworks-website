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
| Hero, "Insert Video" slot, iOS badge | `components/Hero.tsx` | `#top`, `#about` |
| "Our work, Real Results." (auto-playing) | `components/OurWork.tsx` | `#work` |
| Value prop, service tiles | `components/Services.tsx` | `#features`, `#services` |
| "Life with clickworks" testimonial videos | `components/Testimonials.tsx` | `#community` |
| Brand marks lucide lacks (TikTok, X) | `components/BrandIcons.tsx` | — |
| Footer | `components/Footer.tsx` | — |

Shared pieces live alongside them: `Container` (page gutter and max width),
`Carousel` (the snap-scrolling rail every carousel uses), `Wordmark`,
`SketchArrow` (the hand-drawn arrow from the wireframe), `VideoShowcase`,
`ServiceTiles`, `AppDownloadBadge` and `AppleIcon`.

### Auto-playing rails

`Carousel` takes `autoplay` and an `interval`. It advances one card at a time
and wraps at the end, and it holds still while someone is hovering, touching or
tabbing through it, while the tab is backgrounded, and while it is scrolled out
of view. It never starts for a visitor who prefers reduced motion, and it
holds still while someone hovers, touches or tabs through it, while the tab is
backgrounded, and while it is scrolled out of view. It never starts for a
visitor who prefers reduced motion. The projects and The projects rail auto-plays with
`arrows={false}`; the testimonials are a static grid.

There is deliberately no pause button. WCAG 2.2.2 asks for a visible way to
stop content that moves on its own, so if that matters for this site, re-add
one — the reduced-motion opt-out and the hover/focus hold are the mitigations
currently standing in for it.

## Design tokens

Colour, typography, shadow and animation tokens are declared once in the
`@theme` block of `app/globals.css` and consumed as Tailwind utilities
(`bg-ink`, `text-ink-muted`, `shadow-soft`, `animate-rise`, …). Adjust the
palette there and it propagates across the page.

- **Neutrals** — `ink` `#09090b` through `paper` `#ffffff`, with `line` for
  hairline borders and `paper-soft` for recessed surfaces.
- **Accent** — a single blue (`accent`) reserved for the primary "Get Started"
  CTA, so it stays the loudest thing on the page.
- **Logo** — `public/clickworks-black.png` (for light surfaces) and
  `public/clickworks-white.png` (for dark). Same artwork, same crop, so the two
  are interchangeable; `<Wordmark onDark />` picks the white one. The mark is
  sized in `em` and sits on the baseline, so it scales with whatever type
  surrounds it and works inline mid-sentence.
- **Type** — Inter, self-hosted from `app/fonts/InterVariable.woff2` via
  `next/font/local` (SIL OFL; licence alongside it). It is one variable file
  carrying both a weight axis and an optical-size axis, so a single 345KB
  download covers every weight — smaller than shipping the static Display
  cuts. `globals.css` pins `font-variation-settings: "opsz" 32`, the top of
  the optical-size range, which *is* the Display cut. Swap that for
  `font-optical-sizing: auto` to let the browser choose per size instead. The
  fallbacks name no system UI font on purpose: `-apple-system`, `system-ui`
  and `ui-sans-serif` all resolve to SF on Apple devices, so naming any of
  them would put SF back on the page if the file failed to load.
- **Content is placeholder.** Project names, team members and testimonial
  quotes are stand-ins; swap the `PROJECTS`, `TEAM` and `TESTIMONIALS` arrays
  for real data.
- **Imagery is the main gap.** Three card types are built to carry a photo and
  render a neutral slot until they get one: project cards (`photo` + a white
  `logo` per client) and testimonial cards (`poster`). Drop files in `/public`
  and reference them from each array — the layout does not change when they
  land.
- **The video slot is empty.** `VideoShowcase` renders the "Insert Video"
  placeholder until you pass it a `src`, at which point it becomes a
  click-to-play player.
- **Testimonials are not wired to the social feeds yet.** Each entry takes a
  `src` and `poster`; fill them from a manual pull, or from a route handler
  that caches the latest clips from each platform's API. Until then the cards
  render as posters and do not play.
- **There is no contact form.** It was removed, so every call to action
  ("Get Started", "Sign Up", "Explore all stories", the footer links) points at
  `CONTACT_HREF` in `lib/links.ts`, currently a placeholder. Set it once to a
  contact page, booking link or `mailto:` and they all follow.
- **Footer social links** point at the same placeholder; swap in the real
  profile URLs in `SOCIALS`.
- **Team portraits** are initials on a gradient in `PeopleRail`; drop in
  `next/image` once you have the photography.

- **Footer location line.** `FOUNDED_IN` in `components/Footer.tsx` is empty,
  so that line is hidden; set it to a city to show "Founded & built in …".

## Accessibility & motion

Skip link, labelled form fields, keyboard-reachable carousels with real
`aria-label`s, visible focus rings, and a `prefers-reduced-motion` guard that
disables the looping tile animations.
