import { createSlice } from '@reduxjs/toolkit';

export const appearanceSlice = createSlice({
    name: 'appearanceSlice',
    initialState: {
        openedMenu: false,
        showElement: false,
        language: 'EN',
        filteredLang: ['DK', 'RU'],
        languages: ['EN', 'DK', 'RU'],
        cart: false,
        categoryEditModal: false,
        productFormModal: false
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
        },
        showCart(state) {
            state.cart = (!state.cart);
        },
        hideCart(state) {
            state.cart = false;
        },
        showCategoryEdit(state) {
            state.categoryEditModal = true;
        },
        hideCategoryEdit(state) {
            state.categoryEditModal = false;
        },
        showProductForm(state) {
            state.productFormModal = true;
        },
        hideProductForm(state) {
            state.productFormModal = false;
        }
    }
});
export const {
    openMenu,
    closeMenu,
    hideItem,
    showHideItem,
    setLanguage,
    showCart,
    hideCart,
    showCategoryEdit,
    hideCategoryEdit,
    showProductForm,
    hideProductForm
} = appearanceSlice.actions;
export const appearanceStore = appearanceSlice.reducer;
export default appearanceStore;