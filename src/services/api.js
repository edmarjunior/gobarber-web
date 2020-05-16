import axios from 'axios';

console.tron.log(process.env.REACT_APP_URL_API);

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
});

export default api;
