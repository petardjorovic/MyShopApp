import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalProducts: 0,
    totalAmount: 0,
  },
  reducers: {
    saveItemInCartAction: (state, action) => {
      const copyArray = [...state.cart];

      // 1. Da li ga imamo u korpi, cilj je indexna pozicija
      let findIndex = null;

      // 2. ovde proveravamo da li postoji u korpi
      copyArray.find((el, i) => {
        if (el.id === action.payload.id) {
          findIndex = i;
          return;
        }
      });

      // 3. dodaj novi product ili uvecaj isti!!
      if (findIndex === null) {
        copyArray.push({
          ...action.payload,
          count: 1,
          cartTotal: action.payload.price,
        });
        state.totalProducts++;
        state.totalAmount += action.payload.price;
      } else {
        copyArray[findIndex].count++;
        copyArray[findIndex].cartTotal =
          copyArray[findIndex].count * copyArray[findIndex].price;
        state.totalAmount += copyArray[findIndex].price;
      }

      state.cart = copyArray;
    },
    deleteItemCartAction: (state, action) => {
      // const copyArray = [...state.cart];
      const copyArray = state.cart.filter((el, i) => {
        return el.id !== action.payload.id;
      });

      // // 1. Da li ga imamo u korpi, cilj je indexna pozicija
      // let findIndex = null;

      // // 2. ovde proveravamo da li postoji u korpi
      // copyArray.find((el, i) => {
      //   if (el.id === action.payload.id) {
      //     findIndex = i;
      //     return;
      //   }
      // });

      // if (findIndex !== null) {
      //   copyArray.splice(findIndex, 1);

      //   //moze i ovako
      //   // state.cart = copyArray.filter((el, i) => {
      //   //   return el.id !== action.payload.id;
      //   // });
      // }
      state.cart = copyArray;
      state.totalProducts--;
    },
  },
});

export const { saveItemInCartAction, deleteItemCartAction } = cartSlice.actions;
export default cartSlice.reducer;
