# Design Spec: Web3Forms Email Lead Collection

## Overview
Integrate Web3Forms with the contact form on [contact.astro](file:///Volumes/NarayanAPFS/Projects/plus530adventure/src/pages/contact.astro) to deliver inquiry leads directly to the team's inbox as formatted emails.

---

## Architecture & Data Flow

```
[User on contact.astro]
         │
         ▼ (submits form)
[Client Script (contact.astro)]
         │
         ▼ POST JSON payload
[Web3Forms API (api.web3forms.com/submit)]
         │
         ▼
[Team Inbox (Email Delivery)]
```

---

## Component Details

### 1. Form Inputs & Validation
The contact form retains the existing sleek Tailwind layout in `contact.astro` with the following fields:
* `name` (Full Name) - `required`
* `email` (Email Address) - `required`
* `phone` (Phone Number) - `optional`
* `message` (Message / Expedition Query) - `required`
* `botcheck` (Honeypot anti-spam field) - hidden

### 2. Client Submission Handler
* On form submission, set button UI to loading state ("Sending message...").
* Submit `FormData` / JSON payload to `https://api.web3forms.com/submit`.
* Handle API response:
  * **Success (`response.status === 200`):** Replace form or show clear green success alert, reset form inputs.
  * **Failure/Error:** Display clear user-friendly error toast/alert ("Something went wrong. Please try again or email us directly.").

### 3. Security & Config
* `access_key`: Read from `import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY` or fallback environment config.
* Honeypot field (`botcheck`) included to prevent automated spam bot submissions.

---

## Testing Plan
1. Test clean submission flow on local dev server (`pnpm dev`).
2. Verify email notification arrives in inbox with proper field formatting.
3. Test empty required fields validation.
4. Verify error state when invalid key or network disconnection occurs.
