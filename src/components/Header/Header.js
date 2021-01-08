import React from "react";
import { Link } from "react-router-dom";
import MainLink from "../MainLink/MainLink";
import "./Header.css";

export default function Header({ data }) {
  console.log({ data });
  // const { category, subcategory } = data;
  return (
    <p className="header">
      <MainLink title="Home" pathname="/" style={{ color: "grey" }} />
      <span> 〉 {data?.category} 〉 </span>
      <span style={{ color: "black" }}>
        <Link
          to={`/${data?.category}/${data?.subcategory}`}
          style={{ color: "black" }}
        >
          {data?.subcategory}
        </Link>
      </span>
    </p>
  );
}
