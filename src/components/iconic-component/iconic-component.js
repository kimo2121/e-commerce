import React from "react";
import "./iconic-component.css";
import * as HiIcons from "react-icons/hi";
import * as RiIcons from "react-icons/ri";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import { Link } from "react-router-dom";

const IconicComponent = ({ name, icon, isMyAssets,value,title,link }) => {
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
