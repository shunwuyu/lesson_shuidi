// const shop =  require('../../api/shop')
import shop from '../../api/shop'
const state = {
  shops: []
}

const mutations = {
  setShops (state, shops) {
    state.shops = shops
  },
}

const actions = {
  getAllShops ({ commit }) {
    // console.log('----')
    // console.log(pos);
    shop.getShops(shops => {
      // console.log(shops);
      commit('setShops', shops);
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}