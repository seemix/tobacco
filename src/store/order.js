import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { orderService } from '../services/order.service';

export const createOrder = createAsyncThunk(
    'orderSlice/CreateOrder',
    async (data, thunkAPI) => {
        try {
            return orderService.createOrder(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const getAllOrders = createAsyncThunk(
    'orderSlice/GetAll',
    async (params, thunkAPI) => {
        try {
            return orderService.getAllOrders(params);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const setCompleted = createAsyncThunk(
    'orderSlice/SetCompleted',
    async (data, thunkAPI) => {
        try {
            return orderService.setCompleted(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);
export const orderSlice = createSlice({
    name: 'orderSlice',
    initialState: {
        createdOrder: null,
        status: null,
        error: null,
        total: 0,
        products: [],
        customerName: null,
        customerSurname: null,
        customerPhone: null,
        address: null,
    },
    reducers: {
        addProductToCart(state, action) {
            state.products.push(action.payload);
            state.total = state.total + action.payload.price * action.payload.count;
        },
        removeItem(state, action) {
            state.total -= action.payload.price * action.payload.count;
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
    extraReducers: builder => {
        builder
            .addCase(createOrder.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.createdOrder = action.payload;
                state.products = [];
            })
            .addCase(getAllOrders.fulfilled, (state, action) => {
                state.response = action.payload;
            })
            .addCase(setCompleted.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                const index = state.response.orders.findIndex(obj => obj._id === action.payload._id);
                state.response.orders[index] = { ...state.response.orders[index], completed: action.payload.completed }
            })
    }
});
export const { addProductToCart, removeItem, removeAllItems, incrementCount, reduceCount } = orderSlice.actions;
const orderStore = orderSlice.reducer;
export default orderStore;