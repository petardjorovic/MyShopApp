import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    allFavorites: [],
    totalFavorites: 0,
  },
  reducers: {
    saveFavoriteAction: (state, action) => {
      const copyArray = [...state.allFavorites];

      let findedIndex = null;

      copyArray.find((el, i) => {
        if (el.id === action.payload.id) {
          findedIndex = i;
          return;
        }
      });

      if (findedIndex === null) {
        copyArray.push(action.payload);
        state.totalFavorites++;
      } else {
        copyArray.splice(findedIndex, 1);
        state.totalFavorites--;
      }
      state.allFavorites = copyArray;
    },
    removeFavoriteAction: (state, action) => {
      const copyArray = [...state.allFavorites];

      state.allFavorites = copyArray.filter((el, i) => {
        return el.id !== action.payload.id;
      });
      state.totalFavorites--;
    },
  },
});

export const { saveFavoriteAction, removeFavoriteAction } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
