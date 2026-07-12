import type {
  Company,
  Quote,
  StockSearchResult,
} from "../types/stock";

const API_BASE = "http://127.0.0.1:8000";

async function request<T>(url: string): Promise<T> {
  const response = await fetch(`${API_BASE}${url}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  return response.json();
}

export const marketApi = {
  search(query: string) {
    return request<StockSearchResult[]>(
      `/market/search?query=${encodeURIComponent(query)}`
    );
  },

  quote(symbol: string) {
    return request<Quote>(
      `/market/quote/${symbol}`
    );
  },

  company(symbol: string) {
    return request<Company>(
      `/market/company/${symbol}`
    );
  },
};