import requests
from typing import Any

import yfinance as yf
from .base import MarketProvider


class YahooMarketProvider(MarketProvider):
    """
    Yahoo Finance implementation of the MarketProvider interface.
    """

    async def search(self, query: str) -> list[dict[str, Any]]:
        url = "https://query1.finance.yahoo.com/v1/finance/search"

        response = requests.get(
            url,
            params={
                "q": query,
                "quotesCount": 10,
                "newsCount": 0,
            },
            headers={
                "User-Agent": "Mozilla/5.0"
            },
            timeout=10,
        )

        print(response.status_code)
        print(response.text)

        data = response.json()
        results: list[dict[str, Any]] = []

        for item in data.get("quotes", []):
            symbol = item.get("symbol")

            if not symbol:
                continue

            results.append(
                {
                    "symbol": symbol,
                    "name": item.get("shortname") or item.get("longname") or symbol,
                    "exchange": item.get("exchange", ""),
                }
            )

        return results

    async def get_quote(self, symbol: str) -> dict[str, Any]:
        ticker = yf.Ticker(symbol)
        info = ticker.info

        return {
            "symbol": symbol,

            "price": info.get("currentPrice"),
            "change": info.get("regularMarketChange"),
            "changePercent": info.get("regularMarketChangePercent"),

        "open": info.get("open"),
        "previousClose": info.get("previousClose"),

        "dayHigh": info.get("dayHigh"),
        "dayLow": info.get("dayLow"),

        "fiftyTwoWeekHigh": info.get("fiftyTwoWeekHigh"),
        "fiftyTwoWeekLow": info.get("fiftyTwoWeekLow"),

        "volume": info.get("volume"),
        "averageVolume": info.get("averageVolume"),

        "marketCap": info.get("marketCap"),

        "trailingPE": info.get("trailingPE"),
        "forwardPE": info.get("forwardPE"),

        "dividendYield": info.get("dividendYield"),

        "currency": info.get("currency"),
        "exchange": info.get("exchange"),
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