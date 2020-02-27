import http from '../helpers/http'

const getList = (id) => {
  return http.get(`/episod/${id}/comments`)
}

const create = (body) => {
  return http.post(`/comment`, body)
}

export default {
  getList,
  create
}
