import React from "react";
import { useSelector } from "react-redux";
import { Icon, Step } from "semantic-ui-react";
import "./stepper.scss";

const Stepper = () => {
  const step = useSelector((state) => state.checkout.checkout);

  return (
    <Step.Group className="stepper-group" size="mini">
      <Step active={step === "shoppingbag"} completed={step !== "shoppingbag"}>
        <Icon name="shopping bag" />
        <Step.Content>
          <Step.Title>Shipping Bag</Step.Title>
        </Step.Content>
      </Step>

      <Step
        active={step === "placeorder"}
        completed={
          step === "pay" || step === "ordercomplete" || step === "done"
        }
        style={{ width: "23%" }}
      >
        <Icon name="clipboard list" />
        <Step.Content>
          <Step.Title>Place Order</Step.Title>
        </Step.Content>
      </Step>

      <Step
        active={step === "pay"}
        completed={step === "ordercomplete" || step === "done"}
        style={{ width: "23%" }}
      >
        <Icon name="payment" />
        <Step.Content>
          <Step.Title>Pay</Step.Title>
        </Step.Content>
      </Step>

      <Step active={step === "ordercomplete"} completed={step === "done"}>
        <Icon name="check square" />
        <Step.Content>
          <Step.Title>Order Complete</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>
  );
};
// const mapStateToProps = createStructuredSelector({
//   checkout: selectCartItems,
// });

export default Stepper;
