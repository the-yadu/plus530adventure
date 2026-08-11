# Design Specification: Next.js to Astro & Cloudflare Pages Migration

**Date**: 2026-08-11
**Status**: Approved by User

## Overview
Migrate the **Plus530 Adventure** website from Next.js 14 (React) to Astro 4 deployed on Cloudflare Pages, maintaining 100% visual and content parity while optimizing performance with zero client-side JavaScript overhead.

## Architecture & Framework Setup

### 1. Astro Configuration (`astro.config.mjs`)
- **Output Mode**: `static` (Static Site Generation for Cloudflare Pages CDN)
- **Adapter**: `@astrojs/cloudflare`
- **Integrations**: `@astrojs/tailwind`

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  integrations: [tailwind()],
});
```

### 2. Cloudflare Deployment Configuration (`wrangler.toml`)
```toml
name = "plus530adventure"
compatibility_date = "2026-08-11"
pages_build_output_dir = "./dist"
```

## Directory & File Structure (`src/`)

```
plus530adventure/
├── public/                     # Static assets (images, logos, home video)
├── src/
│   ├── components/
│   │   ├── Navbar.astro        # Header navigation & responsive mobile menu
│   │   ├── Footer.astro        # Site footer
│   │   ├── HomePage.astro      # Full home page hero, banner, featured cards
│   │   └── ui/
│   │       ├── Button.astro    # Button component with variants
│   │       ├── Card.astro      # Card component with hover states
│   │       └── Container.astro # Centered layout container
│   ├── content/
│   │   ├── config.ts           # Astro content collection schema for blog
│   │   └── blog/               # Markdown blog posts (.md)
│   ├── data/
│   │   └── adventures.ts       # Adventures catalog array & TypeScript interfaces
│   ├── layouts/
│   │   └── Layout.astro        # Root HTML layout with Navbar & Footer
│   ├── pages/
│   │   ├── index.astro         # Homepage (/)
│   │   ├── about.astro         # About page (/about)
│   │   ├── adventures/
│   │   │   ├── index.astro     # Adventures catalog page (/adventures)
│   │   │   └── [slug].astro    # Dynamic adventure detail page (/adventures/[slug])
│   │   ├── blog/
│   │   │   ├── index.astro     # Blog listing page (/blog)
│   │   │   └── [slug].astro    # Dynamic blog post reader page (/blog/[slug])
│   │   ├── contact.astro       # Contact page with form (/contact)
│   │   └── refund-policy.astro # Refund policy page (/refund-policy)
│   └── styles/
│       └── globals.css         # Global CSS & Tailwind directives
├── astro.config.mjs            # Astro config
├── wrangler.toml               # Cloudflare Pages deployment config
├── package.json                # Dependencies
└── AGENTS.md                   # Updated project stack & commands
```

## Dependency Changes (`package.json`)

### Dependencies
- `astro`: `^4.0.0`
- `@astrojs/tailwind`: `^5.0.0`
- `@astrojs/cloudflare`: `^11.0.0`
- `lucide-astro`: `^0.4.0`
- `tailwindcss`: `^3.4.0`

### Removed Dependencies
- `next`, `react`, `react-dom`, `eslint-config-next`, `gray-matter`, `react-markdown`.

## Route & Content Specifications

1. **Root Layout (`src/layouts/Layout.astro`)**:
   - Implements `<html lang="en">`, `<head>` (SEO meta tags, title, open graph), `<Navbar />`, `<slot />`, `<Footer />`.

2. **Home Page (`src/pages/index.astro`)**:
   - Top banner ("TRIP TO BHUTAN IS LIVE"), full screen hero background video/image, CTA buttons, featured adventures grid, high-altitude experience stats, and company features.

3. **Adventures (`src/pages/adventures/index.astro` & `src/pages/adventures/[slug].astro`)**:
   - Data driven from `src/data/adventures.ts`.
   - Includes all 4 adventures: Bhutan, Nepal, Ladakh, Sakleshpur & Chikmagalur.
   - Preserves room sharing & single occupancy pricing policy cards.

4. **Blog (`src/pages/blog/index.astro` & `src/pages/blog/[slug].astro`)**:
   - Uses `getCollection('blog')` and `<Content />` rendering from `src/content/blog/*.md`.

5. **About, Contact & Refund Policy**:
   - Static pages rendered using native `.astro` components.

## Verification Criteria
- `pnpm dev` serves all routes (`/`, `/adventures`, `/adventures/[slug]`, `/blog`, `/blog/[slug]`, `/about`, `/contact`, `/refund-policy`).
- `pnpm build` creates static site output in `./dist` for Cloudflare Pages with zero build errors.
- Visual appearance and content match Next.js version 100%.
