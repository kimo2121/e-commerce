import React from "react";
import Page from "../../components/Page/Page";
// import "./ProductsList.css";
<<<<<<< HEAD
=======

>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
import Header from "../../components/Header/Header";
import SingleProductComponent from "../../components/SingleProductComponent/SingleProductComponent";
import Reviews from "../../components/Reviews/Reviews";
import Pagination from "../../components/Pagination/Pagination";
import ProductsCardList from "../../components/ProductsCardList";
import MainButton from "../../components/MainButton/MainButton";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
<<<<<<< HEAD
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
=======
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2

const centerContianer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem",
};
<<<<<<< HEAD
const SingleProduct = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
=======

export default function SingleProduct() {
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
  return (
    <Page>
      <div className="productsList_contianer">
        <Header />
<<<<<<< HEAD
        <SingleProductComponent product={product} />
=======
        <SingleProductComponent />
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
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
<<<<<<< HEAD
    </Page>
  );
};
const mapStateToProps = (state) => ({
  products: state.products.products,
});
export default connect(mapStateToProps)(SingleProduct);
=======
      
    </Page>
  );
}
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
