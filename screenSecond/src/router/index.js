import Vue from 'vue'
import Router from 'vue-router'
// 利用异步组件, 可以将每个组件打包成一个单独的文件, 在需要的时候, 加载(按需加载)
const Index = () => import(/* webpackChunkName: 'index' */ '../layout/Main')
const GSPart = () => import(/* webpackChunkName: 'index' */ '../views/GSPart/Index.vue')
const DataMerger = () => import(/* webpackChunkName: 'index' */ '../views/DataMerger/Index.vue')
const DataShare = () => import(/* webpackChunkName: 'index' */'../views/DataShare/Index.vue')
const other = () => import(/* webpackChunkName: 'index' */ '../views/DevelopPage.vue')
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 命名路由: 给路由起了一个名字
// 只要起了名字, 也可以通过名字的方式, 切换路由
// this.$router.push(路径)
// this.$router.push({ name: 路由的名字 })
const router = new Router({
  routes: [{
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    redirect: '/GSPart',
    children: [{
      path: '/GSPart',
      name: 'GSPart',
      component: GSPart,
    }, {
      path: '/DataMerger',
      name: 'DataMerger',
      component: DataMerger,
    }, {
      path: '/DataShare',
      name: 'DataShare',
      component: DataShare,
    }, {
      path: '/other',
      name: 'other',
      component: other,
    }],
  },
  ],
})

// to 到哪去
// from 从哪来
// next() 放行, next(路径) 拦截到对应的路径  next('/login')
// 如果有token, 认为已登录, 放行, 或者 当前去的就是 login, 也放行 next()
// 如果没有token, 肯定没登陆, 直接拦截
// router.beforeEach((to, from, next) => {
//   console.log(to)
// })
export default router
