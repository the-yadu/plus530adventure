# Design Spec: Google SEO & LLM Search (GEO/LLMO) Optimization Strategy

## 1. Overview & Objective
This specification defines the 360° optimization strategy for **Plus530 Adventure** to maximize visibility, rankings, and citation frequency across traditional search engines (Google, Bing) and AI search engines (Google AI Overviews, Perplexity, ChatGPT Search, Claude).

---

## 2. Technical SEO & Automated Indexing

### 2.1 Automated Sitemap (`@astrojs/sitemap`)
- **Package:** `@astrojs/sitemap`
- **Config:** Update `astro.config.mjs` to include `sitemap()`.
- **Site URL:** `https://plus530adventure.com`
- **Behavior:** Automatically generates `dist/sitemap-index.xml` and `dist/sitemap-0.xml` during `pnpm build` containing all 41+ static pages.

### 2.2 Bot Access & Crawler Policy (`public/robots.txt`)
- Allow access to Googlebot, Bingbot, OAI-SearchBot (ChatGPT), PerplexityBot, ClaudeBot, Applebot.
- Explicitly point to:
  ```txt
  Sitemap: https://plus530adventure.com/sitemap-index.xml
  LLMs-txt: https://plus530adventure.com/llms.txt
  ```

### 2.3 OpenGraph & Twitter Card Metadata (`src/layouts/Layout.astro`)
- Add `image` prop to `Layout.astro` (defaulting to absolute URL `https://plus530adventure.com/images/adventures/bhutan-car-convoy.jpg`).
- Set full OpenGraph and Twitter card tags:
  ```html
  <meta property="og:image" content={fullImageUrl} />
  <meta property="twitter:image" content={fullImageUrl} />
  ```

---

## 3. Structured Data & Deep Entity Schemas (`schema.org`)

### 3.1 Organization & TravelAgency Schema (Global Layout)
Injected in `src/layouts/Layout.astro`:
- `@type`: `TravelAgency`
- `name`: `Plus530 Adventure`
- `url`: `https://plus530adventure.com`
- `knowsAbout`: Expedition travel, 4x4 self-drive convoys, motorcycle tours, Himalayan overlanding.
- `sameAs`: Official WhatsApp community & social links.

### 3.2 TouristTrip & Event Schema (Detail Pages)
Injected in `src/pages/car-tours/[slug].astro` & `src/pages/motorcycle-tours/[slug].astro`:
- `@type`: `TouristTrip`
- `name`, `description`, `image`, `offers` (Price in INR).
- `itinerary`: Structured `ItemList` of `ListItem` steps with day titles and descriptions.
- `event`: Array of upcoming batch departure dates.

### 3.3 FAQPage Schema (Detail Pages & Contact Page)
Injected alongside the visual FAQ accordion component:
- `@type`: `FAQPage`
- `mainEntity`: Array of `Question` and `Answer` pairs.

---

## 4. AI Machine-Readable Engine (`llms.txt` & `llms-full.txt`)

### 4.1 `public/llms.txt` Alignment
Update existing file to reflect updated routes:
- `/car-tours/slug` for car convoy trips
- `/motorcycle-tours/slug` for motorcycle tours
- `/timeline` for upcoming batch schedules

### 4.2 Automated Generation Utility (`src/utils/generate-llms-txt.ts`)
Create a helper script run before/during build that parses `src/data/adventures.ts` and outputs up-to-date markdown summary files (`public/llms.txt` and `public/llms-full.txt`).

---

## 5. Direct-Answer Visual Components & On-Page Content

### 5.1 FAQ Accordion Component (`src/components/ui/FAQAccordion.astro`)
- Native interactive component rendering common questions:
  1. *Do I need my own 4x4 car or can I join with a regular vehicle?*
  2. *What is included in the convoy support package?*
  3. *What is the room occupancy and single supplement policy?*
  4. *How are high-altitude emergencies handled?*
- Renders corresponding `FAQPage` JSON-LD schema automatically.

---

## 6. Self-Review Checklist

- [x] Placeholder scan: No TBDs or vague specs.
- [x] Internal consistency: Router paths match `/car-tours/` and `/motorcycle-tours/`.
- [x] Scope check: Cleanly focused on SEO & LLM search optimization.
- [x] Ambiguity check: Schema types and file paths explicitly specified.
