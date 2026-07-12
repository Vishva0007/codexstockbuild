from .base import MarketProvider


class MockMarketProvider(MarketProvider):

    async def search(self, query: str):
        return [
            {
                "symbol": "RELIANCE.NS",
                "name": "Reliance Industries Ltd",
                "exchange": "NSE",
            }
        ]

    async def get_quote(self, symbol: str):
        return {
            "symbol": symbol,
            "price": 1500.00,
            "change": 12.5,
            "changePercent": 0.84,
        }

    async def get_company(self, symbol: str):
        return {
            "symbol": symbol,
            "name": "Reliance Industries Ltd",
            "sector": "Energy",
        }

    async def get_history(
        self,
        symbol: str,
        interval: str,
        period: str,
    ):
        return []