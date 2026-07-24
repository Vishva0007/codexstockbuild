import { useState } from "react";

import { StockSearch } from "@/features/market/components/StockSearch";
import { StockChart } from "@/features/market/components/StockChart";
import { QuoteCard } from "@/features/market/components/QuoteCard";

import { useStockHistory } from "@/features/market/hooks/useStockHistory";
import { useStockQuote } from "@/features/market/hooks/useStockQuote";

import { CompanyCard } from "@/features/market/components/CompanyCard";
import { useCompany } from "@/features/market/hooks/useCompany";
import { VolumeChart } from "@/features/market/components/VolumeChart";
import { Watchlist } from "@/features/market/components/Watchlist";


export function DashboardPage() {
  const [symbol, setSymbol] = useState("AAPL");
  const [period, setPeriod] = useState("6mo");

  const {
  data: history,
  isLoading: historyLoading,
} = useStockHistory(symbol, "1d", period);

  const {
    data: quote,
    isLoading: quoteLoading,
  } = useStockQuote(symbol);

  const { data: company } = useCompany(symbol);

  return (
    <div className="mx-auto max-w-6xl p-6 space-y-6">
      <h1 className="text-3xl font-bold">Stock Dashboard</h1>

      <StockSearch onSelect={setSymbol} />

      <h2 className="text-xl font-semibold">{symbol}</h2>

      {quoteLoading && <p>Loading quote...</p>}

      {quote && <QuoteCard quote={quote} />}

      {company && <CompanyCard company={company} />}

<div className="flex gap-2 flex-wrap">
  {["1d", "5d", "1mo", "3mo", "6mo", "1y", "5y", "max"].map((p) => (
    <button
      key={p}
      onClick={() => setPeriod(p)}
      className={`rounded border px-3 py-1 ${
        period === p
          ? "bg-blue-600 text-white"
          : "bg-background text-foreground"
      }`}
    >
      {p.toUpperCase()}
    </button>
  ))}
</div>

{historyLoading && <p>Loading chart...</p>}

{history && <StockChart data={history} />}

{history && (
  <>
    <h3 className="text-lg font-semibold mt-6">
      Trading Volume
    </h3>

    <VolumeChart data={history} />
  </>
)}
    </div>
  );
}