import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type FavoritesItemType = {
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
  itemFavorites: FavoritesItemType[];
}
const getFavoritesItemFromLocalStorage = (): FavoritesItemType[] => {
  const storedFavoritesItem = localStorage.getItem("itemFavorites");
  return storedFavoritesItem ? JSON.parse(storedFavoritesItem) : [];
};
const initialState = {
  itemFavorites: getFavoritesItemFromLocalStorage(),
};
export const favoritesSlicer = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<FavoritesItemType>) {
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
      localStorage.setItem(
        "itemFavorites",
        JSON.stringify(state.itemFavorites)
      );
    },
  },
});
export const { addFavorite } = favoritesSlicer.actions;
export default favoritesSlicer.reducer;
