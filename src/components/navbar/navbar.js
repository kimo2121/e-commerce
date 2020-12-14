import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";

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
import AccessoriesBeautyMenu from "../megamenu/accessories-beauty-menu";
// import KidsMenu from "../megamenu/kids-menu";

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
    <div className={`nav-bar  `}>
      <Link className={`logo `} to="/">
        Logo
      </Link>
      <div className="drop-down-menu">
        <NewInMenu />
        <WomenMenu />
        <MenMenu />
        <BagsMenu />
        <ShoesMenu />
        <HomeGarden />
        <AccessoriesBeautyMenu />
        <SaleMenu />
      </div>

      {/* <KidsMenu /> */}
      <Search
        className="search-bar"
        size="large"
        placeholder="Search..."
        onSearch={onSearch}
        // style={{ width: "30%", margin: "20px 20px  20px -140px" }}
      />

      <Link
        to="/"
        style={{ position: "absolute", marginLeft: "58%", marginTop: "2%" }}
      >
        <RiIcons.RiHeart2Line color={"black"} size={26} />
      </Link>
      <Link
        to="/"
        style={{ position: "absolute", marginLeft: "50%", marginTop: "2%" }}
      >
        <MdIcons.MdPersonOutline color={"black"} size={28} />
      </Link>
      <Link
        to="/"
        style={{ position: "absolute", marginLeft: "66%", marginTop: "2%" }}
      >
        <AiIcons.AiOutlineShopping color={"black"} size={28} />
      </Link>
    </div>
  );
};

export default Navbar;
