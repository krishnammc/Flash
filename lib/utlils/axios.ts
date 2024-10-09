/* import { API_BASE_URL } from '../app/app_constants';
import axios from 'axios'
import {  getAuthTokenFromSession } from './utill_methods';

const baseURL = API_BASE_URL;
const isServer = typeof window === 'undefined';

const axiosClient = axios.create({ baseURL })

axiosClient.interceptors.request.use(async config => {
    const alreadyHasToken = config.headers['authToken'] != null && config.headers['authToken'] != '';
    let token = null as string | null;

    if (isServer) {
        const { cookies } = (await import('next/headers'))
        token = cookies().get('auth_token')?.value ?? null;
    } else {
        token = getAuthTokenFromSession();
    }

    if (token && alreadyHasToken == false) {
        config.headers['authToken'] = token
    }

    return config
})

export default axiosClient; */
