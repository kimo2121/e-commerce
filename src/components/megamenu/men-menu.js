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
                <Link className="junior" to="/men/New In">
                  New In
                </Link>
                <Link className="major" to="/men/Tops">
                  Tops
                </Link>
                <Link to="/men/Shirts">Shirts</Link>
                <Link to="/men/T-Shirts">T-Shirts</Link>
                <Link className="major" to="/men/Coats_Jackets">
                  Coats & Jackets
                </Link>
                <Link to="/men/Jackets">Jackets</Link>
                <Link to="/men/Overcoats">Overcoats</Link>
                <Link className="major" to="/men/Hoodies_Sweatshirts">
                  Hoodies & Sweatshirts
                </Link>
                <Link className="junior" to="/men/Sweaters_Cardigans">
                  Sweaters & Cardigans
                </Link>
                <Link className="junior" to="/men/Suits">
                  Suits
                </Link>
              </div>
              <div className="column" style={{ paddingLeft: "6%" }}>
                <Link className="junior" to="/men/Bottoms">
                  Bottoms
                </Link>
                <Link className="major" to="/men/Sleeping_Lounge">
                  Sleeping & Lounge
                </Link>
                <Link to="/men/Pajamas Sets">Pajamas Sets</Link>
                <Link to="/men/Onesies">Onesies</Link>
                <Link className="major" to="/men/Underwear">
                  Underwear
                </Link>
                <Link to="/men/Boxer Briefs">Boxer Briefs</Link>
                <Link to="/men/Shapewear">Shapewear</Link>
                <Link className="major" to="/men/Swimwear">
                  Swimwear
                </Link>
                <Link to="/men/Activewear" className="major">
                  Activewear
                </Link>
                <Link className="major" to="/men/Two Pieces Outfits">
                  Two Pieces Outfits
                </Link>
              </div>
              <div className="column">
                <Link className="junior" to="/men/Designer Shirts">
                  Designer Shirts
                </Link>
                <Link to="/men/Landscape Print">Landscape Print</Link>
                <Link to="/men/Cotton Linen Series">Cotton Linen Series</Link>
                <Link to="/men/Cozy Pants">Cozy Pants</Link>
                <Link to="/men/Jumpsuits">Jumpsuits</Link>
                <Link to="/men/Cute Pajamas">Cute Pajamas</Link>
                <Link to="/men/Family Chirstmas Pajamas">
                  Family Chirstmas Pajamas
                </Link>
              </div>
            </div>
            <div className="headerDivider1"></div>
            <div className="header">
              <div style={{ display: "flex" }}>
                <Link to="">Link 1</Link>
                <Link to="">Link 2</Link>
              </div>
              <div style={{ display: "flex" }}>
                <Link to="">Link 3</Link>
                <Link to="">Link 4</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenMenu;
