from .base import MarketProvider
from typing import Any

import yfinance as yf

from app.market.providers.base import MarketProvider


class YahooMarketProvider(MarketProvider):
    """
    Yahoo Finance implementation of the MarketProvider interface.
    """

    async def search(self, query: str) -> list[dict[str, Any]]:
        # yfinance doesn't provide a free search API.
        # We'll implement search later using another provider.
        return [
            {
                "symbol": "RELIANCE.NS",
                "name": "Reliance Industries Ltd",
                "exchange": "NSE",
            }
        ]

    async def get_quote(self, symbol: str) -> dict[str, Any]:
        ticker = yf.Ticker(symbol)
        info = ticker.info

        return {
            "symbol": symbol,
            "price": info.get("currentPrice"),
            "change": info.get("regularMarketChange"),
            "changePercent": info.get("regularMarketChangePercent"),
        }

    async def get_company(self, symbol: str) -> dict[str, Any]:
        ticker = yf.Ticker(symbol)
        info = ticker.info

        return {
            "symbol": symbol,
            "name": info.get("longName"),
            "sector": info.get("sector"),
        }

    async def get_history(
        self,
        symbol: str,
        interval: str,
        period: str,
    ) -> list[dict[str, Any]]:
        ticker = yf.Ticker(symbol)

        history = ticker.history(
            interval=interval,
            period=period,
        )

        result = []

        for index, row in history.iterrows():
            result.append(
                {
                    "date": index.isoformat(),
                    "open": float(row["Open"]),
                    "high": float(row["High"]),
                    "low": float(row["Low"]),
                    "close": float(row["Close"]),
                    "volume": int(row["Volume"]),
                }
            )

        return result