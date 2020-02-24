import http from '../helpers/http'
import LOCALES from '../enums/locales'

const getList = ({locale = LOCALES.RU}) => {
  return http.get(`/explorer/${locale}`)
}

const getSearch = (q) => {
  return http.get(`/search/podcast`, {params: {q}})
}

export default {
  getList,
  getSearch
}
