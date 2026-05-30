# HEMA Odense Website

Static website for HEMA Odense, built with [Astro](https://astro.build/) and deployed with GitHub Pages.

The site is meant to be cheap to host and easy to maintain. Most content can be changed by editing files in `src/pages/`, `src/data/`, `src/content/`, and `public/images/`.

## Quick Start

Install dependencies:

```bash
npm install
```

Run the site locally:

```bash
npm run dev
```

Build and check the site:

```bash
npm run build
```

The local development site usually runs at:

```text
http://127.0.0.1:4321/
```

## Project Structure

Important folders:

```text
src/pages/              Main website pages
src/components/         Reusable page parts
src/layouts/            Shared page layout and footer
src/data/               Easy-to-edit data for people, sponsors and gear
src/content/events/     Event posts written as Markdown
public/images/          Images used on the site
public/documents/       PDFs and downloadable files
.github/workflows/      GitHub Pages deployment
```

## Editing Existing Pages

Most normal page text is inside `src/pages/`.

Examples:

```text
src/pages/index.astro                  Home page
src/pages/hvem-er-vi.astro             Hvem er vi?
src/pages/hvad-er-hema.astro           Hvad er HEMA?
src/pages/udstyr.astro                 Udstyr
src/pages/sponsorer.astro              Sponsorer
src/pages/regler.astro                 Regler i klubben
src/pages/vedtaegter.astro             Vedtægter
```

To edit text, open the page file and change the visible Danish text between HTML tags.

Example:

```astro
<h2>Velkommen til HEMA Odense</h2>
<p>
  This text can be changed.
</p>
```

After editing, run:

```bash
npm run build
```

## Adding A New Page

Create a new `.astro` file in `src/pages/`.

Example:

```text
src/pages/ny-side.astro
```

Use this starter:

```astro
---
import Hero from "@components/Hero.astro";
import BaseLayout from "@layouts/BaseLayout.astro";
---

<BaseLayout title="Ny side" description="Kort beskrivelse af siden.">
  <Hero
    title="Ny side"
    subtitle="Kort tekst under overskriften."
    image="/images/hero/Club_foto.jpg"
  />

  <section class="content-section narrow">
    <p class="eyebrow">Kategori</p>
    <h2>Overskrift</h2>
    <p>
      Skriv sidens tekst her.
    </p>
  </section>
</BaseLayout>
```

The page URL will match the filename:

```text
src/pages/ny-side.astro -> /ny-side/
```

## Adding A Page To The Header Menu

Edit:

```text
src/components/Header.astro
```

Top-level menu items are in `navItems`:

```ts
const navItems = [
  { href: "/", label: "Forside" },
  { href: "/events/", label: "Events" },
];
```

Add a new item like this:

```ts
{ href: "/ny-side/", label: "Ny side" },
```

Subpages under **Hvem er vi?** are inside:

```astro
<div class="nav-submenu">
  <a href={withBase("/bestyrelse-og-traenere/")}>Bestyrelse og trænere</a>
  <a href={withBase("/vedtaegter/")}>Vedtægter</a>
  <a href={withBase("/regler/")}>Regler i klubben</a>
</div>
```

Add a new submenu link there if needed.

## Images

Images live in `public/images/`.

Current image folders:

```text
public/images/brand/       Logo and favicon
public/images/events/      Event images
public/images/gear/        Gear recommendation images
public/images/hero/        Large page images
public/images/people/      Trainer and board portraits
public/images/sponsors/    Sponsor logos
```

Image paths in code should start with `/images/...`.

Example:

```astro
image="/images/hero/Club_foto.jpg"
```

or:

```ts
image: "/images/people/Simon.jpeg"
```

To replace an image, either:

- replace the existing file with a new file using the same name, or
- add a new file and update the path in the page/data file.

## Logo And Browser Tab Icon

The header logo and browser tab icon use:

```text
public/images/brand/Hema_odense_logo.png
```

The header logo is set in:

```text
src/components/Header.astro
```

The browser tab icon is set in:

```text
src/layouts/BaseLayout.astro
```

## Events

Events are Markdown files in:

```text
src/content/events/
```

To add an event:

1. Copy an existing event file.
2. Rename it, for example:

```text
danehof2026.md
```

3. Edit the top fields and the body text.

Example:

```md
---
title: "Danehof 2026"
date: "2026-08-24"
location: "Nyborg"
image: "/images/events/event-image.jpg"
summary: "Kort tekst der vises på eventlisten."
---

Skriv hele eventbeskrivelsen her.
```

Event images should be placed in:

```text
public/images/events/
```

The event URL is based on the filename:

```text
src/content/events/danehof2026.md -> /events/danehof2026/
```

## Trainers And Board Members

Edit people in:

```text
src/data/people.ts
```

There are two lists:

```ts
export const trainers = [...]
export const board = [...]
```

Example person:

```ts
{
  name: "Simon Nyborg",
  role: "Langsværd- og sabeltræner",
  email: "kontakt@example.dk",
  image: "/images/people/Simon.jpeg",
}
```

Portraits should be placed in:

```text
public/images/people/
```

## Gear Recommendations

Gear content is edited in:

```text
src/data/gear.ts
```

There are two main sections:

```ts
gearSections          General requirement cards
gearRecommendations  Concrete product recommendations
```

### Requirement Cards

Example:

```ts
{
  title: "Fuld sparring",
  items: [
    "Maske og baghovedbeskytter.",
    "Fægtejakke og handsker.",
    "Ben- og knæbeskyttere.",
  ],
}
```

### Product Recommendations

Each category can have multiple products. Each product has link text, URL and image.

Example:

```ts
{
  category: "Sværd",
  recommendation: "Regenyei Medium Flex eller Sigi Feder",
  notes: "Kort forklaring af anbefalingen.",
  products: [
    {
      label: "Regenyei Standard Feder",
      href: "https://regenyei.com/product/standard-feder/#blade",
      image: "/images/gear/sword-placeholder.svg",
    },
    {
      label: "Sigi Feder",
      href: "https://sigiforge.com/products/sigi-feder/",
      image: "/images/gear/sigi-forge-feder.jpg",
    },
  ],
}
```

Gear images should be placed in:

```text
public/images/gear/
```

## Sponsors

Sponsors are edited in:

```text
src/data/sponsors.ts
```

Example:

```ts
{
  name: "Fjernvarme Fyn",
  description: "Kort tekst om sponsorens støtte.",
  website: "https://example.dk",
  logo: "/images/sponsors/Fjernvarme-fyn.png",
}
```

Sponsor logos should be placed in:

```text
public/images/sponsors/
```

## Footer

The footer is shared across all pages and is edited in:

```text
src/layouts/BaseLayout.astro
```

Footer styling is in:

```text
src/styles/global.css
```

The footer currently contains:

- Address
- Contact email
- Social media links

## Rules And Vedtægter

The rules page is:

```text
src/pages/regler.astro
```

Rules are stored in the `rules` array at the top of the file.

The vedtægter page is:

```text
src/pages/vedtaegter.astro
```

Vedtægter are stored in the `sections` array at the top of the file. Each paragraph should have its own section.

The signed PDF is stored here:

```text
public/documents/vedtaegter-2025.pdf
```

## Styling

Most styling is in:

```text
src/styles/global.css
```

Common classes:

```text
content-section       Standard page section
narrow                Narrow text section
two-column            Text/image two-column section
card-grid             Three-column card layout
button                Red call-to-action button
secondary             Secondary button style
```

Try to reuse existing classes before adding new CSS.

## Deployment

The site deploys to GitHub Pages using:

```text
.github/workflows/deploy.yml
```

Deployment runs automatically when changes are pushed to `main`.

The Astro config is set up for GitHub Pages project hosting:

```text
astro.config.mjs
```

The live URL is expected to be:

```text
https://simonnj.github.io/HemaOdense/
```

## Before Publishing Changes

Always run:

```bash
npm run build
```

If it finishes with `0 errors` and `0 warnings`, the site should be ready to publish.

Then commit and push changes:

```bash
git add .
git commit -m "Describe the change"
git push
```
