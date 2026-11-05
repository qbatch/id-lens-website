# Passport Photo Fit landing site

Marketing site for **Passport Photo Fit: ID & Visa** — home, privacy policy, terms, and support.

## Develop

```bash
yarn install
yarn dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
yarn build
yarn preview
```

Static output is written to `dist/`.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Product landing page |
| `/privacy` | Privacy policy (aligned with in-app text) |
| `/terms` | Terms of use (aligned with in-app user agreement) |
| `/support` | FAQ and resources |

Update copy in `src/data/site.ts` and page components as the app ships.

## SEO

- Canonical URLs, Open Graph, and Twitter cards via `src/layouts/BaseLayout.astro`
- JSON-LD on all pages (`src/data/seo.ts`): `WebSite` + `SoftwareApplication` on home, `WebPage` + breadcrumbs on legal pages, `FAQPage` on support
- Auto-generated sitemap (`src/pages/sitemap.xml.ts`) and dynamic `robots.txt`
- Social preview image at `public/og.svg` — replace with a 1200×630 PNG/JPG for best results on all networks
- Set production URL in `astro.config.mjs` (`site`) and `src/data/seo.ts` (`siteUrl`) together
