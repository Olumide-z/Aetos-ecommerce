import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartOpen: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        openCart: (state) => {
            state.cartOpen = true;
        },
        closeCart: (state) => {
            state.cartOpen = false;
        }
    }
});

export const { openCart, closeCart } = cartSlice.actions;

export default cartSlice.reducer;