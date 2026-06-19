# frontend

Web client for Arescare. Next.js (App Router, TypeScript, Tailwind v3).

The centralized design system lives here:

- `tailwind.config.ts` — token layer (color scales, fontSize 16px-floor scale, container).
- `app/globals.css` — `:root` tokens + component layer (`.btn`, `.card`, banners, etc.).
- `components/` — reusable building blocks (`PageBanner`, `StepGrid`, `LeadForm`, `Icon`, …).

Pages compose the component layer — they own **zero** styling (no hex, no `style={{}}`,
no copy-pasted style blocks). See [`../../docs/design-system.md`](../../docs/design-system.md).

> Not yet scaffolded — `create-next-app` will be run into this folder.

## Talking to the backend

The frontend communicates with `../backend` over HTTP only (never imports from it).
Configure the API base URL via an environment variable (e.g. `NEXT_PUBLIC_API_BASE_URL`).
