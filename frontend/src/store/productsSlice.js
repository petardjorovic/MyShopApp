import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: {},
  },
  reducers: {
    handleAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { handleAllProducts } = productsSlice.actions;
export default productsSlice.reducer;
