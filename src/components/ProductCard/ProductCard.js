import React from "react";
import "./ProductCard.css";
import Card from "@material-ui/core/Card";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SimpleModal from "../Modal/Modal";
import SingleProductComponent from "../SingleProductComponent/SingleProductComponent";
import MainLink from "../MainLink/MainLink";
import { addItem } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import MainButton from "../../components/MainButton/MainButton";


const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";

export default function ProductCard({
  // onClick,
  // isHome,
  // isSingle,
  // isProductlist,
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

  const dispatch = useDispatch();
  const width = window.innerWidth;


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
        {window.innerWidth > 768 && (
          <SimpleModal>
            <SingleProductComponent product={product} />
          </SimpleModal>
        )}
         <MainLink pathname={`/product/${id}`} >
          <img src={image_url} alt="product" className="cardImg" />
          </MainLink>
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
            <p style={{margin:"5px"}}>{likes_count} </p>
          </div>
        </div>
      </div>
      { width < 768 &&   <MainButton onClick={() => dispatch(addItem(product))} title="ADD TO BAG" style={{width:"95%"}}>
            <LocalMallIcon style={{ marginRight: "5px" }} />
          </MainButton>}
    </Card>
  );
}
