import { combineReducers } from "redux"
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";

const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer,
});

export default rootReducer;
