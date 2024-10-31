import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./comonents/Navbar";
import Footer from "./comonents/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import { useState } from "react";
import OrderCon from "./pages/OrderCon";
import FilterData from "./comonents/FilterData";

function App() {
  const [order, setOrder] = useState(null);
  const [modePay, setModePay] = useState("Cash on Delivery");
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={<CheckOut setOrder={setOrder} setModePay={setModePay} />}
        />
        <Route
          path="/order-confirmation"
          element={<OrderCon order={order} modePay={modePay} />}
        />
        <Route path="/filter-Data" element={<FilterData />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
