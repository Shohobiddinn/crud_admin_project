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
          name: 'users',
          beforeEnter: auth,
          component: () => import('../views/Users/users.vue'),
        },
        {
          path: '/projects',
          name: 'projects',
          beforeEnter: auth,
          component: () => import('../views/Projects/projects.vue'),
          children: [
            {
              path: '/project_item',
              name: "project_item",
              beforeEnter: auth,
              component: () => import('../views/Projects/project_item.vue')

            },
            {
              path:'/home',
              name:'home',
              beforeEnter:auth,
              component:() => import('../views/Projects/home.vue')
            },
            {
              path:'/about',
              name:'about',
              beforeEnter:auth,
              component:() => import('../views/Projects/about.vue')
            },
            {
              path:'/videos',
              name:'videos',
              beforeEnter:auth,
              component:() => import('../views/Projects/videos.vue')
            },
            {
              path:'/faq',
              name:'faq',
              beforeEnter:auth,
              component:() => import('../views/Projects/faq.vue')
            },
            {
              path:'/connection',
              name:'connection',
              beforeEnter:auth,
              component:() => import('../views/Projects/connection.vue')
            },
          ]
        },

        {
          path: '/targets',
          name: 'targets',
          beforeEnter: auth,
          component: () => import('../views/Targetlar/targets.vue')
        },
        {
          path: '/files',
          name: 'file',
          beforeEnter: auth,
          component: () => import('../views/File/files.vue')
        },
        {
          path: '/categorys',
          name: 'categorys',
          beforeEnter: auth,
          component: () => import('../views/Categorys/categorys.vue'),
          children: [
            {
              path: "/category_item/:id",
              name: "category_item",
              beforeEnter: auth,
              component: () => import("../views/Categorys/category_item.vue")
            }
          ]
        }
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login/login.vue')
    }


  ]
})

export default router
