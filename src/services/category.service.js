import axiosService from './axios.service';

export const categoryService = {
    getAll: axiosService.get('/category').then(value => value.data)
}