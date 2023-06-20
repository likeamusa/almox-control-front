import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://almox-control-server.onrender.com'}`,
});

export default api;