import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer, // cart slice
  },
});

export default store;
