import Vue from 'vue'
import Router from 'vue-router'
import ROUTES from '../enums/routes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      meta: {requireAuth: true},
      props: true,
      component: () => import('@/layouts/Default'),
      children: [
        {
          path: '/',
          name: ROUTES.WELCOME,
          component: () => import('@/pages/Welcome')
        },
        {
          path: '/podcasts/:id',
          name: ROUTES.PODCASTS.VIEW,
          component: () => import('@/pages/podcasts/View'),
          props: true
        },
        {
          path: '*',
          redirect: {name: ROUTES.WELCOME}
        }
      ]
    }
  ]
})
