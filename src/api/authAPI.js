import { $authHost, $host } from '../api/index';
import { jwtDecode } from 'jwt-decode';

export const login = async (json) => {
    const { data } = await $host.post('api/auth/token/', json,{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    sessionStorage.setItem('accessToken', data.access_token)
    return jwtDecode(data.access_token)
}

export const reg = async (json) => {
    const { data } = await $host.post('api/auth/register/', json)
    return data
}