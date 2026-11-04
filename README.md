# IDLens landing site

Marketing site for the IDLens app: home, privacy policy, and support.

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
| `/support` | FAQ and contact |

Update copy in `src/data/site.ts` and page components as the app ships.
