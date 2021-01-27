import React from "react";
import "./checkout-component.scss";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { connect, useSelector } from "react-redux";
import Stepper from "../checkout-stepper/stepper";
import CheckoutItem from "../checkout-item/checkout-item";
import OrderSummaryShoppingBag from "../order-summary/order-summary-shopping-bag";
import PlaceOrder from "../place-order/place-order";
import OrderSummaryPlaceOrder from "../order-summary/order-summary-place-order";
import StripeCheckoutButton from "../stripe-button/stripe-button";

const CheckoutComponent = ({ cartItems }) => {
<<<<<<< HEAD
  let [checkoutState] = useSelector((state) => state.checkout.checkout);
  console.log({ checkoutState });
=======
  const checkoutState = useSelector((state) => state.checkout.checkout);

>>>>>>> ae8fa3b05d3dfa8fc54973f9cd6bd1ccb0d6e29d
  return (
    <div className="checkout-component">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Stepper />
      </div>
      <div className="checkout-down-layout">
        <div className="checkout-inner-layout">
          {(checkoutState == "placeorder" || checkoutState == "pay") && (
            <PlaceOrder />
          )}
          <span className="items-count">
            {checkoutState == "shoppingbag"
              ? `Shopping Bag(${cartItems.length})`
              : `Order Review
              `}
          </span>
          <div className="titles-header">
            <span style={{ marginLeft: "5%" }}>item</span>
            <span>Unit Price</span>
            <span>Qty</span>
            <span>Subtotal</span>
          </div>
          <div>
            {cartItems.map((cartItem) => (
              <CheckoutItem
                key={cartItem.id}
                item={cartItem}
                checkoutState={checkoutState}
              />
            ))}
          </div>
        </div>
        {checkoutState == "shoppingbag" ? (
          <OrderSummaryShoppingBag />
        ) : (
          (checkoutState == "placeorder" || checkoutState == "pay") && (
            <OrderSummaryPlaceOrder />
          )
        )}
        {checkoutState == "ordercomplete" && <StripeCheckoutButton />}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutComponent);
