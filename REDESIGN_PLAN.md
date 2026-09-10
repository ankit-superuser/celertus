# Celertus — Light Redesign + Marketing Services

**Status:** Awaiting approval. No code has been changed.
**Author:** Claude Opus 5 · **Date:** 2026-09-10

---

## Context

Celertus has started offering **marketing and digital marketing services**, but the site
(`celertus.germanysoon.com`) currently reads as a pure dev shop and — in your words —
looks "hectic, less soothing, robotic." The word "marketing" appears **nowhere** in the codebase
(verified: case-insensitive grep across all source, config, schema, sitemap and meta returns zero hits).

Diagnosis of *why* it feels hectic and robotic — all confirmed in the actual code:

1. **`IBM Plex Mono` is the body font for the entire site** (`tailwind.config.ts:22-23`,
   `src/index.css:88`). Monospace everywhere reads as terminal, not agency. This is the #1 culprit.
2. **True black `#000` canvas + neon violet/pink glows.** `--background: 0 0% 0%` combined with
   `shadow-primary/30`, `drop-shadow`, and `blur-3xl` glow layers on nearly every element.
3. **Five animation systems fire at once in the hero**: `cs-aurora` mesh + a full three.js GLSL
   wave shader (`FloatingLines`) + a radial overlay + mouse-parallax + a JS typewriter +
   underline-draw + animated gradient text.
4. **Overshoot spring easing on everything** (`--cs-spring: cubic-bezier(0.34,1.56,0.64,1)`)
   makes the whole page bounce and jitter.
5. **Terminal copy voice**: `[STUDIO // AI-FIRST DEVELOPMENT]`, `SYS_DIAGNOSTICS // V2.6`,
   `[01]`, `Sync Viewports`, ALL-CAPS + `tracking-wider` on every label.
6. **The dual-device showcase is genuinely broken** — the laptop and phone iframes share one
   `loading`/`failed` state, `onLoad` is wired only to the laptop, and any site sending
   `X-Frame-Options` shows a raw "PREVIEW RESTRICTED" warning.

**Intended outcome:** a warm, light, editorial "love at first sight" site that reads as a
marketing + technology firm — with one WebGL hero moment, one interactive scroll section, and an
iPhone-only project showcase.

### Decisions confirmed

| | |
|---|---|
| Theme | Warm light base + 2 dark feature bands (showcase, contact) |
| Fonts | **Fraunces** (headings, soft serif) + **Satoshi** (body, warm geometric sans) |
| Hero | ReactBits-style flowing **silk gradient WebGL shader** (reuses installed `three`) |
| Marketing | **3 new services + 3 full pages** → 9 services in a 3×3 grid, two pillars |
| Interactive | **Scroll-driven growth story** (pinned; counters, self-drawing chart, audience dots) |
| Showcase | iPhone only; keep live iframes, replace error state with a **branded fallback card** |
| Copy | **Rewrite to warm agency voice** across homepage + nav + footer |

> **Constraint:** I cannot generate AI images or video. The hero is therefore code-driven
> (a WebGL shader), which is also lighter, responsive, and has no layout shift — a better outcome
> than a background video anyway.

---

## Stack facts that constrain the work

- **Vite 5 + React 18 SPA**, `react-router-dom` v6, **Tailwind v3**, TypeScript. No Next.js, no SSR.
- `three@0.182` **is** installed and in use (`FloatingLines.tsx`, plus the unused `LiquidEther.tsx`).
- `framer-motion@12` is installed but **imported nowhere** — all motion is hand-rolled CSS in
  `src/index.css`. Keep it that way; this work introduces no new dependency.
- Fonts load via plain `<link>` tags in `index.html` (Fontshare + Google), not `next/font`.
- Dark is **hard-locked**: `class="dark"` sits on `<html>` in `index.html` *and* on every page's
  root `<div>`. Both must be removed.
- Undefined-but-referenced tokens already exist (`--primary-glow`, `--sidebar-*`,
  `bg-gradient-card`, `shadow-glow`, `shadow-tech`, `shadow-card`) — define or remove them while
  retokenizing.
