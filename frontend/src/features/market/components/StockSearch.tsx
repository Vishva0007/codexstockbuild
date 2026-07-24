import { useState } from "react";
import { useStockSearch } from "../hooks/useStockSearch";

interface Props {
  onSelect(symbol: string): void;
}

export function StockSearch({ onSelect }: Props) {
  const [query, setQuery] = useState("");

  const { data, isLoading } = useStockSearch(query);

  return (
    <div style={{ marginBottom: 24 }}>
      <input
  type="text"
  placeholder="Search stock..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
/>

      {isLoading && <p>Searching...</p>}

      {query.length > 1 && data && data.length > 0 && (
        <div
  className="mt-2 rounded-md border border-border bg-background shadow-lg"
>
          {data.map((stock) => (
            <div
  key={stock.symbol}
  onClick={() => {
    onSelect(stock.symbol);
    setQuery("");
  }}
  className="cursor-pointer border-b border-border px-3 py-2 text-foreground hover:bg-muted"
>
              <strong>{stock.symbol}</strong> — {stock.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}