import React from "react";
import { Link } from "react-router-dom";
import "./megamenu.css";
<<<<<<< HEAD
import NavLink from "../../components/NavLink";

const ShoesMenu = ({ all_products, getSubcategories }) => {
  const subcategories = getSubcategories(all_products, "Shoes");
  <NavLink subcategories={subcategories} />;
=======
const ShoesMenu = () => {
>>>>>>> 8afad4c7bdae8f19a965980e003bde751923118a
  return (
    <div className="navbar">
      <div className="dropdown0">
        <button className="dropbtn">Shoes</button>
        <div className="dropdown-content">
          <div className="row-1">
            <div className="row">
<<<<<<< HEAD
              <NavLink subcategories={subcategories} category="shoes" />
=======
              <div className="column" style={{ paddingLeft: "13%" }}>
                <Link to="/${product.category}/${product.subcategory}">
                  Women's Latest Style
                </Link>
                <Link className="major" to="/Shoes/Women's Shoes">
                  Women's Shoes
                </Link>
                <Link className="major" to="/Shoes/Women's Boots">
                  Women's Boots
                </Link>
                <Link to="/Shoes/Women's Flat Boots">Women's Flat Boots</Link>
                <Link to="/Shoes/Waterproof Snow Boots">
                  Waterproof Snow Boots
                </Link>
                <Link to="/Shoes/Women Embroidered Boots">
                  Women Embroidered Boots
                </Link>
                <Link className="major" to="/Shoes/Flat Shoes For Women">
                  Flat Shoes For Women
                </Link>
                <Link to="/Shoes/Suede Soft Loafers">Suede Soft Loafers</Link>
                <Link className="major" to="/Shoes/Women's Slip On Sneakers">
                  Women's Slip On Sneakers
                </Link>
                <Link className="major" to="/Shoes/Women's Sandals">
                  Women's Sandals
                </Link>
              </div>
              <div className="column" style={{ paddingLeft: "6%" }}>
                <Link className="junior" to="/Shoes/Men's Shoes">
                  Men's Shoes
                </Link>
                <Link className="major" to="/Shoes/Men's Latest">
                  Men's Latest Style
                </Link>
                <Link className="major" to="/Shoes/Men's Boots">
                  Men's Boots
                </Link>
                <Link to="/Shoes/Outdoor Combat Boots">
                  Outdoor Combat Boots
                </Link>
                <Link to="/Shoes/Business & Casual">Business & Casual</Link>
                <Link className="major" to="/Shoes/Men's Flats">
                  Men's Flats
                </Link>
                <Link className="major" to="/Shoes/Men's Sneakers">
                  Men's Sneakers
                </Link>
                <Link to="/Shoes/Men's Skate Shoes">Men's Skate Shoes</Link>{" "}
                <Link className="major" to="/Shoes/Men's Dress">
                  Men's Dress Shoes
                </Link>
                <Link className="major" to="/Shoes/Men's Sandals">
                  Men's Sandals
                </Link>
              </div>
              <div className="column">
                <Link className="junior" to="/Shoes/Baskets">
                  Baskets
                </Link>
                <Link to="/Shoes/Bottes & Bottines">Bottes & Bottines</Link>
                <Link to="/Shoes/Bottes & Chaussures montantes">
                  Bottes & Chaussures montantes
                </Link>
                <Link className="major" to="/Shoes/BRAND【Lostisy】">
                  BRAND【Lostisy】
                </Link>
                <Link to="/Shoes/Women's Comfy Flats">
                  {" "}
                  Women's Comfy Flats
                </Link>
                <Link to="/Shoes/Women's Winter Boots">
                  Women's Winter Boots
                </Link>
                <Link className="major" to="/Shoes/BRAND【Menico】">
                  BRAND【Menico】
                </Link>
                <Link to="/Shoes/Hand Stiching Boots">Hand Stiching Boots</Link>
                <Link className="major" to="/Shoes/BRAND【Camel】">
                  BRAND【Camel】
                </Link>
                <Link className="major" to="/Shoes/Kid's Shoes">
                  Kid's Shoes
                </Link>
              </div>
>>>>>>> 8afad4c7bdae8f19a965980e003bde751923118a
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

export default ShoesMenu;
