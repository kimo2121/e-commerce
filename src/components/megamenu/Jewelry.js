import React from "react";
import NavLink from "../NavLink";
import "./megamenu.css";
const SaleMenu = ({ all_products, getSubcategories }) => {
  const subcategories = getSubcategories(all_products, "jewelry");
  return (
    <div className="navbar">
      <div className="dropdown0">
        <button className="dropbtn">jewelry</button>
        <div className="dropdown-content">
          <div className="row-1">
            <NavLink subcategories={subcategories} category="jewelry" />;
            <div className="headerDivider1"></div>
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

export default SaleMenu;
