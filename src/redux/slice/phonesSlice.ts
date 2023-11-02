import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PhonesType } from "../../types/PhoneType";
interface PhonesItemsType {
  storeItems: PhonesType[] | null;
}
const initialState: PhonesItemsType = {
  storeItems: null,
};
export const phonesSlice = createSlice({
  name: "phones",
  initialState,
  reducers: {
    setPhones(state, action: PayloadAction<PhonesType[]>) {
      state.storeItems = action.payload;
      console.log(action.payload);
    },
  },
});
export const { setPhones } = phonesSlice.actions;
export default phonesSlice.reducer;
