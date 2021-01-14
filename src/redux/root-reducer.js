import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import productReducer from "./products/product.reducer";
import checkoutReducer from "./checkout/checkout.reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productReducer,
  checkout: checkoutReducer,
});

export default persistReducer(persistConfig, rootReducer);
