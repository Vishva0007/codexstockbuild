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

  open: number;
  previousClose: number;

  dayHigh: number;
  dayLow: number;

  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;

  volume: number;
  averageVolume: number;

  marketCap: number;

  trailingPE: number;
  forwardPE: number;

  dividendYield: number;

  currency: string;
  exchange: string;
}

export interface Company {
  symbol: string;
  name: string;
  sector: string;
}

export interface HistoricalPrice {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}