import { Construction } from "lucide-react";

import { StockSearch } from "@/features/market/components/StockSearch";
import { Card } from "@/components/ui/card";

export function DashboardPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm font-medium text-primary">
        Workspace
      </p>

      <h1 className="mt-2 text-3xl font-bold tracking-tight">
        Your research dashboard
      </h1>

      <p className="mt-3 text-muted-foreground">
        The platform foundation is ready. Research tools will be introduced
        through independently deployable domain modules.
      </p>

      <div className="mt-8 space-y-6">
        {/* Stock Search */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold">
            Search Stocks
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Search companies listed on supported exchanges.
          </p>

          <div className="mt-4">
            <StockSearch />
          </div>
        </Card>

        {/* Coming Soon */}
        <Card className="flex gap-4 p-6">
          <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-muted">
            <Construction className="size-5" />
          </span>

          <div>
            <h2 className="font-semibold">
              More market tools are coming
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Portfolio management, AI analysis, watchlists, live charts,
              technical indicators, and AI-powered insights will be added
              incrementally.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}