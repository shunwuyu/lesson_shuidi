// 云函数入口文件
// 云sdk
const cloud = require('wx-server-sdk')
const got = require('got')
//初始化
cloud.init()

// 云函数入口函数
// async 表示异步 await 
// event 出事 小程序客户端 callFunction  event代表小程序
// context 上下文
exports.main = async (event, context) => {
  let getResponse = await got('httpbin.org/get')
  // console.log(getResponse, '+++++++++');
  let postResponse = await got('httpbin.org/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: '这是标题',
      value: 123
    })
  })
  return postResponse.body
}

// 1. tabbars iconfont
// 2. 首页的列表
//   2.1 切页面， 静态的
//     view.product-item
//     wx:for products
//     js  onload 
//     wx.cloud.callFunction({
//       name: 'getProducts'
//     })
//     .then(res => {
//       this.setData({
//         products: res.results
//       })
//     })