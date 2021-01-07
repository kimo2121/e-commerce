import React from "react";
import { Link } from "react-router-dom";
import "./megamenu.css";
const NewInMenu = () => {
  return (
    <div className="navbar" style={{ marginLeft: "-37%" }}>
      <div className="dropdown0">
        <button className="dropbtn">New In</button>
        <div className="dropdown-content">
          <div className="row-1">
            <div className="row">
              <div className="column" style={{ paddingLeft: "13%" }}>
                <span>Women New</span>
                <Link to="/product/men/Tops">Tops</Link>
                <Link to="/">Sweaters</Link>
                <Link to="/">Coats</Link>
                <Link to="/">Hoodies</Link>
                <Link to="/">Dresses</Link>
                <Link to="/">Pajamas & Robes</Link>
                <Link to="/">Lingerie</Link>
                <Link to="/">Women Boots</Link>
                <Link to="/">Crossbody Bags</Link>
              </div>
              <div className="column" style={{ paddingLeft: "6%" }}>
                <span>Men New</span>
                <Link to="/">Shirts</Link>
                <Link to="/">Bottoms</Link>
                <Link to="/">Hoodies & Sweatshirts</Link>
                <Link to="/">Sweaters & Cardigans</Link>
                <Link to="/">Coats & Jackets</Link>
                <Link to="/">Men Flats</Link>
                <Link to="/">Men Boots</Link>

                <Link to="/" className="major">
                  Accessories New
                </Link>
                <Link to="/">Jewelry & Watch New</Link>
              </div>
              <div className="column">
                <span>Christmas Hot List</span>
                <Link to="/">Women Dress</Link>
                <Link to="/">Men Clothing</Link>
                <Link to="/">Home Decor</Link>
                <Link to="/">ACC & Makeup</Link>
                <span>Christmas Gift</span>
                <Link to="/">For Her</Link>
                <Link to="/">For Him</Link>
                <Link to="/">For Kids</Link>
                <Link to="/">For Pets</Link>
              </div>
            </div>
            <div className="headerDivider1"></div>
            <div className="header">
              <div style={{ display: "flex" }}>
                <Link to="/">Link 1</Link>
                <Link to="/">Link 2</Link>
              </div>
              <div style={{ display: "flex" }}>
                <Link to="/">Link 3</Link>
                <Link to="/">Link 4</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInMenu;
