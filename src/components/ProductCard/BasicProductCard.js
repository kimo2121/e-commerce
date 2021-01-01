import React from "react";
import "./ProductCard.css";
import Card from "@material-ui/core/Card";
// import { Link } from "react-router-dom";
const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";

export default function BasicProductCard({ onClick }) {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 0 .5rem 0",
      }}
    >
      {/* <div className="productImgContainer">
        <Link onClick={onClick} className="productLink">
          Quick View
        </Link>
        <img src={img} alt="product" className="cardImg" />
      </div> */}
      <img src={img} alt="product" className="cardImg" />
      <p style={{ padding: "1.5rem" }}>US$59.99</p>
    </Card>
  );
}
