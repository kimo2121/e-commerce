import React from "react";
import HeaderItem from "../HeaderItem/HeaderItem";

export const headerItemData = [
  { name: "Categories" },
  { name: "Down & Parkas" },
  { name: "Jackets" },
  { name: "Vests" },
  { name: "OverCoats" },
  { name: "Blazers" },
];
export default function ProductsListHeader({
  subcategoryList,
  category,
  itemsCount,
}) {
  return (
    <div style={{ height: "20vh", background: "#f9f9f9f9", padding: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontSize: "2rem", marginRight: "1rem" }}> {category} </p>
        <p> {itemsCount} Products</p>
      </div>
      <HeaderItem data={subcategoryList} category={category} />
    </div>
  );
}
