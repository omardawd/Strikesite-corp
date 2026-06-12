# Strike SCF — Corporate Site · Claude Code Context

## Project overview

This is the **strikescf.com** corporate marketing site — a static React SPA deployed on Vercel. It is **not** the platform app (that lives at `strike-scf.vercel.app` on a separate Next.js project). The corporate site is the public face of the company for investors, enterprise clients, and prospects.

The platform app is a fully separate Vercel project and Next.js codebase. The corporate site links to it via the Login button and CTAs — it does not embed or share code with the platform.

---

## Stack

| Layer | Implementation |
|---|---|
| Runtime | React 18 UMD via CDN — **no build step, no bundler** |
| JSX | Babel Standalone (browser-side transpilation) |
| Styles | Plain CSS (`styles.css`) — no preprocessor, no Tailwind |
| Router | History API SPA router (custom, in `app.jsx`) |
| Fonts | Google Fonts CDN: Space Grotesk, DM Sans, IBM Plex Mono |
| Hosting | Vercel (static output + rewrite rules in `vercel.json`) |
| Domain | strikescf.com (custom domain on Vercel) |

**Critical constraint**: There is no `npm`, no `node_modules`, no build pipeline. All JS files are loaded as `<script type="text/babel">` tags in `index.html`. Every component must be written as a plain function and exposed via `Object.assign(window, {...})` at the bottom of each file — this is how cross-file references work without ES modules.

---

## File structure

```
/
├── index.html          # Entry point — all <script> tags loaded here
├── app.jsx             # Router shell, page title/description/canonical updates
├── components.jsx      # Shared: Nav, Footer, Logo, FadeIn, Stat, ProductFrame, navTo
├── pages.jsx           # All page components: HomePage, SolutionsPage, BanksPage, etc.
├── diagrams.jsx        # SVG diagram components: TransactionFlow, StrikeAITerminal, etc.
├── styles.css          # All CSS — single file, CSS custom properties for tokens
├── assets/             # Static assets
│   ├── favicon.ico         ← USE THIS for the <link rel="icon"> tag
│   ├── favicon-32x32.png   ← Use for PNG favicon fallback
│   ├── favicon-180x180.png ← Use for apple-touch-icon
│   ├── favicon-192x192.png ← Use for Android/PWA
│   ├── favicon-512x512.png ← Use for manifest
│   ├── strike-logo.png     # Full wordmark (1280×853)
│   ├── S-profile-logo.png  # "S" monogram mark (327×326)
│   └── favicon.png         # Source favicon (327×326) — do not use directly in <link>
├── vercel.json         # SPA rewrite rules + cache headers
├── robots.txt          # AI crawler + SEO directives
├── sitemap.xml         # XML sitemap for all routes
└── google44a2c960f0013c2d.html  # Google Search Console verification — do not touch
```

---

## Design system — tokens (non-negotiable)

```css
:root {
  --white:         #FFFFFF;
  --offwhite:      #F7F8FA;
  --ink:           #111318;
  --ink-soft:      #1A1D24;
  --gray:          #6B7280;
  --gray-soft:     #9AA0AB;
  --border:        #E5E7EB;
  --border-strong: #D1D5DB;
  --blue:          #1428CC;
  --blue-hover:    #1020AA;
  --blue-dim:      #0E1E7A;
  --blue-light:    #EEF0FF;
  --gold:          #C9A84C;

  --font-display: "Space Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-body:    "DM Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-mono:    "IBM Plex Mono", "JetBrains Mono", ui-monospace, monospace;

  --container: 1320px;
  --gutter:    40px;
}
```

**Blue rule**: use `--blue` on at most one value per panel to draw the eye. Never decorative.

**Typography**: display classes use `letter-spacing: -0.025em` to `-0.035em` — tight negative tracking is the financial-data-terminal aesthetic. Non-negotiable.

**Eyebrow rule**: `.eyebrow` class (IBM Plex Mono, 11px) is used ONLY on Transaction Flow section labels. Do not add eyebrows to other sections.

---

## Pages / routes

