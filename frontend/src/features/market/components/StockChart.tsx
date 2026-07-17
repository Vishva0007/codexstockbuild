import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import type { HistoricalPrice } from "../types/stock";

interface Props {
  data: HistoricalPrice[];
}

export function StockChart({ data }: Props) {
  const chartData = data.map((item) => ({
    date: new Date(item.date).toLocaleDateString(),
    price: item.close,
  }));

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis domain={["auto", "auto"]} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="price"
            stroke="#2563eb"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}