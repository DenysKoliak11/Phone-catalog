import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type SortByType = {
  sortName: string;
  sortProperty: string;
};
interface FilterState {
  categoryId: number;
  searchValue: string;
  sortBy: SortByType;
  itemsOnPage: number;
  currentPage: number;
}
const initialState: FilterState = {
  categoryId: 0,
  searchValue: "",
  sortBy: { sortName: "Newest", sortProperty: "year" },
  itemsOnPage: 16,
  currentPage: 1,
};
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
      state.searchValue = "";
    },
    setSort(state, action: PayloadAction<SortByType>) {
      state.sortBy = action.payload;
    },
    setItemsOnPage(state, action: PayloadAction<number>) {
      state.itemsOnPage = action.payload;
    },
    setPagination(state, action: PayloadAction<number>) {
      state.currentPage = action.payload + 1;
    },
    setPaginationNext(state, action: PayloadAction<number>) {
      state.currentPage =
        state.currentPage < action.payload
          ? state.currentPage + 1
          : state.currentPage;
    },
    setPaginationPrev(state) {
      state.currentPage = state.currentPage === 1 ? 1 : state.currentPage - 1;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
      state.categoryId = 1;
    },
  },
});
export const {
  setCategoryId,
  setSearchValue,
  setItemsOnPage,
  setSort,
  setPagination,
  setPaginationPrev,
  setPaginationNext,
} = filterSlice.actions;
export default filterSlice.reducer;
