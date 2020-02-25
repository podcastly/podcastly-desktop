const state = {
  list: []
}

const mutations = {
  add (state, entity) {
    state.list.push(entity)
  },
  remove (state, entity) {
    const index = state.list.findIndex(f => f.type === entity.type && f.id === entity.id)
    state.list.splice(index, 1)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
