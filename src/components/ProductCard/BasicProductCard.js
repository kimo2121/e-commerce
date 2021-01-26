import React from "react";
import "./ProductCard.css";
import Card from "@material-ui/core/Card";
import SimpleModal from "../Modal/Modal";
import SingleProductComponent from "../SingleProductComponent/SingleProductComponent";
import MainLink from "../MainLink/MainLink";
// import {Link} from "react-router-dom";
import { addItem } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import MainButton from "../../components/MainButton/MainButton";

const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";

function BasicProductCard({ product, onClick, isHome }) {
  const dispatch = useDispatch();
const width = window.innerWidth;
  return (
    <div>
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 0 .5rem 0",
          marginRight: isHome ? "1rem" : "",
          marginBottom: isHome ? "2rem" : "",
          maxHeight: isHome ? "400px" : "",
        }}
      >
        <div className="productImgContainer">
          {width > 900 && 
          <SimpleModal>
            <SingleProductComponent product={product} />
          </SimpleModal>
          }
          <MainLink pathname={`/product/${product.id}`} >
          <img src={product.image_url} alt="product" className="cardImg" />
          </MainLink>
        </div>
        {isHome && (
          <MainLink
            title={`${product.name.slice(0, 15)}...`}
            pathname={`/product/${product.id}`}
          />
        )}
        <p style={{ marginBottom: "1rem" }}>${product.current_price}</p>
         { width < 900 &&   <MainButton onClick={() => dispatch(addItem(product))} title="ADD TO BAG" style={{width:"95%"}}>
            <LocalMallIcon style={{ marginRight: "5px" }} />
          </MainButton>}
      </Card>
    </div>
  );
}

export default BasicProductCard;
