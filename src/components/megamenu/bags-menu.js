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
                <Link className="junior" to="/bags/Chic Bags">
                  Chic Bags
                </Link>
                <Link className="major" to="/bags/Women's Bags">
                  Women's Bags
                </Link>
                <Link to="/bags/Handbags</">Handbags</Link>
                <Link to="/bags/Crossbody Bags">Crossbody Bags</Link>
                <Link to="/bags/Backpack</">Backpack</Link>
                <Link to="/bags/Wallets</">Wallets</Link>
                <Link to="/bags/Clutches Bags">Clutches Bags</Link>
                <Link to="/bags/Luggage&Travel Bags">Luggage&Travel Bags</Link>
                <Link to="/bags/Storage Bags">Storage Bags</Link>
                <Link to="/bags/Bag Accessories">Bag Accessories</Link>
              </div>
              <div className="column" style={{ paddingLeft: "6%" }}>
                <Link className="junior" to="/bags/Men Bags">
                  Men Bags
                </Link>
                <Link to="/bags/Crossbody Bags">Crossbody Bags</Link>
                <Link to="/bags/Laptop Bags & Briefcases">
                  Laptop Bags & Briefcases
                </Link>
                <Link to="/bags/Backpacks</">Backpacks</Link>
                <Link to="/bags/Wallets</">Wallets</Link>
                <Link to="/bags/Clutch Bags">Clutch Bags</Link>
                <Link to="/bags/Holder  & Coin Bag">Holder & Coin Bag</Link>
              </div>
              <div className="column">
                <Link to="/bags/Bohemian Bags">Bohemian Bags</Link>
                <Link to="/bags/Crossbody Handbag">Crossbody Handbag</Link>
                <Link to="/bags/Anti Theft Sling Bag">
                  Anti Theft Sling Bag
                </Link>
                <Link to="/bags/EDC Bag">EDC Bag</Link>
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
