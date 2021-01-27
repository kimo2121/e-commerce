import CheckoutActionTypes from "./checkout.types";
const layout = ["shoppingbag", "placeorder", "pay", "ordercomplete"];

const INITIAL_STATE = {
<<<<<<< HEAD
  checkout: ["shoppingbag"],
=======
  checkout: layout[0],
>>>>>>> e54bbbc9eafb4beba02f806705207bec86fa0e7f
  index: 1,
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CheckoutActionTypes.PROCEED_TO_CHECKOUT:
      return {
        ...state,
        index: state.index + 1,
        checkout: [layout[state.index]],
      };
    default:
      return state;
  }
};
export default checkoutReducer;
