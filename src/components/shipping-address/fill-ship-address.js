import React from "react";
import { Link } from "react-router-dom";
import { Icon, Segment } from "semantic-ui-react";

const FillShipAdddress = () => {
  return (
    <Link to="/account/addressbook">
      <Segment className="fill-ship-addd-seg" padded>
        <Icon size="large" name="map marker alternate"></Icon>
        <br />
        <span>Add New Address</span>
      </Segment>
    </Link>
  );
};
export default FillShipAdddress;
