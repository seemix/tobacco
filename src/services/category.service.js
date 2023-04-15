import axiosService from './axios.service';

export const categoryService = {
    getAll: axiosService.get('/category').then(value => value.data),
    createCategory: (data) => axiosService.post('/category', data).then(value => value.data),
    updateCategory: (data) => axiosService.put('/category', data).then(value => value.data),
    saveOrder: (data) => axiosService.patch('/category', data).then(value => value.data)
}