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

export const createCategory = createAsyncThunk(
    'categorySlice/Create',
    async (data, thunkAPI) => {
        try {
            return categoryService.createCategory(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const saveCategoriesOrder = createAsyncThunk(
    'categorySlice/SaveOrder',
    async (data, thunkAPI) => {
        try {
             return categoryService.saveOrder(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const categorySlice = createSlice({
    name: 'categorySlice',
    initialState: {
        status: null,
        error: null,
        categories: [],
        showReorderButton: false
    },
    reducers: {
        categoriesReorder(state, action) {
            state.categories = action.payload;
            state.showReorderButton = true;
            return state;
        },
    },
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
            .addCase(createCategory.pending, state => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.error = null;
                state.categories.push(action.payload);
            })
            .addCase(saveCategoriesOrder.fulfilled, state => {
                state.showReorderButton = false;
            })
    }
});

export const { categoriesReorder } = categorySlice.actions;
 const categoryStore = categorySlice.reducer;
export default categoryStore;