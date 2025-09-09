import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://your-production-api.com'
      : 'http://localhost:3333',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for security
api.interceptors.request.use(
  (config) => {
    // Remove any potential sensitive headers in development
    if (process.env.NODE_ENV !== 'production') {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
