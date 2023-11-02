import { configureStore } from "@reduxjs/toolkit";
import filter from "./slice/filterSlice";
import cart from "./slice/cartSlice";
import favorites from "./slice/favoritesSlice";
import phones from "./slice/phonesSlice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    favorites,
    phones,
  },
});
export type RootState = ReturnType<typeof store.getState>;
