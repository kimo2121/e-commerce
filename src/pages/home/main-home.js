import React from "react";
import { Link } from "react-router-dom";
import "./main-home.css";
import Footer from "../../components/footer/footer";
import SliderComponent from "../../components/slider-3d/slider";
import SliderMultiple from "../../components/slider-multiple/slider-multiple";
import BasicProductCard from "../../components/ProductCard/BasicProductCard";
import ProductsCardList from "../../components/ProductsCardList";
import { useSelector } from "react-redux";
import Banner from "../../components/homePage/Banner";
import Brands from "../../components/homePage/Brands";
import HomeFooter from "../../components/homePage/HomeFooter";

const MainHome = () => {
  const products = useSelector((state) => state.products.products);
  console.log({ products });
  return (
    <div className="main-home">
      <Banner />
      <SliderMultiple />
      <Brands />

      <div className="dep-flash-deals">
        <h2>Flash Deals</h2>
        <div style={{ display: "flex" }}>
          <ProductsCardList data={products.slice(0, 4)} row={3} isHome />
        </div>
      </div>

      <HomeFooter  />
      <div className="dep-flash-deals">
        <h2>Recommend For You</h2>
        <ProductsCardList data={products} row={2} isHome />
      </div>
      <Footer />
    </div>
  );
};

export default MainHome;
