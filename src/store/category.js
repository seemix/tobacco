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

export const updateCategory = createAsyncThunk(
    'categorySlice/Update',
    async (data, thunkAPI) => {
        try {
            return categoryService.updateCategory(data);
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

export const deleteImage = createAsyncThunk(
    'categorySlice/DeleteImage',
    async (fileName, thunkAPI) => {
        try {
            return categoryService.deleteImage(fileName);
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
        categoryForUpdate: null,
        categories: [],
        showReorderButton: false
    },
    reducers: {
        categoriesReorder(state, action) {
            state.categories = action.payload;
            state.showReorderButton = true;
            return state;
        },
        setCategoryForUpdate(state, action) {
            state.categoryForUpdate = action.payload;
        }
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
            .addCase(deleteImage.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.error = null;
                state.categories.forEach(obj => {
                    if (obj.picture === action.payload) {
                        obj.picture = null
                    }
                });
                state.categoryForUpdate.picture = null;
            })
            .addCase(updateCategory.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.error = null;
                state.categories.forEach(obj => {
                    if (obj.id === action.payload.id) {
                       obj.name = action.payload.name;
                       obj.picture = action.payload.picture;
                    }
                })
            })
    }
});

export const { setCategoryForUpdate, categoriesReorder } = categorySlice.actions;
const categoryStore = categorySlice.reducer;
export default categoryStore;