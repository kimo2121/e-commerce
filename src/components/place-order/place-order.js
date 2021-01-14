import React from "react";
import PaymentMethods from "../payment-methods/payment-methods";
import ShippingAddressContainer from "../shipping-address/shipping-address-container";
import ShippingMethod from "../shipping-method/shipping-method";

const PlaceOrder = () => {
  return (
    <div>
      <ShippingAddressContainer />
      <br />
      <ShippingMethod />
      <br />
      <PaymentMethods />
    </div>
  );
};

export default PlaceOrder;
