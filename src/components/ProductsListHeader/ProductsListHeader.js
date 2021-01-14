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
<<<<<<< HEAD
  subcategory,
  itemsCount,
}) {
  return (
    <div
      style={{
        maxHeight: "20vh",
        background: "#f9f9f9f9",
        padding: "1rem",
        overflow: "scroll",
      }}
    >
=======
  itemsCount,
}) {
  return (
    <div style={{ height: "20vh", background: "#f9f9f9f9", padding: "1rem" }}>
>>>>>>> 8afad4c7bdae8f19a965980e003bde751923118a
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontSize: "2rem", marginRight: "1rem" }}> {category} </p>
        <p> {itemsCount} Products</p>
      </div>
<<<<<<< HEAD

      <HeaderItem
        data={subcategoryList}
        category={category}
        subcategory={subcategory}
      />
=======
      <HeaderItem data={subcategoryList} category={category} />
>>>>>>> 8afad4c7bdae8f19a965980e003bde751923118a
    </div>
  );
}
