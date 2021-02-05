import CheckoutActionTypes from "./checkout.types";
const layout = ["shoppingbag", "placeorder", "pay", "ordercomplete"];

const INITIAL_STATE = {
  checkout: layout[0],
  index: 1,
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CheckoutActionTypes.PROCEED_TO_CHECKOUT:
      return {
        ...state,
        index: state.index + 1,
        checkout: layout[state.index],
      };
    default:
      return state;
  }
};
export default checkoutReducer;
