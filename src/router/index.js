import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layout */
import Layout from '@/layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/introduce',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index'),
        name: '首页'
      },
      {
        path: 'category',
        component: () => import('@/views/category/index'),
        name: 'category'
      },
      {
        path: 'introduce',
        component: () => import('@/views/introduce/index'),
        name: 'introduce',
        meta: {
          title: 'milsevol运营系统'
        }
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
  {
    path: '/about1',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history', // 去掉url中的#
  routes
})

export default router
