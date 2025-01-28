import axios from 'axios';
import keycloak from './keycloak';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

api.interceptors.request.use(
    async config => {
        const token = await keycloak.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

export default api;
