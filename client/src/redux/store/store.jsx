import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/productsReducer";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
