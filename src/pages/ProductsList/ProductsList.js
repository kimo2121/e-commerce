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

export default function ProductsList() {
  return (
    <Page>
      <div className="productsList_contianer">
        <Header />
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Filter />
          </Grid>
          <Grid item xs={10}>
            <Grid item xs={12}>
              <ProductsListHeader />
            </Grid>
            <Grid container style={{ margin: "10px 0px" }}>
              <Grid item xs={2}>
                <Menu />
              </Grid>
              <Grid item xs={8}>
                ship in 24 hours
              </Grid>
              <Grid item xs={2}>
                {` < >`}
              </Grid>
            </Grid>
            <Grid  container spacing={3}>
              {Array(40)
                .fill()
                .map((i) => (
                  <Grid item xs={3} sm={3}>
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
