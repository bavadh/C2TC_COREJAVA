import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function DeleteOrderItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/api/orders/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch order");
        }
        return response.json();
      })
      .then((data) => setOrder(data))
      .catch((err) => setError(err.message));
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/orders/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setMessage("Order deleted successfully!");
        setTimeout(() => navigate("/orders"), 2000);
      } else {
        setMessage("Failed to delete order");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Delete Order</h2>
      {error && <p className="text-red-600">{error}</p>}
      {message && <p className="text-green-600">{message}</p>}
      {order && (
        <div className="p-4 border rounded-md shadow-sm">
          <p className="font-semibold">Customer: {order.customerName}</p>
          <p>Product: {order.product}</p>
          <p>Quantity: {order.quantity}</p>
          <p>Price: ${order.price.toFixed(2)}</p>
        </div>
      )}
      <button
        onClick={handleDelete}
        className="w-full bg-red-500 text-white p-2 rounded mt-4 hover:bg-red-600"
      >
        Delete Order
      </button>
    </div>
  );
}