| Route | Component | Purpose |
|---|---|---|
| `/` | `HomePage` | Primary homepage |
| `/solutions` | `SolutionsPage` | SCF Engine + Strike AI breakdown |
| `/banks` | `BanksPage` | For bank funders |
| `/anchors` | `AnchorsPage` | For anchor corporates |
| `/suppliers` | `SuppliersPage` | For suppliers |
| `/platform` | `PlatformPage` | Technical architecture |
| `/contact` | `ContactPage` | Lead gen / pilot request |
| `/programs/po-financing` | `POFinancingPage` | PO financing explainer |
| `/programs/invoice-factoring` | `InvoiceFactoringPage` | Invoice factoring explainer |
| `/programs/reverse-factoring` | `ReverseFactoringPage` | Reverse factoring explainer |
| `/programs/dynamic-discounting` | `DynamicDiscountingPage` | Dynamic discounting explainer |
| `/redbook` | `RedbookPage` | The Strike RedBook landing |

New pages: add the component to `pages.jsx`, add the route to `app.jsx` (both the `titles`/`descriptions` objects and the `if/else if` chain), add it to `sitemap.xml`.

---

## Platform app integration

The platform is a **separate Vercel project** at `strike-scf.vercel.app`. The corporate site should proxy or redirect to it via the login button and platform CTAs. The recommended approach is:

- The "Log In" button in the nav links to `https://app.strikescf.com` (a Vercel custom domain alias for `strike-scf.vercel.app`)
- In the platform's Vercel project settings, add `app.strikescf.com` as a custom domain
- This means: strikescf.com = corporate site, app.strikescf.com = platform — same root domain, different subdomains
- Do NOT use rewrites in the corporate site's `vercel.json` to proxy the platform — the platform is a full Next.js app and cannot be proxied via a static site

---

## SEO and AI crawlers

- `robots.txt` should include specific AI crawler directives (GPTBot, ClaudeBot, PerplexityBot, Anthropic-ai)
- `sitemap.xml` must list all routes with accurate `<lastmod>` dates
- Schema.org JSON-LD lives in `index.html` — keep it updated as the product evolves
- All `<title>` and `<meta name="description">` updates happen in `app.jsx` in the `useEffect` on route change
- OG images: `og-image.png` should be 1200×630. Currently referenced but not in assets — needs to be created

---

## Adding new components

1. Write the function in the relevant `.jsx` file
2. Add it to the `Object.assign(window, {...})` at the bottom of that file
3. Use it in any other file — window globals are available because scripts load sequentially
4. Do not use `import` or `export` — there is no module bundler

---

## Vercel deployment

Push to GitHub main branch → Vercel auto-deploys. The `vercel.json` rewrite rule `"/(.*)" → "/index.html"` ensures all SPA routes resolve correctly. The Google Search Console file is whitelisted before the catch-all rewrite.

---

## What NOT to do

- Do not add a build step or `package.json` without explicit instruction
- Do not use `import`/`export` syntax — this breaks in Babel standalone mode
- Do not add Tailwind or any CSS framework — use the token system
- Do not change the font stack or color tokens without full design review
- Do not add `console.log` in production code
- Do not touch `google44a2c960f0013c2d.html` — it is a Google Search Console verification file
- Do not use `<form>` elements for contact forms — use controlled state + fetch

---

## Platform product reference

The Strike SCF platform (separate codebase) supports:
- **Three portals**: Bank, Anchor, Supplier — all within one Next.js app, role-derived
- **Four financing types**: Reverse Factoring, Invoice Factoring, PO Financing, Dynamic Discounting
- **AI layer**: Claude (claude-sonnet-4) for co-pilot, inline insights, document generation, risk scoring
- **Stack**: Next.js 16, Supabase (PostgreSQL + Auth + Storage), Anthropic API, Resend, Vercel
- **KYB system**: Full counterparty onboarding with three modes (standard, known, custom)
- **Supply Graph**: Interactive SVG network of bank → program → anchor → supplier relationships
- **Risk scoring**: 0-100 composite model across KYB, tariff/geo, transaction performance, financial health

This context helps ensure the corporate site's claims and product descriptions stay accurate.
