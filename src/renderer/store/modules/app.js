const state = {
  play: {},
  favorites: [],
  search: null,
  list: [],
  account: null,
  token: null,
  refreshToken: null
}

const mutations = {
  setPlay (state, {podcast, episod}) {
    state.play = {
      podcast,
      episod
    }
  },
  setAccount (state, payload) {
    state.account = payload
  },
  setTokens (state, {token, refreshToken}) {
    state.token = token
    state.refreshToken = refreshToken
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
