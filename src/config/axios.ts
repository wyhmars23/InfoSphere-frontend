import axios from 'axios';
import type { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

// 扩展 AxiosInstance 类型，添加 requestMethod 方法
declare module 'axios' {
  interface AxiosInstance {
    requestMethod<T>(
      method: HttpMethod,
      url: string,
      data?: unknown,
      config?: AxiosRequestConfig
    ): Promise<T>;
  }
}

// 支持的 HTTP 方法类型
type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

// 创建 axios 实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://47.102.102.119:8000', // 基础 URL
  timeout: 100000, // 请求超时时间
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('请求拦截器 - 请求配置:', config); // 打印请求配置
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // 添加 Authorization 头
    }
    return config;
  },
  (error) => {
    console.error('请求拦截器 - 错误:', error); // 打印请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  <T>(response: AxiosResponse<T>) => {
    console.log('响应拦截器 - 响应数据:', response); // 打印响应数据
    return response; // 直接返回 response
  },
  (error) => {
    if (error.response) {
      // 根据状态码分类处理
      switch (error.response.status) {
        case 401:
          console.error('身份验证失败，请重新登录');
          break;
        case 404:
          console.error('请求的资源不存在');
          break;
        case 500:
          console.error('服务器内部错误');
          break;
        default:
          console.error('请求失败:', error.response.data);
      }
    } else if (error.request) {
      console.error('网络错误，请检查网络连接');
    } else {
      console.error('请求配置错误:', error.message);
    }
    return Promise.reject(error);
  }
);

// 封装不同的 HTTP 请求方法
axiosInstance.requestMethod = function <T>(
  method: HttpMethod,
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  // 处理 URL，确保如果传入的是完整 URL，则不拼接 baseURL
  const fullUrl = new URL(url, this.defaults.baseURL).toString();
  console.log(`请求方法: ${method}, 完整 URL: ${fullUrl}`); // 打印请求方法和 URL

  return this[method]<T>(fullUrl, data, config)
    .then((res) => {
      console.log('请求成功，响应数据:', res.data); // 打印响应数据
      return res.data; // 返回 response.data
    })
    .catch((error) => {
      console.error('请求失败:', error); // 打印请求错误
      throw error;
    });
};

// 导出实例
export default axiosInstance;
