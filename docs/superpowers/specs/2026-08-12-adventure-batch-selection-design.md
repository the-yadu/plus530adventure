# Design Spec: Adventure & Batch Date Selection on Contact Form

## Overview
Enhance [contact.astro](file:///Volumes/NarayanAPFS/Projects/plus530adventure/src/pages/contact.astro) and adventure detail/cards links so users can select an expedition and batch date when making an inquiry. If a user clicks "Book Now" on an adventure page (e.g. `/adventures/bhutan-overland`), they are directed to `/contact?adventure=bhutan-overland&batch=15th%20Oct%202026`, auto-selecting the chosen trip and its first upcoming batch date.

---

## Technical Specifications

### 1. Link Updates
Update all "Book Now" buttons on:
- [src/pages/adventures/[slug].astro](file:///Volumes/NarayanAPFS/Projects/plus530adventure/src/pages/adventures/%5Bslug%5D.astro):
  - Link to `/contact?adventure=${adventure.slug}${upcomingBatchDates[0] ? `&batch=${encodeURIComponent(upcomingBatchDates[0])}` : ''}`
- [src/components/HomePage.astro](file:///Volumes/NarayanAPFS/Projects/plus530adventure/src/components/HomePage.astro) & adventure cards:
  - Ensure links carry query params where applicable.

### 2. Contact Form Dropdowns (`src/pages/contact.astro`)
- **Adventure Select (`name="adventure"`):**
  - Options populated from `adventures` array.
  - Includes a default "General Inquiry / Custom Expedition" option.
  - Auto-selects based on URL search param `?adventure=...`.
- **Batch Date Select (`name="batch_date"`):**
  - Dynamically updates when an adventure is selected.
  - Uses `getUpcomingBatchDates()` logic to filter valid upcoming batch dates.
  - If upcoming dates exist:
    - Container shown.
    - Options added (e.g., "15th Oct 2026", "05th Nov 2026").
    - Auto-selects `?batch=...` URL param or defaults to the first available date.
  - If no upcoming batch dates exist for the selected trip (or "General Inquiry"):
    - Batch date container hidden (`hidden`), value cleared / omitted.

---

## Data Schema & Payload
Form submission to Web3Forms will now send:
- `name`
- `email`
- `phone`
- `adventure` (e.g., "Bhutan Overland Adventure")
- `batch_date` (e.g., "15th Oct 2026" - included only when available)
- `message`
- `botcheck`
