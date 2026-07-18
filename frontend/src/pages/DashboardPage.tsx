import { useState } from "react";

import { StockSearch } from "@/features/market/components/StockSearch";
import { StockChart } from "@/features/market/components/StockChart";
import { useStockHistory } from "@/features/market/hooks/useStockHistory";

export function DashboardPage() {
  const [symbol, setSymbol] = useState("AAPL");

  const { data, isLoading } = useStockHistory(symbol);

  return (
    <div className="mx-auto max-w-5xl">
      <h1>Stock Dashboard</h1>

      <StockSearch onSelect={setSymbol} />

      <h2>{symbol}</h2>

      {isLoading && <p>Loading chart...</p>}

      {data && <StockChart data={data} />}
    </div>
  );
}