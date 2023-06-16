import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../views/DemoView.vue')
  },
  {
    path: '/docs',
    name: 'docs',
    component: () => import('../views/DocsView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
