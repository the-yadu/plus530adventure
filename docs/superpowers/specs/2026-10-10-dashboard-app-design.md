# Design Spec: Plus530 Adventure Dashboard App

## 1. Executive Summary & Goals
Plus530 Adventure operates high-end self-drive and overland expeditions across the Himalayas and India. Currently, the company's web presence is a static Astro marketing site (`plus530adventure`) with hardcoded adventure data and contact forms routed through an external form provider.

This specification defines the architecture, data models, authentication, and user workflows for **Plus530 Adventure Dashboard App** (`plus530adventure-dashboard`). The Dashboard App will:
1. Provide an authenticated internal operations workspace for the team.
2. Deliver a visual CRM pipeline (Kanban + List) to manage customer inquiries, track conversation notes, schedule follow-ups, and trigger direct WhatsApp/Phone actions.
3. Manage the adventure expedition catalog, departure batch dates, seat availability, itineraries, and media gallery assets (stored in Cloudflare R2).
4. Integrate two-way with the public Astro website: capturing real-time inquiries directly into the database and serving dynamic expeditions/batch dates.

---

## 2. System Architecture & Workspaces

### 2.1 Workspace Structure
The Dashboard App lives in a sibling directory alongside the existing marketing site:
```text
/Users/narayansingh/Projects/Plus530Adventure/
├── plus530adventure/             # Public marketing site (Astro 4 SSG on Cloudflare Pages)
│   ├── src/
│   │   ├── pages/contact.astro   # Updated to post leads directly to Dashboard API
│   │   └── utils/adventures.ts   # Updated to load from DB with local fallback
│   └── docs/superpowers/specs/   # Project design specs
└── plus530adventure-dashboard/   # Dashboard App (React + Vite + Cloudflare Pages Functions)
    ├── src/                      # React 18 SPA (Vite, Tailwind CSS, Lucide, Dnd-Kit)
    │   ├── components/           # UI components (Kanban, Tables, Modals, Drawers)
    │   ├── context/              # Firebase Auth Context & State
    │   ├── hooks/                # Custom React query/mutation hooks
    │   ├── pages/                # Route pages (Overview, Leads, Adventures, Media)
    │   └── lib/                  # Firebase SDK config, API client
    ├── functions/                # Cloudflare Pages Functions (mounted at /api/*)
    │   └── api/
    │       ├── [[route]].ts      # Hono API entrypoint
    │       ├── middleware/       # Firebase ID token validation middleware
    │       └── routes/           # leads.ts, adventures.ts, media.ts
    ├── drizzle/                  # Drizzle ORM schema, migrations, connection pooler
    │   ├── schema.ts             # PostgreSQL tables definition
    │   └── db.ts                 # Neon connection instance (@neondatabase/serverless)
    └── wrangler.toml             # Cloudflare Pages config & R2 bindings
```

### 2.2 Tech Stack
- **Frontend SPA:** React 18, Vite, TypeScript, Tailwind CSS, `@lucide/react`, `@hello-pangea/dnd` (or `@dnd-kit/core`)
- **Authentication:** Firebase Auth (Email/Password & Google Sign-In)
- **Backend & Compute:** Cloudflare Pages Functions running **Hono**
- **Database & ORM:** Neon Serverless PostgreSQL + Drizzle ORM
- **Object Storage:** Cloudflare R2 (for adventure banners and gallery assets)
- **Public Site:** Astro 4, TypeScript, Tailwind CSS, Cloudflare Pages

---

## 3. Database Schema & Models (Neon DB + Drizzle ORM)

All tables use PostgreSQL types defined in `drizzle/schema.ts`.

### 3.1 `adventures` Table
Stores expedition details, pricing, itineraries, and media references.
- `id`: `uuid('id').defaultRandom().primaryKey()`
- `slug`: `text('slug').notNull().unique()`
- `type`: `text('type').notNull()` — `'car' | 'motorcycle' | 'hiking'`
- `title`: `text('title').notNull()`
- `description`: `text('description').notNull()`
- `long_description`: `text('long_description').notNull()`
- `duration`: `text('duration').notNull()` (e.g. `'10 Days'`)
- `difficulty`: `text('difficulty').notNull()` — `'Easy' | 'Moderate' | 'Challenging' | 'Difficult'`
- `price`: `text('price').notNull()` (e.g. `'₹1,45,250'`)
- `image`: `text('image').notNull()` (Cover photo URL)
- `background_image`: `text('background_image').notNull()`
- `featured`: `boolean('featured').default(false)`
- `status`: `text('status').default('published')` — `'published' | 'draft' | 'archived'`
- `highlights`: `jsonb('highlights').$type<string[]>().default([])`
- `included`: `jsonb('included').$type<string[]>().default([])`
- `gallery`: `jsonb('gallery').$type<string[]>().default([])`
- `itinerary`: `jsonb('itinerary').$type<Array<{ day: number; title: string; description: string }>>().default([])`
- `created_at`: `timestamp('created_at', { withTimezone: true }).defaultNow().notNull()`
- `updated_at`: `timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()`

