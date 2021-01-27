import React from "react";
import { Link } from "react-router-dom";
import "./megamenu.css";
import { Grid } from "@material-ui/core";
import NavLink from "../../components/NavLink";

const MenMenu = ({ all_products, getSubcategories }) => {
  const subcategories = getSubcategories(all_products, "men");
  <NavLink subcategories={subcategories} />;
  // console.log({ subcategories });
  return (
    <div className="navbar">
      <div className="dropdown0">
        <button className="dropbtn">Men</button>
        <div className="dropdown-content">
          <div className="row-1">
            <div className="row">
              <NavLink subcategories={subcategories} category="men" />
            </div>
            <div className="headerDivider1"></div>
            <div className="header">
              {/* <div style={{ display: "flex" }}>
                <Link to="">Link 1</Link>
                <Link to="">Link 2</Link>
              </div>
              <div style={{ display: "flex" }}>
                <Link to="">Link 3</Link>
                <Link to="">Link 4</Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenMenu;
