import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        data: [
            'apel', 'naga'
        ]
    },
    reducers: {
        setProductsData(state, actions) {
            state.data = actions.payload;
        }
    }
});

export const { setProductsData } = productsSlice.actions;

export default productsSlice.reducer;