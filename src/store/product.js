import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productService } from '../services/pruduct.service';

export const getProductsByCategory = createAsyncThunk(
    'productSlice/GetByCategory',
    async (category, thunkAPI) => {
        try {
            return productService.getByCategory(category);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);
export const createProduct = createAsyncThunk(
    'productSlice/CreateProduct',
    async (data, thunkAPI) => {
        try {
            return productService.createProduct(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const deleteImage = createAsyncThunk(
    'productSlice/DeleteProductImage',
    async (fileName, thunkAPI) => {
        try {
            return await productService.deleteImage(fileName);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const updateProduct = createAsyncThunk(
    'productSlice/UpdateProduct',
    async (data, thunkAPI) => {
        try {
            return await productService.updateProduct(data);
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
        products: [],
        productForUpdate: null
    },
    reducers: {
        setProductForUpdate(state, action) {
            state.productForUpdate = action.payload;
        }
    },
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
            .addCase(createProduct.pending, state => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.error = null;
                state.products.push(action.payload);
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload.response.data.message;
            })
            .addCase(deleteImage.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.error = null;
                state.products.forEach(obj => {
                    if (obj.picture === action.payload) {
                        obj.picture = null
                    }
                });
                state.productForUpdate.picture = null;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.error = null;
                const index = state.products.findIndex(obj => obj.id === action.payload.id);
                if (index !== -1) {
                    state.products[index] = { ...action.payload };
                }
            })
    }
});
export const { setProductForUpdate } = productSlice.actions;
const productStore = productSlice.reducer;
export default productStore;