### 3.2 `adventure_batches` Table
Tracks upcoming departure dates and seat availability.
- `id`: `uuid('id').defaultRandom().primaryKey()`
- `adventure_id`: `uuid('adventure_id').references(() => adventures.id, { onDelete: 'cascade' }).notNull()`
- `display_label`: `text('display_label').notNull()` (e.g. `'15th Oct 2026'`)
- `start_date`: `date('start_date').notNull()`
- `end_date`: `date('end_date')`
- `status`: `text('status').default('open')` — `'open' | 'filling_fast' | 'sold_out' | 'completed' | 'cancelled'`
- `seats_total`: `integer('seats_total').default(10)`
- `seats_booked`: `integer('seats_booked').default(0)`
- `created_at`: `timestamp('created_at', { withTimezone: true }).defaultNow().notNull()`

### 3.3 `leads` Table
Tracks incoming customer inquiries and sales opportunities.
- `id`: `uuid('id').defaultRandom().primaryKey()`
- `name`: `text('name').notNull()`
- `email`: `text('email').notNull()`
- `phone`: `text('phone').notNull()`
- `adventure_id`: `uuid('adventure_id').references(() => adventures.id, { onDelete: 'set null' })`
- `adventure_slug`: `text('adventure_slug')`
- `batch_id`: `uuid('batch_id').references(() => adventure_batches.id, { onDelete: 'set null' })`
- `preferred_date`: `text('preferred_date')`
- `message`: `text('message')`
- `status`: `text('status').default('new')` — `'new' | 'contacted' | 'in_discussion' | 'booked' | 'lost'`
- `source`: `text('source').default('website')` — `'website' | 'manual' | 'instagram' | 'phone' | 'referral'`
- `priority`: `text('priority').default('medium')` — `'low' | 'medium' | 'high'`
- `group_size`: `integer('group_size').default(1)`
- `vehicle_type`: `text('vehicle_type')` — `'Own 4x4' | 'Rented 4x4' | 'Motorcycle' | 'Passenger'`
- `next_follow_up_at`: `timestamp('next_follow_up_at', { withTimezone: true })`
- `assigned_to`: `text('assigned_to')`
- `created_at`: `timestamp('created_at', { withTimezone: true }).defaultNow().notNull()`
- `updated_at`: `timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()`

### 3.4 `lead_activities` Table
Logs timeline history, calls, notes, and status transitions for CRM follow-ups.
- `id`: `uuid('id').defaultRandom().primaryKey()`
- `lead_id`: `uuid('lead_id').references(() => leads.id, { onDelete: 'cascade' }).notNull()`
- `type`: `text('type').notNull()` — `'note' | 'call' | 'whatsapp' | 'email' | 'status_change'`
- `content`: `text('content').notNull()`
- `metadata`: `jsonb('metadata')` (e.g. `{ oldStatus: "new", newStatus: "contacted" }`)
- `created_by`: `text('created_by').notNull()`
- `created_at`: `timestamp('created_at', { withTimezone: true }).defaultNow().notNull()`

### 3.5 `media_assets` Table
Catalog of uploaded images in Cloudflare R2.
- `id`: `uuid('id').defaultRandom().primaryKey()`
- `filename`: `text('filename').notNull()`
- `url`: `text('url').notNull()`
- `content_type`: `text('content_type').notNull()`
- `size`: `integer('size').notNull()`
- `uploaded_by`: `text('uploaded_by')`
- `created_at`: `timestamp('created_at', { withTimezone: true }).defaultNow().notNull()`

---

## 4. Authentication & Security Layer

1. **Client Setup:**
   - Firebase Web SDK client in `src/lib/firebase.ts`.
   - Email/password authentication and Google OAuth sign-in.
   - Global `AuthContext` provides `user`, `loading`, and helper `getIdToken()`.
   - React Router `<ProtectedRoute>` guards all dashboard routes.
2. **Server-Side Token Verification (`functions/api/middleware/auth.ts`):**
   - Hono middleware intercepts requests requiring authentication.
   - Extracts `Bearer <token>` from the `Authorization` header.
   - Validates Firebase ID token signature and claims using Google's public key certificates.
   - Validates that user email exists within the authorized organization domain or `ALLOWED_ADMIN_EMAILS` environment variable.
3. **Public Route Protection:**
   - `POST /api/leads/public` validates payloads strictly using **Zod**, applies rate limiting, and does not expose internal database IDs or metadata.

---

## 5. API Endpoints (Hono on Cloudflare Pages Functions)

### 5.1 Public Endpoints
- `POST /api/leads/public`
  - Ingests new leads from the public website contact form.
  - Body: `{ name, email, phone, adventure_slug?, batch_date?, message? }`.
  - Action: Creates a new row in `leads` table with `status: 'new'`, `source: 'website'`.
- `GET /api/adventures/public`
  - Returns all published adventures and upcoming departure dates.

