import { ArrowDown, ArrowUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface DashboardStatCardProps {
  title: string;
  value: string;
  change?: number;
  icon: React.ReactNode;
}

export function DashboardStatCard({
  title,
  value,
  change,
  icon,
}: DashboardStatCardProps) {
  const positive = (change ?? 0) >= 0;

  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-muted-foreground">
              {title}
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {value}
            </h2>

            {change !== undefined && (
              <div
                className={`mt-3 flex items-center gap-1 text-sm ${
                  positive
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {positive ? (
                  <ArrowUp size={16} />
                ) : (
                  <ArrowDown size={16} />
                )}

                {Math.abs(change)}%
              </div>
            )}
          </div>

          <div className="rounded-xl bg-primary/10 p-3">
            {icon}
          </div>

        </div>
      </CardContent>
    </Card>
  );
}