import Api from '../../api'

const state = {
  list: [],
  single: null,
  episodes: null,
  reactions: []
}

const mutations = {
  setSingle (state, single) {
    state.single = single
  },
  setEpisodes (state, episodes) {
    state.episodes = episodes
  },
  setReactions (state, payload) {
    state.reactions = payload.reactions
  },
  updateReactions (state, payload) {
    const index = state.episodes.findIndex(e => e.id === payload.id)
    state.episodes[index].reactions = payload.reactions
  }
}

const actions = {
  async getSingle ({commit}, id) {
    const {data} = await Api.Podcasts.getSingle(id)
    commit('setSingle', data)
    return data
  },
  async getEpisodes ({commit}, id) {
    const {data} = await Api.Podcasts.getEpisodes(id)
    commit('setEpisodes', data.data)
  },
  async getReactions ({commit}, id) {
    const {data} = await Api.Podcasts.getReactions(id)
    commit('setReactions', data.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
