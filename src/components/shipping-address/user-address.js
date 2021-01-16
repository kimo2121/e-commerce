import React from "react";
import { Icon, Label, Segment } from "semantic-ui-react";
import "./shipping-address-container.css";
const UserAddress = () => {
  return (
    <div style={{marginBottom:'3%'}} >
      <Segment className="main-user-ship-seg" padded>
        <div className="user-ship-info">Username xxx xxx xxx</div>
        <div className="user-ship-addd">Address Address Address Address</div>
        <div
          className="user-ship-detail-btns"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "45%",
          }}
        >
          <span>Default</span>
          <span className="user-sh-det-btns">Delete</span>
          <span className="user-sh-det-btns">Edit</span>
        </div>
        <Label
          style={{ backgroundColor: "rgb(255, 87, 87)" }}
          attached="bottom right"
        >
          <Icon style={{ color: "white" }} name="check" />
        </Label>
      </Segment>
    </div>
  );
};

export default UserAddress;
