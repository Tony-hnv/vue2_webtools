import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { Alert, Button, Container, Input, Loading, Row, Col } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

Vue.use(Button)
Vue.use(Input)
Vue.use(Loading)
Vue.use(Container)
Vue.use(Alert)
Vue.use(Row)
Vue.use(Col)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
