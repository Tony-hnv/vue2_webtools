import Vue from 'vue'
import VueRouter from 'vue-router'
// import Wether from '../views/weather.vue'
// import About from '../views/About.vue'
// import Wyy from '../views/Wyy.vue'
// import Notfound from '../views/404.vue'
import Index from '../views/index.vue'
// import Bilibili from '../views/Bilibili.vue'
// import Telnumber from '../views/Telnumber.vue'
// import History from '../views/History.vue'
// import MarkDown from '../views/MdNotebook.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/index'
  }, {
    path: '/index',
    name: 'index',
    component: Index
  }, {
    path: '/wether',
    name: 'Wether',
    component: () => import('../views/weather.vue')
  }, {
    path: '/md',
    name: 'MarkDown',
    component: () => import('../views/MdNotebook.vue')
  }, {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }, {
    path: '/wyy',
    name: 'Wyy',
    component: () => import('../views/Wyy.vue')
  }, {
    path: '/bilibili',
    name: 'Bilibili',
    component: () => import('../views/Bilibili.vue')
  }, {
    path: '/telnumber',
    name: 'Telnumber',
    component: () => import('../views/Telnumber.vue')
  }, {
    path: '/history',
    name: 'History',
    component: () => import('../views/History.vue')
  }, {
    path: '*',
    name: 'Notfound',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
