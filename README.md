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
```

To add a project, append an entry to `projects` in `src/data/content.js`. `media` accepts:

- `{ kind: 'video', src }` — one 16:9 player
- `{ kind: 'video-pair', items: [{ src, label }, …] }` — two portrait players
- `{ kind: 'figure-pair', from, to, fromLabel, toLabel }` — two plots with a "feeds" connector

YouTube links work as-is; a direct file URL renders in a native `<video>` instead.

## Design notes

Warm paper background, ink text, one rust accent. Instrument Serif for display, Inter for body,
JetBrains Mono for metadata. Dark mode follows `prefers-color-scheme` off the tokens in
`index.css` — no separate stylesheet.
