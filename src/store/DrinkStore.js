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
   /* to deal with sync functinos you can use normal reducers */
    reducers: {},
   /* to deal with async functions like fetching from an api use extra reducers with create async thunk  "pending , fulfilled , rejected"*/
    extraReducers :{} 
  });

  export const DrinksAction = Drink.actions;
export default  Drink.reducer;
