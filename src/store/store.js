import { configureStore } from '@reduxjs/toolkit';
import appearanceStore from './appearance';

export const store = configureStore({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    reducer: { appearanceStore }
});