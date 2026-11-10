# Design Specification: Next Batch Start Dates

**Date:** 2026-08-12  
**Status:** Draft / Pending Review  
**Target Project:** Plus530 Adventure (`plus530adventure`)  

---

## 1. Overview & Objective
Allow prospective travellers to view upcoming expedition departure dates across Plus530 Adventure trips. The system will support displaying one or multiple upcoming batch dates (e.g. `["15th Oct 2026", "05th Nov 2026"]`), with fallback handling when dates are pending or custom.

---

## 2. Data Schema Update (`src/data/adventures.ts`)

Extend the `Adventure` interface to support an array of upcoming batch start dates:

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
  nextBatchDates?: string[]; // e.g. ["15th Oct 2026", "05th Nov 2026"]
  gallery?: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  featured?: boolean;
}
```

---

## 3. UI Component & Placement Integration

### A. Adventure Detail Page (`src/pages/adventures/[slug].astro`)
1. **Quick Info Sticky Header**:
   - Add a calendar metadata widget showing the next upcoming batch date.
   - If multiple dates exist, display a clean pill badge set listing upcoming dates (e.g., `15 Oct 2026 | 05 Nov 2026`).
2. **Fallback Handling**:
   - If `nextBatchDates` is missing or empty, display `Dates on Request`.
3. **Structured Data (JSON-LD)**:
   - Include `startDate` properties inside the `TouristTrip` JSON-LD schema for search engines and LLM crawlers.

### B. Adventure Catalog & Home Page Cards (`src/pages/adventures/index.astro` & `src/components/HomePage.astro`)
1. **Card Badge / Overlay**:
   - Display a prominent calendar pill badge on expedition cards:
     - `📅 Next: 15 Oct 2026`
   - Keeps the design clean without cluttering card layouts.

---

## 4. Testing & Verification Plan
1. Validate type safety with `pnpm build`.
2. Verify visual appearance on mobile and desktop viewports across catalog cards and adventure detail sticky headers.
3. Confirm JSON-LD reflects next batch availability.
