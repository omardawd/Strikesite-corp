# Strike SCF — UI System Design Reference

This document defines the exact design system implemented in the Strike SCF marketing/platform site. It is the authoritative reference for replicating the UI in the platform's production codebase.

---

## Stack (Marketing Site)

| Layer | Implementation |
|---|---|
| Runtime | React 18 (UMD via CDN, no build step) |
| JSX | Babel Standalone (browser transpilation) |
| Styles | Plain CSS (`styles.css`) — no preprocessor, no utility framework |
| Fonts | Google Fonts CDN (Space Grotesk, DM Sans, IBM Plex Mono) |
| Router | Hash-based (`window.location.hash`), no library |

### Porting to a production framework

Replace `Object.assign(window, {...})` with standard ES module exports. All component logic ports directly to React + Next.js/Vite. CSS custom properties work verbatim — wrap them in a global stylesheet or `:root` block. If using Tailwind, extend the theme with the token values below rather than replacing them.

---

## Design Tokens

All tokens are CSS custom properties on `:root`. Copy this block verbatim:

```css
:root {
  /* Color */
  --white:         #FFFFFF;
  --offwhite:      #F7F8FA;
  --ink:           #111318;
  --ink-soft:      #1A1D24;
  --gray:          #6B7280;
  --gray-soft:     #9AA0AB;
  --border:        #E5E7EB;
  --border-strong: #D1D5DB;
  --blue:          #0052FF;   /* primary brand / CTA */
  --blue-hover:    #0040C8;
  --blue-dim:      #1A3FA3;

  /* Typography */
  --font-display: "Space Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-body:    "DM Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-mono:    "IBM Plex Mono", "JetBrains Mono", ui-monospace, monospace;

  /* Layout */
  --container: 1320px;
  --gutter:    40px;
}
```

Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Color semantics

| Token | When to use |
|---|---|
| `--ink` | All primary text, headings, filled buttons, dark cards |
| `--gray` | Mono labels, metadata, placeholder text, sub-values |
| `--gray-soft` | Secondary metadata in dark contexts, dimmed tags |
| `--blue` | CTAs, active nav, highlighted data values (one per panel max), the AI layer, progress indicators |
| `--border` | All dividers, card outlines, table rows |
| `--offwhite` | Alternating section backgrounds, table header rows |
| `--ink-soft` | Dark card borders, dark section dividers |

**Blue usage rule**: use `--blue` on at most one value per data panel to draw the eye. Do not use it decoratively.

---

## Typography Scale

| Class | Font | Weight | Size | Use |
|---|---|---|---|---|
| `.display-xl` | Space Grotesk | 700 | `clamp(56px, 7.4vw, 124px)` | Homepage hero H1 only |
| `.display-lg` | Space Grotesk | 700 | `clamp(44px, 5.4vw, 88px)` | Page hero H1s |
| `.display-md` | Space Grotesk | 700 | `clamp(34px, 3.6vw, 56px)` | Section titles, stat labels |
| `.display-sm` | Space Grotesk | 600 | `clamp(22px, 2vw, 30px)` | Card titles |
| `.eyebrow` | IBM Plex Mono | 400 | 11px | **Transaction Flow section labels only** (see Eyebrow Rule) |
| `.lead` | DM Sans | 300 | `clamp(18px, 1.4vw, 22px)` | Hero sub-copy, section lead paragraphs |
| `.body` | DM Sans | 300 | 16px | General copy |
| `.mono` | IBM Plex Mono | 400 | 12px | All data labels, metadata, table headers, status text |

Line heights: display classes use 0.94–1.15; body uses 1.55–1.65; mono uses 1.75 in terminal/code contexts.

**Tracking rule**: all display classes use `letter-spacing: -0.025em` to `−0.035em`. This tight negative tracking is non-negotiable — it defines the financial-data-terminal aesthetic.

### Eyebrow Rule

The `.eyebrow` class is used on **only the Transaction Flow sections** (both homepage and Platform page). All other sections suppress the eyebrow label entirely. This was a deliberate design decision to reduce visual noise and let section titles carry the full weight. Do not reintroduce eyebrows on new screens in the platform.

---

## Layout System

### Container
```css
.container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
}
```

### Sections
```css
.section        { padding: 120px 0; border-top: 1px solid var(--border); }
.section.bare   { border-top: 0; }
.section.off    { background: var(--offwhite); }
.section.dark   { background: linear-gradient(155deg, #0c1118 0%, #111318 45%, #0a0f1a 100%);
                  color: #fff; border-top: 0; }
```

