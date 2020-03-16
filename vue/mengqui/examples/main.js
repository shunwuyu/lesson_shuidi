import Vue from 'vue'
import App from './App.vue'
import mengqui from '../packages'
Vue.use(mengqui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
