import React from "react";
import { connect, useDispatch } from "react-redux";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import MainButton from "../MainButton/MainButton";
import { Checkbox } from "semantic-ui-react";
import { proceedToCheckout } from "../../redux/checkout/checkout.actions";

import "./order-summary.scss";
const OrderSummaryPlaceOrder = ({ total, proceedNext }) => {
  const handleCheckout = useDispatch();
  return (
    <div className="order-summary-component">
      <span className="items-count">Order Summary</span>
      <div className="order-summary">
        <div className="to-sup-summary">
          <div className="sup-sum">
            <span>subtotal: </span>
            <span>${total}</span>
          </div>
          <div className="total-sum">
            <span>Shipping Fee:</span>
            <span>$50.55</span>
          </div>
          <div className="total-sum shipping-fee">
            <span>TOTAl: </span>
            <span>${total}</span>
          </div>
        </div>
        <MainButton
          style={{
            marginLeft: "5%",
            marginTop: "7%",
            height: "15%",
            fontSize: "1.2rem",
            width: "90%",
            background: " rgb(218, 9, 79)",
          }}
          onClick={() => handleCheckout(proceedToCheckout())}
        >
          Checkout
        </MainButton>
        <Checkbox
          style={{
            width: "90%",
            left: "8%",
            marginTop: "3%",
          }}
          label="I accept the Terms and Conditions and privacy policy"
        />
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
});

export default connect(mapStateToProps)(OrderSummaryPlaceOrder);
