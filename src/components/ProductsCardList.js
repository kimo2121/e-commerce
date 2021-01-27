import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import BasicProductCard from "./ProductCard/BasicProductCard";
import ResProductCard from "./ProductCard/ResProductCard";
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
<<<<<<< HEAD
        data.map((item, indx) => (
          <Grid item xs={12} sm={row} key={indx}>
=======
        data.map((item) => (
          <Grid item xs={12} sm={row}>
>>>>>>> ae8fa3b05d3dfa8fc54973f9cd6bd1ccb0d6e29d
            {window.innerWidth < 900 ? (
              <ResProductCard onClick={onClick} product={item} />
            ) : isSingleProductPage || isHome ? (
              <BasicProductCard onClick={onClick} product={item} isHome />
            ) : (
              <ProductCard onClick={onClick} product={item} />
            )}
          </Grid>
        ))}
    </Grid>
  );
}
