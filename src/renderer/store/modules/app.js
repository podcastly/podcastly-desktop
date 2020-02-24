import Api from '../../api'

const state = {
  play: {},
  favorites: [],
  search: null,
  list: []
}

const mutations = {
  setPlay (state, {podcast, episod}) {
    state.play = {
      podcast,
      episod
    }
  },
  setList (state, payload) {
    state.list = payload
  },
  setSearch (state, payload = null) {
    state.search = payload
  },
  resetSearch (state) {
    state.search = null
  },
  addToFavorites (state, entity) {
    state.favorites.push(entity)
  },
  removeFromFavorites (state, entity) {
    const index = state.favorites.findIndex(f => f.type === entity.type && f.id === entity.id)
    state.favorites.splice(index, 1)
  }
}

const actions = {
  async getSearch ({commit}, query = {}) {
    const { data } = await Api.Exporer.getSearch(query)
    commit('setList', data.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
