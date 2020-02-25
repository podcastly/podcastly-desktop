import http from '../helpers/http'
import LOCALES from '../enums/locales'

const getList = ({locale = LOCALES.RU}) => {
  return http.get(`/explorer/${locale}`)
}

const getSearch = (q) => {
  return http.get(`/search/podcast`, {params: {q}})
}

const getCollection = (id) => {
  return http.get(`/collection/${id}`)
}

const getCollectionItem = (id) => {
  return http.get(`/explorer/collection/${id}`)
}

export default {
  getList,
  getSearch,
  getCollection,
  getCollectionItem
}
