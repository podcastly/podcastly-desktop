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
  async getList ({commit}, id) {
    const { data } = await Api.Comments.getList(id)
    commit('setList', data.data)
  },
  async create ({commit}, body) {
    await Api.Comments.create(body)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
