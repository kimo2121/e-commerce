import React from "react";
import { Link } from "react-router-dom";
import BrandsSection from "../../components/homePage/BrandsSection";

export default function Brands() {
  return (
    <div className="brands-section">
      <h2 className="dep-brands">Featured Brands</h2>
      <div className="christmas-offers">
        <Link to="/">
          <img
            src="https://imgaz1.chiccdn.com/os/202012/20201214020258_742.jpg.webp"
            alt=""
          />
        </Link>
      </div>
      <BrandsSection />
    </div>
  );
}
