import React from "react";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Menu from "../../components/Menu/Menu";
import { menuData, headerItemData } from "./data";
import ProductImgList from "../../components/ProductImgList/ProductImgList";
import { RiHeart2Line } from "react-icons/ri";
import HeaderItem from "../../components/HeaderItem/HeaderItem";
import List from "../../components/List/List";
import ProducatDescription from "../../components/ProducatDescription/ProducatDescription";
import VerticalSlider from "../../components/VerticalSlider/VerticalSlider";
import MainButton from "../../components/MainButton/MainButton";
<<<<<<< HEAD
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";

const SingleProductComponent = ({ addItem, product }) => {
=======

const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";

export default function SingleProductComponent({product }) {
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
  const [image, setImage] = React.useState("");
  console.log({ image });
  return (
    <Grid container>
      <Grid item sm={5} xs={12}>
        <div
          style={{
            display: "flex",
            padding: "0 1rem",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "10%", height: "100%" }}>
<<<<<<< HEAD
            <VerticalSlider setImage={setImage} data={product} />
          </div>
          <img
            src={image !== "" ? image : product.image_url}
            // src={product && product.image_url}
=======
            <VerticalSlider setImage={setImage} />
          </div>
          <img
            // src={imgae !== "" ? image : img}
            src={image}
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
            alt="product"
            style={{ width: "90%", height: "100%" }}
          />
        </div>
      </Grid>
      <Grid item sm={7} xs={12}>
<<<<<<< HEAD
        <p>{product && product.name}</p>
        <div style={{ display: "flex" }}>
          <p>{product && product.model}</p>
=======
        <p>Mens Solid Color Baggy Loose Drawstring Casual Cotton Harem Pants</p>
        <div style={{ display: "flex" }}>
          <p>productId:51465465</p>
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "1rem",
            }}
          >
            <Rating name="read-only" value={5} readOnly size="small" />
            <p>10 Reviews</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
<<<<<<< HEAD
          <h1 style={{ color: "red" }}>{product && product.current_price}</h1>
          <p className="oldPrice">{product && product.raw_price}</p>
=======
          <h1 style={{ color: "red" }}>US$40.99</h1>
          <p className="oldPrice">US$40.99</p>
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
          <div style={{ background: "#ffcccb", color: "red" }}>-20%</div>
        </div>
        <div>
          <h2 style={{ color: "black" }}>color:red</h2>
<<<<<<< HEAD
          <ProductImgList isSingleProduct data={product} setImage={setImage} />
        </div>
        <Menu btnName="Size:" data={menuData} />
        <HeaderItem data={headerItemData} />
        <div style={{ display: "flex", margin: "1rem" }}>
          <MainButton onClick={addItem(product)} title="ADD TO BAG">
=======
          <ProductImgList isSingleProduct />
        </div>
        <Menu btnName="Size:" data={menuData} />
          <HeaderItem data={headerItemData} />
        <div style={{ display: "flex", margin: "1rem" }}>
          <MainButton title="ADD TO BAG">
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
            <LocalMallIcon style={{ marginRight: "5px" }} />
          </MainButton>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <RiHeart2Line style={{ fontSize: "2rem" }} />
<<<<<<< HEAD
            <p>{product && product.likes_count}</p>
=======
            <p>255</p>
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
          </div>
        </div>
        <List title="Description">
          <ProducatDescription />
        </List>
      </Grid>
    </Grid>
  );
<<<<<<< HEAD
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (product) => dispatch(addItem(product)),
});

export default connect(null, mapDispatchToProps)(SingleProductComponent);
=======
}
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
