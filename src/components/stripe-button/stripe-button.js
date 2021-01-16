import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripe-button.css";
import axios from "axios";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { completeOrder } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";
const StripeCheckoutButton = ({ total }) => {
  const Complete = useDispatch();
  const priceForStripe = total * 100;
  const publishableKey =
    "pk_test_51H3FxnEh4aoUgsppLO0qDT435pCRv7e28ex5Ur3RiiqhjgRu92TscA8qVl2MbMrh0pp2yBcuTKkKP0rUaZhA3ZGL00yebtgJL9";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        // alert("succesful payment");
        Complete(completeOrder());
        
        console.log("succesful payment");
        console.log({ response });
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <div className="stripe-component">
      <StripeCheckout
        className="stripe-stripe-button"
        label="Pay Now"
        name="shop-app Ltd."
        // billingAddress
        // shippingAddress
        discription={`Your total is  $${total}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
});
export default connect(mapStateToProps)(StripeCheckoutButton);
