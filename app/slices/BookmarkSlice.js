import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    AddToBookmark: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    RemoveFromBookmark: () => {},
  },
});

export const { AddToBookmark, RemoveFromBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
export const selectBookmarkItems = (state) => state.bookmark.items;
