import React from "react";
import Page from "../../components/Page/Page";
// import "./ProductsList.css";

import Header from "../../components/Header/Header";
import SingleProductComponent from "../../components/SingleProductComponent/SingleProductComponent";
import Reviews from "../../components/Reviews/Reviews";
import Pagination from "../../components/Pagination/Pagination";
import ProductsCardList from "../../components/ProductsCardList";
import MainButton from "../../components/MainButton/MainButton";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";

const centerContianer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem",
};

export default function SingleProduct() {
  return (
    <Page>
      <div className="productsList_contianer">
        <Header />
        <SingleProductComponent />
        <Reviews />
        <hr />
        <div style={centerContianer}>
          <Pagination />
        </div>
        <br />
        <h1>Pick For You</h1>
        <ProductsCardList isSingleProductPage row={2} />
        <div style={centerContianer}>
          <MainButton title="View more">
            <ArrowDropDownOutlinedIcon />
          </MainButton>
        </div>
      </div>
      
    </Page>
  );
}
