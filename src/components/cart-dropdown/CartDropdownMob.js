import React from "react";
import "./cart-dropdown.css";
import * as HiIcons from "react-icons/hi";
import CartItem from "../cart-item/cart-item";

import {
  selectCartItems,
  selectCartTotal,
  selectCartItemsCount,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import CartDropdownCheckout from "./cart-dropdown-checkout";
const CartDropdownMob = ({ cartItems, total, itemCount }) => {
  console.log({ cartItems });
  console.log({ total });
  console.log({ itemCount });
  return (
    <div
      style={{
        padding: "0",
        width: cartItems.length ? "35vw" : "20vw",
        height: !cartItems.length && "15vh",
      }}
      trigger={
        <div className="cart-icon">
          <HiIcons.HiOutlineShoppingBag size={28} />
          <span className="item-conut">{itemCount}</span>
        </div>
      }
      flowing
      hoverable
    >
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">YOUR CART IS EMPTY</span>
      )}
      <CartDropdownCheckout total={total} cartItems={cartItems} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
});

export default withRouter(connect(mapStateToProps)(CartDropdownMob));
