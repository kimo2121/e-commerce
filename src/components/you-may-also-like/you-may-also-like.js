import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./you-may-also-like.css";

const YouMayAlsoLike = () => {
  return (
    <div className="you-may-also-like">
      {Array(10)
        .fill()
        .map((i) => (
          <ProductCard />
        ))}
    </div>
  );
};

export default YouMayAlsoLike;
