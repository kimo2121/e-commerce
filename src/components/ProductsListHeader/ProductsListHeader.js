import React from "react";
import HeaderItemList from "./HeaderItem";

export default function ProductsListHeader() {
  return (
    <div style={{ height: "20vh", background: "#f9f9f9f9", padding: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontSize: "2rem", marginRight: "1rem" }}>Buttoms</p>
        <p>633 Products</p>
      </div>
      <HeaderItemList />
    </div>
  );
}
