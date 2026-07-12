# SurfThroughStocks

The production-minded foundation for a future AI-powered stock market research platform. This repository deliberately contains no market data, investment logic, AI integrations, or authentication implementation yet.

## Stack

- **Web:** React, TypeScript, Vite, Tailwind CSS, shadcn/ui conventions, React Router, TanStack Query, React Hook Form, and Zod.
- **API:** Python 3.12+, FastAPI, SQLAlchemy 2, Alembic, Pydantic v2, and Uvicorn.
- **Data and deployment:** PostgreSQL/Neon, Vercel, and Railway or Render.

## Quick start

Prerequisites: Node.js 22+, Python 3.12+, and optionally Docker Desktop.

```bash
cp .env.example .env
cd frontend && npm install && npm run dev
```

In another terminal:

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -e ".[dev]"
uvicorn app.main:app --reload
```

Open `http://localhost:5173`; API health is at `http://localhost:8000/api/v1/health`.

Alternatively, start the local stack (including PostgreSQL) with `docker compose up --build`.

## Repository layout

```text
frontend/  React application and UI system
backend/   FastAPI service, migrations, and domain boundaries
docs/      Product and engineering reference material
infra/     Future platform and deployment configuration
.github/   CI/CD workflow location
```

## Development workflow

1. Copy the environment template and never commit secrets.
2. Keep web code formatted and linted with `npm run format:check` and `npm run lint`.
3. Keep API code formatted/linted with `ruff format --check .` and `ruff check .`; test with `pytest`.
4. Add database changes only through Alembic migrations.
5. Keep business behavior inside domain modules, not HTTP handlers or UI components.

Further detail is available in [docs](docs/architecture.md).
