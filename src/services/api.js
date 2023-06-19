import axios from 'axios';

const api = axios.create({
    baseURL: 'https://almox-control-server.onrender.com',
});

export default api;