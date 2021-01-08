import React from "react";
import "./ProductCard.css";
import Card from "@material-ui/core/Card";
import SimpleModal from "../Modal/Modal";
import SingleProductComponent from "../SingleProductComponent/SingleProductComponent";
import MainLink from "../MainLink/MainLink";

const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";

function BasicProductCard({ product, onClick, isHome }) {
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
          <SimpleModal>
            <SingleProductComponent product={product} />
          </SimpleModal>
          <img src={product.image_url} alt="product" className="cardImg" />
        </div>
        {isHome && (
          <MainLink
            title={`${product.name.slice(0, 15)}...`}
            pathname={`/product/${product.id}`}
          />
        )}
        <p style={{ marginBottom: "1rem" }}>${product.current_price}</p>
      </Card>
    </div>
  );
}

export default BasicProductCard;
