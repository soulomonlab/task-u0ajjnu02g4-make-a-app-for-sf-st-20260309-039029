# Feature: App for SF Startup Founders
**Goal:** Provide an app that helps San Francisco startup founders accelerate company building through curated resources, founder networking, and deal-flow visibility.

**North Star Impact:** Increase weekly active founders engaging with the platform to 1,200 (foundation for monetization & network effects).

**Users:**
- Primary: Early-stage SF startup founders (0-18 months) who need connections, mentorship, and resources to move from idea → product → fundraising.
- Secondary: Investors, service providers, and experienced operators who want dealflow and mentor access.

**RICE Score:** Reach=2,000 founders / quarter × Impact=2 (meaningful) × Confidence=60% / Effort=6w = 400

**Kano Category:** Performance (core product for target users) + potential Delighter in matchmaking features

**Core MVP Capabilities (scope):**
- Onboarding flow capturing role, stage, needs (fundraising, hiring, product)
- Curated Resource Hub (articles, templates, vetted vendors)
- Founder Network & Matchmaking (match by stage, expertise, and need)
- Events & Office Hours calendar (RSVP & reminders)
- Basic Profile & Company page for discovery

**Acceptance Criteria:**
- [ ] A user can sign up and complete onboarding in < 3 minutes
- [ ] A user can browse and bookmark curated resources
- [ ] A user can view and request a connection with matched founders (response gating: opt-in)
- [ ] Events can be listed and users can RSVP; reminders sent via in-app notification
- [ ] Core API responses under 300ms 95th percentile for common endpoints
- [ ] System supports 5k concurrent users without failure (initial scalability target)

**Edge cases:**
- Duplicate accounts handled (email normalization + social sign-in mapping)
- User who opts out of matchmaking must not be shown as matchable
- Malicious content flagged & soft-removed pending review

**Out of Scope for MVP:**
- Payments / subscription billing
- Advanced analytics/dashboard for investors
- Native mobile apps (web-first)

**Success Metrics (post-launch):**
- WAU (weekly active users) among SF founders >= 1,200 within 3 months
- Onboarding completion rate >= 60%
- Match request acceptance rate >= 30%
- NPS among founding users >= 30

**Tech constraints / choices:**
- Web-first with progressive enhancement for mobile
- API-first design to enable future mobile apps

**GitHub Issue:** TBD
