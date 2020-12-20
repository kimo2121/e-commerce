import React from "react";
import Page from "../../components/Page/Page";
import "./ProductsList.css";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header";
import Filter from "../../components/Filter/Filter";
import ProductsListHeader from "../../components/ProductsListHeader/ProductsListHeader";
import ProductCard from "../../components/ProductCard/ProductCard";
import Menu from "../../components/Menu/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const data = [
  { item: "Most Popular" },
  { item: "New Arrival" },
  { item: "Price High to Low " },
  { item: "Price Low to High " },
  { item: "Recommend " },
];

export default function ProductsList() {
  return (
    <Page>
      <div className="productsList_contianer">
        <Header />
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Filter />
          </Grid>
          <Grid item xs={10} style={{ overflow: "scroll", height: "75vh" }}>
            <Grid item xs={12}>
              <ProductsListHeader />
            </Grid>
            <Grid container style={{ margin: "10px 0px" }}>
              <Grid item xs={2}>
                <Menu data={data} />
              </Grid>
              <Grid item xs={8}>
                ship in 24 hours
              </Grid>
              <Grid item xs={2}>
                {` < >`}
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              {Array(40)
                .fill()
                .map((i) => (
                  <Grid item xs={12} sm={3}>
                    <ProductCard />
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Page>
  );
}
