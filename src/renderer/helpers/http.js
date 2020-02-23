import axios from 'axios'

const BASE_URL = 'https://api.pdcstly.com/v1'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default instance
