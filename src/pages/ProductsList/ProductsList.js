import React, { useEffect } from "react";
import "./ProductsList.css";
import ProductsCardList from "../../components/ProductsCardList";
import Page from "../../components/Page/Page";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header";
import Filter from "../../components/Filter/Filter";
import ProductsListHeader from "../../components/ProductsListHeader/ProductsListHeader";
import Menu from "../../components/Menu/Menu";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSubcategories, sortList } from "../../util/util_functions";

const menuData = [
  { item: "Most Popular" },
  { item: "New Arrival" },
  { item: "Price High to Low" },
  { item: "Price Low to High" },
  { item: "Recommend" },
];

export default function ProductsList() {
  const products = useSelector((state) => state.products.all_products);
  const [filterTerm, setFilterTerm] = React.useState("");
  const [sortedList, setSortedList] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    // console.log("true");
  };

  const { category, subcategory } = useParams();

  const filteredData = products.filter(
    (item) =>
      item.category.toUpperCase().includes(category.toUpperCase()) &&
      item.subcategory.toUpperCase().includes(subcategory.toUpperCase())
  );

  const subcategories = getSubcategories(products, category);
  // console.log({ subcategories });
  const sortedData = sortList(filterTerm, filteredData);

  useEffect(() => {
    if (filteredData) {
      if (filterTerm === "New Arrival" || "Recommend") {
        const sortedData = filteredData.filter((i) => i.is_new === "true");
        setSortedList(sortedData);
      } else {
        const sortedData = sortList(filterTerm, filteredData);
        setSortedList(sortedData);
      }
    }
  }, [filterTerm]);
  // console.log({ filteredData });
  console.log({ sortedList });
  // console.log({ filterTerm });

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
              subcategoryList={subcategories}
            />
          </Grid>
          <Grid item xs={10} style={{ overflow: "scroll", height: "75vh" }}>
            <Grid item xs={12}>
              <ProductsListHeader
                itemsCount={filteredData.length}
                subcategoryList={subcategories}
                category={filteredData[0]?.category}
                subcategory={subcategory}
              />
            </Grid>
            <Grid container style={{ margin: "10px 0px" }}>
              <Grid item xs={2}>
                <Menu data={menuData} setFilterTerm={setFilterTerm} />
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
              // data={filteredData}
              data={sortedList.length > 0 ? sortedList : filteredData}
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
