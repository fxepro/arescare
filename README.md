# Arescare — Site2026

Rebuild of the Arescare healthcare site (and foundation for a future family health app),
built on the centralized design system in [`../docs/design-system.md`](../docs/design-system.md).

## Structure

Every project separates client and server into two top-level folders. The frontend
is **not** assumed to be the whole project.

```
Site2026/
  frontend/   # web client — Next.js app, the design layer lives here
  backend/    # API / server — stack chosen per project
```

- `frontend/` — Next.js (App Router, TypeScript, Tailwind v3). Tokens + component
  layer per the design system. The frontend talks to the backend over HTTP only.
- `backend/` — API, server logic, jobs, data layer. Stack TBD.

## Design system

See [`../docs/design-system.md`](../docs/design-system.md). The rule: design lives in
one place (token layer + component layer); pages contain structure and content only —
no raw colors, radii, shadows, or spacing.

### Brand palette (friendly · playful · comforting)

| Source | Hex | Token role |
| ------ | --- | ---------- |
| Blush white | `#FFF6FB` | page background (`cream` / `--bg`) |
| Soft pink | `#FFD6E8` | `blush` tints — pills, soft surfaces |
| Sky blue | `#7FD6FF` | `brand` family — deepened for primary CTA/links |
| Mint | `#6FE3B4` | `accent` family — secondary accent / success |
| Deep slate | `#2B4A66` | `navy` — headings, dark sections, footer, gradients |

Type: Sora (40px+ display) + Inter (16–40px body).
