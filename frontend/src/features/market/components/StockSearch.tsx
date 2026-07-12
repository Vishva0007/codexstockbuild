import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useStockSearch } from "../hooks/useStockSearch";

export function StockSearch() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, isLoading, error } = useStockSearch(query);

  return (
    <div className="relative">

      <div className="relative">

        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Indian stocks..."
          className="w-full rounded-lg border border-input bg-background py-3 pl-10 pr-4 outline-none transition focus:border-primary"
        />

      </div>

      {query.length > 1 && (

        <div className="absolute z-50 mt-2 w-full rounded-lg border border-border bg-card shadow-lg">

          {isLoading && (
            <p className="p-4 text-sm text-muted-foreground">
              Searching...
            </p>
          )}

          {error && (
            <p className="p-4 text-sm text-red-500">
              Failed to search.
            </p>
          )}

          {!isLoading && data?.length === 0 && (
            <p className="p-4 text-sm text-muted-foreground">
              No stocks found.
            </p>
          )}

          {data?.map((stock) => (

            <button
  key={stock.symbol}
  onClick={() => navigate(`/stocks/${stock.symbol}`)}
  className="flex w-full flex-col border-b border-border p-4 text-left transition hover:bg-muted last:border-none"
>

              <span className="font-medium">
                {stock.name}
              </span>

              <span className="text-sm text-muted-foreground">
                {stock.symbol} • {stock.exchange}
              </span>

            </button>

          ))}

        </div>

      )}

    </div>
  );
}