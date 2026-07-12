import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/countSlice";
import { cartSlice } from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    [counterSlice.reducerPath]: counterSlice.reducer,
    [cartSlice.reducerPath]: cartSlice.reducer
  },
});
