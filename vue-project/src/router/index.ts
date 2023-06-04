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
      component: () => import('../views/MakingOrder.vue')
    },
    {
      path: '/product_card',
      name: 'product_card',
      component: () => import('../views/ProductCard.vue')
    }
  ]
})

export default router
