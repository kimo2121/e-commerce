import React from "react";

import "./main-home.scss";
import Footer from "../../components/footer/footer";
import ProductsCardList from "../../components/ProductsCardList";
import { useSelector } from "react-redux";
import Banner from "../../components/banner/banner";
import Brands from "../../components/homePage/Brands";

import SliderBanner from "../../components/slider-banner/slider-banner";

const MainHome = () => {
  const products = useSelector((state) => state.products.products);
  console.log({ products });
  return (
    <div className="main-home">
      {/* <Banner /> */}
      <Banner />
      <SliderBanner subcategoryBanner />
      <Brands />
      <SliderBanner flashDeals />
      <SliderBanner />
      <SliderBanner isWhatsHot />
      {/* <HomeFooter /> */}
      {/* <div className="container-view">
        <h1>hello</h1>
        <h1>world</h1>
        <h1>how u doin?</h1>
      </div> */}
      <div className="dep-flash-deals">
        <h2>Recommend For You</h2>
        <ProductsCardList data={products} row={2} isHome />
      </div>
      <Footer />
    </div>
  );
};

export default MainHome;
