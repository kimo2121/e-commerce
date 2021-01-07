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
                <Link to="/newIn/Tops</">Tops</Link>
                <Link to="/newIn/Sweaters</">Sweaters</Link>
                <Link to="/newIn/Coats</">Coats</Link>
                <Link to="/newIn/Hoodies</">Hoodies</Link>
                <Link to="/newIn/Dresses</">Dresses</Link>
                <Link to="/newIn/Pajamas & Robes">Pajamas & Robes</Link>
                <Link to="/newIn/Lingerie</">Lingerie</Link>
                <Link to="/newIn/Women Boots">Women Boots</Link>
                <Link to="/newIn/Crossbody Bags">Crossbody Bags</Link>
              </div>
              <div className="column" style={{ paddingLeft: "6%" }}>
                <span>Men NnewIn/ew</span>
                <Link to="/newIn/Shirts</">Shirts</Link>
                <Link to="/newIn/Bottoms</">Bottoms</Link>
                <Link to="/newIn/Hoodies & Sweatshirts">
                  Hoodies & Sweatshirts
                </Link>
                <Link to="/newIn/Sweaters & Cardigans">
                  Sweaters & Cardigans
                </Link>
                <Link to="/newIn/Coats & Jackets">Coats & Jackets</Link>
                <Link to="/newIn/Men Flats">Men Flats</Link>
                <Link to="/newIn/Men Boots">Men Boots</Link>
                <Link to="/newIn/Accessories New" className="major">
                  Accessories New
                </Link>
                <Link to="/Jewelry & Watch New">Jewelry & Watch New</Link>
              </div>
              <div className="column">
                <span>Christmas Hot List</span>
                <Link to="/newIn/Women Dress">Women Dress</Link>
                <Link to="/newIn/Men Clothing">Men Clothing</Link>
                <Link to="/newIn/Home Decor">Home Decor</Link>
                <Link to="/newIn/ACC & Makeup">ACC & Makeup</Link>
                <span>Christmas Gift</span>
                <Link to="/newIn/For Her">For Her</Link>
                <Link to="/newIn/For Him">For Him</Link>
                <Link to="/newIn/For Kids">For Kids</Link>
                <Link to="/newIn/For Pets">For Pets</Link>
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
