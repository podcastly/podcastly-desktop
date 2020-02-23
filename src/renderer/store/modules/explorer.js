/* eslint-disable */

import Api from '../../api'
import orderBy from 'lodash/orderBy'

const TYPE_PODCAST = 'podcasts'
const TYPE_COLLECTION = 'collections'

const state = {
  list: [],
  collections: []
}

const getters = {
  podcasts: (state) => {
    return state.list.filter( i => i.type === TYPE_PODCAST)
  },
  collections: (state) => {
    const result = state.list.filter( i => i.type === TYPE_COLLECTION)
    return orderBy(result, 'order')
  }
}

const mutations = {
  SET_LIST (state, payload) {
    state.list = payload
  }
}

const actions = {
  async getList ({commit}, params = {}) {
    const { data } = await Api.Exporer.getList(params)
    commit('SET_LIST', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
