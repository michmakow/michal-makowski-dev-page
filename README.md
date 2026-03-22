# michalmakowski.dev (Next.js)

Production-ready portfolio starter built with Next.js (App Router), including:

- SEO configuration (`metadata`, `robots.txt`, `sitemap.xml`, JSON-LD)
- Unit test setup (Vitest + Testing Library)
- TypeScript, ESLint, and Tailwind CSS

## Quick Start

```bash
npm install
npm run dev
```

The app runs on `http://localhost:3000`.

## Environment Variables

Set the public site URL (used by SEO metadata and sitemap):

```bash
NEXT_PUBLIC_SITE_URL=https://michalmakowski.dev
```

## Scripts

```bash
npm run dev
npm run lint
npm run test
npm run test:watch
npm run test:coverage
npm run build
```

## SEO Files

- Global metadata: `src/app/layout.tsx`
- Home page canonical/OG metadata: `src/app/page.tsx`
- robots.txt route: `src/app/robots.ts`
- sitemap.xml route: `src/app/sitemap.ts`
- Structured data (JSON-LD): `src/app/page.tsx`
- Domain and canonical URL helpers: `src/lib/site.ts`
