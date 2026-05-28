# HEMA Odense website

Static website for HEMA Odense, built with Astro and intended for free hosting on GitHub Pages.

## Local development

Install dependencies:

```bash
npm install
```

Start the local site:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

## Change text on pages

Most page text is in `src/pages/`. Search for `Lorem ipsum` and replace the placeholder text with real Danish copy.

## Add or edit events

Events live in `src/content/events/`.

To add an event, copy one of the existing `.md` files, rename it, and update the fields at the top:

```md
---
title: "Event title"
date: "2026-08-24"
location: "Odense"
image: "/images/events/event-placeholder.svg"
summary: "Short summary shown on the event list."
---

Full event text goes here.
```

Put event images in `public/images/events/` and update the `image` field.

## Update board members and trainers

People are edited in `src/data/people.ts`.

Change names, roles, emails, and image paths in either `trainers` or `board`. Put portrait images in `public/images/people/`.

## Update gear recommendations

Gear recommendations are edited in `src/data/gear.ts`.

Add, remove, or rewrite requirement sections in `gearSections`. Add concrete product or supplier recommendations in `gearRecommendations`.

## Update sponsors

Sponsors are edited in `src/data/sponsors.ts`.

Change sponsor names, descriptions, website links, and logo paths there. Put sponsor logos in `public/images/sponsors/`.

## Replace images

Images are stored in:

- `public/images/brand/`
- `public/images/hero/`
- `public/images/people/`
- `public/images/events/`
- `public/images/sponsors/`

You can replace an existing image by using the same file name, or add a new image and update the matching path in the page, event, or data file.

The header logo is `public/images/brand/logo-placeholder.svg`. Replace that file with the real logo, or update the path in `src/components/Header.astro`.

## Deploy on GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages when changes are pushed to `master` or `main`.

In the GitHub repository settings, enable Pages and choose **GitHub Actions** as the source.
