import { TrendingUp } from "lucide-react";
import { BRAND } from "@/constants/branding";

export function Brand() {
  return (
    <div className="flex items-center gap-2">
      <TrendingUp className="h-6 w-6 text-primary" />
      <span className="font-bold tracking-tight">
        {BRAND.name}
      </span>
    </div>
  );
}
