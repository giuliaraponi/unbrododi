# Project: un brodo di...

## Stack

- Astro static site
- TypeScript
- No backend, database, authentication, CMS, or admin area
- Poems stored as local Markdown using Astro Content Collections
- Deployed as a static site

## Content rules

- Poems are the primary content.
- Each poem has: title, slug, short introduction, tags, full Markdown content, and optional supporting images.
- Do not invent poems, authors, dates, tags, or images.
- Do not create individual pages for each poem; poems open in an accessible dialog.
- The About page uses placeholder content until I replace it.

## Design rules

- Visual direction: elegant, minimal, literary, calm.
- Palette: papyrus/paper tones with burgundy accents.
- Use the centralized design-token system.
- Components may use only semantic CSS custom properties.
- Never use raw hex colors, font names, font sizes, spacing values, radii, or durations inside components.
- Primitive tokens contain raw values.
- Semantic tokens reference primitive tokens.
- Support responsive layouts from 320px upward.
- Poem cards: maximum 4 per row on desktop, 1 per row on mobile.
- Poem dialog must be accessible: title, visible close button, Escape support, and managed focus.

## Commands

- `pnpm astro check`
- `pnpm build`
