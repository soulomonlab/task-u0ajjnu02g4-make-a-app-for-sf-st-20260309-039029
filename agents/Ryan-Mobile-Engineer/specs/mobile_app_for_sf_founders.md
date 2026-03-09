Mobile app implementation spec — "App for SF Founders"

Overview
- Purpose: Mobile-first React Native app targeting SF startup founders to discover peers, events, and resources. This document focuses on mobile integration requirements (screens, navigation, data needs, offline behavior, push notifications) to unblock backend and QA work.

Decisions (mobile team - Ryan)
- Stack: React Native + TypeScript + Expo (managed). Reason: cross-platform speed, OTA updates.
- Navigation: React Navigation (stack + bottom tabs).
- State & Data: Redux Toolkit for local UI/global state; React Query for server state, caching, and background sync.
- Offline: React Query + AsyncStorage persistence (react-query/persistQueryClient) for read cache; optimistic updates for actions when safe.
- Images: Use react-native-fast-image (or Expo's equivalent) with remote caching; backend should expose stable image URLs.
- Push notifications: Use Expo Notifications (initial), plan migration to FCM/APNs for production. Requires backend push token registration endpoint.

Screens (priority order)
1) Onboarding / Auth
   - Email/password + OAuth (Google/Apple). Optional magic link.
   - UX: minimal fields, consent for push notifications.
2) Home / Feed (Tab)
   - Personalized feed: founder posts, local SF events, recommended people.
   - Infinite scroll, per-item actions: like, save, message.
3) Founders Directory (Tab)
   - Search + filters (industry, stage, role). Card list with avatar, name, company, tags.
4) Founder Profile
   - Bio, links, recent posts, availability for coffee/mentoring.
5) Events
   - List and event detail; RSVP flow.
6) Messages (1:1 chat)
   - Basic chat with images, read receipts.
7) Notifications
   - Push and in-app list.
8) Settings / Profile Edit
   - Manage profile, notification preferences, linked accounts.

API Requirements (backend to confirm)
- Auth
  - POST /api/v1/auth/signup
    - body: {email, password, name}
    - resp: {user: {...}, token: "jwt"}
  - POST /api/v1/auth/login
    - body: {email, password}
    - resp: {user, token}
  - GET /api/v1/me
    - auth: Bearer
    - resp: {id, name, email, avatar_url, bio, links[], roles[], tags[]}

- Founders
  - GET /api/v1/founders
    - query: ?q=&industry=&stage=&page=&limit=
    - resp: {items: [{id,name,company,avatar_url,tags[],headline}], meta:{page,limit,total}}
  - GET /api/v1/founders/:id
    - resp: full profile including contact options and availability

- Events
  - GET /api/v1/events
  - GET /api/v1/events/:id
  - POST /api/v1/events/:id/rsvp (auth)

- Messaging
  - GET /api/v1/conversations
  - GET /api/v1/conversations/:id/messages
  - POST /api/v1/conversations (create)
  - POST /api/v1/conversations/:id/messages

- Notifications & Push
  - POST /api/v1/push/register
    - body: {platform: "ios"|"android"|"expo", token: "push_token"}
  - GET /api/v1/notifications

API fields notes / contract points for Marcus
- All user objects should include `avatar_url` (stable, HTTPS), `display_name`, `headline`, `tags` (array of short strings), and `location` (city). If any of these fields are optional, indicate that in schema.
- Endpoints must paginate (page + limit) and return total count for feeds and lists.
- Provide consistent timestamp format: ISO 8601 (UTC).
- Provide CORS for Expo dev and production origins.
- Provide simple error schema: {code, message, details?} and standard HTTP codes (401 for auth, 422 for validation).

Offline / Sync behavior
- Read caching: cache query responses for 24 hours; background refresh on app focus.
- Writes: optimistic UI for likes/saves; queue mutations when offline and replay when online (react-query mutation queue + local persistence).
- Avatar uploads: support upload via multipart/form-data to /api/v1/uploads with a returned URL.

Acceptance criteria (mobile)
- Screens implemented per designs (when Figma delivered).
- All screens handle loading, empty, error states.
- Auth flow with token persisted; auto-refresh or re-login on 401.
- Images load with caching and placeholders.
- Offline read support: previously visited lists open when offline.
- Push token registration at first app launch (after user consent).

Design assets needed from #ai-design (Maya)
- Figma file: high-fidelity screens for all flows listed above.
- Exported PNGs/SVGs for icons and logo (1x,2x,3x). Color tokens, font stack, spacing scale.
- Component spec: buttons, inputs, list item, avatar, badges, chips.

Developer tasks for mobile
- Implement navigation and skeleton screens (stubs until Figma ready).
- Integrate React Query and create API client module (axios/fetch) with token handling.
- Implement Auth + session persistence.
- Implement Founders directory and profile screens with pagination.
- Integrate push token registration endpoint.

Open questions / decisions needing backend input (Marcus)
1) Confirm auth token type (JWT) and expiry / refresh strategy.
2) Confirm user object schema and required fields (avatar_url required?).
3) Provide upload URL and any size limits for avatars.
4) Confirm rate limits and pagination defaults.
5) Do we want a search endpoint vs. filtering on GET /founders? Which params supported?

References
- Product spec: output/specs/app_for_sf_founders.md (created by Alex)

Timeline / priorities
- Blockers: Figma + confirmed API contracts are blocking full UI work.
- If backend provides API stubs for auth + founders within 3 business days, mobile can implement login + directory screens for QA.

Contact
- Mobile owner: Ryan (Mobile Engineer)
- Slack: #ai-mobile (or ping me directly)
