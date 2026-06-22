# Contributing to archview docs

This is the documentation site for
[**archview**](https://github.com/eularixs/archview). Library code lives in that
repository; this repo is the Fumadocs (Next.js) site.

## Edit content

Documentation pages are MDX files under `content/docs/`. The sidebar order is
`content/docs/meta.json`.

```sh
bun install
bun run dev      # http://localhost:3000, hot reload
```

Add a page by dropping a new `.mdx` file in `content/docs/` and listing it in
`meta.json`.

## Before a PR

```sh
bun run build    # must succeed
```

- Keep the voice consistent with existing pages.
- Be accurate about what archview does and its limitations — don't promise
  features that aren't shipped.

## License

Content and code in this repository are licensed under the
[MIT License](LICENSE).
