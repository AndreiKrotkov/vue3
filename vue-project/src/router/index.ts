import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/Auth.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Index.vue')
    },
    {
      path: '/chats',
      name: 'chats',
      component: () => import('../views/chats.vue')
    },
    {
      path: '/denunciations',
      name: 'denunciations',
      component: () => import('../views/denunciations.vue')
    },
    {
      path: '/bots',
      name: 'bots',
      component: () => import('../views/bots.vue')
    }
  ]
})

export default router
