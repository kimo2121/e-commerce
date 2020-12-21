import React from "react";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ProductImgList from "../../components/ProductImgList/ProductImgList";

const imgStyles = {
  width: "5rem",
  height: "5rem",
  objectFit: "contain",
  margin: ".5rem 0px",
};
export default function ReviewCard() {
  return (
    <Grid container>
      <Grid sm={12} xs={12}>
        <hr />
      </Grid>
      <Grid sm={3} xs={2}>
        <p> username </p>
      </Grid>
      <Grid sm={9} xs={10}>
        <div style={{ display: "flex" }}>
          <Rating name="read-only" value={5} readOnly size="larg" />
          <p style={{ marginLeft: "1rem" }}>True to size</p>
        </div>
        <p>What you see is what you get.</p>
        <ProductImgList style={imgStyles} />
        <div style={{ display: "flex" }}>
          <p>2020-11-26 04:21:40</p>
          <ThumbUpAltOutlinedIcon
            style={{ margin: ".5rem .5rem .5rem 1.5rem", fontSize: "1rem" }}
          />
          <p>1</p>
        </div>
      </Grid>
    </Grid>
  );
}
