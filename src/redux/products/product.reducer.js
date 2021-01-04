import PRODUCTS_DATA from "./product.data";

const INITIAL_STATE = {
  products: PRODUCTS_DATA,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
