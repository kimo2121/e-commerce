import React from "react";
import "./ProductCard.css";
import Card from "@material-ui/core/Card";
const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";

export default function BasicProductCard() {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 0 .5rem 0",
      }}
    >
      <img src={img} alt="product" className="cardImg" />
      <p style={{ padding: "1.5rem" }}>US$59.99</p>
    </Card>
  );
}
