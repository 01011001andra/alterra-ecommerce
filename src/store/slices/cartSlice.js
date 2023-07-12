import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      let sample = [...state.carts];
      sample.push(payload);
      state.carts = sample;
    },
  },
});

export const { addToCart } = cartsSlice.actions;
export default cartsSlice.reducer;
