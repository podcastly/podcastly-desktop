/* eslint-disable */

import Api from '../../api'
import orderBy from 'lodash/orderBy'

const TYPE_PODCAST = 'podcasts'
const TYPE_COLLECTION = 'collections'

const state = {
  list: [],
  collections: [],
  single: null
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
  setList (state, payload) {
    state.list = payload
  },
  setCollectionItems (state, payload) {
    state.single = payload
  }
}

const actions = {
  async getCollectionItems({commit}, id) {
    const { data } = await Api.Exporer.getCollectionItem(id)
    commit('setCollectionItems', data.data)
  },
  async getList ({commit}, params = {}) {
    const { data } = await Api.Exporer.getList(params)
    commit('setList', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
