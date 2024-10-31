import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartslice";
import productslice from "./productslice";

const store = configureStore({
  reducer: {
    cart: cartslice,
    product: productslice,
  },
});

export default store;
