import axiosService from './axios.service';

export const sliderService = {
    getAllSlides: () => axiosService.get('/slider').then(value => value.data),
    createSlide: (data) => axiosService.post('/slider', data).then(value => value.data),
    saveOrder: (data) => axiosService.patch('/slider', data).then(value => value.data)
}