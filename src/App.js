import NavigationBar from "./Components/NavigationBar/navigationbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Cart from "./Components/Cart/cart";
import CartProvider from "./Components/cartProvider";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="account" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
