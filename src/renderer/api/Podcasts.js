import http from '../helpers/http'

const getSingle = (id) => {
  return http.get(`/podcast/${id}`)
}

const getEpisodes = ({id}) => {
  return http.get(`/podcast/${id}/episods`)
}

export default {
  getSingle,
  getEpisodes
}
