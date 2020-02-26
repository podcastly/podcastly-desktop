import Api from '../../api'

const state = {
  list: []
}

const actions = {
  async react ({dispatch}, { id, reaction }) {
    try {
      await Api.Reactions.react({ id, reaction })
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
