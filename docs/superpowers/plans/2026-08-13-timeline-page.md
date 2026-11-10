# Timeline Feature Implementation Plan

> **For agentic workers:** Execute this plan task-by-task.

**Goal:** Create a dedicated `/timeline` page showcasing upcoming adventure batch departures in a clean, vertical chronological tree grouped by month.

---

### Task 1: Timeline Data Helper (`src/utils/timeline.ts`)

**Files:**
- Create: `src/utils/timeline.ts`

- [ ] Create `getTimelineBatches()` helper that parses all `adventures.ts` batch dates, sorts them chronologically, and groups them by Month/Year (e.g., "September 2026").
- [ ] Export `TimelineBatchItem` and `GroupedTimeline` interfaces.

---

### Task 2: Timeline Page (`src/pages/timeline.astro`)

**Files:**
- Create: `src/pages/timeline.astro`

- [ ] Build `/timeline` route with Astro `Layout` and `Container`.
- [ ] Implement header banner: "Upcoming Expeditions Timeline".
- [ ] Add type filter buttons: `All Trips` | `Car Convoy` | `Motorcycle Tours`.
- [ ] Implement vertical timeline tree layout:
  - Vertical guide line with connector nodes
  - Month group headers (e.g., "September 2026")
  - Individual batch cards featuring trip title, departure date, price, duration, image, and "Book This Batch" button linking to `/contact?adventure=slug&batch=dateStr`.
- [ ] Add client-side script for interactive type filtering.

---

### Task 3: Navbar & Footer Links

**Files:**
- Modify: `src/components/Navbar.astro`
- Modify: `src/components/Footer.astro`

- [ ] Add `{ href: '/timeline', label: 'Timeline' }` to `navLinks` in `Navbar.astro`.
- [ ] Add `Expeditions Timeline` link to Quick Links in `Footer.astro`.

---

### Task 4: Build Verification & Deployment

- [ ] Run `pnpm build` to verify SSG generation.
- [ ] Commit changes to git.
- [ ] Deploy to Cloudflare Pages via `wrangler pages deploy`.
