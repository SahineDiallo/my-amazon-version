import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slices/BasketSlice";
import bookmarkReducer from "./slices/BookmarkSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    bookmark: bookmarkReducer,
  },
});
