from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_check_returns_ok() -> None:
    response = client.get("/api/v1/health")

    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_version_returns_metadata() -> None:
    response = client.get("/api/v1/version")

    assert response.status_code == 200
    assert response.json()["version"] == "0.1.0"
