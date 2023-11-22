import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../components/NotFound/notFound.vue'),
    },
    {
      path: '/jj',
      name: 'home',
      component: () => import('../views/Home/home.vue')
    },
    {
      path: '/',
      name: 'users',
      component: () => import('../views/Users/users.vue')
    },
  

  ]
})

export default router
