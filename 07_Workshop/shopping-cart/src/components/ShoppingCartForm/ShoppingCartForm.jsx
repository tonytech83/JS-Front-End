import { useState } from "react";
import { ReactComponent as AddIcon } from "../../assets/add-icon.svg";
import { addProductToCart } from "../../services/product-service";
import { toast } from "react-toastify";

function ShoppingCartForm({ setRefreshProducts }) {
  let [itemName, setItemName] = useState("");
  let [itemCost, setItemCost] = useState("");
  let [itemImgUrl, setItemImgUrl] = useState("");

  const addButtonHandler = (event) => {
    event.preventDefault();
    addProductToCart(itemName, itemCost, itemImgUrl)
      .then(() => {
        setItemName("");
        setItemCost("");
        setItemImgUrl("");
        setRefreshProducts({});
        toast("Product Added!", { type: "success", autoClose: 1000 });
      })
      .catch(() => {
        toast("Something went wrong!", { type: "error", autoClose: 1000 });
      });
  };

  return (
    <form>
      <div className="shopping-cart__form-control">
        <input
          value={itemName}
          type="text"
          name="item-name"
          placeholder="Name"
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>
      <div className="shopping-cart__form-control">
        <input
          value={itemCost}
          type="number"
          name="item-cost"
          placeholder="Cost"
          onChange={(e) => setItemCost(e.target.value)}
        />
      </div>
      <div className="shopping-cart__form-control">
        <input
          value={itemImgUrl}
          type="text"
          name="item-image"
          placeholder="Place image url here"
          onChange={(e) => setItemImgUrl(e.target.value)}
        />
      </div>
      <div className="shopping-cart__form-control">
        <button
          disabled={!itemName || !itemCost || itemImgUrl}
          type="submit"
          onClick={addButtonHandler}
        >
          <span>Add</span>
          <AddIcon />
        </button>
      </div>
    </form>
  );
}

export default ShoppingCartForm;
