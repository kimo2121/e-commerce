import React from "react";
import "./checkout-component.css";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import Stepper from "../checkout-stepper/stepper";
import CheckoutItem from "../checkout-item/checkout-item";
import OrderSummaryShoppingBag from "../order-summary/order-summary-shopping-bag";

const CheckoutComponent = ({ cartItems }) => {
  return (
    <div className="checkout-component">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Stepper />
      </div>
      <div style={{ marginLeft: "6%", display: "flex", marginTop: "1.5%" }}>
        <div style={{ width: "65%" }}>
          <span className="items-count">Shopping Bag({cartItems.length})</span>
          <div className="titles-header">
            <span style={{ marginLeft: "5%" }}>item</span>
            <span>Unit Price</span>
            <span>Qty</span>
            <span>Subtotal</span>
          </div>
          <div>
            {cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} item={cartItem} />
            ))}
          </div>
        </div>
        <OrderSummaryShoppingBag />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  // total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutComponent);
