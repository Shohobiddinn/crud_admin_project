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
      path: '/',
      name: 'home',
      component: () => import('../views/Home/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About/about.vue')
    },
  

  ]
})

export default router