- `.github/workflows/deploy.yml` exists — build output paths must not change.

---

## Phase 1 — Design system

*Do this first; every other phase depends on it.*

### 1.1 Fonts — `index.html`

Replace the two font `<link>` tags (lines ~21-23). Both faces are free, and the `preconnect`s are
already in place:

```html
<!-- Satoshi (body) — Fontshare -->
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
<!-- Fraunces (headings) — Google, variable optical size -->
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&display=swap" rel="stylesheet" />
```

Keep `preconnect` to `api.fontshare.com`, `fonts.googleapis.com`, `fonts.gstatic.com`.

### 1.2 Font mapping — `tailwind.config.ts` (lines 21-26)

```ts
sans:    ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
heading: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
mono:    ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'], // genuine code only
```

> `font-mono` is currently applied to roughly 80 elements as a *styling* choice, not because they
> contain code. All of those become default `font-sans` (Satoshi). Sweep with
> `grep -rn "font-mono" src/` and strip it everywhere except real code / metric readouts.

### 1.3 Color tokens — `src/index.css` (lines 9-73)

Rewrite `:root` as the light palette, and make `.dark` the inverted set — used by the two dark
bands via a wrapping `<div class="dark">`, no longer by `<html>`.

```css
:root {                          /* LIGHT — the site default */
  --background: 35 30% 97%;      /* #FAF8F5 warm porcelain */
  --foreground: 260  8% 10%;     /* #16151A soft near-black, never pure #000 */
  --card:         0  0% 100%;
  --card-foreground: 260 8% 10%;
  --popover:      0  0% 100%;
  --popover-foreground: 260 8% 10%;
  --primary:    248 62% 63%;     /* #6D5AE6 calmed violet (was neon 262 83% 58%) */
  --primary-foreground: 0 0% 100%;
  --secondary:   35 22% 93%;
  --muted:       35 18% 91%;
  --muted-foreground: 258 6% 45%;   /* #6B6873 warm grey */
  --accent:      24 68% 70%;     /* #E8A87C warm terracotta — the "marketing" warmth */
  --accent-foreground: 260 8% 10%;
  --border:      35 14% 88%;
  --input:       35 14% 88%;
  --ring:       248 62% 63%;
  --radius:     1.25rem;
  --primary-glow: 248 70% 78%;   /* referenced today but never defined */
}

.dark {                          /* only for the two dark feature bands */
  --background: 260 10% 7%;      /* #111014 warm charcoal, NOT true black */
  --foreground:  35 20% 95%;
  --card:       260  9% 11%;
  --muted-foreground: 258 8% 62%;
  --border:     260  8% 20%;
  --primary:    248 70% 72%;     /* lifted so it reads on charcoal */
  /* …mirror the remaining tokens… */
}
```

Also: update the `backgroundImage` gradients in `tailwind.config.ts` (lines 79-83) to the calmed
violet→terracotta ramp, and either define or delete the `--sidebar-*` block (lines 68-77) and the
`brutal*` shadows (lines 27-32) — those are neon hard-offset shadows that fight a light theme.

### 1.4 Un-lock dark mode

- `index.html`: `<html lang="en" class="dark">` → `<html lang="en">`.
- Remove `dark` from the root `<div>` of **every** page: `src/pages/Index.tsx`, all six service
  pages, and `NotFound.tsx`.
- `public/manifest.json`: `theme_color` / `background_color` `#0F172A` → `#FAF8F5`. Same for
  `<meta name="theme-color">` in `index.html`.

### 1.5 Calm the motion — `src/index.css`

- **Retune the easing:** `--cs-spring: cubic-bezier(0.22, 1, 0.36, 1)` (no overshoot),
  `--cs-spring-soft: cubic-bezier(0.33, 1, 0.68, 1)`. This single change de-jitters the whole page.
- Soften the loud variants: `pop` `scale(.7)` → `scale(.94)`; `flip-up` `rotateX(26deg)` →
  `rotateX(10deg)`; `cs-chip-drop` `-90px` → `-24px`; drop the rotate from `cs-letter-pop`.
