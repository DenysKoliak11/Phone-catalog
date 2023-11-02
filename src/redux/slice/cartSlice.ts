import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CartItemProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  count: number;
  phoneId: string;
};
export interface CartState {
  totalPrice: number;
  cartItems: CartItemProps[];
}
const initialState: CartState = {
  totalPrice: 0,
  cartItems: [],
};
export const cartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<CartItemProps>) {
      const { id } = action.payload;
      const existingCartItem = state.cartItems.find((obj) => obj.id === id);
      if (existingCartItem) {
        state.cartItems = state.cartItems.filter(
          (obj) => obj.id !== action.payload.id
        );
        state.totalPrice = calculateTotalPrice(state.cartItems);
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
        });
        state.totalPrice = calculateTotalPrice(state.cartItems);
      }
    },
    clearItem(state) {
      state.totalPrice = 0;
      state.cartItems = [];
    },
    removeItem(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter(
        (obj) => obj.id !== action.payload
      );
      state.totalPrice = calculateTotalPrice(state.cartItems);
    },
    plusCount(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingCartItem = state.cartItems.find((obj) => obj.id === id);
      if (existingCartItem) {
        existingCartItem.count += 1;
        state.totalPrice = calculateTotalPrice(state.cartItems);
      }
    },
    minusCount(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingCartItem = state.cartItems.find((obj) => obj.id === id);
      if (existingCartItem) {
        existingCartItem.count = existingCartItem.count -= 1;
        state.totalPrice = calculateTotalPrice(state.cartItems);
      }
    },
  },
});

const calculateTotalPrice = (cartItems: CartItemProps[]) => {
  return cartItems.reduce((sum, item) => (sum += item.price * item.count), 0);
};
export const { addCart, clearItem, removeItem, minusCount, plusCount } =
  cartSlicer.actions;
export default cartSlicer.reducer;
