# Design Spec: Motorcycle Tours & Multi-Type Adventure System

## Overview
Extend Plus530 Adventure from a car-only overland site to a multi-type adventure platform supporting **Car Convoy**, **Motorcycle Tours**, and (future) **Hiking**. Adventures share a unified data model with a `type` discriminator, separate detail page routes per type, and a unified `/adventures` listing with client-side tab filters.

---

## 1. Data Model Changes (`src/data/adventures.ts`)

### New `type` Field
Add a required `type` field to the `Adventure` interface:

```typescript
type AdventureType = 'car' | 'motorcycle' | 'hiking';

export interface Adventure {
  // ... existing fields ...
  type: AdventureType;
}
```

All 9 existing adventures receive `type: 'car'`.

### Route Prefix Helper
Add a helper function to derive the URL route prefix from the adventure type:

```typescript
export function getRoutePrefix(type: AdventureType): string {
  switch (type) {
    case 'car': return '/car-tours';
    case 'motorcycle': return '/motorcycle-tours';
    case 'hiking': return '/hiking';
  }
}

export function getAdventureUrl(adventure: Adventure): string {
  return `${getRoutePrefix(adventure.type)}/${adventure.slug}`;
}
```

All components use `getAdventureUrl(adventure)` instead of hardcoding `/adventures/${slug}`.

### Type Display Labels & Icons
Add a helper for human-readable labels:

```typescript
export function getTypeLabel(type: AdventureType): string {
  switch (type) {
    case 'car': return 'Car Convoy';
    case 'motorcycle': return 'Motorcycle Tour';
    case 'hiking': return 'Hiking';
  }
}
```

### Sample Motorcycle Tour Entries
Add 2 sample motorcycle tours to the `adventures` array:

1. **Ladakh Motorcycle Expedition** (`ladakh-motorcycle`) — 12 Days, Challenging, ₹1,35,000
2. **Rajasthan Royal Motorcycle Tour** (`rajasthan-motorcycle`) — 8 Days, Moderate, ₹78,000

Both entries follow the exact same `Adventure` interface with `type: 'motorcycle'`, full itinerary arrays, highlights, included items, and placeholder `nextBatchDates`.

---

## 2. Routing Changes

| Route | File | Purpose |
|---|---|---|
| `/adventures` | `src/pages/adventures/index.astro` | Unified listing with tab filters (stays) |
| `/car-tours/[slug]` | `src/pages/car-tours/[slug].astro` | Car convoy detail pages (moved from `adventures/[slug]`) |
| `/motorcycle-tours/[slug]` | `src/pages/motorcycle-tours/[slug].astro` | Motorcycle tour detail pages (new) |

### File Operations
- **Move** `src/pages/adventures/[slug].astro` → `src/pages/car-tours/[slug].astro`
- **Delete** `src/pages/adventures/[slug].astro`
- **Create** `src/pages/motorcycle-tours/[slug].astro` (same layout, filters by `type: 'motorcycle'`)
- **Keep** `src/pages/adventures/index.astro` (updated with filters)

Both `[slug].astro` files use `getStaticPaths()` filtered by their respective type.

---

## 3. Unified Adventures Listing Page (`/adventures`)

### Tab Filter Bar
Add a horizontal tab/pill filter bar above the grid:

- **All** (default) | **Car Convoy** | **Motorcycle Tours**
- Client-side JavaScript toggles visibility of cards based on a `data-type` attribute on each card.
- Active tab gets the orange brand highlight styling.

### Type Badge on Cards
Each adventure card displays a small badge indicating its type:
- 🚗 Car Convoy
- 🏍️ Motorcycle Tour

### Card Links
Cards link to the correct type-based route using `getAdventureUrl()`.

### Page Header Update
Update heading from "Explore self-drive 4x4 convoys and luxury overland journeys" to a broader description covering all adventure types.

---

## 4. Link Updates (14 references across 7 files)

### `src/components/HomePage.astro`
- **Line 24**: `/adventures/bhutan-overland` → `/car-tours/bhutan-overland`
- **Line 52**: `/adventures` → `/adventures` (stays — unified listing)
- **Line 94**: `/adventures/${adventure.slug}` → `getAdventureUrl(adventure)`

### `src/components/Navbar.astro`
- **Line 9**: `/adventures` → `/adventures` (stays — unified listing)
- **Line 248**: `/adventures/${item.slug}` → dynamic URL using type-aware routing from search data

### `src/components/Footer.astro`
- **Line 61**: `/adventures` → `/adventures` (stays)
- **Lines 80, 83, 86, 89**: Hardcoded adventure slugs → `/car-tours/<slug>`

### `src/pages/adventures/index.astro`
- **Line 30**: `/adventures/${adventure.slug}` → `getAdventureUrl(adventure)`

### `src/pages/car-tours/[slug].astro` (moved file)
- **Line 60**: "Back to Adventures" → link to `/adventures`
- **Line 244**: "View More Adventures" → link to `/adventures`

### `src/content/blog/bhutan-next-adventure.md`
- **Line 124**: `/adventures/bhutan-overland` → `/car-tours/bhutan-overland`

### `src/content/blog/vehicle-preparation-guide.md`
- **Line 263**: `/adventures` → `/adventures` (stays — unified listing)

### `src/pages/contact.astro`
- Adventure select dropdown and "Book Now" links already use `adventure.slug` — update to include type-aware route for `batch` query parameter links.

### Search in Navbar
- The search results must generate the correct URL per adventure type. Requires passing `type` data into the search item dataset.

---

## 5. Navbar Updates

The `Adventures` nav link continues to point to `/adventures` (the unified listing). No dropdown needed — the tab filters on the listing page handle type navigation.

---

## 6. Out of Scope
- Hiking tours (future — only the `type` field and data model supports it now)
- Separate homepage sections per adventure type
- Motorcycle-specific fields (bike model, riding experience level, etc.)
