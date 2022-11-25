import { createSlice } from "@reduxjs/toolkit";
import nfts from "../../assets/nfts.json";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    allProducts: { nfts },
    carrito: localStorage.getItem("carrito")
      ? JSON.parse(localStorage.getItem("carrito"))
      : [],
  },
  reducers: {
    AddToCart: (state, action) => {
      if (action.payload <= 12) {
        const existe = state.carrito.find((e) => e.id === action.payload);
        if (existe) {
          alert("El producto ya esta en el carrito");
        } else {
          let product = state.allProducts.nfts.SkullApe.find(
            (e) => e.id === action.payload
          );
          state.carrito = [...state.carrito, product];
        }
      } else {
        const existe = state.carrito.find((e) => e.id === action.payload);
        if (existe) {
          alert("El producto ya esta en el carrito");
        } else {
          let product = state.allProducts.nfts.Sheels.find(
            (e) => e.id === action.payload
          );
          state.carrito = [...state.carrito, product];
        }
      }
      localStorage.setItem("carrito", JSON.stringify(state.carrito));
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

export const { AddToCart, RemoveToCart, ClearCart, DetailCard } =
  cartSlice.actions;
export default cartSlice.reducer;
