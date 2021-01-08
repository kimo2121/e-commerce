import React from "react";
import "./ProductCard.css";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import SimpleModal from "../Modal/Modal";
import SingleProductComponent from "../SingleProductComponent/SingleProductComponent";

function BasicProductCard({ product, onClick, isHome }) {
  return (
    <div>
      {/* {product.map((product) => ( */}
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
          <SimpleModal>
            <SingleProductComponent product={product} />
          </SimpleModal>
          <img src={product.image_url} alt="product" className="cardImg" />
        </div>
        {isHome && (
          <Link
            // to={window.location.pathname}
            to={`product/${product.id}`}
            style={{ fontSize: ".8rem", marginTop: "1rem", color: "grey" }}
          >
            {product.name}
          </Link>
        )}
        <p style={{ marginBottom: "1rem" }}>${product.current_price}</p>
      </Card>
      {/* ))} */}
    </div>
  );
}

export default BasicProductCard;
