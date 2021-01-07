import React from "react";
import { Link } from "react-router-dom";

export default function BrandsSection() {
  return (
    <div className="brands">
      <div style={{ display: "flex" }}>
        <Link style={{ marginRight: "4%" }} to="/">
          <img
            src="https://imgaz1.chiccdn.com/os/202012/20201214020329_672.jpg.webp"
            alt=""
          />
        </Link>
        <Link to="/">
          <img
            src="https://imgaz1.chiccdn.com/os/202012/20201214020349_257.jpg.webp"
            alt=""
          />
        </Link>
      </div>
      <div style={{ display: "flex", marginTop: "4%" }}>
        <Link style={{ marginRight: "4%" }} to="/">
          <img
            src="https://imgaz1.chiccdn.com/os/202012/20201214020401_751.jpg.webp"
            alt=""
          />
        </Link>
        <Link to="/">
          <img
            src="https://imgaz1.chiccdn.com/os/202012/20201214020425_168.jpg.webp"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
