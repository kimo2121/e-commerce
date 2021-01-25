import React from "react";
import "./megamenu.css";
import NavLink from "../NavLink";

const NewInMenu = ({ all_products, getSubcategories }) => {
  const subcategories = getSubcategories(all_products, "accessories");
  return (
    <div className="navbar" style={{ marginLeft: "-37%" }}>
      <div className="dropdown0">
        <button className="dropbtn">Accessories & Beauty</button>
        <div className="dropdown-content">
          <div className="row-1">
            <NavLink subcategories={subcategories} category="accessories" />;
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

export default NewInMenu;
