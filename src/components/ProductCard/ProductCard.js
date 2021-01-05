import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import Card from "@material-ui/core/Card";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SimpleModal from "../Modal/Modal";
import SingleProductComponent from "../SingleProductComponent/SingleProductComponent";

const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";

export default function ProductCard({
  onClick,
  isHome,
  isSingle,
  isProductlist,
  product,
}) {
  const {
    category,
    subcategory,
    name,
    current_price,
    raw_price,
    currency,
    discount,
    likes_count,
    is_new,
    brand,
    brand_url,
    codCountry,
    variation_0_color,
    variation_1_color,
    variation_0_thumbnail,
    variation_0_image,
    variation_1_thumbnail,
    variation_1_image,
    image_url,
    id,
    model,
  } = product;
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
        <img src={image_url} alt="product" className="cardImg" />
      </div>
      <div style={{ marginLeft: "1rem" }}>
        <Link to={window.location.pathname}>{name} </Link>
        <div className="rowContianer">
          <div className="row">
            <p>US${current_price}</p>
            <p className="oldPrice">US${raw_price}</p>
          </div>
          <div className="row">
            <FavoriteBorderIcon className="loveIcon" />
            <p>{likes_count} </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
