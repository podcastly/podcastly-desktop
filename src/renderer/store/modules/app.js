const state = {
  play: {}
}

const mutations = {
  SET_PLAY (state, { podcast, episod }) {
    state.play = {
      podcast,
      episod
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
