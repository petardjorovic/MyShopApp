import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import categoriesSlice from "./categoriesSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    productsStore: productsSlice,
    categoriesStore: categoriesSlice,
    cartStore: cartSlice,
  },
});

export default store;
