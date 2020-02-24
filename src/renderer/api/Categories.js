import http from '../helpers/http'

const getList = (q) => {
  return http.get(`/category/all`)
}

export default {
  getList
}
