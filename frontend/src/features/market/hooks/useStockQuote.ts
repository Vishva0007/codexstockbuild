import { useQuery } from "@tanstack/react-query";
import { marketApi } from "../api/marketApi";

export function useStockQuote(symbol: string) {
  return useQuery({
    queryKey: ["stock-quote", symbol],
    queryFn: () => marketApi.quote(symbol),
    enabled: !!symbol,
  });
}