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
          path: '/favorites',
          name: ROUTES.FAVORITES,
          component: () => import('@/pages/Favorites')
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
