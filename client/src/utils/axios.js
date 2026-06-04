import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://eventora-backend-clp8.onrender.com', // match your backend port
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default instance;
