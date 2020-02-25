import Api from '../../api'

const state = {
  list: [],
  single: null,
  episodes: null
}

const mutations = {
  SET_SINGLE (state, single) {
    state.single = single
  },
  SET_EPISODES (state, episodes) {
    state.episodes = episodes
  }
}

const actions = {
  async getSingle ({commit}, id) {
    const {data} = await Api.Podcasts.getSingle(id)
    commit('SET_SINGLE', data)
    return data
  },
  async getEpisodes ({commit}, id) {
    const { data } = await Api.Podcasts.getEpisodes(id)
    commit('SET_EPISODES', data.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
