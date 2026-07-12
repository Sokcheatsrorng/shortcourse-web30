
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0
}

export const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
   
    // addToCart 
    addToCart : (state, action) => {
      state.products.push(action.payload);
      state.totalPrice += action.payload.priceOut;
    },
    removeFromCart: (state,action) => {
        state.products -= action.payload;
        state.totalPrice -= action.payload.priceOut;
    
    }
  }
})

export const {
  addToCart,
  removeFromCart
} = cartSlice.actions;

export default cartSlice.reducer;

// custom selector 
export const productSelector = initialState.products;
export const totalPriceSelector = initialState.totalPrice;