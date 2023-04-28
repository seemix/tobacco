import { sliderService } from '../services/slider.service';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getAllSlides = createAsyncThunk(
    'sliderStore/GetAllSlides',
    async (_, thunkAPI) => {
        try {
            return sliderService.getAllSlides();
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const createSlide = createAsyncThunk(
    'sliderStore/CreateSlide',
    async (data, thunkAPI) => {
        try {
            return sliderService.createSlide(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const saveSlidesOrder = createAsyncThunk(
    'sliderStore/SaveSlidesOrder',
    async (data, thunkAPI) => {
        try {
            return sliderService.saveOrder(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const sliderSlice = createSlice({
    name: 'sliderSlice',
    initialState: {
        status: null,
        error: null,
        saveOrderButton: false,
        slideEditModal: false,
        slides: []
    },
    reducers: {
        sliderReorder(state, action) {
            state.slides = action.payload;
            state.saveOrderButton = true;
            return state;
        },
        openSlideEdit(state) {
            state.slideEditModal = true;
        },
        closeSlideEdit(state) {
            state.slideEditModal = false;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAllSlides.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.error = null;
                state.slides = action.payload;
            })
            .addCase(saveSlidesOrder.fulfilled, state => {
                state.saveOrderButton = false;
            })
    }
});
export const { sliderReorder, openSlideEdit, closeSlideEdit } = sliderSlice.actions;
const sliderStore = sliderSlice.reducer;
export default sliderStore;
