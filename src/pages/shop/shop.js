import React from "react";
// import { Link } from "react-router-dom";
import SearchSlider from "../../components/search-slider/search-slider";
import { Input, Select, Pagination } from "antd";
import "antd/dist/antd.css";
import "./shop.css";

const Shop = () => {
  const { Search } = Input;
  const { Option } = Select;
  const onSearch = (value) => console.log(value);
  return (
    <div className="shop-page">
      <div className="search-sort">
        <Select
          labelInValue
          size="large"
          defaultValue={{ value: "lucy" }}
          className="select-dropdown"
        >
          <Option value="jack">Jack (100)</Option>
          <Option value="lucy">Lucy (101)</Option>
        </Select>
        <Search
          size="large"
          placeholder="Search..."
          onSearch={onSearch}
          style={{ width: "30%", height: "50%" }}
        />
      </div>
      <div className="items-categ">
        <div className="shop-items">{/* <ShopItem /> */}</div>
        <div className="categories">
          <SearchSlider />
        </div>
      </div>
      <Pagination className="pagination" defaultCurrent={1} total={50} />
    </div>
  );
};

export default Shop;
