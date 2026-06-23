export const appName = 'Arch Reactor';
export const version = 'v0.6.1';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://archview-docs.vercel.app';

export const siteDescription =
  'Arch Reactor is structural tooling for Go backends. archview renders a live architecture flow graph from source (endpoint → controller → service → repository); arch-diff shows how that structure changes across two git refs and which code a change orphans.';

// Products under the Arch Reactor umbrella.
export const products = {
  archview: 'archview',
  archDiff: 'arch-diff',
} as const;

export const gitConfig = {
  user: 'eularixs',
  repo: 'archview',
  branch: 'main',
};
