import { configureStore } from '@reduxjs/toolkit'
import cart from './Slices/Cart'

export default configureStore({
  reducer: {
    cartReducer: cart,
  }
})