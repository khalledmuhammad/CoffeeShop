import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
    loading : true,
    Drinks : [],
    SingleDrink : []
  };
  
  const Drink = createSlice({
    name: "drink",
    initialState,
    reducers: {},
    extraReducers :{}
  });

  export const DrinksAction = Drink.actions;
export default  Drink.reducer;
