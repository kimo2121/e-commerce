import React, { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripe-button.css";
import axios from "axios";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { connect, useSelector } from "react-redux";
import { completeOrder } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  CREATE_ORDER,
  GET_USER_QUERY,
  CREATE_PAYMENT,
} from "../../util/graphql";

const StripeCheckoutButton = ({ total }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.user.user);

  const [tokenId, setTokenId] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const Complete = useDispatch();
  const priceForStripe = total * 100;
  console.log({ total });
  const publishableKey =
    "pk_test_51H3FxnEh4aoUgsppLO0qDT435pCRv7e28ex5Ur3RiiqhjgRu92TscA8qVl2MbMrh0pp2yBcuTKkKP0rUaZhA3ZGL00yebtgJL9";

  // const onToken = (token) => {
  //   axios({
  //     url: "payment",
  //     method: "post",
  //     data: {
  //       amount: priceForStripe,
  //       token: token,
  //     },
  //   })
  //     .then((response) => {
  //       // alert("succesful payment");
  //       if (!userLoading) {
  //         createOrder();
  //         Complete(completeOrder());
  //         console.log("succesful payment");
  //         console.log({ response });
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Payment Error: ", error);
  //       alert(
  //         "There was an issue with your payment! Please make sure you use the provided credit card."
  //       );
  //     });
  // };

  const [
    createPayment,
    //  { loading }
  ] = useMutation(CREATE_PAYMENT);

  const onToken = (token) => {
    createPayment({
      variables: {
        tokenId: token.id,
        amount: priceForStripe,
      },
    });
    createOrder();
    Complete(completeOrder());
    console.log("succesful payment");
  };

  const {
    userLoading,
    data: { getUser: userData },
  } = useQuery(GET_USER_QUERY, {
    variables: { userId: user?.id },
  });

  let address = userData.address.find((i) => i.defaultAddrses === false);
  console.log({ address });
  console.log({ userData });
  const newAddress = {
    FirstName: address.FirstName,
    LastName: address.LastName,
    Country: address.Country,
    State: address.State,
    City: address.City,
    Address: address.Address,
    Address_2: address.Address_2,
    postal_code: address.postal_code,
    Phone: address.Phone,
    defaultAddrses: address.defaultAddrses,
  };

  const [createOrder, { loading }] = useMutation(CREATE_ORDER, {
    update(_, { data: { createOrder: order } }) {
      // props.history.push("/");
      console.log({ order });
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
      console.log({ err });
    },
    variables: {
      items: cartItems,
      address: newAddress,
      total: parseInt(total),
    },
  });

  console.log(cartItems);
  console.log(total);
  console.log(userData.address[0]);
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
