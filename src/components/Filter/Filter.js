import React, { useState } from "react";
import "./Filter.css";
import { Link } from "react-router-dom";
import FilterItemList from "../../components/Filter/FilterItem";

export default function Filter({ category, subcategoryList }) {
  const links = [
    { name: "Categories" },
    { name: "Down & Parkas" },
    { name: "Jackets" },
    { name: "Vests" },
    { name: "OverCoats" },
    { name: "Blazers" },
  ];
  const [activeLink, setactiveLink] = useState({ index: 0 });

  console.log({ category });
  console.log({ subcategoryList });

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
        {subcategoryList.length > 0 &&
          subcategoryList.map((link, index) => (
            <Link
              to={`/${category}/${link}`}
              className={`${
                activeLink.index === index ? "active_link" : ""
              } filter_link`}
              onClick={() => setactiveLink({ index })}
            >
              {link}
            </Link>
          ))}
      </div>
      <hr />
      <FilterItemList />
    </div>
  );
}
