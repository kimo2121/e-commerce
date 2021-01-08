import React from "react";
import "./cart-item.css";
import * as HiIcons from "react-icons/hi";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
const CartItem = ({ item, clearItemFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image_url} alt="" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          className="item-cart-name"
          onClick={() => {
            window.location.replace(`/product/${item.id}`);
          }}
        >
          {item.name}
        </span>
        <HiIcons.HiOutlineTrash
          onClick={() => {
            clearItemFromCart(item);
          }}
          className="remove-icon"
          size={19}
        />
        <div className="cart-item-details">
          <br />
          <p>Color / Size</p>
          <br />
          <div className="details-style">
            <h2 style={{ fontWeight: "700" }}>${item.current_price}</h2>
            <h4>X{item?.quantity}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
