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

const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";

export default function SingleProductComponent({product }) {
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
            <VerticalSlider setImage={setImage} />
          </div>
          <img
            // src={imgae !== "" ? image : img}
            src={image}
            alt="product"
            style={{ width: "90%", height: "100%" }}
          />
        </div>
      </Grid>
      <Grid item sm={7} xs={12}>
        <p>Mens Solid Color Baggy Loose Drawstring Casual Cotton Harem Pants</p>
        <div style={{ display: "flex" }}>
          <p>productId:51465465</p>
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
          <h1 style={{ color: "red" }}>US$40.99</h1>
          <p className="oldPrice">US$40.99</p>
          <div style={{ background: "#ffcccb", color: "red" }}>-20%</div>
        </div>
        <div>
          <h2 style={{ color: "black" }}>color:red</h2>
          <ProductImgList isSingleProduct />
        </div>
        <Menu btnName="Size:" data={menuData} />
          <HeaderItem data={headerItemData} />
        <div style={{ display: "flex", margin: "1rem" }}>
          <MainButton title="ADD TO BAG">
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
            <p>255</p>
          </div>
        </div>
        <List title="Description">
          <ProducatDescription />
        </List>
      </Grid>
    </Grid>
  );
}
