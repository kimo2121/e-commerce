import React, { useState } from "react";
import "./search-component.css";
import { Input } from "antd";
import "antd/dist/antd.css";
// import _ from "lodash";
import { useSelector } from "react-redux";

// import { Search } from "semantic-ui-react";
// import { Grid } from "semantic-ui-react";

import MainLink from "../MainLink/MainLink";
// const madCar = [
//   "potatos",
//   "tomato",
//   "watermelon",
//   "ketchup",
//   "pineapple",
//   "apple",
//   "rice",
//   "beans",
//   "corn",
// ];
const SearchComponent = ({ isWebView }) => {
  const all_products = useSelector((state) => state.products.all_products);

  const onSearch = (value) => console.log(value);
  const { Search } = Input;

  const [search, setSearch] = useState("");
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const onSearchClick = () => {
    setSearch("");
  };

  console.log(search);
  return (
    <div>
      <Search
        className={isWebView ? "search-component" : ""}
        //   loading={loading}
        onSearch={onSearch}
        onChange={onChangeHandler}
        //   results={results}
        //   value={value}
        style={{
          width: "100vw",
        }}
      />
      <div
        className={
          isWebView ? "search-results-for-web" : "search-results-for-mobile"
        }
      >
        {all_products
          .filter((value) => {
            if (search === "") {
              return value.name;
            } else if (
              value.name.toLowerCase().includes(search.toLowerCase())
              // value.subcategory.toLowerCase().includes(search.toLowerCase())
            ) {
              return value.name;
            }
            return value.name;
          })
          .slice(0, 9)
          .map((value, index) => {
            if (search !== "") {
              return (
                <MainLink
                  pathname={`/${value.category}/${value.subcategory}`}
                  onClick={onSearchClick}
                >
                  <div
                    className={
                      isWebView ? "search_results_web" : "search_results"
                    }
                    key={index}
                    style={{ display: "flex", margin: "5px 0" }}
                  >
                    <img
                      src={value.variation_0_thumbnail}
                      alt="product"
                      style={{
                        width: "50px",
                        hight: "50px",
                        marginRight: "4px",
                      }}
                    />
                    <h5>{value.name}</h5>
                  </div>
                </MainLink>
              );
            }
            return value;
          })}
      </div>
    </div>
  );
};

export default SearchComponent;