Platform screens (dashboards, settings, review panels) use a reduced padding:
- Sidebar + main layout: `padding: 40px 48px` in the main content area
- Panel sections inside dashboards: `padding: 32px`
- Card internal spacing: `padding: 24px`

### Grid columns
```css
.row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; }
.row-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); }
.row-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); }
```

**Hairline divider trick**: `row-3` and `row-4` use `gap: 1px; background: var(--border)` on the parent. Each child sets `background: var(--white)` (or `--offwhite` or `--ink` for dark cells). This produces 1px dividers between cells without any border CSS on the children. Use this pattern for all metric grids in the platform.

---

## Navigation

```
[Logo 40px]   [Solutions] [For Banks] [For Anchors] [For Suppliers] [Platform] [Contact]   [Log In] [Talk to Sales →]
```

- Sticky, 72px tall, `backdrop-filter: saturate(140%) blur(8px)`, white at 96% opacity
- Nav links: 14px DM Sans, underline on active (1px blue), no underline at rest
- Logo: `height: 40px; width: auto`
- "Talk to Sales" — `.btn.btn-sm.btn-blue.btn-arrow`
- "Log In" — `.btn.btn-ghost.btn-sm` with `border-color: var(--border-strong)`

For the platform's internal navigation (sidebar or top bar), use the same token set: `--ink` for active items, `--gray` for inactive, `--blue` for the active indicator line. Keep the backdrop-filter on any sticky bars.

---

## Button System

```css
/* Base */
.btn {
  display: inline-flex; align-items: center; gap: 12px;
  height: 48px; padding: 0 22px;
  font-family: var(--font-body); font-size: 14px; font-weight: 500;
  border: 1px solid var(--ink); background: var(--ink); color: #fff;
  border-radius: 0;  /* NEVER round corners */
  transition: background .15s, color .15s, border-color .15s, box-shadow .2s, transform .15s;
}
.btn:hover { transform: translateY(-1px); }

/* Variants */
.btn-blue   { background: var(--blue); border-color: var(--blue);
              box-shadow: 0 1px 4px rgba(0,82,255,.22); }
.btn-blue:hover { background: #0040C8; box-shadow: 0 6px 22px rgba(0,82,255,.38); }

.btn-ghost  { background: transparent; color: var(--ink); }
.btn-ghost:hover { color: var(--blue); border-color: var(--blue); }

.btn-light  { background: #fff; color: var(--ink); border-color: #fff; }
.btn-light:hover { background: var(--blue); border-color: var(--blue); color: #fff; }

/* Modifiers */
.btn-sm     { height: 38px; padding: 0 16px; font-size: 13px; }
.btn-arrow::after { content: "→"; font-family: var(--font-mono); }
```

Platform-specific button sizes: use `.btn-sm` for table row actions, filter bars, and inline controls.

---

## Section Head Component

Two-column header used to open content sections. The eyebrow is conditionally rendered — only pass it for Transaction Flow sections.

```jsx
function SectionHead({ eyebrow, title, kicker }) {
  return (
    <div className="section-head">
      <div className="side">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {kicker && <div className="mono" style={{ marginTop: 14, color: 'var(--gray)' }}>{kicker}</div>}
      </div>
      <h2 className="display-md">{title}</h2>
    </div>
  );
}
```

```css
.section-head {
  display: grid; grid-template-columns: 220px 1fr; gap: 40px;
  padding-bottom: 60px; border-bottom: 1px solid var(--border); margin-bottom: 60px;
}
```

In platform screens (dashboards, detail panels), adapt the section head to a simpler form — just the `h2` with a bottom border, no left column:
```css
.panel-head {
  padding-bottom: 24px; border-bottom: 1px solid var(--border); margin-bottom: 24px;
}
```

---

## Card Component

The base `.card` class used for all data panels, detail views, and content containers.

```css
.card {
  border: 1px solid var(--border);
  padding: 40px;
  background: var(--white);
}
```

`border-radius: 0` always. No shadow by default. Hover shadow (on interactive cards):
```css
.card.interactive:hover {
  box-shadow: 0 4px 24px rgba(0,0,0,.06);
}
```

---

## Data Panel Pattern

The main UI pattern for showing live program data. Used on Banks, Anchors, and Suppliers pages. Replicate in all platform dashboard views.

```
┌─ Program header: name (left) + status badge (right) ─┐
├─ 2×2 metric grid (1px hairline dividers) ─────────── ┤
├─ Chart / bar chart row ─────────────────────────────  ┤
└─ Data table (dtable) ───────────────────────────────  ┘
```

