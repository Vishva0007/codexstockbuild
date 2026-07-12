interface Props {
  open: boolean;
}

export function MarketStatusBadge({ open }: Props) {
  return (
    <div
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
        open
          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
          : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
      }`}
    >
      {open ? "Market Open" : "Market Closed"}
    </div>
  );
}