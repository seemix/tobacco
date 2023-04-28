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

export const deleteSlide = createAsyncThunk(
    'sliderStore/DeleteSlide',
    async (filename, thunkAPI) => {
        try {
            return sliderService.deleteSlide(filename);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const updateSlide = createAsyncThunk(
    'sliderStore/UpdateSlide',
    async (data, thunkAPI) => {
        try {
            return sliderService.updateSlide(data);
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
        slideForUpdate: null,
        slideForDelete: null,
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
        },
        setSlideForUpdate(state, action) {
            state.slideForUpdate = action.payload;
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
            .addCase(deleteSlide.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.error = null;
                state.slides.forEach(obj => {
                    if (obj.slide === action.payload) {
                        obj.slide = null
                    }
                });
                state.slideForUpdate = null;
            })
            .addCase(createSlide.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.error = null;
                state.slides.push(action.payload);
            })
            .addCase(updateSlide.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.error = null;
                state.slides.forEach(obj => {
                    if (obj._id === action.payload._id) {
                        obj.text = action.payload.text;
                        obj.slide = action.payload.slide;
                    }
                });
                state.slideForUpdate = null;
            })
    }
});
export const { sliderReorder, openSlideEdit, setSlideForUpdate, closeSlideEdit } = sliderSlice.actions;
const sliderStore = sliderSlice.reducer;
export default sliderStore;
