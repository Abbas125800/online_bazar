const orders = [
  { id: 1, customer: "Ali", price: 200, status: "Pending" },
  { id: 2, customer: "Ahmad", price: 500, status: "Delivered" },
];

export default function OrdersTable() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-bold mb-4">Recent Orders</h2>

      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th>ID</th>
            <th>Customer</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(o => (
            <tr key={o.id} className="border-b">
              <td>{o.id}</td>
              <td>{o.customer}</td>
              <td>${o.price}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}