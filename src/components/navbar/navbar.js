import React from "react";
import { Link } from "react-router-dom";

import * as RiIcons from "react-icons/ri";

import "antd/dist/antd.css";
import "./navbar.css";
import { Input } from "antd";
import MenMenu from "../megamenu/men-menu";
<<<<<<< HEAD
import JewelryMenu from "../megamenu/Jewelry";
=======
import NewInMenu from "../megamenu/new-in";
>>>>>>> 8afad4c7bdae8f19a965980e003bde751923118a
import WomenMenu from "../megamenu/women-menu";
import BagsMenu from "../megamenu/bags-menu";
import ShoesMenu from "../megamenu/shoes-menu";
import HomeGarden from "../megamenu/home-garden-menu";
<<<<<<< HEAD
import BeautyMenu from "../megamenu/beauty-menu";
=======
import SaleMenu from "../megamenu/sale-menu";
>>>>>>> 8afad4c7bdae8f19a965980e003bde751923118a
import KidsMenu from "../megamenu/kids-menu";
import AccessoriesBeautyMenu from "../megamenu/accessories-beauty-menu";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import AccountDropdown from "../account-dropdown/account-dropdown";

<<<<<<< HEAD
import { useSelector } from "react-redux";
import { getSubcategories } from "../../util/util_functions";

const Navbar = () => {
  const all_products = useSelector((state) => state.products.all_products);
=======
const Navbar = () => {
>>>>>>> 8afad4c7bdae8f19a965980e003bde751923118a
  const onSearch = (value) => console.log(value);
  const { Search } = Input;
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
<<<<<<< HEAD
          <JewelryMenu
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
          <BeautyMenu
            all_products={all_products}
            getSubcategories={getSubcategories}
          />
=======
          <NewInMenu />
          <WomenMenu />
          <MenMenu />
          <KidsMenu />
          <BagsMenu />
          <ShoesMenu />
          <HomeGarden />
          <AccessoriesBeautyMenu />
          <SaleMenu />
>>>>>>> 8afad4c7bdae8f19a965980e003bde751923118a
        </div>
      </div>

      <Search
        className="search-bar"
        size="large"
        placeholder="Search..."
        onSearch={onSearch}
      />
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
