import React from "react";
import { Link } from "react-router-dom";
import "./megamenu.css";
const HomeGarden = () => {
  return (
    <div className="navbar">
      <div className="dropdown0">
        <button className="dropbtn">Home & Garden</button>
        <div className="dropdown-content">
          <div className="row-1">
            <div className="row">
              <div className="column" style={{ paddingLeft: "13%" }}>
                <Link className="junior" to="/homeGarden/Home Textile">
                  Home Textile
                </Link>
                <Link to="/homeGarden/Bedding Sets Newchic">
                  Bedding Sets Newchic
                </Link>
                <Link to="/homeGarden/Home Carpets Newchic">
                  Home Carpets Newchic
                </Link>
                <Link className="major" to="/">
                  Table & Sofa Linens
                </Link>
                <Link to="/homeGarden/Cushion">Cushion Cover</Link>
                <Link to="/homeGarden/Bean">Bean Bag</Link>
                <Link to="/homeGarden/Cushion & Pillow">Cushion & Pillow</Link>
                <Link to="/homeGarden/Tapestries">Tapestries</Link>
                <Link to="/homeGarden/Arts & Crafts & Sewing">
                  Arts & Crafts & Sewing
                </Link>
                <Link to="/homeGarden/Towels">Towels</Link>
              </div>
              <div className="column" style={{ paddingLeft: "6%" }}>
                <Link className="junior" to="/homeGarden/Home Decor">
                  Home Decor
                </Link>
                <Link to="/homeGarden/Decorative Lights And Lamps">
                  Decorative Lights And Lamps
                </Link>{" "}
                <Link to="/homeGarden/Wall Art">Wall Art</Link>
                <Link to="/homeGarden/Decals And Stickers And Vinyl Art">
                  Decals And Stickers And Vinyl Art
                </Link>
                <Link className="major" to="/homeGarden/Bathroom">
                  Bathroom
                </Link>
                <Link className="major" to="/homeGarden/Family Entertainment">
                  Family Entertainment
                </Link>
                <Link
                  className="major"
                  to="/homeGarden/Festival And Party Supplies"
                >
                  Festival And Party Supplies
                </Link>
                <Link
                  className="major"
                  to="/homeGarden/Housekeeping And Organization"
                >
                  Housekeeping And Organization
                </Link>
                <Link to="/homeGarden/Holders & Hooks">Holders & Hooks</Link>
                <Link to="/homeGarden/Storage Bags">Storage Bags</Link>
              </div>
              <div className="column">
                <Link className="junior" to="/homeGarden/Garden & Outdoor">
                  Garden & Outdoor
                </Link>
                <Link to="/homeGarden/Pots & Planters">Pots & Planters</Link>
                <Link to="/homeGarden/Outdoor & Picnic">Outdoor & Picnic</Link>
                <Link
                  className="major"
                  to="/homeGarden/Kitchen And Dining And Bar"
                >
                  Kitchen And Dining And Bar
                </Link>
                <Link to="/homeGarden/Kitchen Tools &  Gadgets">
                  Kitchen Tools & Gadgets
                </Link>
                <Link to="/homeGarden/Housekeeping And Organization">
                  Housekeeping And Organization
                </Link>
                <Link className="major" to="/homeGarden/Home Improvement">
                  Home Improvement
                </Link>
                <Link to="/homeGarden">Tools</Link>
                <Link className="major" to="/homeGarden/Pet Supplies">
                  Pet Supplies
                </Link>
                <Link to="/homeGarden/Feeder & Waterer">Feeder & Waterer</Link>
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

export default HomeGarden;
