import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Index.vue')
    },
    {
      path: '/making_order',
      name: 'making_order',
      component: () => import('../views/makingOrder.vue')
    }
  ]
})

export default router
