Executive summary

- Deliverable: Design spec for "App for SF Startup Founders" including user flows, component spec, wireframes, style tokens, PNG export guidance, and acceptance criteria.
- File: output/design/app_for_sf_founders_design_spec.md

1) Core ask (restated)

The real ask is: produce a complete design package so frontend can implement an MVP product for San Francisco startup founders: high-fidelity visual spec, component definitions, and exported assets (PNGs).

2) Product context & users

- Primary users: early-stage SF founders (0–5 employees), angel investors, and ecosystem orgs (accelerators, VCs).
- Key goals: quickly discover founder peers, join events, share resources, and find collaborators.
- Usage context: mobile-first but desktop-enabled; sessions often on-the-go between meetings and events.

3) MECE breakdown (screens & flows)

- Onboarding: signup (email / Google), quick profile setup, interest tags
- Home / Dashboard: activity feed, recommended founders, upcoming events
- Search & Network: filterable directory of founders, companies, roles, tags
- Founder profile: bio, company, tech stack, open roles, contact CTA
- Messaging / Connections: lightweight DM & connection requests (in-app)
- Events & Resources: RSVP, event details, resource library
- Settings & Billing: profile edits, notification prefs

4) User flows (key flows)

- Signup & Quick-Start
  1. User selects Sign up (Google / Email)
  2. Quick profile: name, company, stage, interests (3 tags), city
  3. Onboarding completion: shown 3 recommended founders and 2 events

- Discover & Connect
  1. User opens Search
  2. Applies filters (Stage / Tag / Location)
  3. Taps a profile → sees details → taps Connect or Message
  4. If Connect: send connection request (one-tap). If Message: open DM composer

- RSVP to Event
  1. From Dashboard or Events tab tap event card
  2. See event details & attendees
  3. Tap RSVP (Yes / Maybe / No) → confirmation modal → add to calendar

5) Wireframes (ASCII; two key screens)

- Dashboard (mobile)

[Top Nav: Logo | Search Icon | Avatar]
[Greeting "Morning, Alex" | Quick status: "3 new matches"]
[Cards carousel: Recommended Founders -> horizontally scrollable]
[Feed: Latest activity (events, posts) -> vertical list of cards]
[Bottom Nav: Home | Network | Events | Messages | Me]

- Founder Profile (mobile)

[Header: Back | Name — Company | Connect Button]
[Avatar | Role — Location]
[Bio paragraph (2–3 lines collapsed) | Read more]
[Company details card: stage, employees, website]
[Skills / Tags: chips horizontally wrap]
[Open roles: list]
[Actions: Message | Connect | Share]

(Desktop layouts adapt to 3-column grid: left nav, center feed, right contextual sidebar)

6) Component spec (tokens + components)

- Design tokens
  - Color:
    - Primary: #0A66FF (Brand blue)
    - Accent: #FF6B6B (Action/Alert)
    - Neutral-100: #FFFFFF (background)
    - Neutral-900: #0B1230 (text)
    - Muted: #6B7280 (secondary text)
  - Typography:
    - H1: Inter 28px / 36px line-height / 700
    - H2: Inter 20px / 28px / 600
    - Body: Inter 16px / 24px / 400
    - Caption: Inter 12px / 16px / 400
  - Spacing scale: 4, 8, 12, 16, 24, 32, 40
  - Border radius: 8px (cards), 6px (buttons)

- Components (props & variants)
  - AppBar
    - Props: title, leftIcon, rightActions
    - Height: 56px mobile / 72px desktop
  - Card (founder card)
    - Content: avatar(48) | name | company | tags | action CTA
    - Elevation: 0.5 (subtle shadow)
    - Tap behavior: opens profile
  - Button
    - Variants: Primary (filled), Secondary (outline), Ghost
    - Primary: bg Primary(#0A66FF) text white; Padding 12px 16px
  - Input
    - Variants: single-line, search with icon, multi-line
    - Focus: 2px primary outline
  - Modal
    - Centered, max-width 720px, backdrop 60% black
  - Avatar
    - Sizes: 40, 56, 80
  - Tag / Chip
    - Background: neutral-100 with 1px border, pill radius

7) Accessibility & responsiveness

- Contrast: ensure text contrast >= 4.5:1
- Tap targets: min 44x44 px
- Keyboard nav: all interactive elements reachable
- Responsive breakpoints: mobile < 640px, tablet 641–1024, desktop > 1024
- Prefer system font fallback: Inter, Helvetica, Arial

8) PNG export & deliverables (what I'll provide / what frontend needs)

- Screens to export as PNG (mobile 375x812 and desktop 1440x900):
  - Onboarding Step 3 -> onboarding_step3_375x812.png
  - Dashboard (home feed) -> dashboard_375x812.png, dashboard_1440x900.png
  - Founder profile -> profile_375x812.png, profile_1440x900.png
  - Search results -> search_375x812.png
  - Event detail -> event_detail_375x812.png

- Components / Icons exported as 1x/2x SVG + PNG slices:
  - Buttons, avatars, tag chips, nav icons

9) Decisions & trade-offs (one-line each)

- Mobile-first: primary because founders use app on-the-go; desktop layout is condensed 3-column.
- Horizontal recommended cards: increases discovery without vertical scroll cost.
- Minimal onboarding fields (3 tags): reduce time-to-value and increase completion.

10) Acceptance criteria (for QA / frontend)

- Visual parity: implemented screens match PNG specs and tokens
- Component library: buttons, card, input, modal exist with documented props
- Responsive: layouts adapt at breakpoints; nav accessible via keyboard
- Performance: images optimized; SVG icons used where possible

11) Handoff checklist for frontend

- Review this spec and confirm any technical constraints (image sizes, avatar behavior, realtime vs polling for activity feed).
- I will upload a Figma file (high-fidelity) + export the listed PNGs and SVGs to the shared repo / Figma link. Expect follow-up with link within 24 hours.

-- End of spec --

Notes: This file is intentionally pragmatic: it contains concrete tokens, wireframes, and an export list so frontend can start implementation while I finalize the Figma file and export PNGs/SVGs.
