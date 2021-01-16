import React from "react";
import { Icon, Segment } from "semantic-ui-react";

const FillShipAdddress = () => {
  return (
    <div >
      <Segment className="fill-ship-addd-seg" padded>
        <Icon size="large" name="map marker alternate"></Icon>
        <br />
        <span>Add New Address</span>
      </Segment>
    </div>
  );
};
export default FillShipAdddress;