```jsx
<div className="card" style={{ padding: 0 }}>
  {/* Header */}
  <div style={{ padding: 24, borderBottom: '1px solid var(--border)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div>
      <div className="mono" style={{ color: 'var(--gray)' }}>PROGRAM</div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20,
                    marginTop: 6, letterSpacing: '-0.01em' }}>Program Name</div>
    </div>
    <div className="mono" style={{ color: 'var(--blue)' }}>LIVE</div>
  </div>

  {/* 2×2 metric grid — hairline trick */}
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: 1, background: 'var(--border)' }}>
    {metrics.map((m, i) => (
      <div key={i} style={{ background: 'var(--white)', padding: 24 }}>
        <div className="mono" style={{ color: 'var(--gray)' }}>{m.label}</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32,
                      marginTop: 10, letterSpacing: '-0.025em',
                      color: m.highlight ? 'var(--blue)' : 'var(--ink)' }}>{m.value}</div>
        <div className="mono" style={{ color: 'var(--gray)', marginTop: 8 }}>{m.sub}</div>
      </div>
    ))}
  </div>

  {/* Inline SVG chart */}
  <div style={{ padding: 24, borderTop: '1px solid var(--border)' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span className="mono" style={{ color: 'var(--gray)' }}>METRIC · 30 DAYS</span>
      <span className="mono" style={{ color: 'var(--blue)' }}>+ 4.2 PP</span>
    </div>
    <svg viewBox="0 0 600 120" width="100%" height="120" style={{ marginTop: 14 }}>
      <line x1="0" y1="100" x2="600" y2="100" stroke="#E5E7EB" />
      {/* path d uses percentage points mapped to 0-120 height */}
      <path d="M 0 82 L 60 74 ..." fill="none" stroke="#0052FF" strokeWidth="1.5" />
    </svg>
  </div>

  {/* Data table */}
  <div style={{ borderTop: '1px solid var(--border)' }}>
    <div className="dtable" style={{ border: 0 }}>
      {/* see dtable section */}
    </div>
  </div>
</div>
```

**Metric value typography**: `font-display, weight 700, 32px, letter-spacing -0.025em`. One value per panel in `var(--blue)`, the rest in `var(--ink)`.

**Status badge in header**: use `.mono` at 12px in `var(--blue)` for "LIVE / ACTIVE / ENROLLED". Use `var(--gray-soft)` for inactive/pending.

---

## KV Block Pattern

The key-value data block used in the AI section and Contact page. Also the right pattern for any sidebar detail panel in the platform.

```jsx
<div className="kv-block">
  <div><div className="k">LABEL ONE</div><div className="v">Value One</div></div>
  <div><div className="k">LABEL TWO</div><div className="v">Value Two</div></div>
</div>
```

```css
.kv-block {
  border-top: 1px solid var(--border);
  padding-top: 28px; margin-top: 28px;
  display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
}
.kv-block .k {
  font-family: var(--font-mono); font-size: 11px; color: var(--gray);
  letter-spacing: 0.14em; text-transform: uppercase;
}
.kv-block .v {
  font-family: var(--font-display); font-weight: 600; font-size: 15px;
  margin-top: 8px; letter-spacing: -0.005em;
}
```

In dark sections, override border and text colors:
```jsx
<div className="kv-block" style={{ borderColor: '#222730' }}>
  <div>
    <div className="k" style={{ color: 'var(--gray-soft)' }}>LABEL</div>
    <div className="v" style={{ color: 'var(--white)' }}>Value</div>
  </div>
</div>
```

---

## Stat Component

Used in homepage metrics. Three stats in `.row-3`. Hover reveals a blue underline sweep.

```jsx
<div className="stat">
  <div className="stat-num blue">$2.5T</div>
  <div className="stat-label">WW ANNUAL FINANCING GAP</div>
  <div className="stat-desc">Description supporting the number. One or two sentences.</div>
</div>
```

```css
.stat { padding: 40px; background: var(--white); position: relative; overflow: hidden;
        transition: background 0.22s; }
.stat::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
               background: var(--blue); transform: scaleX(0); transform-origin: left center;
               transition: transform 0.38s cubic-bezier(0.4,0,0.2,1); }
.stat:hover { background: #fafbff; }
.stat:hover::after { transform: scaleX(1); }

.stat-num { font-family: var(--font-display); font-weight: 700;
            font-size: clamp(56px, 6vw, 96px); line-height: 0.94;
            letter-spacing: -0.035em; font-variant-numeric: tabular-nums; }
.stat-num.blue { color: var(--blue); }

.stat-label { font-family: var(--font-mono); font-size: 11px; color: var(--gray);
              letter-spacing: 0.14em; text-transform: uppercase; margin-top: 20px; }
.stat-desc  { color: var(--gray); font-size: 14px; line-height: 1.6; margin-top: 12px; font-weight: 300; }
```

