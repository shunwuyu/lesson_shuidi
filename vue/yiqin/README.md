# 疫情vue 

- vue-cli 有别于vue
  vue 全家桶开发的这样的一个命令行工具
  1. vue 全家桶  vue 框架， 周边有一些工具
    vue-cli 用来开发单页应用的命令工具
    /url变化， 显示不同的内容
  2. 组件化思维开发页面， 
  main.js 入口 -> App.vue 根组件-> 挂载其它组件
  #app 在哪呢？
    public/index.html 首页模板
    main.js  vue 去接管， App.vue....组件-> js
    塞到index.html后面  script 

-  main.js 入口  new Vue()
-  VueRouter 补全Vue 全态， router的职责
- App.vue 根组件
- 单页面 <router-view /> 全局组件 Vue.use(VueRouter)全局启用