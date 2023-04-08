import { configureStore } from '@reduxjs/toolkit';
import appearanceStore from './appearance';
import categoryStore from './category';
import productStore from './product';
import authStore from './auth';

export const store = configureStore({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    reducer: { appearanceStore, categoryStore, productStore, authStore }
});