import Api from '../../api'

const state = {
  query: null,
  page: null,
  list: []
}

const mutations = {
  setList (state, payload) {
    state.list = payload
  },
  setQuery (state, query = null) {
    state.query = query
  }
}

const actions = {
  async getList ({commit}, query = {}) {
    const { data } = await Api.Search.getList(query)
    commit('setList', data.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