Apply this same hover-underline sweep to any KPI card in the platform.

---

## Operational Characteristics Grid

A 3×2 grid of large metric tiles. Used on the Platform page. Apply in any platform summary/overview screen.

```jsx
<div className="row-3">
  {[
    { k: 'LABEL', v: 'Value', sub: 'DESCRIPTOR · CONTEXT' },
    ...
  ].map((s, i) => (
    <div key={i} style={{ background: 'var(--white)', padding: 36 }}>
      <div className="mono" style={{ color: 'var(--gray)' }}>{s.k}</div>
      <div className="display-md" style={{ marginTop: 18, fontSize: 48,
            color: i === highlightIndex ? 'var(--blue)' : 'var(--ink)' }}>{s.v}</div>
      <div className="mono" style={{ color: 'var(--gray)', marginTop: 14 }}>{s.sub}</div>
    </div>
  ))}
</div>
```

One tile gets `color: var(--blue)` — pick the most actionable metric (e.g. throughput, utilisation). All others use `var(--ink)`.

---

## Feature List Component

Numbered list used in per-audience pages and any "what you get" section in the platform.

```jsx
<div className="flist">
  {items.map((item, i) => (
    <div className="row" key={i}>
      <div className="num">{String(i+1).padStart(2,'0')}</div>
      <div className="title">{item.title}</div>
      <div className="desc">{item.desc}</div>
    </div>
  ))}
</div>
```

```css
.flist { border-top: 1px solid var(--border); }
.flist .row {
  display: grid; grid-template-columns: 60px 1fr 1fr; gap: 40px;
  padding: 32px 0; border-bottom: 1px solid var(--border);
}
.flist .row .num   { font-family: var(--font-mono); font-size: 11px; color: var(--gray); }
.flist .row .title { font-family: var(--font-display); font-size: 22px; font-weight: 600;
                     letter-spacing: -0.01em; }
.flist .row .desc  { color: var(--gray); font-size: 15px; line-height: 1.6; font-weight: 300; }
```

In platform screens (settings, feature flags, permission lists), drop the `1fr 1fr` for description and use `2fr` for a wider title and no desc column.

---

## Data Table (dtable)

Used for the capability matrix (Solutions page) and all invoice/transaction lists in the platform.

```jsx
<div className="dtable">
  <div className="row head">
    <div>ID</div><div>SUPPLIER</div><div>AMOUNT</div><div>STATUS</div><div>SCORE</div>
  </div>
  {rows.map((r, i) => (
    <div className="row" key={i}>
      <div className="id">{r.id}</div>
      <div style={{ color: 'var(--ink)' }}>{r.name}</div>
      <div className="amt">{r.amount}</div>
      <div>
        <span className="status">
          <span className={`dot ${statusClass(r.status)}`} />
          {r.status}
        </span>
      </div>
      <div style={{ textAlign: 'right', color: 'var(--ink)' }}>{r.score}</div>
    </div>
  ))}
</div>
```

```css
.dtable { border: 1px solid var(--border); }
.dtable .row {
  display: grid; grid-template-columns: 60px 1.5fr 1fr 1fr 80px;
  gap: 24px; padding: 18px 24px; border-bottom: 1px solid var(--border);
  font-family: var(--font-mono); font-size: 12px; align-items: center;
}
.dtable .row.head { background: var(--offwhite); color: var(--gray);
                    text-transform: uppercase; letter-spacing: 0.12em; font-size: 10px; }
.dtable .row:last-child { border-bottom: 0; }

/* Status indicators */
.status { display: inline-flex; align-items: center; gap: 7px; }
.dot    { width: 6px; height: 6px; border-radius: 50%; background: var(--blue); flex-shrink: 0; }
.dot.ink  { background: var(--ink); }
.dot.gray { background: var(--gray-soft); }

/* Amount column */
.amt { font-variant-numeric: tabular-nums; color: var(--ink); }

/* ID column */
.id { color: var(--gray); }
```

### Status dot color mapping

| Status | Dot class |
|---|---|
| AI REVIEW / OFFER OPEN / active | default (blue) |
| APPROVED / DISBURSED / ACTIVE | `.ink` |
| REPAID / DECLINED / MATURITY | `.gray` |

