import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from '@/components/Index';
// 熟悉的， 延迟加载组件  加载所有组件， 45页面 花大量 优化
import Home from '../views/Home.vue'
// 用户切换路由， 再来加载，并显示   返回组件的函数
// 函数就是组件  require引入模块   @?
// const GoodsList = resolve => require(['@/components/GoodsList'], resolve);

// 1. 从路由， 看出来作者的网站的路由设计
//   组件， 父子组件， 少量路由，   格局
//   纵观路由， 得到项目的站点地图 架构建立
// 2. 知识点

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // 商品列表
  {
    path: '/goodsList',
    name: 'GoodsList',
    component: () => import(/* webpackChunkName: "about" */ '../components/GoodsList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
