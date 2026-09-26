# Sunday Florals

A direct-to-consumer flower studio built around client-driven personalization,
same-day delivery, and an interactive bouquet configurator — presented with a
clean, editorial, newspaper-inspired aesthetic.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS 4](https://tailwindcss.com) (CSS-first theme in `src/app/globals.css`)
- No backend yet — the homepage is fully static/client-side. Forms (the
  newsletter signup) simulate success locally; wire them up to a real
  provider when ready.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

```bash
npm run build   # production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/
    layout.tsx       Root layout, global metadata
    page.tsx          Homepage — composes the sections below
    globals.css       Design tokens (colors, fonts) + base styles
  components/
    SiteHeader.tsx    Sticky nav with mobile menu
    Hero.tsx
    ValueProps.tsx
    ArrangementOfMonth.tsx   "Front page feature" — swap content in lib/content.ts
    Configurator.tsx  Interactive bouquet color/wrap picker (client component)
    Gallery.tsx        Horizontal scroll-snap product carousel
    PricingTiers.tsx  À la carte / subscription / business pricing
    Testimonials.tsx
    Newsletter.tsx
    BouquetIllustration.tsx  Reusable SVG bouquet, recolorable via props
    LiveDate.tsx      Renders the visitor's current date client-side
    SiteFooter.tsx
  lib/
    content.ts        All homepage copy & data in one place — edit this
                       file to update nav links, the featured arrangement,
                       gallery items, pricing, and testimonials without
                       touching component markup.
```

## Design notes

- **Aesthetic**: warm paper background, near-black ink text, a single berry
  accent color, hairline rules and double rules borrowed from newspaper
  typography, and a Times New Roman–style serif (`Georgia, "Times New
  Roman", Times, serif`) for headlines and body copy, paired with a
  letter-spaced sans for labels/nav/buttons.
- **No photography yet**: every bouquet is a small hand-rolled SVG
  illustration (`BouquetIllustration.tsx`) instead of a stock photo, so nothing
  looks like a placeholder. Swap in real product photography later by
  replacing those usages with `next/image`.
- **"Arrangement of the Month"** and the date shown in the masthead render on
  the client (`LiveDate.tsx`) so they always reflect *today*, even though the
  page is statically generated.
- Colors, copy, and section order are all meant to be iterated on quickly —
  most changes only require editing `lib/content.ts` or the CSS variables at
  the top of `globals.css`.

## What's next

This ships the homepage only, per the current scope. Natural next pages/
features, in roughly the order they'd unlock the business model described in
the brief:

1. A real `/configurator` route (stem-by-stem builder, price calculator, add
   to cart).
2. Product/shop pages backed by real inventory data.
3. Cart + checkout + payments.
4. Subscription management (skip/swap/pause) — likely needs a backend.
5. A B2B/business inquiry form and account flow.
6. A journal/blog for the "newspaper" content angle.
