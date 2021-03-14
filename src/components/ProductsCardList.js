import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import BasicProductCard from "./ProductCard/BasicProductCard";
import ResProductCard from "./ProductCard/ResProductCard";
import "../pages/home/main-home.scss";
export default function ProductsCardList({
  isSingleProductPage,
  isHome,
  row,
  onClick,
  data,
}) {
  return (
    <div className="grid-container-holder">
      {data &&
        data.length > 0 &&
        data.map((item, indx) => (
          <div item key={indx} className="products-grid-container">
            {window.innerWidth < 900 ? (
              <ResProductCard mobView onClick={onClick} product={item} />
            ) : isSingleProductPage || isHome ? (
              <BasicProductCard onClick={onClick} product={item} isHome />
            ) : (
              <ProductCard onClick={onClick} product={item} />
            )}
          </div>
        ))}
    </div>
  );
}
