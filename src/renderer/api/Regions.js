import http from '../helpers/http'

const getList = () => {
  return http.get(`/region`)
}

export default {
  getList
}