### Customising columns

Override `grid-template-columns` inline per table. Example for supplier invoice table:
```jsx
<div className="row" style={{ gridTemplateColumns: '1fr 1fr 80px 110px 80px' }}>
```

---

## Transaction Flow Diagram

Six-step horizontal flow with a Strike AI intelligence banner spanning all steps. This is the **only section in the entire site that uses the `.eyebrow` class**.

```
[ STRIKE AI · INTELLIGENCE LAYER ···· Risk · Anomaly · Pricing ]  ← blue border banner
[ | ]  [ | ]  [ | ]  [ | ]  [ | ]  [ | ]                          ← 6 connector drops (1px blue)
[Step01][Step02][Step03][Step04][Step05][Step06]                   ← flow-track CSS grid
```

Step sequence: Invoice Submitted (SUPPLIER) → Anchor Approval (ANCHOR) → Bank Review (BANK) → Offer Accepted (SUPPLIER) → Disbursement (BANK) → Repayment (ANCHOR)

Each `flow-box` has `border-top: 2px solid rgba(0,82,255,.35)` to anchor visually to the AI connector lines.

Box tone by actor:
- `SUPPLIER` → white box
- `ANCHOR` → white box
- `BANK` → dark box (`.flow-box.ink`, `background: var(--ink)`)

```css
.flow { border: 1px solid var(--border); padding: 60px 40px 50px;
        background: var(--white); overflow-x: auto; }
.flow-track { display: grid; gap: 0; align-items: stretch; }
.flow-box { border: 1px solid var(--border); padding: 22px 18px; height: 110px;
            display: flex; flex-direction: column; justify-content: space-between;
            transition: transform .18s, box-shadow .18s; }
.flow-box:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(0,0,0,.09); }
.flow-box.ink { background: var(--ink); color: #fff; border-color: var(--ink); }
```

The outer `.flow` div uses `overflow-x: auto`. All internals sit inside a `minWidth: 1060px` wrapper so the diagram scrolls horizontally on smaller viewports.

---

## Hero Pattern

Used on every page. Homepage omits the page-badge, uses `.display-xl`. Subpages use `.display-lg`.

```jsx
<section className="hero" style={{ paddingBottom: 60 }}>
  <div className="container">
    <h1 className="display-lg" style={{ maxWidth: '18ch' }}>
      Page headline here.
    </h1>
    <p className="hero-sub" style={{ maxWidth: '60ch' }}>Optional sub-copy.</p>
  </div>
</section>
```

```css
.hero {
  padding: 120px 0 100px; border-top: 0;
  background: var(--white); position: relative; overflow: hidden;
}
/* Blue radial atmospheric gradient, top-right */
.hero::before {
  content: ''; position: absolute; top: -80px; right: -100px;
  width: 720px; height: 720px;
  background: radial-gradient(circle, rgba(0,82,255,.055) 0%, transparent 65%);
  pointer-events: none; z-index: 0;
}
.hero .container { position: relative; z-index: 1; }
```

Homepage hero stat strip:
```css
.hero-meta { margin-top: 80px; display: grid; grid-template-columns: repeat(4, 1fr);
             border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.hero-meta > div { padding: 28px 0; border-right: 1px solid var(--border); }
.hero-meta .k { font-family: var(--font-mono); font-size: 11px; color: var(--gray);
                letter-spacing: 0.14em; text-transform: uppercase; }
.hero-meta .v { font-family: var(--font-display); font-weight: 600; font-size: 18px;
                margin-top: 12px; letter-spacing: -0.01em; }
```

In the platform, use the hero pattern for page-level headings (e.g. "Program Dashboard", "Review Invoice"). Scale it down: reduce padding to `64px 0 48px`, use `.display-md` instead of `.display-lg`, keep the `::before` glow.

---

## Dark Section Pattern

Used for Strike AI showcase and API docs. Background is always the gradient — never flat black.

```css
.section.dark {
  background: linear-gradient(155deg, #0c1118 0%, #111318 45%, #0a0f1a 100%);
  color: #fff; border-top: 0;
}
```

Custom section head inside dark section (no SectionHead component — write inline):
```jsx
<div className="section-head" style={{ borderColor: '#222730' }}>
  <div className="side">
    <div className="mono" style={{ color: 'var(--gray-soft)' }}>SUBLABEL</div>
  </div>
  <h2 className="display-md" style={{ color: 'var(--white)', maxWidth: '22ch' }}>
    Heading text.
  </h2>
</div>
```

