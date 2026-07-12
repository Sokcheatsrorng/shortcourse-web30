import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/countSlice";
import { cartSlice } from "../features/cart/cartSlice";
import { ecommerceApi } from "../services/api";

export const store = configureStore({
  reducer: {
    [counterSlice.reducerPath]: counterSlice.reducer,
    [cartSlice.reducerPath]: cartSlice.reducer,
    [ecommerceApi.reducerPath]: ecommerceApi.reducer
  },
  middleware: (getDefaultMiddleware)=> 
     getDefaultMiddleware().concat(ecommerceApi.middleware)
  
});
