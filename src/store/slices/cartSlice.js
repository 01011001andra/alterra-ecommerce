import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemInCart = state.carts.find((item) => item.id === payload.id);

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.carts.push({ ...payload, quantity: 1 });
      }
    },
    removeCart: (state) => {
      state.carts = [];
    },
  },
});

export const { addToCart, removeCart } = cartsSlice.actions;
export default cartsSlice.reducer;