Blue radial glow behind panels in dark sections:
```jsx
<div style={{ position: 'relative' }}>
  <div style={{
    position: 'absolute', inset: '-50px',
    background: 'radial-gradient(circle at 60% 40%, rgba(0,82,255,.13) 0%, transparent 65%)',
    pointerEvents: 'none', zIndex: 0,
  }} />
  <div style={{ position: 'relative', zIndex: 1 }}>
    <PanelComponent />
  </div>
</div>
```

---

## AI Terminal Panel

The dark monospace terminal component replicating a financial data review interface. This is the primary UI pattern for the platform's AI co-pilot and decision-support screens.

```
┌─ topbar: ●●● · session label · timestamp ──────┐
├─ section title (FINANCING REQUEST · UNDER REVIEW)┤
├─ headline (entity + amount) ───────────────────  ┤
├─ 4-col meta grid: Risk | Action | Confidence | Model ┤
├─ data rows: key | value | tag | amount ────────  ┤
├─ flag alert (blue border, severity label) ─────  ┤
└─ terminal input with blinking caret ───────────  ┘
```

```css
.ai-panel { background: var(--ink); border: 1px solid var(--ink-soft);
            font-family: var(--font-mono); font-size: 12px;
            box-shadow: 0 0 0 1px rgba(0,82,255,.1), 0 24px 80px rgba(0,0,0,.3); }
.ai-topbar { display: flex; justify-content: space-between; align-items: center;
             padding: 14px 20px; border-bottom: 1px solid var(--ink-soft);
             color: var(--gray-soft); font-size: 11px; letter-spacing: 0.1em; }
.ai-topbar .dots { display: flex; gap: 6px; }
.ai-topbar .dots span { width: 10px; height: 10px; border-radius: 50%;
                        background: #2A2D35; display: block; }
.ai-body { padding: 24px; }
.ai-section-title { color: var(--gray-soft); font-size: 10px;
                    letter-spacing: 0.16em; text-transform: uppercase; }
.ai-headline { color: var(--white); font-size: 15px; margin-top: 10px; letter-spacing: -0.005em; }

/* 4-column meta grid */
.ai-meta { display: grid; grid-template-columns: repeat(4, 1fr);
           border: 1px solid var(--ink-soft); margin-top: 20px; }
.ai-meta > div { padding: 16px; border-right: 1px solid var(--ink-soft); }
.ai-meta > div:last-child { border-right: 0; }
.ai-meta .k { color: var(--gray-soft); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; }
.ai-meta .v { color: var(--white); font-size: 14px; margin-top: 8px; }
.ai-meta .v.blue { color: var(--blue); }

/* Data rows */
.ai-rows { margin-top: 20px; border-top: 1px solid var(--ink-soft); }
.ai-row { display: grid; grid-template-columns: 80px 1fr 1fr 100px;
          gap: 16px; padding: 10px 0; border-bottom: 1px solid #1C1F27;
          color: #C8CDD6; font-size: 12px; align-items: center; }
.ai-row .k { color: var(--gray-soft); text-transform: uppercase; letter-spacing: 0.1em; font-size: 10px; }
.ai-row .dim { color: var(--gray-soft); }

/* Flag alert */
.ai-flag { margin-top: 20px; padding: 14px 16px;
           border: 1px solid rgba(0,82,255,.4); background: rgba(0,82,255,.04); }
.ai-flag .tag  { font-size: 10px; color: var(--blue); letter-spacing: 0.14em; }
.ai-flag .msg  { color: #C8CDD6; font-size: 12px; margin-top: 8px; line-height: 1.6; }
.ai-flag .meta { color: var(--gray-soft); font-size: 10px; margin-top: 8px; letter-spacing: 0.1em; }

/* Terminal input */
.ai-input { display: flex; align-items: center; gap: 10px;
            margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--ink-soft); }
.ai-input .prompt { color: var(--blue); }
.ai-input .typed  { color: #C8CDD6; }
.ai-input .caret  { width: 8px; height: 14px; background: var(--blue);
                    display: inline-block; animation: blink 1s steps(2) infinite; }
@keyframes blink { 50% { opacity: 0; } }
```

---

## API Code Panel

The dark code-display panel used on the Platform page. Reuse for any API/webhook documentation in the platform.

