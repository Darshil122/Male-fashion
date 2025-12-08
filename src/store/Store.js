import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import productReducer from "../features/productSlice";
import cartReducer from "../features/cartSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  userDetail: userReducer,
  product: productReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
