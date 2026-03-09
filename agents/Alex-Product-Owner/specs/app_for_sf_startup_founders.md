# Feature: App for SF Startup Founders
**Goal:** Build an intuitive mobile/web app that helps San Francisco startup founders find co-founders, investors, events, resources, and peers — increasing founder productivity and network effects.

**North Star Impact:** Increase engaged founder MAU and time-to-first-intro; target: 60% feature adoption among active founders in first 6 months.

**Users:**
- Primary: Early-stage SF startup founders (0-2 years, pre-seed/seed) seeking co-founders, funding, and community.
- Secondary: Angels/VCs, mentors, meetup organizers.

**RICE Score:** Reach=2000 founders/Q × Impact=2 (medium-high) × Confidence=70% / Effort=8w → RICE = (2000 × 2 × 0.7) / 8 = 350

**Kano Category:** Performance (core value: connecting founders quickly) + Delighter (curated intro matching)

**Key Capabilities (MVP scope):**
- Founder profiles (team, skills, roles wanted)
- Discovery & matching (filter by domain, stage, skills, availability)
- Messaging & intro request flow (in-app lightweight messaging + template intros)
- Events & calendar (local SF events, RSVP)
- Resource hub (playbooks, VC lists, office space listings)
- Onboarding + verification (email/LinkedIn + optional YC/accelerator badge)

**Acceptance Criteria:**
- [ ] User can sign up and create a founder profile (photo, bio, skills, role sought) within 5 minutes.
- [ ] User can search and filter other founders by domain, stage, and skills; top 10 relevant matches return in <500ms.
- [ ] User can send an intro request; recipient receives notification and can accept/decline.
- [ ] Events page lists upcoming SF events; users can RSVP and add to personal calendar.
- [ ] Initial analytics: onboarding completion rate ≥ 60% and 1st intro sent within 7 days for ≥ 30% of new users.

**Out of Scope (MVP):**
- Payments, fundraising transactions, escrow, or automated investment facilitation.
- Full marketplace features (job postings, paid sponsorship) — post-MVP.

**Success Metrics:**
- MAU among SF founders (target 2,000 within 6 months)
- Onboarding completion rate ≥ 60%
- % of users who send ≥1 intro in first 30 days ≥ 30%
- NPS among founders ≥ 30 after 3 months

**Dependencies & Constraints:**
- Need SF founder seed list / initial user seed (reach assumption depends on partnership with accelerators and meetup organizers).
- Must design for quick mobile-first flows; backend must scale to 10k users.

**GitHub Issue:** (created separately)

**Next steps:**
- Design: wireframes for onboarding, discovery, profile, messaging (assign to Designer)
- Backend: API and data model for profiles, matching, events (assign to Backend after designs)
- QA: acceptance test plan and metrics instrumentation
