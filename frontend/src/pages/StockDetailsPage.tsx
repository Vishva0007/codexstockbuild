import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";

export function StockDetailsPage() {
  const { symbol } = useParams();
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <p className="text-sm text-primary">
          Stock Overview
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          {symbol}
        </h1>

        <p className="mt-2 text-muted-foreground">
          Live market data and AI analysis will appear here.
        </p>
      </div>

      <Card className="p-6">
        <h2 className="font-semibold">
          Current Price
        </h2>

        <p className="mt-4 text-4xl font-bold">
          ₹ --
        </p>
      </Card>

      <Card className="p-6">
        <h2 className="font-semibold">
          Company Information
        </h2>

        <p className="mt-3 text-muted-foreground">
          Sector, industry, market cap and other information will be displayed here.
        </p>
      </Card>

      <Card className="p-6">
        <h2 className="font-semibold">
          Price Chart
        </h2>

        <div className="mt-4 h-72 rounded-lg border border-dashed border-border grid place-items-center text-muted-foreground">
          Chart Coming Soon
        </div>
      </Card>
    </div>
  );
}