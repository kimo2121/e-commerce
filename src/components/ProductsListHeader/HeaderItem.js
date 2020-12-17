import React from "react";

const headerItmes = [
  { name: "Categories" },
  { name: "Down & Parkas" },
  { name: "Jackets" },
  { name: "Vests" },
  { name: "OverCoats" },
  { name: "Blazers" },
];
export default function HeaderItem() {
  return (
    <div style={{ display: "flex" }}>
      {headerItmes.map((i) => (
        <div
          style={{
            border: "1px solid black",
            margin: "0 1rem",
            padding: ".5rem",
            background: "white",
          }}
        >
          {i.name}{" "}
        </div>
      ))}
    </div>
  );
}
