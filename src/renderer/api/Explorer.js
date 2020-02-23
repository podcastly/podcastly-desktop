import http from '../helpers/http'
import LOCALES from '../enums/locales'

const getList = ({locale = LOCALES.RU}) => {
  return http.get(`/explorer/${locale}`)
}

export default {
  getList
}
