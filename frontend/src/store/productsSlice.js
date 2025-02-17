import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: {},
    isLoaded: false,
  },
  reducers: {
    handleAllProducts: (state, action) => {
      state.products = action.payload;
      state.isLoaded = true;
    },
  },
});

export const { handleAllProducts } = productsSlice.actions;
export default productsSlice.reducer;
