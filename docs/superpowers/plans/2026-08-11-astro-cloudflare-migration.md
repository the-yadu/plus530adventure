# Next.js to Astro & Cloudflare Pages Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the Plus530 Adventure website from Next.js 14 to Astro 4 deployed on Cloudflare Pages while preserving 100% visual styling, layouts, and content.

**Architecture:** Create native Astro components (`.astro`) and file-based routes (`src/pages/*.astro`). Use Astro Content Collections for blog posts and `@astrojs/cloudflare` for static build output targeting `./dist` for Cloudflare Pages.

**Architecture Diagram:**

```mermaid
graph TD
    subgraph "Astro SSG Engine"
        Content[src/content/blog/*.md] --> AstroBlog[src/pages/blog/[slug].astro]
        Data[src/data/adventures.ts] --> AstroAdv[src/pages/adventures/[slug].astro]
        Data --> AstroHome[src/pages/index.astro]
        Layout[src/layouts/Layout.astro] --> Pages[src/pages/*.astro]
    end
    Pages --> Dist["./dist (Cloudflare Pages Output)"]
```

**Tech Stack:** Astro 4, TypeScript, Tailwind CSS, `@astrojs/cloudflare`, `lucide-astro`.

## Global Constraints
- Framework: Astro 4 (Static SSG)
- Adapter: `@astrojs/cloudflare`
- Output Directory: `./dist`
- Target Platform: Cloudflare Pages
- Package Manager: pnpm

---

### Task 1: Package Dependencies & Configuration

**Files:**
- Modify: `package.json`
- Create: `astro.config.mjs`
- Create: `wrangler.toml`
- Create: `tailwind.config.mjs`
- Modify: `AGENTS.md`

**Interfaces:**
- Consumes: Tailwind theme config
- Produces: Astro build scripts and Cloudflare Pages target setup

- [ ] **Step 1: Update `package.json` for Astro**

```json
{
  "name": "plus530adventure",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/cloudflare": "^11.0.0",
    "@astrojs/check": "^0.9.0",
    "@astrojs/tailwind": "^5.1.0",
    "astro": "^4.15.0",
    "lucide-astro": "^0.454.0",
    "tailwindcss": "^3.4.19",
    "typescript": "^5.5.0"
  }
}
```

- [ ] **Step 2: Create `astro.config.mjs`**

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

- [ ] **Step 3: Create `wrangler.toml`**

```toml
name = "plus530adventure"
compatibility_date = "2026-08-11"
pages_build_output_dir = "./dist"
```

- [ ] **Step 4: Create `tailwind.config.mjs`**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#FBF4E6',
        foreground: '#31291E',
        cream: {
          50: '#FBF4E6',
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
    },
  },
  plugins: [],
};
```

---

### Task 2: Layout & Core UI Components

**Files:**
- Create: `src/layouts/Layout.astro`
- Create: `src/components/ui/Container.astro`
- Create: `src/components/ui/Button.astro`
- Create: `src/components/ui/Card.astro`
- Create: `src/components/Navbar.astro`
- Create: `src/components/Footer.astro`
- Create: `src/styles/globals.css`

- [ ] **Step 1: Create `src/styles/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #FBF4E6;
  --foreground: #31291E;
}

body {
  color: var(--foreground);
  background: var(--background);
}

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 2: Create `src/layouts/Layout.astro`**

```astro
---
import '../styles/globals.css';
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';

interface Props {
  title?: string;
  description?: string;
}

const { 
  title = "Plus530 Adventure | Himalayan Expeditions & Overland Trips", 
  description = "Join Plus530 Adventure for luxury Himalayan overland expeditions, self-drive 4x4 trips, and high-altitude mountain journeys across Bhutan, Nepal, Ladakh, and Western Ghats." 
} = Astro.props;
---

<!html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <title>{title}</title>
    <meta name="description" content={description} />
  </head>
  <body class="antialiased font-sans min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

- [ ] **Step 3: Create UI Components (`Container.astro`, `Button.astro`, `Card.astro`)**

- [ ] **Step 4: Create `Navbar.astro` and `Footer.astro`**

---

### Task 3: Content Collections & Adventure Data

**Files:**
- Create: `src/content/config.ts`
- Move/Copy: `content/blog/*.md` to `src/content/blog/*.md`
- Create: `src/data/adventures.ts`

- [ ] **Step 1: Create `src/content/config.ts`**

```typescript
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    author: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
```

- [ ] **Step 2: Copy adventure catalog data to `src/data/adventures.ts`**

---

### Task 4: Astro Pages Creation

**Files:**
- Create: `src/pages/index.astro`
- Create: `src/pages/about.astro`
- Create: `src/pages/adventures/index.astro`
- Create: `src/pages/adventures/[slug].astro`
- Create: `src/pages/blog/index.astro`
- Create: `src/pages/blog/[slug].astro`
- Create: `src/pages/contact.astro`
- Create: `src/pages/refund-policy.astro`

- [ ] **Step 1: Create Home Page (`src/pages/index.astro`)**
- [ ] **Step 2: Create Adventures List & Detail Pages (`[slug].astro`)**
- [ ] **Step 3: Create Blog List & Detail Pages (`[slug].astro`)**
- [ ] **Step 4: Create About, Contact, and Refund Policy Pages**

---

### Task 5: Build Verification & Clean Up

**Files:**
- Remove old Next.js files: `app/`, `next.config.mjs`, `next-env.d.ts`, `postcss.config.mjs`

- [ ] **Step 1: Run `pnpm build`**

Expected: `✓ Completed in X.XXs` with clean static output in `./dist`.

- [ ] **Step 2: Commit all changes**

```bash
git add .
git commit -m "feat: migrate Next.js to Astro & Cloudflare Pages (#4)"
```
