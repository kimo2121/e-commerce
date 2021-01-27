// import PRODUCTS_DATA from "./product.data";
import { kidsNew } from "../../shopData/KidsNew";
import { MenNew } from "../../shopData/MenNew";
import { AccessoriesNew } from "../../shopData/AccessoriesNew";
import { BagsNew } from "../../shopData/BagsNew";
import { BeautyNew } from "../../shopData/BeautyNew";
import { HouseNew } from "../../shopData/HouseNew";
import { JewelryNew } from "../../shopData/JewelryNew";
import { ShoesNew } from "../../shopData/ShoesNew";
import { WomenNew } from "../../shopData/WomenNew";

const INITIAL_STATE = {
  products: [
    ...kidsNew.slice(0, 10),
    ...MenNew.slice(100, 110),
    ...AccessoriesNew.slice(0, 10),
    ...BagsNew.slice(0, 10),
  ],
  all_products: [
    ...kidsNew,
    ...MenNew,
    ...AccessoriesNew,
    ...BagsNew,
    ...BeautyNew,
    ...HouseNew,
    ...JewelryNew,
    ...ShoesNew,
    ...WomenNew,
  ],
  sliderProducts: [
    ...kidsNew.slice(0, 20),
    ...MenNew.slice(0, 20),
    ...AccessoriesNew.slice(0, 20),
    ...BagsNew.slice(0, 20),
    ...BeautyNew.slice(0, 20),
    ...HouseNew.slice(0, 20),
    ...JewelryNew.slice(0, 20),
    ...ShoesNew.slice(0, 20),
    ...WomenNew.slice(0, 20),
  ],
  filter: [],
  priceFilter: [],
  colorsFilter: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FILTER_PRICE":
      return {
        ...state,
        filter: action.payload,
      };
    case "FILTER_PRICE_INPUT":
      return {
        ...state,
        priceFilter: action.payload,
      };
    case "FILTER_COLORS_INPUT":
      return {
        ...state,
        colorsFilter: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
