import { useQuery } from "@tanstack/react-query";
import { marketApi } from "../api/marketApi";

export function useStockHistory(
  symbol: string,
  interval = "1d",
  period = "6mo",
) {
  return useQuery({
    queryKey: ["stock-history", symbol, interval, period],
    queryFn: () => marketApi.history(symbol, interval, period),
    enabled: !!symbol,
  });
}