import { Construction } from "lucide-react";

import { Card } from "@/components/ui/card";

export function DashboardPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm font-medium text-primary">Workspace</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Your research dashboard</h1>
      <p className="mt-3 text-muted-foreground">
        The platform foundation is ready. Research tools will be introduced through independently
        deployable domain modules.
      </p>
      <Card className="mt-8 flex gap-4 p-6">
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-muted">
          <Construction className="size-5" />
        </span>
        <div>
          <h2 className="font-semibold">No market features yet</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            This intentionally contains no market data, portfolio records, or AI-generated content.
          </p>
        </div>
      </Card>
    </div>
  );
}
