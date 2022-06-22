import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchCoffee = createAsyncThunk("coffe/fetchCoffee", async () => {
  return await axios
    .get("https://api.sampleapis.com/coffee/hot")
    .then((res) => res)
    .catch((err) => console.log(err));
});
export const fethcSingleCoffe = createAsyncThunk("coffe/fetchCoffee", async (id) => {
  return await axios
    .get("https://api.sampleapis.com/coffee/hot")
    .then((res) => res)
    .catch((err) => console.log(err));
});


const initialState = {
  loading: true,
  Drinks: [],
  SingleDrink: [],
};

const Drink = createSlice({
  name: "drink",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCoffee.pending]: (state) => {
      state.loading = true;
    },
    [fetchCoffee.fulfilled]: (state, action) => {
      state.loading = false;
      state.Drinks = action.payload.data;
    },
    [fetchCoffee.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const DrinksAction = Drink.actions;
export default Drink.reducer;
