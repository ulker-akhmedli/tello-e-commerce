import { createSlice } from "@reduxjs/toolkit";
import { getCard, removeCard, updateCard } from "../actions/card";

const initState = {
  cart: [],
  loading: false,
  errors: null,
};

const getCartSlice = createSlice({
  name: "bestSellers",
  initialState: initState,
  // extraReducers: {
  //   [getCard.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [getCard.rejected]: (state, payload) => {
  //     state.loading = false;
  //     state.errors = payload;
  //   },
  //   [getCard.fulfilled]: (state, { payload }) => {
  //     state.loading = false;
  //     state.cart = payload;
  //   },

  //   [removeCard.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [removeCard.rejected]: (state, { payload }) => {
  //     state.loading = false;
  //     state.error = payload;
  //   },
  //   [removeCard.fulfilled]: (state, { payload }) => {
  //     state.cart = payload;
  //     state.loading = false;
  //   },
  //   [updateCard.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [updateCard.rejected]: (state, { payload }) => {
  //     state.loading = false;
  //     state.error = payload;
  //   },
  //   [updateCard.fulfilled]: (state, { payload }) => {
  //     state.cart = payload;
  //     state.loading = false;
  //   },
  // },
});

export default getCartSlice.reducer;
