from fastapi import APIRouter, status

from app.core.config import get_settings
from app.schemas.system import HealthResponse, VersionResponse

router = APIRouter()


@router.get("/health", response_model=HealthResponse, status_code=status.HTTP_200_OK)
def health_check() -> HealthResponse:
    """Return API liveness information without checking external services."""
    return HealthResponse(status="ok")


@router.get("/version", response_model=VersionResponse, status_code=status.HTTP_200_OK)
def version() -> VersionResponse:
    """Return the currently deployed API version."""
    settings = get_settings()
    return VersionResponse(version=settings.app_version, environment=settings.environment)
