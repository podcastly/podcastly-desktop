import http from '../helpers/http'

const getList = () => {
  return http.get(`/account/self/subscriptions`)
}

const subscribe = (pid) => {
  return http.put(`/podcast/${pid}/action/subscribe`)
}

const unsubscribe = (pid) => {
  return http.put(`/podcast/${pid}/action/unsubscribe`)
}

export default {
  subscribe,
  unsubscribe,
  getList
}
