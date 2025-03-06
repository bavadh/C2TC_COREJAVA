import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateOrderItem() {
  const { id } = useParams();
  const [order, setOrder] = useState({
    customerName: "",
    product: "",
    quantity: 1,
    price: 0.0,
  });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/orders/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        setMessage("Order updated successfully!");
      } else {
        setMessage("Failed to update order");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Update Order</h2>
      {error && <p className="text-red-600">{error}</p>}
      {message && <p className="text-green-600">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Customer Name:
          <input
            type="text"
            name="customerName"
            value={order.customerName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block mb-2">
          Product:
          <input
            type="text"
            name="product"
            value={order.product}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block mb-2">
          Quantity:
          <input
            type="number"
            name="quantity"
            value={order.quantity}
            onChange={handleChange}
            min="1"
            required
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block mb-2">
          Price:
          <input
            type="number"
            name="price"
            value={order.price}
            onChange={handleChange}
            step="0.01"
            required
            className="w-full p-2 border rounded"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
        >
          Update Order
        </button>
      </form>
    </div>
  );
}
