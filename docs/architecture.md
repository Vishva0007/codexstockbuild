# Architecture

## System shape

```text
React web client → FastAPI /api/v1 → application services → repositories → PostgreSQL
                         │
                         ├── auth adapter (future)
                         ├── market/news provider adapters (future)
                         ├── AI orchestration boundary (future)
                         └── notifications/subscriptions (future)
```

The frontend uses route-level page composition, reusable UI primitives, a theme context, client API functions, and TanStack Query. The backend follows clean-architecture direction: API handlers depend on services; services depend on repository contracts; database details remain isolated in repositories/database.

## Backend boundaries

- `api/`: HTTP routing, request dependencies, and response translation only.
- `core/`: settings, logging, error translation, and cross-cutting policies.
- `schemas/`: explicit Pydantic API contracts.
- `services/`: use-case orchestration.
- `repositories/`: persistence contracts and implementations.
- `models/`: SQLAlchemy persistence models.
- `market`, `news`, `portfolio`, `ai`, `auth`, `subscriptions`, `notifications`: future bounded domain modules.

## Scale principles

- Stateless API instances and externally managed PostgreSQL allow horizontal scaling.
- Request validation, versioned APIs, and typed contracts reduce integration breakage.
- Provider integrations will sit behind adapters so they can be swapped, rate-limited, cached, and tested.
- Authentication is a boundary, not a cross-cutting UI assumption, enabling Better Auth or Clerk without a broad rewrite.
