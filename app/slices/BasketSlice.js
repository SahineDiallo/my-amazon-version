import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    AddToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    RemoveFromBasket: (state, action) => {},
  },
});

export const { AddToBasket, RemoveFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
export const selectBasketItems = (state) => state.basket.items;
