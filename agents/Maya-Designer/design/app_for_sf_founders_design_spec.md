# App for SF Founders — Design Specification

## Summary
Deliverables created:
- Component spec (tokens, spacing, color, type scale)
- User flows and screen inventory
- Export and asset naming guidelines

Purpose: Provide frontend and QA with a complete, implementable design spec so engineers can implement UI components with correct visual system and interactions.

Reference specs:
- Product PRD: output/specs/app_for_sf_founders.md
- Frontend implementation spec: output/specs/frontend_spec_app_for_sf_founders.md

---

## Personas & Context
- Primary: Early-stage startup founders in SF, busy, mobile-first but use desktop for deeper tasks.
- Usage context: quick daily check-ins on mobile; deeper profile and onboarding flows on desktop.

Design principles:
- Clarity: clear visual hierarchy and minimal cognitive load
- Speed: small payloads, lightweight visuals
- Accessibility: AA contrast minimum, keyboard focus states

---

## Screen Inventory (priority order)
1. Onboarding / Welcome
2. Dashboard (feed of recommended resources & events)
3. Founder Profile
4. Application / Submission form
5. Settings & Notifications
6. Detail screens (resource details, event details)
7. Modals & Toasts

---

## User Flow (high level)
1. Open app -> Onboarding (if first time) -> Create Profile -> Dashboard
2. From Dashboard -> Open resource or event -> Apply/RSVP (modal)
3. From Profile -> Edit details -> Save -> confirmation toast

---

## Design Tokens
- Color
  - primary: #0B5FFF (Blue 600) — primary CTAs
  - primary-variant: #0846D9 (Blue 700)
  - secondary: #00C48C (Green 500)
  - neutral-900: #0F1724 (dark text)
  - neutral-700: #475569
  - neutral-300: #E6EEF8
  - background: #FFFFFF
  - surface: #F8FAFC
  - danger: #E12D39
  - success: #16A34A

- Elevation / Shadows
  - shadow-1: 0 1px 2px rgba(12, 18, 26, 0.06)
  - shadow-2: 0 6px 12px rgba(12, 18, 26, 0.08)

- Border Radius
  - radius-sm: 6px
  - radius-md: 12px
  - radius-pill: 999px

- Spacing scale (base = 8px)
  - spacing-1: 4px
  - spacing-2: 8px
  - spacing-3: 16px
  - spacing-4: 24px
  - spacing-5: 32px

---

## Type Scale
- Font family: Inter (system fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto)
- Sizes:
  - display-lg: 28px / 36px line-height / 600
  - heading-md: 20px / 28px / 600
  - heading-sm: 16px / 24px / 600
  - body-lg: 16px / 24px / 400
  - body-md: 14px / 20px / 400
  - caption: 12px / 16px / 400

Accessibility note: body text must be at least 14px on mobile to ensure legibility.

---

## Component Specs (implementable)

Button (Primary)
- Height: 44px
- Padding: 0 16px
- Border radius: radius-md (12px)
- Background: primary (#0B5FFF)
- Text: body-md, white, semibold
- States:
  - Hover: primary-variant
  - Disabled: neutral-300 + text neutral-700
  - Focus: 2px outline of primary (semi-transparent) + box-shadow shadow-2

Button (Secondary)
- Background: transparent
- Border: 1px solid neutral-300
- Text: primary

Input (Text)
- Height: 44px
- Padding: 0 12px
- Border radius: radius-sm (6px)
- Border: 1px solid neutral-300
- Placeholder: neutral-700 (opacity 60%)

Card (Resource / Event)
- Padding: spacing-3
- Border radius: radius-md
- Background: surface
- Elevation: shadow-1
- Title: heading-sm
- Meta: caption

Avatar
- Sizes: small 32px, medium 40px, large 64px
- Shape: circle

Iconography
- Use 24px grid for icons. Provide SVGs with viewBox 24.

---

## Layout & Grid
- Mobile container width: 360-420px (centered)
- Desktop max-width: 1024px with 16px gutters
- Use 8px spacing scale for layout rhythm

---

## Motion
- Small micro-interactions: 100-150ms ease-in-out
- Modal fade + slide up: 180ms ease-out

---

## Accessibility & Internationalization
- Ensure color contrast ratio >= 4.5:1 for body text
- All interactive elements must be keyboard focusable and have visible focus ring
- Text fields should not rely on placeholder for labels; use visible labels
- Provide translations-ready string keys (no images with embedded text)

---

## Export / Assets
See output/design/figma_instructions_and_assets_list.md for full export instructions and asset naming. Short list:
- All screens exported as PNG @1x and @2x (for 2x retina)
- Icons exported as optimized SVG
- PNG background: transparent where needed (icons, avatars). Screens: solid background (#FFFFFF)
- Naming convention: app_screenname_variant_v1.png (e.g., dashboard_home_01@2x.png)

---

## Implementation Notes
- Prefer CSS variables for tokens (colors, spacing, type) to make them themeable
- Keep components atomic: Button, Input, Card, Avatar, Icon, Modal
- Provide component variants (primary/secondary/ghost) in Figma as variants

---

## Decisions & Trade-offs
- Chose Inter as typeface for legibility and compact metrics. Trade-off: license ok for web, slight difference vs system font on Android; fallback stack provided.
- Spacing base 8px chosen for consistent rhythm and easy responsive scaling.

---

## Next actions (from design)
1. Create high-fidelity Figma file and component library (tokens, components, variants).
2. Export PNGs for screens (1x and 2x) and SVG icons.
3. Deliver Figma link + exported PNGs into shared drive / artifact repo.

