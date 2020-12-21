import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import Card from "@material-ui/core/Card";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import Men from "../../assets/shop-data/MenNew";
const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";
export default function ProductCard() {
  return (
    <Card
      style={{
        minWidth: "15%",
        marginRight: "2%",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        padding: "0 0 4px 0",
      }}
    >
      {/* {Men.map((item) => {
        <div> */}
      <img src={img} alt="product" className="cardImg" />
      <Link to="/"> product name </Link>
      <div className="rowcContianer">
        <div className="row">
          <p> US $50.99</p>
          <p className="oldPrice"> US $60.99</p>
        </div>
        <div className="row">
          <FavoriteBorderIcon className="loveIcon" />
          <p>299</p>
        </div>
      </div>
      {window.location.pathname !== "/" && (
        <div>
          {Array(4)
            .fill()
            .map((i) => (
              <img src={img} alt="product" className="smallImg" />
            ))}
        </div>
      )}
      {/* </div>; */}
      {/* })} */}
    </Card>
  );
}
