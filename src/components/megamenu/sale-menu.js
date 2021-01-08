import React from "react";
import { Link } from "react-router-dom";
import "./megamenu.css";
const SaleMenu = () => {
  return (
    <div className="navbar">
      <div className="dropdown0">
        <button className="dropbtn">Sale</button>
        <div className="dropdown-content">
          <div className="row-1">
            <div className="row">
              {/* <div className="column" style={{ paddingLeft: "13%" }}></div> */}
              <div
                className="column"
                style={{ width: "60%", paddingLeft: "35%" }}
              >
                <span>Women Sale</span>
                <Link to="/sale/Tops Sale">Tops Sale</Link>
                <Link to="/sale/Bottoms Sale">Bottoms Sale</Link>
                <Link to="/sale/Dresses Sale">Dresses Sale</Link>
                <Link to="/sale/Pajamas &  Robes Sale">
                  Pajamas & Robes Sale
                </Link>
                <Link to="/sale/Lingerie Sale">Lingerie Sale</Link>
                <Link to="/sale/Sandals Sale">Sandals Sale</Link>
                <Link to="/sale/Flats Sale">Flats Sale</Link>
                <Link to="/sale/Sneakers Sale">Sneakers Sale</Link>
                <Link className="major" to="/Kids & Mom Sale">
                  Kids & Mom Sale
                </Link>
              </div>
              <div
                className="column"
                style={{ width: "40%", paddingLeft: "8%" }}
              >
                <span>Men Sale</span>
                <Link to="/sale/Tops Sale Newchic">Tops Sale Newchic</Link>
                <Link to="/sale/Underwear Sale">Underwear Sale</Link>
                <Link to="/sale/Flats Sale">Flats Sale</Link>
                <Link to="/sale/Bottoms Sale">Bottoms Sale</Link>
                <Link to="/sale/Sneakers Sale">Sneakers Sale</Link>
                <Link className="major" to="/sale/Bags Sale">
                  Bags Sale
                </Link>
                <Link className="major" to="/sale/Accessories Sale">
                  Accessories Sale
                </Link>
                <Link className="major" to="/sale/Home & Garden Sale">
                  Home & Garden Sale
                </Link>
              </div>
            </div>
            <div className="headerDivider1"></div>
            <div className="header">
              {/* <div style={{ display: "flex" }}>
                <Link to="/">Link 1</Link>
                <Link to="/">Link 2</Link>
              </div>
              <div style={{ display: "flex" }}>
                <Link to="/">Link 3</Link>
                <Link to="/">Link 4</Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleMenu;
