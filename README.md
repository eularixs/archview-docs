# archview-docs

Documentation site for [**archview**](https://github.com/eularixs/archview) —
a live architecture flow graph for Go backends.

Built with [Fumadocs](https://fumadocs.dev) (Next.js). Content lives in
`content/docs/`.

## Develop

```sh
bun install
bun run dev      # http://localhost:3000
```

## Build

```sh
bun run build
```

## Deploy

Deploys to Vercel (Next.js, auto-detected). Set `NEXT_PUBLIC_SITE_URL` to the
production URL so canonical / OG / sitemap links resolve correctly.
