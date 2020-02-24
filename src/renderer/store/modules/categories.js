import Api from '../../api'

const state = {
  list: []
}

const mutations = {
  setList (state, payload) {
    state.list = payload
  }
}

const actions = {
  async getList ({commit}) {
    const { data } = await Api.Categories.getList()
    commit('setList', data.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
