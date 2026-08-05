# aaditraj.github.io — personal site

Single-page portfolio for Aaditya Raj. React + Vite, deployed to GitHub Pages.

## Running it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run deploy   # build + publish dist/ to the gh-pages branch
```

`vite.config.js` sets `base: '/personal-website/'` to match the Pages URL. Change it if the
repository is ever renamed or moved to a custom domain.

## Where things live

```
src/
  data/content.js     profile, projects, experience, open source — edit copy here
  components/         Nav, Hero, Work, Media, Experience, Footer
  lib/youtube.js      turns watch / youtu.be / shorts URLs into embed URLs
  index.css           design tokens (color, type, spacing) + base styles
  App.css             layout for every section
scripts/
  trim-plot.py        crops the white margin off a matplotlib export (needs ffmpeg)
```

To add a project, append an entry to `projects` in `src/data/content.js`. `media` accepts:

- `{ kind: 'video', src }` — one 16:9 player
- `{ kind: 'video-pair', items: [{ src, label }, …] }` — two portrait players
- `{ kind: 'figure-flow', steps: [{ step, title, note, src, alt }, …], connector }` — stacked
  full-width plots joined by a labelled connector, for showing input → output

YouTube links work as-is; a direct file URL renders in a native `<video>` instead.

Plot images are checked in as WebP already trimmed to their content box, so they can fill their
frame without letterboxing. Run `python3 scripts/trim-plot.py <file.png>` on a fresh matplotlib
export before converting it.

## Design notes

Near-white background with a soft green cast, deep green-black text, one green accent plus a
pastel tint for washes and borders. Space Grotesk for display, Inter for body, JetBrains Mono for
metadata. Dark mode follows `prefers-color-scheme` off the tokens in `index.css` — no separate
stylesheet.
