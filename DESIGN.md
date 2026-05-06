# Design

## Color System

Color strategy: **Committed**. One saturated color (brand red) carries identity across surfaces. Neutrals tinted toward red hue.

### Palette (OKLCH)

```
--brand:         oklch(0.55 0.22 15)       /* Confident red */
--brand-hover:   oklch(0.48 0.20 15)       /* Darker on interact */
--brand-light:   oklch(0.68 0.16 15)       /* Softer red for accents */
--brand-subtle:  oklch(0.55 0.22 15 / 0.08) /* Tint for bg */

/* Dark theme neutrals — warm-tinted toward red */
--bg-primary:    oklch(0.13 0.008 15)      /* Near-black, warm */
--bg-surface:    oklch(0.17 0.006 15)      /* Elevated surface */
--bg-card:       oklch(0.20 0.005 15)      /* Card bg */
--text-primary:  oklch(0.96 0.005 15)      /* Near-white, warm */
--text-secondary: oklch(0.78 0.01 15)      /* Body text */
--text-muted:    oklch(0.62 0.01 15)       /* Captions, meta */
--border-color:  oklch(0.28 0.008 15)      /* Subtle dividers */

/* Light theme neutrals */
--bg-primary-light:    oklch(0.97 0.005 15)
--bg-surface-light:    oklch(1.0 0.0 0)
--bg-card-light:       oklch(1.0 0.0 0)
--text-primary-light:  oklch(0.15 0.01 15)
--text-secondary-light: oklch(0.35 0.01 15)
--text-muted-light:    oklch(0.50 0.01 15)
--border-color-light:  oklch(0.85 0.005 15)
```

## Typography

### Font Stack

- **Headings**: Inter (variable), weight 600–700
- **Body**: Inter (variable), weight 400
- **Code**: JetBrains Mono

### Scale

- Display (hero h1): clamp(2.5rem, 5vw, 3.5rem) / weight 700 / tracking -0.03em
- Section h2: 1.75rem / weight 600 / tracking -0.02em
- Card title: 1.25rem / weight 600 / tracking -0.01em
- Body: 1.05rem / line-height 1.75 / max-width 68ch
- Small/meta: 0.8rem / weight 500 / tracking 0.02em

## Spacing

Variable rhythm. Don't use equal spacing everywhere.

- Section gap: 5rem (generous breathing room)
- Content gap within section: 2rem
- Card internal padding: 1.5rem
- Tight clusters (meta, tags): 0.5rem

## Elevation & Borders

- Cards: 1px border, no box-shadow in dark mode. Light mode: subtle shadow (0 1px 2px oklch(0 0 0 / 0.04))
- Hover: border shifts toward brand color, no translate/scale transforms
- Active states: slight opacity reduction, no bounce

## Motion

- Duration: 150ms for micro, 250ms for layout shifts
- Easing: cubic-bezier(0.16, 1, 0.3, 1) — ease-out-expo
- No bounce, no elastic, no parallax
- Respect prefers-reduced-motion

## Component Patterns

### Navigation

- Sticky, backdrop-blur, semi-transparent bg
- Active link: brand color text + weight 600, no underline or border decorations
- Mobile: slide-out panel or bottom sheet, not grid of buttons

### Post Cards

- Full-width on mobile, 2-col grid on desktop
- No identical sizing. Feature first card larger optionally
- Content hierarchy: date small → title prominent → description secondary → tags subtle

### Hero

- Text-led, no decorative orbs/rings/floating elements
- Clear value prop in <3 seconds of reading
- One CTA maximum prominence, second CTA quiet

### Prose / Article

- Headings: weight + size only. No side-stripe borders
- Blockquotes: subtle bg tint + left spacing (no border-left accent)
- Code blocks: terminal chrome (dots + lang badge) is acceptable, keep it subtle

## Anti-Patterns to Avoid

- No gradient text
- No glassmorphism
- No bounce/elastic animations
- No side-stripe borders on headings
- No identical card grids without variation
- No hero-metric templates (big number + small label)
- No floating orbs, rings, spinning decorations in hero
