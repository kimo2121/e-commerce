// import PRODUCTS_DATA from "./product.data";
// import { kidsNew } from "./KidsNew";
import { ShoesNew } from "./ShoesNew";

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
