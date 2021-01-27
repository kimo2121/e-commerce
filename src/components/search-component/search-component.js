import React, { useState } from "react";
import "./search-component.css";
import { Input } from "antd";
import "antd/dist/antd.css";
<<<<<<< HEAD
import { useSelector } from "react-redux";

import MainLink from "../MainLink/MainLink";

=======
import _ from "lodash";
import { useSelector } from "react-redux";

// import { Search } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
const madCar = [
  "potatos",
  "tomato",
  "watermelon",
  "ketchup",
  "pineapple",
  "apple",
  "rice",
  "beans",
  "corn",
];
>>>>>>> ae8fa3b05d3dfa8fc54973f9cd6bd1ccb0d6e29d
const SearchComponent = ({ isWebView }) => {
  const all_products = useSelector((state) => state.products.all_products);

  const onSearch = (value) => console.log(value);
  const { Search } = Input;

  const [search, setSearch] = useState("");
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  console.log(search);
  return (
    <div>
      <Search
        className="search-component"
        //   loading={loading}
        onSearch={onSearch}
        onChange={onChangeHandler}
        //   results={results}
        //   value={value}
      />
      <div
        className={
          isWebView ? "search-results-for-web" : "search-results-for-mobile"
        }
      >
        {all_products
<<<<<<< HEAD
          .filter((value) =>
            search === ""
              ? value.name
              : value?.name.toLowerCase().includes(search.toLowerCase())
          )
          .slice(0, 9)
          .map(
            (value, index) =>
              search !== "" && (
                <MainLink
                  pathname={`/${value?.category}/${value?.subcategory}`}
                  onClick={onSearchClick}
                  key={index}
                >
                  <div
                    className={
                      isWebView ? "search_results_web" : "search_results"
                    }
                    style={{ display: "flex", margin: "5px 0" }}
                  >
                    <img
                      src={value?.variation_0_thumbnail}
                      alt="product"
                      style={{
                        width: "50px",
                        hight: "50px",
                        marginRight: "4px",
                      }}
                    />
                    <h5>{value?.name}</h5>
                  </div>
                </MainLink>
              )
          )}
=======
          .filter((value) => {
            if (search == "") {
              return value.name;
            } else if (
              value.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return value.name;
            }
          })
          .slice(0, 9)
          .map((value, index) => {
            if (search != "") return <div key={index}>{value.name}</div>;
          })}
>>>>>>> ae8fa3b05d3dfa8fc54973f9cd6bd1ccb0d6e29d
      </div>
    </div>
  );
};

export default SearchComponent;
