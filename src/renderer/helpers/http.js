import axios from 'axios'
import store from '../store'

const BASE_URL = 'https://api.pdcstly.com/v1'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use((config) => {
  const {token} = store.state.app
  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => Promise.reject(error))

export default instance
