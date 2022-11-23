import { createSlice } from "@reduxjs/toolkit";
import nfts from "../../assets/nfts.json";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    allProducts: { nfts },
    carrito: [],
  },
  reducers: {
    AddToCart: (state, action) => {
      if (action.payload <= 12) {
        let product = state.allProducts.nfts.SkullApe.find(
          (e) => e.id === action.payload
        );
        state.carrito = [...state.carrito, product];
      } else {
        let product = state.allProducts.nfts.Sheels.find(
          (e) => e.id === action.payload
        );
        state.carrito = [...state.carrito, product];
      }
    },
    RemoveToCart: (state, action) => {
      const deleteProduct = state.carrito.filter(
        (product) => product.id !== action.payload
      );
      state.carrito = deleteProduct;
    },
    ClearCart: (state) => {
      state.carrito = [];
    },
  },
});

export const { AddToCart, RemoveToCart, ClearCart } = cartSlice.actions;
export default cartSlice.reducer;