```jsx
<div className="ai-panel">
  <div className="ai-topbar">
    <div className="dots"><span/><span/><span/></div>
    <div>POST /v4/invoices · STRIKE-API · LIVE</div>
    <div>200 OK · 184 ms</div>
  </div>
  <div style={{ padding: 28, fontFamily: 'var(--font-mono)', fontSize: 12,
                lineHeight: 1.75, color: '#C8CDD6' }}>
    <div style={{ color: 'var(--gray-soft)' }}>// request</div>
    <div><span style={{ color: 'var(--blue)' }}>POST</span> /v4/invoices</div>
    {/* Keys in var(--blue), values in var(--white) */}
    ...
  </div>
</div>
```

Color mapping for code syntax: HTTP verbs and JSON keys → `var(--blue)`, string values → `var(--white)`, comments → `var(--gray-soft)`, punctuation → `#C8CDD6` (default).

---

## Timeline / Step Cards

Used for the Deployment timeline (Banks page) and How It Works (Suppliers page). Use in the platform for onboarding flows and process status.

```jsx
<div className="row-4">
  {steps.map((s, i) => (
    <div key={i} style={{ background: 'var(--white)', padding: 36, minHeight: 220 }}>
      <div className="mono" style={{ color: 'var(--blue)' }}>{s.n}</div>  {/* W 01 */}
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600,
                    fontSize: 24, marginTop: 16, letterSpacing: '-0.015em' }}>{s.t}</div>
      <div className="body body-gray" style={{ marginTop: 12, fontSize: 14,
                    maxWidth: '28ch' }}>{s.d}</div>
    </div>
  ))}
</div>
```

The step identifier (W 01 / 01 / etc.) is always `.mono` in `var(--blue)`. Title uses `font-display` at 24px with `-0.015em` tracking. Description is body-gray at 14px.

---

## CTA Strip Pattern

Full-width dark call-to-action. Use at the bottom of any platform flow that ends with an action (submit request, approve invoice, go live).

```css
.cta-strip {
  background: #0a0e18; color: #fff; padding: 100px 0;
  position: relative; overflow: hidden;
}
.cta-strip::before {
  content: ''; position: absolute;
  right: -150px; top: 50%; transform: translateY(-50%);
  width: 720px; height: 720px;
  background: radial-gradient(circle, rgba(0,82,255,.14) 0%, transparent 58%);
  pointer-events: none;
}
.cta-strip .container { position: relative; z-index: 1; }
```

Layout: `.row-2`, left = `.display-lg` headline (`maxWidth: '14ch'`), right = lead copy + button row (`gap: 16px`).

---

## Counterparty Card Pattern

Three-up grid for the "Who It Serves" section. Each card: title → body copy → mono link with arrow.

```css
.counterparty-card {
  background: var(--white); padding: 48px;
  display: flex; flex-direction: column; gap: 24px;
  transition: box-shadow .25s;
}
.counterparty-card:hover {
  box-shadow: inset 0 0 0 1px rgba(0,82,255,.18), 0 8px 40px rgba(0,82,255,.07);
}
```

Note: no eyebrow label on counterparty cards. The `h3` title is the first visible element inside the card.

---

## Form Pattern

Used on the Contact page. Apply the same treatment to all platform forms (program configuration, supplier onboarding, invoice submission).

```css
.form { display: grid; grid-template-columns: 1fr 1fr; gap: 24px 32px; }
.form .full { grid-column: span 2; }
.field { display: flex; flex-direction: column; gap: 8px; }
.field label { font-family: var(--font-mono); font-size: 11px; color: var(--gray);
               letter-spacing: 0.12em; text-transform: uppercase; }
.field input, .field select, .field textarea {
  font-family: var(--font-body); font-size: 15px;
  border: 1px solid var(--border); padding: 14px 16px;
  border-radius: 0; outline: none; background: var(--white);
  transition: border-color .15s, box-shadow .15s;
}
.field input:focus, .field select:focus, .field textarea:focus {
  border-color: var(--blue);
  box-shadow: 0 0 0 3px rgba(0,82,255,.08);
}
```

All inputs: `border-radius: 0`. Focus ring is `3px rgba(0,82,255,.08)` — not a thick outline. Labels are mono 11px uppercase.

---

## Page Badge

Small pill with a pulsing dot. Currently commented out on all pages (present in code but hidden). Available to reinstate on platform pages where a live status indicator is appropriate.

