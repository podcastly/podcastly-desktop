import Api from '../../api'

const state = {
  list: []
}

const mutations = {
  setList (state, payload) {
    state.list = payload.map(p => p.podcast)
  }
}

const actions = {
  async getList ({commit}) {
    const { data } = await Api.Subscribe.getList()
    commit('setList', data.data)
  },
  async subscribe ({dispatch}, pid) {
    try {
      await Api.Subscribe.subscribe(pid)
      dispatch('getList')
    } catch (e) {
      throw new Error(e)
    }
  },
  async unsubscribe ({dispatch}, pid) {
    try {
      await Api.Subscribe.unsubscribe(pid)
      dispatch('getList')
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
