import React from "react";
import { connect, useDispatch } from "react-redux";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import MainButton from "../MainButton/MainButton";
import { Dropdown, Radio } from "semantic-ui-react";
import { proceedToCheckout } from "../../redux/checkout/checkout.actions";

import "./order-summary.css";
const OrderSummaryShoppingBag = ({ total }) => {
  const handleCheckout = useDispatch();

  return (
    <div className="order-summary-component">
      <span className="items-count">Order Summary</span>
      <div className="order-summary sho-bag-summary">
        <div style={{ marginLeft: "7%" }}>
          <Radio label="Checkout Discount" />
          <br />
          <Radio label="Coupon discount" />
          <br />
          <Dropdown
            style={{ width: "70%" }}
            fluid
            placeholder=""
            search
            selection
          />
          <Radio label="Do not use any discount" />
        </div>
        <div className="to-sup-summary sho-ba">
          <div className="sup-sum">
            <span>subtotal: </span>
            <span>${total}</span>
          </div>
          <div className="total-sum">
            <span>TOTAl: </span>
            <span>${total}</span>
          </div>
        </div>
      </div>
      <MainButton
        style={{
          marginTop: "5%",
          height: "10%",
          fontSize: "1.2rem",
          width: "100%",
          background: " rgb(218, 9, 79)",
        }}
        onClick={() => handleCheckout(proceedToCheckout())}
      >
        Proceed to checkout
      </MainButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
});

export default connect(mapStateToProps)(OrderSummaryShoppingBag);
