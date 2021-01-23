import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as RiIcons from "react-icons/ri";

import "./navbar.css";
import MenMenu from "../megamenu/men-menu";
import NewInMenu from "../megamenu/new-in";
import WomenMenu from "../megamenu/women-menu";
import BagsMenu from "../megamenu/bags-menu";
import ShoesMenu from "../megamenu/shoes-menu";
import HomeGarden from "../megamenu/home-garden-menu";
import SaleMenu from "../megamenu/sale-menu";
import KidsMenu from "../megamenu/kids-menu";
import AccessoriesBeautyMenu from "../megamenu/accessories-beauty-menu";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import AccountDropdown from "../account-dropdown/account-dropdown";
import { getSubcategories } from "../../util/util_functions";
import { useSelector } from "react-redux";
import SearchComponent from "../search-component/search-component";
import AdvancedSearch from "../search-component/search-advanced";

const Navbar = () => {
  const all_products = useSelector((state) => state.products.all_products);
  const onSearch = (value) => console.log(value);
  // const { Search } = Input;
  console.log({ all_products });
  // const [show, handleShow] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 130) {
  //       handleShow(true);
  //     } else {
  //       handleShow(false);
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        Logo
      </Link>
      <div className="drop-down-menu">
        <div className="fkin">
          <NewInMenu
            all_products={all_products}
            getSubcategories={getSubcategories}
          />
          <WomenMenu
            all_products={all_products}
            getSubcategories={getSubcategories}
          />
          <MenMenu
            all_products={all_products}
            getSubcategories={getSubcategories}
          />
          <KidsMenu
            all_products={all_products}
            getSubcategories={getSubcategories}
          />
          <BagsMenu
            all_products={all_products}
            getSubcategories={getSubcategories}
          />
          <ShoesMenu
            all_products={all_products}
            getSubcategories={getSubcategories}
          />
          <HomeGarden
            all_products={all_products}
            getSubcategories={getSubcategories}
          />
          <AccessoriesBeautyMenu
            all_products={all_products}
            getSubcategories={getSubcategories}
          />
          <SaleMenu
            all_products={all_products}
            getSubcategories={getSubcategories}
          />
        </div>
      </div>
      <SearchComponent all_products={all_products} />
      {/* <AdvancedSearch all_products={all_products} className="search-bar" /> */}
      <AccountDropdown />
      <Link
        to="/"
        style={{ position: "absolute", marginLeft: "77%", marginTop: "2%" }}
      >
        <RiIcons.RiHeart2Line color={"black"} size={26} />
      </Link>
      <CartDropdown />
    </div>
  );
};

export default Navbar;
