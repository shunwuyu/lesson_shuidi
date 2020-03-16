import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 大型项目中， 慎重其事的做这件事 rem是第一项
import './config/rem'
import mengqui from '@shunwuyu/mengqui';
import '@shunwuyu/mengqui/lib/mengqui.css';
Vue.use(mengqui);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')