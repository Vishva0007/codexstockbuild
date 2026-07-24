import { Trash2 } from "lucide-react";

interface Props {
  stocks: string[];
  selected: string;
  onSelect(symbol: string): void;
  onRemove(symbol: string): void;
}

export function Watchlist({
  stocks,
  selected,
  onSelect,
  onRemove,
}: Props) {
  return (
    <div className="rounded-xl border bg-card p-4">
      <h2 className="mb-4 text-lg font-bold">Watchlist</h2>

      <div className="space-y-2">
        {stocks.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No stocks added.
          </p>
        )}

        {stocks.map((stock) => (
          <div
            key={stock}
            className={`flex items-center justify-between rounded-lg border p-3 ${
              selected === stock ? "bg-muted" : ""
            }`}
          >
            <button
              onClick={() => onSelect(stock)}
              className="font-semibold"
            >
              {stock}
            </button>

            <button
              onClick={() => onRemove(stock)}
              className="text-red-500"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}