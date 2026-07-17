import { useParams } from "react-router-dom";
import { useStock } from "@/features/market/hooks/useStock";

export function StockDetailsPage() {
  const { symbol } = useParams();

  const {
    quote,
    company,
    history,
    isLoading,
    isError,
  } = useStock(symbol ?? "");

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Failed to load stock.</div>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">
        {company?.name}
      </h1>

      <p>{company?.sector}</p>

      <div className="text-2xl font-semibold">
        ${quote?.price}
      </div>

      <pre>
        {JSON.stringify(history?.slice(0,5), null, 2)}
      </pre>
    </div>
  );
}