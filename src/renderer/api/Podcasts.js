import http from '../helpers/http'

const getSingle = (id) => {
  return http.get(`/podcast/${id}`)
}

const getEpisodes = ({id}) => {
  return http.get(`/podcast/${id}/episods`)
}

const getReactions = (id) => {
  return http.get(`/podcast/${id}/reactions`)
}

export default {
  getSingle,
  getEpisodes,
  getReactions
}
