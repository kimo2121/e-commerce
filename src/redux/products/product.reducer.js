// import PRODUCTS_DATA from "./product.data";
import { kidsNew } from "./KidsNew";
import { MenNew } from "../../shopData/MenNew";
import { AccessoriesNew } from "../../shopData/AccessoriesNew";
import { BagsNew } from "../../shopData/BagsNew";
import { BeautyNew } from "../../shopData/BeautyNew";
import { HouseNew } from "../../shopData/HouseNew";
import { JewelryNew } from "../../shopData/JewelryNew";
import { ShoesNew } from "./ShoesNew";
import { WomenNew } from "../../shopData/WomenNew";

const INITIAL_STATE = {
  products: ShoesNew.slice(0, 50),
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
