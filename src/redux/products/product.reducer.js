// import PRODUCTS_DATA from "./product.data";
import { kidsNew } from "./KidsNew";
import { ShoesNew } from "../../data/ShoesNew";

const INITIAL_STATE = {
  // products: ShoesNew.slice(0, 19),
  products: kidsNew,
  // kidsNew: KidsNew,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
