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
  products: ShoesNew.slice(0, 500),
  all_products: [
    ...kidsNew.slice(0, 100),
    ...MenNew.slice(0, 100),
    ...AccessoriesNew.slice(0, 100),
    ...BagsNew.slice(0, 100),
    ...BeautyNew.slice(0, 100),
    ...HouseNew.slice(0, 100),
    ...JewelryNew.slice(0, 100),
    ...ShoesNew.slice(0, 100),
    ...WomenNew.slice(0, 100),
  ],
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
