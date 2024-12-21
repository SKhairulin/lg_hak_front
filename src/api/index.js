import axios from 'axios';
import { REACT_APP_API_URL } from '../config/consts';

export const $host = axios.create({
    baseURL:REACT_APP_API_URL
})

export const $authHost = axios.create({
    baseURL:REACT_APP_API_URL
})

const authIntercepor = config => {
    config.headers.authorization = `Bearer ${sessionStorage.getItem('accessToken')}`
    return config
}

$authHost.interceptors.request.use(authIntercepor);

