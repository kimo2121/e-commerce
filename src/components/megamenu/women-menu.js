import React from "react";
import { Link } from "react-router-dom";
import "./megamenu.css";
const WomenMenu = () => {
  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">Women</button>
        <div className="dropdown-content">
          <div className="row-1">
            <div className="row">
              <div className="column" style={{ paddingLeft: "13%" }}>
                <Link className="junior" to="/">
                  Tops
                </Link>
                <Link to="/">Blouses & Shirts</Link>
                <Link to="/">T-Shirts</Link>
                <Link className="major" to="/">
                  Dresses
                </Link>
                <Link to="/">Vintage Dresses</Link>
                <Link to="/">Print Dresses</Link>
                <Link to="/">Casual Dresses</Link>
                <Link className="major" to="/">
                  Bottoms
                </Link>
                <Link to="/">Pantis & Capris</Link>
                <Link to="/">Jumpsuits & Rompers</Link>
              </div>
              <div className="column" style={{ paddingLeft: "6%" }}>
                <Link className="junior" to="/">
                  Outerwwear & Sweaters
                </Link>
                <Link to="/">Coats</Link>
                <Link to="/">Sweaters</Link>
                <Link className="major" to="/">
                  Hoodies
                </Link>
                <Link className="major" to="/">
                  Langrie
                </Link>
                <Link to="/">Bra & Bra Set</Link>
                <Link to="/">Panties</Link>
                <Link to="/">Sexy Langrie</Link>
                <Link to="/" className="major">
                  Pajamas & Robes
                </Link>
                <Link className="major" to="/">
                  Swimwear
                </Link>
              </div>
              <div className="column">
                <Link className="junior" to="/">
                  Kids & Mom
                </Link>
                <Link to="/">Maternity Clothes</Link>
                <Link className="major" to="/">
                  Athelisure
                </Link>
                <Link to="/">Warm Teddy</Link>
                <Link to="/">Plush Robe</Link>
                <Link to="/">Cute Pajamas</Link>
                <Link className="major" to="/">
                  Family Chirstmas Pajamas
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

export default WomenMenu;
