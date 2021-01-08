import React from "react";
import "./ProductsList.css";
import ProductsCardList from "../../components/ProductsCardList";
import Page from "../../components/Page/Page";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header";
import Filter from "../../components/Filter/Filter";
import ProductsListHeader from "../../components/ProductsListHeader/ProductsListHeader";
import Menu from "../../components/Menu/Menu";
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
  // const handleClose = () => {
  //   setOpen(false);
  //   console.log("false");
  // };

  const { category, subcategory } = useParams();
  console.log({ category });
  console.log({ subcategory });
  const filteredData = products.filter(
    (item) =>
      item.category.toUpperCase().includes(category.toUpperCase()) &&
      item.subcategory.toUpperCase().includes(subcategory.toUpperCase())
  );
  console.log({ filteredData });
  console.log({ products });
  let subcategoryList = [];
  products.sort((a, b) => {
    if (a.subcategory !== b.subcategory) {
      console.log(a.subcategory);
      subcategoryList.push(a.subcategory);
    }
  });

  subcategoryList.length > 0 && console.log({ subcategoryList });
  return (
    <Page>
      <div className="productsList_contianer">
        <Header
          data={filteredData && filteredData.length > 0 && filteredData[0]}
        />
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Filter
              category={filteredData[0]?.category}
              subcategoryList={subcategoryList}
            />
          </Grid>
          <Grid item xs={10} style={{ overflow: "scroll", height: "75vh" }}>
            <Grid item xs={12}>
              <ProductsListHeader
                itemsCount={filteredData.length}
                subcategoryList={subcategoryList}
                category={filteredData[0]?.category}
              />
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
              open={open}
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
