import { useEffect, useState } from "react";
import ShoppingCartForm from "../ShoppingCartForm/ShoppingCartForm";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import { getAllProducts } from "../../services/product-service";
import { toast } from "react-toastify";

function ShoppingCart() {
  let [products, setProducts] = useState([]);
  let [refreshProducts, setRefreshProducts] = useState({});

  const totalPrice = products
    .filter((p) => p.isBought)
    .reduce((sum, product) => sum + product.cost, 0);

  useEffect(() => {
    getAllProducts()
      .then((AllProducts) => {
        setProducts(Object.values(AllProducts));
      })
      .catch(() => {
        toast("Something went wrong!", { type: "error", autoClose: 1000 });
      });
  }, [refreshProducts]);

  return (
    <section className="shopping-cart__container">
      <ShoppingCartForm setRefreshProducts={setRefreshProducts} />
      <section className="shopping-cart__items-list">
        {products.map((p) => (
          <ShoppingCartItem
            key={p._id}
            {...p}
            setRefreshProducts={setRefreshProducts}
          />
        ))}
      </section>
      <div className="shopping-cart__total-price">
        <h1>Total Price: {totalPrice}$</h1>
      </div>
    </section>
  );
}

export default ShoppingCart;
