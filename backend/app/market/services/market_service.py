from app.market.providers.base import MarketProvider


class MarketService:
    def __init__(self, provider: MarketProvider):
        self.provider = provider

    async def search(self, query: str):
        return await self.provider.search(query)

    async def get_quote(self, symbol: str):
        return await self.provider.get_quote(symbol)

    async def get_company(self, symbol: str):
        return await self.provider.get_company(symbol)

    async def get_history(
        self,
        symbol: str,
        interval: str,
        period: str,
    ):
        return await self.provider.get_history(
            symbol,
            interval,
            period,
        )