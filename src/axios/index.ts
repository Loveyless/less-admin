import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import instance from './axios'
// 拦截
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 打印请求
    console.log('-------------------')
    console.log('地址', config.method, config.url)
    console.log('请求头', config.headers)
    console.log('请求参数', config.data)

    return { ...config }
  },
  (err: AxiosError) => {
    return Promise.reject(err)
  },
)

// 响应
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (err: AxiosError) => {
    return Promise.reject(err)
  },
)

export default instance
