import React from "react";
import "./payment-methods.css";
import { Radio } from "semantic-ui-react";

const PaymentMethods = () => {
  return (
    <div className="payment-method">
      <div className="payment-method-title">Payment Methods</div>
      <Radio label="PayPal" />
      <br />
      <Radio label="Credit or Debit Cards" />
    </div>
  );
};

export default PaymentMethods;
