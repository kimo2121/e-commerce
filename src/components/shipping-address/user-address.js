import React from "react";
import { Link } from "react-router-dom";
import { Icon, Label, Segment } from "semantic-ui-react";
import "./shipping-address-container.css";
const UserAddress = ({ user, address }) => {
  const { Country, City } = address;
  return (
    <div style={{ marginBottom: "3%" }}>
      <Segment className="main-user-ship-seg" padded>
        <div className="user-ship-info">{user.username} </div>
        <div className="user-ship-addd"> {` ${Country} ${City}  `} </div>
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
          <Link to="/account/addressbook" >
          <span className="user-sh-det-btns">Edit</span>
          </Link>
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
