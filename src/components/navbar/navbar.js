import React from "react";
import { Link } from "react-router-dom";

import * as RiIcons from "react-icons/ri";

import "antd/dist/antd.css";
import "./navbar.css";
import { Input } from "antd";
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

const Navbar = () => {
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
          <NewInMenu />
          <WomenMenu />
          <MenMenu />
          <KidsMenu />
          <BagsMenu />
          <ShoesMenu />
          <HomeGarden />
          <AccessoriesBeautyMenu />
          <SaleMenu />
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
