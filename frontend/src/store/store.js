import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import categoriesSlice from "./categoriesSlice";
import cartSlice from "./cartSlice";
import favoriteSlice from "./favoriteSlice";

const store = configureStore({
  reducer: {
    productsStore: productsSlice,
    categoriesStore: categoriesSlice,
    cartStore: cartSlice,
    favoriteStore: favoriteSlice,
  },
});

export default store;
