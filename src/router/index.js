import { createRouter, createWebHistory } from 'vue-router'
const token = () => {
  return localStorage.getItem('access_token');
};

const auth = (to, from, next) => {
  if (!token()) {
    next({ path: "/login" });
    return;
  }
  next();
  return;
};
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
      beforeEnter: auth,
      component: () => import('../layouts/default.vue'),
   
      children: [
        {
          path: '/home',
          name:'home',
          beforeEnter: auth,
          component: ()=>import('../views/Home/home.vue'),
        },
        {
          path: '/project',
          name:'user',
          beforeEnter: auth,
          component: ()=>import('../views/Users/users.vue'),
        },
        {
          path:'/target',
          name:'target',
          beforeEnter: auth,
          component:()=> import('../views/Targetlar/target.vue')
        },
        {
          path:'/setting',
          name:'setting',
          beforeEnter: auth,
          component:()=>import('../views/Setting/setting.vue')
        }
      ],
    },
    {
      path: '/',
      name: 'users',
      beforeEnter: auth,
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
