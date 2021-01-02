import React from "react";
import "./ProductCard.css";
import Card from "@material-ui/core/Card";
// import { Link } from "react-router-dom";
import SimpleModal from "../Modal/Modal";
import SingleProductComponent from "../SingleProductComponent/SingleProductComponent";

const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";

export default function BasicProductCard({ onClick, isHome }) {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 0 .5rem 0",
        marginRight: isHome ? "1rem" : "",
      }}
    >
      <div className="productImgContainer">
        <SimpleModal>
          <SingleProductComponent />
        </SimpleModal>
        <img src={img} alt="product" className="cardImg" />
      </div>
      {isHome && <p style={{ padding: "1.5rem" }}>bDbfSvs</p>}
      <p style={{ padding: "1.5rem" }}>US$59.99</p>
    </Card>
  );
}
