from abc import ABC, abstractmethod
from typing import Any


class MarketProvider(ABC):
    """
    Base interface for all market data providers.

    Every provider (Yahoo, Finnhub, Polygon, AlphaVantage, etc.)
    must implement this contract.
    """

    @abstractmethod
    async def search(self, query: str) -> list[dict[str, Any]]:
        """
        Search for stocks by company name or symbol.
        """
        raise NotImplementedError

    @abstractmethod
    async def get_quote(self, symbol: str) -> dict[str, Any]:
        """
        Get the latest market quote.
        """
        raise NotImplementedError

    @abstractmethod
    async def get_company(self, symbol: str) -> dict[str, Any]:
        """
        Get company profile information.
        """
        raise NotImplementedError

    @abstractmethod
    async def get_history(
        self,
        symbol: str,
        interval: str,
        period: str,
    ) -> list[dict[str, Any]]:
        """
        Get historical OHLC price data.
        """
        raise NotImplementedError