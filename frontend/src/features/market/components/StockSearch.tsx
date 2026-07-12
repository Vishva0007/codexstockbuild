import { useState } from "react";

import { useStockSearch } from "../hooks/useStockSearch";

export function StockSearch() {
  const [query, setQuery] = useState("");

  const { data, isLoading, error } = useStockSearch(query);

  return (
    <div className="space-y-4">

      <input
        type="text"
        placeholder="Search stocks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-lg border border-input bg-background px-4 py-3"
      />

      {isLoading && (
        <p className="text-sm text-muted-foreground">
          Searching...
        </p>
      )}

      {error && (
        <p className="text-sm text-red-500">
          Failed to load stocks.
        </p>
      )}

      <div className="space-y-2">

        {data?.map((stock) => (

          <div
            key={stock.symbol}
            className="rounded-lg border border-border p-4 hover:bg-muted transition cursor-pointer"
          >

            <h3 className="font-semibold">
              {stock.name}
            </h3>

            <p className="text-sm text-muted-foreground">
              {stock.symbol}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}