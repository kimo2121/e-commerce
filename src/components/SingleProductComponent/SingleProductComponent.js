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
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";

const SingleProductComponent = ({ addItem, product }) => {
  const [image, setImage] = React.useState("");
  console.log({ image });
  console.log({ product });

  return (
    <Grid container>
      <Grid item sm={5} xs={12}>
        <div
          style={{
            display: "flex",
            padding: "0rem 1rem",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "12%", height: "100%" }}>
            <VerticalSlider setImage={setImage} data={product} />
          </div>
          <img
            src={image !== "" ? image : product?.image_url}
            // src={img}
            alt="product"
            style={{ width: "90%", height: "100%" }}
          />
        </div>
      </Grid>
      <Grid item sm={7} xs={12}>
        <p>{product?.name}</p>
        <div style={{ display: "flex" }}>
          <p>{product?.model}</p>
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
          <h1 style={{ color: "red" }}>{product?.current_price}</h1>
          <p className="oldPrice">{product?.raw_price}</p>
          <div style={{ background: "#ffcccb", color: "red" }}>-20%</div>
        </div>
        <div>
          <h2 style={{ color: "black" }}>color:red</h2>
          <ProductImgList isSingleProduct data={product} setImage={setImage} />
        </div>
        <Menu btnName="Size:" data={menuData} />
        {/* <HeaderItem data={headerItemData} /> */}
        <div style={{ display: "flex", margin: "1rem" }}>
          <MainButton onClick={() => addItem(product)} title="ADD TO BAG">
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
            <p>{product?.likes_count}</p>
          </div>
        </div>
        <List title="Description">
          <ProducatDescription />
        </List>
      </Grid>
    </Grid>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (product) => dispatch(addItem(product)),
});

export default connect(null, mapDispatchToProps)(SingleProductComponent);
