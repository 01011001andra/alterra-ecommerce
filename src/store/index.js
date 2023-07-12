import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = configureStore(
  {
    reducer: persistedReducer,
  },
  applyMiddleware()
);
let persistor = persistStore(store);
export { store, persistor };