### 5.2 Protected Endpoints (Requires Firebase Auth Token)
- **Leads:**
  - `GET /api/leads` — Query leads with optional filters (`status`, `search`, `adventure`, `priority`).
  - `GET /api/leads/:id` — Get full lead dossier with activity timeline.
  - `POST /api/leads` — Create manual lead.
  - `PATCH /api/leads/:id` — Update status, priority, vehicle type, or scheduled follow-up.
  - `POST /api/leads/:id/activities` — Add note, log call, log WhatsApp, or schedule follow-up.
- **Adventures & Batches:**
  - `GET /api/adventures` — List all adventures (including drafts and archived).
  - `POST /api/adventures` — Create new adventure.
  - `PUT /api/adventures/:id` — Update full adventure spec (highlights, itinerary, pricing).
  - `DELETE /api/adventures/:id` — Archive or delete adventure.
  - `POST /api/adventures/:id/batches` — Add new batch departure date.
  - `PATCH /api/batches/:id` — Update batch status or seat counts.
  - `DELETE /api/batches/:id` — Delete a batch date.
- **Media (Cloudflare R2):**
  - `POST /api/media/upload` — Direct multipart upload to Cloudflare R2 bucket (`ADVENTURE_ASSETS_BUCKET`), returns public CDN URL.
  - `GET /api/media` — List uploaded assets.

---

## 6. Dashboard App UI & UX Workflows

### 6.1 Overview (`/`)
- Top metric cards: Total Inquiries, Follow-ups Due Today, Active Batches, Conversion Rate.
- Priority Follow-up Reminder Queue with one-click WhatsApp and Phone actions.
- Recent Lead Activity Feed.

### 6.2 Leads CRM (`/leads`)
- **Kanban Board:**
  - Columns: `New Inquiries` -> `Contacted` -> `In Discussion` -> `Booked` -> `Lost`.
  - Drag-and-drop between columns triggers real-time status update and logs activity.
  - Quick action buttons on each card:
    - **WhatsApp:** Opens `https://wa.me/<phone>?text=...` with prefilled greeting.
    - **Call:** Dial `tel:<phone>`.
    - **Drawer:** Opens detail view.
- **Table / List View:** Sortable, filterable by date, expedition, status, and search query.
- **Lead Detail Drawer:**
  - Customer contact details, preferred adventure & batch, vehicle info, and group size.
  - Follow-up date/time picker to schedule reminders.
  - Activity stream displaying all logged calls, WhatsApp chats, and notes.
  - Quick input to append immediate notes during calls.
- **"+ New Lead" Modal:** Form for manual logging of phone calls, Instagram inquiries, or referrals.

### 6.3 Adventures & Batches CMS (`/adventures`)
- Catalog overview with status pills (`Published` / `Draft`).
- Expedition Form:
  - Title, Slug, Type (`car`, `motorcycle`, `hiking`), Duration, Difficulty, Price.
  - Descriptions (short teaser and long narrative).
  - Dynamic Batches Manager (add departure dates, seat limits, status flags).
  - Highlights & Inclusions list builder.
  - Day-by-Day Itinerary builder (`Day #`, Title, Description).
  - Cloudflare R2 Image Upload dropzone for hero banners and photo gallery.

---

## 7. Public Website Integration (`plus530adventure`)

1. **Lead Submission Integration (`src/pages/contact.astro`):**
   - Updates form submission script to POST to `${PUBLIC_DASHBOARD_API_URL}/api/leads/public`.
   - On success, displays confirmation message.
   - On failure, falls back to Web3Forms to guarantee zero dropped inquiries.
2. **Adventures Data Synchronization:**
   - Adds `src/utils/adventures-data.ts` that fetches live data from Neon DB / API at build-time.
   - Includes fallback to static `src/data/adventures.ts` if database credentials are not present or during offline builds.
3. **Database Seeding Tool:**
   - Provides `pnpm db:seed` in `plus530adventure-dashboard` to populate Neon DB directly from the existing `adventures.ts` catalog.

---

## 8. Verification & Acceptance Criteria
1. **Authentication:**
   - Unauthenticated visitors accessing the dashboard are redirected to `/login`.
   - Authorized email logs in successfully; unauthorized email is rejected.
2. **Leads Pipeline:**
   - Submitting inquiry on public `/contact` creates a lead in the `New Inquiries` column of the dashboard within seconds.
   - Dragging lead to `Contacted` updates status in Neon DB and appends a `status_change` activity log.
   - Adding a note or scheduling a follow-up updates the lead record and displays in the activity stream.
   - Clicking WhatsApp button opens a prefilled chat with the customer's phone number.
   - Manually created lead via "+ New Lead" appears immediately on the Kanban board.
3. **Adventure CMS:**
   - Admin can edit batch dates or pricing in the dashboard and save.
   - Image uploaded via dropzone is written to Cloudflare R2 and returns a valid public URL.
   - Public site build reflects the new batch dates and pricing from Neon DB.
