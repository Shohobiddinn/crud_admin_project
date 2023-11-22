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
      name: 'default',
      component: () => import('../layouts/default.vue'),
   
      children: [
        {
          path: '/home',
          name:'home',
          component: ()=>import('../views/Home/home.vue'),
        },
        {
          path: '/project',
          name:'user',
          component: ()=>import('../views/Users/users.vue'),
        },
      ],
    },
    {
      path: '/',
      name: 'users',
      component: () => import('../views/Users/users.vue')
    },
    {
      path:'/login',
      name:'login',
      component : ()=>import('../components/Login/login.vue')
    }
  

  ]
})

export default router
