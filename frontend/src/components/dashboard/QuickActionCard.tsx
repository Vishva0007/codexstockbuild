import { Card, CardContent } from "@/components/ui/card";

interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function QuickActionCard({
  title,
  description,
  icon,
}: Props) {
  return (
    <Card className="cursor-pointer transition hover:shadow-lg hover:-translate-y-1">

      <CardContent className="space-y-3 p-6">

        <div className="text-primary">
          {icon}
        </div>

        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground">
          {description}
        </p>

      </CardContent>

    </Card>
  );
}