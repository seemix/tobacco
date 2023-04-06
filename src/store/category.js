import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { categoryService } from '../services/category.service';

export const getAllCategories = createAsyncThunk(
    'categorySlice/GetAll',
    async (_, thunkAPI) => {
        try {
            return await categoryService.getAll;
        } catch (e) {
            thunkAPI.rejectWithValue(e);
        }
    }
);

export const categorySlice = createSlice({
    name: 'categorySlice',
    initialState: {
        status: null,
        error: null,
        categories: []
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllCategories.pending, state => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getAllCategories.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.error = null;
                state.categories = action.payload;
            })
            .addCase(getAllCategories.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
    }
});

const categoryStore = categorySlice.reducer;
export default categoryStore;