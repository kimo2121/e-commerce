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
export default function ReviewCard({ review }) {
  let width = window.innerWidth;

  return (
    <Grid container>
      <Grid item sm={12} xs={12}>
        <hr />
      </Grid>
      <Grid item sm={3} xs={12} style={{marginBottom:width < 900 ? "1rem":"" }}>
        <p > {review.username} </p>
      </Grid>
      <Grid item sm={9} xs={10}>
        <div style={{ display: "flex" }}>
          <Rating
            name="read-only"
            value={review.ratingCount}
            readOnly
            size="large"
          />
          <p style={{ marginLeft: "1rem" }}> {review.productCondition[2]} </p>
        </div>
        <p> {review.body} </p>
        {/* <ProductImgList style={imgStyles} /> */}
        <div style={{ display: "flex" }}>
          {/* <p>2020-11-26 04:21:40</p> */}
          <p> {review.createdAt} </p>
          <ThumbUpAltOutlinedIcon
            style={{ margin: ".5rem .5rem .5rem 1.5rem", fontSize: "1rem" }}
          />
          <p> {review.likesCount} </p>
        </div>
      </Grid>
    </Grid>
  );
}
