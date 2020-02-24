
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
  addToFavorites (state, entity) {
    state.favorites.push(entity)
  },
  removeFromFavorites (state, entity) {
    const index = state.favorites.findIndex(f => f.type === entity.type && f.id === entity.id)
    state.favorites.splice(index, 1)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
