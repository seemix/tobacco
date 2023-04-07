import axiosService from './axios.service';

export const productService = {
    getByCategory: (categoryId) => axiosService.get(`/product/?category=${categoryId}`).then(value => value.data)
};