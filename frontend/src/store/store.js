import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import categoriesSlice from "./categoriesSlice";

const store = configureStore({
  reducer: {
    productsStore: productsSlice,
    categoriesStore: categoriesSlice,
  },
});

export default store;
