import React from "react";
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
  return (
    <div style={{ overflow: "scroll", height:"50vh", padding:"0 1rem 0 0" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {links.map((link) => (
          <Link to={link.name}>{link.name} </Link>
        ))}
      </div>
      <hr />
      <FilterItemList />
    </div>
  );
}
