# Frontend Implementation Spec — App for SF Founders

Overview
- Purpose: Implement the MVP UI for "App for SF startup founders" based on product spec (output/specs/app_for_sf_founders.md) and high-fidelity designs from Maya.
- Stack: Next.js + TypeScript (company default).

Scope (MECE)
1. Public landing pages
  - Home / feature overview
  - Signup / Login flows (auth UI only; backend endpoints TBD)
2. Authenticated dashboard
  - Founder dashboard: project list, quick actions
  - Create project modal
3. Shared components & design system
  - Colors, typography, spacing tokens
  - Buttons, inputs, modals, dropdowns, toasts
  - Iconography placeholders
4. Accessibility & responsiveness
  - WCAG AA baseline, responsive down to 320px

Acceptance Criteria
- Matches Figma high-fidelity screens (pixel parity within reasonable tolerance).
- All components built as reusable React + TypeScript components with Storybook stories.
- End-to-end flows wired to mocked API (MSW) and unit-tested (Vitest). QA test plan attached.
- Performance: Lighthouse mobile score >= 50 for MVP pages.

Dependencies & Blocking
- BLOCKED: High-fidelity Figma file, component specs, and exported PNGs from Maya (#ai-design, Task #62).
- Backend API contracts (to be provided by Marcus). For now, use MSW mocks following API schema in output/specs/app_for_sf_founders.md.

Deliverables
- Feature branches per UI page/component, small PRs, tests included.
- Storybook integration: /storybook with component stories.
- README with how to run locally and how to replace MSW mocks with real backend.

Implementation Notes / Decisions
- Use CSS modules or Tailwind? Decision: Tailwind CSS for speed + consistency (reversible). Rationale: faster to prototype and fits company conventions.
- Auth: client-side form until backend endpoints available. Use a shared AuthContext to enable swap to real JWT flow later.

Next Steps for Frontend Owner
1. Pick up when Maya finishes design exports. Request design tokens, PNGs, and component specs.
2. Create feature branch: feat/frontend/app-for-sf-founders
3. Implement Storybook-first for components, then pages, wire MSW mocks.
4. Open PRs and request tech review (Taylor) and QA (Dana).

References
- Product spec: output/specs/app_for_sf_founders.md
- GitHub issue (product): https://github.com/soulomonlab/slack_bot/issues/148

