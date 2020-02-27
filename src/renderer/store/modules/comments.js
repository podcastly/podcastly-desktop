import Api from '../../api'

const state = {
  comments: {}
}

const mutations = {
  setComments (state, {id, comments}) {
    state.comments[id] = comments
  }
}

const getters = {
  list (state) {
    return id => state.comments[id] || []
  }
}

const actions = {
  async getList ({commit}, id) {
    const {data} = await Api.Comments.getList(id)
    commit('setComments', {id, comments: data.data})
  },
  async create ({commit}, body) {
    await Api.Comments.create(body)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
