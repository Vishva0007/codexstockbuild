from .base import MarketProvider


class MockMarketProvider(MarketProvider):

    async def search(self, query: str):
     from app.market.data.indian_stocks import INDIAN_STOCKS

     query = query.strip().lower()

     if not query:
        return []

     return [
        stock
        for stock in INDIAN_STOCKS
        if query in stock["symbol"].lower()
        or query in stock["name"].lower()
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