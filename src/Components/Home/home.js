import { useEffect, useReducer, useContext } from "react";
import "./home.css";
import { CartContext } from "../cartProvider";

export default function Home() {
  const { cart, setCart } = useContext(CartContext);
  function productReducer(state, action) {
    switch (action.type) {
      case "append":
        return [...state, ...action.payLoad];

      case "filter":
        return state.filter((obj) => {
          return obj.category == "smartphones" ? true : false;
        });

      default:
        return state;
    }
  }

  const [products, productDispatch] = useReducer(productReducer, []);

  async function getData() {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();

    await productDispatch({
      type: "append",
      payLoad: data.products
    });
  }
  useEffect(() => {
    getData();
  }, []);

  function filterProduct() {
    productDispatch({ type: "filter" });
  }

  function addToCart(obj) {
    setCart((prev) => {
      return [...prev, obj];
    });
  }

  return (
    <div>
      <h1>Home</h1>
      <div className="body">
        <div className="body-filter">
          <h4>Filters</h4>
          <div>
            <input
              type="checkbox"
              onClick={() => {
                filterProduct();
              }}
            />{" "}
            <label>smartphones</label>
          </div>
        </div>
        <div className="body-product">
          <h4>Items</h4>

          <div className="product-list">
            {products.map((obj) => {
              return (
                <div className="product-item">
                  <h6>{obj.title}</h6>
                  <img alt="obj.title" src={obj.thumbnail} />
                  <p>{obj.price}</p>
                  <button
                    onClick={() => {
                      addToCart(obj);
                    }}
                  >
                    Add
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
