# AGENTS.md — Plus530 Adventure

Guidance for AI coding assistants working in this repo.

## What this is
Marketing website for **Plus530 Adventure**, an overlanding / self-drive travel company running Himalayan expeditions. Home, adventures (dynamic per-trip pages), about, markdown blog, contact, refund policy.

## Stack
- **Astro 4** (Static Site Generation) + **TypeScript**.
- **Tailwind CSS** for styling.
- `@lucide/astro` icons.
- Blog: Astro Content Collections (`src/content/blog/`).
- **Package manager:** pnpm. Deploy config: `wrangler.toml` (Cloudflare Pages).

## Commands
```bash
pnpm dev     # Astro dev server (http://localhost:4321)
pnpm build   # Astro production SSG build (outputs to ./dist)
pnpm preview # Preview built static site locally
```

## Layout
- `src/pages/` — Astro file-based routes: `index.astro`, `about.astro`, `adventures/`, `blog/`, `contact.astro`, `refund-policy.astro`.
- `src/components/` — Native `.astro` components: `Navbar.astro`, `Footer.astro`, `HomePage.astro`, `ui/`.
- `src/layouts/` — `Layout.astro` HTML shell.
- `src/data/adventures.ts` — adventure catalog; source for dynamic adventure routes (`src/pages/adventures/[slug].astro`).
- `src/content/` — `blog/` markdown blog posts & `config.ts` collection schema.
- `public/` — static assets.

## Conventions
- Native `.astro` components by default for zero client JS overhead.
- Adventures are data-driven from `src/data/adventures.ts` — add/edit trips there, routes render from it.
- Blog posts are markdown files in `src/content/blog/` managed via Astro Content Collections.
- Deployment target is Cloudflare Pages (`pages_build_output_dir = "./dist"` in `wrangler.toml`).
- Premium, responsive, adventure-focused visual style.
---

## Workflow rule: track all work as GitHub issues (MANDATORY)

Whenever we decide to work on a **feature** or a **bug**, before writing code:

1. **Open a GitHub issue** for it in this project's repo — one issue per feature/bug. Title states the outcome; body states the problem, scope, and acceptance criteria. Label it (`feature` / `bug`).
2. **Keep the status updated** throughout: move the issue through its states (open → in progress → in review → closed) and comment on meaningful progress, decisions, and blockers.
3. **Reference the issue in commits/PRs** (`#<number>`) and let the PR **close the issue** when merged (`Closes #<number>`).
4. No silent work — if it's worth a code change, it's worth an issue that reflects reality.

Use `gh` for this: `gh issue create`, `gh issue list`, `gh issue edit`, `gh issue comment`, `gh issue close`.
