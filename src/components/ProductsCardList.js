import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import BasicProductCard from "./ProductCard/BasicProductCard";
import Grid from "@material-ui/core/Grid";

export default function ProductsCardList({ isSingleProductPage, row }) {
  return (
    <Grid container spacing={3}>
      {Array(40)
        .fill()
        .map((i) => (
          <Grid item xs={12} sm={row}>
            {isSingleProductPage ? <BasicProductCard /> : <ProductCard />}
          </Grid>
        ))}
    </Grid>
  );
}
