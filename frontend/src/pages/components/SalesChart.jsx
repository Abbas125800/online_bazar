import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", sales: 400 },
  { name: "Tue", sales: 800 },
  { name: "Wed", sales: 500 },
  { name: "Thu", sales: 900 },
  { name: "Fri", sales: 700 },
];

export default function SalesChart() {
  return (
    <div className="bg-white p-5 rounded-xl shadow h-80">
      <h2 className="font-bold mb-4">Sales</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="sales" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}