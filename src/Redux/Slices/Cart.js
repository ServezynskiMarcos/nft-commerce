import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart", 
  initialState: {
    carrito: [],
   
  },
  reducers: {
    AddToCart: (state, action ) => {
      state.carrito= [...state.carrito, action.payload]
    },
    RemoveToCart: (state, action) => {
      const { name } = action.payload;
      if (state.some((item) => item.name === name)) {
        return state.filter((item) => item.name !== name);
      }
    },
  },
});

export const { AddToCart, RemoveToCart } = cartSlice.actions;
export default cartSlice.reducer;
