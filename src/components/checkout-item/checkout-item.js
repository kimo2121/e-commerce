import React from "react";
import SimpleModal from "../Modal/Modal";
import SingleProductComponent from "../SingleProductComponent/SingleProductComponent";
import "./checkout-item.css";
import {
  clearItemFromCart,
  removeItem,
  addItem,
} from "../../redux/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "semantic-ui-react";

const CheckoutItem = ({ item, checkoutState }) => {
  const subTotal =
    Math.round((item.current_price * item.quantity + Number.EPSILON) * 100) /
    100;
  const orderOverview = useSelector((state) => state.checkout.checkout);
  const clearItem = useDispatch();
  const remove = useDispatch();
  const add = useDispatch();

  return (
    <div className="checkout-item-layout">
      <img src={item.image_url} alt="" />
      <div className="checkout-item-details">
        <div style={{ width: "35%", textAlign: "left", marginLeft: "2%" }}>
          {checkoutState == "shoppingbag" ? (
            <SimpleModal item={item}>
              <SingleProductComponent product={item} />
            </SimpleModal>
          ) : (
            item.name
          )}
          {orderOverview == "shoppingbag" && (
            <Dropdown
              fluid
              style={{ marginTop: "10%", width: "60%", height: "2%" }}
              placeholder=""
              search
              selection
            />
          )}
          {orderOverview == "shoppingbag" && (
            <div className="del-add-btns">
              <span
                className="remove-from-checkout"
                onClick={() => clearItem(clearItemFromCart(item))}
              >
                Delete
              </span>
              <span className="add-to-wishlist">Save in wishlist</span>
            </div>
          )}
        </div>
        <span style={{ marginRight: "8%" }}>${item.current_price}</span>
        <span className="item-quantity">
          {orderOverview == "shoppingbag" && (
            <button
              className="quantity-arrow"
              disabled={item.quantity <= 1}
              onClick={() => remove(removeItem(item))}
            >
              &#10094;
            </button>
          )}
          <span className="quantity-value">{item.quantity}</span>
          {orderOverview == "shoppingbag" && (
            <button
              className="quantity-arrow"
              onClick={() => add(addItem(item))}
            >
              &#10095;
            </button>
          )}
        </span>
        <span style={{ fontWeight: "bold", textAlign: "right" }}>
          ${subTotal}
        </span>
      </div>
    </div>
  );
};

export default CheckoutItem;
