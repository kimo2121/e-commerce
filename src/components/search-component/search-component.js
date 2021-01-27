import React, { useState } from "react";
import "./search-component.css";
import { Input } from "antd";
import "antd/dist/antd.css";
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
      </div>
    </div>
  );
};

export default SearchComponent;
