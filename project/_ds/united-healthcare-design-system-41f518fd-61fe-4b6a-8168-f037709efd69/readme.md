# United Healthcare Design System

A brand-accurate design system for **United Healthcare (UHC)** — the health-benefits business serving members, employers, and providers. This system captures UHC's core brand foundations (color, typography, spacing, motion), a library of reusable React UI primitives, foundation specimen cards, sample branded slides, and a member-portal UI kit.

> **Context & provenance.** This system was built by a Bounteous team from official UHC brand assets supplied by the client: the UHC Sans and UHC Serif Headline font families, the official UHC color palette, and a branded PowerPoint template (`UHC_Template_2025.potx`). See **Caveats** for assets still needed.

---

## How to use this system

- **Consumers** link the single root stylesheet: `styles.css`. Everything it `@import`s — tokens and `@font-face` rules — ships automatically.
- **Components** are React (`.jsx`) primitives, exported on the global namespace `window.UnitedHealthcareDesignSystem_41f518` once the generated `_ds_bundle.js` is loaded.
- **Reference tokens, never raw hex.** Use the semantic aliases (`--text-primary`, `--surface-card`, `--action-primary`) so light/contrast behavior stays consistent.

---

## Content fundamentals (voice & tone)

UHC writes to **reassure and empower** — health decisions are stressful, so copy stays calm, plain, and human.

- **Person & address.** Speak to the member as **"you"**; refer to the company as **"we"** ("We'll email you when your claim is processed"). Warm but not chummy.
- **Tone.** Confident, supportive, jargon-free. Translate insurance terms into everyday language ("what you'll pay" over "coinsurance liability"). Optimistic without over-promising.
- **Casing.** Sentence case everywhere — buttons, headings, nav, labels. Reserve ALL CAPS for small eyebrow labels only (tracked +8%). Never Title Case running headings.
- **Brand name.** One word, internal caps: **UnitedHealthcare** (wordmark) / "UHC" in shorthand and internal contexts.
- **Verbs first on actions.** CTAs lead with a verb and stay short: "Find care", "View plan", "Get started", "Download ID card".
- **Numbers & clarity.** Be specific and concrete ("Your plan renews in 14 days") rather than vague ("soon"). Always show real dollar amounts when known.
- **No emoji.** UHC is a regulated healthcare brand — no emoji in product or marketing UI. Iconography carries visual meaning instead.
- **Vibe.** "Healthier lives, made simpler." Clarity, dignity, and momentum — never clinical-cold, never gimmicky.

Example microcopy:
- Empty state: "You don't have any claims yet. When you visit a provider, your claims will show up here."
- Success: "Claim submitted. We'll email you when it's been processed."
- Error: "We couldn't process your payment. Check your card details and try again."

---

## Visual foundations

**Color.** UHC Blue (`#002677`) is the anchor — used for primary actions, headings, brand surfaces, and large fields of color. The canvas is **Warm White** (`#FAF8F2`), not stark white, giving pages a soft, human warmth; pure white is reserved for cards and inputs. Supporting accents — Sky Blue, Bright Blue, Gold, Orange — are used *sparingly* to bring warmth and optimism to imagery and graphic moments; they are accents, never the dominant field. Orange is the highest-energy accent (one CTA per view, max). Neutrals are a **cool, blue-tinted grey ramp** so greys harmonize with the blue rather than reading flat.

**Typography.** Two families. **UHC Serif Headline** (Semibold) is the editorial display face — used large, for hero headlines and big emotional moments, in UHC Blue. **UHC Sans** (Medium / SemiBold / Bold) is the UI workhorse for everything else: headings, body, labels, controls. Headlines pair serif display with sans subheads. Eyebrows are small, bold, uppercase, tracked +8%, in brand blue.

**Spacing & layout.** A strict **4px grid**. Generous whitespace; content measures cap around 68ch for readability. Layouts are clean, calm, and grid-aligned — never dense or cramped. Containers max around 1200px.

