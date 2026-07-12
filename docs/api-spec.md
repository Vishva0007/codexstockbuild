# API specification

Base path: `/api/v1`

## `GET /health`

Liveness endpoint. It has no database or third-party dependency so it remains useful to deployment platforms during startup and incidents.

Response `200`:

```json
{ "status": "ok" }
```

## `GET /version`

Deployment metadata endpoint.

Response `200`:

```json
{ "version": "0.1.0", "environment": "development" }
```

Future endpoints must use a versioned router, Pydantic request/response schemas, consistent HTTP statuses, and an authenticated dependency where appropriate.
