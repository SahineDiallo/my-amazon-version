import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const BookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    AddToBookmark: () => {},
    RemoveFromBookmark: () => {},
  },
});

export const { AddToBookmark, RemoveFromBookmark } = BookmarkSlice.actions;
export const selectBookmarkItems = (state) => state.bookmark.items;
