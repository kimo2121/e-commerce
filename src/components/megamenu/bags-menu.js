import React from "react";
import { Link } from "react-router-dom";
import "./megamenu.css";
const BagsMenu = () => {
  return (
    <div className="navbar">
      <div className="dropdown0">
        <button className="dropbtn">Bags</button>
        <div className="dropdown-content">
          <div className="row-1">
            <div className="row">
              <div className="column" style={{ paddingLeft: "13%" }}>
                <Link className="junior" to="/">
                  Chic Bags
                </Link>
                <Link className="major" to="/">
                  Women's Bags
                </Link>
                <Link to="/">Handbags</Link>
                <Link to="/">Crossbody Bags</Link>
                <Link to="/">Backpack</Link>
                <Link to="/">Wallets</Link>
                <Link to="/">Clutches Bags</Link>
                <Link to="/">Luggage&Travel Bags</Link>
                <Link to="/">Storage Bags</Link>
                <Link to="/">Bag Accessories</Link>
              </div>
              <div className="column" style={{ paddingLeft: "6%" }}>
                <Link className="junior" to="/">
                Men Bags
                </Link>
                <Link to="/">Crossbody Bags</Link>
                <Link to="/">Laptop Bags & Briefcases</Link>
                <Link to="/">Backpacks</Link>
                <Link to="/">Wallets</Link>
                <Link to="/">Clutch Bags</Link>
                <Link to="/">Holder & Coin Bag</Link>
              </div>
              <div className="column">
                <Link to="/">Bohemian Bags</Link>
                <Link to="/">Crossbody Handbag</Link>
                <Link to="/">Anti Theft Sling Bag</Link>
                <Link to="/">EDC Bag</Link>
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

export default BagsMenu;
