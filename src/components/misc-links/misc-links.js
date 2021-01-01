import React from "react";
import { Link } from "react-router-dom";
import "./misc-links.css";
const MiscData = [
  { image: "https://imgaz1.chiccdn.com/os/201910/20191017050928_348.jpg.webp" },
  { image: "https://imgaz1.chiccdn.com/os/201910/20191017050919_804.jpg.webp" },
  { image: "https://imgaz1.chiccdn.com/os/201910/20191017050908_919.jpg.webp" },
  { image: "https://imgaz1.chiccdn.com/os/201910/20191017050900_567.jpg.webp" },
];

const MiscLinks = () => {
  return (
    <div className="misc-links">
      {MiscData.map((item) => (
        <Link to="/account">
          <img src={item.image} alt="" />
        </Link>
      ))}
    </div>
  );
};

export default MiscLinks;
