# QA Test Plan — App for SF Founders (MVP)

Scope
- End-to-end verification of signup/login flows, dashboard CRUD, and key UI components across supported browsers and screen sizes.

Test Cases (high-level)
1. Signup flow
  - Happy path: new user signs up, confirmation shown, redirected to dashboard (mocked API).
  - Edge: email already in use -> appropriate error.
2. Login flow
  - Happy path: login with correct credentials -> dashboard.
  - Edge: incorrect password -> error toast.
3. Dashboard
  - Create project modal opens, validation errors, successful create adds project to list.
  - Edit/delete project flows.
4. Responsive & Accessibility
  - Layout sanity at 320px, 768px, 1024px.
  - Keyboard navigation for modal and forms.
5. Storybook components
  - Each component story renders without errors.

Automation
- E2E: Playwright tests for signup/login/dashboard (smoke tests).
- Unit: Vitest for component logic and utilities.

Acceptance Criteria
- All critical flows covered by automated tests; tests pass on CI.
- QA checklist completed and signed off by Dana.

Blocking
- BLOCKED by design assets from Maya and final API contracts from Marcus.

Next Steps for QA Owner
- Prepare test skeleton in repo and add Playwright config; start writing tests once frontend components are ready.

