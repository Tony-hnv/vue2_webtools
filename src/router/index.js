import Vue from 'vue'
import VueRouter from 'vue-router'
import Wether from '../views/weather.vue'
import About from '../views/About.vue'
import Wyy from '../views/Wyy.vue'
import Notfound from '../views/404.vue'
import index from '../views/index.vue'
import Bilibili from '../views/Bilibili.vue'
import Telnumber from '../views/Telnumber.vue'
import History from '../views/History.vue'
import MarkDown from '../views/MdNotebook.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/index'
  }, {
    path: '/index',
    name: 'index',
    component: index
  }, {
    path: '/wether',
    name: 'Wether',
    component: Wether
  }, {
    path: '/md',
    name: 'MarkDown',
    component: MarkDown
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/wyy',
    name: 'Wyy',
    component: Wyy
  }, {
    path: '/bilibili',
    name: 'Bilibili',
    component: Bilibili
  }, {
    path: '/telnumber',
    name: 'Telnumber',
    component: Telnumber
  }, {
    path: '/history',
    name: 'History',
    component: History
  }, {
    path: '*',
    name: 'Notfound',
    component: Notfound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
