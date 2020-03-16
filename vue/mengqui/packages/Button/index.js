import XButton from './src'
// 可以被npm install 肯有一个install 
// Vue.use()
XButton.install = function(Vue) {
  Vue.component(XButton.name, XButton)
}
export default XButton