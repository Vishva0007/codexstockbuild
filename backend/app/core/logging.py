import logging


def configure_logging(log_level: str) -> None:
    """Configure predictable process-wide logging for service deployments."""
    logging.basicConfig(
        level=log_level.upper(),
        format="%(asctime)s %(levelname)s %(name)s %(message)s",
    )
