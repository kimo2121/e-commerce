// import PRODUCTS_DATA from "./product.data";
// import { kidsNew } from "./KidsNew";
// import { MenNew } from "../../shopData/MenNew";
// import { AccessoriesNew } from "../../shopData/AccessoriesNew";
// import { BagsNew } from "../../shopData/BagsNew";
// import { BeautyNew } from "../../shopData/BeautyNew";
// import { HouseNew } from "../../shopData/HouseNew";
// import { JewelryNew } from "../../MenNew/JewelryNew";
import { ShoesNew } from "../../shopData/ShoesNew";
// import { WomenNew } from "../../shopData/WomenNew";

const INITIAL_STATE = {
  products: ShoesNew.slice(0, 200),
  // products: kidsNew,
  // kidsNew: KidsNew,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
