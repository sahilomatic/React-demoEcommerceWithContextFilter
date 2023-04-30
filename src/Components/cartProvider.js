import { useState, createContext } from "react";
export const CartContext = createContext();
export default function CartProvider(props) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
