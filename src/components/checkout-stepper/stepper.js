import React from "react";
import { Icon, Step } from "semantic-ui-react";

const Stepper = () => (
  <Step.Group style={{ width: "60%" }} size="mini">
    <Step>
      <Icon name="shopping bag" />
      <Step.Content>
        <Step.Title>Shipping Bag</Step.Title>
      </Step.Content>
    </Step>

    <Step style={{ width: "20%" }}>
      <Icon name="clipboard list" />
      <Step.Content>
        <Step.Title>Place Order</Step.Title>
      </Step.Content>
    </Step>

    <Step active style={{ width: "20%" }}>
      <Icon name="payment" />
      <Step.Content>
        <Step.Title>Pay</Step.Title>
      </Step.Content>
    </Step>

    <Step disabled>
      <Icon name="check square" />
      <Step.Content>
        <Step.Title>Order Complete</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
);

export default Stepper;
