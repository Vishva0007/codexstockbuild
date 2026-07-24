import type { Quote } from "../types/stock";

interface Props {
  quote: Quote;
}

function formatNumber(value?: number) {
  if (value == null) return "-";
  return value.toLocaleString();
}

function formatMarketCap(value?: number) {
  if (value == null) return "-";

  if (value >= 1_000_000_000_000)
    return `${(value / 1_000_000_000_000).toFixed(2)} T`;

  if (value >= 1_000_000_000)
    return `${(value / 1_000_000_000).toFixed(2)} B`;

  if (value >= 1_000_000)
    return `${(value / 1_000_000).toFixed(2)} M`;

  return value.toLocaleString();
}

export function QuoteCard({ quote }: Props) {
  const positive = (quote.change ?? 0) >= 0;

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{quote.symbol}</h2>

          <p className="mt-2 text-4xl font-bold">
            {quote.currency} {quote.price?.toFixed(2)}
          </p>

          <p
            className={`mt-2 font-semibold ${
              positive ? "text-green-600" : "text-red-600"
            }`}
          >
            {positive ? "+" : ""}
            {quote.change?.toFixed(2)} (
            {quote.changePercent?.toFixed(2)}%)
          </p>
        </div>

        <div className="text-right text-sm text-muted-foreground">
          <p>{quote.exchange}</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">

        <Stat title="Open" value={quote.open?.toFixed(2)} />
        <Stat title="Previous Close" value={quote.previousClose?.toFixed(2)} />

        <Stat title="Day High" value={quote.dayHigh?.toFixed(2)} />
        <Stat title="Day Low" value={quote.dayLow?.toFixed(2)} />

        <Stat
          title="52W High"
          value={quote.fiftyTwoWeekHigh?.toFixed(2)}
        />

        <Stat
          title="52W Low"
          value={quote.fiftyTwoWeekLow?.toFixed(2)}
        />

        <Stat
          title="Volume"
          value={formatNumber(quote.volume)}
        />

        <Stat
          title="Avg Volume"
          value={formatNumber(quote.averageVolume)}
        />

        <Stat
          title="Market Cap"
          value={formatMarketCap(quote.marketCap)}
        />

        <Stat
          title="Trailing PE"
          value={quote.trailingPE?.toFixed(2)}
        />

        <Stat
          title="Forward PE"
          value={quote.forwardPE?.toFixed(2)}
        />

        <Stat
          title="Dividend Yield"
          value={
            quote.dividendYield != null
              ? `${(quote.dividendYield * 100).toFixed(2)}%`
              : "-"
          }
        />

      </div>
    </div>
  );
}

function Stat({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="mt-1 text-lg font-semibold">{value}</p>
    </div>
  );
}