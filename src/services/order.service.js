import axiosService from './axios.service';

export const orderService = {
    createOrder: (data) => axiosService.post('/order', data).then(value => value.data),
    getAllOrders: (params) => axiosService.get(`/order?page=${params.page}`).then(value => value.data),
    setCompleted: (data) => axiosService.patch('/order', data).then(value => value.data)
};