import React from "react";
import { Link } from "react-router-dom";
import "./megamenu.css";
import NavLink from "../../components/NavLink";

const KidsMenu = ({ all_products, getSubcategories }) => {

  const subcategories = getSubcategories(all_products, "kids");
  // <NavLink subcategories={subcategories} />
  return (
    <div className="navbar">
      <div className="dropdown0">
        <button className="dropbtn">Kids</button>
        <div className="dropdown-content">
          <div className="row-1">
            <div className="row">
              <NavLink subcategories={subcategories} category="kids" />;
            </div>
            <div className="header">
              {/* <div style={{ display: "flex" }}>
                <Link to="/">Link 1</Link>
                <Link to="/">Link 2</Link>
              </div>
              <div style={{ display: "flex" }}>
                <Link to="/">Link 3</Link>
                <Link to="/">Link 4</Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsMenu;
