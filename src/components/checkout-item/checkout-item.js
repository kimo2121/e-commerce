import React from "react";
import SimpleModal from "../Modal/Modal";
import SingleProductComponent from "../SingleProductComponent/SingleProductComponent";
import "./checkout-item.css";
import {
  clearItemFromCart,
  removeItem,
  addItem,
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";

const CheckoutItem = ({ item, removeItem, addItem, clearItemFromCart }) => {
  const subTotal =
    Math.round((item.current_price * item.quantity + Number.EPSILON) * 100) /
    100;

  return (
    <div className="checkout-item-layout">
      <img src={item.image_url} alt="" />
      <div className="checkout-item-details">
        <div style={{ width: "35%", textAlign: "left", marginLeft: "2%" }}>
          <SimpleModal>
            <SingleProductComponent />
          </SimpleModal>
          {item.name}
          <Dropdown
            fluid
            style={{ marginTop: "10%", width: "60%", height: "2%" }}
            placeholder=""
            search
            selection
          />

          <div className="del-add-btns">
            <span
              className="remove-from-checkout"
              onClick={() => clearItemFromCart(item)}
            >
              Delete
            </span>
            <span className="add-to-wishlist">Save in wishlist</span>
          </div>
        </div>
        <span style={{ marginRight: "8%" }}>${item.current_price}</span>
        <span className="item-quantity">
          <button
            className="quantity-arrow"
            disabled={item.quantity <= 1}
            onClick={() => removeItem(item)}
          >
            &#10094;
          </button>
          <span className="quantity-value">{item.quantity}</span>
          <button className="quantity-arrow" onClick={() => addItem(item)}>
            &#10095;
          </button>
        </span>
        <span style={{ fontWeight: "bold", textAlign: "right" }}>
          ${subTotal}
        </span>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
