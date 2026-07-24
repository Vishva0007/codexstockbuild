import type { Company } from "../types/stock";

interface Props {
  company: Company;
}

export function CompanyCard({ company }: Props) {
  return (
    <div className="rounded-lg border bg-card p-5">
      <h2 className="text-xl font-bold mb-4">
        {company.name}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Symbol</p>
          <p>{company.symbol}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Sector</p>
          <p>{company.sector ?? "N/A"}</p>
        </div>
      </div>
    </div>
  );
}