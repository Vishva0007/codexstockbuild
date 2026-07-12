import { Waves } from "lucide-react";
import { Link } from "react-router-dom";

export function Brand() {
  return (
    <Link className="flex items-center gap-2 font-semibold tracking-tight" to="/">
      <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
        <Waves className="size-4" />
      </span>
      <span>SurfThroughStocks</span>
    </Link>
  );
}
