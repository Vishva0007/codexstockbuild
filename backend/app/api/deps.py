from collections.abc import Generator

from sqlalchemy.orm import Session

from app.database.session import SessionLocal


def get_db_session() -> Generator[Session, None, None]:
    """Provide a database session for endpoints that require persistence."""
    session = SessionLocal()
    try:
        yield session
    finally:
        session.close()
