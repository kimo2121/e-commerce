import React from "react";
import Page from "../../components/Page/Page";
// import "./ProductsList.css";

import Header from "../../components/Header/Header";
import SingleProductComponent from "../../components/SingleProductComponent/SingleProductComponent";

export default function SingleProduct() {
  return (
    <Page>
      <div className="productsList_contianer">
        <Header />
        <SingleProductComponent />
      </div>
    </Page>
  );
}
