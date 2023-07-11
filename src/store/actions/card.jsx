import { commerce } from "../../commerce";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCard = createAsyncThunk("name/getCard", async () => {
  try {
    const response = await commerce.cart.retrieve();
    return response;
  } catch (err) {
    return err.message;
  }
});

export const removeCard = createAsyncThunk("name/removeCard", async (id) => {
  try {
    const response = await commerce.cart.remove(id);
    return response;
  } catch (err) {
    return err.message;
  }
});
export const updateCard = createAsyncThunk(
  "name/updateCard",
  async ({ id, quantity }) => {
    try {
      const response = await commerce.cart.update(id, {
        quantity,
      });
      return response;
    } catch (err) {
      return err.message;
    }
  }
);

