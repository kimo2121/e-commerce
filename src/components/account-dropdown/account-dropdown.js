import React from "react";
import "./account-dropdown.css";
import { Popup } from "semantic-ui-react";
import * as HiIcons from "react-icons/hi";
import { Link } from "react-router-dom";

const AccountDropdown = () => {
  const logout = () => {
    localStorage.removeItem("jwtToken");
    window.location.replace("https://ecommerce-merng.netlify.app/");
  };
  return (
    <Popup
      style={{
        padding: "0",
        width: "23vw",
        height: "29vh",
      }}
      position="bottom center"
      trigger={
        <HiIcons.HiOutlineUser
          style={{ position: "absolute", marginLeft: "72%", marginTop: "2%" }}
          color={"black"}
          size={28}
        />
      }
      flowing
      hoverable
    >
      <div className="account-dropdown">
        <div>
          <HiIcons.HiOutlineUser size={20} className="icons" />
          <Link to="/account">My Account</Link>
        </div>
        <div>
          <HiIcons.HiOutlineCash size={20} className="icons" />
          <Link to="/">My Wallet</Link>
        </div>
        <div>
          <HiIcons.HiOutlineClipboardList size={20} className="icons" />
          <Link to="/account/orders">Orders</Link>
        </div>
      </div>
      <div className="account-dropdown" style={{ marginLeft: "1.2rem" }}>
        <HiIcons.HiOutlineLogout size={20} className="icons" />
        <Link onClick={() => logout()}>Sign Out</Link>
      </div>
    </Popup>
  );
};

export default AccountDropdown;
