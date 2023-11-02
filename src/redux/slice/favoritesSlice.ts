import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type favoritesItem = {
  id: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  ram: string;
  image: string;
  phoneId: string;
};
interface favoritesState {
  totalNumber: number;
  itemFavorites: favoritesItem[];
}
const initialState: favoritesState = {
  totalNumber: 0,
  itemFavorites: [],
};
export const favoritesSlicer = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<favoritesItem>) {
      const { id } = action.payload;
      const existingItem = state.itemFavorites.find((obj) => obj.id === id);
      if (existingItem) {
        state.itemFavorites = state.itemFavorites.filter(
          (obj) => obj.id !== id
        );
      } else {
        state.itemFavorites.push({
          ...action.payload,
        });
      }
    },
  },
});
export const { addFavorite } = favoritesSlicer.actions;
export default favoritesSlicer.reducer;
