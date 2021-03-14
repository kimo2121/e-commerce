import React from "react";
import "./ProductCard.css";
import Card from "@material-ui/core/Card";
// import SimpleModal from "../Modal/Modal";
// import SingleProductComponent from "../SingleProductComponent/SingleProductComponent";
import MainLink from "../MainLink/MainLink";
// import { Link } from "react-router-dom";
import { addItem } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import MainButton from "../../components/MainButton/MainButton";

const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";

function ResProductCard({ product, onClick, mobView }) {
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
          marginBottom: mobView ? "1rem" : "",
        }}
      >
        <div
          style={{
            marginTop: "1%",
            display: "flex",
            width: "97%",
            height: "16vh",
          }}
        >
          <MainLink pathname={`/product/${product.id}`}>
            <img
              src={product.image_url}
              alt="product"
              style={{
                height: "15vh",
                width: "25vw",
                objectFit: "cover",
                marginRight: "4px",
              }}
            />
          </MainLink>
          <div>
            <MainLink
              mobView
              title={`${product.name.slice(0, 35)}...`}
              pathname={`/product/${product.id}`}
            />
            <p
              style={{
                marginBottom: "1rem",
                color: "#EA005B",
                fontWeight: "bold",
              }}
            >
              ${product.current_price}
            </p>
          </div>
        </div>
        {width < 900 && (
          <MainButton
            onClick={() => dispatch(addItem(product))}
            title="ADD TO BAG"
            style={{ width: "98%" }}
          >
            <LocalMallIcon style={{ marginRight: "5px" }} />
          </MainButton>
        )}
      </Card>
    </div>
  );
}

export default ResProductCard;
