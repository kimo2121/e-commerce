import React from "react";
import { Link } from "react-router-dom";
import "./megamenu.css";
const AccessoriesBeautyMenu = () => {
  return (
    <div className="navbar">
      <div className="dropdown0">
        <button className="dropbtn">Accessories & Beauty</button>
        <div className="dropdown-content">
          <div className="row-1">
            <div className="row">
              <div className="column" style={{ paddingLeft: "13%" }}>
                <Link className="junior" to="/">
                  Beauty
                </Link>
                <Link to="/">Personal Care</Link>
                <Link to="/">Hair Care</Link>
                <Link to="/">Skin Care</Link>
                <Link to="/">Shavers & Hair Removal</Link>
                <Link to="/">Nail Art</Link>
                <Link to="/">Makeup</Link>
                <Link to="/">Hair Wigs & Extensions</Link>
                <Link className="major" to="/">
                  New In Beauty
                </Link>
              </div>
              <div className="column" style={{ paddingLeft: "6%" }}>
                <Link className="junior" to="/">
                  Jewelry & Watch
                </Link>
                <Link to="/">Women's Jewelry</Link>
                <Link to="/">Men's Jewelry</Link>
                <Link to="/">Hair Accessories</Link>
                <Link to="/">Men Watches</Link>
                <Link to="/">Women Watches</Link>
                <Link to="/">Smart Watches</Link>
                <Link className="major" to="/">
                  New In Women Jewelry
                </Link>
                <Link className="major" to="/">
                  New In Watches Newchic
                </Link>
              </div>
              <div className="column">
                <Link className="junior" to="/">
                  Men's Accessories
                </Link>
                <Link to="/">Flat Caps Newchic</Link>
                <Link to="/">Skull Caps</Link>
                <Link to="/">Baseball Caps</Link>
                <Link to="/">Belts</Link>
                <Link className="major" to="/">
                  Women Accessories
                </Link>
                <Link to="/">Hats</Link>
                <Link to="/">Scarves</Link>
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

export default AccessoriesBeautyMenu;
