import axios from 'axios';
import type { AxiosInstance, AxiosResponse,AxiosRequestConfig } from 'axios';

// 扩展 AxiosInstance 类型，添加 requestMethod 方法
declare module 'axios' {
  interface AxiosInstance {
    requestMethod<T>(
      method: 'get' | 'post' | 'put' | 'delete',
      url: string,
      data?: unknown,
      config?: AxiosRequestConfig
    ): Promise<T>;
  }
}

// 创建 axios 实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  <T>(response: AxiosResponse<T>) => response.data,
  (error) => {
    if (error.response) {
      console.error('Response error:', error.response);
    } else {
      console.error('Request error:', error.message);
    }
    return Promise.reject(error);
  }
);

// 封装不同的 HTTP 请求方法
axiosInstance.requestMethod = function <T>(
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  switch (method) {
    case 'get':
      return this.get<T>(url, config).then(response => response.data); // 直接返回 response.data
    case 'post':
      return this.post<T>(url, data, config).then(response => response.data); // 直接返回 response.data
    case 'put':
      return this.put<T>(url, data, config).then(response => response.data); // 直接返回 response.data
    case 'delete':
      return this.delete<T>(url, config).then(response => response.data); // 直接返回 response.data
    default:
      throw new Error('Unsupported HTTP method');
  }
};

// 导出实例
export default axiosInstance;
