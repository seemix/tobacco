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
        },
        removeItem(state, action) {
            state.total -= action.payload.price;
            state.total -= (action.payload.price * action.payload.count);
            state.products = state.products.filter(item => item._id !== action.payload._id);
        },
        removeAllItems(state) {
            state.products = [];
            state.total = 0;
        },
        reduceCount(state, action) {
            const index = state.products.findIndex(obj => obj._id === action.payload._id);
            if (state.products[index].count > 1) {
                state.products[index].count -= 1;
                state.total -= state.products[index].price;
            }
        },
        incrementCount(state, action) {
            const index = state.products.findIndex(obj => obj._id === action.payload._id);
            state.products[index].count += 1;
            state.total += state.products[index].price;
        }
    },
    extraReducers: {}
});
export const { addProductToCart, removeItem, removeAllItems, incrementCount, reduceCount } = orderSlice.actions;
const orderStore = orderSlice.reducer;
export default orderStore;