import { useState } from "react";

export default function CreateOrderItem() {
  const [order, setOrder] = useState({
    customerName: "",
    product: "",
    quantity: 1,
    price: 0.0,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        setMessage("Order created successfully!");
        setOrder({ customerName: "", product: "", quantity: 1, price: 0.0 });
      } else {
        setMessage("Failed to create order");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Create Order</h2>
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
          Submit Order
        </button>
      </form>
    </div>
  );
}
