# DESIGN.md — Personal Core

> **TECHNOLOGY IN THE PRESENTATION. CLARITY IN THE CONTENT.**

## 1. Research summary

| Source | What was taken | What was deliberately *not* taken |
| --- | --- | --- |
| **diegovz.com** | Calm hierarchy, generous spacing, mono utility labels (Spline Sans Mono), a single status line in the header, content that is understood in seconds. | Hero wordmark illustrations, preloader, particle background, colour accent. |
| **edoardolunardi.dev** | Hairline (1px, ~30% opacity) structure instead of boxes, mono bracket indices (`[21]`), a quiet "Available" status with a dot, keyboard hints (`press E`), list ↔ detail composition for work. | Panel-grid chrome, sound/cursors/theme toggles, image-led case studies. |
| **Sci-fi control surfaces** | Spatial navigation, *connection* as the organising idea, precision, camera movement between states. | Readouts, fake telemetry, radar sweeps, glow, neon, scan-lines. |
| **taste-skill** (`design-taste-frontend`) | One accent only, no default Inter, no serif, no card walls, one radius rule, copy self-audit, mobile collapse declared per layout, one label per CTA intent. | Tailwind/Motion defaults — the brief takes priority (SCSS Modules + GSAP). |

**Design read:** *developer portfolio for recruiters and frontend engineers, dark editorial language, leaning towards a spatial "system" metaphor.*
**Dials:** `DESIGN_VARIANCE 7 · MOTION_INTENSITY 6 · VISUAL_DENSITY 3`.

## 2. Concept — PERSONAL CORE

Kevin is the **core** of a small system. Every area of the portfolio is a **node** connected to him by a straight hairline.

```
CORE ──(select node)──▶ FOCUS ──▶ TRANSITION ──▶ SECTION
  ▲                                                  │
  └──────────────── RETURN TO CORE ◀─────────────────┘
```

* The **camera** is a single DOM layer. Selecting a node sets the layer's `transform-origin` to *that node* and scales it up. The core is thrown off-screen while the chosen node holds its place, so the user is *led* to the section. The section then resolves from blur. Returning is the exact inverse.
* **The connection motif repeats.** Each section carries a vertical *rail* — the same line that connected the node to the core — with a dot at the heading. In *Experience* the rail becomes the timeline axis; in *Projects* each project hangs from it; in *Projects* details the stack is a connected column of layers.
* **Information is also connected.** Hovering a technology in *Stack* lights up the projects that really use it (derived from `data/projects.ts`, never typed twice).

### Desktop vs. mobile

| Viewport | Home |
| --- | --- |
| `min-width: 768px` **and** `min-height: 640px` | **Network** — core in the centre, six nodes at irregular positions (so it reads as composed, not as a template), straight connection lines. |
| Anything else | **Modules** — compact core on top, six numbered rows below (`01 — ABOUT` …) with the same hollow-dot node. Same camera transition, origin = the tapped row. |

Same DOM, same components; the layout switches in SCSS only.

## 3. Colour tokens

Predominantly dark. **One** accent, used only as a signal (hover, active, status, current index).

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#07090d` | page |
| `--bg-raised` | `#0b0f15` | core disc, sticky bars |
| `--fg` | `#e9edf3` | primary text |
| `--fg-muted` | `#8a97ab` | secondary text (≥ 6:1 on `--bg`) |
| `--fg-dim` | `#5d6b80` | decorative / large only |
| `--line` | `rgba(160,185,215,.14)` | hairlines |
| `--line-strong` | `rgba(160,185,215,.28)` | connections, rings |
| `--accent` | `#5cc8f5` | signal |
| `--accent-soft` | `rgba(92,200,245,.14)` | selection / focus tint |

## 4. Typography

* **Geist** (sans, variable) — display and body. Display is *light* (300) with tight tracking; emphasis stays in the same family (weight / colour), no mixed serif.
* **Geist Mono** — indices, labels, status, keyboard hints. Never for paragraphs.
* Loaded through `next/font` (self-hosted, `display: swap`).

