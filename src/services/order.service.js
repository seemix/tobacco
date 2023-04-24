import axiosService from './axios.service';

export const orderService = {
    createOrder: (data) => axiosService.post('/order', data).then(value => value.data),
    getAllOrders: () => axiosService.get('/order').then(value => value.data)
};