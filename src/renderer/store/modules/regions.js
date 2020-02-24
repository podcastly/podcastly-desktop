import Api from '../../api'

const state = {
  list: []
}

const mutations = {
  SET_LIST (state, payload) {
    state.list = payload
  }
}

const actions = {
  getList ({commit}) {
    const result = Api.Regions.getList()
    commit('SET_LIST', result)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
