import React from "react";
import { Link } from "react-router-dom";
import "./megamenu.css";
const HomeGarden = () => {
  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">Home & Garden</button>
        <div className="dropdown-content">
          <div className="row-1">
            <div className="row">
              <div className="column" style={{ paddingLeft: "13%" }}>
                <Link className="junior" to="/">
                  Home Textile
                </Link>
                <Link to="/">Bedding Sets Newchic</Link>
                <Link to="/">Home Carpets Newchic</Link>
                <Link className="major" to="/">
                  Table & Sofa Linens
                </Link>
                <Link to="/">Cushion Cover</Link>
                <Link to="/">Bean Bag</Link>
                <Link to="/">Cushion & Pillow</Link>
                <Link to="/">Tapestries</Link>
                <Link to="/">Arts & Crafts & Sewing</Link>
                <Link to="/">Towels</Link>
              </div>
              <div className="column" style={{ paddingLeft: "6%" }}>
                <Link className="junior" to="/">
                  Home Decor
                </Link>
                <Link to="/">Decorative Lights And Lamps</Link>{" "}
                <Link to="/">Wall Art</Link>
                <Link to="/">Decals And Stickers And Vinyl Art</Link>
                <Link className="major" to="/">
                  Bathroom
                </Link>
                <Link className="major" to="/">
                  Family Entertainment
                </Link>
                <Link className="major" to="/">
                  Festival And Party Supplies
                </Link>
                <Link className="major" to="/">
                  Housekeeping And Organization
                </Link>
                <Link to="/">Holders & Hooks</Link>
                <Link to="/">Storage Bags</Link>
              </div>
              <div className="column">
                <Link className="junior" to="/">
                  Garden & Outdoor
                </Link>
                <Link to="/">Pots & Planters</Link>
                <Link to="/">Outdoor & Picnic</Link>
                <Link className="major" to="/">
                  Kitchen And Dining And Bar
                </Link>
                <Link to="/">Kitchen Tools & Gadgets</Link>
                <Link to="/">Housekeeping And Organization</Link>
                <Link className="major" to="/">
                  Home Improvement
                </Link>
                <Link to="/">Tools</Link>
                <Link className="major" to="/">
                  Pet Supplies
                </Link>
                <Link to="/">Feeder & Waterer</Link>
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

export default HomeGarden;
