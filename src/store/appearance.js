import { createSlice } from '@reduxjs/toolkit';

export const appearanceSlice = createSlice({
    name: 'appearanceSlice',
    initialState: {
        openedMenu: false,
        showElement: false,
        language: 'EN',
        filteredLang: ['DK', 'RU'],
        languages: ['EN', 'DK', 'RU']
    },
    reducers: {
        showHideItem(state) {
            state.showElement = !state.showElement;
        },
        hideItem(state) {
            state.showElement = false;
        },
        setLanguage(state, action) {
            state.language = action.payload;
            state.filteredLang = state.languages.filter(item => item !== action.payload);
        },
        openMenu(state) {
            state.openedMenu = true;
        },
        closeMenu(state) {
            state.openedMenu = false;
        }
    }
});
export const { openMenu, closeMenu, hideItem, showHideItem, setLanguage } = appearanceSlice.actions;
export const appearanceStore = appearanceSlice.reducer;
export default appearanceStore;