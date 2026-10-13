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
| Value prop, service tiles, team rail | `components/Services.tsx` | `#features`, `#services` |
| Team rail (auto-playing) | `components/PeopleRail.tsx` | — |
| "Life with clickworks" testimonial videos | `components/Testimonials.tsx` | `#plans` |
| Contact form | `components/ContactForm.tsx` | `#contact` |
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
always renders a pause control — auto-moving content needs one. The projects
and team rails auto-play; the testimonial rail does not, since moving the rail
would interrupt playback.

## Design tokens

Colour, typography, shadow and animation tokens are declared once in the
`@theme` block of `app/globals.css` and consumed as Tailwind utilities
(`bg-ink`, `text-ink-muted`, `shadow-soft`, `animate-rise`, …). Adjust the
palette there and it propagates across the page.

- **Neutrals** — `ink` `#09090b` through `paper` `#ffffff`, with `line` for
  hairline borders and `paper-soft` for recessed surfaces.
- **Accent** — a single blue (`accent`) reserved for the primary "Get Started"
  CTA, so it stays the loudest thing on the page.
- **Type** — SF Pro, via the system font stack (`-apple-system`,
  `BlinkMacSystemFont`, `SF Pro Text`/`Display`). Apple's licence does not
  permit serving the font files from a website, so this is the only legitimate
  way to use it: Apple devices render real SF Pro, and anything else falls
  through to Inter (loaded via `next/font`), which is metrically close enough
  to keep the layout identical. Headings and body share one stack.

## Notes for whoever picks this up

- **Content is placeholder.** Project names, team members and testimonial
  quotes are stand-ins; swap the `PROJECTS`, `TEAM` and `TESTIMONIALS` arrays
  for real data.
- **The video slot is empty.** `VideoShowcase` renders the "Insert Video"
  placeholder until you pass it a `src`, at which point it becomes a
  click-to-play player.
- **Testimonials are not wired to the social feeds yet.** Each entry takes a
  `src` and `poster`; fill them from a manual pull, or from a route handler
  that caches the latest clips from each platform's API. Until then the cards
  render as posters and do not play.
- **The contact form has no backend.** `handleSubmit` currently just flips to
  the success state — point it at a route handler or form service.
- **Team portraits** are initials on a gradient in `PeopleRail`; drop in
  `next/image` once you have the photography.

## Accessibility & motion

Skip link, labelled form fields, keyboard-reachable carousels with real
`aria-label`s, visible focus rings, and a `prefers-reduced-motion` guard that
disables the looping tile animations.
