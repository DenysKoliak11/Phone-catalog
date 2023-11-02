import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type sortBy = {
  sortName: string;
  sortProperty: string;
};
interface FilterState {
  categoryId: number;
  searchValue: string;
  sortBy: sortBy;
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
export const filterSlicer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
      state.searchValue = "";
    },
    setSort(state, action: PayloadAction<sortBy>) {
      state.sortBy = action.payload;
    },
    setItemsOnPage(state, action: PayloadAction<number>) {
      state.itemsOnPage = action.payload;
    },
    setPagination(state, action: PayloadAction<number>) {
      state.currentPage = action.payload + 1;
    },
    setPaginationNext(state, action: PayloadAction<number>) {
      state.currentPage = state.currentPage;
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
} = filterSlicer.actions;
export default filterSlicer.reducer;
