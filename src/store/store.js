import { configureStore } from '@reduxjs/toolkit';
import appearanceStore from './appearance';
import categoryStore from './category';
import productStore from './product';
import authStore from './auth';
import orderStore from './order';
import searchStore from './search';
import sliderStore from './slider';

export const store = configureStore({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    reducer: { appearanceStore, categoryStore, sliderStore, productStore, authStore, orderStore, searchStore }
});