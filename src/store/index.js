import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsReducer from "./slices/productSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, productsReducer);

let store = configureStore(
  {
    reducer: {
      products: persistedReducer,
    },
  },
  applyMiddleware()
);
let persistor = persistStore(store);
export { store, persistor };
