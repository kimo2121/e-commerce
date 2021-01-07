import React from "react";
import { Link } from "react-router-dom";
import "./megamenu.css";
const WomenMenu = () => {
  return (
    <div className="navbar">
      <div className="dropdown0">
        <button className="dropbtn">Women</button>
        <div className="dropdown-content">
          <div className="row-1">
            <div className="row">
              <div className="column" style={{ paddingLeft: "13%" }}>
                <Link className="junior" to="/women/Tops">
                  Tops
                </Link>
                <Link to="/women/Blouses & Shirts">Blouses & Shirts</Link>
                <Link to="/women/T-Shirts">T-Shirts</Link>
                <Link className="major" to="/women/Dresses">
                  Dresses
                </Link>
                <Link to="/women/Vintage Dresses">Vintage Dresses</Link>
                <Link to="/women/Print Dresses">Print Dresses</Link>
                <Link to="/women/Casual Dresses">Casual Dresses</Link>
                <Link className="major" to="/women/Bottoms">
                  Bottoms
                </Link>
                <Link to="/women/Pantis & Capris">Pantis & Capris</Link>
                <Link to="/women/Jumpsuits & Rompers">Jumpsuits & Rompers</Link>
              </div>
              <div className="column" style={{ paddingLeft: "6%" }}>
                <Link className="junior" to="/women/Outerwwear & Sweaters">
                  Outerwwear & Sweaters
                </Link>
                <Link to="/women/Coats">Coats</Link>
                <Link to="/women/Sweaters">Sweaters</Link>
                <Link className="major" to="/women/Hoodies">
                  Hoodies
                </Link>
                <Link className="major" to="/women/Langrie">
                  Langrie
                </Link>
                <Link to="/women/Bra & Bra Set">Bra & Bra Set</Link>
                <Link to="/women/Panties">Panties</Link>
                <Link to="/women/Sexy Langrie">Sexy Langrie</Link>
                <Link to="/women/Pajamas & Robes" className="major">
                  Pajamas & Robes
                </Link>
                <Link className="major" to="/women/Swimwear">
                  Swimwear
                </Link>
              </div>
              <div className="column">
                <Link className="junior" to="/women/ Kids & Mom">
                  Kids & Mom
                </Link>
                <Link to="/Maternity Clothes">Maternity Clothes</Link>
                <Link className="major" to="/women/Athelisure">
                  Athelisure
                </Link>
                <Link to="/women/Warm Teddy">Warm Teddy</Link>
                <Link to="/women/Plush Robe">Plush Robe</Link>
                <Link to="/women/Cute Pajamas">Cute Pajamas</Link>
                <Link className="major" to="/women/Family Chirstmas Pajamas">
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
