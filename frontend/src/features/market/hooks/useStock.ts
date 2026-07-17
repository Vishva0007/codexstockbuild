import { useQueries } from "@tanstack/react-query";
import { marketApi } from "../api/marketApi";

export function useStock(symbol: string) {
  const [quote, company, history] = useQueries({
    queries: [
      {
        queryKey: ["quote", symbol],
        queryFn: () => marketApi.quote(symbol),
        enabled: !!symbol,
      },
      {
        queryKey: ["company", symbol],
        queryFn: () => marketApi.company(symbol),
        enabled: !!symbol,
      },
      {
        queryKey: ["history", symbol],
        queryFn: () => marketApi.history(symbol),
        enabled: !!symbol,
      },
    ],
  });

  return {
    quote: quote.data,
    company: company.data,
    history: history.data,

    isLoading:
      quote.isLoading ||
      company.isLoading ||
      history.isLoading,

    isError:
      quote.isError ||
      company.isError ||
      history.isError,
  };
}