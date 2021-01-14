import React from "react";
import { Checkbox, Radio } from "semantic-ui-react";
import "./shipping-method.css";
const ShippingMethod = () => {
  return (
    <div className="shipping-method">
      <div className="shipping-method-title">Shipping Methods</div>
      <div className='ship-meth-choices'>
        <Radio label="Expedited Shipping Service" />
        <span>Shipping Time: 10-20 business days</span>
        <span>$43.14</span>
      </div>
      <div className='ship-meth-insurance'>
        <Checkbox label="Add Shipping Insurance to your order" />
        <span>
          Notice: Our processing time is not included in the shipping time. Once
          your order is placed, we gather the products and package them. The
          average processing time is 3 days, but it varies by product and the
          stock status. Once processed, the order is handed over to our partners
          for delivery.
        </span>
        <span>$3.08</span>
      </div>
    </div>
  );
};

export default ShippingMethod;
