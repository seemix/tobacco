import axios from 'axios';
import { config } from '../config/config';

const axiosService = axios.create({ baseURL: config.BACKEND_URL });

export default axiosService;