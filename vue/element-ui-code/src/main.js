import Vue from 'vue'
import App from './App.vue'
// import ElmentUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 不写css 专注vue 
Vue.config.productionTip = false
// Vue.use(ElmentUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
