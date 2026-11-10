# Next Batch Start Dates Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add support for displaying upcoming departure/batch start dates (`nextBatchDates?: string[]`) across adventure cards, sticky metadata bars on adventure detail pages, and JSON-LD structured data schemas.

**Architecture:** Extend the TypeScript catalog interface (`Adventure`) with an optional `nextBatchDates?: string[]` field. Render dates dynamically on catalog cards (`/adventures` and home page grid) as visual calendar pill badges and in the adventure detail page sticky info header (`/adventures/[slug]`) with fallback to "Dates on Request". Update the `TouristTrip` JSON-LD schema to pass `startDate`.

**Architecture Diagram:**

```mermaid
graph TD
    subgraph Data Layer
        A[src/data/adventures.ts] -->|Adventure interface & items| B[Catalog Pages & Details]
    end

    subgraph UI Presentation
        B --> C[src/pages/adventures/index.astro]
        B --> D[src/components/HomePage.astro]
        B --> E[src/pages/adventures/[slug].astro]
    end

    subgraph Search & LLM Metadata
        E --> F[TouristTrip JSON-LD Schema]
    end
```

**Tech Stack:** Astro 4, TypeScript, Tailwind CSS, Lucide Astro Icons.

## Global Constraints

- Preserve Astro static site generation compatibility.
- Ensure responsive rendering on both mobile and desktop viewports.
- Maintain existing visual aesthetic (dark/orange theme accents).

---

### Task 1: Update Data Model and Adventure Items (`src/data/adventures.ts`)

**Files:**
- Modify: [`src/data/adventures.ts`](file:///Users/narayansingh/Projects/plus530adventure/src/data/adventures.ts#L1-L21)

**Interfaces:**
- Consumes: Existing `Adventure` interface definition
- Produces: Updated `Adventure` interface with `nextBatchDates?: string[]` and populated batch dates for adventures.

- [ ] **Step 1: Update `Adventure` interface definition**

```typescript
export interface Adventure {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Difficult';
  price: string;
  image: string;
  backgroundImage: string;
  highlights: string[];
  included: string[];
  nextBatchDates?: string[];
  gallery?: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  featured?: boolean;
}
```

- [ ] **Step 2: Add `nextBatchDates` values to adventures list**

Add `nextBatchDates` arrays to existing adventure objects (e.g. `["15th Oct 2026", "05th Nov 2026"]`).

- [ ] **Step 3: Run build check to verify TypeScript compilation**

Run: `pnpm build`  
Expected: PASS clean SSG build.

- [ ] **Step 4: Commit changes**

```bash
git add src/data/adventures.ts
git commit -m "feat: add nextBatchDates field to Adventure interface and catalog items (#35)"
```

---

### Task 2: Display Next Batch Dates on Adventure Details Sticky Bar & JSON-LD (`src/pages/adventures/[slug].astro`)

**Files:**
- Modify: [`src/pages/adventures/[slug].astro`](file:///Users/narayansingh/Projects/plus530adventure/src/pages/adventures/%5Bslug%5D.astro#L40-L75)

**Interfaces:**
- Consumes: `adventure.nextBatchDates` array
- Produces: Rendered batch dates in sticky info bar and JSON-LD schema

- [ ] **Step 1: Update `TouristTrip` JSON-LD schema to include `startDate`**

Add `startDate` property to schema when `adventure.nextBatchDates` exists.

- [ ] **Step 2: Render Next Batch section in Quick Info sticky header**

Add a calendar section in the sticky bar displaying upcoming batch dates, or "Dates on Request" fallback.

- [ ] **Step 3: Run build check to verify static generation**

Run: `pnpm build`  
Expected: PASS clean build output.

- [ ] **Step 4: Commit changes**

```bash
git add src/pages/adventures/[slug].astro
git commit -m "feat: render next batch dates in sticky bar and JSON-LD (#35)"
```

---

### Task 3: Display Next Batch Dates on Catalog & Home Page Cards (`src/pages/adventures/index.astro` & `src/components/HomePage.astro`)

**Files:**
- Modify: [`src/pages/adventures/index.astro`](file:///Users/narayansingh/Projects/plus530adventure/src/pages/adventures/index.astro#L30-L55)
- Modify: [`src/components/HomePage.astro`](file:///Users/narayansingh/Projects/plus530adventure/src/components/HomePage.astro)

**Interfaces:**
- Consumes: `adventure.nextBatchDates`
- Produces: Calendar pill tag on adventure catalog cards

- [ ] **Step 1: Add Next Batch pill badge to catalog page cards**

Render a `📅 Next: [Date]` badge on cards in `src/pages/adventures/index.astro`.

- [ ] **Step 2: Add Next Batch pill badge to home page featured expedition cards**

Render the badge on cards in `src/components/HomePage.astro`.

- [ ] **Step 3: Run production build verification**

Run: `pnpm build`  
Expected: PASS

- [ ] **Step 4: Commit changes and close issue #35**

```bash
git add src/pages/adventures/index.astro src/components/HomePage.astro
git commit -m "feat: render next batch date badges on catalog cards (#35)"
gh issue close 35 -c "Added Next Batch Start Dates support across data, detail pages, catalog cards, and JSON-LD schema."
```
