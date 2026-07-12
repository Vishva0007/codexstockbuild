export interface StockSearchResult {
  symbol: string;
  name: string;
  exchange: string;
}

export interface Quote {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

export interface Company {
  symbol: string;
  name: string;
  sector: string;
}