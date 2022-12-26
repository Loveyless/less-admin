import type { AxiosInstance } from 'axios'
import axios from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: 'localhost:3000',
  timeout: 1000,
})

export default instance
