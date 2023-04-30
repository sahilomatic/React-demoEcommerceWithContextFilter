import { useContext } from "react";
import { CartContext } from "../cartProvider";
export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((obj) => {
        return (
          <div className="product-item">
            <h6>{obj.title}</h6>
            <img alt="obj.title" src={obj.thumbnail} />
            <p>{obj.price}</p>
          </div>
        );
      })}
    </div>
  );
}