- `.cs-magnetic:hover` `translateY(-4px) scale(1.06)` → `translateY(-2px) scale(1.02)`.
- `.cs-card-3d:hover` — drop the `rotateX(6deg)`, keep a `translateY(-4px)` lift.
- `.cs-aurora` — recolor to `--primary` / `--accent` at low alpha, `opacity: .5` → `.28`.
- `.text-gradient*` — retarget from `#a855f7`/`#ec4899` to violet→terracotta; slow the flow 8s → 14s.
- Replace neon `shadow-*/30` glows with soft ambient shadows:
  `0 1px 2px rgb(22 21 26 / .04), 0 12px 32px -8px rgb(22 21 26 / .10)`.
- Typography base (lines 87-119): body → Satoshi; `h1`–`h6` → Fraunces **600** with
  `letter-spacing: -0.02em` (it is `+0.03em` today, which is exactly what makes the headings feel
  wide and mechanical); `h1` → `clamp(2.5rem, 5.5vw, 4.5rem)`, `line-height: 1.08`.
- Delete the orphaned `@keyframes cs-phone-punch` / `cs-card-spring` (lines 360-370) — nothing
  references them any more.
- Preserve **every** `prefers-reduced-motion` block (lines 208-219 and 376-384) and extend it to
  cover the new hero shader and growth-story section.

---

## Phase 2 — Hero: silk gradient shader

### New file: `src/components/SilkBackground.tsx`

A ReactBits-"Silk"-style full-screen WebGL quad. Model it directly on the existing
`src/components/FloatingLines.tsx` — that file already has the correct three.js orthographic-camera
+ `ShaderMaterial` + resize-handling + `dispose()` teardown pattern. Reuse the scaffolding and swap
only the fragment shader.

- **Fragment shader:** layered domain-warped noise producing a slow liquid gradient across
  `#FAF8F5 → #6D5AE6 → #E8A87C` at low saturation. Speed ~0.15 — slow is what makes it soothing.
- **Cursor:** lerp a `uMouse` uniform toward the pointer at ~0.03 so the flow *drifts* toward the
  cursor rather than snapping to it.
- `dpr = Math.min(devicePixelRatio, 2)`; pause the RAF loop when the section leaves the viewport
  (IntersectionObserver); on `prefers-reduced-motion`, render a single static frame.
- **Fallback:** if `WebGLRenderingContext` is unavailable, render a static CSS gradient div.

### Rewrite: `src/components/ProfessionalHero.tsx` (204 lines)

- **Layers:** `SilkBackground` + one soft light-to-transparent scrim. **Delete** the `cs-aurora`
  div (line 56), the `FloatingLines` block (lines 58-70), and the radial overlay (line 73) — three
  stacked backgrounds is the "hectic" problem in miniature.
- **Delete the mouse-parallax** on the content grid (lines 36-46 and 76-81). The shader already
  responds to the cursor; moving the *text* as well is what makes the page feel unsettled.
- **Layout:** centered and generous, replacing the current 7/5 split. Eyebrow → H1 → subhead →
  two CTAs → a slim trust row. Remove the `SYS_DIAGNOSTICS` glass terminal card entirely
  (lines 127-199).
- **Copy:**
  - Eyebrow — `Marketing & technology studio — New Delhi`
  - H1 (Fraunces) — **Marketing that moves.** / **Technology that lasts.**
  - Sub — one warm sentence naming both pillars.
  - CTAs — `Start a project` (solid) · `See our work` (ghost).
  - Trust row keeps the real numbers (`50+ projects shipped · 99.9% uptime · 24/7 support`) but as
    quiet inline text, not three glowing boxes.
- **Drop the typewriter.** It contributes to the robotic feel and causes a layout shift.

`FloatingLines.tsx` becomes unused as a result → delete it, along with the already-dead
`Hero.tsx` (which has a broken `@/assets/hero-background.jpg` import and would fail the build if
ever imported), `Services.tsx`, `Portfolio.tsx`, `LiquidEther.tsx` (1228 lines), and `src/App.css`.

---

## Phase 3 — Marketing services (9 total, two pillars)

### 3.1 Create a single source of truth — new file `src/data/services.ts`

