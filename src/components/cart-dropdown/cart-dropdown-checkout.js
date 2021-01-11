import React from "react";
import { connect } from "react-redux";
import MainButton from "../MainButton/MainButton";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
const CartDropdownCheckout = ({ total, cartItems }) => {
  return (
    <div>
      {cartItems.length && (
        <div className="total-price">
          <div style={{ display: "flex", float: "right", marginTop: "5%" }}>
            <span style={{ fontWeight: "normal", marginTop: "10%" }}>
              TOTAL:
            </span>
            <h2
              style={{
                fontSize: "2rem",
                color: "rgb(218, 9, 79)",
                fontWeight: "700",
              }}
            >
              ${total && total}
            </h2>
          </div>
          <Link to="/checkout">
            <MainButton
              style={{
                width: "100%",
                background: "rgb(66, 66, 66)",
              }}
            >
              Go To Checkout
            </MainButton>
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CartDropdownCheckout);
