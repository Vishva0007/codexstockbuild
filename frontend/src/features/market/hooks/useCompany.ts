import { useQuery } from "@tanstack/react-query";
import { marketApi } from "../api/marketApi";

export function useCompany(symbol: string) {
  return useQuery({
    queryKey: ["company", symbol],
    queryFn: () => marketApi.company(symbol),
    enabled: !!symbol,
  });
}