import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartOpen: false,
  cartItems: localStorage.getItem("cartData")
    ? JSON.parse(localStorage.getItem("cartData"))
    : [],
  itemsNumber: 0,
  subTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.cartOpen = true;
    },
    closeCart: (state) => {
      state.cartOpen = false;
    },
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, { ...action.payload, qty: 1 }];
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotal: (state) => {
      let itemsNumber = 0;
      let subTotal = 0;
      state.cartItems.forEach((item) => {
        itemsNumber += item.amount;
        subTotal += item.amount * item.price;
      });
      state.itemsNumber = itemsNumber;
      state.subTotal = subTotal;
    },
  },
});

export const {
  openCart,
  closeCart,
  addToCart,
  removeFromCart,
  increase,
  decrease,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
