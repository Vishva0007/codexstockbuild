from fastapi import APIRouter

from app.market.providers.mock import MockMarketProvider
from app.market.services.market_service import MarketService

router = APIRouter(prefix="/market", tags=["Market"])

provider = MockMarketProvider()
service = MarketService(provider)


@router.get("/search")
async def search(query: str):
    return await service.search(query)