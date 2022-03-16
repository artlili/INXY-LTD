import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'news',
    component: () => import('../views/News.vue')
  },
  {
    path: '/new/:id',
    name: 'single-new',
    component: () => import('../views/SingleNew.vue') },
  {
    path: '/portal',
    name: 'portal',
    component: () => import('../views/Portal.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
