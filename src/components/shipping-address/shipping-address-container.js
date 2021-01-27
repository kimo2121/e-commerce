import React from "react";
import "./shipping-address-container.css";
import { Grid } from "semantic-ui-react";
import UserAddress from "./user-address";
import AddressForm from "../address-form/address-form";
import FillShipAdddress from "./fill-ship-address";
import { useSelector } from "react-redux";

const data = [
  `Customer's name:`,
  `Delivery area:`,
  `Shipping Address:`,
  `ZIP/postal code:`,
  `Phone:`,
];
const ShippingAddressContainer = ({ user }) => {
  const checkoutState = useSelector((state) => state.checkout.checkout);

  return (
    <div className="shipping-address-container">
      <div className="confirm-ship-add">
        Please confirm your shipping address
      </div>

      {checkoutState == "pay" ? (
        <div>
          {data.map((item, index) => (
            <span key={index}>
              {item}
              <p></p>
            </span>
          ))}
        </div>
      ) : (
        <div>
          <div width={50}>
            <div width={50}>
              {user?.shippmentaddress ? (
                <div>
                  {user?.shippmentaddress?.map((address) => (
                    <div className="grid-cont-ship-info" width={50}>
                      <UserAddress />
                    </div>
                  ))}
                  <FillShipAdddress />
                </div>
              ) : (
                <AddressForm isCheckoutComponent />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShippingAddressContainer;
