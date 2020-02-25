import Vue from 'vue'
import Router from 'vue-router'
import ROUTES from '../enums/routes'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      component: () => import('@/layouts/Default'),
      children: [
        {
          path: '/',
          name: ROUTES.WELCOME,
          component: () => import('@/pages/Welcome')
        },
        {
          path: '/account',
          name: ROUTES.ACCOUNT,
          component: () => import('@/pages/Account')
        },
        {
          path: '/subscriptions',
          name: ROUTES.FAVORITES,
          component: () => import('@/pages/subscriptions/Index')
        },
        {
          path: '/collection/:id',
          name: ROUTES.COLLECTION,
          component: () => import('@/pages/Collection'),
          props: true
        },
        {
          path: '/podcasts/:id',
          name: ROUTES.PODCASTS.VIEW,
          component: () => import('@/pages/podcasts/View'),
          props: true
        }
        // {
        //   path: '*',
        //   redirect: {name: ROUTES.WELCOME}
        // }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log({ to })
  next()
})
export default router
