# Coding standards

## General

- Prefer explicit, typed interfaces at every process boundary.
- Keep commits focused, reversible, and covered by appropriate checks.
- Never place secrets in source, tests, documentation, or client bundles.
- Avoid business behavior in framework glue code.

## Frontend

- TypeScript strict mode is required; avoid `any`.
- Use the `@/` path alias and domain-oriented imports.
- Pages compose components; API requests live in `api/` or `services/`.
- Reuse shadcn-style primitives from `components/ui` before creating one-off controls.
- Validate user-facing forms with Zod and React Hook Form.

## Backend

- Python 3.12+ with complete type hints on public functions.
- Keep FastAPI handlers thin; use dependencies for shared request resources.
- Use Pydantic schemas at API boundaries and SQLAlchemy models only for persistence.
- Add migrations for every persisted-schema change; do not mutate a deployed schema manually.
- Run Ruff and Pytest before opening a pull request.
