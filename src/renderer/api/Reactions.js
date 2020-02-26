import http from '../helpers/http'

const react = ({id, reaction}) => {
  return http.put(`/episod/${id}/action/react`, {reaction})
}

const unreact = (id) => {
  return http.put(`/episod/${id}/action/unreact`)
}

export default {
  react,
  unreact
}
