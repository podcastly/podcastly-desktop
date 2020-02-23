import Api from '../../api'

console.log({ Api })

const state = {
  list: []
}

const mutations = {
  APPEND_LIST (state, payload) {
    state.list.push(...payload)
  }
}

const actions = {
  getList ({commit}) {
    const result = Api.Regions.getList()
    console.log({result})
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
