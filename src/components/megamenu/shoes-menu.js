import React from "react";
import { Link } from "react-router-dom";
import "./megamenu.css";
const ShoesMenu = () => {
  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">Shoes</button>
        <div className="dropdown-content">
          <div className="row-1">
            <div className="row">
              <div className="column" style={{ paddingLeft: "13%" }}>
                <Link to="/">Women's Latest Style</Link>
                <Link className="major" to="/">
                  Women's Shoes
                </Link>
                <Link className="major" to="/">
                  Women's Boots
                </Link>
                <Link to="/">Women's Flat Boots</Link>
                <Link to="/">Waterproof Snow Boots</Link>
                <Link to="/">Women Embroidered Boots</Link>
                <Link className="major" to="/">
                  Flat Shoes For Women
                </Link>
                <Link to="/">Suede Soft Loafers</Link>
                <Link className="major" to="/">
                  Women's Slip On Sneakers
                </Link>
                <Link className="major" to="/">
                  Women's Sandals
                </Link>
              </div>
              <div className="column" style={{ paddingLeft: "6%" }}>
                <Link className="junior" to="/">
                  Men's Shoes
                </Link>
                <Link className="major" to="/">
                  Men's Latest Style
                </Link>
                <Link className="major" to="/">
                  Men's Boots
                </Link>
                <Link to="/">Outdoor Combat Boots</Link>
                <Link to="/">Business & Casual</Link>
                <Link className="major" to="/">
                  Men's Flats
                </Link>
                <Link className="major" to="/">
                  Men's Sneakers
                </Link>
                <Link to="/">Men's Skate Shoes</Link>{" "}
                <Link className="major" to="/">
                  Men's Dress Shoes
                </Link>
                <Link className="major" to="/">
                  Men's Sandals
                </Link>
              </div>
              <div className="column">
                <Link className="junior" to="/">
                  BRAND【Socofy】
                </Link>
                <Link to="/">Socofy Boots Newchic</Link>
                <Link to="/">Socofy Retro Pumps</Link>
                <Link className="major" to="/">
                  BRAND【Lostisy】
                </Link>
                <Link to="/">Women's Comfy Flats</Link>
                <Link to="/">Women's Winter Boots</Link>
                <Link className="major" to="/">
                  BRAND【Menico】
                </Link>
                <Link to="/">Hand Stiching Boots</Link>
                <Link className="major" to="/">
                  BRAND【Camel】
                </Link>
                <Link className="major" to="/">
                  Kid's Shoes
                </Link>
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

export default ShoesMenu;
