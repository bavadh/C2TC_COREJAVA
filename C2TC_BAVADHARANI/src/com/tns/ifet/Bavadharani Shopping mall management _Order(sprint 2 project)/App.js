import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateOrderItem from "./CreateOrderItem";
import OrderItemList from "./OrderItemList";
import UpdateOrderItem from "./UpdateOrderItem";
import DeleteOrderItem from "./DeleteOrderItem";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Order Management System</h1>
        <Routes>
          <Route path="/" element={<OrderItemList />} />
          <Route path="/create" element={<CreateOrderItem />} />
          <Route path="/update/:id" element={<UpdateOrderItem />} />
          <Route path="/delete/:id" element={<DeleteOrderItem />} />
        </Routes>
      </div>
    </Router>
  );
}
