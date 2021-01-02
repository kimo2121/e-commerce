import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import Card from "@material-ui/core/Card";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SimpleModal from "../Modal/Modal";
import SingleProductComponent from "../SingleProductComponent/SingleProductComponent";

const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";

export default function ProductCard({ onClick,isHome,isSingle,isProductlist }) {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0 0 .5rem 0",
        position: "relative",
      }}
    >
      <div className="productImgContainer">
        <SimpleModal>
          <SingleProductComponent />
        </SimpleModal>
        <img src={img} alt="product" className="cardImg" />
      </div>
      <div style={{ marginLeft: "1rem" }}>
        <Link>product name </Link>
        <div className="rowContianer">
          <div className="row">
            <p>US$40.99</p>
            <p className="oldPrice">US$40.99</p>
          </div>
          <div className="row">
            <FavoriteBorderIcon className="loveIcon" />
            <p>255</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
