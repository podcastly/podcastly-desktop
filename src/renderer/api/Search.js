import http from '../helpers/http'

const getList = (q) => {
  return http.get(`/search/podcast`, {params: {q}})
}

export default {
  getList
}
