# tommo1818.github.io

Personal site for Tom Vernon — CV, selected work, writing and the rest of it.

Built with [Astro](https://astro.build), output as pure static HTML, deployed to GitHub
Pages by GitHub Actions.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve the built output
```

## Structure

```text
src/
├─ data/site.ts           # links, experience, education, skills, posts, "outside" copy
├─ content/work/*.md      # one case study per file (frontmatter + Markdown body)
├─ content.config.ts      # case study schema
├─ layouts/Base.astro     # <head>, nav, footer, SEO, JSON-LD, reveal animation
├─ components/ProjectCard.astro
├─ pages/index.astro      # the homepage
├─ pages/work/[slug].astro
└─ styles/global.css      # design tokens + all styles, including print rules
```

### Adding a case study

Drop a `.md` file in `src/content/work/`:

```yaml
---
title: 'Project name'
summary: 'One line for the card.'
kicker: 'Category · Subcategory'
year: '2026'
order: 7            # card order on the homepage
stack: ['Python', 'Docker']
live: 'https://…'   # optional
repo: 'https://…'   # optional
featured: true      # optional, default true
---
```

Then write the body as Markdown. `## The problem`, `## What I built`, `## What I learned`
is the house style.

## Content still to fill in

Everything below is deliberately left blank rather than invented — blank fields simply
don't render.

- [x] Employer names — Options Technology, Asia Space
- [x] Music links — Spotify artist + Bandcamp / SoundCloud / Apple / Instagram
- [x] LinkedIn URL — linkedin.com/in/tom-vernon-7442b0197
- [ ] Dates for the Swansea degree and the two jobs (currently "1 year" / "In progress")
- [x] LinkedIn URL — linkedin.com/in/tom-vernon-7442b0197
- [ ] A contact email (`links.email`) — currently points at the blog's contact page
- [ ] `og-image.png` (1200×630) plus the matching `og:image` meta in `Base.astro`
- [ ] Real screenshots inside the case studies — the diagrams are hand-authored SVG for now
- [ ] Location, if you want it on the site (currently omitted)

Diagrams live in `public/diagrams/*.svg` and are referenced from the `diagram:` field in
each case study's frontmatter. They appear both on the card and at the top of the case
study page.

## Deploying

The workflow in `.github/workflows/deploy.yml` builds and publishes `dist/` on every push
to `main`. In the repository settings, **Pages → Build and deployment → Source** must be set
to **GitHub Actions** (not "Deploy from a branch").

## CV PDF

"Download CV" calls `window.print()`. The print stylesheet in `global.css` strips the nav,
colours and animations and reflows the rest into a light, single-column CV — so the browser's
"Save as PDF" gives you a CV that can never drift from the site.
