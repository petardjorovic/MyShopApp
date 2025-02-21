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
        state.totalAmount = action.payload.price;
      } else {
        copyArray[findIndex].count++;
        copyArray[findIndex].cartTotal += action.payload.price;

        state.totalAmount += action.payload.price;
      }

      state.cart = copyArray;
    },
    deleteItemCartAction: (state, action) => {
      const copyArray = state.cart.filter((el, i) => {
        return el.id !== action.payload.id;
      });

      state.totalProducts--;
      state.totalAmount = subTotal(copyArray);

      state.cart = copyArray;
    },
    setPriceHandlerAction: (state, action) => {
      const { increament, index } = action.payload;
      const copyArray = [...state.cart];
      copyArray[index].cartTotal += copyArray[index].price * increament;

      state.totalAmount = subTotal(copyArray);

      if (copyArray[index].count === 1 && increament === -1) {
        copyArray.splice(index, 1);
        state.totalProducts--;
      } else {
        copyArray[index].count += increament;
      }

      state.cart = copyArray;
    },
  },
});

function subTotal(arrayCart) {
  return arrayCart.reduce((total, item) => {
    return total + item.cartTotal;
  }, 0);
}

export const {
  saveItemInCartAction,
  deleteItemCartAction,
  increaseCountAction,
  decreaseCountAction,
  setPriceHandlerAction,
} = cartSlice.actions;
export default cartSlice.reducer;
