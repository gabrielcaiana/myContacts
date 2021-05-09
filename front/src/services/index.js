import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.NODE_ENV === 'production' ? "" : 'http://localhost:3333',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});

export default apiClient
