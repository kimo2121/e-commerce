import React, { useState } from "react";
import "./Filter.css";
import { Link } from "react-router-dom";
import FilterItemList from "../../components/Filter/FilterItem";

export default function Filter() {
  const links = [
    { name: "Categories" },
    { name: "Down & Parkas" },
    { name: "Jackets" },
    { name: "Vests" },
    { name: "OverCoats" },
    { name: "Blazers" },
  ];
  const [activeLink, setactiveLink] = useState({ index: 0 });

  return (
    <div
      style={{
        overflow: "scroll",
        height: "70vh",
        padding: "0 1rem 0 0",
        // position: "fixed",
        
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {links.map((link, index) => (
          <Link
            // to={link.name}
            className={`${
              activeLink.index === index ? "active_link" : ""
            } filter_link  `}
            onClick={() => setactiveLink({ index })}
          >
            {link.name}{" "}
          </Link>
        ))}
      </div>
      <hr />
      <FilterItemList />
    </div>
  );
}
