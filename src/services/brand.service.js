import axiosService from './axios.service';

export const brandService = {
    getBrandsByCategory: (category) => axiosService.get(`/brand/${category}`).then(value => value.data)
}