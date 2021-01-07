import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import BasicProductCard from "./ProductCard/BasicProductCard";
import Grid from "@material-ui/core/Grid";

export default function ProductsCardList({
  isSingleProductPage,
  isHome,
  row,
  onClick,
  data,
}) {
  return (
    <Grid container spacing={3}>
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <Grid item xs={12} sm={row}>
            {isSingleProductPage || isHome ? (
              <BasicProductCard onClick={onClick} product={item} isHome />
            ) : (
              <ProductCard onClick={onClick} product={item} />
            )}
          </Grid>
        ))}
    </Grid>
  );
}