```css
.page-badge {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--font-mono); font-size: 11px;
  letter-spacing: 0.14em; text-transform: uppercase; color: var(--blue);
  border: 1px solid rgba(0,82,255,.22);
  padding: 7px 16px; margin-bottom: 48px;
  background: rgba(0,82,255,.03);
}
.page-badge-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--blue); flex-shrink: 0;
  box-shadow: 0 0 0 3px rgba(0,82,255,.18);
  animation: badge-pulse 2.4s ease infinite;
}
@keyframes badge-pulse {
  0%, 100% { box-shadow: 0 0 0 3px rgba(0,82,255,.18); }
  50%       { box-shadow: 0 0 0 5px rgba(0,82,255,.07); }
}
```

Use this pattern in the platform for connection status ("LIVE · CONNECTED"), processing states, and real-time data badges.

---

## Page Transitions

Every page wrapper has `className="page"`:

```css
.page { animation: fade .3s ease; }
@keyframes fade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; } }
```

Apply the same `fade` animation to any route change or panel mount in the platform.

---

## Footer

```
[Logo + tagline + compliance badges]   [Platform]   [Solutions]   [Company]   [Legal]
────────────────────────────────────────────────────────────────────────────────────
© 2026 Strike SCF Holdings Pte. Ltd.               SOC 2 TYPE II · ISO 27001 · PCI DSS
```

Grid: `2fr 1fr 1fr 1fr 1fr`. Column 1: logo, body-gray description (14px, max 34ch), mono compliance string. Footer columns: `h4` headings + `ul` link lists. Bottom row: two `span` elements, space-between.

---

## Responsive Breakpoint

Single breakpoint at `980px`:
- `.row-2` → single column
- `.row-3`, `.row-4` → single column
- `.hero-meta` → 2 columns
- `.nav-links` → hidden (add hamburger for production)
- `.form` → single column

---

## Page Inventory

| Route | Component | Hero type | Key pattern |
|---|---|---|---|
| `/` | `HomePage` | `.display-xl`, hero-meta strip | stat grid, transaction flow, dark AI section, CTA strip |
| `/solutions` | `SolutionsPage` | `.display-lg` | two-module split, feature list, capability matrix |
| `/banks` | `BanksPage` | `.display-lg` | feature list left + data panel right, deployment steps |
| `/anchors` | `AnchorsPage` | `.display-lg` | feature list left + data panel right (bar chart) |
| `/suppliers` | `SuppliersPage` | `.display-lg` | feature list left + data panel right, 4-step how-it-works |
| `/platform` | `PlatformPage` | `.display-lg` | arch diagram, transaction flow, ops characteristics, API terminal |
| `/contact` | `ContactPage` | `.display-lg` | KV contacts left + form right |

---

## Key Visual Rules

1. **No border-radius anywhere** — every box, card, input, button, and badge is sharp-cornered. Never add `border-radius` unless overriding a browser default.

2. **Hairline dividers via gap trick** — parent: `gap: 1px; background: var(--border)`. Children: `background: var(--white)`. This is the correct method for all metric grids and tile layouts.

3. **Blue is used sparingly** — one highlighted value per data panel, CTAs, active states, the AI layer, and status badges. Never use blue for decoration.

4. **Mono font for all data** — `IBM Plex Mono` at 10–12px with `0.12–0.18em` letter-spacing and `text-transform: uppercase` for every label, metadata, status, table header, and data tag.

5. **Tight negative tracking on all display text** — `letter-spacing: -0.025em` to `−0.035em` on all Space Grotesk headings. This is the most visually distinctive rule of the system.

6. **Dark sections always use the gradient** — `linear-gradient(155deg, #0c1118 0%, #111318 45%, #0a0f1a 100%)`. Never flat `#111318` or `#000`.

7. **No eyebrows except Transaction Flow** — the `.eyebrow` class is suppressed everywhere except the two Transaction Flow section heads. All other sections lead directly with the `display-md` or `display-lg` title.

8. **Interactive states** — all interactive elements use `transform: translateY(-1px)` on hover. Blue buttons additionally increase box-shadow. Data panels use `inset` box-shadow with a blue tint on hover. Flow boxes lift 3px with shadow.

9. **Atmospheric glows, not flat backgrounds** — use `radial-gradient` overlays for depth in hero sections (`rgba(0,82,255,.055)`), dark sections (`rgba(0,82,255,.13)` behind panels), and the CTA strip (`rgba(0,82,255,.14)` right edge). All via `::before` pseudo-elements or absolutely positioned divs.

10. **Platform implementation priority** — when adapting this system to the platform codebase, implement in this order: (1) tokens + typography + reset, (2) `.card` + `.dtable` + `.kv-block` since these carry all data views, (3) button system, (4) `.ai-panel` for co-pilot/review screens, (5) nav/sidebar, (6) hero/page transitions.
