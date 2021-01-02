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
                <Link to="/">Tops Sale</Link>
                <Link to="/">Bottoms Sale</Link>
                <Link to="/">Dresses Sale</Link>
                <Link to="/">Pajamas & Robes Sale</Link>
                <Link to="/">Lingerie Sale</Link>
                <Link to="/">Sandals Sale</Link>
                <Link to="/">Flats Sale</Link>
                <Link to="/">Sneakers Sale</Link>
                <Link className="major" to="/">
                  Kids & Mom Sale
                </Link>
              </div>
              <div
                className="column"
                style={{ width: "40%", paddingLeft: "8%" }}
              >
                <span>Men Sale</span>
                <Link to="/">Tops Sale Newchic</Link>
                <Link to="/">Underwear Sale</Link>
                <Link to="/">Flats Sale</Link>
                <Link to="/">Bottoms Sale</Link>
                <Link to="/">Sneakers Sale</Link>
                <Link className="major" to="/">
                  Bags Sale
                </Link>
                <Link className="major" to="/">
                  Accessories Sale
                </Link>
                <Link className="major" to="/">
                  Home & Garden Sale
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

export default SaleMenu;
