import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { brandService } from '../services/brand.service';

export const getBrandsByCategory = createAsyncThunk(
    '',
    async (category, thunkAPI) => {
        try {
            return brandService.getBrandsByCategory(category);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const brandSlice = createSlice({
    name: 'brandSlice/GetByCategory',
    initialState: {
        brands: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getBrandsByCategory.fulfilled, (state, action) => {
                state.brands = action.payload;
                state.status = 'fulfilled';
            })
            .addCase(getBrandsByCategory.rejected, state => {
                state.brands = [];
            })
    }
});

const brandStore = brandSlice.reducer;
export default brandStore;