import logo from "./logo.svg";
import "./App.css";
import Public from "./Module/Public/Public";
import { Routes, Route } from "react-router-dom";
import Shop from "./Module/Public/Shop/Shop";
import ShopDetails from "./Module/Public/ShopDetails/ShopDetails";
import ShoppingCart from "./Module/Public/Pages/ShoppingCart/ShoppingCart";
import Checkout from "./Module/Public/Pages/Checkout/Checkout";
import Contact from "./Module/Public/Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-details" element={<ShopDetails />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
