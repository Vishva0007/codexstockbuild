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
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          color: "#111",
        }}
      />

      {isLoading && <p>Searching...</p>}

      {data && data.length > 0 && (
        <div
          style={{
            border: "1px solid #ddd",
            marginTop: 8,
            borderRadius: 6,
          }}
        >
          {data.map((stock) => (
            <div
              key={stock.symbol}
              onClick={() => {
                onSelect(stock.symbol);
                setQuery("");
              }}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              <strong>{stock.symbol}</strong> — {stock.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}