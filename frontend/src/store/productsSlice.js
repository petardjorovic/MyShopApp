import { createSlice, current } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: {},
    currentCategory: "All Products",
  },
  reducers: {
    handleAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setNewCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { handleAllProducts, setNewCategory } = productsSlice.actions;
export default productsSlice.reducer;
