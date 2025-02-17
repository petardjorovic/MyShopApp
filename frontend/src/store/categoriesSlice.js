import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
  },
  reducers: {
    handleAllCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { handleAllCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
