import Api from '../../api'

const state = {
  list: []
}

const actions = {
  async react ({commit}, { id, reaction }) {
    try {
      const { data } = await Api.Reactions.react({ id, reaction })
      commit('podcasts/updateReactions', data, { root: true })
    } catch (e) {
      throw new Error(e)
    }
  },
  async unreact ({dispatch}, id) {
    try {
      await Api.Reactions.unreact(id)
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default {
  namespaced: true,
  state,
  actions
}
