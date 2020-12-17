import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import Card from "@material-ui/core/Card";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";
export default function ProductCard() {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0 0 .5rem 0",
      }}
    >
      <img src={img} alt="product" className="cardImg" />
      <Link>product name </Link>
      <div className="rowcContianer">
        <div className="row">
          <p>US$40.99</p>
          <p className="oldPrice">US$40.99</p>
        </div>
        <div className="row">
          <FavoriteBorderIcon className="loveIcon" />
          <p>255</p>
        </div>
      </div>

      <div>
        {Array(4)
          .fill()
          .map((i) => (
            <img src={img} alt="product" className="smallImg" />
          ))}
      </div>
    </Card>
  );
}
