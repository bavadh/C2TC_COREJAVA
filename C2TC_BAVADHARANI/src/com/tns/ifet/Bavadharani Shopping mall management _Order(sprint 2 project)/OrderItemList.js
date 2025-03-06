import { useEffect, useState } from "react";

export default function OrderItemList() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/orders")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        return response.json();
      })
      .then((data) => setOrders(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Order List</h2>
      {error && <p className="text-red-600">{error}</p>}
      {orders.length > 0 ? (
        <ul className="space-y-2">
          {orders.map((order) => (
            <li key={order.id} className="p-4 border rounded-md shadow-sm">
              <p className="font-semibold">Customer: {order.customerName}</p>
              <p>Product: {order.product}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Price: ${order.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders available</p>
      )}
    </div>
  );
}
