import React from "react";
import "./ProductsList.css";
import ProductsCardList from "../../components/ProductsCardList";
import Page from "../../components/Page/Page";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header";
import Filter from "../../components/Filter/Filter";
import ProductsListHeader from "../../components/ProductsListHeader/ProductsListHeader";
import Menu from "../../components/Menu/Menu";
import ModalCard from "../../components/Modal/Modal";
import SingleProductComponent from "../../components/SingleProductComponent/SingleProductComponent";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const data = [
  { item: "Most Popular" },
  { item: "New Arrival" },
  { item: "Price High to Low " },
  { item: "Price Low to High " },
  { item: "Recommend " },
];

export default function ProductsList() {
  const products = useSelector((state) => state.products.products);
  const [open, setOpen] = React.useState(false);
  // console.log({ open });

  const handleOpen = () => {
    setOpen(true);
    console.log("true");
  };
  const handleClose = () => {
    setOpen(false);
    console.log("false");
  };

  const { category, subcategory } = useParams();
  console.log({ category });
  console.log({ subcategory });
  const filteredData = products.filter(
    (item) => item.category == category && item.subcategory == subcategory
  );
  console.log({ filteredData });
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
            <ProductsCardList
              onClick={handleOpen}
              row={3}
              data={filteredData}
            />
            {/* <ModalCard handleClose={handleClose} open={open}>
              <SingleProductComponent />
            </ModalCard> */}
          </Grid>
        </Grid>
      </div>
    </Page>
  );
}
