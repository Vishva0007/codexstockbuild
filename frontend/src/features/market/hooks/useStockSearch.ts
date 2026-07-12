import { useQuery } from "@tanstack/react-query";
import { marketApi } from "../api/marketApi";

export function useStockSearch(query: string) {
  return useQuery({
    queryKey: ["stock-search", query],
    queryFn: () => marketApi.search(query),
    enabled: query.length > 1,
  });
}