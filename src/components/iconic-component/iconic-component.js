import React from "react";
import "./iconic-component.scss";
import { Link } from "react-router-dom";

const IconicComponent = ({
  name,
  icon,
  isMyAssets,
  value,
  title,
  link,
  InteractiveCenter,
}) => {
  return (
    <div>
      {isMyAssets ? (
        <div className="profile-tags">
          <span>{value}</span>
          <p>{title}</p>
          <Link to="/account">{link}</Link>
        </div>
      ) : (
        <div>
          <div className="my-orders-tags">
            {icon}
            <br />
            <span>{name}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default IconicComponent;
