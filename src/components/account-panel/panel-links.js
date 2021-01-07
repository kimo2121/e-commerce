import React from "react";
import { Link } from "react-router-dom";
import "./my-account-panel.css";
const PanelLinks = ({ icon, name, to }) => {
  return (
    <div className="my-acc sett-info prog-center">
      <Link to={to}>
        {icon} {name}
      </Link>
    </div>
  );
};

export default PanelLinks;