| Token | Value |
| --- | --- |
| `--text-xs` | `0.75rem` (labels, min size) |
| `--text-sm` | `0.875rem` |
| `--text-base` | `1rem` |
| `--text-md` | `1.125rem` |
| `--text-lg` | `clamp(1.25rem, 1.1rem + .6vw, 1.5rem)` |
| `--text-xl` | `clamp(1.5rem, 1.2rem + 1.2vw, 2rem)` |
| `--display-md` | `clamp(2.25rem, 1.4rem + 3.6vw, 4.5rem)` |
| `--display-lg` | `clamp(3rem, 1.5rem + 6.5vw, 8rem)` |

Line length for prose is capped at `60ch`.

## 5. Spacing, shape, depth

* **Spacing** — 4px base: `--space-1 … --space-10` = `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128` px. Page gutter `clamp(20px, 5vw, 64px)`.
* **Shape lock** — rectangles are **square (radius 0)**; only inherently circular things (core, nodes, status dot, avatar) are round. No mixed radii.
* **Depth** — none. No shadows, no blur panels, no glass. Hierarchy comes from type, space and hairlines. Cards are not used; rows separated by `border-top` instead.

## 6. Motion

> Motion ≠ decoration. Every movement says *where you are going* or *what is connected to what*.

| Token | Value | Use |
| --- | --- | --- |
| `--ease-out` | `cubic-bezier(.22, 1, .36, 1)` | hovers, reveals |
| `--ease-in-out` | `cubic-bezier(.65, 0, .35, 1)` | state changes |
| `--dur-fast` / `base` / `slow` | `160ms` / `320ms` / `700ms` | CSS transitions |
| GSAP `expo.inOut` · 1.15 s | camera zoom CORE → SECTION |
| GSAP `power3.out` · .85 s | section resolve (opacity, scale 1.06 → 1, blur 10 → 0) |
| GSAP `power3.out` · .8 s, stagger .07 | `[data-reveal]` blocks |

* Only `transform`, `opacity` and (briefly, during the camera move) `filter: blur` are animated.
* Nothing loops. The core has no idle animation; the status dot is static.
* `prefers-reduced-motion`: the camera/blur/stagger is replaced by a 250 ms cross-fade; custom cursor lerp is disabled; CSS transitions collapse to ~0.
* Browser **back/forward** drives the same transitions (state lives in the URL hash: `#projects`).
* Keyboard: `1`–`6` open a node, `Esc` returns to the core.

## 7. Cursor

Fine-pointer devices only. A 6 px dot (instant) + a 32 px ring (spring-lagged). The ring grows over links/nodes/buttons and turns accent. The native cursor is hidden only while the custom one is active and never on touch devices.

## 8. Layout rules

* Breakpoints: `sm 480 · md 768 · lg 1024 · xl 1440`; network layout gate = `768 × 640`.
* Hero equivalent (core) fits inside `100dvh` — never `100vh`.
* Stage max-width `1680px` so ultra-wide monitors don't stretch the network.
* Every multi-column composition declares its `< 768px` fallback in the same SCSS module.
* Section compositions are intentionally different (taste rule: *no layout family twice*):
  *About* — statement rows · *Stack* — four columns + live cross-reference · *Projects* — typographic list ↔ detail pane (accordion on mobile) · *Experience* — timeline on the rail · *Education* — one large line · *Contact* — oversized sentence + channel rows.

## 9. Content rules

* No invented metrics, clients, dates, testimonials or technologies.
* Anything missing is **absent, not faked**: no CV file → no CV button; no e-mail → no e-mail row; no photo → monogram.
* Interface labels in English (`ABOUT`, `RETURN TO CORE`); descriptive copy in Portuguese (BR).
* One label per CTA intent: `DOWNLOAD CV` (download) · `GET IN TOUCH` (contact).

## 10. Accessibility

Semantic landmarks, one `h1` (the core identity), one `h2` per section, `aria-label`s on icon-less controls, visible `:focus-visible` rings, `inert` on whichever layer is not active, focus moves to the section heading on enter and back to the originating node on return, AA contrast on all text, `alt` on the portrait, reduced-motion path.
