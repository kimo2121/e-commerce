import React from "react";
import { Link } from "react-router-dom";
import "./megamenu.css";
const MenMenu = () => {
  return (
    <div className="navbar">
      <div className="dropdown0">
        <button className="dropbtn">Men</button>
        <div className="dropdown-content">
          <div className="row-1">
            <div className="row">
              <div className="column" style={{ paddingLeft: "13%" }}>
                <Link className="junior" to="/product/New In">
                  New In
                </Link>
                <Link className="major" to="/product/men/Tops">
                  Tops
                </Link>
                <Link to="/product/men/Shirts">Shirts</Link>
                <Link to="/product">T-Shirts</Link>
                <Link className="major" to="/product/men/Coats_Jackets">
                  Coats & Jackets
                </Link>
                <Link to="/product/men/Jackets">Jackets</Link>
                <Link to="/product/men/Overcoats">Overcoats</Link>
                <Link className="major" to="/product/men/Hoodies_Sweatshirts">
                  Hoodies & Sweatshirts
                </Link>
                <Link className="junior" to="/product/men/Sweaters_Cardigans">
                  Sweaters & Cardigans
                </Link>
                <Link className="junior" to="/product/men/Suits">
                  Suits
                </Link>
              </div>
              <div className="column" style={{ paddingLeft: "6%" }}>
                <Link className="junior" to="/product/men/Bottoms">
                  Bottoms
                </Link>
                <Link className="major" to="/product/men/Sleeping_Lounge">
                  Sleeping & Lounge
                </Link>
                <Link to="/product">Pajamas Sets</Link>
                <Link to="/product/men/Onesies">Onesies</Link>
                <Link className="major" to="/product/men/Underwear">
                  Underwear
                </Link>
                <Link to="/product/men/Boxer Briefs">Boxer Briefs</Link>
                <Link to="/product/men/Shapewear">Shapewear</Link>
                <Link className="major" to="/product/men/Swimwear">
                  Swimwear
                </Link>
                <Link to="/product/men/Activewear" className="major">
                  Activewear
                </Link>
                <Link className="major" to="/product/men/Two Pieces Outfits">
                  Two Pieces Outfits
                </Link>
              </div>
              <div className="column">
                <Link className="junior" to="/product/men/Designer Shirts">
                  Designer Shirts
                </Link>
                <Link to="/product/men/Landscape Print">Landscape Print</Link>
                <Link to="/product/men/Cotton Linen Series">
                  Cotton Linen Series
                </Link>
                <Link to="/product/men/Cozy Pants">Cozy Pants</Link>
                <Link to="/product/men/Jumpsuits">Jumpsuits</Link>
                <Link to="/product/men/Cute Pajamas">Cute Pajamas</Link>
                <Link to="/product/men/Family Chirstmas Pajamas">
                  Family Chirstmas Pajamas
                </Link>
              </div>
            </div>
            <div className="headerDivider1"></div>
            <div className="header">
              <div style={{ display: "flex" }}>
                <Link to="/product">Link 1</Link>
                <Link to="/product">Link 2</Link>
              </div>
              <div style={{ display: "flex" }}>
                <Link to="/product">Link 3</Link>
                <Link to="/product">Link 4</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenMenu;