The service list is currently duplicated across **four** files — with three *different* contents:

| File | Lines |
|---|---|
| `src/components/ProfessionalServices.tsx` | 21-70 |
| `src/components/Navigation.tsx` | 8-15 |
| `src/components/AnimatedTrain.tsx` | 4-11 |
| `src/components/Footer.tsx` | 63-94 |

Adding three services without consolidating first means editing four files forever. Export one
array and have all four consume it:

```ts
export type Pillar = "growth" | "technology";

export interface Service {
  slug: string;
  title: string;
  pillar: Pillar;
  icon: LucideIcon;
  description: string;
  technologies: string[];
  route: string;
}

export const SERVICES: Service[] = [ /* 9 entries */ ];
export const growthServices = SERVICES.filter(s => s.pillar === "growth");
export const techServices   = SERVICES.filter(s => s.pillar === "technology");
```

### 3.2 The three new services

| Route | Title | Icon | Covers |
|---|---|---|---|
| `/digital-marketing` | Digital Marketing | `TrendingUp` | SEO, content strategy, email, analytics, marketing automation |
| `/performance-marketing` | Performance Marketing & Ads | `Target` | Google Ads, Meta Ads, PPC, retargeting, CRO, attribution |
| `/brand-content` | Brand & Content | `Sparkles` | Brand identity, social media, video/creative, copywriting |

Final grid — 9 services, a clean 3×3, grouped under two labelled pillars:

```
GROWTH & MARKETING          TECHNOLOGY
  Digital Marketing           Web Development
  Performance Marketing       Mobile Development
  Brand & Content             Backend Systems
                              Cloud Solutions
                              Security & Compliance
                              Performance Optimization
```

### 3.3 Files to touch

- **3 new pages** in `src/pages/` — clone `src/pages/CloudSolutions.tsx`. The six existing service
  pages are near-identical ~330-line clones sharing one skeleton: `SEO` + JSON-LD → `Navigation` →
  breadcrumb → hero → technologies grid → benefits → features checklist → FAQ accordion → CTA →
  `Footer` + `BackToTop`. Fill in real marketing copy, technologies, benefits, features and 3-4
  FAQs each; keep the `BreadcrumbList` + `Service` + `FAQPage` schema shape.
- `src/App.tsx` — three lazy routes alongside the existing six.
- `src/components/ProfessionalServices.tsx` — consume `SERVICES`; render two labelled pillar
  groups. Light cards: white surface, `--border` hairline, soft ambient shadow, no neon. Drop the
  `[01]` index badges — the icon becomes the visual anchor.
- `src/components/Navigation.tsx` — the dropdown consumes `SERVICES` and becomes a
  two-column-by-pillar mega menu with headers. The `sm:w-[680px]` fixed width and the
  `[0{idx+1}]` badge format (which breaks past 9 items) both go.
- `src/components/AnimatedTrain.tsx` — marquee chips derived from `SERVICES`, marketing chips
  first. Light chip styling.
- `src/components/Footer.tsx` — "Capabilities" list from `SERVICES`, split under two pillar
  headings; drop the `[01]`–`[06]` prefixes.
- `public/sitemap.xml` — three new `<url>` entries at priority `0.8`; bump every `lastmod`.
- `src/pages/Index.tsx` (lines 12-72) — extend `indexSchema`: add the three marketing services to
  the `ProfessionalService` offerings and to the `FAQPage` answer at line 59 that enumerates the
  service areas.
- `index.html` + `src/components/SEO.tsx` — add marketing terms to the default title, description
  and keywords. There are currently zero marketing keywords sitewide.

---

## Phase 4 — Interactive scroll-driven growth story

### New file: `src/components/GrowthStory.tsx`

Mounted in `src/pages/Index.tsx` as `<section id="growth">`, between `#services` and `#work`.

A tall (~`250vh`) section with a `position: sticky` inner stage. One rAF-throttled scroll listener
writes a `0 → 1` progress value; four beats derive from it:

