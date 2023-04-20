import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
    name: 'orderSlice',
    initialState: {
        total: 0,
        products: [],
        customerName: null,
        customerSurname: null,
        customerPhone: null,
        address: null
    },
    reducers: {
        addProductToCart(state, action) {
            state.products.push(action.payload);
            state.total = state.total + action.payload.price * action.payload.count;
        }
    },
    extraReducers: {}
});
export const { addProductToCart } = orderSlice.actions;
const orderStore = orderSlice.reducer;
export default orderStore;