# Database design

PostgreSQL on Neon is the target production datastore. Local Docker Compose provides PostgreSQL only for development; the API does not require a database connection for health and version endpoints.

## Conventions

- SQLAlchemy 2 models will inherit from `app.database.base.Base`.
- Schema changes are created and reviewed as Alembic migrations in `backend/alembic/versions`.
- Use UUID primary keys, UTC timestamps, foreign-key indexes, and `created_at`/`updated_at` audit columns for future tenant-owned entities.
- Keep external provider identifiers separate from internal primary keys.
- Never expose persistence models directly through API contracts.

## Future domains

Identity, market instruments, provider data, portfolios, research artifacts, entitlements, and notifications will be introduced only after their lifecycle, retention, and ownership rules are defined. This prevents premature schema coupling and keeps provider data replaceable.
