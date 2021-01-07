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
                <Link className="junior" to="/accessories/Beauty">
                  Beauty
                </Link>
                <Link to="/accessories/Personal Care">Personal Care</Link>
                <Link to="/accessories/Hair Care">Hair Care</Link>
                <Link to="/accessories/Skin Care">Skin Care</Link>
                <Link to="/accessories/Shavers & Hair Removal">
                  Shavers & Hair Removal
                </Link>
                <Link to="/accessories/Nail Art">Nail Art</Link>
                <Link to="/accessories/Makeup">Makeup</Link>
                <Link to="/accessories/Hair Wigs & Extensions">
                  Hair Wigs & Extensions
                </Link>
                <Link className="major" to="/accessories/">
                  New In Beauty
                </Link>
              </div>
              <div className="column" style={{ paddingLeft: "6%" }}>
                <Link className="junior" to="/accessories/Jewelry & Watch">
                  Jewelry & Watch
                </Link>
                <Link to="/accessories/Women's Jewelry">Women's Jewelry</Link>
                <Link to="/accessories/Men's Jewelry">Men's Jewelry</Link>
                <Link to="/accessories/Hair Accessories">Hair Accessories</Link>
                <Link to="/accessories/Men Watches">Men Watches</Link>
                <Link to="/accessories/Women Watches">Women Watches</Link>
                <Link to="/accessories/Smart Watches">Smart Watches</Link>
                <Link className="major" to="/accessories/New In Women Jewelry">
                  New In Women Jewelry
                </Link>
                <Link
                  className="major"
                  to="/accessories/New In Watches Newchic"
                >
                  New In Watches Newchic
                </Link>
              </div>
              <div className="column">
                <Link className="junior" to="/accessories/Men's Accessories">
                  Men's Accessories
                </Link>
                <Link to="/accessories/Flat Caps Newchic">
                  Flat Caps Newchic
                </Link>
                <Link to="/accessories/Skull Caps">Skull Caps</Link>
                <Link to="/accessories/Baseball Caps">Baseball Caps</Link>
                <Link to="/accessories/Belts">Belts</Link>
                <Link className="major" to="/accessories/Women Accessories">
                  Women Accessories
                </Link>
                <Link to="/accessories/Hats">Hats</Link>
                <Link to="/accessories/Scarves">Scarves</Link>
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
