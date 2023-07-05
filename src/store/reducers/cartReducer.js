import { createSlice } from "@reduxjs/toolkit";
// import { getCard,removeCard,updateCard,getCard } from "../actions/card";

const initialState = {
  // cart: [],
  // loading: false,
  // errors: null,
};

export const cartReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = cartReducer.actions;

export default cartReducer.reducer;
