from pydantic import BaseModel


class StockSearchResult(BaseModel):
    symbol: str
    name: str
    exchange: str


class Quote(BaseModel):
    symbol: str
    price: float
    change: float
    changePercent: float


class Company(BaseModel):
    symbol: str
    name: str
    sector: str