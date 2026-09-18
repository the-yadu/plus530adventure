# Design Spec: Cashfree Payment Gateway Compliance & Legal Policy Pages

## 1. Overview
Plus530 Adventure is integrating Cashfree Payment Gateway to accept online payments for expedition bookings. To satisfy regulatory requirements set by the Reserve Bank of India (RBI) and pass Cashfree merchant website onboarding audit, the website must provide clear, accessible, and comprehensive legal and policy pages.

This project introduces dedicated pages for Terms & Conditions, Privacy Policy, Shipping/Delivery Policy (Digital Service Fulfillment), updates the Refund & Cancellation Policy with mandatory turnaround times, updates contact details to use the verified business contact number (`+91 93532 10349`), updates the global site configuration, updates footer navigation links, and releases the changes to production.

---

## 2. Information Architecture & URL Routes

### 2.1 Routes
1. **`/terms-and-conditions`** (`src/pages/terms-and-conditions.astro`)
   - Operating entity: **Plus530 Adventure**
   - Booking, eligibility, convoy safety, vehicle requirements, limitation of liability, governing law (Bangalore, Karnataka, India).
2. **`/privacy-policy`** (`src/pages/privacy-policy.astro`)
   - Data collection (traveler identification, emergency contacts, driving documentation).
   - Secure payment processing via Cashfree Payments India Pvt. Ltd. (no card details stored on servers).
   - Cookie policy, data storage, user privacy rights.
3. **`/shipping-policy`** (`src/pages/shipping-policy.astro`)
   - Service Delivery & Booking Fulfillment Policy for experiential expeditions.
   - Digital delivery timelines: instant transaction receipt, official booking voucher & tax invoice delivered via email & WhatsApp within **24–48 business hours**, detailed expedition dossier sent 7 days prior to departure.
4. **`/refund-policy`** (`src/pages/refund-policy.astro`)
   - Update existing cancellation schedule (30+ days: 90% refund, 15–29 days: 50%, <15 days: non-refundable).
   - Add explicit turnaround time clause: approved refunds processed back to the original payment source within **5 to 7 working days**.
5. **`/contact`** (`src/pages/contact.astro`)
   - Update phone number to `+91 93532 10349`.
   - Maintain registered operational address in Bangalore, Karnataka, India.

---

## 3. Global Configuration (`src/data/config.ts`)

Centralize legal entity and contact details to ensure consistency across all pages and future integrations:

```typescript
export const LEGAL_BUSINESS_NAME = "Plus530 Adventure";
export const SITE_PHONE = "+91 93532 10349";
export const SITE_PHONE_RAW = "+919353210349";
export const SITE_EMAIL = "info@plus530adventure.com";
export const SITE_ADDRESS = "Bangalore, Karnataka, India";
export const GRIEVANCE_EMAIL = "info@plus530adventure.com";
export const WHATSAPP_COMMUNITY_URL = "https://chat.whatsapp.com/CloTTI8qWW286dzvlbGAZW?s=cl&p=i&ilr=2";
```

---

## 4. UI & Visual Specifications

### 4.1 Page Layout & Styling
All policy pages will follow the clean, responsive layout established by `refund-policy.astro`:
- **Header:** Dark background (`bg-gray-900`) with bold headline (`text-4xl md:text-5xl font-bold mb-4`) and subtitle in gray text.
- **Body:** Clean white background (`bg-white py-16`), centered container (`max-w-4xl`), using Tailwind Typography prose (`prose prose-lg text-gray-800 space-y-6`).
- **Structured Sections:** Numbered headings with bold titles (`text-2xl font-bold text-gray-900`), bullet points, and callout boxes for critical customer notices.

### 4.2 Footer Navigation Updates (`src/components/Footer.astro`)
- **Contact Details:** Use `SITE_PHONE` (`+91 93532 10349`), `SITE_EMAIL`, and `SITE_ADDRESS`.
- **Bottom Bar Legal Links:**
  - `Refund Policy` -> `/refund-policy`
  - `Privacy Policy` -> `/privacy-policy`
  - `Terms of Service` -> `/terms-and-conditions`
  - `Shipping & Delivery` -> `/shipping-policy`

---

## 5. Cashfree Compliance Matrix

| Cashfree Requirement | Implementation | Location |
| :--- | :--- | :--- |
| **Legal Business Name** | "Plus530 Adventure" displayed in footer, terms, and contact | `config.ts`, `Footer.astro`, `contact.astro` |
| **Registered Address** | Bangalore, Karnataka, India | `Footer.astro`, `contact.astro`, all policy footers |
| **Working Phone Number** | `+91 93532 10349` | `Footer.astro`, `contact.astro`, `config.ts` |
| **Support Email** | `info@plus530adventure.com` | `Footer.astro`, `contact.astro`, `config.ts` |
| **Terms & Conditions** | Dedicated page with Indian governing law (Bangalore) | `/terms-and-conditions` |
| **Privacy Policy** | Explicit reference to Cashfree payment processing & data security | `/privacy-policy` |
| **Refund & Cancellation** | Tiered schedule + 5–7 working days TAT to original payment source | `/refund-policy` |
| **Shipping / Delivery** | Digital fulfillment within 24–48 hours via email/WhatsApp | `/shipping-policy` |

---

## 6. Verification & Production Release

1. **GitHub Issue:** Open a GitHub issue labeled `feature` via `gh issue create`.
2. **Build Verification:**
   - `pnpm build` (Astro SSG build to `./dist`).
   - `node scripts/verify-agentic.js` (Run automated verification suite).
   - Test that all routes generate proper static HTML and links return 200 OK.
3. **Commit & PR:**
   - Commit changes referencing the issue.
   - Merge PR / push to `main`.
4. **Deploy to Production:**
   - Deploy to Cloudflare Pages via `pnpm deploy` (`wrangler pages deploy dist --project-name plus530adventure`).
   - Validate live URLs on `https://plus530adventure.com/`.
