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
    async (_, thunkAPI) => {
        try {
            return orderService.getAllOrders();
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
        orders: null
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
    extraReducers: builder =>  {
        builder
            .addCase(createOrder.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.createdOrder = action.payload;
                state.products = [];
            })
            .addCase(getAllOrders.fulfilled, (state, action) => {
                state.response = action.payload;
            })
    }
});
export const { addProductToCart, removeItem, removeAllItems, incrementCount, reduceCount } = orderSlice.actions;
const orderStore = orderSlice.reducer;
export default orderStore;