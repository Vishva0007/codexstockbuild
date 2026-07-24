import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

import type { HistoricalPrice } from "../types/stock";

interface Props {
  data: HistoricalPrice[];
}

export function VolumeChart({ data }: Props) {
  const chartData = data.map((item) => ({
    date: new Date(item.date).toLocaleDateString(),
    volume: item.volume,
  }));

  return (
    <div style={{ width: "100%", height: 200 }}>
      <ResponsiveContainer>
        <BarChart data={chartData}>
  <XAxis
    dataKey="date"
    tick={{ fill: "#9ca3af", fontSize: 11 }}
    hide
  />

  <Tooltip
    contentStyle={{
      background: "#111827",
      border: "1px solid #374151",
      color: "white",
    }}
  />

  <Bar
    dataKey="volume"
    fill="#3b82f6"
    radius={[3, 3, 0, 0]}
  />
</BarChart>
      </ResponsiveContainer>
    </div>
  );
}