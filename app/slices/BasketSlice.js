import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    AddToBasket: (state, action) => {
      const _index = state.items.findIndex(
        (item) => item.p_id === action.payload.p_id
      );
      if (_index >= 0) {
        state.items[_index].count += 1;
        state.items = [...state.items];
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    RemoveFromBasket: (state, action) => {
      const _index = state.items.findIndex(
        (item) => item.p_id === action.payload.p_id
      );
      if (_index >= 0) {
        state.items[_index].count > 0 && (state.items[_index].count -= 1);
        state.items = [...state.items];
      }
    },
    DeleteFromBasket: (state, action) => {
      const _index = state.items.findIndex(
        (item) => item.p_id === action.payload
      );
      if (_index >= 0) {
        state.items.splice(_index, 1);
        state.items = [...state.items];
      }
    },
  },
});

export const { AddToBasket, RemoveFromBasket, DeleteFromBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
export const selectBasketItems = (state) => state.basket.items;
