from fastapi import APIRouter

from app.market.providers.yahoo import YahooMarketProvider
from app.market.services.market_service import MarketService

router = APIRouter(prefix="/market", tags=["Market"])

provider = YahooMarketProvider()
service = MarketService(provider)


@router.get("/search")
async def search(query: str):
    return await service.search(query)


@router.get("/quote/{symbol}")
async def quote(symbol: str):
    return await service.get_quote(symbol)


@router.get("/company/{symbol}")
async def company(symbol: str):
    return await service.get_company(symbol)


@router.get("/history/{symbol}")
async def history(
    symbol: str,
    interval: str = "1d",
    period: str = "6mo",
):
    return await service.get_history(
        symbol=symbol,
        interval=interval,
        period=period,
    )
    