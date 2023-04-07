import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productService } from '../services/pruduct.service';

export const getProductsByCategory = createAsyncThunk(
    '',
    async (category, thunkAPI) => {
        try {
            return productService.getByCategory(category);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        status: null,
        error: null,
        products: null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getProductsByCategory.pending, state => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getProductsByCategory.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.error = null;
                state.products = action.payload;
            })
            .addCase(getProductsByCategory.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
    }
});

const productStore = productSlice.reducer;
export default productStore;