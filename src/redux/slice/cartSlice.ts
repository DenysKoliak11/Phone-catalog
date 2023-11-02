import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CartItemType = {
  id: string;
  name: string;
  price: number;
  image: string;
  count: number;
  phoneId: string;
};
export interface CartState {
  totalPrice: number;
  cartItems: CartItemType[];
}
const getCartItemFromLocalStorage = (): CartItemType[] => {
  const storedCartItem = localStorage.getItem("cartItems");
  return storedCartItem ? JSON.parse(storedCartItem) : [];
};
const getTotalPriceFromLocalStorage = (): number => {
  const storedTotalPrice = localStorage.getItem("totalPrice");
  return storedTotalPrice ? +storedTotalPrice : 0;
};
const initialState: CartState = {
  totalPrice: getTotalPriceFromLocalStorage(),
  cartItems: getCartItemFromLocalStorage(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<CartItemType>) {
      const { id } = action.payload;
      const existingCartItem = state.cartItems.find((obj) => obj.id === id);
      if (existingCartItem) {
        state.cartItems = state.cartItems.filter(
          (obj) => obj.id !== action.payload.id
        );
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
        });

        state.totalPrice = calculateTotalPrice(state.cartItems);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("totalPrice", state.totalPrice.toString());
    },
    clearItem(state) {
      state.totalPrice = 0;
      state.cartItems = [];
      localStorage.removeItem("cartItems");
      localStorage.removeItem("totalPrice");
    },
    removeItem(state, action: PayloadAction<string>) {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((obj) => obj.id !== id);
      state.totalPrice = calculateTotalPrice(state.cartItems);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("totalPrice", state.totalPrice.toString());
    },
    plusCount(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingCartItem = state.cartItems.find((obj) => obj.id === id);
      if (existingCartItem) {
        existingCartItem.count += 1;
        state.totalPrice = calculateTotalPrice(state.cartItems);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("totalPrice", state.totalPrice.toString());
    },
    minusCount(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingCartItem = state.cartItems.find((obj) => obj.id === id);
      if (existingCartItem) {
        existingCartItem.count = existingCartItem.count -= 1;
        state.totalPrice = calculateTotalPrice(state.cartItems);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("totalPrice", state.totalPrice.toString());
    },
  },
});

const calculateTotalPrice = (cartItems: CartItemType[]) => {
  return cartItems.reduce((sum, item) => (sum += item.price * item.count), 0);
};
export const { addCart, clearItem, removeItem, minusCount, plusCount } =
  cartSlice.actions;
export default cartSlice.reducer;
