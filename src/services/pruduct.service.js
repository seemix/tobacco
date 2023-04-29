import axiosService from './axios.service';

export const productService = {
    getByCategory: (categoryId) => axiosService.get(`/product/?category=${categoryId}`).then(value => value.data),
    getById: (id) => axiosService.get('/product/'+id).then(value => value.data),
    getNewProducts: () => axiosService.get('/product/new/get').then(value => value.data),
    createProduct: (data) => axiosService.post('/product', data).then(value => value.data),
    deleteImage: (fileName) => axiosService.patch('/product/image/' + fileName).then(value => value.data),
    updateProduct: (data) => axiosService.put('/product', data).then(value => value.data),
    deleteProduct: (data) => axiosService.delete(`/product/?id=${data.id}&fileName=${data.fileName}`)
};