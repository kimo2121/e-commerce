import React from "react";
import { Link } from "react-router-dom";
import "./my-account-panel.css";
const MyAccountPanel = ({ icon, name }) => {
  return (
      <div className="my-orders">
        <Link to="/account">
          {icon} {name}
        </Link>
      </div>
  );
};

export default MyAccountPanel;
