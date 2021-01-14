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
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const centerContianer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem",
};
const SingleProduct = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.products.all_products);

  const product = products.find((product) => product.id === productId);
  console.log({ productId });
  console.log({ product });
  return (
    <Page>
      <div className="productsList_contianer">
        <Header data={product}  />
        <SingleProductComponent product={product} />
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
};

export default SingleProduct;
