import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import BasicProductCard from "./ProductCard/BasicProductCard";
import Grid from "@material-ui/core/Grid";

export default function ProductsCardList({
  isSingleProductPage,
<<<<<<< HEAD
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
=======
  row,
  onClick,
}) {
  return (
    <Grid container spacing={3}>
      {Array(40)
        .fill()
        .map((i) => (
          <Grid item xs={12} sm={row}>
            {isSingleProductPage ? (
              <BasicProductCard onClick={onClick} />
            ) : (
              <ProductCard onClick={onClick} />
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
            )}
          </Grid>
        ))}
    </Grid>
  );
}
