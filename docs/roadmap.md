# Roadmap

## Phase 0 — Foundation (complete)

- Typed React and FastAPI applications with local development configuration.
- Versioned API, health/version contracts, database and migration boundaries.
- Responsive pages and authentication UI placeholders.
- Quality tooling, documentation, Docker development stack, and deployment-oriented configuration.

## Phase 1 — Platform enablement

- Select Better Auth or Clerk and implement an adapter behind `backend/app/auth`.
- Provision Neon and introduce the initial identity model with Alembic.
- Add GitHub Actions for linting, tests, builds, and dependency checks.
- Establish error tracking, structured logging, request correlation, and deployment environments.

## Phase 2 — Domain engines

- Build market, news, portfolio, notifications, and subscriptions as bounded modules.
- Introduce provider adapters, background jobs, rate limiting, and cache strategy.
- Add authoritative test data only through approved integrations.

## Phase 3 — AI and premium experiences

- Add AI orchestration behind the `ai` boundary with evaluation, auditing, and cost controls.
- Build premium entitlement checks and metering.
- Add performance testing and operational runbooks before broad launch.
