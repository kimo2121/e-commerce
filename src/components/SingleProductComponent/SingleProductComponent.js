import React from "react";
import { Rating } from "semantic-ui-react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LocalMallIcon from "@material-ui/icons/LocalMall";
// import Rating from "@material-ui/lab/Rating";
import Menu from "../../components/Menu/Menu";
import { menuData, headerItemData } from "./data";
import ProductImgList from "../../components/ProductImgList/ProductImgList";
import { RiHeart2Line } from "react-icons/ri";
import HeaderItem from "../../components/HeaderItem/HeaderItem";
import List from "../../components/List/List";
import ProducatDescription from "../../components/ProducatDescription/ProducatDescription";
import VerticalSlider from "../../components/VerticalSlider/VerticalSlider";

const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";

export default function SingleProductComponent() {
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
            <VerticalSlider />
          </div>
          <img src={img} alt="" style={{ width: "90%", height: "100%" }} />
        </div>
      </Grid>
      <Grid item sm={7} xs={12}>
        <p>Mens Solid Color Baggy Loose Drawstring Casual Cotton Harem Pants</p>
        <Rating defaultRating={3} maxRating={5} disabled />
        <div style={{ display: "flex" }}>
          <p>productId:51465465</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ color: "red" }}>US$40.99</h1>
          <p className="oldPrice">US$40.99</p>
          <div style={{ background: "#ffcccb", color: "red" }}>-20%</div>
        </div>
        <div>
          <h3 style={{ color: "black" }}>color</h3>
          <ProductImgList isSingleProduct />
        </div>
        <Menu btnName="Size:" data={menuData} />
        <HeaderItem data={headerItemData} />
        <div style={{ display: "flex", margin: "1rem" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "20vw", marginRight: "1rem" }}
          >
            <LocalMallIcon style={{ marginRight: "5px" }} />
            ADD TO BAG
          </Button>
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
