import Vue from 'vue'
import Vuex from 'vuex'
import shop from './modules/shop'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop,
    latitude: 115.950531,
    longitude: 28.549066,
  }
})
