import { createRouter, createWebHistory } from 'vue-router';
import store from "../store";
const token = () => {
  return store.state.user?.access_token;
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
          path: '/users',
          name:'users',
          beforeEnter: auth,
          component: ()=>import('../views/Users/users.vue'),
        },
        {
          path: '/projects',
          name:'projects',
          beforeEnter: auth,
          component: ()=>import('../views/Projects/projects.vue'),
        },
        {
          path:'/targets',
          name:'targets',
          beforeEnter: auth,
          component:()=> import('../views/Targetlar/targets.vue')
        },
        {
          path:'/setting',
          name:'setting',
          beforeEnter: auth,
          component:()=>import('../views/Setting/setting.vue')
        },
        {
          path:'/categorys',
          name:'categorys',
          beforeEnter: auth,
          component:()=>import('../views/Categorys/categorys.vue')
        }
      ],
    },
    {
      path:'/login',
      name:'login', 
      component : ()=>import('../components/Login/login.vue')
    }
  

  ]
})

export default router
