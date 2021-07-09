import Vue from 'vue'
import App from './App.vue'
import store from './store'
import echarts from 'echarts' // echarts
import './plugins/element.js' // 按需引入的elementui
import './assets/css/base.css' // 基本通用样式
import './assets/css/pluginbase.css' // 自定义的通用样式
import 'default-passive-events'
import dataV from '@jiaminghi/data-view' // dataV可视化插件
import scroll from 'vue-seamless-scroll' // 无缝滚动插件
import animated from 'animate.css' // animate.css插件
import router from './router'
Vue.use(animated)
Vue.prototype.$echarts = echarts
Vue.use(dataV)
Vue.use(scroll)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