| Progress | Beat |
|---|---|
| 0.00 – 0.25 | Headline "Watch a campaign compound." fades up; the frame draws in |
| 0.20 – 0.55 | An SVG line chart draws itself via `stroke-dasharray`/`stroke-dashoffset` tied to progress, with a soft area fill beneath |
| 0.35 – 0.75 | Three metric counters interpolate — `2,400 → 48,000 reach`, `1.2x → 6.4x ROAS`, `18 → 340 qualified leads` |
| 0.55 – 1.00 | Audience dots multiply and cluster; channel chips (SEO / Ads / Social / Content / Email) fly in staggered and settle |

Rules:

- Animate **transform / opacity / stroke-dashoffset only** — never width/height/top/left — so
  there is zero layout thrash. This is precisely the regression class fixed in commit `cba7f30`.
- Counters use `Intl.NumberFormat`, `tabular-nums`, and a fixed-width container so they cannot
  cause reflow as digits change.
- `prefers-reduced-motion` → render the **final** state statically: no sticky, no scroll listener.
- Mobile (`< 768px`) → drop the sticky pin and stack the four beats as ordinary `<Reveal>` blocks,
  reusing the existing `src/components/Reveal.tsx` / `useReveal` hook.
- The figures are **illustrative**. Label the block "Illustrative campaign trajectory" so it is not
  read as a claim about a specific client.

---

## Phase 5 — iPhone-only project showcase

Rewrite `src/components/ProjectShowcase.tsx` (425 lines).

### Remove

- Lines **231-290** — the entire laptop mockup (shell, traffic-light titlebar, iframe, loading
  overlay, keyboard bar) and line **293** (the deck-shadow div).
- The `Monitor` import (line 2), the dead `poster?` interface field (line 12), and the unused
  `ShinyText` import (line 3).
- Lines **194-209** header copy — `[03 // FEATURED SHOWCASE]`, "DUAL-DEVICE LIVE SHOWCASE", and
  "synchronized Laptop (Desktop) and Smartphone (Mobile) viewports".
- The dead `cs-root` / `cs-in` / `cs-card` classes (lines 190, 363) — these are **defined in no
  stylesheet**, so the reveal they gate is a silent no-op today.

### Fix the bug that would break the phone

`onLoad={handleLoad}` (line 255) is wired **only** to the laptop iframe, and both frames share one
`loading` state. Deleting the laptop without moving that handler leaves `loading` permanently
`true` and the iPhone stuck behind its spinner forever. Move `onLoad={handleLoad}` to the mobile
iframe (lines 305-313).

### Rebuild

- One centered iPhone — `max-w-[300px]`, `aspect-[9/19.5]`, `rounded-[2.75rem]`, realistic bezel +
  Dynamic Island + home indicator — on a soft ambient shadow, not `shadow-2xl` + neon glow.
  Replace the `max-w-[640px] aspect-[16/11]` wrapper (line 226); that geometry exists only to
  position the phone against the laptop.
- Keep the live `<iframe>`. At phone width it loads each client's real *mobile* layout, which is
  the honest and more impressive version.
- **Branded fallback** replacing "PREVIEW RESTRICTED" (lines 264-282): a card in the project's own
  `accent` gradient showing the project name, category, and a "View live site ↗" button — so a
  site that blocks framing still looks designed rather than broken. Keep the 9s `LOAD_TIMEOUT_MS`.
- **Smoother switching:** cross-fade between projects (opacity + a 6px `translateY` on the phone,
  ~450ms, no overshoot). Reduce the tilt from `±8/±10deg` to `±3/±4deg`, keeping the existing
  `useFinePointer()` + `useReducedMotion()` gating (lines 71-93, 166-184) — that part is correct.
- Add **swipe** (`pointerdown`/`pointerup` deltaX) and `←`/`→` arrow-key navigation.
- Selector cards → light surface; strip `font-mono`; tags become soft pills.
- Wrap the section in a **dark band** (`<div class="dark bg-background">`) — one of the two
  contrast bands; contact/CTA gets the other.
- Fix the **duplicate `id="work"`** — it is set both on the `<section>` in `src/pages/Index.tsx`
  (line 100) and on the component's own root div (line 189). Keep it on the section only;
  `Navigation.tsx` lines 137 and 210 scroll to it.

