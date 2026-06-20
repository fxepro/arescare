# Design System Principles

> **The rule:** Design lives in *one place*. Pages contain structure and content —
> never raw colors, radii, shadows, or spacing values. Change the look of the app
> by editing the design layer, not by touching pages.

This document exists because of a lesson learned (see [below](#lesson-learned)).
Read it before adding or restyling any page.

---

## Repository layout (all projects)

Every product repo is a **two-app monorepo**. UI and API are never mixed at the repo root.

```
repo/
├── frontend/          # Public UI (this project: Next.js — not assumed for every repo)
├── backend/           # API, auth, forms, CMS, jobs (this project: Laravel — not assumed for every repo)
├── docs/              # Design specs, content formulas (may be gitignored)
└── netlify.toml       # Or equivalent — deploy config targets frontend/ only
```

| Folder | Owns | Does not own |
| ------ | ---- | ------------ |
| **`frontend/`** | Pages, components, design tokens, client-side routing, static assets, optional BFF routes for dev | Database, mail delivery, CMS writes, long-running jobs |
| **`backend/`** | REST/GraphQL API, form ingestion, content API, auth, persistence, email, webhooks | CSS, Tailwind, React/Vue components, page layout |

**Path rule for docs and reviews:** always prefix paths with `frontend/` or `backend/`.
Never write `src/app/...` or `tailwind.config.ts` as if the repo root were the app.

**Integration:** the frontend calls the backend via a base URL env var
(e.g. `NEXT_PUBLIC_API_URL` → `backend` origin). When the backend is unavailable,
the frontend may ship bundled seed content and fallback handlers — but production
form and content delivery should target **`backend/`**.

**Deploy (typical):** `frontend/` → Netlify/Vercel; `backend/` → Railway/Fly/etc.
Each folder has its own `package.json` / `composer.json`, env example, and README.

The sections below on tokens, components, and page types apply to **`frontend/`** only.
See [`backend/README.md`](../backend/README.md) for API conventions.

---

## The two-layer model (frontend UI)

### 1. Token layer — `frontend/src/app/globals.css`
The single source of truth for raw values: colors, font, radius, shadow, spacing.

```css
--primary:  #0096C7;   /* sidebar, accents            */
--navy:     #0A2E40;   /* actions, active nav, links  */
--info:     #039BE5;   /* info / hover highlight      */
--bg:       #F0F4F7;   /* app background              */
--card:     #FFFFFF;
--border:   #E2ECF0;
--text:     #0F2433;   --text-muted: #5A7184;   --text-faint: #93A7B5;
--radius:   10px;      --shadow-card: ...;
--font-sans:'Roboto', system-ui, sans-serif;
```

A hex code or font name appears **exactly once** in the codebase — here.

### 2. Component layer — reusable building blocks
Recurring UI (cards, buttons, badges, inputs, stat tiles, page headers, tables)
is defined **once** as a reusable class/component that reads from the token layer.
Pages reference it by name.

```tsx
// ✅ correct — page references the design layer, owns no styling
<div className="card">
  <button className="btn btn-primary">Save</button>
</div>
```

To restyle every card in the app you edit `.card` once. Pages never change.

---

## What pages may and may NOT contain

| Allowed in a page                          | Never in a page                          |
| ------------------------------------------ | ---------------------------------------- |
| Structure / layout (grid, flex, gaps)      | Hex colors (`#0096C7`, `bg-[#...]`)      |
| Content and data                           | Hardcoded radii / shadows                |
| Design-layer class names (`card`, `btn`)   | Font-family declarations                 |
| Token references for one-off layout        | Copy-pasted style blocks between pages   |

If you're about to paste a `style={{}}` block or a long arbitrary-value class
list onto a page, stop — that styling belongs in the design layer.

---

## Anti-pattern that caused this

The original build centralized **only** color values and the font as CSS
variables. Everything else — card padding, radius, shadows, button shapes, badge
styles, table layouts, spacing — was written inline on **every page** as Tailwind
arbitrary-value classes (`bg-[var(--color-slate)]`) and `style={{}}` objects.

Result: **~1,800 styling references across 63 files.** A single palette change
meant editing every page. Pages were a hodgepodge of duplicated design code, and
new pages inherited the duplication by copy-paste.

That is the failure mode this document exists to prevent.

---

## Migration notes (dashboard redesign)

- **Token + shell layer:** rebuilt on the new palette (`globals.css`, `Sidebar`,
  `Topbar`, `BottomTabBar`, dashboard `layout.tsx`).
- **Legacy bridge:** `globals.css` ends with a clearly-fenced `LEGACY BRIDGE`
  block remapping retired `--color-*` names onto the new palette, so
  not-yet-migrated pages keep rendering. **Delete it once every page is migrated.**
- **Page migration:** each page moves off inline styling onto the component layer.
  When the bridge block can be deleted with zero broken pages, the migration is done.

---

## Lesson learned

> Centralize **all** design decisions, not just colors. If a visual property can
> differ between "before" and "after" a redesign, it belongs in the design layer —
> not hardcoded in pages. A page should be able to render correctly while knowing
> nothing about the brand's colors, shapes, or type.

---

## Page types (marketing site)

Use this vocabulary in docs and reviews — not product-specific route names.

| Type | Purpose | Typical header |
| ---- | ------- | -------------- |
| **Site home** | Brand entry, cross-context overview | Inline hero (largest type scale) |
| **Section hub** | Index for one business context (catalog of offerings) | Dark or light `PageBanner` |
| **Context sub-page** | Single offering within a context (detail / drill-down) | `PageBanner tone="light"` + optional `SubtextBar` |
| **Campaign landing** | Conversion-focused long-form page for one program or offer | Inline hero (gradient + blur orbs) |
| **Utility page** | Forms, legal, contact, blog index | `PageHeader` on `sand-100` |

A **business context** is any top-level area in nav (e.g. a product line, vertical,
or service category). Pages under that context are **context sub-pages**.

---

## Implemented palette (`frontend/`)

> Token source: **`frontend/tailwind.config.ts`** (`theme.extend.colors`).
> Each hex appears exactly once there; components (`.btn`, `.card`, `.banner-surface`,
> `PageBanner`, cards, etc.) compose the tokens. Pages reference token *names*, never hex.

**Brand colors (red · white · blue) — anchored on 5 source colors:**

| Source color | Hex | RGB | Mapped to token |
| ------------ | --- | --- | --------------- |
| Crimson red  | `#dc2836` | 220,40,54 | `brand-500` (scale 50–950 derived) |
| White        | `#ffffff` | 255,255,255 | `cream` (page bg) / cards |
| Light blue   | `#a8dadc` | 168,218,220 | `accent-200` |
| Medium blue  | `#457b9d` | 69,123,157 | `accent-500` |
| Dark navy    | `#1d3557` | 29,53,87 | `accent-900` / `navy-900` |

**Token → role:**

| Token | Value | Role |
| ----- | ----- | ---- |
| `brand-600` | `#c41f2c` | Primary buttons (`.btn-primary`), links, active nav, eyebrows, icon badges |
| `brand-500` | `#dc2836` | Brand red base |
| `brand-50` | `#fdecee` | Soft red tint surfaces |
| `accent-200` | `#a8dadc` | Light-blue tinge (hero glow, pills, light surfaces) |
| `accent-500` | `#457b9d` | Medium-blue accent / info |
| `accent-900` / `navy-900` | `#1d3557` | Deep navy — dark sections, banner gradient, secondary badges |
| `accent-950` | `#142540` | Darkest navy (banner gradient start) |
| `ink-900` | `#0f172a` | Headings, darkest text, dark surfaces (footer/CTA/process) |
| `ink-700 / 600 / 500` | `#334155` / `#475569` / `#64748b` | Body / muted / faint text |
| `ink-200 / 100` | `#e2e8f0` / `#f1f5f9` | Borders, dividers, light section bg |
| `cream` | `#ffffff` | Page background |
| `sand-100 / 200` | `#f2f8f9` / `#e2eff0` | Light-blue section tints (subtext bar, alt bands) |
| shadow `soft` / `lift` | `0 2px 8px…` / `0 12px 40px…` | Card / elevated shadow |

**Surfaces (component layer, `frontend/src/app/globals.css`):**

| Class | Use |
| ----- | --- |
| `.banner-surface` | Dark banner — `accent-950 → accent-900 → brand-900` (navy→crimson), white text. Section hubs and some campaign landings. |
| `.banner-surface-light` | Light-blue banner — `accent-50 → accent-100 → white`, dark text. **Context sub-pages** via `PageBanner tone="light"`. |
| `.bg-dot-grid` | Dotted overlay on dark banners. |
| `.section` | Standard vertical rhythm (`py-16 lg:py-20`). |

**Type:** `--font-display` = **Fraunces** (headings `h1–h4`, `.font-display`); `--font-sans` = **Plus Jakarta Sans** (body). Loaded via `next/font` in `frontend/src/app/layout.tsx`.

**Container width:** `1350px` max, centered, `1.5rem` gutters (`frontend/tailwind.config.ts` → `theme.extend.container`).

**Rule reminder:** no warm/orange tones — site home and section tints use the **light-blue** (`accent`/`sand`) family, not red tints.

### Type scale

> **16px is the hard floor — nothing renders smaller.** Defined once in
> `frontend/tailwind.config.ts` → `theme.extend.fontSize`. Use the Tailwind class names; never
> hardcode `text-[13px]`-style sizes on a page.

**Scale (60 → 16):**

| Level | Class | Size | Role |
| ----- | ----- | ---- | ---- |
| Title | `text-7xl` | **60px** | Hero / display headline |
| —     | `text-6xl` | 54px | Display step (hero `sm:` breakpoint) |
| H1    | `text-5xl` | **48px** | Page-banner headline |
| H2    | `text-4xl` | **36px** | Section titles |
| H3    | `text-3xl` | **32px** | Sub-section headings |
| H4    | `text-2xl` | **28px** | Minor headings |
| —     | `text-xl`  | 24px | Interpolation step |
| H5    | `text-lg`  | **18px** | Card titles / lead |
| Body  | `text-base` | **16px** | Body (default) |
| Small | `text-sm` | **16px** | Small body (floored to 16) |
| Label | `text-xs` | **16px** | Labels, pills, eyebrows, meta (floored to 16) |

Font family: **Fraunces** for headings (`.font-display`), **Plus Jakarta Sans** for body.

Responsive heading patterns in use: hero `text-5xl sm:text-6xl lg:text-7xl` (48→60),
page H1 `text-4xl sm:text-5xl` (36→48), section H2 `text-3xl sm:text-4xl` (32→36).
`text-sm`/`text-xs` are collapsed to 16px so code can't drop below the floor — to add a
smaller caption later, change it here once.

Heading weight: `font-weight: 500` on `h1–h4` (not bold). Hero emphasis uses
`italic text-brand-600` on a span inside the headline.

Utility: `.text-balance` (`text-wrap: balance`) on headlines; `html { scroll-behavior: smooth }`.

---

## Frontend — component layer

> Source files: `frontend/src/app/globals.css`, `frontend/src/components/*`,
> `frontend/tailwind.config.ts`. Pages compose these — they do not invent new visual patterns.

### Layout shell (`frontend/src/app/layout.tsx`)

| Piece | Role |
| ----- | ---- |
| `TopBar` | Slim navy gradient bar — taglines, `uppercase tracking-[0.18em]` |
| `SiteHeader` | Logo, primary nav, mega menus per top-level business context |
| `<main>` | `flex-1` content area |
| `SiteFooter` | Multi-row footer: brand block, company links, then one column group per nav context |

### Buttons (`frontend/src/app/globals.css`)

| Class | Use |
| ----- | --- |
| `.btn` | Base — `rounded-full`, `px-6 py-3`, focus ring `brand-500` |
| `.btn-primary` | Primary CTA — `brand-600`, white text, `shadow-soft`, hover lift |
| `.btn-ghost` | Secondary — bordered, transparent, `ink` tones |
| `.btn-light` | On dark backgrounds — cream/white fill |
| `.btn-dark` | On light backgrounds — `ink-900` fill |

Pair with Lucide icons: `<ArrowRight className="h-4 w-4" />` after label.

### Other global classes

| Class | Use |
| ----- | --- |
| `.eyebrow` | Section label — uppercase, `tracking-[0.18em]`, red line via `::before` |
| `.card` | Generic card — `rounded-2xl`, border, `shadow-soft`, hover lift |
| `.text-balance` | Balanced headline wrapping |

### Page header patterns (pick one — do not mix on the same page)

| Pattern | Component | When |
| ------- | --------- | ---- |
| **Dark banner** | `PageBanner tone="dark"` | Section hubs, some campaign landings — `.banner-surface` + dot grid + blur orbs |
| **Light banner** | `PageBanner tone="light"` | **Context sub-pages** (detail / drill-down under a business context) |
| **Simple header** | `PageHeader` | Utility pages — forms, legal, blog index — `bg-sand-100`, soft orbs |
| **Campaign hero** | `CampaignHero` | Campaign landings + site home — gradient token, built-in orbs, largest type scale |

Supporting blocks used under banners:

| Component | Use |
| --------- | --- |
| `SubtextBar` | Centered supporting line directly under `PageBanner` |
| `SectionHeading` | Reusable H2 block — optional eyebrow, `center` and `light` (dark section) props |
| `MediaSplit` | Image left + content right — context sub-page intros |
| `CtaBanner` | End-of-page CTA band — `CtaPanel` + dual buttons |

### Card variants

| Variant | Visual identity |
| ------- | ---------------- |
| **Primary catalog card** | Photo + floating badge `bg-brand-600`, overlay `from-ink-900/35` |
| **Secondary catalog card** | Photo + badge `bg-accent-900`, overlay `from-accent-950/45` |
| **Gradient tile card** | Full gradient (rotating `accent`/`brand` pairs), white text |
| **Portfolio / case-study card** | Gradient or photo tile, category pill, corner arrow |
| **Article card** | Uses `.card`; category eyebrow, optional featured layout |
| **Offering card** | Header gradient `accent-900 → brand-800`; checkmark bullet list |

Hover pattern shared: `-translate-y-1`, `shadow-lift`, image `group-hover:scale-105`.

### Section background rhythm

Alternate bands to create depth — do not invent new bg colors:

| Class | Typical use |
| ----- | ----------- |
| `white` / default | Primary content |
| `bg-sand-100` | Soft blue tint — opportunity blocks, `PageHeader` |
| `bg-ink-50` | Neutral gray band — offering grids, subtext-adjacent sections |
| `bg-accent-950` / `bg-ink-950` | Dark sections — footer, mission CTAs, `CtaBanner` inner |
| `bg-gradient-to-b from-accent-50 to-white` | Site home + campaign landing heroes |

Always pair with `.section` for vertical padding unless a custom hero needs `py-28+`.

### Decorative components (`frontend/src/components/decorative.tsx`)

All blur orbs, campaign hero shells, and CTA capsules live here. **Pages never render orb markup directly.**

| Component | Use |
| --------- | --- |
| `BlurOrbs` | Background depth — `preset`: `campaign`, `site-home`, `banner-light`, `banner-dark`, `page-header`, `cta` |
| `CampaignHero` | Site home + campaign landing heroes — `gradient` token + `orbPreset` (default `campaign`; site home uses `site-home`) |
| `CtaPanel` | Dark rounded CTA capsule — used by `CtaBanner` |

**Campaign gradients** (`gradient` prop — token names only):

| Key | Class |
| --- | ----- |
| `accent` | `from-accent-50 to-white` |
| `accent-strong` | `from-accent-100 to-white` |
| `accent-muted` | `from-accent-200/40 to-white` |
| `ink` | `from-ink-50 to-white` |
| `ink-strong` | `from-ink-100 to-white` |
| `brand` | `from-brand-50 to-white` |
| `brand-strong` | `from-brand-100 to-white` |
| `sand` | `from-sand-100 to-white` |
| `sand-light` | `from-sand-50 to-white` |
| `sand-deep` | `from-sand-200 to-white` |

`PageBanner`, `PageHeader`, and `CtaBanner` consume `BlurOrbs` / `CtaPanel` internally.

### Step grid (`frontend/src/components/step-grid.tsx`)

Numbered “how it works” blocks — **one implementation**, three tones:

| Tone | Use |
| ---- | --- |
| `light` | White cells on `ink-200` grid (campaign landings) |
| `dark` | `ink-900` cells on `ink-800` grid (dark sections) |
| `navy` | `accent-950` cells on `accent-800` grid (site home process) |

```tsx
<StepGrid steps={steps} tone="light" className="mt-16" />
```

Step data shape: `{ n: "01", title: "…", body: "…" }`.

### Forms (`LeadForm`)

| Prop | Values |
| ---- | ------ |
| `tone` | `light` (default) — bordered inputs; `dark` — glass inputs on navy sections |
| `formKey` | Identifies submission source (utility slug or campaign id) |

Input focus: `border-brand-500 ring-brand-100` (light) / `border-brand-400 ring-brand-400/30` (dark).
Honeypot field `_hp` is built in. Success state: green bordered confirmation panel.

**Submission path:** `frontend/src/lib/api.ts` → `submitLead()` posts to
`backend` (`POST /api/forms/{key}`) when `NEXT_PUBLIC_API_URL` is set; otherwise
to `frontend/src/app/api/forms/[formKey]` as a temporary fallback. Production
should use **`backend/`** for mail, validation, and storage.

---

## Backend (`backend/`)

This folder is the system of record for data and side effects. Framework here is
**Laravel**; other projects may use Django, Nest, etc. — the split is the same.

| Concern | Lives in backend | Example endpoint |
| ------- | ---------------- | ---------------- |
| Form submissions | Yes | `POST /api/forms/{key}` |
| Content API (posts, catalog) | Yes | `GET /api/posts`, `/api/services`, … |
| Auth / admin | Yes | TBD |
| Email / webhooks | Yes | Mail config in backend `.env` |

**CORS:** backend must allow the frontend origin (production + localhost).

**Env:** backend uses its own `.env` (DB, `MAIL_*`, `APP_URL`). Never duplicate
secrets in `frontend/.env.local` except the public API base URL.

**Do not** add business logic only in Next.js route handlers when `backend/` exists —
migrate to Laravel controllers and call them from the frontend.

See [`backend/README.md`](../backend/README.md) for setup when the API is scaffolded.

### Icons

- **Library:** Lucide React
- **Registry:** `<Icon name="…" />` — string key maps to component in `icon.tsx`
- **Auto-pick:** `iconForText(title + description)` for offering cards

Add new icons to the `icons` record in `icon.tsx` once; never import Lucide directly on pages unless one-off.

### Long-form content

Articles, legal copy, case-study bodies:

```tsx
<div className="prose prose-ink max-w-3xl">…</div>
```

Uses `@tailwindcss/typography`. Imported HTML content can be rendered via a shared legal/article wrapper.

### Motion & interaction defaults

| Property | Value |
| -------- | ----- |
| Card/button hover | `transition-all duration-200`, `-translate-y-0.5` or `-translate-y-1` |
| Image hover | `transition duration-500`, `group-hover:scale-105` |
| Link CTAs | `font-semibold text-brand-700`, arrow slides on `group-hover:translate-x-1` |
| Feature bullets | Checkmark icon in `text-brand-600` |

### Numbered steps pattern

Site home process blocks + campaign landing “How it works” — use `StepGrid` (see above).

### Campaign landing structure

Campaign landings follow a standard long-form formula (headline → visual → problem →
solution → benefits → numbered steps → proof → lead form). Section order is fixed;
copy and data vary per campaign.

1. Headline + subhead (hero)
2. Before/after or visual
3. Problem list
4. Solution / benefits
5. How it works (numbered steps)
6. Proof / deliverables
7. `LeadForm` contact block

### Image radii (reference)

| Radius | Use |
| ------ | --- |
| `rounded-2xl` | Inline images, offering cards |
| `rounded-3xl` | Hero splits, step grid shell |
| `rounded-[2rem]` | CTA capsule (via `CtaPanel`) |

Aspect ratios in use: `4/3`, `16/10`, `16/9`, `16/11`.

### Full color scales (reference)

Beyond the key tokens above, full scales live in `frontend/tailwind.config.ts`:

- `brand` 50–950 (red)
- `accent` 50–950 (blue)
- `ink` 50–950 (slate neutrals)
- `navy` 800–950 (alias of dark accent)
- `sand` 100–200 (light blue tints)
