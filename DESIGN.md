# Design Brief — Admission Host

## Overview
Premium education consultancy website with high-conversion focus. Deep Blue primary (#1F3C88), vibrant Orange accent (#F26522), clean white backgrounds. Trust-focused hierarchy emphasizes expertise, proven results, and student success. Card-based layout with strategic gradient overlays and soft shadows for depth.

## Tone & Differentiation
Trustworthy, aspirational, professional—not generic ed-tech. Sophisticated visual language conveys expertise (McKinsey-style premium consultancy) while maintaining accessibility and urgency. Every CTA is orange and prominent; every section builds credibility through stats, testimonials, and service clarity.

## Color Palette

| Token | OKLCH | Semantic | Usage |
|-------|-------|----------|-------|
| Primary | 0.35 0.16 255 | Deep Blue | Navigation, headers, trust badges, primary text |
| Secondary | 0.59 0.24 34 | Orange | CTAs, highlights, urgency, hover states |
| Background | 0.99 0 0 | White | Page background, default card fill |
| Muted | 0.93 0 0 | Light Grey | Section dividers, subtle backgrounds, borders |
| Accent | 0.59 0.24 34 | Orange | Emphasis, active states, icons |
| Foreground | 0.15 0 0 | Charcoal | Primary text, body copy |
| Border | 0.88 0 0 | Light Grey | Card borders, input borders, dividers |

## Typography

| Tier | Font | Scale | Usage |
|------|------|-------|-------|
| Display | DM Sans Bold | 3.5rem, 2.5rem | Hero headings, section titles |
| Body | DM Sans Regular | 1rem, 0.875rem | Paragraph copy, descriptions |
| Mono | Geist Mono | 0.875rem | Code, labels (if any) |

## Structural Zones

| Zone | Background | Border | Shadow | Treatment |
|------|-----------|--------|--------|-----------|
| Header | oklch(0.35 0.16 255) | None | Subtle | Sticky, white text, logo + nav |
| Hero | Gradient (blue→darker-blue) | None | Elevated | Full-bleed with image on right, orange CTA |
| Content Section | oklch(0.99 0 0) | None | None | Default, ample padding |
| Alternating Section | oklch(0.93 0 0) | None | None | Subtle bg shift for rhythm |
| Card | oklch(1.0 0 0) | Light grey (0.88) | Card-level | Rounded-xl, hover lift |
| CTA Block | Gradient (orange) | None | Elevated | Full-width, centered text, white CTA |
| Footer | oklch(0.25 0 0) | Top border | None | Dark background, white text |
| Floating Element | oklch(0.59 0.24 34) | None | Elevated | WhatsApp button, sticky bottom-right |

## Elevation & Depth

- **Cards**: `shadow-card` (4px blur, subtle lift on hover)
- **Buttons**: `shadow-elevated` on click/active; `shadow-card` on hover
- **Sticky Header**: `shadow-elevated` with transparency
- **Floating Elements**: `shadow-elevated` always visible, scale on interaction
- **Flat Zones**: No shadow; rely on border or background shift

## Shape Language

- **Buttons**: `rounded-2xl` (24px) with full-width or fixed width
- **Cards**: `rounded-xl` (16px) for course/service cards
- **Hero Section**: `rounded-2xl` on image containers
- **Inputs/Forms**: `rounded-lg` (12px)
- **Icons**: Minimal, geometric, 24px–48px depending on context

## Spacing & Rhythm

- **Padding**: 1rem (cards), 2rem (sections), 3rem (hero)
- **Gap**: 1.5rem between cards; 2rem between sections
- **Vertical Rhythm**: 2rem baseline; scale by section importance
- **Mobile**: Reduce by 0.5rem on small screens; maintain hierarchy

## Component Patterns

- **Hero**: Image (right) + text (left), 50/50 split desktop; stack on mobile
- **Stat Cards**: Icon + number + label, grid layout, no borders
- **Service Cards**: Icon + title + description, `rounded-xl`, hover: lift + border-accent
- **Testimonial**: Avatar + quote + 5-star rating + name, card layout
- **CTA Button**: Orange bg, white text, `rounded-2xl`, hover: darken + lift
- **Form Input**: Light border, soft focus ring (orange), `rounded-lg`

## Motion & Interactions

- **Default Transition**: `transition-smooth` (0.3s cubic-bezier)
- **Button Hover**: Scale 1.02, shadow lift
- **Card Hover**: Lift 2px, shadow elevation
- **Scroll Animations**: Fade-in on entry (0.4s), slide-down for overlays (0.3s)
- **Floating Elements**: Gentle float animation (3s infinite)
- **No Bounce**: All easing is ease-in-out for premium feel; avoid bouncy springs

## Constraints & Brand Rules

- **No generic shadows**: Always use semantic `shadow-*` tokens (card, elevated, subtle)
- **Orange sparingly**: Use secondary/accent only for CTAs, highlights, and active states—max 15% of visible area
- **Blue dominance**: Primary blue should occupy 40–50% of viewport (header, hero, sections)
- **White breathing room**: Never cramped; ample padding and negative space
- **No rainbows**: Palette locked to blue, orange, white, grey; no additional colors
- **Dark mode**: Available but not default; follows same palette with inverted lightness

## Signature Detail

**Gradient hero background** with blue-to-darker-blue fade (135deg, left-to-right). **Orange CTA buttons** with subtle inner glow on hover (orange shadow). **Soft card shadows** (never harsh) create premium feel. **Sticky header** with scroll-triggered shadow elevation. **Floating WhatsApp button** with gentle float animation—immediate, always accessible, reflects conversion priority.

## Accessibility

- **Contrast**: All text meets WCAG AA+ (blue on white, white on blue tested)
- **Focus States**: Orange ring on all interactive elements
- **Mobile Touch**: Buttons min 48px × 48px; spacing 1rem between interactive zones
- **Semantic HTML**: Heading hierarchy locked (h1 → hero, h2 → sections, h3 → cards)
- **Color Not Alone**: Icons + labels used alongside colors; no red-only status indicators
