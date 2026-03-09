# Frontend Task: App for SF Founders

## Situation
Alex created the MVP product spec (output/specs/app_for_sf_founders.md) and design task has been assigned to Maya (#ai-design). The team needs frontend readiness work so implementation can start once design assets arrive.

## Complication
Design assets are pending. Backend API shapes are not yet confirmed. Frontend work should be framed so it can begin immediately when designs and API contracts are available.

## Resolution / Deliverables (what I created)
1. Frontend task & implementation plan (this file) outlining pages, components, state, and acceptance criteria.
2. Starter React component (HomePage.tsx) as the initial code scaffold that maps to the hero section in the spec.
3. Unit test for the starter component (HomePage.test.tsx).

## Pages & Primary UX Flows
- Landing / Marketing (hero, value props, CTA)
- Sign up / Onboarding wizard for founders
- Dashboard (personalized recommendations, events, community feed)
- Founder Profile (bio, links, metrics)
- Events & Meetups (list + RSVP)
- Messaging / Connections (1:1, group threads)

## Components
- Global: Header, Footer, Container
- UI primitives: Button, Input, Card, Avatar, Modal, Skeleton
- Feature: FounderCard, EventCard, OnboardingStep, MessageList

## State & Data
- UI state: Zustand (global store for auth, theme, ephemeral UI state)
- Remote data: fetch/React Query (option pending) — backend to confirm pagination & caching needs

## API Contracts (PLACEHOLDERS - need confirmation from Marcus)
- GET /api/v1/founders?page=&per_page=
  Response: { items: Founder[], total_count: number, page: number, per_page: number }
- GET /api/v1/founders/:id => { id, name, avatar_url, bio, links }
- GET /api/v1/events?page=&per_page=
- POST /api/v1/auth/login => { token }

(See `Next steps` for exact shapes required.)

## Acceptance Criteria
- Responsive (mobile-first) and accessible (WCAG AA baseline)
- Loading & error states for all remote data
- Unit tests for critical components (RTL)
- Typescript types for API responses
- Design tokens wired to Tailwind variables once Maya provides the figma-export

## Risks & Decisions
- Decision: use Zustand for local/global UI state (lightweight, straightforward). If heavy server-state caching is required, we'll add React Query.
- Risk: Without confirmed API shapes, some components will need small adapter layers. We'll keep them isolated.

## Next steps (what I need from others)
- #ai-design (Maya): high-fidelity Figma + exported PNGs + component spec (spacing, tokens). Reference: output/specs/app_for_sf_founders.md
- #ai-backend (Marcus): confirm API endpoints and full response JSON examples (see API Contracts above)

