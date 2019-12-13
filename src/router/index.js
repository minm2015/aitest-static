import Vue from 'vue'
import Router from 'vue-router'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    name: "index",
    path: '/',
    component: Layout,
    redirect: 'welcome',
    children: [
      {
        name: "welcome",
        path: "welcome",
        component: () => import('@/views/welcome/index'),
        meta: { title: '首页' }
      },
      {
        name: "test",
        path: "test",
        component: () => import('@/views/test/index'),
        meta: { title: '测试' },
        children: [
          {
            name: 'module',
            path: 'module',
            component: () => import('@/views/test/views/module/index'),
            meta: { title: '组件' }
          }
        ]
      }
    ]
  },
  {
    name: 'Login',
    path: '/login'
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
