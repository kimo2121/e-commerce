import React from "react";
import { Link } from "react-router-dom";
import "./megamenu.css";
const MenMenu = () => {
  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">Men</button>
        <div className="dropdown-content">
          <div className="row-1">
            <div className="row">
              <div className="column" style={{ paddingLeft: "13%" }}>
                <Link className="junior" to="/">
                  New In
                </Link>
                <Link className="major" to="/">
                  Tops
                </Link>
                <Link to="/">Shirts</Link>
                <Link to="/">T-Shirts</Link>
                <Link className="major" to="/">
                  Coats & Jackets
                </Link>
                <Link to="/">Jackets</Link>
                <Link to="/">Overcoats</Link>
                <Link className="major" to="/">
                  Hoodies & Sweatshirts
                </Link>
                <Link className="junior" to="/">
                  Sweaters & Cardigans
                </Link>
                <Link className="junior" to="/">
                  Suits
                </Link>
              </div>
              <div className="column" style={{ paddingLeft: "6%" }}>
                <Link className="junior" to="/">
                  Bottoms
                </Link>
                <Link className="major" to="/">
                  Sleeping & Lounge
                </Link>
                <Link to="/">Pajamas Sets</Link>
                <Link to="/">Onesies</Link>
                <Link className="major" to="/">
                  Underwear
                </Link>
                <Link to="/">Boxer Briefs</Link>
                <Link to="/">Shapewear</Link>
                <Link className="major" to="/">
                  Swimwear
                </Link>
                <Link to="/" className="major">
                  Activewear
                </Link>
                <Link className="major" to="/">
                  Two Pieces Outfits
                </Link>
              </div>
              <div className="column">
                <Link className="junior" to="/">
                  Designer Shirts
                </Link>
                <Link to="/">Landscape Print</Link>
                <Link to="/">Cotton Linen Series</Link>
                <Link to="/">Cozy Pants</Link>
                <Link to="/">Jumpsuits</Link>
                <Link to="/">Cute Pajamas</Link>
                <Link to="/">Family Chirstmas Pajamas</Link>
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

export default MenMenu;
