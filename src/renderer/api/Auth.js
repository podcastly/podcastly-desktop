import http from '../helpers/http'

const getToken = (body) => {
  return http.post(`/token`, body)
}
const signup = (body) => {
  return http.post(`/account`, body)
}

export default {
  getToken,
  signup
}
