import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value : 0
}
// method createSlice 
export const counterSlice = createSlice({
  name: 'counter',
  initialState, 
  reducers: {
    // reducer actions 
    increment: (state) => {
      state.value ++
    },
    decrement: (state) => {
      state.value--;
    }
  }
})

export const {
  increment,
  decrement
} = counterSlice.actions;

export default counterSlice.reducer;