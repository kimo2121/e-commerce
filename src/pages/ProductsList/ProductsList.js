import React, { useEffect, useState } from "react";
import "./ProductsList.css";
import ProductsCardList from "../../components/ProductsCardList";
import Page from "../../components/Page/Page";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header";
import Filter from "../../components/Filter/Filter";
import PopoverMUI from "../../components/PopoverMUI";
// import ProductsListHeader from "../../components/ProductsListHeader/ProductsListHeader";
import Menu from "../../components/Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { Checkbox } from "semantic-ui-react";
import SortIcon from "@material-ui/icons/Sort";
import { sortList, getSubcategories } from "../../util/util_functions";
import { addFilterPrice } from "../../redux/products/product.action";
import FilterListRoundedIcon from "@material-ui/icons/FilterListRounded";
import { Card } from "@material-ui/core";

const data = [
  { item: "Most Popular" },
  { item: "New Arrival" },
  { item: "Price High to Low" },
  { item: "Price Low to High" },
  { item: "Recommend" },
];

export default function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.all_products);
  const priceFilterArray = useSelector((state) => state.products.priceFilter);
  const colorsFilter = useSelector((state) => state.products.colorsFilter);
  const [open, setOpen] = useState(false);
  const [term, setTerm] = useState("");
  const [productsToShow, setproductsToShow] = useState([]);
  // const [priceFilterdData, setPriceFilterdData] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };
  const { category, subcategory } = useParams();

  useEffect(() => {
    const filteredData = products.filter(
      (item) =>
        item.category.toUpperCase().includes(category.toUpperCase()) &&
        item.subcategory.toUpperCase().includes(subcategory.toUpperCase())
    );
    setproductsToShow(filteredData);
  }, [category, subcategory, products]);
  console.log({ products });

  //getSubcategories
  const subcategories = getSubcategories(products, category);
  console.log({ subcategories });

  // sort by Term
  useEffect(() => {
    const filteredData = products.filter(
      (item) =>
        item.category.toUpperCase().includes(category.toUpperCase()) &&
        item.subcategory.toUpperCase().includes(subcategory.toUpperCase())
    );

    let sortedList = sortList(term, filteredData);
    setproductsToShow(sortedList);
    console.log({ sortedList });
  }, [term, products, category, subcategory]);

  // sort by current_price
  useEffect(() => {
    const priceFilter = productsToShow.sort(function (a, b) {
      return a.current_price - b.current_price;
    });
    console.log({ priceFilter });
    dispatch(addFilterPrice(priceFilter));
  }, [productsToShow, dispatch]);

  // price filter
  useEffect(() => {
    const priceFilter2 = productsToShow.filter(
      (i) =>
        priceFilterArray[0] <= i.current_price &&
        priceFilterArray[1] >= i.current_price
    );
    // setPriceFilterdData(priceFilter2);
    priceFilterArray.length > 0 && setproductsToShow(priceFilter2);
    console.log({ productsToShow });
    console.log({ priceFilterArray });
    console.log({ priceFilter2 });
  }, [priceFilterArray, productsToShow]);

  // sort by colorsFilter
  useEffect(() => {
    const colorsFilterArray = productsToShow.filter(
      (i) =>
        colorsFilter.includes(i.variation_0_color) ||
        colorsFilter.includes(i.variation_1_color)
    );
    // setPriceFilterdData(colorsFilterArray);
    colorsFilter.length > 0 && setproductsToShow(colorsFilterArray);

    console.log({ colorsFilterArray });
  }, [colorsFilter, productsToShow]);

  let width = window.innerWidth;
  return (
    <Page>
      <div className="productsList_contianer">
        <Header data={productsToShow[0]} />
        <br />
        <Grid container spacing={3}>
          {width > 900 && (
            <Grid item xs={2}>
              <Filter
                category={productsToShow[0]?.category}
                subcategoryList={subcategories}
              />
            </Grid>
          )}
          <Grid item xs={10}>
            <Grid item xs={12}>
              {/* <ProductsListHeader
                itemsCount={filteredData.length}
                subcategoryList={subcategoryList}
                category={filteredData[0]?.category}
              /> */}
            </Grid>
            <Grid container>
              <Grid item sm={2} xs={12}>
                {window.innerWidth > 900 ? (
                  <Menu
                    data={data}
                    // firstItem={data[0].item}
                    icon={<SortIcon />}
                    nameProp="sort"
                    setFilterTerm={setTerm}
                  />
                ) : (
                  <Card
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "1rem auto",
                      // padding:"4px"
                    }}
                  >
                    <Menu
                      data={data}
                      // firstItem={data[0].item}
                      icon={<SortIcon />}
                      nameProp="sort"
                      setFilterTerm={setTerm}
                    />

                    <div style={{ display: "flex", alignItems: "center" }}>
                      <PopoverMUI icon={<FilterListRoundedIcon />}>
                        <div style={{ width: "80vw" }}>
                          <Filter
                            category={productsToShow[0]?.category}
                            subcategoryList={subcategories}
                          />
                        </div>
                      </PopoverMUI>
                      {/* <p>Filter</p> */}
                    </div>
                  </Card>
                )}
              </Grid>
              {/* <Grid item xs={8}>
                ship in 24 hours
                <Checkbox></Checkbox>
              </Grid> */}
              <Grid item xs={2}>
                {/* {` < >`} */}
              </Grid>
            </Grid>
            <div
              style={{
                overflow: "scroll",
                height: "75vh",
                width: width > 900 ? "95%" : "",
              }}
            >
              <ProductsCardList
                onClick={handleOpen}
                row={3}
                data={
                  // priceFilterdData.length > 0
                  //   ? priceFilterdData
                  //   : productsToShow
                  productsToShow
                }
                open={open}
              />
            </div>
            {/* <ModalCard handleClose={handleClose} open={open}>
              <SingleProductComponent />
            </ModalCard> */}
          </Grid>
        </Grid>
      </div>
    </Page>
  );
}
