import React from "react";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
import "./ProductCard.css";
import Card from "@material-ui/core/Card";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SimpleModal from "../Modal/Modal";
import SingleProductComponent from "../SingleProductComponent/SingleProductComponent";
<<<<<<< HEAD
import MainLink from "../MainLink";

const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";

export default function ProductCard({
  onClick,
  isHome,
  isSingle,
  isProductlist,
  product,
}) {
  const {
    name,
    current_price,
    raw_price,
    likes_count,
    image_url,
    id,
  } = product;
=======

const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";

export default function ProductCard({ onClick,isHome,isSingle,isProductlist }) {
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
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
<<<<<<< HEAD
        <img src={image_url} alt="product" className="cardImg" />
      </div>
      <div style={{ marginLeft: "1rem" }}>
        <MainLink
          pathname={`/product/${id}`}
          title={`${name.slice(0, 25)}...`}
        />
        <div className="rowContianer">
          <div className="row">
            <p>US${current_price}</p>
            <p className="oldPrice">US${raw_price}</p>
          </div>
          <div className="row">
            <FavoriteBorderIcon className="loveIcon" />
            <p>{likes_count} </p>
=======
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
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
          </div>
        </div>
      </div>
    </Card>
  );
}
