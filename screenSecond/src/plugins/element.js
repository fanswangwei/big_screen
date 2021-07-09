import Vue from 'vue'
import {
  Tabs,
  Loading,
} from 'element-ui'

Vue.use(Tabs)
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
