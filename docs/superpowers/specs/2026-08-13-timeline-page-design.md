# Design Spec: Upcoming Expeditions Timeline Page (`/timeline`)

## 1. Overview
A new dedicated top-level page `/timeline` that presents all upcoming trip batch dates in a clean, interactive, vertical chronological timeline tree grouped by month (e.g., September 2026, October 2026, November 2026). Each batch node displays the start date, trip title, category badge (`Car Convoy` vs `Motorcycle Tour`), duration, price, image thumbnail, and a direct "Book Batch" / "View Details" CTA.

---

## 2. Route & Navigation
- **Route:** `/timeline` (`src/pages/timeline.astro`)
- **Navbar Update:** Add `Timeline` to the main navigation items in `src/components/Navbar.astro`:
  `Home | Adventures | Timeline | About | Blog | Contact`
- **Footer Update:** Add `Expeditions Timeline` link under Quick Links.

---

## 3. Data Processing & Timeline Data Model (`src/utils/timeline.ts`)

Create a helper utility `getTimelineBatches()`:

1. Iterates over all entries in `src/data/adventures.ts`.
2. Filters each trip's `nextBatchDates` using `getUpcomingBatchDates()`.
3. Flattens all batch instances into individual timeline items:
   ```typescript
   export interface TimelineBatchItem {
     dateStr: string;
     dateObj: Date;
     monthYearKey: string; // e.g. "September 2026"
     adventure: Adventure;
   }
   ```
4. Sorts all batch items chronologically by `dateObj.getTime()`.
5. Groups batch items by `monthYearKey`.

---

## 4. UI / Visual Layout (`src/pages/timeline.astro`)

### Page Banner
- Dark hero section: "Expedition Timeline"
- Subtitle: "Plan your next journey — all upcoming departure dates grouped chronologically."

### Filter Bar (Optional Type Filter)
- Pill buttons: `All Trips` | `Car Convoy` | `Motorcycle Tours`
- Allows visitors to filter the timeline by vehicle preference.

### Vertical Timeline Tree Structure
- Central vertical accent line (`border-l-2 border-orange-500` or central spine).
- **Month Group Header:** Sticky or prominent month badge (e.g., `September 2026` with calendar icon).
- **Timeline Nodes:**
  - Left side (on desktop) or inline: Date badge (e.g. `01 SEP`).
  - Connector dot on the vertical line with subtle glow.
  - Right side card: Rich preview card containing trip image, category tag, title, price, duration, and direct booking CTA linking to `/contact?adventure=slug&batch=dateStr`.

---

## 5. Accessibility & Mobile Responsiveness
- On mobile devices (< 768px), the vertical line aligns to the left edge with cards stacking neatly to the right.
- Clean typography and hover micro-interactions.