**Corners & cards.** Soft but restrained. **Buttons and chips are fully pill-shaped**; cards use a 12px radius; inputs 8px. Cards are white on the warm-white canvas with a **soft, cool-tinted shadow** (`--shadow-sm`) and a hairline `--border-subtle`; an optional 4px brand-colored top bar (`accent`) flags featured cards. Interactive cards lift 2px with a stronger shadow on hover.

**Shadows.** Low-spread, soft, and tinted with UHC ink (`rgba(12,26,54,…)`) rather than pure black — never harsh. Elevation steps sm → xl.

**Backgrounds.** Predominantly flat warm-white or white. UHC Blue is used as a full-bleed field for hero/brand sections (white text, bright-blue eyebrows). **No purple/blue gradients, no noise textures, no decorative blur.** Imagery (when present) skews warm, optimistic, real people — natural light, hopeful, never clinical or cold.

**Motion.** Calm and confident — **gentle ease-out fades and short slides, no bounce**. Durations 120–320ms. Respect `prefers-reduced-motion`.

**Interaction states.**
- *Hover:* primary buttons darken slightly (`--action-primary-hover`); secondary/ghost fill with a faint blue tint; cards lift.
- *Press:* deepen to `--action-primary-press`; no shrink/scale.
- *Focus:* a 3px Bright-Blue focus ring (`--ring-focus`) — visible and on-brand.
- *Disabled:* 45% opacity, `not-allowed` cursor.

**Transparency & blur.** Used minimally — light tint backgrounds for status (`--uhc-*-bg`), no glassmorphism.

---

## Iconography

UHC's product surfaces use a **clean, friendly line-icon style** — rounded caps and joins, ~2px stroke, single-color (usually UHC Blue or the current text color), drawn on a 24px grid. This matches the brand's approachable-but-trustworthy tone.

- **No official icon font was supplied with this system.** As a substitute, use **[Lucide](https://lucide.dev)** (CDN) — its rounded-cap, 24px, ~2px-stroke line icons are the closest open match to UHC's house style. **This is a substitution — flag it and replace with UHC's official icon set when provided.** Inline SVGs in components (chevrons, check, close, alert) follow the same rounded-line spec.
- **No emoji** are ever used as icons.
- **No unicode glyphs** stand in for icons.
- Icons are functional and quiet — they support labels, they don't decorate. Keep them single-weight and single-color; never multicolor or filled-illustrative.

To use Lucide from CDN in a prototype:
```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="search"></i>
<script>lucide.createIcons();</script>
```

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill wrapper for use in Claude Code.

**`tokens/`** — design tokens (all reachable from `styles.css`)
- `fonts.css` — `@font-face` for UHC Sans + UHC Serif Headline
- `colors.css` — primary, supporting, neutral ramp, semantic + aliases
- `typography.css` — families, scale, weights, roles
- `spacing.css` — 4px grid + layout measures
- `radii.css` · `shadows.css` · `motion.css` · `base.css`

**`assets/fonts/`** — UHC brand font binaries (`.otf`)

**`guidelines/`** — foundation specimen cards (Design System tab)
- Colors: primary, supporting, neutral, semantic
- Type: display, sans weights, scale
- Spacing: scale, radii, shadows
- Brand: lockup, expression

**`components/`** — reusable React primitives
- `core/` — Button, Badge, Card, Avatar
- `forms/` — Input, Select, Checkbox, RadioGroup, Switch
- `feedback/` — Alert, Tabs

**`ui_kits/member-portal/`** — high-fidelity member-portal UI kit (dashboard, claims, find-care)

**`slides/`** — sample branded slides built on the UHC template (title, section, content, stat, quote)

---

## Caveats / still needed

- **Official logo art.** No UHC logo file was supplied — the Brand Lockup card uses a placeholder wordmark. Please upload official logo SVG/PNG art.
- **PowerPoint template.** `UHC_Template_2025.potx` was referenced but did not arrive in the project. Sample slides were built from the brand foundations; upload the `.potx` to align exactly.
- **Icon set.** Substituting Lucide for UHC's house icon set (see Iconography). Upload the official icons to replace.
- **Imagery.** No brand photography was supplied; UI kits use neutral placeholders where photos would appear.
