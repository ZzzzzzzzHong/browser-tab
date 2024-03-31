import BaseLayout from '../views/layout/Layout.vue'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  // 主页
  {
    path: '/index',
    name: 'Index',
    redirect: '/index/home',
    component: BaseLayout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () =>
          import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
      }
    ]
  }
]

export default routes