---

## Phase 6 — Copy voice sweep

Rewrite terminal-speak into warm, sentence-case agency language — **preserving every real fact**:
service names, project names/URLs/descriptions, `+91-8076036432`,
`celertustechnologies@gmail.com`, the social links, and the Sheety form endpoint in `Contact.tsx`.

| Before | After |
|---|---|
| `[STUDIO // AI-FIRST DEVELOPMENT]` | Marketing & technology studio — New Delhi |
| `SYS_DIAGNOSTICS // V2.6` | *(card removed)* |
| `[03 // FEATURED SHOWCASE]` | Selected work |
| `DUAL-DEVICE LIVE SHOWCASE` | Work we're proud of |
| `Sync Viewports` | Reload preview |
| `Open Live Deployment` | Visit site |
| `[01]` `[02]` `[03]` index badges | *(removed — icons carry the hierarchy)* |

Also: sentence case for headings instead of ALL CAPS, and remove `uppercase tracking-wider` from
body labels sitewide. `Contact.tsx` keeps its looping "Amazing Together…" typing effect, but on a
fixed-height line so it cannot reflow.

---

## Verification

```bash
npm install          # no new deps needed — three + tailwindcss-animate already present
npm run dev          # Vite dev server on :8080
npm run build && npm run preview
```

Then check in the browser:

1. **Fonts** — DevTools → Computed → `font-family`. Body must be `Satoshi`, headings `Fraunces`.
   Then `grep -rn "IBM Plex Mono\|Clash Display" src/ index.html` → **zero** hits.
2. **Theme** — no `class="dark"` on `<html>`; page background is `#FAF8F5`. Only the showcase and
   contact bands are charcoal. `grep -rn 'className="dark' src/pages/` → zero hits.
3. **Hero** — the silk shader animates smoothly; no WebGL errors in console. Navigate away and back
   ~8 times and confirm the three.js context is disposed (no context-lost warnings).
4. **Nav** — the dropdown shows 9 services under two pillar headings; all 9 routes resolve,
   including `/digital-marketing`, `/performance-marketing`, `/brand-content`. Deep-link each
   directly to confirm.
5. **Growth story** — scroll slowly: the chart draws, counters run, chips settle. No horizontal
   scrollbar. Open DevTools → Rendering → *Layout Shift Regions*: **no shifts** should flash during
   the counter run.
6. **Showcase** — one iPhone only, no laptop. Click through all 5 projects; each cross-fades. At
   least one client site blocks framing — confirm the **branded fallback** renders rather than a
   raw warning. Test swipe on a touch device or narrow window.
7. **Reduced motion** — DevTools → Rendering → *Emulate `prefers-reduced-motion: reduce`*. Hero
   shader static, growth story at its final state, no bounce anywhere.
8. **Responsive** — 390px, 768px, 1440px. No horizontal overflow at any width
   (`document.documentElement.scrollWidth === window.innerWidth`) — the condition commits
   `2be8a75` and `c90c673` were fighting.
9. **SEO** — view-source `index.html` for the new marketing keywords; confirm the injected
   `<script id="json-ld-schema">` on `/` lists all 9 services; validate the three new pages' JSON-LD
   at <https://validator.schema.org/>. `sitemap.xml` should have 10 URLs.
10. `npx tsc --noEmit` clean; no console errors on any of the 10 routes.

---

## Out of scope / flagged for you

- **This is a client-side SPA with no SSR or prerendering.** `src/components/SEO.tsx` mutates
  `document.head` inside a `useEffect`, so crawlers reading raw HTML see only `index.html`. Adding
  `vite-plugin-prerender` or similar would materially improve marketing-page SEO — worth doing, but
  it is a separate task.
- **`/social-preview.png` does not exist.** It is referenced by the OG and Twitter card tags, but
  `public/` contains only `favicon.png`, `logo192.png` and `thumbnail.png`. Every social share of
  this site is currently showing a broken image. This needs an actual asset from you — I cannot
  generate it.
- **Growth-story figures are illustrative placeholders.** Swap in real client numbers when you have
  them, and the "Illustrative campaign trajectory" label can come off.
