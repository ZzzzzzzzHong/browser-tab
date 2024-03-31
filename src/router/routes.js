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
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: BaseLayout,
    redirect: '/index/404',
    children: [
      {
        path: '404',
        component: () =>
          import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue')
      }
    ]
  }
]

export default routes
