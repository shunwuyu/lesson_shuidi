三生三世 vue 全栈开发

有些奇怪的地方 跨项目  
1. 用户名， 密码 node 做
  后台(user_name, password 8080 
  vue.config.js proxy ) ->   node  
  (3000   model  routes, controller )
  status api 开发经验 约定好数据接口
  {
    status: 1|0 ,  1用户名密码正确  0  有误
    message: '用户名和密码有误|500'
  }     url(可以变)  data（不变）   response(约定)
  mock.js  张  没有后端的支持， 可以模拟一下数据

alias webpack.config.js vue-cli2.0  build 
@   src/
~   assets/
作业：vue-cli3.0 配置alias

1. 代友的封装  
  admin 模块化  vue   export default { } + import from
  main.js  es6 模块化 
  api   require('')+ module.exports common.js
  模块化 穿越了
  - 为什么？  vue es6 单页应用， 前端， babel+webpack 前味
    node 后端，稳定为主 版本更新没那快 common.js (原生)
  - 有可能统一一下吗？
    ? 可以的  向先进的一方靠扰 

- 三个项目  
  项目要上线， 服务器 是怎么一个方式
  build -> dist -> express, static

  ele  dist/   web/  
  ele-admin  dist/  admin/
  一定是在node项目中 api 
  express static

web 将做为项目的  /
admin  后台   /admin
api  服务  没有页面  
localhost:3000/ 才是所有人（用户|编辑）统一入口
localhost:3000/   web   前台
localhost:3000/admin 
localhost:3000/api/admin/login 


