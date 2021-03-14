import React from "react";
import { Link } from "react-router-dom";
import BrandsSection from "../../components/homePage/BrandsSection";

export default function Brands() {
  const data = [
    "https://imgaz1.chiccdn.com/os/202012/20201214020329_672.jpg.webp",
    "https://imgaz1.chiccdn.com/os/202012/20201214020349_257.jpg.webp",
    "https://imgaz1.chiccdn.com/os/202012/20201214020401_751.jpg.webp",
    "https://imgaz1.chiccdn.com/os/202012/20201214020425_168.jpg.webp",
  ];
  return (
    <div className="brands-dep-container">
      <h2 className="dep-brands">Featured Brands</h2>
      <div className="brands-section">
        <div className="christmas-offers">
          <Link to="/">
            <img
              src="https://imgaz1.chiccdn.com/os/202012/20201214020258_742.jpg.webp"
              alt=""
            />
          </Link>
        </div>
        <br />
        {/* <div>
          {data.map((item, indx) => (
            <Link to="/">
              <img src={item} alt="" />
            </Link>
          ))}
        </div> */}
        <BrandsSection />
      </div>
    </div>
  );
}
