# Adventure & Batch Date Selection Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Allow users to select an adventure and upcoming batch date on the contact form, with auto-selection when arriving from "Book Now" buttons, and hiding the batch date selector if no upcoming batch is available.

**Architecture:** Client-side JavaScript in `contact.astro` reads URL search parameters (`?adventure=...&batch=...`), dynamically manages dropdown option states from `adventures` data, auto-selects the first available upcoming batch date, and hides the batch selector when no dates exist.

**Tech Stack:** Astro 4, TypeScript, Tailwind CSS, Web3Forms API.

## Global Constraints
- Target Files: `src/pages/contact.astro`, `src/pages/adventures/[slug].astro`
- Data Source: `src/data/adventures.ts`, `src/utils/dates.ts`
- Package Manager: `pnpm`

---

### Task 1: Update "Book Now" Links on Adventure Detail Page

**Files:**
- Modify: `src/pages/adventures/[slug].astro`

**Interfaces:**
- Produces: Query parameters `?adventure=${slug}&batch=${encodeURIComponent(firstBatchDate)}` on contact page links.

- [ ] **Step 1: Update Book Now button href attributes in `src/pages/adventures/[slug].astro`**

Update lines 106 and 239 in [src/pages/adventures/[slug].astro](file:///Volumes/NarayanAPFS/Projects/plus530adventure/src/pages/adventures/%5Bslug%5D.astro):

```diff
-            <a href="/contact">
+            <a href={`/contact?adventure=${adventure.slug}${upcomingBatchDates.length > 0 ? `&batch=${encodeURIComponent(upcomingBatchDates[0])}` : ''}`}>
               <Button>Book Now</Button>
             </a>
```

```diff
-            <a href="/contact">
+            <a href={`/contact?adventure=${adventure.slug}${upcomingBatchDates.length > 0 ? `&batch=${encodeURIComponent(upcomingBatchDates[0])}` : ''}`}>
               <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                 Book This Adventure
               </Button>
             </a>
```

- [ ] **Step 2: Verify static build**
Run: `pnpm build`
Expected: PASS

- [ ] **Step 3: Commit**
```bash
git add src/pages/adventures/[slug].astro
git commit -m "feat: pass adventure and batch date query params to contact page"
```

---

### Task 2: Contact Form Adventure & Dynamic Batch Dropdowns

**Files:**
- Modify: `src/pages/contact.astro`

**Interfaces:**
- Consumes: `adventures` from `src/data/adventures.ts`, `getUpcomingBatchDates` from `src/utils/dates.ts`
- Produces: Dynamic `adventure` and `batch_date` dropdown fields with auto-selection logic.

- [ ] **Step 1: Import adventures data in `src/pages/contact.astro`**

Add imports to [src/pages/contact.astro](file:///Volumes/NarayanAPFS/Projects/plus530adventure/src/pages/contact.astro#L1-L5):

```astro
---
import Layout from '../layouts/Layout.astro';
import Container from '../components/ui/Container.astro';
import { Mail, Phone, MapPin, Send } from '@lucide/astro';
import { adventures } from '../data/adventures';
import { getUpcomingBatchDates } from '../utils/dates';
---
```

- [ ] **Step 2: Add Adventure and Batch Date dropdown markup to `src/pages/contact.astro`**

Add selects inside the form:

```html
              <div>
                <label for="adventure-select" class="block text-sm font-medium text-gray-700 mb-2">Select Adventure</label>
                <select
                  id="adventure-select"
                  name="adventure"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
                >
                  <option value="">General Inquiry / Custom Expedition</option>
                  {adventures.map((adv) => (
                    <option value={adv.slug} data-batches={JSON.stringify(getUpcomingBatchDates(adv.nextBatchDates))}>
                      {adv.title}
                    </option>
                  ))}
                </select>
              </div>

              <div id="batch-container" class="hidden">
                <label for="batch-select" class="block text-sm font-medium text-gray-700 mb-2">Start Batch Date</label>
                <select
                  id="batch-select"
                  name="batch_date"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
                >
                </select>
              </div>
```

- [ ] **Step 3: Add client script for URL parsing and dynamic batch options**

Update client `<script>` in [src/pages/contact.astro](file:///Volumes/NarayanAPFS/Projects/plus530adventure/src/pages/contact.astro):

```html
<script>
  const adventureSelect = document.getElementById('adventure-select') as HTMLSelectElement;
  const batchContainer = document.getElementById('batch-container') as HTMLDivElement;
  const batchSelect = document.getElementById('batch-select') as HTMLSelectElement;

  function updateBatchOptions(selectedBatchFromUrl?: string | null) {
    const selectedOption = adventureSelect.options[adventureSelect.selectedIndex];
    const batchesData = selectedOption.getAttribute('data-batches');

    batchSelect.innerHTML = '';

    if (batchesData) {
      try {
        const upcomingBatches: string[] = JSON.parse(batchesData);
        if (upcomingBatches && upcomingBatches.length > 0) {
          upcomingBatches.forEach((batchDate, index) => {
            const opt = document.createElement('option');
            opt.value = batchDate;
            opt.textContent = batchDate;
            batchSelect.appendChild(opt);
          });

          if (selectedBatchFromUrl && upcomingBatches.includes(selectedBatchFromUrl)) {
            batchSelect.value = selectedBatchFromUrl;
          } else {
            batchSelect.value = upcomingBatches[0]; // Auto-select first batch option
          }

          batchContainer.classList.remove('hidden');
          return;
        }
      } catch (e) {
        console.error('Error parsing batch dates', e);
      }
    }

    batchContainer.classList.add('hidden');
    batchSelect.value = '';
  }

  if (adventureSelect) {
    const urlParams = new URLSearchParams(window.location.search);
    const adventureParam = urlParams.get('adventure');
    const batchParam = urlParams.get('batch');

    if (adventureParam) {
      adventureSelect.value = adventureParam;
    }

    updateBatchOptions(batchParam);

    adventureSelect.addEventListener('change', () => {
      updateBatchOptions();
    });
  }
</script>
```

- [ ] **Step 4: Run build verification**

Run: `pnpm build`
Expected: PASS

- [ ] **Step 5: Commit changes**

```bash
git add src/pages/contact.astro
git commit -m "feat: add adventure selection and dynamic batch date dropdown to contact form"
```
