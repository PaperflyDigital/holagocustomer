import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {
    products: [],
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setCartProducts: (state, action) => {
      state.cart.products = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.products = [...state.cart.products, action.payload];
    },
  },
});

export const { setCart, addToCart, setCartProducts } = cartSlice.actions;

export default cartSlice.reducer;
